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
      // Transición de BienvenidaPage a MiPerfilPage (y viceversa)
      transition('BienvenidaPage <=> MiPerfilPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            transform: 'scale(0) rotate(180deg)', // Escala y rotación
            opacity: 0
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '-100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1500ms ease-out', style({
              left: '100%',
              opacity: 0,
              transform: 'scale(3) rotate(-360deg)'
            }))
          ], { optional: true }),
          query(':enter', [
            animate('1500ms ease-in', style({
              left: '0%',
              opacity: 1,
              transform: 'scale(1) rotate(0deg)'
            }))
          ], { optional: true })
        ])
      ]),

      // Transición de BienvenidaPage a cualquier otra página
      transition('BienvenidaPage <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            transform: 'scale(0.5) rotate(90deg)', // Rotación y escala de entrada
            opacity: 0
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1200ms ease-out', style({
              left: '-100%',
              opacity: 0,
              transform: 'scale(3) rotate(180deg)'
            }))
          ], { optional: true }),
          query(':enter', [
            animate('1200ms ease-in', style({
              left: '0%',
              opacity: 1,
              transform: 'scale(1) rotate(0deg)'
            }))
          ], { optional: true })
        ])
      ]),

      // Transición de cualquier página a MisHorariosPage
      transition('* <=> MisHorariosPage', [
        query(':enter', [
          style({
            opacity: 0,
            transform: 'scale(0.5) rotate(90deg)',
            backgroundColor: 'yellow' 
          })
        ], { optional: true }),
        query(':enter', [
          animate('1500ms ease-in-out', style({
            opacity: 1,
            transform: 'scale(1.2) rotate(0deg)',
            backgroundColor: 'transparent'
          }))
        ], { optional: true })
      ]),
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0
          })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease-in', style({ opacity: 1 }))
          ], { optional: true })
        ])
      ])

      // Añadir más transiciones para otras rutas si es necesario
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
