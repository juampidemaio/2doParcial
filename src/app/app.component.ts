import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './servicios/authentication.service';
import { CommonModule } from '@angular/common';

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

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    // Suscríbete al observable del usuario
    this.authService.getUser().subscribe(user => {
      this.isLoggedIn = !!user; // Verifica si hay un usuario
      this.isAdmin = user?.role === 'administrador';
    });
  }

  goTo(path:string)
  {
    this.router.navigate([path]);
  }
  confirmLogout() {
    this.authService.logout(); 
  }
}
