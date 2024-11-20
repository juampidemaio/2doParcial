import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {
  transform(value: any): string {
    if (!value || typeof value !== 'object' || value.seconds === undefined || value.nanoseconds === undefined) {
      console.log('Valor inválido recibido:', value);
      return 'Fecha no disponible';
    }

    // Convertir Timestamp a Date
    const date = new Date(value.seconds * 1000 + value.nanoseconds / 1_000_000);

    // Formatear manualmente: "dd/MM/yyyy HH:mm"
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
}
