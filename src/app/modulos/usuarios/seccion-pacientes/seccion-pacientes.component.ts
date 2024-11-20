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
  turnos: any[] = [];  // Usamos un array en lugar de un objeto
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

  async obtenerHistoriaClinica(pacienteId: string) {
    const turnos = await this.turnosService.obtenerHistoriaClinicaConTurnos(pacienteId);
    
    this.turnos = turnos.filter(turno => 
      turno.historiaClinica.altura !== 'N/A' &&
      turno.historiaClinica.peso !== 'N/A' &&
      turno.historiaClinica.temperatura !== 'N/A' &&
      turno.historiaClinica.presion !== 'N/A'
    ).filter(turno => turno.especialista_id === this.usuario.uid); // Filtra por especialista
  
    console.log(this.turnos, "quiero ver su especialista id a ver si lo trae");
  
    if (this.turnos.length > 0) {
      console.log('Turnos con historia clínica:', this.turnos);
    } else {
      console.log('No hay turnos con historia clínica.');
    }
  }
  
  async verResenaTurno(turno: any) {
    if (turno.estado !== 'realizado') {
      Swal.fire('Aviso', 'Solo puedes ver la reseña de un turno realizado', 'info');
      return;
    }
    
    try {
      // Llamamos al servicio para obtener la reseña del turno
      Swal.fire('Reseña del Turno', turno.reseña, 'info');
    } catch (error) {
      console.error('Error al obtener reseña:', error);
      Swal.fire('Error', 'No se pudo obtener la reseña', 'error');
    }
  }

  // toggleFavorito(event: Event, paciente: any): void {
  //   event.stopPropagation(); // Evita que se dispare el evento 'click' en el card
  //   paciente.favorito = !paciente.favorito; // Alterna el estado de favorito
  //   console.log(`Paciente ${paciente.nombre} ${paciente.favorito ? 'añadido a favoritos' : 'removido de favoritos'}`);
  // }
  

}
