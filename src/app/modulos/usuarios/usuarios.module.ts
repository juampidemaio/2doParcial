import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { SeccionUsuariosComponent } from './seccion-usuarios/seccion-usuarios.component';
import { ListadoEspecialistaComponent } from './listado-especialista/listado-especialista.component';
import { DetalleUsuariosComponent } from './detalle-usuarios/detalle-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authenticationModuleModule } from '../authentication-module/authentication-module.module'; // Importar el módulo que contiene RegistroComponent
import { ListadoPacienteComponent } from './listado-paciente/listado-paciente.component';
import { ListadoAdminComponent } from './listado-admin/listado-admin.component';
import { SeccionPacientesComponent } from './seccion-pacientes/seccion-pacientes.component';
import { PermisosDirective } from '../../directives/permisos.directive';
import { FormatoValorPipe } from "../../pipes/formato-valor.pipe";


@NgModule({
  declarations: [
    SeccionUsuariosComponent,
    ListadoPacienteComponent,
    DetalleUsuariosComponent,
    ListadoEspecialistaComponent,
    ListadoAdminComponent,
    SeccionPacientesComponent,
    PermisosDirective,
    
    
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    authenticationModuleModule,
    FormatoValorPipe
],
  exports:[ListadoPacienteComponent, ListadoEspecialistaComponent]
})
export class UsuariosModule { }
