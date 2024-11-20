import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoValor',
  standalone: true
})
export class FormatoValorPipe implements PipeTransform {
  transform(value: any, defaultValue: string = 'No disponible'): any {
    if (value === 'N/A' || value == null || value === '') {
      return defaultValue;
    }
    return value;
  }
}

