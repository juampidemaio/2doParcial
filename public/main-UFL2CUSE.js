import{a as ce,b as fe}from"./chunk-7XT3E2OE.js";import{$ as te,A as d,B as L,C as a,D as O,E as b,Ea as D,Ga as W,H as B,I as j,J as $,K as S,L as q,O as Q,P as Z,Q as K,S as T,T as A,U as J,V as P,W as X,X as ee,Y as F,Z as ie,aa as ne,ba as oe,c as z,ca as re,d as I,ea as ae,i as M,ja as se,l as u,m as g,oa as w,p as k,pa as le,q as c,r as C,ra as de,sa as pe,t as h,ta as me,u as l,ua as ue,v as r,va as ge,w as n,x,y as f,z as p}from"./chunk-YGP5ZKKQ.js";var V=class t{constructor(i){this.router=i}goTo(i){this.router.navigate([i])}static \u0275fac=function(e){return new(e||t)(C(F))};static \u0275cmp=M({type:t,selectors:[["app-bienvenida"]],standalone:!0,features:[S],decls:14,vars:0,consts:[[1,"welcome-container"],[1,"logo"],["src","favicon.ico","alt","Logo de la Cl\xEDnica"],[1,"buttons"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"div",1),x(2,"img",2),n(),r(3,"h1"),a(4,"Bienvenido a nuestra Cl\xEDnica"),n(),r(5,"p"),a(6," En nuestra cl\xEDnica, nos dedicamos a proporcionar atenci\xF3n m\xE9dica de calidad para todos nuestros pacientes. Nuestro equipo de profesionales est\xE1 aqu\xED para cuidar de ti y de tu salud. "),n(),r(7,"p"),a(8," Para acceder a nuestros servicios, inicia sesi\xF3n o reg\xEDstrate si a\xFAn no tienes una cuenta. "),n(),r(9,"div",3)(10,"button",4),p("click",function(){return o.goTo("/authentication/login")}),a(11,"Iniciar Sesi\xF3n"),n(),r(12,"button",5),p("click",function(){return o.goTo("/authentication/registro")}),a(13,"Registrarse"),n()()())},styles:[".welcome-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;padding:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto}.welcome-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin:20px 0;color:#2c3e50}.welcome-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin:10px 0;color:#34495e}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;margin:0 10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background-color .3s}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#3498db;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover{background-color:#2980b9}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]{background-color:#2ecc71;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#27ae60}"]})};var ve=z(W());function Ee(t,i){if(t&1&&x(0,"img",7),t&2){let e=i.$implicit;l("src",e,k)}}function Pe(t,i){if(t&1&&(r(0,"div",5)(1,"p")(2,"strong"),a(3,"Obra Social:"),n(),a(4),n(),r(5,"div")(6,"strong"),a(7,"Im\xE1genes de Perfil:"),n(),h(8,Ee,1,1,"img",6),n()()),t&2){let e=d(2);c(4),b(" ",e.usuario.obraSocial,""),c(4),l("ngForOf",e.usuario.imagenes)}}function we(t,i){if(t&1&&(r(0,"li"),a(1),n()),t&2){let e=i.$implicit;c(),O(e)}}function Ie(t,i){if(t&1&&(r(0,"div",8)(1,"p")(2,"strong"),a(3,"Especialidades:"),n()(),r(4,"p"),a(5),n(),r(6,"ul"),h(7,we,2,1,"li",9),n(),r(8,"strong"),a(9,"Im\xE1gen de Perfil:"),n(),x(10,"img",7),n()),t&2){let e=d(2);c(5),O(e.usuario.especialidad),c(2),l("ngForOf",e.usuario.especialidades),c(3),l("src",e.usuario.imageUrl,k)}}function Oe(t,i){if(t&1&&(r(0,"div",10)(1,"div")(2,"strong"),a(3,"Im\xE1gen de Perfil:"),n(),x(4,"img",7),n()()),t&2){let e=d(2);c(4),l("src",e.usuario.imageUrl,k)}}function ye(t,i){if(t&1&&(r(0,"div",1)(1,"h3"),a(2,"Detalles del Usuario"),n(),r(3,"p")(4,"strong"),a(5,"Nombre:"),n(),a(6),n(),r(7,"p")(8,"strong"),a(9,"Apellido:"),n(),a(10),n(),r(11,"p")(12,"strong"),a(13,"Edad:"),n(),a(14),n(),r(15,"p")(16,"strong"),a(17,"DNI:"),n(),a(18),n(),r(19,"p")(20,"strong"),a(21,"Mail:"),n(),a(22),n(),h(23,Pe,9,2,"div",2)(24,Ie,11,3,"div",3)(25,Oe,5,1,"div",4),n()),t&2){let e=d();c(6),b(" ",e.usuario.nombre,""),c(4),b(" ",e.usuario.apellido,""),c(4),b(" ",e.usuario.edad,""),c(4),b(" ",e.usuario.dni,""),c(4),b(" ",e.usuario.email,""),c(),l("ngIf",e.esPaciente),c(),l("ngIf",e.esEspecialista),c(),l("ngIf",e.esAdministrador)}}var N=class t{constructor(i){this.authenticationService=i}usuario=null;esPaciente=!1;esEspecialista=!1;esAdministrador=!1;ngOnInit(){this.cargarUsuario()}cargarUsuario(){this.authenticationService.getUser().subscribe(i=>{i?(this.usuario=i,this.establecerRolUsuario()):ve.default.fire("Error","No se encontr\xF3 el usuario","error")})}establecerRolUsuario(){this.usuario.role==="paciente"?this.esPaciente=!0:this.usuario.role==="especialista"?this.esEspecialista=!0:this.usuario.role==="administrador"&&(this.esAdministrador=!0)}static \u0275fac=function(e){return new(e||t)(C(w))};static \u0275cmp=M({type:t,selectors:[["app-mi-perfil"]],standalone:!0,features:[S],decls:1,vars:1,consts:[["class","details-container",4,"ngIf"],[1,"details-container"],["class","paciente",4,"ngIf"],["class","especialista",4,"ngIf"],["class","administrador",4,"ngIf"],[1,"paciente"],["alt","Imagen de Perfil","width","100",3,"src",4,"ngFor","ngForOf"],["alt","Imagen de Perfil","width","100",3,"src"],[1,"especialista"],[4,"ngFor","ngForOf"],[1,"administrador"]],template:function(e,o){e&1&&h(0,ye,26,8,"div",0),e&2&&l("ngIf",o.usuario)},dependencies:[P,T,A,D],styles:[".details-container[_ngcontent-%COMP%]{background-color:#eaeded;border-radius:10px;padding:2rem;box-shadow:0 6px 14px #0003;margin-top:2rem;width:95%}.details-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e8449;text-align:center;margin-bottom:1.5rem;font-size:1.8rem}.details-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;margin:.75rem 0;color:#333}.details-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#154360}.details-container[_ngcontent-%COMP%]   .paciente[_ngcontent-%COMP%], .details-container[_ngcontent-%COMP%]   .especialista[_ngcontent-%COMP%], .details-container[_ngcontent-%COMP%]   .administrador[_ngcontent-%COMP%]{margin-top:1.5rem;border:2px solid #1E8449;padding:1.5rem;border-radius:8px;background-color:#1e84491a;transition:background-color .3s ease,transform .2s ease}.details-container[_ngcontent-%COMP%]   .paciente[_ngcontent-%COMP%]:hover, .details-container[_ngcontent-%COMP%]   .especialista[_ngcontent-%COMP%]:hover, .details-container[_ngcontent-%COMP%]   .administrador[_ngcontent-%COMP%]:hover{background-color:#1e84494d;transform:translateY(-2px)}.details-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:1rem;border-radius:8px;border:2px solid #1E8449}"]})};var _=z(W());var ke=()=>["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"];function Te(t,i){if(t&1){let e=f();r(0,"div")(1,"input",3),p("change",function(s){u(e);let m=d();return g(m.onEspecialidadChange(s))}),n(),a(2),n()}if(t&2){let e=i.$implicit;c(),l("value",e),c(),b(" ",e,`
`)}}function Ae(t,i){if(t&1){let e=f();r(0,"div")(1,"label"),a(2),Q(3,"titlecase"),n(),r(4,"div",4)(5,"input",5),$("ngModelChange",function(s){let m=u(e).$implicit,v=d();return j(v.disponibilidadSemana[m].horaInicio,s)||(v.disponibilidadSemana[m].horaInicio=s),g(s)}),n(),r(6,"input",6),$("ngModelChange",function(s){let m=u(e).$implicit,v=d();return j(v.disponibilidadSemana[m].horaFin,s)||(v.disponibilidadSemana[m].horaFin=s),g(s)}),n()()()}if(t&2){let e=i.$implicit,o=d();c(2),O(Z(3,7,e)),c(3),L("name","",e,"HoraInicio"),B("ngModel",o.disponibilidadSemana[e].horaInicio),c(),L("name","",e,"HoraFin"),B("ngModel",o.disponibilidadSemana[e].horaFin)}}var H=class t{constructor(i,e){this.authenticationService=i;this.turnoService=e}usuario=null;especialidades=[];especialidadSeleccionada="";disponibilidadSemana={lunes:{horaInicio:"",horaFin:""},martes:{horaInicio:"",horaFin:""},mi\u00E9rcoles:{horaInicio:"",horaFin:""},jueves:{horaInicio:"",horaFin:""},viernes:{horaInicio:"",horaFin:""},s\u00E1bado:{horaInicio:"",horaFin:""},domingo:{horaInicio:"",horaFin:""}};horariosClinica={lunes:{apertura:"08:00",cierre:"19:00"},martes:{apertura:"08:00",cierre:"19:00"},mi\u00E9rcoles:{apertura:"08:00",cierre:"19:00"},jueves:{apertura:"08:00",cierre:"19:00"},viernes:{apertura:"08:00",cierre:"19:00"},s\u00E1bado:{apertura:"08:00",cierre:"14:00"},domingo:{apertura:null,cierre:null}};ngOnInit(){this.cargarUsuario(),this.cargarEspecialidades()}cargarUsuario(){this.authenticationService.getUser().subscribe(i=>{i?this.usuario=i:_.default.fire("Error","No se encontr\xF3 el usuario","error")})}cargarEspecialidades(){return I(this,null,function*(){this.usuario&&this.usuario.especialidades?(this.especialidades=this.usuario.especialidades,console.log("Especialidades cargadas:",this.especialidades)):(this.especialidades=[],_.default.fire("Error","No se encontraron especialidades para este especialista","error"))})}esHorarioValido(i){let e=parseInt(i.split(":")[1],10);return e===0||e===30}onEspecialidadChange(i){return I(this,null,function*(){let e=i.target;this.especialidadSeleccionada=e.value})}guardarDisponibilidad(){return I(this,null,function*(){if(!this.especialidadSeleccionada){_.default.fire("Error","Debe seleccionar una especialidad antes de guardar la disponibilidad.","error");return}for(let i in this.disponibilidadSemana){let e=this.disponibilidadSemana[i],o=this.horariosClinica[i];if(e.horaInicio&&!this.esHorarioValido(e.horaInicio)||e.horaFin&&!this.esHorarioValido(e.horaFin)){_.default.fire("Error",`Los horarios de ${i} deben ser en intervalos de media hora (ej. 08:00 o 08:30).`,"error");return}if(o.apertura&&o.cierre){if(e.horaInicio<o.apertura||e.horaInicio>o.cierre||e.horaFin<o.apertura||e.horaFin>o.cierre){_.default.fire("Error",`El horario de ${i} debe estar entre ${o.apertura} y ${o.cierre}.`,"error");return}if(e.horaInicio>=e.horaFin){_.default.fire("Error",`En ${i}, la hora de inicio debe ser anterior a la hora de fin.`,"error");return}}else if(e.horaInicio||e.horaFin){_.default.fire("Error",`El d\xEDa ${i} est\xE1 cerrado, no debe haber horarios de disponibilidad.`,"error");return}}try{yield this.turnoService.guardarDisponibilidadEspecialidad(this.usuario.uid,this.disponibilidadSemana,this.especialidadSeleccionada),this.generarTurnosProximos15Dias(),_.default.fire("\xC9xito","Disponibilidad guardada correctamente.","success")}catch(i){console.error("Error al guardar la disponibilidad:",i),_.default.fire("Error","No se pudo guardar la disponibilidad.","error")}})}generarTurnosProximos15Dias(){return I(this,null,function*(){console.log("entramos a la creacion de turnos");let i=yield this.turnoService.obtenerDisponibilidadEspecialista(this.usuario.uid,this.especialidadSeleccionada);if(!i){_.default.fire("Error","No se encontr\xF3 disponibilidad para el especialista.","error");return}let e=[],o=new Date;for(let s=0;s<15;s++){let m=new Date(o);m.setDate(o.getDate()+s);let v=this.obtenerNombreDia(m);if(i[v]){let E=i[v];if(E.horaInicio&&E.horaFin){let y=E.horaInicio;for(;y<E.horaFin;){let U=this.sumarMinutos(y,30);U<=E.horaFin&&e.push({especialista_id:this.usuario.uid,especialidad:this.especialidadSeleccionada,fecha:m.toISOString().split("T")[0],hora_inicio:y,hora_fin:U,estado:"disponible"}),y=U}}}}try{yield this.turnoService.guardarTurnos(e),_.default.fire("\xC9xito","Turnos generados para los pr\xF3ximos 15 d\xEDas.","success")}catch(s){console.error("Error al generar los turnos:",s),_.default.fire("Error","No se pudieron generar los turnos.","error")}})}obtenerNombreDia(i){return["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"][i.getDay()]}sumarMinutos(i,e){let[o,s]=i.split(":").map(Number),m=new Date;m.setHours(o,s+e);let v=String(m.getHours()).padStart(2,"0"),E=String(m.getMinutes()).padStart(2,"0");return`${v}:${E}`}static \u0275fac=function(e){return new(e||t)(C(w),C(fe))};static \u0275cmp=M({type:t,selectors:[["app-mis-horarios"]],standalone:!0,features:[S],decls:10,vars:3,consts:[[4,"ngFor","ngForOf"],[3,"ngSubmit"],["type","submit"],["type","radio","name","especialidad",3,"change","value"],[1,"horarios"],["type","time","placeholder","Hora de inicio",3,"ngModelChange","ngModel","name"],["type","time","placeholder","Hora de fin",3,"ngModelChange","ngModel","name"]],template:function(e,o){e&1&&(r(0,"h2"),a(1,"Asignar Disponibilidad Horaria"),n(),r(2,"label"),a(3,"Especialidad:"),n(),h(4,Te,3,2,"div",0),r(5,"div")(6,"form",1),p("ngSubmit",function(){return o.guardarDisponibilidad()}),h(7,Ae,7,9,"div",0),r(8,"button",2),a(9,"Guardar Disponibilidad"),n()()()),e&2&&(c(4),l("ngForOf",o.especialidades),c(3),l("ngForOf",q(2,ke)))},dependencies:[P,T,J,D,ge,le,de,pe,ue,me],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}select[_ngcontent-%COMP%]{padding:.5rem;border-radius:4px;border:1px solid #D5D8DC;margin-bottom:1rem;margin-right:1rem;outline:none;transition:border-color .3s ease}select[_ngcontent-%COMP%]:focus{border-color:#154360}.horarios[_ngcontent-%COMP%]{display:flex;gap:15px}input[type=time][_ngcontent-%COMP%]{width:48%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;box-sizing:border-box;background-color:#f1f1f1;transition:border-color .3s,background-color .3s}input[type=time][_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}']})};var Ce=[{path:"",redirectTo:"/bienvenida",pathMatch:"full"},{path:"bienvenida",component:V},{path:"mi-perfil",component:N},{path:"mis-horarios",component:H},{path:"authentication",loadChildren:()=>import("./chunk-KAWOPXJN.js").then(t=>t.authenticationModuleModule)},{path:"usuarios",loadChildren:()=>import("./chunk-HDDE4TRI.js").then(t=>t.UsuariosModule),canActivate:[ce]},{path:"seccion-turnos",loadChildren:()=>import("./chunk-5XODP5XE.js").then(t=>t.SeccionTurnosModule)}];var xe={projectId:"prog2-c4fdc",appId:"1:728549615422:web:7b4095b155981188ad2e6f",storageBucket:"prog2-c4fdc.appspot.com",apiKey:"AIzaSyBhkMwRqcdYn1-Q0rZ4OcD9YycAced6MCc",authDomain:"prog2-c4fdc.firebaseapp.com",messagingSenderId:"728549615422"};var be={providers:[K({eventCoalescing:!0}),ie(Ce),te(()=>ne(xe)),oe(()=>re()),ae(()=>se())]};var Me=z(W());function Fe(t,i){if(t&1){let e=f();r(0,"a",2),p("click",function(){u(e);let s=d();return g(s.goTo("/seccion-turnos/solicitar-turno"))}),a(1,"Seccion Turnos"),n()}}function De(t,i){if(t&1){let e=f();r(0,"a",2),p("click",function(){u(e);let s=d();return g(s.goTo("/seccion-turnos/turnos-especialista"))}),a(1,"Mis Turnos"),n()}}function Ve(t,i){if(t&1){let e=f();r(0,"a",2),p("click",function(){u(e);let s=d();return g(s.goTo("mis-horarios"))}),a(1,"Mis Horarios"),n()}}function Ne(t,i){if(t&1){let e=f();r(0,"a",2),p("click",function(){u(e);let s=d();return g(s.goTo("/seccion-turnos/turnos-pacientes"))}),a(1,"Mis Turnos"),n()}}function He(t,i){if(t&1){let e=f();r(0,"a",8),p("click",function(){u(e);let s=d();return g(s.goTo("/usuarios/seccion-usuarios"))}),a(1,"seccion usuarios"),n()}}function Re(t,i){if(t&1){let e=f();r(0,"a",9),p("click",function(){u(e);let s=d();return g(s.goTo("/seccion-turnos/gestionar-horarios"))}),a(1,"gestionar horarios"),n()}}function Ue(t,i){if(t&1){let e=f();r(0,"a",9),p("click",function(){u(e);let s=d();return g(s.goTo("/seccion-turnos/gestionar-turnos"))}),a(1,"gestionar Turnos"),n()}}function ze(t,i){if(t&1){let e=f();r(0,"a",10),p("click",function(){u(e);let s=d();return g(s.goTo("mi-perfil"))}),a(1,"mi perfil"),n()}}function Le(t,i){if(t&1){let e=f();r(0,"a",10),p("click",function(){u(e);let s=d();return g(s.confirmLogout())})("click",function(){u(e);let s=d();return g(s.goTo("bienvenida"))}),a(1,"CERRAR SESION"),n()}}var R=class t{constructor(i,e){this.authService=i;this.router=e}title="segundoparcial";isLoggedIn=!1;isAdmin=!1;isPaciente=!1;isEpecialista=!1;ngOnInit(){this.authService.getUser().subscribe(i=>{this.isLoggedIn=!!i,this.isAdmin=i?.role==="administrador",this.isEpecialista=i?.role==="especialista",this.isPaciente=i?.role==="paciente"})}goTo(i){this.router.navigate([i])}confirmLogout(){Me.default.fire({title:"\xBFEst\xE1s seguro?",text:"\xBFQuieres cerrar sesi\xF3n?",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xED, cerrar sesi\xF3n",cancelButtonText:"Cancelar",reverseButtons:!0}).then(i=>{i.isConfirmed&&(this.authService.logout(),this.router.navigate(["bienvenida"]))})}static \u0275fac=function(e){return new(e||t)(C(w),C(F))};static \u0275cmp=M({type:t,selectors:[["app-root"]],standalone:!0,features:[S],decls:15,vars:9,consts:[[1,"navbar"],["src","favicon.ico","alt","Icono de la p\xE1gina",1,"navbar-icon"],["routerLinkActive","active-route",1,"nav-link",3,"click"],["class","nav-link","routerLinkActive","active-route",3,"click",4,"ngIf"],[1,"nav-links-derecha"],["class","nav-link-encuesta",3,"click",4,"ngIf"],["class","nav-link-turno",3,"click",4,"ngIf"],["class","nav-link-logout",3,"click",4,"ngIf"],[1,"nav-link-encuesta",3,"click"],[1,"nav-link-turno",3,"click"],[1,"nav-link-logout",3,"click"]],template:function(e,o){e&1&&(r(0,"nav",0),x(1,"img",1),r(2,"a",2),p("click",function(){return o.goTo("bienvenida")}),a(3,"bienvenida"),n(),h(4,Fe,2,0,"a",3)(5,De,2,0,"a",3)(6,Ve,2,0,"a",3)(7,Ne,2,0,"a",3),r(8,"div",4),h(9,He,2,0,"a",5)(10,Re,2,0,"a",6)(11,Ue,2,0,"a",6)(12,ze,2,0,"a",7)(13,Le,2,0,"a",7),n()(),x(14,"router-outlet")),e&2&&(c(4),l("ngIf",o.isLoggedIn&&(o.isAdmin||o.isPaciente)),c(),l("ngIf",o.isEpecialista),c(),l("ngIf",o.isEpecialista),c(),l("ngIf",o.isPaciente),c(2),l("ngIf",o.isAdmin),c(),l("ngIf",o.isAdmin),c(),l("ngIf",o.isAdmin),c(),l("ngIf",o.isLoggedIn),c(),l("ngIf",o.isLoggedIn))},dependencies:[ee,P,A],styles:['@charset "UTF-8";.navbar[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#add8e6;flex-wrap:wrap;width:100%;box-sizing:border-box;position:relative;margin:0}.navbar-icon[_ngcontent-%COMP%]{border-radius:50%;width:60px;height:60px;margin-right:15px}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-color:#3f9fd0;border-radius:10px;padding:5px 12px;transition:background-color .3s,transform .3s}a[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#2c7a9a}.nav-link[_ngcontent-%COMP%]{margin:0 15px;font-size:1em}.nav-links-derecha[_ngcontent-%COMP%]{margin-left:auto;display:flex;gap:20px}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:10px}.nav-link[_ngcontent-%COMP%]{margin:5px 0;font-size:.9em}.nav-links-derecha[_ngcontent-%COMP%]{flex-direction:column;gap:10px;margin-left:0}}@media (max-width: 480px){.nav-link[_ngcontent-%COMP%]{font-size:.8em;margin:3px 0}}@media (min-width: 1400px){.navbar[_ngcontent-%COMP%]{padding:20px}.nav-link[_ngcontent-%COMP%]{font-size:1.1em;margin:0 20px}.nav-links-derecha[_ngcontent-%COMP%]{gap:30px}}']})};X(R,be).catch(t=>console.error(t));
