import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../../servicios/authentication.service';

@Component({
  selector: 'app-listado-admin',
  standalone: false,
  templateUrl: './listado-admin.component.html',
  styleUrl: './listado-admin.component.scss'
})
export class ListadoAdminComponent {
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
      this.usuarios = todosLosUsuarios.filter(usuario => usuario.role === 'administrador'); 
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
}
