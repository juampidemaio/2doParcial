import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroModuleRoutingModule } from './authentication-module-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente.component';
import { RegistroEspecialistaComponent } from './registro-especialista/registro-especialista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { LoginComponent } from './login/login.component';
import { RecaptchaDirective } from '../captcha/directivas/captcha.directive';
import { CaptchaModule } from '../captcha/captcha.module';
import { RecaptchaModule} from 'ng-recaptcha'; // Aquí importas el módulo


@NgModule({
  declarations: [RegistroComponent, RegistroPacienteComponent, RegistroEspecialistaComponent, LoginComponent,RegistroAdminComponent,RecaptchaDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RegistroModuleRoutingModule,
    CaptchaModule,
    RecaptchaModule,
    
  ],
  exports:[RegistroComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregado aquí
})
export class authenticationModuleModule { }
