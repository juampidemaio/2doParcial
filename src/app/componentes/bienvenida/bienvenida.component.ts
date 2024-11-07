import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../servicios/authentication.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.scss'
})
export class BienvenidaComponent {
  usuario: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this.authenticationService.getUser().subscribe(user => {
      if (user) {
        this.usuario = user;
      } else {
        this.usuario = null; // Aseguramos un estado vacío si no hay usuario
      }
    });
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}