import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion-usuarios',
  standalone: false,
  templateUrl: './seccion-usuarios.component.html',
  styleUrl: './seccion-usuarios.component.scss'
})
export class SeccionUsuariosComponent {
  usuarioSeleccionado: any = null;

  mostrarDetalles(usuario: any) {
    this.usuarioSeleccionado = usuario; 
  }
}
