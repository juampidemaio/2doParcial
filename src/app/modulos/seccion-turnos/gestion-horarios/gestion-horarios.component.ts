import { Component } from '@angular/core';
import { TurnoService } from '../../../servicios/turnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-horarios',
  standalone: false,
  templateUrl: './gestion-horarios.component.html',
  styleUrl: './gestion-horarios.component.scss'
})
export class GestionHorariosComponent {
  usuarioSeleccionado: any = null;
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

  constructor(private turnoService: TurnoService) {}

 

  mostrarUsuario(usuario: any) {
    this.usuarioSeleccionado = usuario;
  }

  esHorarioValido(horario: string): boolean {
    const minutos = parseInt(horario.split(':')[1], 10);
    return minutos === 0 || minutos === 30;
  }

  async guardarDisponibilidad() {
    if (!this.usuarioSeleccionado) {
      Swal.fire('Error', 'Por favor, selecciona un especialista.', 'error');
      return;
    }

    // Validación de horarios
    for (const dia in this.disponibilidadSemana) {
      const horarioDia = this.disponibilidadSemana[dia];
      const horarioClinica = this.horariosClinica[dia];

      if (
        horarioDia.horaInicio && !this.esHorarioValido(horarioDia.horaInicio) ||
        horarioDia.horaFin && !this.esHorarioValido(horarioDia.horaFin)
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
      await this.turnoService.guardarDisponibilidad(this.usuarioSeleccionado.uid, this.disponibilidadSemana);
      this.generarTurnosProximos15Dias();
      Swal.fire('Éxito', 'Disponibilidad guardada correctamente.', 'success');
    } catch (error) {
      console.error('Error al guardar la disponibilidad:', error);
      Swal.fire('Error', 'No se pudo guardar la disponibilidad.', 'error');
    }
  }

  async generarTurnosProximos15Dias() {
    console.log("entramos a la creacion de turnos");
    if (!this.usuarioSeleccionado) {
      Swal.fire('Error', 'Por favor, selecciona un especialista.', 'error');
      return;
    }
  
    // Obtener la disponibilidad del especialista
    const disponibilidad = await this.turnoService.obtenerDisponibilidad(this.usuarioSeleccionado.uid);
  
    if (!disponibilidad) {
      Swal.fire('Error', 'No se encontró disponibilidad para el especialista seleccionado.', 'error');
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
                especialista_id: this.usuarioSeleccionado.uid,
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