import{A as l,E as S,G as x,I as o,J as i,K as u,L as O,M as c,N as k,O as r,V as d,X as w,ca as y,da as I,ea as R,fa as E,ga as s,h as P,ha as T,ja as D,ka as L,l as A,la as z,ma as F,na as j,o as _,oa as B,p as m,pa as g,t as b,u as h,z as M}from"./chunk-I3FCMSY4.js";var f=class e{constructor(n,t){this.authService=n;this.router=t}canActivate(n,t){return this.authService.getUser().pipe(P(a=>a&&a.role==="administrador"?!0:(this.router.navigate(["/home"]),console.log("no es administrador verifica las cosas bien"),!1)))}static \u0275fac=function(t){return new(t||e)(_(g),_(s))};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})};var v=class e{constructor(n){this.router=n}goTo(n){this.router.navigate([n])}static \u0275fac=function(t){return new(t||e)(l(s))};static \u0275cmp=m({type:e,selectors:[["app-bienvenida"]],standalone:!0,features:[d],decls:14,vars:0,consts:[[1,"welcome-container"],[1,"logo"],["src","public/favicon.ico","alt","Logo de la Cl\xEDnica"],[1,"buttons"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(t,a){t&1&&(o(0,"div",0)(1,"div",1),u(2,"img",2),i(),o(3,"h1"),r(4,"Bienvenido a nuestra Cl\xEDnica"),i(),o(5,"p"),r(6," En nuestra cl\xEDnica, nos dedicamos a proporcionar atenci\xF3n m\xE9dica de calidad para todos nuestros pacientes. Nuestro equipo de profesionales est\xE1 aqu\xED para cuidar de ti y de tu salud. "),i(),o(7,"p"),r(8," Para acceder a nuestros servicios, inicia sesi\xF3n o reg\xEDstrate si a\xFAn no tienes una cuenta. "),i(),o(9,"div",3)(10,"button",4),c("click",function(){return a.goTo("/authentication/login")}),r(11,"Iniciar Sesi\xF3n"),i(),o(12,"button",5),c("click",function(){return a.goTo("/authentication/registro")}),r(13,"Registrarse"),i()()())},styles:[".welcome-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background-color:#f5f5f5;text-align:center;padding:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto}.welcome-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin:20px 0;color:#2c3e50}.welcome-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin:10px 0;color:#34495e}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;margin:0 10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background-color .3s}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#3498db;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover{background-color:#2980b9}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]{background-color:#2ecc71;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#27ae60}"]})};var U=[{path:"",redirectTo:"/bienvenida",pathMatch:"full"},{path:"bienvenida",component:v},{path:"authentication",loadChildren:()=>import("./chunk-ANOENG3G.js").then(e=>e.authenticationModuleModule)},{path:"usuarios",loadChildren:()=>import("./chunk-VTEWNQRX.js").then(e=>e.UsuariosModule),canActivate:[f]}];var q={projectId:"prog2-c4fdc",appId:"1:728549615422:web:7b4095b155981188ad2e6f",storageBucket:"prog2-c4fdc.appspot.com",apiKey:"AIzaSyBhkMwRqcdYn1-Q0rZ4OcD9YycAced6MCc",authDomain:"prog2-c4fdc.firebaseapp.com",messagingSenderId:"728549615422"};var G={providers:[w({eventCoalescing:!0}),T(U),D(()=>L(q)),z(()=>F()),j(()=>B())]};function Z(e,n){if(e&1){let t=O();o(0,"a",6),c("click",function(){b(t);let p=k();return h(p.goTo("/usuarios/seccion-usuarios"))}),r(1,"seccion usuarios"),i()}}function H(e,n){if(e&1){let t=O();o(0,"a",7),c("click",function(){b(t);let p=k();return h(p.confirmLogout())}),r(1,"CERRAR SESION"),i()}}var C=class e{constructor(n,t){this.authService=n;this.router=t}title="segundoparcial";isLoggedIn=!1;isAdmin=!1;ngOnInit(){this.authService.getUser().subscribe(n=>{this.isLoggedIn=!!n,this.isAdmin=n?.role==="administrador"})}goTo(n){this.router.navigate([n])}confirmLogout(){this.authService.logout()}static \u0275fac=function(t){return new(t||e)(l(g),l(s))};static \u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:9,vars:2,consts:[[1,"navbar"],["routerLink","home","routerLinkActive","active-route",1,"nav-link"],["routerLink","quien-soy","routerLinkActive","active-route",1,"nav-link"],[1,"nav-links-derecha"],["class","nav-link-encuesta",3,"click",4,"ngIf"],["class","nav-link-logout",3,"click",4,"ngIf"],[1,"nav-link-encuesta",3,"click"],[1,"nav-link-logout",3,"click"]],template:function(t,a){t&1&&(o(0,"nav",0)(1,"a",1),r(2,"HOME"),i(),o(3,"a",2),r(4,"QUI\xC9N SOY"),i(),o(5,"div",3),S(6,Z,2,0,"a",4)(7,H,2,0,"a",5),i()(),u(8,"router-outlet")),t&2&&(M(6),x("ngIf",a.isAdmin),M(),x("ngIf",a.isLoggedIn))},dependencies:[E,I,y],styles:['@charset "UTF-8";a[_ngcontent-%COMP%]{text-decoration:none;color:#000;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-color:#deb887;border-radius:10px;padding:3px 8px;transition:background-color .3s,transform .3s}a[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#e6ab5e}.navbar[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px;flex-wrap:wrap}.nav-link[_ngcontent-%COMP%]{margin:0 15px;font-size:1em}.nav-links-derecha[_ngcontent-%COMP%]{margin-left:auto;display:flex;gap:20px}.nav-link-login[_ngcontent-%COMP%], .nav-link-puntaje[_ngcontent-%COMP%], .nav-link-logout[_ngcontent-%COMP%], .nav-link-encuesta[_ngcontent-%COMP%]{font-size:1.2em}.isAdmin[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:.9em;margin:0 15px}.isAdmin[_ngcontent-%COMP%]   .nav-links-derecha[_ngcontent-%COMP%]{gap:15px}.nav-link-login[_ngcontent-%COMP%], .nav-link-logout[_ngcontent-%COMP%]{margin-right:10px}.nav-link-resultado[_ngcontent-%COMP%]{font-size:1em}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:10px}.nav-link[_ngcontent-%COMP%]{margin:5px 0;font-size:.9em}.nav-links-derecha[_ngcontent-%COMP%]{flex-direction:column;gap:10px;margin-left:0}}@media (max-width: 480px){.nav-link[_ngcontent-%COMP%]{font-size:.8em;margin:3px 0}}@media (min-width: 1400px){.navbar[_ngcontent-%COMP%]{padding:20px}.nav-link[_ngcontent-%COMP%]{font-size:1.1em;margin:0 20px}.nav-links-derecha[_ngcontent-%COMP%]{gap:30px}.nav-link-login[_ngcontent-%COMP%], .nav-link-logout[_ngcontent-%COMP%], .nav-link-puntaje[_ngcontent-%COMP%], .nav-link-encuesta[_ngcontent-%COMP%]{font-size:1.2em}}']})};R(C,G).catch(e=>console.error(e));
