import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlternarEstilo]',
  standalone: true
})
export class AlternarEstiloDirective {
  @Input('appAlternarEstilo') colors: { odd: string; even: string } = { odd: '#ffffff', even: '#f2f2f2' };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover', ['$event.target'])
  onMouseOver(row: HTMLElement) {
    if (row.tagName === 'TR' && row.closest('tbody')) {  // Asegura que no afecte <thead>
      this.renderer.setStyle(row, 'background-color', '#b2dfdb');
    }
  }

  @HostListener('mouseout', ['$event.target'])
  onMouseOut(row: HTMLElement) {
    if (row.tagName === 'TR' && row.closest('tbody')) {
      const index = Array.from(this.el.nativeElement.querySelectorAll('tbody tr')).indexOf(row);
      const color = index % 2 === 0 ? this.colors.even : this.colors.odd;
      this.renderer.setStyle(row, 'background-color', color);
    }
}

}
