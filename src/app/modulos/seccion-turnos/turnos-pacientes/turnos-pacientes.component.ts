import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { EspecialidadService } from '../../../servicios/especialidad.service';
import { EspecialistaService } from '../../../servicios/especialista.service';
import { TurnoService } from '../../../servicios/turnos.service';
import { AuthenticationService } from '../../../servicios/authentication.service';

@Component({
  selector: 'app-turnos-pacientes',
  standalone: false,
  templateUrl: './turnos-pacientes.component.html',
  styleUrl: './turnos-pacientes.component.scss'
})
export class TurnosPacientesComponent {
  especialidades: any[] = [];
  especialistas: any[] = [];
  horarios: any[] = [];
  nombreEspecialista: any;
  especialidadSeleccionada: string = ''; // Nueva variable para la especialidad seleccionada
  encuesta: any = {}; // Objeto para almacenar respuestas de la encuesta
  
  pacienteActual: any = ''; 

  constructor(
    private turnoService: TurnoService,
    private especialidadService: EspecialidadService,
    private especialistaService: EspecialistaService,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit() {
    this.cargarEspecialidades();

    this.authenticationService.getUser().subscribe(user => {
      if (user) {
        this.pacienteActual = user; 
      } else {
        Swal.fire('Error', 'No se encontró el usuario', 'error');
      }
    });
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
      const turnos = await this.turnoService.obtenerTurnosDisponiblesPacienteEspecialista(this.pacienteActual.uid,especialistaId);
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

  async verResenaTurno(turno: any) {
    if (turno.estado !== 'realizado') {
      Swal.fire('Aviso', 'Solo puedes ver la reseña de un turno realizado', 'info');
      return;
    }
    
    try {
      // Llamamos al servicio para obtener la reseña del turno
      await this.turnoService.obtenerReseñaTurno(turno.id);
    } catch (error) {
      console.error('Error al obtener reseña:', error);
      Swal.fire('Error', 'No se pudo obtener la reseña', 'error');
    }
  }
  async mostrarEncuesta(turno: any) {
    Swal.fire({
      title: 'Completar Encuesta',
      html: `
        <label for="pregunta1">¿Cómo calificarías la atención del especialista?</label>
        <input type="text" id="pregunta1" class="swal2-input" placeholder="Tu respuesta aquí">
        
        <label for="pregunta2">¿Estás satisfecho con la duración de tu consulta?</label>
        <input type="text" id="pregunta2" class="swal2-input" placeholder="Tu respuesta aquí">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const pregunta1 = (document.getElementById('pregunta1') as HTMLInputElement).value;
        const pregunta2 = (document.getElementById('pregunta2') as HTMLInputElement).value;
        
        if (!pregunta1 || !pregunta2) {
          Swal.showValidationMessage(`Por favor completa todas las preguntas`);
        }
        return { pregunta1, pregunta2 };
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        this.encuesta = { 
          respuesta1: result.value.pregunta1,
          respuesta2: result.value.pregunta2
        };
        
        await this.turnoService.guardarEncuesta(turno.id, this.encuesta);
        Swal.fire('Gracias', 'Tus respuestas han sido guardadas', 'success');
        
        // Recargar lista de turnos
        await this.onEspecialistaChange({ target: { value: turno.especialistaId } } as unknown as Event, { nombre: turno.nombreEspecialista, apellido: turno.apellidoEspecialista });
      }
    });
  }
  
  async calificarAtencion(turno: any) {
    if (turno.estado !== 'realizado') {
      Swal.fire('Aviso', 'Solo puedes calificar la atención de un turno realizado', 'info');
      return;
    }
  
    const { value: comentario } = await Swal.fire({
      title: 'Calificar Atención',
      input: 'textarea',
      inputPlaceholder: 'Escribe aquí tu comentario sobre la atención...',
      showCancelButton: true,
      confirmButtonText: 'Enviar Comentario',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'El comentario es obligatorio';
        }
        return null;
      }
    });
  
    if (comentario) {
      await this.turnoService.guardarCalificacion(turno.id, comentario);
      Swal.fire('Gracias', 'Tu calificación ha sido guardada', 'success');
      
      // Recargar lista de turnos
      await this.onEspecialistaChange({ target: { value: turno.especialistaId } } as unknown as Event, { nombre: turno.nombreEspecialista, apellido: turno.apellidoEspecialista });
    }
  }
  
  

}
