import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../../servicios/authentication.service';

@Component({
  selector: 'app-registro-paciente',
  standalone: false,
  templateUrl: './registro-paciente.component.html',
  styleUrl: './registro-paciente.component.scss'
})
export class RegistroPacienteComponent {
  pacienteForm: FormGroup;
  private readonly allowedFileTypes: string[] = ['image/jpeg', 'image/png', 'image/gif']; // Tipos de archivo permitidos
  private readonly maxFileSize: number = 2 * 1024 * 1024; // 2 MB en bytes

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.pacienteForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8,8}$')]],
      obraSocial: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      imagenes: this.fb.array([], [Validators.required]) // Al menos 2 imágenes requeridas
    });
  }

  // Agregar imágenes
  agregarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;
    const imagenesArray = this.pacienteForm.get('imagenes') as FormArray;

    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files);

      // Validar tipo de archivo y tamaño
      for (const file of files) {
        if (!this.allowedFileTypes.includes(file.type)) {
          Swal.fire('Tipo de archivo no válido', 'Solo se permiten imágenes en formato JPEG, PNG o GIF.', 'error');
          return;
        }
        if (file.size > this.maxFileSize) {
          Swal.fire('Tamaño de archivo excedido', 'El tamaño máximo permitido es de 2 MB por archivo.', 'error');
          return;
        }
      }

      // Limpiar el array si ya hay 2 imágenes
      if (imagenesArray.length >= 2) {
        Swal.fire('Error', 'Solo puedes subir hasta 2 imágenes.', 'error');
        return;
      }

      // Agregar archivos seleccionados al array de imágenes (máximo 2)
      files.forEach(file => {
        if (imagenesArray.length < 2) {
          imagenesArray.push(this.fb.control(file));
        }
      });
    }
  }

  mostrarError(campo: string, error: string): boolean {
    const control = this.pacienteForm.get(campo);
    return control ? control.hasError(error) && (control.dirty || control.touched) : false;
  }

  // Registrar paciente
  async guardarPaciente(): Promise<void> {
    if (this.pacienteForm.valid) {
      const imagenesArray = this.pacienteForm.get('imagenes') as FormArray;
      if (imagenesArray.length !== 2) {
        Swal.fire('Error', 'Debes subir exactamente 2 imágenes.', 'error');
        return;
      }
       Swal.fire({
        title: 'Cargando...',
        text: 'Por favor, espera un momento.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      try {
        // Subir las imágenes a Firebase Storage
        const imageUrls: string[] = [];
        for (let i = 0; i < imagenesArray.length; i++) {
          const file = imagenesArray.at(i).value;
          const imageUrl = await this.authService.uploadImage(file); // Sube la imagen y obtiene la URL
          imageUrls.push(imageUrl);
        }

        // Crear los datos del usuario con las URLs de las imágenes
        const userData = { 
          ...this.pacienteForm.value, 
          role: 'paciente',
          imagenes: imageUrls // Guardar solo las URLs de las imágenes
        };
        
        await this.authService.registerUser(userData.email, userData.password, userData, 'paciente');
        
        Swal.fire('Registro exitoso', 'El paciente ha sido registrado correctamente', 'success');
        this.pacienteForm.reset();
        this.router.navigate(['/bienvenida']);
      } catch (error) {
        Swal.fire('Error', `Ha ocurrido un error durante el registro: ${error}`, 'error');
      }
      finally {
        Swal.close(); // Cierra el loading al final
      }
    } else {
      Swal.fire('Formulario inválido', 'Por favor, completa todos los campos correctamente.', 'warning');
    }
  }
}
