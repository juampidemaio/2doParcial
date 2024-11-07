import{a as L}from"./chunk-JAYMRRFR.js";import{A as _,Da as R,E as k,G as d,I as o,Ia as D,J as a,K as f,L as g,M as s,N as m,P as c,Y as v,da as M,la as w,na as O,oa as P,p as C,pa as A,qa as x,ra as T,t as p,ta as S,u as l,ua as y,va as I,wa as E,ya as V,z as u}from"./chunk-2NKTPWVQ.js";var b=class e{constructor(t){this.router=t}goTo(t){this.router.navigate([t])}static \u0275fac=function(n){return new(n||e)(_(x))};static \u0275cmp=C({type:e,selectors:[["app-bienvenida"]],standalone:!0,features:[v],decls:14,vars:0,consts:[[1,"welcome-container"],[1,"logo"],["src","favicon.ico","alt","Logo de la Cl\xEDnica"],[1,"buttons"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1),f(2,"img",2),a(),o(3,"h1"),c(4,"Bienvenido a nuestra Cl\xEDnica"),a(),o(5,"p"),c(6," En nuestra cl\xEDnica, nos dedicamos a proporcionar atenci\xF3n m\xE9dica de calidad para todos nuestros pacientes. Nuestro equipo de profesionales est\xE1 aqu\xED para cuidar de ti y de tu salud. "),a(),o(7,"p"),c(8," Para acceder a nuestros servicios, inicia sesi\xF3n o reg\xEDstrate si a\xFAn no tienes una cuenta. "),a(),o(9,"div",3)(10,"button",4),s("click",function(){return i.goTo("/authentication/login")}),c(11,"Iniciar Sesi\xF3n"),a(),o(12,"button",5),s("click",function(){return i.goTo("/authentication/registro")}),c(13,"Registrarse"),a()()())},styles:[".welcome-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;padding:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto}.welcome-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin:20px 0;color:#2c3e50}.welcome-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin:10px 0;color:#34495e}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;margin:0 10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background-color .3s}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#3498db;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover{background-color:#2980b9}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]{background-color:#2ecc71;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#27ae60}"]})};var F=[{path:"",redirectTo:"/bienvenida",pathMatch:"full"},{path:"bienvenida",component:b},{path:"authentication",loadChildren:()=>import("./chunk-WTDE7DXT.js").then(e=>e.authenticationModuleModule)},{path:"usuarios",loadChildren:()=>import("./chunk-KCNHQKBT.js").then(e=>e.UsuariosModule),canActivate:[L]},{path:"seccion-turnos",loadChildren:()=>import("./chunk-NOKOXE6R.js").then(e=>e.SeccionTurnosModule)}];var z={projectId:"prog2-c4fdc",appId:"1:728549615422:web:7b4095b155981188ad2e6f",storageBucket:"prog2-c4fdc.appspot.com",apiKey:"AIzaSyBhkMwRqcdYn1-Q0rZ4OcD9YycAced6MCc",authDomain:"prog2-c4fdc.firebaseapp.com",messagingSenderId:"728549615422"};var B={providers:[M({eventCoalescing:!0}),T(F),S(()=>y(z)),I(()=>E()),V(()=>R())]};function q(e,t){if(e&1){let n=g();o(0,"a",2),s("click",function(){p(n);let r=m();return l(r.goTo("/seccion-turnos/solicitar-turno"))}),c(1,"Seccion Turnos"),a()}}function G(e,t){if(e&1){let n=g();o(0,"a",2),s("click",function(){p(n);let r=m();return l(r.goTo("/seccion-turnos/turnos-especialista"))}),c(1,"Mis Turnos"),a()}}function Y(e,t){if(e&1){let n=g();o(0,"a",8),s("click",function(){p(n);let r=m();return l(r.goTo("/usuarios/seccion-usuarios"))}),c(1,"seccion usuarios"),a()}}function Z(e,t){if(e&1){let n=g();o(0,"a",9),s("click",function(){p(n);let r=m();return l(r.goTo("/seccion-turnos/gestionar-horarios"))}),c(1,"gestionar horarios"),a()}}function K(e,t){if(e&1){let n=g();o(0,"a",9),s("click",function(){p(n);let r=m();return l(r.goTo("/seccion-turnos/gestionar-turnos"))}),c(1,"gestionar Turnos"),a()}}function Q(e,t){if(e&1){let n=g();o(0,"a",10),s("click",function(){p(n);let r=m();return l(r.confirmLogout())})("click",function(){p(n);let r=m();return l(r.goTo("bienvenida"))}),c(1,"CERRAR SESION"),a()}}var h=class e{constructor(t,n){this.authService=t;this.router=n}title="segundoparcial";isLoggedIn=!1;isAdmin=!1;ngOnInit(){this.authService.getUser().subscribe(t=>{this.isLoggedIn=!!t,this.isAdmin=t?.role==="administrador"})}goTo(t){this.router.navigate([t])}confirmLogout(){this.authService.logout()}static \u0275fac=function(n){return new(n||e)(_(D),_(x))};static \u0275cmp=C({type:e,selectors:[["app-root"]],standalone:!0,features:[v],decls:12,vars:6,consts:[[1,"navbar"],["src","favicon.ico","alt","Icono de la p\xE1gina",1,"navbar-icon"],["routerLinkActive","active-route",1,"nav-link",3,"click"],["class","nav-link","routerLinkActive","active-route",3,"click",4,"ngIf"],[1,"nav-links-derecha"],["class","nav-link-encuesta",3,"click",4,"ngIf"],["class","nav-link-turno",3,"click",4,"ngIf"],["class","nav-link-logout",3,"click",4,"ngIf"],[1,"nav-link-encuesta",3,"click"],[1,"nav-link-turno",3,"click"],[1,"nav-link-logout",3,"click"]],template:function(n,i){n&1&&(o(0,"nav",0),f(1,"img",1),o(2,"a",2),s("click",function(){return i.goTo("bienvenida")}),c(3,"bienvenida"),a(),k(4,q,2,0,"a",3)(5,G,2,0,"a",3),o(6,"div",4),k(7,Y,2,0,"a",5)(8,Z,2,0,"a",6)(9,K,2,0,"a",6)(10,Q,2,0,"a",7),a()(),f(11,"router-outlet")),n&2&&(u(4),d("ngIf",i.isLoggedIn),u(),d("ngIf",i.isLoggedIn),u(2),d("ngIf",i.isAdmin),u(),d("ngIf",i.isAdmin),u(),d("ngIf",i.isAdmin),u(),d("ngIf",i.isLoggedIn))},dependencies:[A,O,w],styles:['@charset "UTF-8";.navbar[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#add8e6;flex-wrap:wrap;width:100%;box-sizing:border-box;position:relative;margin:0}.navbar-icon[_ngcontent-%COMP%]{border-radius:50%;width:60px;height:60px;margin-right:15px}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-color:#3f9fd0;border-radius:10px;padding:5px 12px;transition:background-color .3s,transform .3s}a[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#2c7a9a}.nav-link[_ngcontent-%COMP%]{margin:0 15px;font-size:1em}.nav-links-derecha[_ngcontent-%COMP%]{margin-left:auto;display:flex;gap:20px}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:10px}.nav-link[_ngcontent-%COMP%]{margin:5px 0;font-size:.9em}.nav-links-derecha[_ngcontent-%COMP%]{flex-direction:column;gap:10px;margin-left:0}}@media (max-width: 480px){.nav-link[_ngcontent-%COMP%]{font-size:.8em;margin:3px 0}}@media (min-width: 1400px){.navbar[_ngcontent-%COMP%]{padding:20px}.nav-link[_ngcontent-%COMP%]{font-size:1.1em;margin:0 20px}.nav-links-derecha[_ngcontent-%COMP%]{gap:30px}}']})};P(h,B).catch(e=>console.error(e));
