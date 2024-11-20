import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltarCita]',
  standalone:true

})
export class ResaltarCitaDirective implements OnInit {
  @Input() fechaCita!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log('Directiva appResaltarCita aplicada');
    const fechaCita = new Date(this.fechaCita);
    const ahora = new Date();
    const diferenciaHoras = (fechaCita.getTime() - ahora.getTime()) / (1000 * 60 * 60);
  
    if (diferenciaHoras > 0 && diferenciaHoras <= 24) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
  }
  
}
