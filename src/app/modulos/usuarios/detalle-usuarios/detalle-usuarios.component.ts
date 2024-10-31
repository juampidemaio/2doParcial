import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-usuarios',
  standalone: false,
  templateUrl: './detalle-usuarios.component.html',
  styleUrl: './detalle-usuarios.component.scss'
})
export class DetalleUsuariosComponent {
  @Input() usuario: any; // Recibe el usuario seleccionado

  get esPaciente() {
    return this.usuario?.role === 'paciente';
  }

  get esEspecialista() {
    return this.usuario?.role === 'especialista';
  }

  get esAdministrador() {
    return this.usuario?.role === 'administrador';
  }
}
