import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionUsuariosComponent } from './seccion-usuarios/seccion-usuarios.component';
import { SeccionPacientesComponent } from './seccion-pacientes/seccion-pacientes.component';
import { AdminGuard } from '../../guard/admin.guard';

const routes: Routes = [
  {path:"seccion-usuarios", component: SeccionUsuariosComponent, canActivate: [AdminGuard]},
  {path:"seccion-pacientes", component: SeccionPacientesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
