import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "registro", component: RegistroComponent, data: { animation: 'RegistroPage' } },
  { path: "login", component: LoginComponent, data: { animation: 'LoginPage' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroModuleRoutingModule { }
