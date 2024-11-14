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
  captchaValido: boolean = false;
  

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
      const downloadURL = await this.authService.uploadImage(file); 
      return downloadURL;
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      Swal.fire('Error al subir la imagen', 'Hubo un problema al subir la imagen. Por favor, intenta de nuevo.', 'error');
      throw error;
    }
  }

  mostrarError(campo: string, error: string): boolean {
    const control = this.adminForm.get(campo);
    return control ? control.hasError(error) && (control.dirty || control.touched) : false;
  }

  // Registrar admin
  async guardarAdmin(): Promise<void> {
    if (this.adminForm.valid && this.captchaValido) {
      const imagenesArray = this.adminForm.get('imagenes') as FormArray;
      if (imagenesArray.length !== 1) {
        Swal.fire('Error', 'Debes subir exactamente 1 imagen.', 'error');
        return;
      }

      // Obtener el archivo de imagen
      const file = imagenesArray.at(0).value as File;

      // Muestra el loading con SweetAlert2
      Swal.fire({
        title: 'Cargando...',
        text: 'Por favor, espera un momento.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading(); // Muestra el spinner de carga
        }
      });

      try {
        const imageUrl = await this.uploadImage(file);

        const userData = { 
          ...this.adminForm.value, 
          role: 'administrador', 
          imageUrl 
        };

        delete userData.imagenes;

        await this.authService.registerUser(userData.email, userData.password, userData, "administrador"); 

        Swal.fire('Registro exitoso', 'El administrador ha sido registrado correctamente', 'success');
        this.adminForm.reset();
        this.router.navigate(['/bienvenida']);
      } catch (error) {
        Swal.fire('Error', 'Ha ocurrido un error durante el registro', 'error');
      } finally {
        Swal.close(); // Cierra el loading al final
      }
    } else {
      Swal.fire('Formulario inválido', 'Por favor, completa todos los campos', 'warning');
    }
  }
  
  onCaptchaResolved(captchaResponse: any): void {
    if (captchaResponse) {
      this.captchaValido = true;
      Swal.fire('Captcha validado', 'Captcha verificado correctamente', 'success');
    } else {
      this.captchaValido = false;
      Swal.fire('Captcha inválido', 'Por favor, resuelve el CAPTCHA correctamente', 'error');
    }
  }

  
}