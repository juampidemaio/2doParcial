import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { TurnoService } from '../../../servicios/turnos.service';
import { EspecialidadService } from '../../../servicios/especialidad.service';
import { EspecialistaService } from '../../../servicios/especialista.service';

@Component({
  selector: 'app-gestionar-turnos',
  standalone: false,
  templateUrl: './gestionar-turnos.component.html',
  styleUrl: './gestionar-turnos.component.scss'
})
export class GestionarTurnosComponent {
  especialidades: any[] = [];
  especialistas: any[] = [];
  horarios: any[] = [];
  nombreEspecialista: any;
  especialidadSeleccionada: string = ''; // Nueva variable para la especialidad seleccionada
  
  constructor(
    private turnoService: TurnoService,
    private especialidadService: EspecialidadService,
    private especialistaService: EspecialistaService
  ) {}

  ngOnInit() {
    this.cargarEspecialidades();
  }

  async cargarEspecialidades() {
    this.especialidades = await this.especialidadService.getEspecialidades();
  }

  async onEspecialidadChange(event: Event) {
    const selectElement = event.target as HTMLInputElement;
    this.especialidadSeleccionada = selectElement.value; // Guardamos la especialidad seleccionada
    if (this.especialidadSeleccionada) {
      try {
        this.especialistas = await this.especialistaService.getEspecialistasPorEspecialidad(this.especialidadSeleccionada);
        this.horarios = []; // Limpiamos la lista de turnos al cambiar de especialidad
      } catch (error) {
        Swal.fire('Error', 'No se pudieron cargar los especialistas', 'error');
      }
    } else {
      this.especialistas = [];
      this.horarios = [];
    }
  }

 async onEspecialistaChange(event: Event, especialista: any) {
  const selectElement = event.target as HTMLInputElement;
  const especialistaId = selectElement.value;
  if (especialistaId) {
    this.nombreEspecialista = `${especialista.nombre} ${especialista.apellido}`;
    
    try {
      const turnos = await this.turnoService.obtenerTurnosDisponiblesEspecialista(especialistaId);
      // Filtra turnos solo si tienen la propiedad especialidad
      this.horarios = turnos.filter((turno: any) => turno.especialidad === this.especialidadSeleccionada);
      this.horarios.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
    } catch (error) {
      Swal.fire('Error', 'No se pudieron cargar los turnos', 'error');
    }
  } else {
    this.horarios = [];
  }
}

  async cancelarTurno(turno: any) {
    if (['Aceptado', 'Realizado', 'Rechazado'].includes(turno.estado)) {
      Swal.fire('Aviso', 'No se puede cancelar un turno aceptado, realizado o rechazado', 'info');
      return;
    }
  
    const { isConfirmed, value: motivo } = await Swal.fire({
      title: '¿Estás seguro de cancelar el turno?',
      text: 'Por favor, ingresa el motivo de la cancelación',
      input: 'textarea',
      inputPlaceholder: 'Escribe aquí el motivo...',
      inputAttributes: { 'aria-label': 'Motivo de cancelación' },
      confirmButtonText: 'Cancelar turno',
      showCancelButton: true,
      cancelButtonText: 'Volver',
      inputValidator: (value) => {
        if (!value) {
          return 'El motivo es requerido para cancelar el turno';
        }
        return null;
      }
    });
  
    if (isConfirmed && motivo) {
      try {
        await this.turnoService.cancelarTurno(turno.id, motivo);
        Swal.fire('Cancelado', 'El turno ha sido cancelado con éxito', 'success');
        // Actualiza la lista de turnos para el especialista y la especialidad seleccionados
        await this.onEspecialistaChange({ target: { value: turno.especialistaId } } as unknown as Event, { nombre: turno.nombreEspecialista, apellido: turno.apellidoEspecialista });
      } catch (error) {
        Swal.fire('Error', 'No se pudo cancelar el turno', 'error');
      }
    }
  }
}