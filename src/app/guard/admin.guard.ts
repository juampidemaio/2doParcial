import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { map, Observable } from 'rxjs';
import { AuthenticationService } from '../servicios/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(  
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    
    return this.authService.getUser().pipe(
      map(user => {
        if (user && user.role === 'administrador') {
          return true;  // Si el usuario es admin, permite la activación
        } else {
          this.router.navigate(['/home']);
          console.log("no es administrador verifica las cosas bien");
          return false;
        }
      })
    );
  }
}