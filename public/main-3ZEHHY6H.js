import{A as m,E as S,G as O,I as o,J as r,K as l,L as k,M as s,N as f,O as a,V as v,Y as w,ea as y,fa as I,ga as R,h as P,ha as E,ia as p,ja as T,l as A,la as D,ma as F,na as L,o as x,oa as z,p as u,qa as j,t as d,u as g,va as B,ya as _,z as M}from"./chunk-GZGA3RPY.js";var C=class e{constructor(n,t){this.authService=n;this.router=t}canActivate(n,t){return this.authService.getUser().pipe(P(i=>i&&i.role==="administrador"?!0:(this.router.navigate(["/home"]),console.log("no es administrador verifica las cosas bien"),!1)))}static \u0275fac=function(t){return new(t||e)(x(_),x(p))};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})};var b=class e{constructor(n){this.router=n}goTo(n){this.router.navigate([n])}static \u0275fac=function(t){return new(t||e)(m(p))};static \u0275cmp=u({type:e,selectors:[["app-bienvenida"]],standalone:!0,features:[v],decls:14,vars:0,consts:[[1,"welcome-container"],[1,"logo"],["src","favicon.ico","alt","Logo de la Cl\xEDnica"],[1,"buttons"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(t,i){t&1&&(o(0,"div",0)(1,"div",1),l(2,"img",2),r(),o(3,"h1"),a(4,"Bienvenido a nuestra Cl\xEDnica"),r(),o(5,"p"),a(6," En nuestra cl\xEDnica, nos dedicamos a proporcionar atenci\xF3n m\xE9dica de calidad para todos nuestros pacientes. Nuestro equipo de profesionales est\xE1 aqu\xED para cuidar de ti y de tu salud. "),r(),o(7,"p"),a(8," Para acceder a nuestros servicios, inicia sesi\xF3n o reg\xEDstrate si a\xFAn no tienes una cuenta. "),r(),o(9,"div",3)(10,"button",4),s("click",function(){return i.goTo("/authentication/login")}),a(11,"Iniciar Sesi\xF3n"),r(),o(12,"button",5),s("click",function(){return i.goTo("/authentication/registro")}),a(13,"Registrarse"),r()()())},styles:[".welcome-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;padding:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto}.welcome-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin:20px 0;color:#2c3e50}.welcome-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin:10px 0;color:#34495e}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;margin:0 10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background-color .3s}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#3498db;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover{background-color:#2980b9}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]{background-color:#2ecc71;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#27ae60}"]})};var U=[{path:"",redirectTo:"/bienvenida",pathMatch:"full"},{path:"bienvenida",component:b},{path:"authentication",loadChildren:()=>import("./chunk-Y2SRPQUX.js").then(e=>e.authenticationModuleModule)},{path:"usuarios",loadChildren:()=>import("./chunk-ICNFL4TJ.js").then(e=>e.UsuariosModule),canActivate:[C]}];var q={projectId:"prog2-c4fdc",appId:"1:728549615422:web:7b4095b155981188ad2e6f",storageBucket:"prog2-c4fdc.appspot.com",apiKey:"AIzaSyBhkMwRqcdYn1-Q0rZ4OcD9YycAced6MCc",authDomain:"prog2-c4fdc.firebaseapp.com",messagingSenderId:"728549615422"};var G={providers:[w({eventCoalescing:!0}),T(U),D(()=>F(q)),L(()=>z()),j(()=>B())]};function K(e,n){if(e&1){let t=k();o(0,"a",6),s("click",function(){d(t);let c=f();return g(c.goTo("/usuarios/seccion-usuarios"))}),a(1,"seccion usuarios"),r()}}function Q(e,n){if(e&1){let t=k();o(0,"a",7),s("click",function(){d(t);let c=f();return g(c.confirmLogout())})("click",function(){d(t);let c=f();return g(c.goTo("bienvenida"))}),a(1,"CERRAR SESION"),r()}}var h=class e{constructor(n,t){this.authService=n;this.router=t}title="segundoparcial";isLoggedIn=!1;isAdmin=!1;ngOnInit(){this.authService.getUser().subscribe(n=>{this.isLoggedIn=!!n,this.isAdmin=n?.role==="administrador"})}goTo(n){this.router.navigate([n])}confirmLogout(){this.authService.logout()}static \u0275fac=function(t){return new(t||e)(m(_),m(p))};static \u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[v],decls:8,vars:2,consts:[[1,"navbar"],["src","favicon.ico","alt","Icono de la p\xE1gina",1,"navbar-icon"],["routerLinkActive","active-route",1,"nav-link",3,"click"],[1,"nav-links-derecha"],["class","nav-link-encuesta",3,"click",4,"ngIf"],["class","nav-link-logout",3,"click",4,"ngIf"],[1,"nav-link-encuesta",3,"click"],[1,"nav-link-logout",3,"click"]],template:function(t,i){t&1&&(o(0,"nav",0),l(1,"img",1),o(2,"a",2),s("click",function(){return i.goTo("bienvenida")}),a(3,"bienvenida"),r(),o(4,"div",3),S(5,K,2,0,"a",4)(6,Q,2,0,"a",5),r()(),l(7,"router-outlet")),t&2&&(M(5),O("ngIf",i.isAdmin),M(),O("ngIf",i.isLoggedIn))},dependencies:[E,I,y],styles:['@charset "UTF-8";.navbar[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#add8e6;flex-wrap:wrap;width:100%;box-sizing:border-box;position:relative;margin:0}.navbar-icon[_ngcontent-%COMP%]{border-radius:50%;width:60px;height:60px;margin-right:15px}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-color:#3f9fd0;border-radius:10px;padding:5px 12px;transition:background-color .3s,transform .3s}a[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#2c7a9a}.nav-link[_ngcontent-%COMP%]{margin:0 15px;font-size:1em}.nav-links-derecha[_ngcontent-%COMP%]{margin-left:auto;display:flex;gap:20px}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:10px}.nav-link[_ngcontent-%COMP%]{margin:5px 0;font-size:.9em}.nav-links-derecha[_ngcontent-%COMP%]{flex-direction:column;gap:10px;margin-left:0}}@media (max-width: 480px){.nav-link[_ngcontent-%COMP%]{font-size:.8em;margin:3px 0}}@media (min-width: 1400px){.navbar[_ngcontent-%COMP%]{padding:20px}.nav-link[_ngcontent-%COMP%]{font-size:1.1em;margin:0 20px}.nav-links-derecha[_ngcontent-%COMP%]{gap:30px}}']})};R(h,G).catch(e=>console.error(e));
