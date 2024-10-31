import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../../servicios/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-usuarios',
  standalone: false,
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.scss'
})
export class ListadoUsuariosComponent {
  @Output() usuarioSeleccionado = new EventEmitter<any>();
  usuarios: any[] = []; 

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  seleccionarUsuario(usuario: any) {
    this.usuarioSeleccionado.emit(usuario); // Emitir el usuario seleccionado
  }
  async cargarUsuarios() {
    try {
      Swal.fire({
        title: 'Cargando usuarios...',
        html: 'Por favor, espere un momento...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Recuperar usuarios
      this.usuarios = await this.authService.obtenerUsuarios();
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al cargar usuarios.',
      });
    } finally {
      Swal.close(); // Cierra el modal de carga
    }
  }


  async habilitarUsuario(usuario: any) {
    if (usuario.habilitado) {
      Swal.fire({
        icon: 'info',
        title: 'Información',
        text: 'El usuario ya está habilitado.',
      });
      return; // Salir si ya está habilitado
    }
    if (usuario.role !== 'especialista') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se puede habilitar a un paciente.',
      });
      return; // Salir si el usuario no es un especialista
    }

    await this.authService.habilitarUsuario(usuario.uid);
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'El usuario ha sido habilitado correctamente.',
    });
    await this.cargarUsuarios(); // Recargar la lista
  }

  async inhabilitarUsuario(usuario: any) {
    if (!usuario.habilitado) {
      Swal.fire({
        icon: 'info',
        title: 'Información',
        text: 'El usuario ya está inhabilitado.',
      });
      return; // Salir si ya está inhabilitado
    }
    if (usuario.role !== 'especialista') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se puede inhabilitar a un paciente.',
      });
      return; // Salir si el usuario no es un especialista
    }

    await this.authService.inhabilitarUsuario(usuario.uid);
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'El usuario ha sido inhabilitado correctamente.',
    });
    await this.cargarUsuarios(); 
  }
}