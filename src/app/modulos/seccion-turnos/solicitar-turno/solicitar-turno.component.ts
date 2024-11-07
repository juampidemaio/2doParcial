import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EspecialidadService } from '../../../servicios/especialidad.service';
import { EspecialistaService } from '../../../servicios/especialista.service';
import { TurnoService } from '../../../servicios/turnos.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../servicios/authentication.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-solicitar-turno',
  standalone: false,
  templateUrl: './solicitar-turno.component.html',
  styleUrl: './solicitar-turno.component.scss'
})
export class SolicitarTurnoComponent {
  especialidades: any[] = [];
  especialistas: any[] = [];
  horarios: any[] = [];
  turnoForm: FormGroup;
  isAdmin: boolean = false;
  isPaciente: boolean = false;
  usuarioSeleccionado:any;
  obtenerIdPaciente : any;
  nombreEspecialista:any;
  especialiadaSeleccionada:any;

  constructor(
    private especialidadService: EspecialidadService,
    private especialistaService: EspecialistaService,
    private turnoService: TurnoService,
    private authService: AuthenticationService, // Inyectar el servicio de autenticación
    private fb: FormBuilder,
    private router: Router
  ) {
    this.turnoForm = this.fb.group({
      especialidad: ['', Validators.required],
      especialista: ['', Validators.required],
      horario: ['', Validators.required],
      paciente: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^[0-9]{8,}$/)]], // Asegúrate de que el DNI sea válido
      obraSocial: ['', Validators.required],
    });
  }


  ngOnInit() {
    this.cargarEspecialidades();
    this.checkUserRole(); // Verificar el rol del usuario
  }

  async cargarEspecialidades() {
    this.especialidades = await this.especialidadService.getEspecialidades();
  }

  async checkUserRole() {
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.isAdmin = user.role === 'administrador';
        this.isPaciente = user.role === 'paciente'; // Verificar si el rol es 'paciente'
      }
    });
  }

  async setPacienteData(usuario:any) {
      this.usuarioSeleccionado = usuario; // Método para manejar la selección de un usuario
      if (usuario) {
      this.turnoForm.patchValue({
        paciente: usuario.nombre,
        dni: usuario.dni,
        obraSocial: usuario.obraSocial,
        especialista:""
      });
    }
  }
  async onEspecialidadChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const nombreEspecialidad = selectElement.value; // Cambiado de id a nombre
    this.especialiadaSeleccionada = nombreEspecialidad;
    console.log("Nombre de especialidad seleccionada:", nombreEspecialidad); // Debug
    
    // Vaciar el campo de especialista y horarios cuando se cambia la especialidad
    this.turnoForm.patchValue({
      especialista: '', // Vaciar el campo del especialista
    });
    this.horarios = []; // Vaciar la lista de horarios
  
    if (nombreEspecialidad) {
      try {
        this.especialistas = await this.especialistaService.getEspecialistasPorEspecialidad(nombreEspecialidad);
        console.log("Especialistas cargados:", this.especialistas); // Verifica que se están cargando
      } catch (error) {
        console.error("Error al cargar especialistas:", error); // Debug de error
        Swal.fire('Error', 'No se pudieron cargar los especialistas', 'error');
      }
    } else {
      this.especialistas = []; // Limpia la lista si no hay especialidad seleccionada
    }
  }
  
  async onEspecialistaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const especialistaId = selectElement.value;
  
    console.log("ID del especialista seleccionado:", especialistaId); // Debug
  
    if (especialistaId) {
      try {
        // Encuentra el especialista seleccionado y guarda su nombre completo en `this.nombreEspecialista`
        const especialistaSeleccionado = this.especialistas.find(especialista => especialista.uid === especialistaId);
        if (especialistaSeleccionado) {
          this.nombreEspecialista = `${especialistaSeleccionado.nombre} ${especialistaSeleccionado.apellido}`;
        }
  
        // Cargar horarios disponibles para el especialista seleccionado
        const todosHorarios = await this.turnoService.obtenerTurnosDisponibles(especialistaId, this.especialiadaSeleccionada);
  
        // Filtrar horarios para que solo muestre los turnos desde hoy en adelante
        const fechaActual = new Date();
        this.horarios = todosHorarios.filter(turno => {
          const fechaTurno = new Date(turno.fecha);
          return fechaTurno >= fechaActual;
        });
  
        // Ordenar horarios por fecha y hora
        this.horarios.sort((a, b) => {
          const fechaA = new Date(a.fecha);
          const fechaB = new Date(b.fecha);
  
          // Ordena por fecha y luego por hora si las fechas son iguales
          if (fechaA.getTime() !== fechaB.getTime()) {
            return fechaA.getTime() - fechaB.getTime();
          } else {
            return a.hora_inicio.localeCompare(b.hora_inicio);
          }
        });
  
        console.log("Turnos disponibles cargados:", this.horarios); // Verifica que se están cargando
      } catch (error) {
        console.error("Error al cargar turnos:", error); // Debug de error
        Swal.fire('Error', 'No se pudieron cargar los turnos', 'error');
      }
    } else {
      this.horarios = []; // Limpia la lista si no hay especialista seleccionado
    }
  }
  

  
  
  async solicitarTurno() {  
    try {
      // Ya tenemos `this.nombreEspecialista` completo en `onEspecialistaChange`
  
      this.authService.getUser().subscribe(user => {
        if (user.role === 'paciente') {
          this.obtenerIdPaciente = user.uid; 
          this.turnoForm.patchValue({
            especialista: this.nombreEspecialista, // Aquí usamos el nombre completo del especialista
            paciente: user.nombre,
            dni: user.dni,
            obraSocial: user.obraSocial
          });
        } else {
          this.obtenerIdPaciente = this.usuarioSeleccionado.uid;
          // Usamos el nombre completo también en el caso del administrador
          this.turnoForm.patchValue({
            especialista: this.nombreEspecialista, // Aquí también usamos el nombre completo
          });
        }
      });
      
      const turnoData = this.turnoForm.value;
      await this.turnoService.solicitarTurno(turnoData, this.obtenerIdPaciente);
      Swal.fire('Registro exitoso', 'El turno ha sido solicitado correctamente', 'success');
      this.router.navigate(['/bienvenida']);
    } catch (error) {
      console.error("Error al solicitar el turno:", error); // Agrega un log para el error
      Swal.fire('Error', 'No se pudo solicitar el turno. Inténtalo nuevamente.', 'error');
    }
  }
  
  
}