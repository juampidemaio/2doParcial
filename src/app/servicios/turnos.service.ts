import { Injectable } from '@angular/core';
import { Firestore, collection, setDoc, doc, getDocs, getDoc, query, where, DocumentData, updateDoc } from '@angular/fire/firestore';
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
    const especialidadId = `${especialistaId}_${especialidad.replace(/\s+/g, '_')}`;
    
    const disponibilidadRef = doc(this.firestore, 'Disponibilidad', especialidadId);
    const docSnap = await getDoc(disponibilidadRef);
  
    if (docSnap.exists()) {
      // Si el documento existe, actualizamos
      await updateDoc(disponibilidadRef, { 
        disponibilidad, 
        especialidad,
        especialista_id: especialistaId 
      });
    } else {
      // Si el documento no existe, lo creamos
      await setDoc(disponibilidadRef, { 
        disponibilidad, 
        especialidad,
        especialista_id: especialistaId 
      });
    }
  }



async obtenerTurnoExistente(turno: { especialidad: string, especialista_id: string, fecha: string, hora_inicio: string, hora_fin: string}) {
  try {
    // Referencia a la colección de Turnos en Firestore
    const turnosRef = collection(this.firestore, 'Turnos');

    // Crear la consulta para verificar si existe un turno con los mismos parámetros
    const q = query(
      turnosRef,
      where('especialidad', '==', turno.especialidad),
      where('especialista_id', '==', turno.especialista_id),
      where('fecha', '==', turno.fecha),
      where('hora_inicio', '==', turno.hora_inicio),
      where('hora_fin', '==', turno.hora_fin),
    );

    // Ejecutar la consulta
    const querySnapshot = await getDocs(q);

    // Si existe un turno, devolver los datos del primer turno encontrado, de lo contrario, devolver null
    return querySnapshot.empty ? null : querySnapshot.docs[0].data();
  } catch (error) {
    console.error("Error al verificar turno existente", error);
    throw error; // Lanzamos el error si ocurre algún problema
  }
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
  
    const turnosDisponibles = turnosSnapshot.docs.map(doc => doc.data());  // Obtener los datos de cada documento
  
    console.log("Turnos disponibles:", turnosDisponibles); // Log de los turnos disponibles
    return turnosDisponibles; // Retorna los turnos disponibles
  }
  
  // async obtenerTurnosEspecialista(uidEspecialista: string) {
  //   try {
  //     const turnosCollection = collection(this.firestore, 'Turnos');
  //     const turnosQuery = query(turnosCollection, where('especialista_id', '==', uidEspecialista));
  //     const turnosSnapshot = await getDocs(turnosQuery);
  
  //     const turnosDisponibles = turnosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
  //     console.log("Turnos disponibles:", turnosDisponibles); // Log de los turnos disponibles
  //     return turnosDisponibles; // Retorna los turnos disponibles
  //   } catch (error) {
  //     console.error("Error al obtener turnos:", error);
  //     throw error; // Opcional: lanza el error si quieres manejarlo en otro lugar
  //   }
  // }


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

  async solicitarTurno(turnoData: any, idPaciente: any) {
    const turnoRef = doc(this.firestore, `Turnos/${turnoData.turnoId}`);
    await setDoc(turnoRef, {
      ...turnoData,
      estado: 'solicitado',
      pacienteId: idPaciente,
    }, { merge: true });
  }
  async buscarYActualizarTurno(turnoData: any, idPaciente: any) {
    try {

        // Validamos que los datos necesarios estén definidos
        console.log(turnoData.fecha, turnoData.horaInicio, turnoData.horaFin)
    if (!turnoData.fecha || !turnoData.horaInicio || !turnoData.horaFin) {
      Swal.fire('Error', 'Faltan datos para realizar la búsqueda del turno.', 'error');
      return;
    }
      // Realizar una consulta para buscar el turno que coincida con la fecha y la hora
      const q = query(
        collection(this.firestore, 'Turnos'),
        where('fecha', '==', turnoData.fecha),
        where('hora_inicio', '==', turnoData.horaInicio),
        where('hora_fin', '==', turnoData.horaFin)
      );
  
      // Obtener los turnos que coinciden con la búsqueda
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        // Si se encuentra el turno, actualizarlo con el nuevo estado y paciente
        const turnoDoc = querySnapshot.docs[0];  // Tomamos el primer turno que coincida
        const turnoRef = doc(this.firestore, `Turnos/${turnoDoc.id}`);
  
        await setDoc(turnoRef, {
          ...turnoData,
          estado: 'solicitado',
          pacienteId: idPaciente,
        }, { merge: true });
  
        console.log("Turno actualizado correctamente");
      } else {
        // Si no se encuentra el turno, puedes manejarlo como un error o crear un nuevo turno
        console.error("No se encontró el turno para la fecha y hora seleccionada");
        Swal.fire('Error', 'No se encontró un turno disponible en esa fecha y hora.', 'error');
      }
    } catch (error) {
      console.error('Error al buscar y actualizar el turno:', error);
      Swal.fire('Error', 'No se pudo actualizar el turno. Inténtalo nuevamente.', 'error');
    }
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


  async finalizarTurnoCompleto(turnoId: string, {
    diagnostico,
    reseña,
    historiaClinica
  }: {
    diagnostico: string;
    reseña: string;
    historiaClinica: {
      altura: number;
      peso: number;
      temperatura: number;
      presion: string;
      datosDinamicos: { clave: string; valor: string }[];
    };
  }) {
    try {
      // Referencia al documento del turno en la colección `Turnos`
      const turnoRef = doc(this.firestore, `Turnos/${turnoId}`);
  
      // Actualizar el documento del turno con todos los datos
      await setDoc(turnoRef, {
        estado: 'realizado',
        diagnostico,
        reseña,
        historiaClinica
      }, { merge: true }); // Usamos merge para no sobrescribir otros campos existentes
  
      console.log(`Turno ${turnoId} finalizado con éxito, incluyendo historia clínica.`);
    } catch (error) {
      console.error("Error al finalizar el turno y agregar la historia clínica:", error);
      throw error; // Opcional: manejar el error en otro lugar
    }
  }



  
  async buscarTurnosPorValor(valor: string): Promise<any[]> {
    try {
      // Normalización de valor para comparación exacta
      valor = valor.toLowerCase();
  
      // Referencia a la colección `Turnos`
      const turnosRef = collection(this.firestore, 'Turnos');
  
      // Obtener todos los documentos de la colección `Turnos`
      const querySnapshot = await getDocs(turnosRef);
  
      const turnosFiltrados: any[] = [];
  
      querySnapshot.forEach(doc => {
        const data = doc.data();
        let match = false;
  
        // 1. Búsqueda por campo específico
        // Campos simples
        const { diagnostico, dni, especialidad, especialista, estado, fecha, hora_fin, hora_inicio, horario, obraSocial, paciente, pacienteId, reseña, turnoId } = data;
  
        if (
          'diagnostico' === valor || diagnostico?.toLowerCase() === valor ||
          'dni' === valor || dni?.toLowerCase() === valor ||
          'especialidad' === valor || especialidad?.toLowerCase() === valor ||
          'especialista' === valor || especialista?.toLowerCase() === valor ||
          'estado' === valor || estado?.toLowerCase() === valor ||
          'fecha' === valor || fecha?.toLowerCase() === valor ||
          'hora_fin' === valor || hora_fin?.toLowerCase() === valor ||
          'hora_inicio' === valor || hora_inicio?.toLowerCase() === valor ||
          'horario' === valor || horario?.toLowerCase() === valor ||
          'obraSocial' === valor || obraSocial?.toLowerCase() === valor ||
          'paciente' === valor || paciente?.toLowerCase() === valor ||
          'pacienteId' === valor || pacienteId?.toLowerCase() === valor ||
          'reseña' === valor || reseña?.toLowerCase() === valor ||
          'turnoId' === valor || turnoId?.toLowerCase() === valor
        ) {
          match = true;
        }
  
        // 2. Verificación en historia clínica (como lo hacías anteriormente)
        const historiaClinica = data['historiaClinica'];
        if (historiaClinica) {
          const { altura, peso, temperatura, presion } = historiaClinica;
  
          if (
            'altura' === valor || altura?.toString().toLowerCase() === valor ||
            'peso' === valor || peso?.toString().toLowerCase() === valor ||
            'temperatura' === valor || temperatura?.toString().toLowerCase() === valor ||
            'presion' === valor || presion?.toLowerCase() === valor
          ) {
            match = true;
          }
  
          // Datos dinámicos
          if (Array.isArray(historiaClinica.datosDinamicos)) {
            const matchDinamico = historiaClinica.datosDinamicos.some(
              (campo: { clave: string; valor: string }) =>
                campo.clave.toLowerCase() === valor || campo.valor.toLowerCase() === valor
            );
            if (matchDinamico) {
              match = true;
            }
          }
        }
  
        if (match) {
          turnosFiltrados.push({ id: doc.id, ...data });
        }
      });
  
      console.log(`${turnosFiltrados.length} turno(s) encontrado(s) con el valor "${valor}".`);
      return turnosFiltrados;
    } catch (error) {
      console.error("Error al buscar turnos:", error);
      throw error;
    }
  }
  



  

  // async finalizarTurnoHistoriaClinica(turno: any, {
  //   historiaClinica
  // }: {
  //   historiaClinica: {
  //     altura: number;
  //     peso: number;
  //     temperatura: number;
  //     presion: string;
  //     datosDinamicos: { clave: string; valor: string }[];
  //   };
  // }) {
  //   // Datos obtenidos desde el objeto turno
  //   const pacienteId = turno.pacienteId;
  //   const especialidad = turno.especialidad;
  //   const nombreEspecialista = turno.especialista;
  //   const fechaTurno = turno.fecha; // Fecha del turno
  //   const idEspecialista = turno.especialista_id;
  //   const turnoId = turno.turnoId;
  
  //   // Generar un ID único para el turno usando la fecha y la especialidad
  //   const turnoIdCampo = `turno_${fechaTurno}_${especialidad}`;
  
  //   // Referencia al documento del paciente en la colección `historiaClinica`
  //   const pacienteRef = doc(this.firestore, `historiaClinica/${pacienteId}`);
  
  //   // Crear o actualizar el documento del paciente con el nuevo turno
  //   await setDoc(pacienteRef, {
  //     turnos: {
  //       [turnoIdCampo]: {
  //         especialidad,
  //         nombreEspecialista,
  //         idEspecialista,
  //         fechaTurno,
  //         turnoId,
  //         ...historiaClinica // Datos de altura, peso, temperatura, etc.
  //       }
  //     }
  //   }, { merge: true });
  // }



  // async obtenerHistoriaClinica(pacienteId: string) {
  //   const pacienteRef = doc(this.firestore, `historiaClinica/${pacienteId}`);
  //   const pacienteDoc = await getDoc(pacienteRef);
    
  //   if (pacienteDoc.exists()) {
  //     const data = pacienteDoc.data();
  //     const turnos = data?.['turnos']; // Accedes al objeto 'turnos'
      
  //     if (turnos) {
  //       return turnos; // Aquí tendrías todos los turnos del paciente
  //     }
  //   } else {
  //     console.log("No existe el documento del paciente.");
  //     return null;
  //   }
  // }
  
  async obtenerHistoriaClinicaConTurnos(pacienteId: string): Promise<{
    especialista: string;
    especialidad: string;
    fecha: string;
    estado: string; 
    reseña: string; 
    especialista_id: string; // Agrega el campo especialista_id
    historiaClinica: {
      altura: string;
      peso: string;
      temperatura: string;
      presion: string;
      datosDinamicos: { clave: string; valor: string }[];
    };
  }[]> {
  try {
    const turnosRef = collection(this.firestore, 'Turnos');
    const q = query(turnosRef, where('pacienteId', '==', pacienteId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('No hay turnos para el paciente.');
      return [];
    }

    const historiaClinicaCompleta = querySnapshot.docs.map(doc => {
      const turno = doc.data();

      return {
        especialista: turno['especialista'] || 'N/A',
        especialidad: turno['especialidad'] || 'N/A',
        fecha: turno['fecha'] || 'N/A',
        estado: turno['estado'] || 'N/A',
        reseña: turno['reseña'] || 'N/A',
        especialista_id: turno['especialista_id'] || 'N/A', // Asegúrate de obtener este campo
        historiaClinica: {
          altura: turno['historiaClinica']?.altura || 'N/A',
          peso: turno['historiaClinica']?.peso || 'N/A',
          temperatura: turno['historiaClinica']?.temperatura || 'N/A',
          presion: turno['historiaClinica']?.presion || 'N/A',
          datosDinamicos: turno['historiaClinica']?.datosDinamicos || []
        }
      };
    });

    return historiaClinicaCompleta;
  } catch (error) {
    console.error('Error al obtener la historia clínica:', error);
    throw new Error('No se pudo obtener la historia clínica.');
  }
}

  async obtenerTurnosExcelPacientes(usuarioSeleccionado: any): Promise<any[]> {
    const pacienteId = usuarioSeleccionado.uid; // Usamos el id del paciente seleccionado
    const turnosRef = collection(this.firestore, 'Turnos');
  
    // Consultamos los turnos del paciente con estado "realizado"
    const querySnapshot = await getDocs(
      query(
        turnosRef,
        where('pacienteId', '==', pacienteId),
        where('estado', '==', 'realizado')
      )
    );
  
    // Aquí almacenamos los turnos obtenidos
    const turnos: any[] = [];
  
    // Iteramos sobre los resultados de la consulta
    querySnapshot.forEach((turnoDoc) => {
      const turnoData = turnoDoc.data();
      turnos.push(turnoData); // Agregamos los datos del turno a la lista
    });
  
    return turnos; // Devuelve la lista de turnos
  }
  async obtenerTurnosExcelEspecialistas(usuarioSeleccionado: any): Promise<any[]> {
    const especialistaId = usuarioSeleccionado.uid; // Usamos el id del paciente seleccionado
    const turnosRef = collection(this.firestore, 'Turnos');
  
    // Consultamos los turnos del paciente con estado "realizado"
    const querySnapshot = await getDocs(
      query(
        turnosRef,
        where('especialista_id', '==', especialistaId),
        where('estado', '==', 'realizado')
      )
    );
  
    // Aquí almacenamos los turnos obtenidos
    const turnos: any[] = [];
  
    // Iteramos sobre los resultados de la consulta
    querySnapshot.forEach((turnoDoc) => {
      const turnoData = turnoDoc.data();
      turnos.push(turnoData); // Agregamos los datos del turno a la lista
    });
  
    return turnos; // Devuelve la lista de turnos
  }
  
  
  async obtenerPacientesAtendidosPorEspecialista(especialistaId: string) {
    const turnosRef = collection(this.firestore, 'Turnos');
    
    // Consultamos los turnos del especialista con estado "realizado"
    const querySnapshot = await getDocs(
      query(turnosRef, 
            where('especialista_id', '==', especialistaId), 
            where('estado', '==', 'realizado'))
    );
  
    const pacientesAtendidos: any[] = [];
    const pacientesIdSet = new Set<string>(); // Usamos un Set para evitar duplicados de pacienteId
    
    // Iteramos sobre los turnos para obtener los IDs de los pacientes
    for (const turnoDoc of querySnapshot.docs) {
      const turnoData = turnoDoc.data();
      const pacienteId = turnoData['pacienteId']; // Suponiendo que el campo del paciente en los turnos es 'paciente_id'
  
      if (pacienteId && !pacientesIdSet.has(pacienteId)) {  // Verificamos si ya tenemos este paciente
        // Marcamos al paciente como "visto"
        pacientesIdSet.add(pacienteId);
  
        // Obtenemos los datos del paciente
        const pacienteDocRef = doc(this.firestore, 'users', pacienteId);
        const pacienteDoc = await getDoc(pacienteDocRef);
  
        if (pacienteDoc.exists()) {
          const pacienteData = pacienteDoc.data();
          pacientesAtendidos.push({
            ...pacienteData,
            idTurno: turnoDoc.id, // Incluimos opcionalmente información del turno si es relevante
          });
        } else {
          console.error(`Paciente con ID ${pacienteId} no encontrado en la colección 'users'.`);
        }
      }
    }
  
    return pacientesAtendidos; // Ya no es necesario convertirlo a un array, ya que `pacientesAtendidos` ya es un array
  }
  
  



  // async obtenerPacientesAtendidosPorEspecialista(especialistaId: string) {
  //   const pacientesRef = collection(this.firestore, 'historiaClinica');
  //   const querySnapshot = await getDocs(pacientesRef);
  
  //   const pacientesAtendidos: any[] = [];
  
  //   for (const documento of querySnapshot.docs) {
  //     const data = documento.data();
  //     const turnos = data['turnos'] || {}; // Obtenemos los turnos
  
  //     // Filtrar los turnos que coinciden con el especialistaId
  //     for (const key in turnos) {
  //       if (turnos[key].idEspecialista === especialistaId) {
  //         const pacienteId = documento.id; // Obtenemos el ID del paciente (nombre del documento en 'historiaClinica')
  
  //         // Hacer una segunda consulta para obtener la información del paciente en la colección 'users'
  //         const pacienteDocRef = doc(this.firestore, 'users', pacienteId);
  //         const pacienteDoc = await getDoc(pacienteDocRef);
  
  //         if (pacienteDoc.exists()) {
  //           const pacienteData = pacienteDoc.data();
  //           pacientesAtendidos.push({
  //             ...pacienteData,
  //             ...data, // Incluimos también los datos de 'historiaClinica' si es relevante
  //           });
  //         } else {
  //           console.error(`Paciente con ID ${pacienteId} no encontrado en la colección 'users'.`);
  //         }
          
  //         break; // Salimos del bucle si encontramos un turno que coincide
  //       }
  //     }
  //   }
  
  //   return pacientesAtendidos;
  // }

  
 
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


  async filtrarTurnosPorCampoClinica(pacienteId: string, campoBusqueda: any, valor: any): Promise<Record<string, any>> {
    try {
      console.log("esto es lo que traemos", pacienteId, campoBusqueda, valor);
  
      const pacienteRef = doc(this.firestore, `historiaClinica/${pacienteId}`);
      const pacienteDoc = await getDoc(pacienteRef);
  
      if (pacienteDoc.exists()) {
        const data = pacienteDoc.data();
        console.log('Datos del paciente:', data); // Verificar los datos
        const turnos: Record<string, any> = data?.['turnos'] || {}; // Turnos como objeto de claves dinámicas
  
        let turnosFiltrados: Record<string, any> = {}; // Cambié aquí para guardar todos los turnos filtrados
  
        for (const turnoId in turnos) {
          const turno = turnos[turnoId];
          const coincideConHistoriaClinica = turno[campoBusqueda] == valor;
          const coincideConDatosDinamicos = turno.datosDinamicos?.some((dato: any) => dato.clave == campoBusqueda && dato.valor == valor);
  
          if (coincideConHistoriaClinica || coincideConDatosDinamicos) {
            console.log('Coincidencia encontrada para turno:', turno);
  
            // Ahora buscar el detalle del turno en la colección Turnos
            const turnoRef = doc(this.firestore, `Turnos/${turno.turnoId}`);
            const turnoSnapshot = await getDoc(turnoRef);
  
            if (turnoSnapshot.exists()) {
              turnosFiltrados[turnoId] = turnoSnapshot.data(); // Agregar el documento completo de turno
            } else {
              console.log(`No se encontró el turno con ID: ${turnoId}`);
            }
          }
        }
  
        if (Object.keys(turnosFiltrados).length === 0) {
          console.log('No se encontraron turnos que coincidan.');
        }
  
        return turnosFiltrados;
      } else {
        console.log('No existe la historia clínica del paciente.');
      }
  
      return {};
    } catch (error) {
      console.error('Error al filtrar turnos:', error);
      throw error;
    }
  }
  
  
  


  async filtrarTurnosPorCampoTurnos(pacienteId: string, campoBusqueda: string, valor: any): Promise<Record<string, any>> {
    try {
      // Referencia a la colección Turnos
      const turnosRef = collection(this.firestore, 'Turnos');
  
      // Filtrar inicialmente por pacienteId
      const pacienteQuery = query(turnosRef, where('pacienteId', '==', pacienteId));
      const pacienteSnapshot = await getDocs(pacienteQuery);
  
      // Filtrar más por campo específico (si aplica)
      const turnosFiltrados: Record<string, any> = {};
      pacienteSnapshot.forEach((doc) => {
        const turnoData = doc.data();
        
        // Si el campo de búsqueda y valor coinciden, incluir el turno
        if (campoBusqueda && turnoData[campoBusqueda] === valor) {
          turnosFiltrados[doc.id] = turnoData;
        } else if (!campoBusqueda) {
          // Si no se especifica campo de búsqueda, incluir todos los turnos del paciente
          turnosFiltrados[doc.id] = turnoData;
        }
      });
  
      return turnosFiltrados;
    } catch (error) {
      console.error('Error al filtrar turnos:', error);
      throw error;
    }
  }
  
  
  
  


}
