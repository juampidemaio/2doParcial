import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../../servicios/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-especialista',
  standalone: false,
  templateUrl: './listado-especialista.component.html',
  styleUrl: './listado-especialista.component.scss'
})
export class ListadoEspecialistaComponent {
  @Output() usuarioSeleccionado = new EventEmitter<any>();
  usuarios: any[] = []; 

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  seleccionarUsuario(usuario: any) {
    this.usuarioSeleccionado.emit(usuario);
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

      const todosLosUsuarios = await this.authService.obtenerUsuarios();
      this.usuarios = todosLosUsuarios.filter(usuario => usuario.role === 'especialista'); // Filtrar solo especialistas
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al cargar usuarios.',
      });
    } finally {
      Swal.close();
    }
  }

  async alternarEstadoUsuario(usuario: any) {
    if (usuario.role !== 'especialista') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Solo se puede modificar el estado de un especialista.',
      });
      return;
    }

    try {
      if (usuario.habilitado) {
        await this.authService.inhabilitarUsuario(usuario.uid);
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'El usuario ha sido inhabilitado correctamente.',
        });
      } else {
        await this.authService.habilitarUsuario(usuario.uid);
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'El usuario ha sido habilitado correctamente.',
        });
      }
      usuario.habilitado = !usuario.habilitado; // Cambia el estado local
    } catch (error) {
      console.error('Error al modificar el estado del usuario:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo modificar el estado del usuario.',
      });
    }
  }
}