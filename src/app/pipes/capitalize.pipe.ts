import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone:true
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value
      ? value
          .split(' ') // Divide el string en palabras
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza cada palabra
          .join(' ') // Une las palabras nuevamente con un espacio
      : '';
  }
}
