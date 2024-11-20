import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightBar]',
  standalone: true
})
export class HighlightBarDirective implements OnChanges {
  @Input() appHighlightBar!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    let color = '';
    if (this.appHighlightBar > 10) {
      color = 'green';
    } else {
      color = 'red';
    }

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
