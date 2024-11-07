import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { collection, doc, Firestore, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage'; // Asegúrate de que 'ref' se importe de 'storage'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject = new BehaviorSubject<any | null>(null); // Cambiar a any
  constructor(private auth: Auth, private firestore: Firestore) {}

  async uploadImage(file: File): Promise<string> {
    const storage = getStorage(); // Obtener correctamente la instancia de almacenamiento
    const storageRef = ref(storage, `images/${file.name}`); // Asegúrate de que ref sea del almacenamiento
  
    try {
      await uploadBytes(storageRef, file); // Subir el archivo al almacenamiento
      const downloadURL = await getDownloadURL(storageRef); // Obtener la URL de descarga
      return downloadURL; // Devolver la URL de descarga
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      throw error; // Manejar el error adecuadamente
    }
  }

  async registerUser(email: string, password: string, userData: any, role: 'paciente' | 'especialista' | 'administrador'): Promise<any> {
    try {
      const res = await createUserWithEmailAndPassword(this.auth, email, password);
  
      // Envía un correo de verificación
      await sendEmailVerification(res.user);
  
      const habilitado = role === 'especialista' ? false : true;
  
      const userDoc = {
        uid: res.user.uid,
        ...userData,
        role: role,
        createdAt: new Date(),
        habilitado: habilitado,
        emailVerificado: false, // Inicialmente no verificado
      };
      
      // Guardar solo los datos válidos en Firestore (sin incluir el archivo File)
      await setDoc(doc(this.firestore, 'users', res.user.uid), userDoc);
      return { ...res.user, role: role };
    } catch (error) {
      console.error(`Error al registrar el ${role}:`, error);
      throw error;
    }
  }
  async verificarCorreo(email: string): Promise<void> {
    const user = this.auth.currentUser;
    if (user) {
      // Esperar a que el correo sea verificado
      await user.reload(); // Recarga los datos del usuario
      const userData = await this.getUserData(user.uid);
      
      // Verificar si el correo ha sido verificado
      if (user.emailVerified) {
        // Actualizar Firestore
        await updateDoc(doc(this.firestore, `users/${user.uid}`), { emailVerificado: true });
      }
    }
  }
  
  
  
  async login(email: string, password: string): Promise<any | null> {
    try {
      const res = await signInWithEmailAndPassword(this.auth, email, password);
      await this.verificarCorreo(res.user.uid); // Verificar si el correo está verificado
      const userData = await this.getUserData(res.user.uid);
      
      if (userData.role === 'especialista') {
        if (!userData.habilitado) {
          throw new Error('Tu cuenta debe ser aprobada por un administrador antes de poder iniciar sesión.');
        }
        if (!userData.emailVerificado) {
          throw new Error('Debes verificar tu correo electrónico para ingresar.');
        }
      } else {
        if (!userData.emailVerificado) {
          throw new Error('Debes verificar tu correo electrónico para ingresar.');
        }
      }
  
      this.userSubject.next({ ...res.user, ...userData });
      return { ...res.user, ...userData };
    } catch (error) {
      console.error("Error en el login:", error);
      throw error;
    }
  }
  
  // Método para obtener datos del usuario
  private async getUserData(uid: string): Promise<any> {
    const userRef = doc(this.firestore, `users/${uid}`);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      throw new Error('No se encontró el documento del usuario');
    }
  }

  logout(): Promise<void> {
    return signOut(this.auth).then(() => {
      this.userSubject.next(null); 
    });
  }

  // Método para habilitar un usuario
  async habilitarUsuario(usuarioId: string) {
    const userDoc = doc(this.firestore, 'users', usuarioId);
    await updateDoc(userDoc, { habilitado: true });
  }

  // Método para inhabilitar un usuario
  async inhabilitarUsuario(usuarioId: string) {
    const userDoc = doc(this.firestore, 'users', usuarioId);
    await updateDoc(userDoc, { habilitado: false });
  }

  // Método para obtener todos los usuarios
  async obtenerUsuarios(): Promise<any[]> {
    const usuarioCollection = collection(this.firestore, 'users');
    const usuarioSnapshot = await getDocs(usuarioCollection);
    return usuarioSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  // Obtener el usuario actual como observable
  getUser(): Observable<any | null> {
    return this.userSubject.asObservable();
  }


  
}
