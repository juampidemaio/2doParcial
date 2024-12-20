import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { AdminOrPacienteGuard } from '../../guard/pacienteOrAdmin.guard';
import { GestionHorariosComponent } from './gestion-horarios/gestion-horarios.component';
import { AdminGuard } from '../../guard/admin.guard';
import { GestionarTurnosComponent } from './gestionar-turnos/gestionar-turnos.component';
import { TurnosEspecialistaComponent } from './turnos-especialista/turnos-especialista.component';
import { EspecialistaGuard } from '../../guard/especialista.guard';
import { TurnosPacientesComponent } from './turnos-pacientes/turnos-pacientes.component';
import { pacienteGuard } from '../../guard/paciente.guard';


const routes: Routes = [
  { 
    path: "solicitar-turno", 
    component: SolicitarTurnoComponent, 
    canActivate: [AdminOrPacienteGuard],
    data: { animation: 'solicitarTurnoPage' }
  },
  { 
    path: "gestionar-horarios", 
    component: GestionHorariosComponent, 
    canActivate: [AdminGuard],
    data: { animation: 'gestionarHorariosPage' }
  },
  { 
    path: "gestionar-turnos", 
    component: GestionarTurnosComponent, 
    canActivate: [AdminGuard],
    data: { animation: 'gestionarTurnosPage' }
  },
  { 
    path: "turnos-especialista", 
    component: TurnosEspecialistaComponent, 
    canActivate: [EspecialistaGuard],
    data: { animation: 'turnosEspecialistaPage' }
  },
  { 
    path: "turnos-pacientes", 
    component: TurnosPacientesComponent, 
    canActivate: [pacienteGuard],
    data: { animation: 'turnosPacientesPage' }
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionTurnosRoutingModule { }
