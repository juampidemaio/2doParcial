import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { SeccionUsuariosComponent } from './seccion-usuarios/seccion-usuarios.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { DetalleUsuariosComponent } from './detalle-usuarios/detalle-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authenticationModuleModule } from '../authentication-module/authentication-module.module'; // Importar el módulo que contiene RegistroComponent

@NgModule({
  declarations: [
    SeccionUsuariosComponent,
    ListadoUsuariosComponent,
    DetalleUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    authenticationModuleModule  // Importar el módulo completo aquí
  ]
})
export class UsuariosModule { }
