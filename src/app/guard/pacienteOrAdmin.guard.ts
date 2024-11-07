import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from '../servicios/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminOrPacienteGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    
    return this.authService.getUser().pipe(
      map(user => {
        if (user && (user.role === 'administrador' || user.role === 'paciente')) {
          return true;  // Permitir acceso si es admin o paciente
        } else {
          this.router.navigate(['/bienvenida']);
          console.log("Acceso denegado: no es administrador ni paciente");
          return false;
        }
      })
    );
  }
}
