import { Directive, ElementRef, Renderer2, HostListener, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appCaptcha]'
})
export class CaptchaDirective implements OnInit {
  captchaCode: string = '';
  @Output() captchaValido = new EventEmitter<boolean>(); // Asegúrate de que este sea un booleano

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.generarCaptcha();
  }

  generarCaptcha(): void {
    this.captchaCode = Math.random().toString(36).substring(2, 8); // Genera un código aleatorio
    const captchaText = this.renderer.createText(`Captcha: ${this.captchaCode}`);
    const captchaLabel = this.renderer.createElement('label');
    this.renderer.addClass(captchaLabel, 'captcha-label');
    this.renderer.appendChild(captchaLabel, captchaText);
    this.renderer.insertBefore(this.el.nativeElement.parentNode, captchaLabel, this.el.nativeElement);
  }

  @HostListener('input', ['$event.target.value']) onInput(value: string): void {
    const isValid = value.trim() === this.captchaCode; // Comprueba si el valor es válido
    this.captchaValido.emit(isValid); // Emitir un valor booleano
  }
}
