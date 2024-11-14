import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../../servicios/authentication.service';
import { EspecialidadService } from '../../../servicios/especialidad.service';

@Component({
  selector: 'app-registro-especialista',
  standalone: false,
  templateUrl: './registro-especialista.component.html',
  styleUrl: './registro-especialista.component.scss'
})
export class RegistroEspecialistaComponent {
  especialistaForm: FormGroup;
  private readonly allowedFileTypes: string[] = ['image/jpeg', 'image/png', 'image/gif'];
  private readonly maxFileSize: number = 2 * 1024 * 1024; // 2 MB en bytes
  especialidades: string[] = [];
  captchaValido: boolean = false;
  

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private especialidadService: EspecialidadService
  ) {
    this.especialistaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      especialidades: this.fb.array([], Validators.required),
      nuevaEspecialidad: [''],
      imagenesEspecialidades: this.fb.array([]), // Array para imágenes de especialidades
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      imagenes: this.fb.array([], Validators.required)
    });
  }

  ngOnInit(): void {
    this.loadEspecialidades();
  }
  private loadEspecialidades(): void {
    this.especialidadService.getEspecialidades().then(data => {
      // Extrae solo el campo de nombre de cada especialidad
      this.especialidades = data.map(especialidad => especialidad.nombre);
    });
  }
  
  onEspecialidadChange(event: any): void {
    const especialidadesArray = this.especialistaForm.get('especialidades') as FormArray;

    if (event.target.checked) {
      especialidadesArray.push(this.fb.control(event.target.value));
    } else {
      const index = especialidadesArray.controls.findIndex(control => control.value === event.target.value);
      if (index >= 0) {
        especialidadesArray.removeAt(index);
      }
    }
  }
  agregarNuevaEspecialidad(event?: Event): void {
    const nuevaEspecialidad = this.especialistaForm.get('nuevaEspecialidad')?.value?.trim();
    
    if (!nuevaEspecialidad) {
      Swal.fire('Advertencia', 'Ingresa una nueva especialidad antes de agregarla.', 'warning');
      return;
    }
  
    if (this.especialidades.includes(nuevaEspecialidad)) {
      Swal.fire('Advertencia', 'La especialidad ya existe en la lista.', 'warning');
      return;
    }
  
    let file: File | null = null;
  
    if (event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        file = input.files[0];
        
        if (!this.allowedFileTypes.includes(file.type)) {
          Swal.fire('Tipo de archivo no válido', 'Por favor, sube una imagen en formato JPEG, PNG o GIF.', 'error');
          return;
        }
  
        if (file.size > this.maxFileSize) {
          Swal.fire('Tamaño de archivo excedido', 'El tamaño máximo permitido es de 2 MB.', 'error');
          return;
        }
      }
    }
  
    const subirImagen = file 
      ? this.authService.uploadImage(file) // Subir imagen seleccionada
      : Promise.resolve('https://proquimed.com.mx/wp-content/uploads/2022/04/hablemos-de-la-especialidad-medica-de-patologia-clinica-blog-proquimed.jpg'); // Usar imagen predeterminada si no hay archivo
    
    subirImagen.then((urlImagen) => {
      this.especialidadService.addEspecialidad(nuevaEspecialidad, urlImagen).then(() => {
        Swal.fire('Éxito', 'Nueva especialidad agregada correctamente.', 'success');
        this.loadEspecialidades();
  
        const especialidadesArray = this.especialistaForm.get('especialidades') as FormArray;
        especialidadesArray.push(this.fb.control(nuevaEspecialidad));
        this.especialistaForm.get('nuevaEspecialidad')?.reset();
      }).catch(error => {
        Swal.fire('Error', 'No se pudo agregar la especialidad.', 'error');
      });
    });
  }
    


  agregarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;
    const imagenesArray = this.especialistaForm.get('imagenes') as FormArray;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (!this.allowedFileTypes.includes(file.type)) {
        Swal.fire('Tipo de archivo no válido', 'Por favor, sube una imagen en formato JPEG, PNG o GIF.', 'error');
        return;
      }

      if (file.size > this.maxFileSize) {
        Swal.fire('Tamaño de archivo excedido', 'El tamaño máximo permitido es de 2 MB.', 'error');
        return;
      }

      imagenesArray.clear();
      imagenesArray.push(this.fb.control(file));
    }
  }

  mostrarError(campo: string, error: string): boolean {
    const control = this.especialistaForm.get(campo);
    return control ? control.hasError(error) && (control.dirty || control.touched) : false;
  }

  async guardarEspecialista(): Promise<void> {
    if (this.especialistaForm.valid && this.captchaValido) {
      const especialidadesArray = this.especialistaForm.get('especialidades') as FormArray;
      const nuevaEspecialidad = this.especialistaForm.get('nuevaEspecialidad')?.value?.trim();
  
      // Verificar si ya existe la nueva especialidad antes de agregarla.
      if (nuevaEspecialidad && !especialidadesArray.value.includes(nuevaEspecialidad)) {
        especialidadesArray.push(this.fb.control(nuevaEspecialidad));
      }
  
      if (especialidadesArray.length === 0) {
        Swal.fire('Advertencia', 'Debes seleccionar al menos una especialidad o agregar una nueva.', 'warning');
        return;
      }
  
      Swal.fire({
        title: 'Cargando...',
        text: 'Por favor, espera un momento.',
        allowOutsideClick: false,
      });
  
      Swal.showLoading();
  
      try {
        const imagenesArray = this.especialistaForm.get('imagenes') as FormArray;
        const file = imagenesArray.at(0).value;
  
        const imageUrl = await this.authService.uploadImage(file);
  
        const userData = {
          ...this.especialistaForm.value,
          especialidades: especialidadesArray.value,
          role: 'especialista',
          imageUrl
        };
        delete userData.imagenes; // Eliminar campo no deseado
        delete userData.nuevaEspecialidad; // Eliminar campos adicionales si existen
        delete userData.imagenesEspecialidades; // Eliminar campo no deseado
  
        await this.authService.registerUser(userData.email, userData.password, userData, 'especialista');
  
        Swal.fire('Registro exitoso', 'El especialista ha sido registrado correctamente', 'success');
        this.router.navigate(['/bienvenida']);
      } catch (error) {
        Swal.fire('Error', `Ha ocurrido un error durante la subida de la imagen: ${error}`, 'error');
      } finally {
        Swal.close();
      }
    } else {
      Swal.fire('Formulario inválido', 'Por favor, completa todos los campos', 'warning');
    }
  }
  

onCaptchaResolved(captchaResponse: any): void {
  this.captchaValido = !!captchaResponse; // Actualiza el estado de captcha
}

}