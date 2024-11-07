import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { EspecialidadService } from '../../../servicios/especialidad.service';
import { EspecialistaService } from '../../../servicios/especialista.service';
import { TurnoService } from '../../../servicios/turnos.service';
import { AuthenticationService } from '../../../servicios/authentication.service';

@Component({
  selector: 'app-turnos-especialista',
  standalone: false,
  templateUrl: './turnos-especialista.component.html',
  styleUrl: './turnos-especialista.component.scss'
})
export class TurnosEspecialistaComponent {
  especialidades: any[] = [];
  pacientes: any[] = [];
  horarios: any[] = [];
  nombrePaciente: string = '';
  especialidadSeleccionada: string = ''; 
  especialistaIniciado: any;
  pacienteSeleccionadoId: string = ''; 

  constructor(
    private turnoService: TurnoService,
    private especialistaService: EspecialistaService,
    private authenticationService: AuthenticationService,
  ) {}

   ngOnInit() {
    this.authenticationService.getUser().subscribe(user => {
      if (user) {
        this.especialistaIniciado = user; 
        this.cargarPacientes(user.uid); 
        this.cargarEspecialidades();
      } else {
        Swal.fire('Error', 'No se encontró el usuario', 'error');
      }
    });
  }
  
  async cargarPacientes(uidEspecialista: string) {
    try {
      this.pacientes = await this.especialistaService.getPacientesUnicosPorEspecialista(uidEspecialista);
      console.log('Pacientes cargados:', this.pacientes);
    } catch (error) {
      console.error('Error cargando pacientes:', error);
      Swal.fire('Error', 'No se pudieron cargar los pacientes', 'error');
    }
  }
  
  async cargarEspecialidades() {
    if (this.especialistaIniciado && this.especialistaIniciado.especialidades) {
      this.especialidades = this.especialistaIniciado.especialidades;
      console.log('Especialidades cargadas:', this.especialidades); // Añadir para depuración
    } else {
      this.especialidades = [];
      Swal.fire('Error', 'No se encontraron especialidades para este especialista', 'error');
    }
  }

  async onEspecialidadChange(event: Event) {
    const selectElement = event.target as HTMLInputElement;
    this.especialidadSeleccionada = selectElement.value; 
    if (this.especialidadSeleccionada) {
      try {
        this.pacientes = await this.especialistaService.getPacientesUnicosPorEspecialidad(this.especialistaIniciado.uid, this.especialidadSeleccionada);
        this.horarios = []; 
      } catch (error) {
        Swal.fire('Error', 'No se pudieron cargar los pacientes', 'error');
      }
    } else {
      this.pacientes = [];
      this.horarios = [];
    }
  }

  async onPacienteChange(event: Event, paciente: any) {
    const selectElement = event.target as HTMLInputElement;
    this.pacienteSeleccionadoId = selectElement.value; 
    if (this.pacienteSeleccionadoId) {
      this.nombrePaciente = `${paciente.nombre} ${paciente.apellido}`; 
      
      try {
        const turnos = await this.turnoService.obtenerTurnosDisponiblesPaciente(this.pacienteSeleccionadoId);
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
        // Actualiza el listado de turnos para el paciente y especialidad seleccionados
        this.onPacienteChange({ target: { value: this.pacienteSeleccionadoId } } as unknown as Event, { nombre: this.nombrePaciente });
      } catch (error) {
        Swal.fire('Error', 'No se pudo cancelar el turno', 'error');
      }
    }
  }
  

  async aceptarTurno(turno: any) {
    if (['Aceptado', 'Realizado', 'Rechazado'].includes(turno.estado)) {
      Swal.fire('Aviso', 'No se puede cancelar un turno aceptado, realizado o rechazado', 'info');
      return;
    }
  
    const { isConfirmed} = await Swal.fire({
      title: '¿Estás seguro de aceptar el turno?',
      confirmButtonText: 'aceptar turno',
      showCancelButton: true,
      cancelButtonText: 'Volver',
    });
  
    if (isConfirmed) {
      try {
        await this.turnoService.aceptarTurno(turno.id);
        Swal.fire('aceptado', 'El turno ha sido aceptado con éxito', 'success');
        // Actualiza el listado de turnos para el paciente y especialidad seleccionados
        //this.onPacienteChange({ target: { value: this.pacienteSeleccionadoId } } as unknown as Event, { nombre: this.nombrePaciente });
      } catch (error) {
        Swal.fire('Error', 'No se pudo aceptar el turno', 'error');
      }
    }
  }

