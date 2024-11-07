import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../servicios/authentication.service';
import { DetalleUsuariosComponent } from '../../modulos/usuarios/detalle-usuarios/detalle-usuarios.component';
import { UsuariosModule } from '../../modulos/usuarios/usuarios.module';
import { TurnoService } from '../../servicios/turnos.service';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [CommonModule,FormsModule,UsuariosModule],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.scss'
})
export class MiPerfilComponent {
  usuario: any = null;
  esPaciente: boolean = false;
  esEspecialista: boolean = false;
  esAdministrador: boolean = false;
  historiaClinica: any;
  turnos: { [key: string]: any } = {}; // Usamos un objeto con claves dinámicas
  mostrarHistoriaClinica: boolean = false; // Controla la visibilidad del historial
  historialVisible = false;


  constructor(
    private authenticationService: AuthenticationService,
    private turnosService: TurnoService
  ) {}

  ngOnInit(): void {
    this.cargarUsuario();
  }

  // Método para cargar los datos del usuario
  cargarUsuario(): void {
    this.authenticationService.getUser().subscribe(user => {
      if (user) {
        this.usuario = user;
        this.establecerRolUsuario();
        this.obtenerHistoriaClinica(this.usuario.uid);
      } else {
        Swal.fire('Error', 'No se encontró el usuario', 'error');
      }
    });
  }

  async obtenerHistoriaClinica(pacienteId: string) {
    this.turnos = await this.turnosService.obtenerHistoriaClinica(pacienteId);
    if (this.turnos) {
      console.log(this.turnos);
    }
  }
  // Función que devuelve las claves del objeto
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  toggleHistoriaClinica() {
    this.historialVisible = !this.historialVisible;
    this.obtenerHistoriaClinica(this.usuario.uid);
  }

  // Método para establecer el rol del usuario
  establecerRolUsuario(): void {
    // Aquí se asignan los roles según los datos del usuario
    if (this.usuario.role === 'paciente') {
      this.esPaciente = true;
    } else if (this.usuario.role === 'especialista') {
      this.esEspecialista = true;
    } else if (this.usuario.role === 'administrador') {
      this.esAdministrador = true;
    }
  }

}
