import{a as L}from"./chunk-XXVAKMD5.js";import{A as s,Aa as F,E as M,G as x,I as o,J as i,K as l,L as h,M as p,N as g,O as r,W as f,_ as k,ga as O,ha as P,ia as w,ja as A,ka as _,la as S,na as y,oa as T,p as m,pa as E,qa as I,sa as R,t as d,u,xa as D,z as b}from"./chunk-VE5QODOT.js";var C=class e{constructor(n){this.router=n}goTo(n){this.router.navigate([n])}static \u0275fac=function(t){return new(t||e)(s(_))};static \u0275cmp=m({type:e,selectors:[["app-bienvenida"]],standalone:!0,features:[f],decls:14,vars:0,consts:[[1,"welcome-container"],[1,"logo"],["src","favicon.ico","alt","Logo de la Cl\xEDnica"],[1,"buttons"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(t,a){t&1&&(o(0,"div",0)(1,"div",1),l(2,"img",2),i(),o(3,"h1"),r(4,"Bienvenido a nuestra Cl\xEDnica"),i(),o(5,"p"),r(6," En nuestra cl\xEDnica, nos dedicamos a proporcionar atenci\xF3n m\xE9dica de calidad para todos nuestros pacientes. Nuestro equipo de profesionales est\xE1 aqu\xED para cuidar de ti y de tu salud. "),i(),o(7,"p"),r(8," Para acceder a nuestros servicios, inicia sesi\xF3n o reg\xEDstrate si a\xFAn no tienes una cuenta. "),i(),o(9,"div",3)(10,"button",4),p("click",function(){return a.goTo("/authentication/login")}),r(11,"Iniciar Sesi\xF3n"),i(),o(12,"button",5),p("click",function(){return a.goTo("/authentication/registro")}),r(13,"Registrarse"),i()()())},styles:[".welcome-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;padding:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto}.welcome-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin:20px 0;color:#2c3e50}.welcome-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin:10px 0;color:#34495e}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;margin:0 10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background-color .3s}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#3498db;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover{background-color:#2980b9}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]{background-color:#2ecc71;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#27ae60}"]})};var z=[{path:"",redirectTo:"/bienvenida",pathMatch:"full"},{path:"bienvenida",component:C},{path:"authentication",loadChildren:()=>import("./chunk-IUCCGRQU.js").then(e=>e.authenticationModuleModule)},{path:"usuarios",loadChildren:()=>import("./chunk-TUKMFR2X.js").then(e=>e.UsuariosModule),canActivate:[L]},{path:"seccion-turnos",loadChildren:()=>import("./chunk-5TOGMFHM.js").then(e=>e.SeccionTurnosModule)}];var B={projectId:"prog2-c4fdc",appId:"1:728549615422:web:7b4095b155981188ad2e6f",storageBucket:"prog2-c4fdc.appspot.com",apiKey:"AIzaSyBhkMwRqcdYn1-Q0rZ4OcD9YycAced6MCc",authDomain:"prog2-c4fdc.firebaseapp.com",messagingSenderId:"728549615422"};var V={providers:[k({eventCoalescing:!0}),S(z),y(()=>T(B)),E(()=>I()),R(()=>D())]};function q(e,n){if(e&1){let t=h();o(0,"a",6),p("click",function(){d(t);let c=g();return u(c.goTo("/usuarios/seccion-usuarios"))}),r(1,"seccion usuarios"),i()}}function G(e,n){if(e&1){let t=h();o(0,"a",7),p("click",function(){d(t);let c=g();return u(c.confirmLogout())})("click",function(){d(t);let c=g();return u(c.goTo("bienvenida"))}),r(1,"CERRAR SESION"),i()}}var v=class e{constructor(n,t){this.authService=n;this.router=t}title="segundoparcial";isLoggedIn=!1;isAdmin=!1;ngOnInit(){this.authService.getUser().subscribe(n=>{this.isLoggedIn=!!n,this.isAdmin=n?.role==="administrador"})}goTo(n){this.router.navigate([n])}confirmLogout(){this.authService.logout()}static \u0275fac=function(t){return new(t||e)(s(F),s(_))};static \u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[f],decls:10,vars:2,consts:[[1,"navbar"],["src","favicon.ico","alt","Icono de la p\xE1gina",1,"navbar-icon"],["routerLinkActive","active-route",1,"nav-link",3,"click"],[1,"nav-links-derecha"],["class","nav-link-encuesta",3,"click",4,"ngIf"],["class","nav-link-logout",3,"click",4,"ngIf"],[1,"nav-link-encuesta",3,"click"],[1,"nav-link-logout",3,"click"]],template:function(t,a){t&1&&(o(0,"nav",0),l(1,"img",1),o(2,"a",2),p("click",function(){return a.goTo("bienvenida")}),r(3,"bienvenida"),i(),o(4,"a",2),p("click",function(){return a.goTo("seccion-turnos")}),r(5,"Seccion Turnos"),i(),o(6,"div",3),M(7,q,2,0,"a",4)(8,G,2,0,"a",5),i()(),l(9,"router-outlet")),t&2&&(b(7),x("ngIf",a.isAdmin),b(),x("ngIf",a.isLoggedIn))},dependencies:[A,P,O],styles:['@charset "UTF-8";.navbar[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#add8e6;flex-wrap:wrap;width:100%;box-sizing:border-box;position:relative;margin:0}.navbar-icon[_ngcontent-%COMP%]{border-radius:50%;width:60px;height:60px;margin-right:15px}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-color:#3f9fd0;border-radius:10px;padding:5px 12px;transition:background-color .3s,transform .3s}a[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#2c7a9a}.nav-link[_ngcontent-%COMP%]{margin:0 15px;font-size:1em}.nav-links-derecha[_ngcontent-%COMP%]{margin-left:auto;display:flex;gap:20px}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:10px}.nav-link[_ngcontent-%COMP%]{margin:5px 0;font-size:.9em}.nav-links-derecha[_ngcontent-%COMP%]{flex-direction:column;gap:10px;margin-left:0}}@media (max-width: 480px){.nav-link[_ngcontent-%COMP%]{font-size:.8em;margin:3px 0}}@media (min-width: 1400px){.navbar[_ngcontent-%COMP%]{padding:20px}.nav-link[_ngcontent-%COMP%]{font-size:1.1em;margin:0 20px}.nav-links-derecha[_ngcontent-%COMP%]{gap:30px}}']})};w(v,V).catch(e=>console.error(e));
