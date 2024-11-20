import { Injectable } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { Firestore, collection, collectionData, getDocs, query, where } from '@angular/fire/firestore';
import { catchError, forkJoin, map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformesService {

  constructor(private firestore: Firestore) { }

  getLogins(): Observable<any[]> {
    const loginsCollection = collection(this.firestore, 'logins');
    return collectionData(loginsCollection, { idField: 'id' });
  }
  getTurnosPorEspecialidad(): Observable<{ especialidad: string, cantidadTurnos: number }[]> {
    // Obtener la colección de especialidades y turnos
    const especialidadesCollection = collection(this.firestore, 'especialidades');
    const turnosCollection = collection(this.firestore, 'Turnos');

    // Obtener las especialidades
    return new Observable<{ especialidad: string, cantidadTurnos: number }[]>((observer) => {
      console.log('Obteniendo especialidades...');
      
      getDocs(especialidadesCollection).then((especialidadesSnapshot) => {
        const especialidades: { nombre: string }[] = [];
        
        especialidadesSnapshot.forEach((doc) => {
          const especialidad = doc.data() as { nombre: string };
          especialidades.push(especialidad);
          console.log('Especialidad encontrada:', especialidad.nombre);
        });

        console.log('Total de especialidades:', especialidades.length);

        // Para cada especialidad, obtener la cantidad de turnos
        const turnosPorEspecialidad: { especialidad: string, cantidadTurnos: number }[] = [];

        const specialitiesCountPromises = especialidades.map((especialidad) => {
          const turnosQuery = query(turnosCollection, where('especialidad', '==', especialidad.nombre));
          console.log('Consultando turnos para especialidad:', especialidad.nombre);

          return getDocs(turnosQuery).then((turnosSnapshot) => {
            const cantidadTurnos = turnosSnapshot.size;
            console.log(`Cantidad de turnos para ${especialidad.nombre}:`, cantidadTurnos);

            turnosPorEspecialidad.push({
              especialidad: especialidad.nombre,
              cantidadTurnos: cantidadTurnos
            });
          }).catch((error) => {
            console.error('Error al obtener turnos para especialidad', especialidad.nombre, error);
            turnosPorEspecialidad.push({ especialidad: especialidad.nombre, cantidadTurnos: 0 });
          });
        });

        // Esperamos a que todas las promesas se resuelvan
        Promise.all(specialitiesCountPromises).then(() => {
          console.log('Conteo de turnos por especialidad completado:', turnosPorEspecialidad);
          observer.next(turnosPorEspecialidad);
          observer.complete();
        }).catch((error) => {
          console.error('Error al procesar las especialidades:', error);
          observer.error(error);
        });

      }).catch((error) => {
        console.error('Error al obtener las especialidades:', error);
        observer.error(error);
      });
    });
  }
  

  getTurnosPorFecha(): Observable<{ fecha: string, cantidadTurnos: number }[]> {
    const turnosCollection = collection(this.firestore, 'Turnos');
    
    return collectionData(turnosCollection).pipe(
      map((turnos: any[]) => {
        // Objeto para contar la cantidad de turnos por fecha
        const turnosPorFecha: { [fecha: string]: number } = {};
  
        turnos.forEach((turno) => {
          // Convertir la fecha del string a un objeto Date
          const fecha = turno.fecha ? new Date(turno.fecha) : null;
          
          // Verificar si la fecha es válida
          if (fecha && !isNaN(fecha.getTime())) {
            // Formatear la fecha como una cadena (en formato YYYY-MM-DD)
            const fechaFormateada = fecha.toISOString().split('T')[0]; // Ejemplo: "2024-11-25"
  
            // Incrementar el contador para esa fecha
            if (turnosPorFecha[fechaFormateada]) {
              turnosPorFecha[fechaFormateada]++;
            } else {
              turnosPorFecha[fechaFormateada] = 1;
            }
          } else {
            // Si la fecha no es válida, loguear el problema
            console.log('Fecha no válida:', turno.fecha);
          }
        });
  
        // Convertir el objeto de fechas en un array
        return Object.keys(turnosPorFecha).map((fecha) => ({
          fecha,
          cantidadTurnos: turnosPorFecha[fecha]
        }));
      })
    );
  }
  
  
  

// Función para convertir la hora en formato "HH:mm" a minutos desde medianoche
convertirAHorasEnMinutos(hora: string): number {
    const [horas, minutos] = hora.split(':').map(Number);
    return horas * 60 + minutos; // Convierte a minutos desde medianoche
  }

getTurnosPorEspecialistaYLapsodeTiempo(
    estado: string,  
    fechaInicio: Date, 
    fechaFin: Date,
    horaInicio: string, 
    horaFin: string): Observable<any[]> 
    
    {
  const turnosCollection = collection(this.firestore, 'Turnos');

  // Convertir las fechas a Date
  const fechaInicioDate = new Date(fechaInicio);
  const fechaFinDate = new Date(fechaFin);

  // Realizar la consulta solo por las fechas
  const turnosQueryFecha = query(
    turnosCollection,
    where('estado', '==', estado),
    where('fecha', '>=', fechaInicioDate.toISOString()), // Convertir Date a string ISO
    where('fecha', '<=', fechaFinDate.toISOString()) // Convertir Date a string ISO
  );

  return collectionData(turnosQueryFecha).pipe(
    map((turnos: any[]) => { 
      //console.log("aca estoy viendo los turnos a ver que onda  ",turnos)
      
      // Convertir las horas de entrada a minutos
      const horaInicioInput = this.convertirAHorasEnMinutos(horaInicio);
      const horaFinInput = this.convertirAHorasEnMinutos(horaFin);

      // Filtrar los turnos por hora en el cliente
      const turnosFiltrados = turnos.filter((turno) => {
        const horaInicioTurno = turno.horaInicio ? this.convertirAHorasEnMinutos(turno.horaInicio) : null;
        const horaFinTurno = turno.horaFin ? this.convertirAHorasEnMinutos(turno.horaFin) : null;

        if (horaInicioTurno && horaFinTurno) {
          // Filtrar turnos que se encuentren dentro del rango de horas
          return horaInicioTurno >= horaInicioInput && horaFinTurno <= horaFinInput;
        }
        return false; // Si la hora no está definida, se filtra el turno
      });

      // Contabilizar los turnos por especialista
      const turnosPorEspecialista: { [especialista: string]: number } = {};
      turnosFiltrados.forEach((turno) => {
        const especialista = turno.especialista || turno.especialista_id;
        if (especialista) {
          turnosPorEspecialista[especialista] = (turnosPorEspecialista[especialista] || 0) + 1;
        }
      });

      //console.log("aca tendria los turnos por el especialista qcy  ",turnosPorEspecialista);

      // Devolver el listado de especialistas y la cantidad de turnos
      return Object.keys(turnosPorEspecialista).map((especialista) => ({
        especialista,
        cantidadTurnos: turnosPorEspecialista[especialista]
      }));
    })
  );
}

}
