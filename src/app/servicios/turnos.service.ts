import { Injectable } from '@angular/core';
import { Firestore, collection, setDoc, doc, getDocs, getDoc, query, where, DocumentData } from '@angular/fire/firestore';
import { AuthenticationService } from './authentication.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  // Horarios de apertura
  // private horariosApertura: Record<string, { apertura: string | null; cierre: string | null }> = {
  //   lunes: { apertura: '08:00', cierre: '19:00' },
  //   martes: { apertura: '08:00', cierre: '19:00' },
  //   miércoles: { apertura: '08:00', cierre: '19:00' },
  //   jueves: { apertura: '08:00', cierre: '19:00' },
  //   viernes: { apertura: '08:00', cierre: '19:00' },
  //   sábado: { apertura: '08:00', cierre: '14:00' },
  //   domingo: { apertura: null, cierre: null } // Cerrado
  // };

  constructor(private firestore: Firestore, private authService: AuthenticationService) {}

  async guardarDisponibilidadEspecialidad(especialistaId: string, disponibilidad: any, especialidad: string) {
    // Crear un ID único que combine el especialistaId y la especialidad
    const especialidadId = `${especialistaId}_${especialidad.replace(/\s+/g, '_')}`;

    // Referencia al documento en la colección 'Disponibilidad'
    const disponibilidadRef = doc(collection(this.firestore, 'Disponibilidad'), especialidadId);
    
    // Guardar el documento con disponibilidad, especialidad, y especialista_id como campos
    await setDoc(disponibilidadRef, { 
      disponibilidad, 
      especialidad,
      especialista_id: especialistaId
    });
}



  // async guardarDisponibilidadEspecialidad(especialistaId: string, disponibilidad: any, especialidad: string) {
  //   const disponibilidadRef = doc(collection(this.firestore, 'Disponibilidad'), especialistaId);
  //   await setDoc(disponibilidadRef, { 
  //     disponibilidad, 
  //     especialidad  // Guardar la especialidad en el documento
  //   });
  // }
  async guardarDisponibilidad(especialistaId: string, disponibilidad: any) {
    const disponibilidadRef = doc(collection(this.firestore, 'Disponibilidad'), especialistaId);
    await setDoc(disponibilidadRef, { disponibilidad });
  }

  async guardarTurnos(turnos: any[]) {
    const turnosCollection = collection(this.firestore, 'Turnos');
    
    const promises = turnos.map(turno => {
      const turnoRef = doc(turnosCollection); // Crea una nueva referencia para cada turno
      return setDoc(turnoRef, turno); // Guarda el turno en Firestore
    });
  
    await Promise.all(promises);
  }

  async obtenerTurnos() {
    const turnosCollection = collection(this.firestore, 'Turnos');
    const turnosSnapshot = await getDocs(turnosCollection);

    const turnosDisponibles = turnosSnapshot.docs
  
    console.log("Turnos disponibles:", turnosDisponibles); // Log de los turnos disponibles
    return turnosDisponibles; // Retorna los turnos disponibles
  }


  async obtenerTurnosDisponibles(especialistaId: string, especialidadParam: string) {
    const turnosCollection = collection(this.firestore, 'Turnos');
    const turnosSnapshot = await getDocs(turnosCollection);
  
    const turnosDisponibles = turnosSnapshot.docs
      .map(doc => {
        const data = doc.data() as {
          estado: string;
          especialista_id: string;
          especialidad: string;
          fecha: string;         // Asegúrate de que 'fecha' esté presente en los documentos de Firestore
          hora_inicio: string;   // Asegúrate de que 'hora_inicio' también esté presente
        };
  
        return { id: doc.id, ...data }; // Combina el id con los datos del documento
      })
      .filter(turno => {
        const isMatchingEspecialista = turno.especialista_id === especialistaId;
        const isMatchingEspecialidad = turno.especialidad === especialidadParam;
        const isAvailable = turno.estado === 'disponible';
        console.log(`Turno ID: ${turno.id}, Especialista ID: ${turno.especialista_id}, Estado: ${turno.estado}, Coincide: ${isMatchingEspecialista && isAvailable}`);
        return isMatchingEspecialista && isAvailable && isMatchingEspecialidad;
      });
  
    console.log("Turnos disponibles:", turnosDisponibles); // Log de los turnos disponibles
    return turnosDisponibles; // Retorna los turnos disponibles
  }
  
   //turnos en base a el id del especialista
   async obtenerTurnosDisponiblesEspecialista(especialistaId: string) {
    const turnosCollection = collection(this.firestore, 'Turnos');
    const turnosSnapshot = await getDocs(turnosCollection);

    const turnosDisponibles = turnosSnapshot.docs
      .map(doc => {
        
        const data = doc.data() as {especialista_id: string }; // Asegúrate de definir las propiedades esperadas
       
        return { id: doc.id, ...data }; // Combina el id con los datos del documento
      })
      .filter(turno => {
        const isMatchingEspecialista = turno.especialista_id === especialistaId;
        console.log(`Turno ID: ${turno.id}, Especialista ID: ${turno.especialista_id}`);
        return isMatchingEspecialista ;
      });
  
    console.log("Turnos solicitados:", turnosDisponibles); // Log de los turnos disponibles
    return turnosDisponibles; // Retorna los turnos disponibles
  }

  async obtenerTurnosDisponiblesPacienteEspecialista(pacienteIdParam: string,especialistaId: string) {
    const turnosCollection = collection(this.firestore, 'Turnos');
    const turnosSnapshot = await getDocs(turnosCollection);

    const turnosDisponibles = turnosSnapshot.docs
      .map(doc => {
        
        const data = doc.data() as {pacienteId: string ,especialista_id: string }; // Asegúrate de definir las propiedades esperadas
       
        return { id: doc.id, ...data }; // Combina el id con los datos del documento
      })
      .filter(turno => {
        const isMatchingEspecialista = turno.especialista_id === especialistaId;
        const isMatchingPaciente = turno.pacienteId === pacienteIdParam;
        console.log(`Turno ID: ${turno.id}, Paciente ID: ${turno.pacienteId}`);
        return isMatchingPaciente && isMatchingEspecialista;
      });
  
    console.log("Turnos solicitados:", turnosDisponibles); // Log de los turnos disponibles
    return turnosDisponibles; // Retorna los turnos disponibles
  }


  async obtenerTurnosDisponiblesPaciente(pacienteIdParam: string) {
    const turnosCollection = collection(this.firestore, 'Turnos');
    const turnosSnapshot = await getDocs(turnosCollection);

    const turnosDisponibles = turnosSnapshot.docs
      .map(doc => {
        
        const data = doc.data() as {pacienteId: string }; // Asegúrate de definir las propiedades esperadas
       
        return { id: doc.id, ...data }; // Combina el id con los datos del documento
      })
      .filter(turno => {
        const isMatchingPaciente = turno.pacienteId === pacienteIdParam;
        console.log(`Turno ID: ${turno.id}, Paciente ID: ${turno.pacienteId}`);
        return isMatchingPaciente ;
      });
  
    console.log("Turnos solicitados:", turnosDisponibles); // Log de los turnos disponibles
    return turnosDisponibles; // Retorna los turnos disponibles
  }

  async obtenerTurnosEspecialidad(especialidadParam: string) {
    const turnosCollection = collection(this.firestore, 'Turnos');
    const turnosSnapshot = await getDocs(turnosCollection);

    const turnosDisponibles = turnosSnapshot.docs
      .map(doc => {
        
        const data = doc.data() as {especialidad: string }; // Asegúrate de definir las propiedades esperadas
       
        return { id: doc.id, ...data }; // Combina el id con los datos del documento
      })
      .filter(turno => {
        const isMatchingEspecialista = turno.especialidad === especialidadParam;
        console.log(`Turno ID: ${turno.id}, especialidad : ${turno.especialidad}`);
        return isMatchingEspecialista ;
      });
  
    console.log("Turnos solicitados:", turnosDisponibles); // Log de los turnos disponibles
    return turnosDisponibles; // Retorna los turnos disponibles
  }

  async obtenerDisponibilidadEspecialista(especialistaId: string, especialidad: string) {
    const disponibilidadRef = collection(this.firestore, 'Disponibilidad');
    const q = query(
        disponibilidadRef,
        where('especialista_id', '==', especialistaId),
        where('especialidad', '==', especialidad)
    );

    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
        // Devuelve los datos del primer documento encontrado
        return querySnapshot.docs[0].data()['disponibilidad'];
    } else {
        console.log("No existe la disponibilidad para este especialista y especialidad.");
        return null;
    }
}

  
  async obtenerDisponibilidad(especialistaId: string) {
    const disponibilidadRef = doc(this.firestore, `Disponibilidad/${especialistaId}`);
    const docSnap = await getDoc(disponibilidadRef);
  
    if (docSnap.exists()) {
      return docSnap.data()['disponibilidad'];
    } else {
      console.log("No existe la disponibilidad para este especialista.");
      return null;
    }
  }

  async solicitarTurno(turnoData: any, idPaciente:any) {
    const turnoRef = doc(this.firestore, `Turnos/${turnoData.horario}`); // Cambia 'horario' por el ID del turno si lo tienes
    await setDoc(turnoRef, {
        ...turnoData,
        estado: 'solicitado',
        pacienteId: idPaciente 
    }, { merge: true });
  }

  async cancelarTurno(turnoId: string, motivo: string) {
    const turnoRef = doc(this.firestore, `Turnos/${turnoId}`);
    await setDoc(turnoRef, { 
      estado: 'cancelado', 
      motivoCancelacion: motivo 
    }, { merge: true });
  }

  async aceptarTurno(turnoId: string) {
    const turnoRef = doc(this.firestore, `Turnos/${turnoId}`);
    await setDoc(turnoRef, { 
      estado: 'aceptado', 
    }, { merge: true });
  }
  

  async finalizarTurno(turnoId: string, { diagnostico, reseña }: { diagnostico: string; reseña: string }) {
    const turnoRef = doc(this.firestore, `Turnos/${turnoId}`);
    
    // Actualizar el estado a 'realizado' y guardar la reseña y diagnóstico
    await setDoc(turnoRef, { 
      estado: 'realizado',
      reseña: reseña, 
      diagnostico: diagnostico, 
    }, { merge: true });
  }


  async finalizarTurnoHistoriaClinica(turno: any, {
    historiaClinica
  }: {
    historiaClinica: {
      altura: number;
      peso: number;
      temperatura: number;
      presion: string;
      datosDinamicos: { clave: string; valor: string }[];
    };
  }) {
    // Datos obtenidos desde el objeto turno
    const pacienteId = turno.pacienteId;
    const especialidad = turno.especialidad;
    const nombreEspecialista = turno.especialista;
    const fechaTurno = turno.fecha; // Fecha del turno
    const idEspecialista = turno.especialista_id;
  
    // Generar un ID único para el turno usando la fecha y la especialidad
    const turnoId = `turno_${fechaTurno}_${especialidad}`;
  
    // Referencia al documento del paciente en la colección `historiaClinica`
    const pacienteRef = doc(this.firestore, `historiaClinica/${pacienteId}`);
  
    // Crear o actualizar el documento del paciente con el nuevo turno
    await setDoc(pacienteRef, {
      turnos: {
        [turnoId]: {
          especialidad,
          nombreEspecialista,
          idEspecialista,
          fechaTurno,
          ...historiaClinica // Datos de altura, peso, temperatura, etc.
        }
      }
    }, { merge: true });
  }

  async obtenerHistoriaClinica(pacienteId: string) {
    const pacienteRef = doc(this.firestore, `historiaClinica/${pacienteId}`);
    const pacienteDoc = await getDoc(pacienteRef);
    
    if (pacienteDoc.exists()) {
      const data = pacienteDoc.data();
      const turnos = data?.['turnos']; // Accedes al objeto 'turnos'
      
      if (turnos) {
        return turnos; // Aquí tendrías todos los turnos del paciente
      }
    } else {
      console.log("No existe el documento del paciente.");
      return null;
    }
  }
  async obtenerPacientesAtendidosPorEspecialista(especialistaId: string) {
    const pacientesRef = collection(this.firestore, 'historiaClinica');
    const querySnapshot = await getDocs(pacientesRef);
  
    const pacientesAtendidos: any[] = [];
  
    for (const documento of querySnapshot.docs) {
      const data = documento.data();
      const turnos = data['turnos'] || {}; // Obtenemos los turnos
  
      // Filtrar los turnos que coinciden con el especialistaId
      for (const key in turnos) {
        if (turnos[key].idEspecialista === especialistaId) {
          const pacienteId = documento.id; // Obtenemos el ID del paciente (nombre del documento en 'historiaClinica')
  
          // Hacer una segunda consulta para obtener la información del paciente en la colección 'users'
          const pacienteDocRef = doc(this.firestore, 'users', pacienteId);
          const pacienteDoc = await getDoc(pacienteDocRef);
  
          if (pacienteDoc.exists()) {
            const pacienteData = pacienteDoc.data();
            pacientesAtendidos.push({
              ...pacienteData,
              ...data, // Incluimos también los datos de 'historiaClinica' si es relevante
            });
          } else {
            console.error(`Paciente con ID ${pacienteId} no encontrado en la colección 'users'.`);
          }
          
          break; // Salimos del bucle si encontramos un turno que coincide
        }
      }
    }
  
    return pacientesAtendidos;
  }

  
 
  async obtenerReseñaTurno(turnoId: string) {
    const turnoRef = doc(this.firestore, `Turnos/${turnoId}`);
    
    try {
      const turnoSnap = await getDoc(turnoRef);
      if (turnoSnap.exists()) {
        // Accede al campo 'reseña'
        const reseña = turnoSnap.data()?.['reseña'];
        if (reseña) {
          Swal.fire('Reseña del Turno', reseña, 'info');
        } else {
          Swal.fire('Aviso', 'No hay reseña disponible para este turno', 'info');
        }
      } else {
        Swal.fire('Error', 'El turno no existe', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'No se pudo obtener la reseña', 'error');
      console.error('Error al obtener reseña:', error);
    }
  }

  async guardarEncuesta(turnoId:string,encuesta: any) {
    // Referencia a la colección 'encuestas' en Firestore
    const turnoRef = doc(this.firestore, `Turnos/${turnoId}`);
    await setDoc(turnoRef, { 
      encuesta: encuesta 
    }, { merge: true });

    console.log('Encuesta guardada con éxito');
  }


  async guardarCalificacion(turnoId: string, calificacion: string) {
    const turnoRef = doc(this.firestore, `Turnos/${turnoId}`);
    await setDoc(turnoRef, { 
      calificacionTurno: calificacion 
    }, { merge: true });
  }

}
