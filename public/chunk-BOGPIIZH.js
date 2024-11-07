import{a as me}from"./chunk-J5QWHNFI.js";import{a as Ne,b as Ae,c as Ve}from"./chunk-UALT75BI.js";import{a as W,b as I,c as Y,d as J,e as xe,f as ye,g as K,h as Te,i as we,j as Ie,k as Me,l as Fe,m as Pe,n as De,o as Oe,p as ue,q as Q}from"./chunk-L2E4HFTI.js";import{A as h,Aa as w,Ba as Ee,Ca as P,E as g,Ea as D,G as m,Ga as $,I as s,J as a,K as L,L as E,M as b,N as f,O as ne,P as c,Q as v,R as U,S as ae,T as be,U as se,V as ce,W as le,Z as ve,a as y,aa as Se,b as he,ba as _e,d as re,e as p,h as ge,ka as k,l as A,la as G,m as R,ma as Ce,na as de,o as T,p as V,q as z,qa as B,sa as pe,t as _,u as C,xa as q,z as l,za as x}from"./chunk-LPHFI5WA.js";var H=re(ue());var j=class n{constructor(i){this.firestore=i}getEspecialistasPorEspecialidad(i){return p(this,null,function*(){let e=x(this.firestore,"users"),r=(yield P(e)).docs.map(o=>y({id:o.id},o.data())).filter(o=>this.especialistaValido(o,i));return console.log("Especialistas filtrados:",r),r})}especialistaValido(i,e){return i.role==="especialista"&&i.especialidades.includes(e)}getHorariosPorEspecialista(i){return p(this,null,function*(){let e=x(this.firestore,"horarios"),t=yield P(e),r=yield this.getTurnosPorEspecialista(i);return t.docs.map(o=>{let d=o.data();return y({id:o.id},d)}).filter(o=>o.especialistaId===i&&this.isWithinNext15Days(o.fecha)&&!this.isHorarioOcupado(o,r))})}getTurnosPorEspecialista(i){return p(this,null,function*(){let e=x(this.firestore,"turnos");return(yield P(e)).docs.map(r=>{let o=r.data();return y({id:r.id},o)}).filter(r=>r.especialistaId===i)})}isHorarioOcupado(i,e){let t=new Date(i.fecha),r=new Date(t);return r.setMinutes(r.getMinutes()+30),e.some(o=>{let d=new Date(o.fecha),u=new Date(d);return u.setMinutes(u.getMinutes()+30),d<r&&u>t})}isWithinNext15Days(i){let e=new Date(i),t=new Date,r=new Date;return r.setDate(t.getDate()+15),e>=t&&e<=r}solicitarTurno(i){return p(this,null,function*(){let e=w(x(this.firestore,"turnos"));yield D(e,i)})}static \u0275fac=function(e){return new(e||n)(T(q))};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})};var M=class n{constructor(i,e){this.firestore=i;this.authService=e}guardarDisponibilidad(i,e){return p(this,null,function*(){let t=w(x(this.firestore,"Disponibilidad"),i);yield D(t,{disponibilidad:e})})}guardarTurnos(i){return p(this,null,function*(){let e=x(this.firestore,"Turnos"),t=i.map(r=>{let o=w(e);return D(o,r)});yield Promise.all(t)})}obtenerTurnosDisponibles(i){return p(this,null,function*(){let e=x(this.firestore,"Turnos"),r=(yield P(e)).docs.map(o=>{let d=o.data();return y({id:o.id},d)}).filter(o=>{let d=o.especialista_id===i,u=o.estado==="disponible";return console.log(`Turno ID: ${o.id}, Especialista ID: ${o.especialista_id}, Estado: ${o.estado}, Coincide: ${d&&u}`),d&&u});return console.log("Turnos disponibles:",r),r})}obtenerTurnosDisponiblesEspecialista(i){return p(this,null,function*(){let e=x(this.firestore,"Turnos"),r=(yield P(e)).docs.map(o=>{let d=o.data();return y({id:o.id},d)}).filter(o=>{let d=o.especialista_id===i,u=o.estado==="solicitado";return console.log(`Turno ID: ${o.id}, Especialista ID: ${o.especialista_id}, Estado: ${o.estado}, Coincide: ${d&&u}`),d&&u});return console.log("Turnos solicitados:",r),r})}obtenerDisponibilidad(i){return p(this,null,function*(){let e=w(this.firestore,`Disponibilidad/${i}`),t=yield Ee(e);return t.exists()?t.data().disponibilidad:(console.log("No existe la disponibilidad para este especialista."),null)})}solicitarTurno(i,e){return p(this,null,function*(){let t=w(this.firestore,`Turnos/${i.horario}`);yield D(t,he(y({},i),{estado:"solicitado",pacienteId:e}),{merge:!0})})}cancelarTurno(i,e){return p(this,null,function*(){let t=w(this.firestore,`Turnos/${i}`);yield D(t,{estado:"Cancelado",motivoCancelacion:e},{merge:!0})})}static \u0275fac=function(e){return new(e||n)(T(q),T($))};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})};function Be(n,i){if(n&1&&(s(0,"option",12),c(1),a()),n&2){let e=i.$implicit;m("value",e.nombre),l(),v(e.nombre)}}function qe(n,i){if(n&1){let e=E();s(0,"option",13),b("nombreEspecialista",function(){let r=_(e).$implicit;return C(r)}),c(1),a()}if(n&2){let e=i.$implicit;m("value",e.uid),l(),v(e.nombre)}}function We(n,i){if(n&1&&(s(0,"option",12),c(1),a()),n&2){let e=i.$implicit;m("value",e.id),l(),be("",e.fecha," - ",e.hora_inicio,"hs hasta ",e.hora_fin,"hs")}}function Ye(n,i){if(n&1&&(s(0,"div")(1,"label",14),c(2,"Paciente:"),a(),L(3,"input",15),s(4,"label",16),c(5,"DNI:"),a(),L(6,"input",17),s(7,"label",18),c(8,"Obra Social:"),a(),L(9,"input",19),a()),n&2){let e=f();l(3),m("readonly",e.isAdmin),l(3),m("readonly",e.isAdmin),l(3),m("readonly",e.isAdmin)}}function Je(n,i){if(n&1){let e=E();s(0,"app-listado-paciente",20),b("usuarioSeleccionado",function(r){_(e);let o=f();return C(o.setPacienteData(r))}),a()}}var X=class n{constructor(i,e,t,r,o,d){this.especialidadService=i;this.especialistaService=e;this.turnoService=t;this.authService=r;this.fb=o;this.router=d;this.turnoForm=this.fb.group({especialidad:["",I.required],especialista:["",I.required],horario:["",I.required],paciente:["",I.required],dni:["",[I.required,I.pattern(/^[0-9]{8,}$/)]],obraSocial:["",I.required]})}especialidades=[];especialistas=[];horarios=[];turnoForm;isAdmin=!1;isPaciente=!1;usuarioSeleccionado;obtenerIdPaciente;nombreEspecialista;ngOnInit(){this.cargarEspecialidades(),this.checkUserRole()}cargarEspecialidades(){return p(this,null,function*(){this.especialidades=yield this.especialidadService.getEspecialidades()})}checkUserRole(){return p(this,null,function*(){this.authService.getUser().subscribe(i=>{i&&(this.isAdmin=i.role==="administrador",this.isPaciente=i.role==="paciente")})})}setPacienteData(i){return p(this,null,function*(){this.usuarioSeleccionado=i,i&&this.turnoForm.patchValue({paciente:i.nombre,dni:i.dni,obraSocial:i.obraSocial,especialista:""})})}onEspecialidadChange(i){return p(this,null,function*(){let t=i.target.value;if(console.log("Nombre de especialidad seleccionada:",t),t)try{this.especialistas=yield this.especialistaService.getEspecialistasPorEspecialidad(t),console.log("Especialistas cargados:",this.especialistas)}catch(r){console.error("Error al cargar especialistas:",r),H.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.especialistas=[]})}onEspecialistaChange(i){return p(this,null,function*(){let t=i.target.value;if(console.log("ID del especialista seleccionado:",t),t)try{let r=this.especialistas.find(o=>o.uid===t);r&&(this.nombreEspecialista=`${r.nombre} ${r.apellido}`),this.horarios=yield this.turnoService.obtenerTurnosDisponibles(t),this.horarios.sort((o,d)=>{let u=new Date(o.fecha),F=new Date(d.fecha);return u.getTime()!==F.getTime()?u.getTime()-F.getTime():o.hora_inicio.localeCompare(d.hora_inicio)}),console.log("Turnos disponibles cargados:",this.horarios)}catch(r){console.error("Error al cargar turnos:",r),H.default.fire("Error","No se pudieron cargar los turnos","error")}else this.horarios=[]})}solicitarTurno(){return p(this,null,function*(){try{this.authService.getUser().subscribe(e=>{e.role==="paciente"?(this.obtenerIdPaciente=e.uid,this.turnoForm.patchValue({especialista:this.nombreEspecialista,paciente:e.nombre,dni:e.dni,obraSocial:e.obraSocial})):(this.obtenerIdPaciente=this.usuarioSeleccionado.uid,this.turnoForm.patchValue({especialista:this.nombreEspecialista}))});let i=this.turnoForm.value;yield this.turnoService.solicitarTurno(i,this.obtenerIdPaciente),H.default.fire("Registro exitoso","El turno ha sido solicitado correctamente","success"),this.router.navigate(["/bienvenida"])}catch(i){console.error("Error al solicitar el turno:",i),H.default.fire("Error","No se pudo solicitar el turno. Int\xE9ntalo nuevamente.","error")}})}static \u0275fac=function(e){return new(e||n)(h(Q),h(j),h(M),h($),h(Pe),h(B))};static \u0275cmp=V({type:n,selectors:[["app-solicitar-turno"]],decls:17,vars:6,consts:[[3,"ngSubmit","formGroup"],["for","especialidad"],["id","especialidad","formControlName","especialidad",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","especialista"],["id","especialista","formControlName","especialista",3,"change"],[3,"value","nombreEspecialista",4,"ngFor","ngForOf"],["for","horario"],["id","horario","formControlName","horario"],[4,"ngIf"],[3,"usuarioSeleccionado",4,"ngIf"],["type","submit"],[3,"value"],[3,"nombreEspecialista","value"],["for","paciente"],["id","paciente","formControlName","paciente","type","text",3,"readonly"],["for","dni"],["id","dni","formControlName","dni","type","text",3,"readonly"],["for","obraSocial"],["id","obraSocial","formControlName","obraSocial","type","text",3,"readonly"],[3,"usuarioSeleccionado"]],template:function(e,t){e&1&&(s(0,"form",0),b("ngSubmit",function(){return t.solicitarTurno()}),s(1,"label",1),c(2,"Especialidad:"),a(),s(3,"select",2),b("change",function(o){return t.onEspecialidadChange(o)}),g(4,Be,2,2,"option",3),a(),s(5,"label",4),c(6,"Especialista:"),a(),s(7,"select",5),b("change",function(o){return t.onEspecialistaChange(o)}),g(8,qe,2,2,"option",6),a(),s(9,"label",7),c(10,"Horario:"),a(),s(11,"select",8),g(12,We,2,4,"option",3),a(),g(13,Ye,10,3,"div",9)(14,Je,1,0,"app-listado-paciente",10),s(15,"button",11),c(16,"Solicitar Turno"),a()()),e&2&&(m("formGroup",t.turnoForm),l(4),m("ngForOf",t.especialidades),l(4),m("ngForOf",t.especialistas),l(4),m("ngForOf",t.horarios),l(),m("ngIf",t.isAdmin),l(),m("ngIf",t.isAdmin))},dependencies:[k,G,K,Me,Fe,W,Ie,Y,J,Te,we,Ne],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;margin-bottom:15px;box-sizing:border-box;transition:border-color .3s,background-color .3s;background-color:#f1f1f1}input[type=text][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}div[ngIf][_ngcontent-%COMP%]{color:#dc3545;font-size:.9em;margin-top:-10px;margin-bottom:10px}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}div[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ngIf[_ngcontent-%COMP%]{margin-bottom:20px}']})};var Z=class n{constructor(i,e){this.authService=i;this.router=e}canActivate(i,e){return this.authService.getUser().pipe(ge(t=>t&&(t.role==="administrador"||t.role==="paciente")?!0:(this.router.navigate(["/bienvenida"]),console.log("Acceso denegado: no es administrador ni paciente"),!1)))}static \u0275fac=function(e){return new(e||n)(T($),T(B))};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})};var S=re(ue());var Ke=()=>["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"];function Qe(n,i){if(n&1){let e=E();s(0,"div")(1,"label"),c(2),Se(3,"titlecase"),a(),s(4,"div",5)(5,"input",6),le("ngModelChange",function(r){let o=_(e).$implicit,d=f(2);return ce(d.disponibilidadSemana[o].horaInicio,r)||(d.disponibilidadSemana[o].horaInicio=r),C(r)}),a(),s(6,"input",7),le("ngModelChange",function(r){let o=_(e).$implicit,d=f(2);return ce(d.disponibilidadSemana[o].horaFin,r)||(d.disponibilidadSemana[o].horaFin=r),C(r)}),a()()()}if(n&2){let e=i.$implicit,t=f(2);l(2),v(_e(3,7,e)),l(3),ne("name","",e,"HoraInicio"),se("ngModel",t.disponibilidadSemana[e].horaInicio),l(),ne("name","",e,"HoraFin"),se("ngModel",t.disponibilidadSemana[e].horaFin)}}function Xe(n,i){if(n&1){let e=E();s(0,"div")(1,"form",2),b("ngSubmit",function(){_(e);let r=f();return C(r.guardarDisponibilidad())}),g(2,Qe,7,9,"div",3),s(3,"button",4),c(4,"Guardar Disponibilidad"),a()()()}n&2&&(l(2),m("ngForOf",ve(1,Ke)))}function Ze(n,i){n&1&&(s(0,"p"),c(1,"Selecciona un especialista para asignar disponibilidad."),a())}var ee=class n{constructor(i){this.turnoService=i}usuarioSeleccionado=null;disponibilidadSemana={lunes:{horaInicio:"",horaFin:""},martes:{horaInicio:"",horaFin:""},mi\u00E9rcoles:{horaInicio:"",horaFin:""},jueves:{horaInicio:"",horaFin:""},viernes:{horaInicio:"",horaFin:""},s\u00E1bado:{horaInicio:"",horaFin:""},domingo:{horaInicio:"",horaFin:""}};horariosClinica={lunes:{apertura:"08:00",cierre:"19:00"},martes:{apertura:"08:00",cierre:"19:00"},mi\u00E9rcoles:{apertura:"08:00",cierre:"19:00"},jueves:{apertura:"08:00",cierre:"19:00"},viernes:{apertura:"08:00",cierre:"19:00"},s\u00E1bado:{apertura:"08:00",cierre:"14:00"},domingo:{apertura:null,cierre:null}};mostrarUsuario(i){this.usuarioSeleccionado=i}esHorarioValido(i){let e=parseInt(i.split(":")[1],10);return e===0||e===30}guardarDisponibilidad(){return p(this,null,function*(){if(!this.usuarioSeleccionado){S.default.fire("Error","Por favor, selecciona un especialista.","error");return}for(let i in this.disponibilidadSemana){let e=this.disponibilidadSemana[i],t=this.horariosClinica[i];if(e.horaInicio&&!this.esHorarioValido(e.horaInicio)||e.horaFin&&!this.esHorarioValido(e.horaFin)){S.default.fire("Error",`Los horarios de ${i} deben ser en intervalos de media hora (ej. 08:00 o 08:30).`,"error");return}if(t.apertura&&t.cierre){if(e.horaInicio<t.apertura||e.horaInicio>t.cierre||e.horaFin<t.apertura||e.horaFin>t.cierre){S.default.fire("Error",`El horario de ${i} debe estar entre ${t.apertura} y ${t.cierre}.`,"error");return}if(e.horaInicio>=e.horaFin){S.default.fire("Error",`En ${i}, la hora de inicio debe ser anterior a la hora de fin.`,"error");return}}else if(e.horaInicio||e.horaFin){S.default.fire("Error",`El d\xEDa ${i} est\xE1 cerrado, no debe haber horarios de disponibilidad.`,"error");return}}try{yield this.turnoService.guardarDisponibilidad(this.usuarioSeleccionado.uid,this.disponibilidadSemana),this.generarTurnosProximos15Dias(),S.default.fire("\xC9xito","Disponibilidad guardada correctamente.","success")}catch(i){console.error("Error al guardar la disponibilidad:",i),S.default.fire("Error","No se pudo guardar la disponibilidad.","error")}})}generarTurnosProximos15Dias(){return p(this,null,function*(){if(console.log("entramos a la creacion de turnos"),!this.usuarioSeleccionado){S.default.fire("Error","Por favor, selecciona un especialista.","error");return}let i=yield this.turnoService.obtenerDisponibilidad(this.usuarioSeleccionado.uid);if(!i){S.default.fire("Error","No se encontr\xF3 disponibilidad para el especialista seleccionado.","error");return}let e=[],t=new Date;for(let r=0;r<15;r++){let o=new Date(t);o.setDate(t.getDate()+r);let d=this.obtenerNombreDia(o);if(i[d]){let u=i[d];if(u.horaInicio&&u.horaFin){let F=u.horaInicio;for(;F<u.horaFin;){let oe=this.sumarMinutos(F,30);oe<=u.horaFin&&e.push({especialista_id:this.usuarioSeleccionado.uid,fecha:o.toISOString().split("T")[0],hora_inicio:F,hora_fin:oe,estado:"disponible"}),F=oe}}}}try{yield this.turnoService.guardarTurnos(e),S.default.fire("\xC9xito","Turnos generados para los pr\xF3ximos 15 d\xEDas.","success")}catch(r){console.error("Error al generar los turnos:",r),S.default.fire("Error","No se pudieron generar los turnos.","error")}})}obtenerNombreDia(i){return["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"][i.getDay()]}sumarMinutos(i,e){let[t,r]=i.split(":").map(Number),o=new Date;o.setHours(t,r+e);let d=String(o.getHours()).padStart(2,"0"),u=String(o.getMinutes()).padStart(2,"0");return`${d}:${u}`}static \u0275fac=function(e){return new(e||n)(h(M))};static \u0275cmp=V({type:n,selectors:[["app-gestion-horarios"]],decls:5,vars:3,consts:[[3,"usuarioSeleccionado"],[4,"ngIf"],[3,"ngSubmit"],[4,"ngFor","ngForOf"],["type","submit"],[1,"horarios"],["type","time","placeholder","Hora de inicio",3,"ngModelChange","ngModel","name"],["type","time","placeholder","Hora de fin",3,"ngModelChange","ngModel","name"]],template:function(e,t){e&1&&(s(0,"app-listado-especialista",0),b("usuarioSeleccionado",function(o){return t.mostrarUsuario(o)}),a(),s(1,"h2"),c(2),a(),g(3,Xe,5,2,"div",1)(4,Ze,2,0,"p",1)),e&2&&(l(2),U("Asignar Disponibilidad para ",(t.usuarioSeleccionado==null?null:t.usuarioSeleccionado.nombre)||"Selecciona un especialista",""),l(),m("ngIf",t.usuarioSeleccionado),l(),m("ngIf",!t.usuarioSeleccionado))},dependencies:[k,G,K,W,Y,J,Ae,ye,xe,Ce],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}.horarios[_ngcontent-%COMP%]{display:flex;gap:15px}input[type=time][_ngcontent-%COMP%]{width:48%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;box-sizing:border-box;background-color:#f1f1f1;transition:border-color .3s,background-color .3s}input[type=time][_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}']})};var N=re(ue());function ei(n,i){if(n&1){let e=E();s(0,"div")(1,"input",1),b("change",function(r){_(e);let o=f();return C(o.onEspecialidadChange(r))}),a(),c(2),a()}if(n&2){let e=i.$implicit;l(),m("value",e.nombre),l(),U(" ",e.nombre,`
`)}}function ii(n,i){if(n&1){let e=E();s(0,"div")(1,"input",2),b("change",function(r){let o=_(e).$implicit,d=f();return C(d.onEspecialistaChange(r,o))}),a(),c(2),a()}if(n&2){let e=i.$implicit;l(),m("value",e.uid),l(),ae(" ",e.nombre," ",e.apellido,`
`)}}function ti(n,i){if(n&1){let e=E();s(0,"button",4),b("click",function(){_(e);let r=f().$implicit,o=f();return C(o.cancelarTurno(r))}),c(1," Cancelar Turno "),a()}}function oi(n,i){if(n&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a(),s(11,"td"),c(12),a(),s(13,"td"),c(14),a(),s(15,"td"),c(16),a(),s(17,"td"),g(18,ti,2,0,"button",3),a()()),n&2){let e=i.$implicit,t=f();l(2),v(e.dni),l(2),v(e.paciente),l(2),v(e.obraSocial),l(2),v(t.nombreEspecialista),l(2),v(e.especialidad),l(2),v(e.fecha),l(2),ae("",e.hora_inicio," - ",e.hora_fin,""),l(2),v(e.estado),l(2),m("ngIf",e.estado==="solicitado")}}var ie=class n{constructor(i,e,t){this.turnoService=i;this.especialidadService=e;this.especialistaService=t}especialidades=[];especialistas=[];horarios=[];nombreEspecialista;especialidadSeleccionada="";ngOnInit(){this.cargarEspecialidades()}cargarEspecialidades(){return p(this,null,function*(){this.especialidades=yield this.especialidadService.getEspecialidades()})}onEspecialidadChange(i){return p(this,null,function*(){let e=i.target;if(this.especialidadSeleccionada=e.value,this.especialidadSeleccionada)try{this.especialistas=yield this.especialistaService.getEspecialistasPorEspecialidad(this.especialidadSeleccionada),this.horarios=[]}catch{N.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.especialistas=[],this.horarios=[]})}onEspecialistaChange(i,e){return p(this,null,function*(){let r=i.target.value;if(r){this.nombreEspecialista=`${e.nombre} ${e.apellido}`;try{let o=yield this.turnoService.obtenerTurnosDisponiblesEspecialista(r);this.horarios=o.filter(d=>d.especialidad===this.especialidadSeleccionada),this.horarios.sort((d,u)=>new Date(d.fecha).getTime()-new Date(u.fecha).getTime())}catch{N.default.fire("Error","No se pudieron cargar los turnos","error")}}else this.horarios=[]})}cancelarTurno(i){return p(this,null,function*(){if(["Aceptado","Realizado","Rechazado"].includes(i.estado)){N.default.fire("Aviso","No se puede cancelar un turno aceptado, realizado o rechazado","info");return}let{isConfirmed:e,value:t}=yield N.default.fire({title:"\xBFEst\xE1s seguro de cancelar el turno?",text:"Por favor, ingresa el motivo de la cancelaci\xF3n",input:"textarea",inputPlaceholder:"Escribe aqu\xED el motivo...",inputAttributes:{"aria-label":"Motivo de cancelaci\xF3n"},confirmButtonText:"Cancelar turno",showCancelButton:!0,cancelButtonText:"Volver",inputValidator:r=>r?null:"El motivo es requerido para cancelar el turno"});if(e&&t)try{yield this.turnoService.cancelarTurno(i.id,t),N.default.fire("Cancelado","El turno ha sido cancelado con \xE9xito","success"),yield this.onEspecialistaChange({target:{value:i.especialistaId}},{nombre:i.nombreEspecialista,apellido:i.apellidoEspecialista})}catch{N.default.fire("Error","No se pudo cancelar el turno","error")}})}static \u0275fac=function(e){return new(e||n)(h(M),h(Q),h(j))};static \u0275cmp=V({type:n,selectors:[["app-gestionar-turnos"]],decls:31,vars:3,consts:[[4,"ngFor","ngForOf"],["type","radio","name","especialidad",3,"change","value"],["type","radio","name","especialista",3,"change","value"],["class","cancelar",3,"click",4,"ngIf"],[1,"cancelar",3,"click"]],template:function(e,t){e&1&&(s(0,"h2"),c(1,"Listado de Turnos"),a(),s(2,"label"),c(3,"Especialidad:"),a(),g(4,ei,3,2,"div",0),s(5,"label"),c(6,"Especialista:"),a(),g(7,ii,3,3,"div",0),s(8,"table")(9,"thead")(10,"tr")(11,"th"),c(12,"DNI"),a(),s(13,"th"),c(14,"Paciente"),a(),s(15,"th"),c(16,"Obra Social"),a(),s(17,"th"),c(18,"Especialista"),a(),s(19,"th"),c(20,"Especialidad"),a(),s(21,"th"),c(22,"Fecha"),a(),s(23,"th"),c(24,"Horario"),a(),s(25,"th"),c(26,"Estado"),a(),s(27,"th"),c(28,"cambiar Estado"),a()()(),s(29,"tbody"),g(30,oi,19,10,"tr",0),a()()),e&2&&(l(4),m("ngForOf",t.especialidades),l(3),m("ngForOf",t.especialistas),l(23),m("ngForOf",t.horarios))},dependencies:[k,G],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}label[_ngcontent-%COMP%]{font-weight:700;color:#154360;margin-right:.5rem}select[_ngcontent-%COMP%]{padding:.5rem;border-radius:4px;border:1px solid #D5D8DC;margin-bottom:1rem;margin-right:1rem;outline:none;transition:border-color .3s ease}select[_ngcontent-%COMP%]:focus{border-color:#154360}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}button[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.9rem;border:none;border-radius:4px;color:#fff;cursor:pointer;transition:background-color .3s ease,transform .2s ease;width:100%}button.cancelar[_ngcontent-%COMP%]{background-color:#c0392b}button.cancelar[_ngcontent-%COMP%]:hover{background-color:#a93226;transform:scale(1.05)}td.estado[_ngcontent-%COMP%]{font-weight:700;color:#1e8449}td.estado.inhabilitado[_ngcontent-%COMP%]{color:#c0392b}']})};var ri=[{path:"solicitar-turno",component:X,canActivate:[Z]},{path:"gestionar-horarios",component:ee,canActivate:[me]},{path:"gestionar-turnos",component:ie,canActivate:[me]}],te=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=z({type:n});static \u0275inj=R({imports:[pe.forChild(ri),pe]})};var He=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=z({type:n});static \u0275inj=R({imports:[de,te,Oe,Ve,de,De]})};export{He as SeccionTurnosModule};
