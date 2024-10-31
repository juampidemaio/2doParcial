import{A as M,E as O,G as v,I as t,J as o,K as s,L as x,M as P,N as k,O as a,V as p,X as S,ca as A,da as y,ea as w,fa as E,ga as I,h as C,ha as L,ja as R,ka as D,l as b,la as z,ma as F,na as j,o as g,oa as N,p as c,pa as m,t as _,u as h,z as f}from"./chunk-I3FCMSY4.js";var l=class n{constructor(i,e){this.authService=i;this.router=e}canActivate(i,e){return this.authService.getUser().pipe(C(r=>r&&r.role==="administrador"?!0:(this.router.navigate(["/home"]),console.log("no es administrador verifica las cosas bien"),!1)))}static \u0275fac=function(e){return new(e||n)(g(m),g(I))};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})};var u=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=c({type:n,selectors:[["app-bienvenida"]],standalone:!0,features:[p],decls:14,vars:0,consts:[[1,"welcome-container"],[1,"logo"],["src","assets/logo.png","alt","Logo de la Cl\xEDnica"],[1,"buttons"],["routerLink","/authentication/login",1,"btn","btn-primary"],["routerLink","/authentication/registro",1,"btn","btn-secondary"]],template:function(e,r){e&1&&(t(0,"div",0)(1,"div",1),s(2,"img",2),o(),t(3,"h1"),a(4,"Bienvenido a nuestra Cl\xEDnica"),o(),t(5,"p"),a(6," En nuestra cl\xEDnica, nos dedicamos a proporcionar atenci\xF3n m\xE9dica de calidad para todos nuestros pacientes. Nuestro equipo de profesionales est\xE1 aqu\xED para cuidar de ti y de tu salud. "),o(),t(7,"p"),a(8," Para acceder a nuestros servicios, inicia sesi\xF3n o reg\xEDstrate si a\xFAn no tienes una cuenta. "),o(),t(9,"div",3)(10,"button",4),a(11,"Iniciar Sesi\xF3n"),o(),t(12,"button",5),a(13,"Registrarse"),o()()())},styles:[".welcome-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background-color:#f5f5f5;text-align:center;padding:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto}.welcome-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin:20px 0;color:#2c3e50}.welcome-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin:10px 0;color:#34495e}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;margin:0 10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background-color .3s}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#3498db;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover{background-color:#2980b9}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]{background-color:#2ecc71;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#27ae60}"]})};var T=[{path:"",redirectTo:"/bienvenida",pathMatch:"full"},{path:"bienvenida",component:u},{path:"authentication",loadChildren:()=>import("./chunk-6F2HU5YR.js").then(n=>n.authenticationModuleModule)},{path:"usuarios",loadChildren:()=>import("./chunk-TSWFBS2P.js").then(n=>n.UsuariosModule),canActivate:[l]}];var U={projectId:"prog2-c4fdc",appId:"1:728549615422:web:7b4095b155981188ad2e6f",storageBucket:"prog2-c4fdc.appspot.com",apiKey:"AIzaSyBhkMwRqcdYn1-Q0rZ4OcD9YycAced6MCc",authDomain:"prog2-c4fdc.firebaseapp.com",messagingSenderId:"728549615422"};var q={providers:[S({eventCoalescing:!0}),L(T),R(()=>D(U)),z(()=>F()),j(()=>N())]};function Q(n,i){n&1&&(t(0,"a",6),a(1,"seccion usuarios"),o())}function Z(n,i){if(n&1){let e=x();t(0,"a",7),P("click",function(){_(e);let V=k();return h(V.confirmLogout())}),a(1,"CERRAR SESION"),o()}}var d=class n{constructor(i){this.authService=i}title="segundoparcial";isLoggedIn=!1;isAdmin=!1;ngOnInit(){this.authService.getUser().subscribe(i=>{this.isLoggedIn=!!i,this.isAdmin=i?.role==="administrador"})}confirmLogout(){this.authService.logout()}static \u0275fac=function(e){return new(e||n)(M(m))};static \u0275cmp=c({type:n,selectors:[["app-root"]],standalone:!0,features:[p],decls:9,vars:2,consts:[[1,"navbar"],["routerLink","home","routerLinkActive","active-route",1,"nav-link"],["routerLink","quien-soy","routerLinkActive","active-route",1,"nav-link"],[1,"nav-links-derecha"],["class","nav-link-encuesta","routerLink","/usuarios/seccion-usuarios",4,"ngIf"],["class","nav-link-logout",3,"click",4,"ngIf"],["routerLink","/usuarios/seccion-usuarios",1,"nav-link-encuesta"],[1,"nav-link-logout",3,"click"]],template:function(e,r){e&1&&(t(0,"nav",0)(1,"a",1),a(2,"HOME"),o(),t(3,"a",2),a(4,"QUI\xC9N SOY"),o(),t(5,"div",3),O(6,Q,2,0,"a",4)(7,Z,2,0,"a",5),o()(),s(8,"router-outlet")),e&2&&(f(6),v("ngIf",r.isAdmin),f(),v("ngIf",r.isLoggedIn))},dependencies:[E,y,A],styles:['@charset "UTF-8";a[_ngcontent-%COMP%]{text-decoration:none;color:#000;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-color:#deb887;border-radius:10px;padding:3px 8px;transition:background-color .3s,transform .3s}a[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#e6ab5e}.navbar[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px;flex-wrap:wrap}.nav-link[_ngcontent-%COMP%]{margin:0 15px;font-size:1em}.nav-links-derecha[_ngcontent-%COMP%]{margin-left:auto;display:flex;gap:20px}.nav-link-login[_ngcontent-%COMP%], .nav-link-puntaje[_ngcontent-%COMP%], .nav-link-logout[_ngcontent-%COMP%], .nav-link-encuesta[_ngcontent-%COMP%]{font-size:1.2em}.isAdmin[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:.9em;margin:0 15px}.isAdmin[_ngcontent-%COMP%]   .nav-links-derecha[_ngcontent-%COMP%]{gap:15px}.nav-link-login[_ngcontent-%COMP%], .nav-link-logout[_ngcontent-%COMP%]{margin-right:10px}.nav-link-resultado[_ngcontent-%COMP%]{font-size:1em}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:10px}.nav-link[_ngcontent-%COMP%]{margin:5px 0;font-size:.9em}.nav-links-derecha[_ngcontent-%COMP%]{flex-direction:column;gap:10px;margin-left:0}}@media (max-width: 480px){.nav-link[_ngcontent-%COMP%]{font-size:.8em;margin:3px 0}}@media (min-width: 1400px){.navbar[_ngcontent-%COMP%]{padding:20px}.nav-link[_ngcontent-%COMP%]{font-size:1.1em;margin:0 20px}.nav-links-derecha[_ngcontent-%COMP%]{gap:30px}.nav-link-login[_ngcontent-%COMP%], .nav-link-logout[_ngcontent-%COMP%], .nav-link-puntaje[_ngcontent-%COMP%], .nav-link-encuesta[_ngcontent-%COMP%]{font-size:1.2em}}']})};w(d,q).catch(n=>console.error(n));
