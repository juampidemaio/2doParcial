import{a as j}from"./chunk-KMCI2TRP.js";import{$ as R,A as p,C as o,D as I,E as v,Ea as q,Ga as G,K as h,Q as T,S as y,T as M,V as P,W as V,X as F,Y as O,Z as D,aa as z,ba as U,c as A,ca as L,ea as N,i as x,ja as B,l as d,m as u,oa as k,p as b,q as c,r as C,t as _,u as l,v as r,w as n,x as g,y as f,z as m}from"./chunk-YGP5ZKKQ.js";var E=class t{constructor(i){this.router=i}goTo(i){this.router.navigate([i])}static \u0275fac=function(e){return new(e||t)(C(O))};static \u0275cmp=x({type:t,selectors:[["app-bienvenida"]],standalone:!0,features:[h],decls:14,vars:0,consts:[[1,"welcome-container"],[1,"logo"],["src","favicon.ico","alt","Logo de la Cl\xEDnica"],[1,"buttons"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(e,a){e&1&&(r(0,"div",0)(1,"div",1),g(2,"img",2),n(),r(3,"h1"),o(4,"Bienvenido a nuestra Cl\xEDnica"),n(),r(5,"p"),o(6," En nuestra cl\xEDnica, nos dedicamos a proporcionar atenci\xF3n m\xE9dica de calidad para todos nuestros pacientes. Nuestro equipo de profesionales est\xE1 aqu\xED para cuidar de ti y de tu salud. "),n(),r(7,"p"),o(8," Para acceder a nuestros servicios, inicia sesi\xF3n o reg\xEDstrate si a\xFAn no tienes una cuenta. "),n(),r(9,"div",3)(10,"button",4),m("click",function(){return a.goTo("/authentication/login")}),o(11,"Iniciar Sesi\xF3n"),n(),r(12,"button",5),m("click",function(){return a.goTo("/authentication/registro")}),o(13,"Registrarse"),n()()())},styles:[".welcome-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;padding:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto}.welcome-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin:20px 0;color:#2c3e50}.welcome-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin:10px 0;color:#34495e}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;margin:0 10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background-color .3s}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#3498db;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover{background-color:#2980b9}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]{background-color:#2ecc71;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#27ae60}"]})};var Z=A(G());function te(t,i){if(t&1&&g(0,"img",7),t&2){let e=i.$implicit;l("src",e,b)}}function ne(t,i){if(t&1&&(r(0,"div",5)(1,"p")(2,"strong"),o(3,"Obra Social:"),n(),o(4),n(),r(5,"div")(6,"strong"),o(7,"Im\xE1genes de Perfil:"),n(),_(8,te,1,1,"img",6),n()()),t&2){let e=p(2);c(4),v(" ",e.usuario.obraSocial,""),c(4),l("ngForOf",e.usuario.imagenes)}}function ie(t,i){if(t&1&&(r(0,"li"),o(1),n()),t&2){let e=i.$implicit;c(),I(e)}}function oe(t,i){if(t&1&&(r(0,"div",8)(1,"p")(2,"strong"),o(3,"Especialidades:"),n()(),r(4,"p"),o(5),n(),r(6,"ul"),_(7,ie,2,1,"li",9),n(),r(8,"strong"),o(9,"Im\xE1gen de Perfil:"),n(),g(10,"img",7),n()),t&2){let e=p(2);c(5),I(e.usuario.especialidad),c(2),l("ngForOf",e.usuario.especialidades),c(3),l("src",e.usuario.imageUrl,b)}}function re(t,i){if(t&1&&(r(0,"div",10)(1,"div")(2,"strong"),o(3,"Im\xE1gen de Perfil:"),n(),g(4,"img",7),n()()),t&2){let e=p(2);c(4),l("src",e.usuario.imageUrl,b)}}function ae(t,i){if(t&1&&(r(0,"div",1)(1,"h3"),o(2,"Detalles del Usuario"),n(),r(3,"p")(4,"strong"),o(5,"Nombre:"),n(),o(6),n(),r(7,"p")(8,"strong"),o(9,"Apellido:"),n(),o(10),n(),r(11,"p")(12,"strong"),o(13,"Edad:"),n(),o(14),n(),r(15,"p")(16,"strong"),o(17,"DNI:"),n(),o(18),n(),r(19,"p")(20,"strong"),o(21,"Mail:"),n(),o(22),n(),_(23,ne,9,2,"div",2)(24,oe,11,3,"div",3)(25,re,5,1,"div",4),n()),t&2){let e=p();c(6),v(" ",e.usuario.nombre,""),c(4),v(" ",e.usuario.apellido,""),c(4),v(" ",e.usuario.edad,""),c(4),v(" ",e.usuario.dni,""),c(4),v(" ",e.usuario.email,""),c(),l("ngIf",e.esPaciente),c(),l("ngIf",e.esEspecialista),c(),l("ngIf",e.esAdministrador)}}var S=class t{constructor(i){this.authenticationService=i}usuario=null;esPaciente=!1;esEspecialista=!1;esAdministrador=!1;ngOnInit(){this.cargarUsuario()}cargarUsuario(){this.authenticationService.getUser().subscribe(i=>{i?(this.usuario=i,this.establecerRolUsuario()):Z.default.fire("Error","No se encontr\xF3 el usuario","error")})}establecerRolUsuario(){this.usuario.role==="paciente"?this.esPaciente=!0:this.usuario.role==="especialista"?this.esEspecialista=!0:this.usuario.role==="administrador"&&(this.esAdministrador=!0)}static \u0275fac=function(e){return new(e||t)(C(k))};static \u0275cmp=x({type:t,selectors:[["app-mi-perfil"]],standalone:!0,features:[h],decls:1,vars:1,consts:[["class","details-container",4,"ngIf"],[1,"details-container"],["class","paciente",4,"ngIf"],["class","especialista",4,"ngIf"],["class","administrador",4,"ngIf"],[1,"paciente"],["alt","Imagen de Perfil","width","100",3,"src",4,"ngFor","ngForOf"],["alt","Imagen de Perfil","width","100",3,"src"],[1,"especialista"],[4,"ngFor","ngForOf"],[1,"administrador"]],template:function(e,a){e&1&&_(0,ae,26,8,"div",0),e&2&&l("ngIf",a.usuario)},dependencies:[P,y,M,q],styles:[".details-container[_ngcontent-%COMP%]{background-color:#eaeded;border-radius:10px;padding:2rem;box-shadow:0 6px 14px #0003;margin-top:2rem;width:95%}.details-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e8449;text-align:center;margin-bottom:1.5rem;font-size:1.8rem}.details-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;margin:.75rem 0;color:#333}.details-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#154360}.details-container[_ngcontent-%COMP%]   .paciente[_ngcontent-%COMP%], .details-container[_ngcontent-%COMP%]   .especialista[_ngcontent-%COMP%], .details-container[_ngcontent-%COMP%]   .administrador[_ngcontent-%COMP%]{margin-top:1.5rem;border:2px solid #1E8449;padding:1.5rem;border-radius:8px;background-color:#1e84491a;transition:background-color .3s ease,transform .2s ease}.details-container[_ngcontent-%COMP%]   .paciente[_ngcontent-%COMP%]:hover, .details-container[_ngcontent-%COMP%]   .especialista[_ngcontent-%COMP%]:hover, .details-container[_ngcontent-%COMP%]   .administrador[_ngcontent-%COMP%]:hover{background-color:#1e84494d;transform:translateY(-2px)}.details-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:1rem;border-radius:8px;border:2px solid #1E8449}"]})};var $=[{path:"",redirectTo:"/bienvenida",pathMatch:"full"},{path:"bienvenida",component:E},{path:"mi-perfil",component:S},{path:"authentication",loadChildren:()=>import("./chunk-KAWOPXJN.js").then(t=>t.authenticationModuleModule)},{path:"usuarios",loadChildren:()=>import("./chunk-HDDE4TRI.js").then(t=>t.UsuariosModule),canActivate:[j]},{path:"seccion-turnos",loadChildren:()=>import("./chunk-5Q42CNOJ.js").then(t=>t.SeccionTurnosModule)}];var K={projectId:"prog2-c4fdc",appId:"1:728549615422:web:7b4095b155981188ad2e6f",storageBucket:"prog2-c4fdc.appspot.com",apiKey:"AIzaSyBhkMwRqcdYn1-Q0rZ4OcD9YycAced6MCc",authDomain:"prog2-c4fdc.firebaseapp.com",messagingSenderId:"728549615422"};var H={providers:[T({eventCoalescing:!0}),D($),R(()=>z(K)),U(()=>L()),N(()=>B())]};var J=A(G());function ce(t,i){if(t&1){let e=f();r(0,"a",2),m("click",function(){d(e);let s=p();return u(s.goTo("/seccion-turnos/solicitar-turno"))}),o(1,"Seccion Turnos"),n()}}function se(t,i){if(t&1){let e=f();r(0,"a",2),m("click",function(){d(e);let s=p();return u(s.goTo("/seccion-turnos/turnos-especialista"))}),o(1,"Mis Turnos"),n()}}function le(t,i){if(t&1){let e=f();r(0,"a",2),m("click",function(){d(e);let s=p();return u(s.goTo("/seccion-turnos/turnos-pacientes"))}),o(1,"Mis Turnos"),n()}}function pe(t,i){if(t&1){let e=f();r(0,"a",8),m("click",function(){d(e);let s=p();return u(s.goTo("/usuarios/seccion-usuarios"))}),o(1,"seccion usuarios"),n()}}function me(t,i){if(t&1){let e=f();r(0,"a",9),m("click",function(){d(e);let s=p();return u(s.goTo("/seccion-turnos/gestionar-horarios"))}),o(1,"gestionar horarios"),n()}}function de(t,i){if(t&1){let e=f();r(0,"a",9),m("click",function(){d(e);let s=p();return u(s.goTo("/seccion-turnos/gestionar-turnos"))}),o(1,"gestionar Turnos"),n()}}function ue(t,i){if(t&1){let e=f();r(0,"a",10),m("click",function(){d(e);let s=p();return u(s.goTo("mi-perfil"))}),o(1,"mi perfil"),n()}}function ge(t,i){if(t&1){let e=f();r(0,"a",10),m("click",function(){d(e);let s=p();return u(s.confirmLogout())})("click",function(){d(e);let s=p();return u(s.goTo("bienvenida"))}),o(1,"CERRAR SESION"),n()}}var w=class t{constructor(i,e){this.authService=i;this.router=e}title="segundoparcial";isLoggedIn=!1;isAdmin=!1;isPaciente=!1;isEpecialista=!1;ngOnInit(){this.authService.getUser().subscribe(i=>{this.isLoggedIn=!!i,this.isAdmin=i?.role==="administrador",this.isEpecialista=i?.role==="especialista",this.isPaciente=i?.role==="paciente"})}goTo(i){this.router.navigate([i])}confirmLogout(){J.default.fire({title:"\xBFEst\xE1s seguro?",text:"\xBFQuieres cerrar sesi\xF3n?",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xED, cerrar sesi\xF3n",cancelButtonText:"Cancelar",reverseButtons:!0}).then(i=>{i.isConfirmed&&(this.authService.logout(),this.router.navigate(["bienvenida"]))})}static \u0275fac=function(e){return new(e||t)(C(k),C(O))};static \u0275cmp=x({type:t,selectors:[["app-root"]],standalone:!0,features:[h],decls:14,vars:8,consts:[[1,"navbar"],["src","favicon.ico","alt","Icono de la p\xE1gina",1,"navbar-icon"],["routerLinkActive","active-route",1,"nav-link",3,"click"],["class","nav-link","routerLinkActive","active-route",3,"click",4,"ngIf"],[1,"nav-links-derecha"],["class","nav-link-encuesta",3,"click",4,"ngIf"],["class","nav-link-turno",3,"click",4,"ngIf"],["class","nav-link-logout",3,"click",4,"ngIf"],[1,"nav-link-encuesta",3,"click"],[1,"nav-link-turno",3,"click"],[1,"nav-link-logout",3,"click"]],template:function(e,a){e&1&&(r(0,"nav",0),g(1,"img",1),r(2,"a",2),m("click",function(){return a.goTo("bienvenida")}),o(3,"bienvenida"),n(),_(4,ce,2,0,"a",3)(5,se,2,0,"a",3)(6,le,2,0,"a",3),r(7,"div",4),_(8,pe,2,0,"a",5)(9,me,2,0,"a",6)(10,de,2,0,"a",6)(11,ue,2,0,"a",7)(12,ge,2,0,"a",7),n()(),g(13,"router-outlet")),e&2&&(c(4),l("ngIf",a.isLoggedIn&&(a.isAdmin||a.isPaciente)),c(),l("ngIf",a.isEpecialista),c(),l("ngIf",a.isPaciente),c(2),l("ngIf",a.isAdmin),c(),l("ngIf",a.isAdmin),c(),l("ngIf",a.isAdmin),c(),l("ngIf",a.isLoggedIn),c(),l("ngIf",a.isLoggedIn))},dependencies:[F,P,M],styles:['@charset "UTF-8";.navbar[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#add8e6;flex-wrap:wrap;width:100%;box-sizing:border-box;position:relative;margin:0}.navbar-icon[_ngcontent-%COMP%]{border-radius:50%;width:60px;height:60px;margin-right:15px}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-color:#3f9fd0;border-radius:10px;padding:5px 12px;transition:background-color .3s,transform .3s}a[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#2c7a9a}.nav-link[_ngcontent-%COMP%]{margin:0 15px;font-size:1em}.nav-links-derecha[_ngcontent-%COMP%]{margin-left:auto;display:flex;gap:20px}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:10px}.nav-link[_ngcontent-%COMP%]{margin:5px 0;font-size:.9em}.nav-links-derecha[_ngcontent-%COMP%]{flex-direction:column;gap:10px;margin-left:0}}@media (max-width: 480px){.nav-link[_ngcontent-%COMP%]{font-size:.8em;margin:3px 0}}@media (min-width: 1400px){.navbar[_ngcontent-%COMP%]{padding:20px}.nav-link[_ngcontent-%COMP%]{font-size:1.1em;margin:0 20px}.nav-links-derecha[_ngcontent-%COMP%]{gap:30px}}']})};V(w,H).catch(t=>console.error(t));
