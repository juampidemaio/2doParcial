import { Injectable } from '@angular/core';
import { Firestore, collection, setDoc, doc, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  constructor(private firestore: Firestore) {}

  async addEspecialidad(nombre: string): Promise<void> {
    const especialidadRef = doc(collection(this.firestore, 'especialidades'));
    await setDoc(especialidadRef, { nombre });
  }

  async getEspecialidades(): Promise<any[]> {
    const especialidadesCollection = collection(this.firestore, 'especialidades');
    const especialidadesSnapshot = await getDocs(especialidadesCollection);
    return especialidadesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
