import { Component } from '@angular/core';
import { AuthenticationService } from '../../../servicios/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  tipoUsuario: 'paciente' | 'especialista' | 'administrador' = 'paciente'; // Por defecto, se registra como paciente
  esAdmin: boolean = false; // Indica si el usuario actual es administrador

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      if (user && user.role === 'administrador') {
        this.esAdmin = true;  // Solo muestra la opción si el usuario es administrador
      }
    });
  }

  cambiarTipoUsuario(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoUsuario = selectElement.value as 'paciente' | 'especialista' | 'administrador';
  }
  goTo(path:string)
  {
    this.router.navigate([path]);
  }
}
