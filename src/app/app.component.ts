import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './servicios/authentication.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { trigger, transition, style, query, animate, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,  BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('BienvenidaPage <=> *', [
        style({ position: 'relative' }),
        
        // Eliminar cualquier transición previa para tener un inicio limpio
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            transform: 'translateY(-100%)', // Comienza fuera de vista por arriba
            opacity: 0,
            filter: 'blur(30px)',  // Aplicamos blur desde el inicio
          })
        ], { optional: true }),
  
        group([
          // Cuando se sale de la página de bienvenida
          query(':leave', [
            animate('1s ease-out', style({
              transform: 'translateY(-100%)',  // Sale hacia arriba
              opacity: 0,
              filter: 'blur(10px)', // Mantiene el desenfoque mientras sale
            }))
          ], { optional: true }),
  
          // Cuando se entra en la página de bienvenida
          query(':enter', [
            animate('1s ease-in', style({
              transform: 'translateY(0%)',  // Entra desde arriba
              opacity: 1,
              filter: 'blur(0)',  // El desenfoque desaparece
            }))
          ], { optional: true }),
        ])
      ]),
  

      // Transición de cualquier página a MisHorariosPage
      transition('* <=> MisHorariosPage', [
        query(':enter', [
          style({
            opacity: 0,
            transform: 'translateY(-200%)', // Desde mucho más arriba
          })
        ], { optional: true }),
        query(':enter', [
          animate('1s ease-in-out', style({
            opacity: 1,
            transform: 'translateY(0%)' // Entra desde muy arriba
          }))
        ], { optional: true })
      ]),

      // Transición de cualquier página a cualquier otra página
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'translateY(-150%)', // Exagerado desde arriba
          })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1s ease-out', style({
              opacity: 0,
              transform: 'translateY(150%)' // Sale hacia abajo con un movimiento largo
            }))
          ], { optional: true }),
          query(':enter', [
            animate('1s ease-in', style({
              opacity: 1,
              transform: 'translateY(0%)' // Entra desde mucho más arriba
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})

export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
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
