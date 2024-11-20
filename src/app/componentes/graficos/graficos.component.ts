import { Component, ElementRef, ViewChild } from '@angular/core';
import { InformesService } from '../../servicios/informes.service';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';  // Importar html2canvas
import { FormatDatePipe } from '../../pipes/format-date.pipe';
import { AlternarEstiloDirective } from '../../directives/alternar-estilo.directive';
import { HighlightBarDirective } from '../../directives/highlight-bar.directive';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { FormsModule } from '@angular/forms';

// Registrar los componentes necesarios
// Chart.register(LinearScale, BarElement, Title, Tooltip, Legend);
@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [CommonModule,FormatDatePipe,AlternarEstiloDirective, HighlightBarDirective, CapitalizePipe,FormsModule],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.scss'
})
export class GraficosComponent {
  logins: any[] = [];
  turnosPorEspecialidad: { especialidad: string, cantidadTurnos: number }[] = [];
  turnosPorFecha: any[] = [];
  startDate!: string;
  endDate!: string;
  startTime!: string;
  endTime!: string;

  turnosFinalizados: any[] = [];
  turnosSolicitados: any[] = [];

  currentGraph: string = 'turnosSolicitados';
  showLogs: boolean = false;

  @ViewChild('turnosChart', { static: false }) turnosChartRef!: ElementRef;
  @ViewChild('logsTable', { static: false }) logsTableRef!: ElementRef;