  async finalizarTurno(turno: any) {
    if (turno.estado !== 'aceptado') {
      Swal.fire('Aviso', 'Solo puedes finalizar un turno aceptado', 'info');
      return;
    }
  
    // Crear un formulario para ingresar los datos de la historia clínica
    const { isConfirmed, value } = await Swal.fire({
      title: 'Finalizar Turno y Registrar Historia Clínica',
      html: `
        <label for="diagnostico">Diagnóstico:</label>
        <textarea id="diagnostico" rows="2" style="width: 100%;" placeholder="Escribe aquí el diagnóstico..."></textarea>
        
        <label for="reseña">Reseña:</label>
        <textarea id="reseña" rows="2" style="width: 100%;" placeholder="Escribe aquí la reseña..."></textarea>
        
        <label for="altura">Altura (cm):</label>
        <input type="number" id="altura" style="width: 100%;" placeholder="Altura en cm" />
        
        <label for="peso">Peso (kg):</label>
        <input type="number" id="peso" style="width: 100%;" placeholder="Peso en kg" />
        
        <label for="temperatura">Temperatura (°C):</label>
        <input type="number" id="temperatura" style="width: 100%;" placeholder="Temperatura en °C" />
        
        <label for="presion">Presión:</label>
        <input type="text" id="presion" style="width: 100%;" placeholder="Ej. 120/80" />
        
        <label>Datos Dinámicos:</label>
        <div id="datosDinamicos">
          <input type="text" placeholder="Clave" style="width: 48%; display: inline-block;" id="clave1" />
          <input type="text" placeholder="Valor" style="width: 48%; display: inline-block;" id="valor1" />
          <br />
          <input type="text" placeholder="Clave" style="width: 48%; display: inline-block;" id="clave2" />
          <input type="text" placeholder="Valor" style="width: 48%; display: inline-block;" id="valor2" />
          <br />
          <input type="text" placeholder="Clave" style="width: 48%; display: inline-block;" id="clave3" />
          <input type="text" placeholder="Valor" style="width: 48%; display: inline-block;" id="valor3" />
        </div>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          diagnostico: (document.getElementById('diagnostico') as HTMLTextAreaElement).value,
          reseña: (document.getElementById('reseña') as HTMLTextAreaElement).value,
          historiaClinica: {
            altura: +(document.getElementById('altura') as HTMLInputElement).value,
            peso: +(document.getElementById('peso') as HTMLInputElement).value,
            temperatura: +(document.getElementById('temperatura') as HTMLInputElement).value,
            presion: (document.getElementById('presion') as HTMLInputElement).value,
            datosDinamicos: [
              {
                clave: (document.getElementById('clave1') as HTMLInputElement).value,
                valor: (document.getElementById('valor1') as HTMLInputElement).value,
              },
              {
                clave: (document.getElementById('clave2') as HTMLInputElement).value,
                valor: (document.getElementById('valor2') as HTMLInputElement).value,
              },
              {
                clave: (document.getElementById('clave3') as HTMLInputElement).value,
                valor: (document.getElementById('valor3') as HTMLInputElement).value,
              },
            ].filter(dato => dato.clave && dato.valor) // Filtrar campos vacíos
          }
        };
      },
      confirmButtonText: 'Finalizar Turno',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
    });
  
    // Validar los datos ingresados
    if (isConfirmed) {
      const { diagnostico, reseña, historiaClinica } = value;
  
      // Validaciones de los campos
      if (!diagnostico || !reseña || !historiaClinica.altura || !historiaClinica.peso || !historiaClinica.temperatura || !historiaClinica.presion) {
        Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
        return;
      }
  
      // Validaciones específicas de temperatura, altura, peso y presión
      if (historiaClinica.temperatura < 30 || historiaClinica.temperatura > 45) {
        Swal.fire('Error', 'La temperatura debe estar entre 30°C y 45°C', 'error');
        return;
      }
      if (historiaClinica.altura < 30 || historiaClinica.altura > 250) {
        Swal.fire('Error', 'La altura debe estar entre 30 cm y 250 cm', 'error');
        return;
      }
      if (historiaClinica.peso < 3 || historiaClinica.peso > 500) {
        Swal.fire('Error', 'El peso debe estar entre 3 kg y 500 kg', 'error');
        return;
      }
  
      // Validar formato de la presión (Ejemplo: 120/80)
    
  
      try {
        // Llamar al método para actualizar el turno con el diagnóstico y reseña
        await this.turnoService.finalizarTurno(turno.id, { diagnostico, reseña });
  
        // Llamar al método para registrar la historia clínica
        await this.turnoService.finalizarTurnoHistoriaClinica(turno, { historiaClinica });
  
        // Confirmación de que el turno ha sido finalizado
        Swal.fire('Finalizado', 'El turno ha sido finalizado con éxito', 'success');
        
        // Actualizar la vista del paciente seleccionado
        this.onPacienteChange({ target: { value: this.pacienteSeleccionadoId } } as unknown as Event, { nombre: this.nombrePaciente });
      } catch (error) {
        // Manejo de errores
        Swal.fire('Error', 'No se pudo finalizar el turno', 'error');
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
  
  


}