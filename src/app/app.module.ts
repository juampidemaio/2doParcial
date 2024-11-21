import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecaptchaModule, RecaptchaV3Module } from 'ng-recaptcha'; // Aquí importas el módulo

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    RecaptchaModule,
    RecaptchaV3Module,
     
    
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
