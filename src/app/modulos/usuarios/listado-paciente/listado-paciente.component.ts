import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../../servicios/authentication.service';

@Component({
  selector: 'app-listado-paciente',
  standalone: false,
  templateUrl: './listado-paciente.component.html',
  styleUrl: './listado-paciente.component.scss'
})
export class ListadoPacienteComponent {
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
      this.usuarios = todosLosUsuarios.filter(usuario => usuario.role === 'paciente'); // Filtrar solo pacientes
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