import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaptchaRoutingModule } from './captcha-routing.module';
import { RecaptchaV3Module, RecaptchaModule } from 'ng-recaptcha'; // Importa ambos módulos



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CaptchaRoutingModule,
    RecaptchaV3Module,
    RecaptchaModule
  ]
})
export class CaptchaModule { }
