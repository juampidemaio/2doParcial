import { Routes } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';

export const routes: Routes = [
    { path: '', redirectTo: '/bienvenida', pathMatch: "full" },
    { path: 'bienvenida', component: BienvenidaComponent },
    { 
        path:"authentication",
        loadChildren: () => import('./modulos/authentication-module/authentication-module.module').then(m => m.authenticationModuleModule)
    },
    {
        path:"usuarios",
        loadChildren: () => import('./modulos/usuarios/usuarios.module').then(m => m.UsuariosModule), 
        canActivate: [AdminGuard],
    },

];
