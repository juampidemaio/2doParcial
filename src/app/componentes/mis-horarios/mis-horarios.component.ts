import { Component } from '@angular/core';
import { AuthenticationService } from '../../servicios/authentication.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TurnoService } from '../../servicios/turnos.service';

@Component({
  selector: 'app-mis-horarios',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './mis-horarios.component.html',
  styleUrl: './mis-horarios.component.scss'
})
export class MisHorariosComponent {
  usuario: any = null;
  especialidades: any[] = [];
  especialidadSeleccionada: string = ''; 

  disponibilidadSemana: Record<string, { horaInicio: string; horaFin: string }> = {
    lunes: { horaInicio: '', horaFin: '' },
    martes: { horaInicio: '', horaFin: '' },
    miércoles: { horaInicio: '', horaFin: '' },
    jueves: { horaInicio: '', horaFin: '' },
    viernes: { horaInicio: '', horaFin: '' },
    sábado: { horaInicio: '', horaFin: '' },
    domingo: { horaInicio: '', horaFin: '' },
  };

  horariosClinica: Record<string, { apertura: string | null; cierre: string | null }> = {
    lunes: { apertura: '08:00', cierre: '19:00' },
    martes: { apertura: '08:00', cierre: '19:00' },
    miércoles: { apertura: '08:00', cierre: '19:00' },
    jueves: { apertura: '08:00', cierre: '19:00' },
    viernes: { apertura: '08:00', cierre: '19:00' },
    sábado: { apertura: '08:00', cierre: '14:00' },
    domingo: { apertura: null, cierre: null },
  };


  constructor(
    private authenticationService: AuthenticationService,
    private turnoService: TurnoService,
  ) {}


  ngOnInit(): void {
    this.cargarUsuario();
    this.cargarEspecialidades();
  }

  // Método para cargar los datos del usuario
  cargarUsuario(): void {
    this.authenticationService.getUser().subscribe(user => {
      if (user) {
        this.usuario = user;
      } else {
        Swal.fire('Error', 'No se encontró el usuario', 'error');
      }
    });
  }

  async cargarEspecialidades() {
    if (this.usuario && this.usuario.especialidades) {
      this.especialidades = this.usuario.especialidades;
      console.log('Especialidades cargadas:', this.especialidades); // Añadir para depuración
    } else {
      this.especialidades = [];
      Swal.fire('Error', 'No se encontraron especialidades para este especialista', 'error');
    }
  }
  
  esHorarioValido(horario: string): boolean {
    const minutos = parseInt(horario.split(':')[1], 10);
    return minutos === 0 || minutos === 30;
  }

  async onEspecialidadChange(event: Event) {
    const selectElement = event.target as HTMLInputElement;
    this.especialidadSeleccionada = selectElement.value; 
   
  }

  async guardarDisponibilidad() {
    // Verificar si se ha seleccionado una especialidad
    if (!this.especialidadSeleccionada) {
      Swal.fire('Error', 'Debe seleccionar una especialidad antes de guardar la disponibilidad.', 'error');
      return;
    }
  
    // Validación de horarios
    for (const dia in this.disponibilidadSemana) {
      const horarioDia = this.disponibilidadSemana[dia];
      const horarioClinica = this.horariosClinica[dia];
  
      if (
        (horarioDia.horaInicio && !this.esHorarioValido(horarioDia.horaInicio)) ||
        (horarioDia.horaFin && !this.esHorarioValido(horarioDia.horaFin))
      ) {
        Swal.fire('Error', `Los horarios de ${dia} deben ser en intervalos de media hora (ej. 08:00 o 08:30).`, 'error');
        return;
      }
  
      if (horarioClinica.apertura && horarioClinica.cierre) {
        if (
          horarioDia.horaInicio < horarioClinica.apertura || 
          horarioDia.horaInicio > horarioClinica.cierre ||
          horarioDia.horaFin < horarioClinica.apertura || 
          horarioDia.horaFin > horarioClinica.cierre
        ) {
          Swal.fire('Error', `El horario de ${dia} debe estar entre ${horarioClinica.apertura} y ${horarioClinica.cierre}.`, 'error');
          return;
        }
  
        if (horarioDia.horaInicio >= horarioDia.horaFin) {
          Swal.fire('Error', `En ${dia}, la hora de inicio debe ser anterior a la hora de fin.`, 'error');
          return;
        }
      } else if (horarioDia.horaInicio || horarioDia.horaFin) {
        Swal.fire('Error', `El día ${dia} está cerrado, no debe haber horarios de disponibilidad.`, 'error');
        return;
      }
    }
  
    try {
      // Guardar disponibilidad con la especialidad seleccionada
      await this.turnoService.guardarDisponibilidadEspecialidad(
        this.usuario.uid, 
        this.disponibilidadSemana, 
        this.especialidadSeleccionada  // Pasar la especialidad seleccionada
      );
      this.generarTurnosProximos15Dias();
      Swal.fire('Éxito', 'Disponibilidad guardada correctamente.', 'success');
    } catch (error) {
      console.error('Error al guardar la disponibilidad:', error);
      Swal.fire('Error', 'No se pudo guardar la disponibilidad.', 'error');
    }
  }
  
  async generarTurnosProximos15Dias() {
    console.log("entramos a la creacion de turnos");  
    // Obtener la disponibilidad del especialista
    const disponibilidad = await this.turnoService.obtenerDisponibilidadEspecialista(this.usuario.uid,this.especialidadSeleccionada);
  
    if (!disponibilidad) {
      Swal.fire('Error', 'No se encontró disponibilidad para el especialista.', 'error');
      return;
    }
  
    const turnos: any[] = [];
    const fechaActual = new Date();
  
    for (let i = 0; i < 15; i++) {
      const fecha = new Date(fechaActual);
      fecha.setDate(fechaActual.getDate() + i);
      const diaSemana = this.obtenerNombreDia(fecha);
  
      if (disponibilidad[diaSemana]) {
        const horarioDia = disponibilidad[diaSemana];
  
        if (horarioDia.horaInicio && horarioDia.horaFin) {
          let horaActual = horarioDia.horaInicio;
  
          while (horaActual < horarioDia.horaFin) {
            const horaFinTurno = this.sumarMinutos(horaActual, 30);
            if (horaFinTurno <= horarioDia.horaFin) {
              turnos.push({
                especialista_id: this.usuario.uid,
                especialidad: this.especialidadSeleccionada, // Agregar la especialidad aquí
                fecha: fecha.toISOString().split('T')[0],
                hora_inicio: horaActual,
                hora_fin: horaFinTurno,
                estado: 'disponible',
              });
            }
            horaActual = horaFinTurno;
          }
        }
      }
    }
  
    try {
      await this.turnoService.guardarTurnos(turnos);
      Swal.fire('Éxito', 'Turnos generados para los próximos 15 días.', 'success');
    } catch (error) {
      console.error('Error al generar los turnos:', error);
      Swal.fire('Error', 'No se pudieron generar los turnos.', 'error');
    }
  }
  

  obtenerNombreDia(fecha: Date): string {
    const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    return diasSemana[fecha.getDay()];
  }
  
  sumarMinutos(hora: string, minutos: number): string {
    const [horas, mins] = hora.split(':').map(Number);
    const fecha = new Date();
    fecha.setHours(horas, mins + minutos);
  
    const horaFormateada = String(fecha.getHours()).padStart(2, '0');
    const minutosFormateados = String(fecha.getMinutes()).padStart(2, '0');
    return `${horaFormateada}:${minutosFormateados}`;
  }

}
