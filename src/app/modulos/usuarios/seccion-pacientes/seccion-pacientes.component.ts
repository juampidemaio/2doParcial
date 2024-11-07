import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../../servicios/authentication.service';
import { TurnoService } from '../../../servicios/turnos.service';

@Component({
  selector: 'app-seccion-pacientes',
  standalone: false,
  templateUrl: './seccion-pacientes.component.html',
  styleUrl: './seccion-pacientes.component.scss'
})
export class SeccionPacientesComponent {
  pacientesAtendidos: any[] = []; // Lista de pacientes atendidos
  pacienteSeleccionado: any = null; // Paciente seleccionado
  turnos: { [key: string]: any } = {}; // Historial del paciente seleccionado
  historialVisible: boolean = false; // Control de visibilidad del historial
  usuario:any;

  constructor(
    private authenticationService: AuthenticationService,
    private turnosService: TurnoService
  ) {}


  ngOnInit(): void {
    this.cargarPacientesAtendidos();
  }

  // Método para cargar los pacientes atendidos por el especialista
  cargarPacientesAtendidos(): void {
    this.authenticationService.getUser().subscribe(user => {
      if (user) {
        this.usuario = user;
        this.turnosService.obtenerPacientesAtendidosPorEspecialista(this.usuario.uid)
          .then((pacientes) => {
            console.log("Pacientes atendidos:", pacientes); // Verificar contenido
            this.pacientesAtendidos = pacientes;
          })
          .catch(error => {
            Swal.fire('Error', 'No se pudieron cargar los pacientes atendidos', 'error');
          });
      } else {
        Swal.fire('Error', 'No se encontró el usuario', 'error');
      }
    });
  }
  
  

  // Método para seleccionar un paciente y cargar su historial
  seleccionarPaciente(paciente: any): void {
    this.pacienteSeleccionado = paciente;
    this.historialVisible = false; // Oculta el historial hasta que se haga clic en el botón de alternar
  }

  // Alternar visibilidad del historial clínico
  toggleHistoriaClinica(): void {
    this.historialVisible = !this.historialVisible;
    if (this.historialVisible) {
      this.obtenerHistoriaClinica(this.pacienteSeleccionado.uid);
    }
  }

  // Método para obtener la historia clínica del paciente seleccionado
  async obtenerHistoriaClinica(pacienteId: string) {
    this.turnos = await this.turnosService.obtenerHistoriaClinica(pacienteId);
  }

  // Función para obtener las claves del objeto turnos
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
