import{b as V,d as ve}from"./chunk-SXKVYJYE.js";import{$ as ae,A as r,Aa as P,B as k,Ba as G,C as p,F as L,G as $,H as W,I as S,J as Z,M as J,N as X,O as ee,Q as A,R as w,S as ie,T as E,U as te,V as ne,W as D,X as oe,Z as re,aa as se,ba as ce,ca as le,d as j,da as de,e as y,j as M,ka as O,l as m,m as u,ma as pe,na as me,o as F,oa as ue,p as s,pa as ge,q as h,r as g,ra as fe,s as l,t as a,u as n,v as b,w as _,wa as _e,x as f,y as d,z as B}from"./chunk-TVM3FCCN.js";function Ee(i,t){i&1&&(a(0,"p"),r(1," Para acceder a nuestros servicios, inicia sesi\xF3n o reg\xEDstrate si a\xFAn no tienes una cuenta. "),n())}function Pe(i,t){if(i&1){let e=_();a(0,"div",5)(1,"button",6),f("click",function(){m(e);let c=d();return u(c.goTo("/authentication/login"))}),r(2,"Iniciar Sesi\xF3n"),n(),a(3,"button",7),f("click",function(){m(e);let c=d();return u(c.goTo("/authentication/registro"))}),r(4,"Registrarse"),n()()}}var H=class i{constructor(t,e){this.router=t;this.authenticationService=e}usuario;ngOnInit(){this.cargarUsuario()}cargarUsuario(){this.authenticationService.getUser().subscribe(t=>{t?this.usuario=t:this.usuario=null})}goTo(t){this.router.navigate([t])}static \u0275fac=function(e){return new(e||i)(h(D),h(P))};static \u0275cmp=M({type:i,selectors:[["app-bienvenida"]],standalone:!0,features:[S],decls:9,vars:2,consts:[[1,"welcome-container"],[1,"logo"],["src","favicon.ico","alt","Logo de la Cl\xEDnica"],[4,"ngIf"],["class","buttons",4,"ngIf"],[1,"buttons"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1),b(2,"img",2),n(),a(3,"h1"),r(4,"Bienvenido a nuestra Cl\xEDnica"),n(),a(5,"p"),r(6," En nuestra cl\xEDnica, nos dedicamos a proporcionar atenci\xF3n m\xE9dica de calidad para todos nuestros pacientes. Nuestro equipo de profesionales est\xE1 aqu\xED para cuidar de ti y de tu salud. "),n(),g(7,Ee,2,0,"p",3)(8,Pe,5,0,"div",4),n()),e&2&&(s(7),l("ngIf",!o.usuario),s(),l("ngIf",!o.usuario))},dependencies:[O,E,w],styles:['@charset "UTF-8";.welcome-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;padding:0 20px;margin:0;overflow:hidden}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:20px}.welcome-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto}.welcome-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin:20px 0;color:#2c3e50}.welcome-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin:10px 0;color:#34495e}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:20px}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;margin:0 10px;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background-color .3s}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#3498db;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover{background-color:#2980b9}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]{background-color:#2ecc71;color:#fff}.welcome-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#27ae60}']})};var xe=j(G());function ye(i,t){if(i&1&&b(0,"img",10),i&2){let e=t.$implicit;l("src",e,F)}}function we(i,t){if(i&1&&(a(0,"div",8)(1,"p")(2,"strong"),r(3,"Obra Social:"),n(),r(4),n(),a(5,"div")(6,"strong"),r(7,"Im\xE1genes de Perfil:"),n(),g(8,ye,1,1,"img",9),n()()),i&2){let e=d(3);s(4),p(" ",e.usuario.obraSocial,""),s(4),l("ngForOf",e.usuario.imagenes)}}function Oe(i,t){if(i&1&&(a(0,"li"),r(1),n()),i&2){let e=t.$implicit;s(),k(e)}}function ke(i,t){if(i&1&&(a(0,"div",11)(1,"p")(2,"strong"),r(3,"Especialidades:"),n()(),a(4,"p"),r(5),n(),a(6,"ul"),g(7,Oe,2,1,"li",12),n(),a(8,"strong"),r(9,"Im\xE1gen de Perfil:"),n(),b(10,"img",10),n()),i&2){let e=d(3);s(5),k(e.usuario.especialidad),s(2),l("ngForOf",e.usuario.especialidades),s(3),l("src",e.usuario.imageUrl,F)}}function Te(i,t){if(i&1&&(a(0,"div",13)(1,"div")(2,"strong"),r(3,"Im\xE1gen de Perfil:"),n(),b(4,"img",10),n()()),i&2){let e=d(3);s(4),l("src",e.usuario.imageUrl,F)}}function Fe(i,t){if(i&1&&(a(0,"div")(1,"h3"),r(2,"Detalles del Usuario"),n(),a(3,"p")(4,"strong"),r(5,"Nombre:"),n(),r(6),n(),a(7,"p")(8,"strong"),r(9,"Apellido:"),n(),r(10),n(),a(11,"p")(12,"strong"),r(13,"Edad:"),n(),r(14),n(),a(15,"p")(16,"strong"),r(17,"DNI:"),n(),r(18),n(),a(19,"p")(20,"strong"),r(21,"Mail:"),n(),r(22),n(),g(23,we,9,2,"div",5)(24,ke,11,3,"div",6)(25,Te,5,1,"div",7),n()),i&2){let e=d(2);s(6),p(" ",e.usuario.nombre,""),s(4),p(" ",e.usuario.apellido,""),s(4),p(" ",e.usuario.edad,""),s(4),p(" ",e.usuario.dni,""),s(4),p(" ",e.usuario.email,""),s(),l("ngIf",e.esPaciente),s(),l("ngIf",e.esEspecialista),s(),l("ngIf",e.esAdministrador)}}function Ae(i,t){if(i&1){let e=_();a(0,"button",14),f("click",function(){m(e);let c=d(2);return u(c.toggleHistoriaClinica())}),r(1),n()}if(i&2){let e=d(2);s(),p(" ",e.historialVisible?"Ocultar Historia Cl\xEDnica":"Mostrar Historia Cl\xEDnica"," ")}}function De(i,t){if(i&1&&(a(0,"div")(1,"p")(2,"strong"),r(3),n(),r(4),n()()),i&2){let e=t.$implicit;s(3),p("",e.clave,":"),s(),p(" ",e.valor,"")}}function Ve(i,t){if(i&1&&(a(0,"div")(1,"h5"),r(2,"Otros Datos:"),n(),g(3,De,5,2,"div",12),n()),i&2){let e=d(2).$implicit,o=d(4);s(3),l("ngForOf",o.turnos[e].datosDinamicos)}}function He(i,t){if(i&1&&(a(0,"div",17)(1,"h5"),r(2),n(),a(3,"p")(4,"strong"),r(5,"Especialidad:"),n(),r(6),n(),a(7,"p")(8,"strong"),r(9,"Especialista:"),n(),r(10),n(),a(11,"p")(12,"strong"),r(13,"Fecha:"),n(),r(14),n(),a(15,"p")(16,"strong"),r(17,"Altura:"),n(),r(18),n(),a(19,"p")(20,"strong"),r(21,"Peso:"),n(),r(22),n(),a(23,"p")(24,"strong"),r(25,"Temperatura:"),n(),r(26),n(),a(27,"p")(28,"strong"),r(29,"Presi\xF3n:"),n(),r(30),n(),g(31,Ve,4,1,"div",2),n()),i&2){let e=d().$implicit,o=d(4);s(2),p("Turno de ",o.turnos[e].especialidad,""),s(4),p(" ",o.turnos[e].especialidad,""),s(4),p(" ",o.turnos[e].nombreEspecialista,""),s(4),p(" ",o.turnos[e].fechaTurno,""),s(4),p(" ",o.turnos[e].altura,""),s(4),p(" ",o.turnos[e].peso,""),s(4),p(" ",o.turnos[e].temperatura,""),s(4),p(" ",o.turnos[e].presion,""),s(),l("ngIf",o.turnos[e].datosDinamicos&&o.turnos[e].datosDinamicos.length>0)}}function Ne(i,t){if(i&1&&(a(0,"div"),g(1,He,32,9,"div",16),n()),i&2){let e=t.$implicit,o=d(4);s(),l("ngIf",o.turnos[e])}}function Ue(i,t){if(i&1&&(a(0,"div")(1,"h4"),r(2,"Turnos"),n(),g(3,Ne,2,1,"div",12),n()),i&2){let e=d(3);s(3),l("ngForOf",e.objectKeys(e.turnos))}}function ze(i,t){if(i&1&&(a(0,"div",15)(1,"h3"),r(2),n(),g(3,Ue,4,1,"div",2),n()),i&2){let e=d(2);s(2),p("Historia Cl\xEDnica de ",e.usuario==null?null:e.usuario.nombre,""),s(),l("ngIf",e.turnos)}}function Re(i,t){if(i&1&&(a(0,"div",1),g(1,Fe,26,8,"div",2)(2,Ae,2,1,"button",3)(3,ze,4,2,"div",4),n()),i&2){let e=d();s(),l("ngIf",!e.historialVisible),s(),l("ngIf",e.esPaciente),s(),l("ngIf",e.historialVisible)}}var N=class i{constructor(t,e){this.authenticationService=t;this.turnosService=e}usuario=null;esPaciente=!1;esEspecialista=!1;esAdministrador=!1;historiaClinica;turnos={};mostrarHistoriaClinica=!1;historialVisible=!1;ngOnInit(){this.cargarUsuario()}cargarUsuario(){this.authenticationService.getUser().subscribe(t=>{t?(this.usuario=t,this.establecerRolUsuario(),this.obtenerHistoriaClinica(this.usuario.uid)):xe.default.fire("Error","No se encontr\xF3 el usuario","error")})}obtenerHistoriaClinica(t){return y(this,null,function*(){this.turnos=yield this.turnosService.obtenerHistoriaClinica(t),this.turnos&&console.log(this.turnos)})}objectKeys(t){return Object.keys(t)}toggleHistoriaClinica(){this.historialVisible=!this.historialVisible,this.obtenerHistoriaClinica(this.usuario.uid)}establecerRolUsuario(){this.usuario.role==="paciente"?this.esPaciente=!0:this.usuario.role==="especialista"?this.esEspecialista=!0:this.usuario.role==="administrador"&&(this.esAdministrador=!0)}static \u0275fac=function(e){return new(e||i)(h(P),h(V))};static \u0275cmp=M({type:i,selectors:[["app-mi-perfil"]],standalone:!0,features:[S],decls:1,vars:1,consts:[["class","details-container",4,"ngIf"],[1,"details-container"],[4,"ngIf"],["class","toggle-button",3,"click",4,"ngIf"],["class","historia-clinica",4,"ngIf"],["class","paciente",4,"ngIf"],["class","especialista",4,"ngIf"],["class","administrador",4,"ngIf"],[1,"paciente"],["alt","Imagen de Perfil","width","100",3,"src",4,"ngFor","ngForOf"],["alt","Imagen de Perfil","width","100",3,"src"],[1,"especialista"],[4,"ngFor","ngForOf"],[1,"administrador"],[1,"toggle-button",3,"click"],[1,"historia-clinica"],["class","turno-container",4,"ngIf"],[1,"turno-container"]],template:function(e,o){e&1&&g(0,Re,4,3,"div",0),e&2&&l("ngIf",o.usuario)},dependencies:[E,A,w,O,ve],styles:['@charset "UTF-8";.details-container[_ngcontent-%COMP%]{background-color:#eaeded;border-radius:10px;padding:2rem;box-shadow:0 6px 14px #0003;margin-top:2rem;width:95%}h3[_ngcontent-%COMP%]{color:#1e8449;text-align:center;margin-bottom:1.5rem;font-size:1.8rem}p[_ngcontent-%COMP%]{font-size:1.1rem;margin:.75rem 0;color:#333}strong[_ngcontent-%COMP%]{color:#154360}.paciente[_ngcontent-%COMP%], .especialista[_ngcontent-%COMP%], .administrador[_ngcontent-%COMP%]{margin-top:1.5rem;border:2px solid #1E8449;padding:1.5rem;border-radius:8px;background-color:#1e84491a;transition:background-color .3s ease,transform .2s ease}.paciente[_ngcontent-%COMP%]:hover, .especialista[_ngcontent-%COMP%]:hover, .administrador[_ngcontent-%COMP%]:hover{background-color:#1e84494d;transform:translateY(-2px)}img[_ngcontent-%COMP%]{margin-right:1rem;border-radius:8px;border:2px solid #1E8449}.historia-clinica[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:1rem;margin-top:2rem;border-radius:8px;border:2px solid #154360;transition:background-color .3s ease}.historia-clinica[_ngcontent-%COMP%]:hover{background-color:#1543601a}.historia-clinica[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#1e8449;font-size:1.5rem;margin-bottom:1rem}.historia-clinica[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#333;font-size:1.1rem;margin:.5rem 0}.toggle-button[_ngcontent-%COMP%]{background-color:#1e8449;color:#fff;border:none;padding:.8rem 1.5rem;font-size:1.1rem;border-radius:5px;margin-top:1rem;cursor:pointer;transition:background-color .3s ease,transform .2s ease}.toggle-button[_ngcontent-%COMP%]:hover{background-color:#154360;transform:scale(1.05)}.toggle-button[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0 0 3px #1e84494d}.turno-container[_ngcontent-%COMP%]{margin-bottom:20px;padding:15px;background-color:#f9f9f9;border:1px solid #ddd;border-radius:5px}.turno-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:0;font-size:1.2rem;color:#333}.turno-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}.turno-container[_ngcontent-%COMP%]:nth-child(2n){background-color:#f1f1f1}.turno-container[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}']})};var x=j(G());var je=()=>["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"];function Be(i,t){if(i&1){let e=_();a(0,"div")(1,"input",3),f("change",function(c){m(e);let v=d();return u(v.onEspecialidadChange(c))}),n(),r(2),n()}if(i&2){let e=t.$implicit;s(),l("value",e),s(),p(" ",e,`
`)}}function Le(i,t){if(i&1){let e=_();a(0,"div")(1,"label"),r(2),J(3,"titlecase"),n(),a(4,"div",4)(5,"input",5),W("ngModelChange",function(c){let v=m(e).$implicit,C=d();return $(C.disponibilidadSemana[v].horaInicio,c)||(C.disponibilidadSemana[v].horaInicio=c),u(c)}),n(),a(6,"input",6),W("ngModelChange",function(c){let v=m(e).$implicit,C=d();return $(C.disponibilidadSemana[v].horaFin,c)||(C.disponibilidadSemana[v].horaFin=c),u(c)}),n()()()}if(i&2){let e=t.$implicit,o=d();s(2),k(X(3,7,e)),s(3),B("name","",e,"HoraInicio"),L("ngModel",o.disponibilidadSemana[e].horaInicio),s(),B("name","",e,"HoraFin"),L("ngModel",o.disponibilidadSemana[e].horaFin)}}var U=class i{constructor(t,e){this.authenticationService=t;this.turnoService=e}usuario=null;especialidades=[];especialidadSeleccionada="";disponibilidadSemana={lunes:{horaInicio:"",horaFin:""},martes:{horaInicio:"",horaFin:""},mi\u00E9rcoles:{horaInicio:"",horaFin:""},jueves:{horaInicio:"",horaFin:""},viernes:{horaInicio:"",horaFin:""},s\u00E1bado:{horaInicio:"",horaFin:""},domingo:{horaInicio:"",horaFin:""}};horariosClinica={lunes:{apertura:"08:00",cierre:"19:00"},martes:{apertura:"08:00",cierre:"19:00"},mi\u00E9rcoles:{apertura:"08:00",cierre:"19:00"},jueves:{apertura:"08:00",cierre:"19:00"},viernes:{apertura:"08:00",cierre:"19:00"},s\u00E1bado:{apertura:"08:00",cierre:"14:00"},domingo:{apertura:null,cierre:null}};ngOnInit(){this.cargarUsuario(),this.cargarEspecialidades()}cargarUsuario(){this.authenticationService.getUser().subscribe(t=>{t?this.usuario=t:x.default.fire("Error","No se encontr\xF3 el usuario","error")})}cargarEspecialidades(){return y(this,null,function*(){this.usuario&&this.usuario.especialidades?(this.especialidades=this.usuario.especialidades,console.log("Especialidades cargadas:",this.especialidades)):(this.especialidades=[],x.default.fire("Error","No se encontraron especialidades para este especialista","error"))})}esHorarioValido(t){let e=parseInt(t.split(":")[1],10);return e===0||e===30}onEspecialidadChange(t){return y(this,null,function*(){let e=t.target;this.especialidadSeleccionada=e.value})}guardarDisponibilidad(){return y(this,null,function*(){if(!this.especialidadSeleccionada){x.default.fire("Error","Debe seleccionar una especialidad antes de guardar la disponibilidad.","error");return}for(let t in this.disponibilidadSemana){let e=this.disponibilidadSemana[t],o=this.horariosClinica[t];if(e.horaInicio&&!this.esHorarioValido(e.horaInicio)||e.horaFin&&!this.esHorarioValido(e.horaFin)){x.default.fire("Error",`Los horarios de ${t} deben ser en intervalos de media hora (ej. 08:00 o 08:30).`,"error");return}if(o.apertura&&o.cierre){if(e.horaInicio<o.apertura||e.horaInicio>o.cierre||e.horaFin<o.apertura||e.horaFin>o.cierre){x.default.fire("Error",`El horario de ${t} debe estar entre ${o.apertura} y ${o.cierre}.`,"error");return}if(e.horaInicio>=e.horaFin){x.default.fire("Error",`En ${t}, la hora de inicio debe ser anterior a la hora de fin.`,"error");return}}else if(e.horaInicio||e.horaFin){x.default.fire("Error",`El d\xEDa ${t} est\xE1 cerrado, no debe haber horarios de disponibilidad.`,"error");return}}try{yield this.turnoService.guardarDisponibilidadEspecialidad(this.usuario.uid,this.disponibilidadSemana,this.especialidadSeleccionada),this.generarTurnosProximos15Dias(),x.default.fire("\xC9xito","Disponibilidad guardada correctamente.","success")}catch(t){console.error("Error al guardar la disponibilidad:",t),x.default.fire("Error","No se pudo guardar la disponibilidad.","error")}})}generarTurnosProximos15Dias(){return y(this,null,function*(){console.log("entramos a la creacion de turnos");let t=yield this.turnoService.obtenerDisponibilidadEspecialista(this.usuario.uid,this.especialidadSeleccionada);if(!t){x.default.fire("Error","No se encontr\xF3 disponibilidad para el especialista.","error");return}let e=[],o=new Date;for(let c=0;c<15;c++){let v=new Date(o);v.setDate(o.getDate()+c);let C=this.obtenerNombreDia(v);if(t[C]){let I=t[C];if(I.horaInicio&&I.horaFin){let T=I.horaInicio;for(;T<I.horaFin;){let R=this.sumarMinutos(T,30);R<=I.horaFin&&e.push({especialista_id:this.usuario.uid,especialidad:this.especialidadSeleccionada,fecha:v.toISOString().split("T")[0],hora_inicio:T,hora_fin:R,estado:"disponible"}),T=R}}}}try{yield this.turnoService.guardarTurnos(e),x.default.fire("\xC9xito","Turnos generados para los pr\xF3ximos 15 d\xEDas.","success")}catch(c){console.error("Error al generar los turnos:",c),x.default.fire("Error","No se pudieron generar los turnos.","error")}})}obtenerNombreDia(t){return["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"][t.getDay()]}sumarMinutos(t,e){let[o,c]=t.split(":").map(Number),v=new Date;v.setHours(o,c+e);let C=String(v.getHours()).padStart(2,"0"),I=String(v.getMinutes()).padStart(2,"0");return`${C}:${I}`}static \u0275fac=function(e){return new(e||i)(h(P),h(V))};static \u0275cmp=M({type:i,selectors:[["app-mis-horarios"]],standalone:!0,features:[S],decls:10,vars:3,consts:[[4,"ngFor","ngForOf"],[3,"ngSubmit"],["type","submit"],["type","radio","name","especialidad",3,"change","value"],[1,"horarios"],["type","time","placeholder","Hora de inicio",3,"ngModelChange","ngModel","name"],["type","time","placeholder","Hora de fin",3,"ngModelChange","ngModel","name"]],template:function(e,o){e&1&&(a(0,"h2"),r(1,"Asignar Disponibilidad Horaria"),n(),a(2,"label"),r(3,"Especialidad:"),n(),g(4,Be,3,2,"div",0),a(5,"div")(6,"form",1),f("ngSubmit",function(){return o.guardarDisponibilidad()}),g(7,Le,7,9,"div",0),a(8,"button",2),r(9,"Guardar Disponibilidad"),n()()()),e&2&&(s(4),l("ngForOf",o.especialidades),s(3),l("ngForOf",Z(2,je)))},dependencies:[E,A,ie,O,de,re,ae,se,le,ce],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}select[_ngcontent-%COMP%]{padding:.5rem;border-radius:4px;border:1px solid #D5D8DC;margin-bottom:1rem;margin-right:1rem;outline:none;transition:border-color .3s ease}select[_ngcontent-%COMP%]:focus{border-color:#154360}.horarios[_ngcontent-%COMP%]{display:flex;gap:15px}input[type=time][_ngcontent-%COMP%]{width:48%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;box-sizing:border-box;background-color:#f1f1f1;transition:border-color .3s,background-color .3s}input[type=time][_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}']})};var he=[{path:"",redirectTo:"/bienvenida",pathMatch:"full"},{path:"bienvenida",component:H},{path:"mi-perfil",component:N},{path:"mis-horarios",component:U},{path:"authentication",loadChildren:()=>import("./chunk-CUWBOUJT.js").then(i=>i.authenticationModuleModule)},{path:"usuarios",loadChildren:()=>import("./chunk-IA4XFOKC.js").then(i=>i.UsuariosModule)},{path:"seccion-turnos",loadChildren:()=>import("./chunk-TKHHSWST.js").then(i=>i.SeccionTurnosModule)}];var Ce={projectId:"prog2-c4fdc",appId:"1:728549615422:web:7b4095b155981188ad2e6f",storageBucket:"prog2-c4fdc.appspot.com",apiKey:"AIzaSyBhkMwRqcdYn1-Q0rZ4OcD9YycAced6MCc",authDomain:"prog2-c4fdc.firebaseapp.com",messagingSenderId:"728549615422"};var be={providers:[ee({eventCoalescing:!0}),oe(he),pe(()=>me(Ce)),ue(()=>ge()),fe(()=>_e())]};var Me=j(G());function $e(i,t){if(i&1){let e=_();a(0,"a",2),f("click",function(){m(e);let c=d();return u(c.goTo("/seccion-turnos/solicitar-turno"))}),r(1,"Seccion Turnos"),n()}}function We(i,t){if(i&1){let e=_();a(0,"a",2),f("click",function(){m(e);let c=d();return u(c.goTo("/usuarios/seccion-pacientes"))}),r(1,"Seccion Pacientes"),n()}}function Ge(i,t){if(i&1){let e=_();a(0,"a",2),f("click",function(){m(e);let c=d();return u(c.goTo("/seccion-turnos/turnos-especialista"))}),r(1,"Mis Turnos"),n()}}function Ye(i,t){if(i&1){let e=_();a(0,"a",2),f("click",function(){m(e);let c=d();return u(c.goTo("mis-horarios"))}),r(1,"Mis Horarios"),n()}}function qe(i,t){if(i&1){let e=_();a(0,"a",2),f("click",function(){m(e);let c=d();return u(c.goTo("/seccion-turnos/turnos-pacientes"))}),r(1,"Mis Turnos"),n()}}function Ke(i,t){if(i&1){let e=_();a(0,"a",8),f("click",function(){m(e);let c=d();return u(c.goTo("/usuarios/seccion-usuarios"))}),r(1,"seccion usuarios"),n()}}function Qe(i,t){if(i&1){let e=_();a(0,"a",9),f("click",function(){m(e);let c=d();return u(c.goTo("/seccion-turnos/gestionar-turnos"))}),r(1,"gestionar Turnos"),n()}}function Ze(i,t){if(i&1){let e=_();a(0,"a",10),f("click",function(){m(e);let c=d();return u(c.goTo("mi-perfil"))}),r(1,"mi perfil"),n()}}function Je(i,t){if(i&1){let e=_();a(0,"a",10),f("click",function(){m(e);let c=d();return u(c.confirmLogout())}),r(1,"CERRAR SESION"),n()}}var z=class i{constructor(t,e){this.authService=t;this.router=e}title="segundoparcial";isLoggedIn=!1;isAdmin=!1;isPaciente=!1;isEpecialista=!1;ngOnInit(){this.authService.getUser().subscribe(t=>{this.isLoggedIn=!!t,this.isAdmin=t?.role==="administrador",this.isEpecialista=t?.role==="especialista",this.isPaciente=t?.role==="paciente"})}goTo(t){this.router.navigate([t])}confirmLogout(){Me.default.fire({title:"\xBFEst\xE1s seguro?",text:"\xBFQuieres cerrar sesi\xF3n?",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xED, cerrar sesi\xF3n",cancelButtonText:"Cancelar",reverseButtons:!0}).then(t=>{t.isConfirmed&&(this.authService.logout(),this.router.navigate(["bienvenida"]))})}static \u0275fac=function(e){return new(e||i)(h(P),h(D))};static \u0275cmp=M({type:i,selectors:[["app-root"]],standalone:!0,features:[S],decls:15,vars:9,consts:[[1,"navbar"],["src","favicon.ico","alt","Icono de la p\xE1gina",1,"navbar-icon"],["routerLinkActive","active-route",1,"nav-link",3,"click"],["class","nav-link","routerLinkActive","active-route",3,"click",4,"ngIf"],[1,"nav-links-derecha"],["class","nav-link-encuesta",3,"click",4,"ngIf"],["class","nav-link-turno",3,"click",4,"ngIf"],["class","nav-link-logout",3,"click",4,"ngIf"],[1,"nav-link-encuesta",3,"click"],[1,"nav-link-turno",3,"click"],[1,"nav-link-logout",3,"click"]],template:function(e,o){e&1&&(a(0,"nav",0),b(1,"img",1),a(2,"a",2),f("click",function(){return o.goTo("bienvenida")}),r(3,"bienvenida"),n(),g(4,$e,2,0,"a",3)(5,We,2,0,"a",3)(6,Ge,2,0,"a",3)(7,Ye,2,0,"a",3)(8,qe,2,0,"a",3),a(9,"div",4),g(10,Ke,2,0,"a",5)(11,Qe,2,0,"a",6)(12,Ze,2,0,"a",7)(13,Je,2,0,"a",7),n()(),b(14,"router-outlet")),e&2&&(s(4),l("ngIf",o.isLoggedIn&&(o.isAdmin||o.isPaciente)),s(),l("ngIf",o.isEpecialista),s(),l("ngIf",o.isEpecialista),s(),l("ngIf",o.isEpecialista),s(),l("ngIf",o.isPaciente),s(2),l("ngIf",o.isAdmin),s(),l("ngIf",o.isAdmin),s(),l("ngIf",o.isLoggedIn),s(),l("ngIf",o.isLoggedIn))},dependencies:[ne,E,w],styles:['@charset "UTF-8";.navbar[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#add8e6;flex-wrap:wrap;width:100%;box-sizing:border-box;position:relative;margin:0}.navbar-icon[_ngcontent-%COMP%]{border-radius:50%;width:60px;height:60px;margin-right:15px}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-color:#3f9fd0;border-radius:10px;padding:5px 12px;transition:background-color .3s,transform .3s}a[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#2c7a9a}.nav-link[_ngcontent-%COMP%]{margin:0 15px;font-size:1em}.nav-links-derecha[_ngcontent-%COMP%]{margin-left:auto;display:flex;gap:20px}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:10px}.nav-link[_ngcontent-%COMP%]{margin:5px 0;font-size:.9em}.nav-links-derecha[_ngcontent-%COMP%]{flex-direction:column;gap:10px;margin-left:0}}@media (max-width: 480px){.nav-link[_ngcontent-%COMP%]{font-size:.8em;margin:3px 0}}@media (min-width: 1400px){.navbar[_ngcontent-%COMP%]{padding:20px}.nav-link[_ngcontent-%COMP%]{font-size:1.1em;margin:0 20px}.nav-links-derecha[_ngcontent-%COMP%]{gap:30px}}']})};te(z,be).catch(i=>console.error(i));
