import { Component, Input } from '@angular/core';
import { TurnoService } from '../../../servicios/turnos.service';

@Component({
  selector: 'app-detalle-usuarios',
  standalone: false,
  templateUrl: './detalle-usuarios.component.html',
  styleUrl: './detalle-usuarios.component.scss'
})
export class DetalleUsuariosComponent {
  @Input() usuario: any;
  historiaClinica: any;
  turnos: { [key: string]: any } = {}; // Usamos un objeto con claves dinámicas
  mostrarHistoriaClinica: boolean = false; // Controla la visibilidad del historial
  historialVisible = false;



  constructor(private turnosService: TurnoService) {}

  ngOnInit() {
    if (this.usuario?.uid) {
      this.obtenerHistoriaClinica(this.usuario.uid);
    }
  }

  async obtenerHistoriaClinica(pacienteId: string) {
    this.turnos = await this.turnosService.obtenerHistoriaClinica(pacienteId);
    if (this.turnos) {
      console.log(this.turnos);
    }
  }

   // Función que devuelve las claves del objeto
   objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  toggleHistoriaClinica() {
    this.historialVisible = !this.historialVisible;
    this.obtenerHistoriaClinica(this.usuario.uid);
  }

  get esPaciente() {
    return this.usuario?.role === 'paciente';
  }

  get esEspecialista() {
    return this.usuario?.role === 'especialista';
  }

  get esAdministrador() {
    return this.usuario?.role === 'administrador';
  }

  get textoBotonHistoriaClinica() {
    return this.mostrarHistoriaClinica ? 'Ocultar Historia Clínica' : 'Mostrar Historia Clínica';
  }
}