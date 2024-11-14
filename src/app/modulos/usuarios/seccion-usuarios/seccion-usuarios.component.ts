import { Component } from '@angular/core';
import { ExcelService } from '../../../servicios/excel.service';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-seccion-usuarios',
  standalone: false,
  templateUrl: './seccion-usuarios.component.html',
  styleUrl: './seccion-usuarios.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('800ms cubic-bezier(0.68, -0.55, 0.27, 1.55)', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
  
})
export class SeccionUsuariosComponent {
  registroVisible: boolean = false;
  listadoSeleccionado: string | null = "paciente"; // Guardará el listado seleccionado
  usuarioSeleccionado: any = null; // Aquí almacenarás el usuario seleccionado
  usuarios: any[] = []; // Lista de usuarios a exportar (rellénala con datos reales)

  constructor(private excelService: ExcelService) {}

 

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

  exportarUsuarios() {
    if (this.usuarioSeleccionado) {
      const usuario = this.usuarioSeleccionado;
  
      // Prepara los datos para el Excel, excluyendo campos vacíos
      const data = [
        Object.entries({
          Nombre: usuario.nombre,
          Apellido: usuario.apellido,
          Edad: usuario.edad,
          DNI: usuario.dni,
          Email: usuario.email,
          ObraSocial: usuario.obraSocial,
          Especialidades: usuario.especialidades ? usuario.especialidades.join(", ") : null,
        })
          .filter(([_, value]) => value !== null && value !== undefined && value !== "")
          .reduce<Record<string, string | number>>((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {})
      ];
  
      // Define el nombre del archivo
      const fileName = `Detalles_${usuario.nombre}_${usuario.apellido}`;
  
      // Llamada al servicio de Excel
      this.excelService.exportToExcel(data, fileName);
    }
  }
  
  
}