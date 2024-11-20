import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPermisos]'
})
export class PermisosDirective implements OnInit {
  @Input('appPermisos') rolUsuario!: string;
  @Input() rolPermitido!: string; // El rol permitido para habilitar el botón

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.rolUsuario !== this.rolPermitido) {
      this.renderer.setProperty(this.el.nativeElement, 'disabled', true);
      this.renderer.addClass(this.el.nativeElement, 'disabled'); // Añade una clase CSS opcional
    }
  }
}
