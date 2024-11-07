import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './servicios/authentication.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'segundoparcial';
  isLoggedIn = false;
  isAdmin = false;
  isPaciente = false;
  isEpecialista = false;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    // Suscríbete al observable del usuario
    this.authService.getUser().subscribe(user => {
      this.isLoggedIn = !!user; // Verifica si hay un usuario
      this.isAdmin = user?.role === 'administrador';
      this.isEpecialista = user?.role === 'especialista';
      this.isPaciente = user?.role === 'paciente';
    });
  }

  goTo(path:string)
  {
    this.router.navigate([path]);
  }
  confirmLogout() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();  // Llama al servicio para cerrar sesión
        this.router.navigate(['bienvenida']);  // Redirige a la página de bienvenida
      }
    });
  }
}
