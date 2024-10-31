import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../../servicios/authentication.service';

@Component({
  selector: 'app-registro-especialista',
  standalone: false,
  templateUrl: './registro-especialista.component.html',
  styleUrl: './registro-especialista.component.scss'
})
export class RegistroEspecialistaComponent {
 especialistaForm: FormGroup;
  private readonly allowedFileTypes: string[] = ['image/jpeg', 'image/png', 'image/gif']; // Tipos de archivo permitidos
  private readonly maxFileSize: number = 2 * 1024 * 1024; // 2 MB en bytes

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
) {
    this.especialistaForm = this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
        dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
        especialidad: ['', Validators.required],
        nuevaEspecialidad: [''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        imagenes: this.fb.array([], [Validators.required]) // Validación de required aquí
    });
}
  onEspecialidadChange(): void {
    const especialidadControl = this.especialistaForm.get('especialidad');
    const nuevaEspecialidadControl = this.especialistaForm.get('nuevaEspecialidad');

    if (especialidadControl?.value === 'otro') {
      nuevaEspecialidadControl?.setValidators([Validators.required]);
    } else {
      nuevaEspecialidadControl?.clearValidators();
    }

    nuevaEspecialidadControl?.updateValueAndValidity();
  }
  agregarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;
    const imagenesArray = this.especialistaForm.get('imagenes') as FormArray;

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

        // Limpiar el array antes de agregar una nueva imagen
        imagenesArray.clear(); 
        imagenesArray.push(this.fb.control(file));
    }
}

  mostrarError(campo: string, error: string): boolean {
    const control = this.especialistaForm.get(campo);
    return control ? control.hasError(error) && (control.dirty || control.touched) : false;
  }

  // Registrar especialista
 // Al guardar el especialista
 async guardarEspecialista(): Promise<void> {
  if (this.especialistaForm.valid) {
    const { especialidad, nuevaEspecialidad } = this.especialistaForm.value;

    const especialidadFinal = especialidad || nuevaEspecialidad;

    if (!especialidadFinal) {
      Swal.fire('Error', 'Debes seleccionar una especialidad o ingresar una nueva.', 'error');
      return;
    }

    const imagenesArray = this.especialistaForm.get('imagenes') as FormArray;
    if (imagenesArray.length !== 1) {
      Swal.fire('Error', 'Debes subir exactamente 1 imagen.', 'error');
      return;
    }

    const file = imagenesArray.at(0).value; // Obtén el archivo desde el FormArray
    try {
      const imageUrl = await this.authService.uploadImage(file); // Sube la imagen y obtiene la URL

      // Crear los datos del usuario sin el archivo 'File'
      const userData = { 
        ...this.especialistaForm.value, 
        especialidad: especialidadFinal, 
        role: 'especialista',
        imageUrl // Guardar solo la URL de la imagen
      };
      delete userData.imagenes; // Eliminar el campo de imágenes que contiene el archivo
      
      await this.authService.registerUser(userData.email, userData.password, userData, 'especialista');
      
      Swal.fire('Registro exitoso', 'El especialista ha sido registrado correctamente', 'success');
      this.router.navigate(['/bienvenida']);
    } catch (error) {
      Swal.fire('Error', `Ha ocurrido un error durante la subida de la imagen: ${error}`, 'error');
    }
    
  } else {
    Swal.fire('Formulario inválido', 'Por favor, completa todos los campos', 'warning');
  }
}

}