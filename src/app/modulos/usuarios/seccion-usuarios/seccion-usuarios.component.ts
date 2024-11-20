import { Component } from '@angular/core';
import { ExcelService } from '../../../servicios/excel.service';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { TurnoService } from '../../../servicios/turnos.service';
import { AuthenticationService } from '../../../servicios/authentication.service';

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
click: any;

  constructor(private excelService: ExcelService, private turnoService : TurnoService, private authenticationService: AuthenticationService) {}

 

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

  async exportarUsuarioSeleccionado() {
    if (this.usuarioSeleccionado) {
      const usuario = this.usuarioSeleccionado;
      let turnos = [];
      let turnosData: { Fecha: any; Hora: string; Paciente: any; Especialidad: any; Especialista: any; }[] = [];
  
      try {
        if (usuario.role === "especialista") {
          turnos = await this.turnoService.obtenerTurnosExcelEspecialistas(usuario);
        } else if (usuario.role === "paciente") {
          turnos = await this.turnoService.obtenerTurnosExcelPacientes(usuario);
        }
  
        // Mapea los turnos solo si se obtuvieron
        turnosData = turnos.map(turno => ({
          Fecha: turno.fecha,
          Hora: `${turno.horaInicio} - ${turno.horaFin}`,
          Paciente: turno.paciente || "-",
          Especialidad: turno.especialidad,
          Especialista: turno.especialista,
        }));
      } catch (error) {
        console.error(`Error al obtener turnos para ${usuario.role}:`, error);
        turnosData = []; // Asegurarse de que sea un array vacío si hay error
      }
  
      // Datos del usuario
  
  
      // Combina los datos de usuario con los turnos
      const combinedData = [
        { Título: "Turnos" },
        ...turnosData,
      ];
  
      // Define el nombre del archivo
      const fileName = `Detalles_${usuario.nombre}_${usuario.apellido}`;
  
      // Llamada al servicio para exportar a Excel
      this.excelService.exportToExcel(combinedData, fileName);
    }
  }
  
  async exportarTodosLosUsuarios() {
    try {
      // Obtener todos los usuarios
      const usuarios = await this.authenticationService.obtenerUsuarios();
  
      // Array para almacenar todos los datos combinados
      const combinedData = [];
  
      for (const usuario of usuarios) {
        let usuarioData: Record<string, any> = {
          Nombre: usuario.nombre,
          Apellido: usuario.apellido,
          DNI: usuario.dni,
          Edad: usuario.edad,
          Email: usuario.email,
          Rol: usuario.role,
        };
  
        // Agregar campos específicos según el rol
        switch (usuario.role) {
          case 'paciente':
            usuarioData['Obra Social'] = usuario.obraSocial;
            break;
          case 'especialista':
            usuarioData['Especialidades'] = usuario.especialidades ? usuario.especialidades.join(", ") : 'N/A';
            break;
          // El administrador no requiere campos adicionales
          default:
            break;
        }
  
        // Agregar los datos al archivo combinado
        combinedData.push(usuarioData);
        combinedData.push({}); // Línea vacía para separar usuarios
        combinedData.push({}); // Línea vacía para separar usuarios
      }
  
      // Exportar a Excel
      this.excelService.exportToExcel(combinedData, 'Listado_Usuarios');
    } catch (error) {
      console.error('Error al exportar usuarios:', error);
    }
  }
  
  
  
  
  
  
}