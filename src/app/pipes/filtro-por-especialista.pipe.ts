import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPorEspecialista',
  standalone:true
})
export class filtroPorEspecialista implements PipeTransform {

  transform(turnos: any[], especialidad: string): any[] {
    if (!turnos || !especialidad) return turnos;
    return turnos.filter(turno => turno.especialidad === especialidad);
  }
}
