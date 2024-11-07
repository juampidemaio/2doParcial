import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionTurnosRoutingModule } from './seccion-turnos-routing.module';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoPacienteComponent } from '../usuarios/listado-paciente/listado-paciente.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { GestionHorariosComponent } from './gestion-horarios/gestion-horarios.component';
import { GestionarTurnosComponent } from './gestionar-turnos/gestionar-turnos.component';
import { TurnosEspecialistaComponent } from './turnos-especialista/turnos-especialista.component';
import { TurnosPacientesComponent } from './turnos-pacientes/turnos-pacientes.component';


@NgModule({
  declarations: [SolicitarTurnoComponent,GestionHorariosComponent, GestionarTurnosComponent,TurnosEspecialistaComponent, TurnosPacientesComponent],
  imports: [
    CommonModule,
    SeccionTurnosRoutingModule,
    ReactiveFormsModule,
    UsuariosModule,
    CommonModule,
    FormsModule
    
  ]
})
export class SeccionTurnosModule { }
