import { Routes } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { MiPerfilComponent } from './componentes/mi-perfil/mi-perfil.component';
import { MisHorariosComponent } from './componentes/mis-horarios/mis-horarios.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/bienvenida', pathMatch: "full" },
    { path: 'bienvenida', component: BienvenidaComponent, data: { animation: 'BienvenidaPage' } },
    { path: 'mi-perfil', component: MiPerfilComponent, data: { animation: 'MiPerfilPage' } },
    { path: 'mis-horarios', component: MisHorariosComponent, data: { animation: 'MisHorariosPage' } },
    { path: 'informes', component: GraficosComponent,canActivate: [AdminGuard] },
    { 
        path:"authentication",
        loadChildren: () => import('./modulos/authentication-module/authentication-module.module').then(m => m.authenticationModuleModule)
    },
    {
        path:"usuarios",
        loadChildren: () => import('./modulos/usuarios/usuarios.module').then(m => m.UsuariosModule)
        
    },
    { 
        path:"seccion-turnos",
        loadChildren: () => import('./modulos/seccion-turnos/seccion-turnos.module').then(m => m.SeccionTurnosModule)
    },

];

