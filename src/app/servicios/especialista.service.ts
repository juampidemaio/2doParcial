  import { Injectable } from '@angular/core';
  import { Firestore, collection, getDocs, setDoc, doc, getDoc, query, where } from '@angular/fire/firestore';
import { async } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class EspecialistaService {
    constructor(private firestore: Firestore) {}

    async getEspecialistasPorEspecialidad(nombreEspecialidad: string): Promise<any[]> {
    const usuariosCollection = collection(this.firestore, 'users');
    const usuariosSnapshot = await getDocs(usuariosCollection);
    
    const especialistas = usuariosSnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(usuario => this.especialistaValido(usuario, nombreEspecialidad));

    console.log("Especialistas filtrados:", especialistas); // Verifica los especialistas filtrados
    return especialistas;
    }

    
    private especialistaValido(usuario: any, nombreEspecialidad: string): boolean {
      // Verifica si el usuario es especialista y si el campo de especialidades incluye el nombre
      return usuario.role === 'especialista' && usuario.especialidades.includes(nombreEspecialidad);
    }


    async getPacientesUnicosPorEspecialidad(uidEspecialista: string, especialidad:string): Promise<any[]> {
      const turnosCollection = collection(this.firestore, 'Turnos');
      const turnosSnapshot = await getDocs(turnosCollection);
      
      const pacienteIdsSet = new Set<string>(); // Usamos un Set para almacenar IDs de pacientes únicos
      const pacientes: any[] = [];
  
      // Filtramos los turnos por el ID del especialista
      const turnosDisponibles = turnosSnapshot.docs
        .map(doc => {
          const data = doc.data() as { especialista_id: string; pacienteId: string, especialidad:string}; // Definimos las propiedades esperadas
          return { id: doc.id, ...data }; // Combina el id con los datos del documento
        })
        .filter(turno => {
          // Verificamos que el ID del especialista coincida
          const isMatchingEspecialista = turno.especialista_id === uidEspecialista;
          const isMatchingEspecialidad = turno.especialidad === especialidad;
          if (isMatchingEspecialista && isMatchingEspecialidad) {
            // Si coincide, agregamos el ID del paciente al Set para evitar duplicados
            pacienteIdsSet.add(turno.pacienteId);
          }
          return isMatchingEspecialista && isMatchingEspecialidad;
        });
  
      console.log("Turnos solicitados:", turnosDisponibles); // Log de los turnos disponibles
  
      // Ahora obtenemos los datos completos de los pacientes desde la colección 'users'
      const pacienteIds = Array.from(pacienteIdsSet); // Convertimos el Set a un array
      const pacientesCompleto = await this.getPacientesPorIds(pacienteIds);
      
      return pacientesCompleto; // Retornamos los pacientes completos
    }


    async getPacientesUnicosPorEspecialista(uidEspecialista: string): Promise<any[]> {
      const turnosCollection = collection(this.firestore, 'Turnos');
      const turnosSnapshot = await getDocs(turnosCollection);
      
      const pacienteIdsSet = new Set<string>(); // Usamos un Set para almacenar IDs de pacientes únicos
      const pacientes: any[] = [];
  
      // Filtramos los turnos por el ID del especialista
      const turnosDisponibles = turnosSnapshot.docs
        .map(doc => {
          const data = doc.data() as { especialista_id: string; pacienteId: string }; // Definimos las propiedades esperadas
          return { id: doc.id, ...data }; // Combina el id con los datos del documento
        })
        .filter(turno => {
          // Verificamos que el ID del especialista coincida
          const isMatchingEspecialista = turno.especialista_id === uidEspecialista;
          if (isMatchingEspecialista && turno.pacienteId) { // Asegúrate de que pacienteId no sea undefined
            // Si coincide, agregamos el ID del paciente al Set para evitar duplicados
            pacienteIdsSet.add(turno.pacienteId);
          }
          return isMatchingEspecialista;
        });
  
      console.log("Turnos solicitados:", turnosDisponibles); // Log de los turnos disponibles
  
      // Ahora obtenemos los datos completos de los pacientes desde la colección 'users'
      const pacienteIds = Array.from(pacienteIdsSet); // Convertimos el Set a un array
      const pacientesCompleto = await this.getPacientesPorIds(pacienteIds);
      
      return pacientesCompleto; // Retornamos los pacientes completos
    }
  
    async getPacientesPorIds(pacienteIds: string[]): Promise<any[]> {
      const usersCollection = collection(this.firestore, 'users');
      const pacientes: any[] = [];
  
      for (const id of pacienteIds) {
        if (id) { // Verificamos que el ID del paciente no sea undefined
          const pacienteQuery = query(usersCollection, where('uid', '==', id)); // Filtramos por el ID del paciente
          const pacienteSnapshot = await getDocs(pacienteQuery);
          
          pacienteSnapshot.forEach(doc => {
            const data = doc.data();
            pacientes.push({
              id: doc.id, // O el UID según sea necesario
              ...data
            });
          });
        } else {
          console.warn(`ID de paciente es undefined, omitiendo este ID.`); // Log para ID undefined
        }
      }
  
      return pacientes; // Retornamos la lista de pacientes completos
    }
  
  
  

    async getHorariosPorEspecialista(especialistaId: string): Promise<any[]> {
      const horariosCollection = collection(this.firestore, 'horarios');
      const horariosSnapshot = await getDocs(horariosCollection);
      
      // Primero, obtén los turnos existentes para el especialista
      const turnosOcupados = await this.getTurnosPorEspecialista(especialistaId);
    
      return horariosSnapshot.docs
        .map(doc => {
          const horarioData = doc.data(); // Obtener datos del documento
          return { id: doc.id, ...horarioData }; // Combinar ID con datos
        })
        .filter((horario: any) => 
          horario.especialistaId === especialistaId && 
          this.isWithinNext15Days(horario.fecha) &&
          !this.isHorarioOcupado(horario, turnosOcupados) // Verifica si está ocupado
        );
    }

    // Obtén los turnos ocupados del especialista
    async getTurnosPorEspecialista(especialistaId: string): Promise<any[]> {
      const turnosCollection = collection(this.firestore, 'turnos');
      const turnosSnapshot = await getDocs(turnosCollection);
      
      return turnosSnapshot.docs
        .map(doc => {
          const data = doc.data() as any; // Asegúrate de que los datos se manejen como `any`
          return { id: doc.id, ...data };
        })
        .filter(turno => turno.especialistaId === especialistaId); // Sin aserción
    }
    
  private isHorarioOcupado(horario: any, turnosOcupados: any[]): boolean {
    const horaInicio = new Date(horario.fecha); // Ajusta esto según tu formato de hora
    const horaFin = new Date(horaInicio);
    horaFin.setMinutes(horaFin.getMinutes() + 30); // Suponiendo que cada turno es de 30 minutos

    return turnosOcupados.some(turno => {
      const turnoInicio = new Date(turno.fecha);
      const turnoFin = new Date(turnoInicio);
      turnoFin.setMinutes(turnoFin.getMinutes() + 30); // Ajusta según la duración de tu turno

      return (turnoInicio < horaFin && turnoFin > horaInicio); // Verifica si se solapan
    });
  }

    private isWithinNext15Days(fecha: string): boolean {
      const fechaTurno = new Date(fecha);
      const hoy = new Date();
      const quinceDias = new Date();
      quinceDias.setDate(hoy.getDate() + 15);
      return fechaTurno >= hoy && fechaTurno <= quinceDias;
    }

    
  }
