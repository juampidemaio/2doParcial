import { Component } from '@angular/core';
import { AuthenticationService } from '../../servicios/authentication.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TurnoService } from '../../servicios/turnos.service';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-mis-horarios',
  standalone: true,
  imports: [CommonModule,FormsModule,CapitalizePipe],
  templateUrl: './mis-horarios.component.html',
  styleUrl: './mis-horarios.component.scss'
})
export class MisHorariosComponent {
  usuario: any = null;
  especialidades: any[] = [];
  especialidadSeleccionada: string = ''; 
  disponibilidadCargada: boolean = false;
  diasSemana: string[] = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];


  disponibilidadSemana: Record<string, { 
    horaInicio: string; 
    horaFin: string; 
    disponibilidad: boolean 
  }> = {
    lunes: { horaInicio: '', horaFin: '', disponibilidad: true },
    martes: { horaInicio: '', horaFin: '', disponibilidad: true },
    miércoles: { horaInicio: '', horaFin: '', disponibilidad: true },
    jueves: { horaInicio: '', horaFin: '', disponibilidad: true },
    viernes: { horaInicio: '', horaFin: '', disponibilidad: true },
    sábado: { horaInicio: '', horaFin: '', disponibilidad: true },
  };

  

  horariosClinica: Record<string, { apertura: string | null; cierre: string | null }> = {
    lunes: { apertura: '08:00', cierre: '19:00' },
    martes: { apertura: '08:00', cierre: '19:00' },
    miércoles: { apertura: '08:00', cierre: '19:00' },
    jueves: { apertura: '08:00', cierre: '19:00' },
    viernes: { apertura: '08:00', cierre: '19:00' },
    sábado: { apertura: '08:00', cierre: '14:00' },
  };


  constructor(
    private authenticationService: AuthenticationService,
    private turnoService: TurnoService,
  ) {}


  ngOnInit(): void {
    this.cargarUsuario();
    this.cargarEspecialidades();
  }
  async cargarDisponibilidad() {
    try {
      const disponibilidad = await this.turnoService.obtenerDisponibilidadEspecialista(this.usuario.uid, this.especialidadSeleccionada);
  
      if (disponibilidad) {
        this.disponibilidadSemana = disponibilidad;
  
        for (const dia of this.diasSemana) {
          this.onDisponibilidadChange(dia, { target: { checked: this.disponibilidadSemana[dia]?.disponibilidad || false } });
        }
      } else {
        Swal.fire('Advertencia', 'No se encontró disponibilidad guardada.', 'info');
      }
    } catch (error) {
      console.error('Error al cargar la disponibilidad:', error);
      Swal.fire('Error', 'No se pudo cargar la disponibilidad.', 'error');
    }
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
  
    // Limpiar la disponibilidad antes de cargar la nueva especialidad
    this.resetearDisponibilidadSemana();
  
    // Cargar la disponibilidad para la especialidad seleccionada
    this.cargarDisponibilidad();
  }
  
  resetearDisponibilidadSemana() {
    // Resetear los horarios de la semana a su estado inicial
    this.disponibilidadSemana = {
      lunes: { horaInicio: '', horaFin: '', disponibilidad: true },
      martes: { horaInicio: '', horaFin: '', disponibilidad: true },
      miércoles: { horaInicio: '', horaFin: '', disponibilidad: true },
      jueves: { horaInicio: '', horaFin: '', disponibilidad: true },
      viernes: { horaInicio: '', horaFin: '', disponibilidad: true },
      sábado: { horaInicio: '', horaFin: '', disponibilidad: true },
    };
  }
  



  onDisponibilidadChange(dia: string, event: any): void {
    this.disponibilidadSemana[dia].disponibilidad = event.target.checked;
    console.log(`Checkbox ${dia} actualizado a:`, this.disponibilidadSemana[dia].disponibilidad);
  }
  
  
  
  
  


  async guardarDisponibilidad() {
    // Verificar si se ha seleccionado una especialidad
    if (!this.especialidadSeleccionada) {
      Swal.fire('Error', 'Debe seleccionar una especialidad antes de guardar la disponibilidad.', 'error');
      return;
    }

    let diasConHorarios = false; // Variable para verificar si al menos un día tiene horarios
    let diasMarcadosSinHorarios = false; // Para verificar si algún día está marcado como disponible pero no tiene horarios

    // Validación de horarios y disponibilidad de días
    for (const dia in this.disponibilidadSemana) {
      const horarioDia = this.disponibilidadSemana[dia];
      const horarioClinica = this.horariosClinica[dia];

      // Verificar si el día está disponible (checkbox marcado)
      if (horarioDia.disponibilidad) {
        // Si el día está marcado como disponible, se debe haber llenado los horarios
        if (!horarioDia.horaInicio || !horarioDia.horaFin) {
          diasMarcadosSinHorarios = true;
        }

        // Validación de los horarios si están definidos
        if (
          (horarioDia.horaInicio && !this.esHorarioValido(horarioDia.horaInicio)) ||
          (horarioDia.horaFin && !this.esHorarioValido(horarioDia.horaFin))
        ) {
          Swal.fire('Error', `Los horarios de ${dia} deben ser en intervalos de media hora (ej. 08:00 o 08:30).`, 'error');
          return;
        }

        // Validación de horarios dentro de los horarios de la clínica
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

          // Verificación de la hora de inicio antes que la hora de fin
          if (horarioDia.horaInicio >= horarioDia.horaFin) {
            Swal.fire('Error', `En ${dia}, la hora de inicio debe ser anterior a la hora de fin.`, 'error');
            return;
          }
        } else if (horarioDia.horaInicio || horarioDia.horaFin) {
          // Si la clínica está cerrada y se intentan guardar horarios, error
          Swal.fire('Error', `El día ${dia} está cerrado, no debe haber horarios de disponibilidad.`, 'error');
          return;
        }

        // Si hay horarios para este día, marcamos que se ha ingresado al menos uno
        if (horarioDia.horaInicio || horarioDia.horaFin) {
          diasConHorarios = true;
        }
      } else {
        // Si el día no está disponible, asegurarse que los horarios estén vacíos
        if (horarioDia.horaInicio || horarioDia.horaFin) {
          Swal.fire('Error', `No se pueden ingresar horarios para el día ${dia} si no está marcado como disponible.`, 'error');
          return;
        }
      }
    }

    // Si no se ha marcado ningún día como disponible o si algún día está marcado pero no tiene horarios, mostramos un error
    if (diasMarcadosSinHorarios) {
      Swal.fire('Error', 'Debe rellenar los horarios para los días marcados como disponibles.', 'error');
      return;
    }

    // Si no se ha ingresado ningún horario en toda la semana, mostramos un error
    if (!diasConHorarios) {
      Swal.fire('Error', 'Debe ingresar horarios para al menos un día de la semana.', 'error');
      return;
    }

    try {
      // Guardar disponibilidad con la especialidad seleccionada
      await this.turnoService.guardarDisponibilidadEspecialidad(
        this.usuario.uid, 
        this.disponibilidadSemana, 
        this.especialidadSeleccionada  // Pasar la especialidad seleccionada
      );

      // Generar turnos solo para los días con horarios configurados
      this.generarTurnosProximos15Dias();

      Swal.fire('Éxito', 'Disponibilidad guardada correctamente.', 'success');
    } catch (error) {
      console.error('Error al guardar la disponibilidad:', error);
      Swal.fire('Error', 'No se pudo guardar la disponibilidad.', 'error');
    }
  }

  
  async generarTurnosProximos15Dias() {
    console.log("Entramos a la creacion de turnos");
  
    // Obtener la disponibilidad del especialista
    const disponibilidad = await this.turnoService.obtenerDisponibilidadEspecialista(this.usuario.uid, this.especialidadSeleccionada);
  
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
  
              // Validar si ya existe un turno con la misma fecha, hora y especialista
              const turnoExistente = await this.turnoService.obtenerTurnoExistente({
                especialidad: this.especialidadSeleccionada,
                especialista_id: this.usuario.uid,
                fecha: fecha.toISOString().split('T')[0],
                hora_inicio: horaActual,
                hora_fin: horaFinTurno,
              });

              // Si no existe el turno, lo agregamos a la lista de nuevos turnos
              if (!turnoExistente) {
                turnos.push({
                  especialista_id: this.usuario.uid,
                  especialidad: this.especialidadSeleccionada,
                  fecha: fecha.toISOString().split('T')[0],
                  hora_inicio: horaActual,
                  hora_fin: horaFinTurno,
                  estado: 'disponible',
                });
              }
            }
            horaActual = horaFinTurno;
          }
        }
      }
    }

    // Si hay turnos para guardar, los guardamos
    if (turnos.length > 0) {
      try {
        await this.turnoService.guardarTurnos(turnos);
        Swal.fire('Éxito', 'Turnos generados para los próximos 15 días.', 'success');
      } catch (error) {
        console.error('Error al generar los turnos:', error);
        Swal.fire('Error', 'No se pudieron generar los turnos.', 'error');
      }
    } else {
      Swal.fire('Advertencia', 'No se generaron turnos nuevos, ya existen para las fechas seleccionadas.', 'info');
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
