import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../servicios/authentication.service';
import { DetalleUsuariosComponent } from '../../modulos/usuarios/detalle-usuarios/detalle-usuarios.component';
import { UsuariosModule } from '../../modulos/usuarios/usuarios.module';
import { TurnoService } from '../../servicios/turnos.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [CommonModule,FormsModule,UsuariosModule],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.scss'
})
export class MiPerfilComponent {
  usuario: any = null;
  esPaciente: boolean = false;
  esEspecialista: boolean = false;
  esAdministrador: boolean = false;
  historiaClinica: any;
  turnos: { [key: string]: any } = {}; // Usamos un objeto con claves dinámicas
  mostrarHistoriaClinica: boolean = false; // Controla la visibilidad del historial
  historialVisible = false;


  constructor(
    private authenticationService: AuthenticationService,
    private turnosService: TurnoService
  ) {}

  ngOnInit(): void {
    this.cargarUsuario();
  }

  // Método para cargar los datos del usuario
  cargarUsuario(): void {
    this.authenticationService.getUser().subscribe(user => {
      if (user) {
        this.usuario = user;
        this.establecerRolUsuario();
        this.obtenerHistoriaClinica(this.usuario.uid);
      } else {
        Swal.fire('Error', 'No se encontró el usuario', 'error');
      }
    });
  }

  async obtenerHistoriaClinica(pacienteId: string) {
    this.turnos = await this.turnosService.obtenerHistoriaClinica(pacienteId);
    if (this.turnos) {
      console.log(this.turnos);
    }
  }
  // Función que devuelve las claves del objeto
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  toggleHistoriaClinica() {
    this.historialVisible = !this.historialVisible;
    this.obtenerHistoriaClinica(this.usuario.uid);
  }

  // Método para establecer el rol del usuario
  establecerRolUsuario(): void {
    // Aquí se asignan los roles según los datos del usuario
    if (this.usuario.role === 'paciente') {
      this.esPaciente = true;
    } else if (this.usuario.role === 'especialista') {
      this.esEspecialista = true;
    } else if (this.usuario.role === 'administrador') {
      this.esAdministrador = true;
    }
  }
  generarPDF(): void {
    const doc = new jsPDF();
    
    // Agregar logo en la primera página, en la parte superior izquierda
    const logo = new Image();
    logo.src = 'favicon.ico'; // Ruta al logo
    logo.onload = () => {
      // Coloca la imagen solo una vez, en la primera página
      doc.addImage(logo, 'PNG', 10, 10, 30, 20);
  
      // Título del informe y fecha
      doc.setFontSize(16);
      doc.text('Historia Clínica', 70, 20);
      doc.setFontSize(12);
      doc.text(`Fecha de emisión: ${new Date().toLocaleDateString()}`, 70, 30);
  
      // Información del usuario
      doc.text(`Paciente: ${this.usuario.nombre} ${this.usuario.apellido}`, 10, 50);
      doc.text(`DNI: ${this.usuario.dni}`, 10, 60);
      doc.text(`Email: ${this.usuario.email}`, 10, 70);
    
      let y = 80;
    
      // Agregar información de cada turno
      for (let key of this.objectKeys(this.turnos)) {
        const turno = this.turnos[key];
        
        doc.setFontSize(14);
        doc.text(`Turno de ${turno.especialidad}`, 10, y);
        doc.setFontSize(12);
        y += 10;
    
        doc.text(`Especialidad: ${turno.especialidad}`, 10, y);
        doc.text(`Especialista: ${turno.nombreEspecialista}`, 10, y + 10);
        doc.text(`Fecha: ${turno.fechaTurno}`, 10, y + 20);
        doc.text(`Altura: ${turno.altura} cm`, 10, y + 30);
        doc.text(`Peso: ${turno.peso} kg`, 10, y + 40);
        doc.text(`Temperatura: ${turno.temperatura} °C`, 10, y + 50);
        doc.text(`Presión: ${turno.presion} mmHg`, 10, y + 60);
        y += 70;
    
        // Datos dinámicos
        if (turno.datosDinamicos && turno.datosDinamicos.length > 0) {
          doc.text('Otros Datos:', 10, y);
          y += 10;
    
          turno.datosDinamicos.forEach((dato: any) => {
            doc.text(`${dato.clave}: ${dato.valor}`, 10, y);
            y += 10;
    
            if (y > 280) {  // Verifica si se necesita una nueva página
              doc.addPage();
              y = 10;
            }
          });
        }
    
        y += 10;
    
        if (y > 280) {  // Verifica si se necesita una nueva página
          doc.addPage();
          y = 10;
        }
      }
  
      // Guardar el documento con el nombre
      doc.save(`HistoriaClinica_${this.usuario.nombre}.pdf`);
    };
  
    logo.onerror = () => {
      console.warn('Error cargando la imagen del logo');
      doc.save(`HistoriaClinica_${this.usuario.nombre}.pdf`); // Guarda el PDF sin el logo si hay error
    };
  }
  

}
