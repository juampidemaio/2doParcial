import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../../servicios/authentication.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public userMail: string = '';
  public userPWD: string = '';

  msjError: string = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  Login() {
    this.authService.login(this.userMail, this.userPWD)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: '¡Bienvenido!',
          text: 'Has iniciado sesión con éxito.',
          timer: 2000,
          showConfirmButton: false
        });
        this.authService.logLogin(this.userMail)
        this.router.navigate(['/bienvenida']); 
      })
      .catch((error) => {
        this.manejarErrores(error); 
      });
  }
  
  manejarErrores(e: any) {
    
    switch (e.code) {
      case "auth/invalid-email":
        this.msjError = "Email inválido. Por favor, verifica el formato del correo.";
        break;
      case "auth/user-not-found":
        this.msjError = "Usuario no encontrado. Por favor, revisa tus credenciales.";
        break;
      case "auth/wrong-password":
        this.msjError = "Contraseña incorrecta. Vuelve a intentarlo.";
        break;
      case "auth/missing-password":
        this.msjError = "Se necesita la contraseña.";
        break;
      case "auth/invalid-credential":
        this.msjError = "Las credenciales no son válidas.";
        break;
      default:
        this.msjError = "Error: " + e.message;
        break;
    }
    Swal.fire({
      icon: 'error',
      title: 'Error en el inicio de sesión',
      text: this.msjError,
      showConfirmButton: true,
    });
  }
  
  goTo(path:string)
  {
    this.router.navigate([path]);
  }

  setQuickAccess(email: string, password: string) {
    this.userMail = email;
    this.userPWD = password;
  }
}
