import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../../servicios/authentication.service';

@Component({
  selector: 'app-registro-admin',
  standalone: false,
  templateUrl: './registro-admin.component.html',
  styleUrl: './registro-admin.component.scss'
})
export class RegistroAdminComponent {
  adminForm: FormGroup;
  private readonly allowedFileTypes: string[] = ['image/jpeg', 'image/png', 'image/gif']; // Tipos de archivo permitidos
  private readonly maxFileSize: number = 2 * 1024 * 1024; // 2 MB en bytes

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router 
  ) {
    this.adminForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8,8}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      imagenes: this.fb.array([], [Validators.required]) 
    });
  }

  // Método para agregar y validar la imagen
  agregarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;
    const imagenesArray = this.adminForm.get('imagenes') as FormArray;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Validar el tipo de archivo y el tamaño
      if (!this.allowedFileTypes.includes(file.type)) {
        Swal.fire('Tipo de archivo no válido', 'Por favor, sube una imagen en formato JPEG, PNG o GIF.', 'error');
        return;
      }

      if (file.size > this.maxFileSize) {
        Swal.fire('Tamaño de archivo excedido', 'El tamaño máximo permitido es de 2 MB.', 'error');
        return;
      }

      // Si la validación es exitosa y solo se permite una imagen
      if (imagenesArray.length < 1) {
        imagenesArray.push(this.fb.control(file));
      } else {
        Swal.fire('Error', 'Solo se permite subir una imagen.', 'error');
      }
    }
  }

  // Método para subir la imagen a Firebase Storage
  async uploadImage(file: File): Promise<string> {
    try {
      const downloadURL = await this.authService.uploadImage(file); // Utiliza el servicio de autenticación para subir la imagen y obtener la URL
      return downloadURL;
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      Swal.fire('Error al subir la imagen', 'Hubo un problema al subir la imagen. Por favor, intenta de nuevo.', 'error');
      throw error;
    }
  }

  // Mostrar errores de validación
  mostrarError(campo: string, error: string): boolean {
    const control = this.adminForm.get(campo);
    return control ? control.hasError(error) && (control.dirty || control.touched) : false;
  }

  // Registrar admin
  async guardarAdmin(): Promise<void> {
    if (this.adminForm.valid) {
      const imagenesArray = this.adminForm.get('imagenes') as FormArray;
      if (imagenesArray.length !== 1) {
        Swal.fire('Error', 'Debes subir exactamente 1 imagen.', 'error');
        return;
      }
  
      // Obtener el archivo de imagen
      const file = imagenesArray.at(0).value as File;
  
      try {
        // Subir la imagen y obtener la URL
        const imageUrl = await this.uploadImage(file);
        
        // Crear el objeto de datos del usuario con la URL de la imagen
        const userData = { 
          ...this.adminForm.value, 
          role: 'administrador', 
          imageUrl // Guardar la URL de la imagen en lugar del archivo
        };
  
        // Eliminar la propiedad 'imagenes' antes de guardar
        delete userData.imagenes;
  
        // Registrar el administrador
        await this.authService.registerUser(userData.email, userData.password, userData, "administrador"); // Asegúrate de que esta función maneje correctamente los datos.
  
        Swal.fire('Registro exitoso', 'El administrador ha sido registrado correctamente', 'success');
        this.adminForm.reset();
        this.router.navigate(['/home']);
      } catch (error) {
        Swal.fire('Error', 'Ha ocurrido un error durante el registro', 'error');
      }
    } else {
      Swal.fire('Formulario inválido', 'Por favor, completa todos los campos', 'warning');
    }
  }
  
}