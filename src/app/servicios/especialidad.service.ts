import { Injectable } from '@angular/core';
import { Firestore, collection, setDoc, doc, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  constructor(private firestore: Firestore) {}
  async addEspecialidad(nombre: string, imagen: string): Promise<void> {
    const especialidadRef = doc(collection(this.firestore, 'especialidades'));
    await setDoc(especialidadRef, { nombre, imagen });
  }
  
  async getEspecialidades(): Promise<any[]> {
    const especialidadesCollection = collection(this.firestore, 'especialidades');
    const especialidadesSnapshot = await getDocs(especialidadesCollection);
    return especialidadesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async getEspecialidadesPorEspecialista(especialista: any): Promise<any[]> { 
  try {
    // Traemos la colección de especialidades desde Firestore
    const especialidadesCollection = collection(this.firestore, 'especialidades');
    const especialidadesSnapshot = await getDocs(especialidadesCollection);
  
    // Creamos un array para las especialidades que coincidan
    const especialidades: any[] = [];
  
    // Recorremos todas las especialidades de Firestore
    for (const doc of especialidadesSnapshot.docs) {
      const especialidad = doc.data() as { nombre: string }; // Aseguramos que tiene 'nombre'
  
      // Ahora recorremos las especialidades del especialista
      for (const especialidadAsociada of especialista.especialidades) {
        // Si el nombre de la especialidad coincide, la agregamos al array
        if (especialidadAsociada === especialidad.nombre) {
          especialidades.push({ id: doc.id, ...especialidad });
          break; // Salimos del loop de especialidades del especialista si ya encontramos la coincidencia
        }
      }
    }
  
    return especialidades;
  } catch (error) {
    console.error('Error al obtener las especialidades del especialista:', error);
    throw new Error('No se pudieron obtener las especialidades');
  }
}

  
  
  

  async getEspecialidad(id: string): Promise<any> {
    const especialidadRef = doc(this.firestore, `especialidades/${id}`);
    const especialidadSnap = await getDoc(especialidadRef);
    if (especialidadSnap.exists()) {
      return { id: especialidadSnap.id, ...especialidadSnap.data() };
    } else {
      throw new Error('No se encontró la especialidad');
    }
  }

  async updateEspecialidad(id: string, nombre: string): Promise<void> {
    const especialidadRef = doc(this.firestore, `especialidades/${id}`);
    await updateDoc(especialidadRef, { nombre });
  }
}
