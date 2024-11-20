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
  especialistas: any[] = [];
  horarios: any[] = [];
  turnoForm: FormGroup;
  isAdmin: boolean = false;
  isPaciente: boolean = false;
  usuarioSeleccionado: any;
  obtenerIdPaciente: any;
  nombreEspecialista: any;
  especialiadaSeleccionada: any;
  idEspecialista: any;
  especialidadesDelEspecialista: any[] = []; // Lista de especialidades asociadas al especialista seleccionado
  diasDisponibles: any[] = []; // Lista de días disponibles para turnos
  horariosPorDia: any[] = []; // Horarios agrupados por día
  selectedTurno: any; // Variable para guardar el turno seleccionado

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
    this.cargarEspecialistas();
    this.checkUserRole(); // Verificar el rol del usuario
  }

  async cargarEspecialistas() {
    try {
      this.especialistas = await this.especialistaService.getEspecialistas();
      console.log("Especialistas cargados:", this.especialistas);
    } catch (error) {
      console.error("Error al cargar los especialistas:", error);
      Swal.fire('Error', 'No se pudieron cargar los especialistas', 'error');
    }
  }


  async getUser(): Promise<any> {
    return new Promise((resolve) => {
      this.authService.getUser().subscribe(resolve);
    });
  }

  async checkUserRole() {
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.isAdmin = user.role === 'administrador';
        this.isPaciente = user.role === 'paciente'; // Verificar si el rol es 'paciente'
      }
    });
  }

  async setPacienteData(usuario: any) {
    this.usuarioSeleccionado = usuario; // Maneja la selección del usuario
    if (usuario) {
      // Solo actualiza los valores del formulario, sin llamar a 'solicitarTurno'
      this.turnoForm.patchValue({
        paciente: usuario.nombre,
        dni: usuario.dni,
        obraSocial: usuario.obraSocial,
        especialista: ""
      });
    }
  }
  

  async onEspecialistaChange(especialista: any) {
    this.idEspecialista = especialista.uid;  // Ahora el id está disponible desde el objeto especialista
    this.diasDisponibles =[];
    this.horarios = [];

    console.log("ID del especialista seleccionado:", this.idEspecialista);

    if (this.idEspecialista) {
      try {
        // Obtener las especialidades del especialista seleccionado
        this.especialidadesDelEspecialista = await this.especialidadService.getEspecialidadesPorEspecialista(especialista);
        this.nombreEspecialista = `${especialista.nombre} ${especialista.apellido}`;
        console.log("Especialidades del especialista:", this.especialidadesDelEspecialista);
      } catch (error) {
        console.error("Error al cargar las especialidades:", error);
        Swal.fire('Error', 'No se pudieron cargar las especialidades', 'error');
      }
    } else {
      this.especialidadesDelEspecialista = []; // Limpia las especialidades si no hay especialista seleccionado
    }
  }
  
  async onEspecialidadChange(nombreEspecialidad: string) {
    this.especialiadaSeleccionada = nombreEspecialidad;
    this.turnoForm.patchValue({ horario: '' });
    this.horarios = [];
    this.diasDisponibles = [];

    if (nombreEspecialidad) {
      try {
        const todosHorarios = await this.turnoService.obtenerTurnosDisponibles(this.idEspecialista, nombreEspecialidad);
        const fechaActual = new Date();
        const turnosDisponibles = todosHorarios.filter(turno => new Date(turno.fecha) >= fechaActual);
        this.diasDisponibles = [...new Set(turnosDisponibles.map(turno => turno.fecha))];
        this.diasDisponibles.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
        this.horariosPorDia = turnosDisponibles;
      } catch (error) {
        Swal.fire('Error', 'No se pudieron cargar los horarios', 'error');
      }
    }
  }
  async onDiaSeleccionado(diaSeleccionado: string) {
    this.horarios = this.horariosPorDia
      .filter(turno => turno.fecha === diaSeleccionado && turno.estado === "disponible")
      .map(turno => ({
        horaInicio: turno.hora_inicio,
        horaFin: turno.hora_fin,
        id: turno.id,
        fecha: turno.fecha // Asegúrate de que `fecha` esté incluida en cada turno
      }));
  
    console.log("Horarios seleccionados:", this.horarios); // Inspeccionar horarios
  }
  
  
  onHorarioSeleccionado(turno: any) {
    this.selectedTurno = turno;
    console.log("Turno seleccionado:", this.selectedTurno); // Inspeccionar el objeto
  
    this.turnoForm.patchValue({
      horario: `${turno.horaInicio} - ${turno.horaFin}`
    });
  }
  
  
  async solicitarTurno() {
    if (!this.selectedTurno) {
      Swal.fire('Error', 'Debe seleccionar un turno.', 'error');
      return;
    }
  
    try {
      const user = await this.getUser();
      console.log("datos del usuario", user.dni, user.obraSocial, user.nombre);
      this.obtenerIdPaciente = user.role === 'paciente' ? user.uid : this.usuarioSeleccionado.uid;
  
      // Verificar si el usuario es administrador o paciente y asignar los valores apropiados
      const turnoData = {
        ...this.turnoForm.value,  // Incluye todos los valores del formulario
        turnoId: this.selectedTurno.id,
        fecha: this.selectedTurno.fecha,
        horaInicio: this.selectedTurno.horaInicio,
        horaFin: this.selectedTurno.horaFin,
        especialidad: this.especialiadaSeleccionada, // Incluye la especialidad seleccionada
        especialista: this.nombreEspecialista, // Incluye el especialista seleccionado
        // Si es paciente, tomar los datos de user, de lo contrario, tomar los datos del formulario
        paciente: this.isAdmin ? this.turnoForm.value.paciente : user.nombre,
        dni: this.isAdmin ? this.turnoForm.value.dni : user.dni,
        obraSocial: this.isAdmin ? this.turnoForm.value.obraSocial : user.obraSocial,
      };
      
      // Buscar el turno existente en la base de datos por fecha y hora
      await this.turnoService.buscarYActualizarTurno(turnoData, this.obtenerIdPaciente);
  
      Swal.fire('Registro exitoso', 'El turno ha sido solicitado correctamente.', 'success');
      this.router.navigate(['/bienvenida']);
    } catch (error) {
      console.error('Error al solicitar el turno:', error);
      Swal.fire('Error', 'No se pudo solicitar el turno. Inténtalo nuevamente.', 'error');
    }
  }
  
  
}