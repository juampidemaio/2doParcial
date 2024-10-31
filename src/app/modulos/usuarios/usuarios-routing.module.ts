import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionUsuariosComponent } from './seccion-usuarios/seccion-usuarios.component';

const routes: Routes = [
  {path:"seccion-usuarios", component: SeccionUsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
