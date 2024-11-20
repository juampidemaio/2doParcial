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
  turnos: any[] = [];  // Usamos un array en lugar de un objeto
  historialVisible = false;

  constructor(private turnosService: TurnoService) {}

  ngOnInit() {
    if (this.usuario?.uid) {
      this.obtenerHistoriaClinica(this.usuario.uid);
    }
  }

  async obtenerHistoriaClinica(pacienteId: string) {
    this.turnos =[];
    // Obtienes todos los turnos para el paciente
    const turnos = await this.turnosService.obtenerHistoriaClinicaConTurnos(pacienteId);
    
    // Filtramos solo aquellos turnos que tienen historia clínica con valores reales
    this.turnos = turnos.filter(turno => 
      turno.historiaClinica.altura !== 'N/A' &&
      turno.historiaClinica.peso !== 'N/A' &&
      turno.historiaClinica.temperatura !== 'N/A' &&
      turno.historiaClinica.presion !== 'N/A' 
    );
    
    if (this.turnos.length > 0) {
      console.log('Turnos con historia clínica:', this.turnos);
    } else {
      console.log('No hay turnos con historia clínica.');
    }
  }

  toggleHistoriaClinica() {
    this.historialVisible = !this.historialVisible;

    if(this.historialVisible === true)
    {
      this.obtenerHistoriaClinica(this.usuario.uid);
    }
    else{
      this.turnos = [];
    }
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
    return this.historialVisible ? 'Ocultar Historia Clínica' : 'Mostrar Historia Clínica';
  }
}