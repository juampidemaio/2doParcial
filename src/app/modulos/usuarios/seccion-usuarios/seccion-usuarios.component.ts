import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion-usuarios',
  standalone: false,
  templateUrl: './seccion-usuarios.component.html',
  styleUrl: './seccion-usuarios.component.scss'
})
export class SeccionUsuariosComponent {
  registroVisible: boolean = false;
  listadoSeleccionado: string | null = "paciente"; // Guardará el listado seleccionado
  usuarioSeleccionado: any = null; // Aquí almacenarás el usuario seleccionado

  // Método para mostrar el registro y ocultar otros componentes
  toggleRegistro() {
    this.registroVisible = !this.registroVisible; // Cambia el estado de registroVisible
    if (this.registroVisible) {
      this.listadoSeleccionado = null; // Oculta los listados al mostrar registro
    } else {
      // Aquí podrías reestablecer el listado seleccionado si es necesario
    }
  }

  mostrarListado(tipo: string) {
    this.listadoSeleccionado = tipo; // Establece el listado seleccionado
    this.registroVisible = false; // Asegúrate de ocultar el registro si se selecciona un listado
  }

  mostrarDetalles(usuario: any) {
    this.usuarioSeleccionado = usuario; // Método para manejar la selección de un usuario
  }
}