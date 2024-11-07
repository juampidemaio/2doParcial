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
  tipoUsuario: 'paciente' | 'especialista' | 'administrador' = 'paciente';
  esAdmin: boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      if (user && user.role === 'administrador') {
        this.esAdmin = true;
      }
    });
  }

  cambiarTipoUsuario(tipo: 'paciente' | 'especialista' | 'administrador'): void {
    this.tipoUsuario = tipo;
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}