  constructor(private informesService: InformesService) {}
  
validateInputs(): void {
  // Verificación de fechas solo cuando ambos campos de fecha están completos
  if (this.startDate && this.endDate) {
    const startDateObj = new Date(this.startDate);
    const endDateObj = new Date(this.endDate);
    
    if (startDateObj > endDateObj) {
      alert('La fecha de inicio no puede ser mayor a la fecha de fin.');
      return;
    }
  }
}

buscarTurnos(): void {
  // Verificación de campos vacíos
  if (!this.startDate || !this.endDate || !this.startTime || !this.endTime) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Verificación de horas
  const startTimeObj = this.timeToMinutes(this.startTime);
  const endTimeObj = this.timeToMinutes(this.endTime);

  if (startTimeObj > endTimeObj) {
    alert('La hora de inicio no puede ser mayor a la hora de fin.');
    return;
  }

  // Realizar la búsqueda de turnos
  this.informesService
    .getTurnosPorEspecialistaYLapsodeTiempo(
      'realizado',
      new Date(this.startDate),
      new Date(this.endDate),
      this.startTime,
      this.endTime
    )
    .subscribe((turnos) => {
      this.turnosFinalizados = turnos;
    });

  this.informesService
    .getTurnosPorEspecialistaYLapsodeTiempo(
      'solicitado',
      new Date(this.startDate),
      new Date(this.endDate),
      this.startTime,
      this.endTime
    )
    .subscribe((turnos) => {
      this.turnosSolicitados = turnos;
    });
}

// Función para convertir la hora en formato HH:mm a minutos desde la medianoche
timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(num => parseInt(num, 10));
  return hours * 60 + minutes; // Devuelve el total de minutos desde la medianoche
}
  ngOnInit(): void {
    this.informesService.getLogins().subscribe((data) => {
      this.logins = data;
      console.log(data);
      

    });
    this.informesService.getTurnosPorEspecialidad().subscribe((data) => {
      this.turnosPorEspecialidad = data;
    });
    this.informesService.getTurnosPorFecha().subscribe((data) => {
      this.turnosPorFecha = data;
    });

    
    // this.informesService
    //   .getTurnosPorEspecialistaYLapsodeTiempo(
    //     'realizado',
    //     new Date(this.startDate),
    //     new Date(this.endDate),
    //     this.startTime,
    //     this.endTime
    //   )
    //   .subscribe((turnos) => {
    //     this.turnosFinalizados = turnos;
    //   });

    //   this.informesService
    //   .getTurnosPorEspecialistaYLapsodeTiempo(
    //     'solicitado',
    //     new Date(this.startDate),
    //     new Date(this.endDate),
    //     this.startTime,
    //     this.endTime
    //   )
    //   .subscribe((turnos) => {
    //     this.turnosSolicitados = turnos;
    //   });

    // this.informesService.getTurnosPorEspecialistaYLapsodeTiempo('realizado', new Date('2024-11-15'), new Date('2024-11-25'), '15:00', '15:30')
    //   .subscribe(turnos => {
    //     this.turnosFinalizados = turnos;
    //   });
    // this.informesService.getTurnosPorEspecialistaYLapsodeTiempo('solicitado', new Date('2024-11-15'), new Date('2024-11-25'), '15:00', '15:30')
    //   .subscribe(turnos => {
    //     this.turnosSolicitados = turnos;
    //   });
  }
  downloadPDF(chartElement: HTMLElement) {
    html2canvas(chartElement).then((canvas) => {
      const doc = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = doc.internal.pageSize.width - 20;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      // Agregar la imagen del gráfico al PDF
      doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
  
      // Obtenemos los elementos de las barras
      const bars = chartElement.querySelectorAll('.bar');
      bars.forEach((bar: Element, index: number) => {
        const barElement = bar as HTMLElement;
        let label = '';
  
        // Dependiendo del tipo de gráfico, asignamos la etiqueta correcta
        switch (this.currentGraph) {
          case 'turnosSolicitados':
            label = this.turnosSolicitados[index]?.especialista || '';  // Especialista
            break;
          case 'turnosFinalizados':
            label = this.turnosFinalizados[index]?.especialista || '';  // Especialista
            break;
          case 'turnosPorEspecialidad':
            label = this.turnosPorEspecialidad[index]?.especialidad || '';  // Especialidad
            break;
          case 'turnosPorFecha':
            label = this.turnosPorFecha[index]?.fecha || '';  // Fecha
            break;
        }
  
        // Calculamos la posición de la etiqueta sobre la barra
        const barHeight = barElement.getBoundingClientRect().height;
        const x = barElement.getBoundingClientRect().left - chartElement.getBoundingClientRect().left + 10;
        const y = barElement.getBoundingClientRect().top - chartElement.getBoundingClientRect().top + barHeight + 5;
  
        // Añadimos la etiqueta sobre la barra
        if (label) {
          doc.text(label, x, y);
        }
      });
  
      // Guardar el PDF con el gráfico y las etiquetas
      doc.save('grafico_con_etiquetas.pdf');
    });
  }
  
  
  
  downloadExcel(): void {
    let data: any[] = [];
    switch (this.currentGraph) {
      case 'turnosSolicitados':
        data = this.turnosSolicitados;
        break;
      case 'turnosFinalizados':
        data = this.turnosFinalizados;
        break;
      case 'turnosPorEspecialidad':
        data = this.turnosPorEspecialidad;
        break;
      case 'turnosPorFecha':
        data = this.turnosPorFecha;
        break;
    }

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Turnos');
    XLSX.writeFile(wb, 'grafico_turnos.xlsx');
  }

  downloadLogsPDF() {
    const doc = new jsPDF();
    const logsTable = this.logsTableRef.nativeElement;
    
    html2canvas(logsTable).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = doc.internal.pageSize.width - 20;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      doc.save('log_de_ingresos.pdf');
    });
  }

  downloadLogsExcel() {
    const ws = XLSX.utils.table_to_sheet(this.logsTableRef.nativeElement);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Log de Ingresos');
    XLSX.writeFile(wb, 'log_de_ingresos.xlsx');
  }

  showGraph(graph: string): void {
    this.currentGraph = graph;
    this.showLogs = false;
  }

  toggleLogs(): void {
    this.showLogs = !this.showLogs;
    this.currentGraph = '';
  }
}