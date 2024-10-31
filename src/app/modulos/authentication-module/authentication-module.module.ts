import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroModuleRoutingModule } from './authentication-module-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente.component';
import { RegistroEspecialistaComponent } from './registro-especialista/registro-especialista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [RegistroComponent, RegistroPacienteComponent, RegistroEspecialistaComponent, LoginComponent,RegistroAdminComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RegistroModuleRoutingModule,
  ],
  exports:[RegistroComponent]
})
export class authenticationModuleModule { }
