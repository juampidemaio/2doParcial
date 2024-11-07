import{a as ge}from"./chunk-I7UODD4V.js";import{a as De,b as Me,c as Pe}from"./chunk-RK22V2FJ.js";import{a as W,b as y,c as q,d as z,e as be,f as Se,g as B,h as ve,i as _e,j as ye,k as Ce,l as xe,m as Te,n as Ee,o as Ie,p as Fe,q as we}from"./chunk-S7MJ7PBC.js";import{$ as ue,A as h,Aa as he,Ba as F,Da as w,E as S,Fa as D,G as u,I as a,J as c,K as k,L as N,M as v,N as _,O as ee,P as m,Q as O,R as le,S as de,T as ie,U as oe,V as te,Y as pe,a as C,aa as me,b as ae,d as se,e as l,h as ce,ja as $,ka as H,l as T,la as fe,m as R,ma as re,o as b,p as V,pa as U,q as G,ra as ne,t as E,u as I,wa as L,ya as g,z as d,za as x}from"./chunk-I3QXMDSL.js";var A=se(Fe());var Y=class n{constructor(i){this.firestore=i}getEspecialistasPorEspecialidad(i){return l(this,null,function*(){let e=g(this.firestore,"users"),t=(yield F(e)).docs.map(r=>C({id:r.id},r.data())).filter(r=>this.especialistaValido(r,i));return console.log("Especialistas filtrados:",t),t})}especialistaValido(i,e){return i.role==="especialista"&&i.especialidades.includes(e)}getHorariosPorEspecialista(i){return l(this,null,function*(){let e=g(this.firestore,"horarios"),o=yield F(e),t=yield this.getTurnosPorEspecialista(i);return o.docs.map(r=>{let s=r.data();return C({id:r.id},s)}).filter(r=>r.especialistaId===i&&this.isWithinNext15Days(r.fecha)&&!this.isHorarioOcupado(r,t))})}getTurnosPorEspecialista(i){return l(this,null,function*(){let e=g(this.firestore,"turnos");return(yield F(e)).docs.map(t=>{let r=t.data();return C({id:t.id},r)}).filter(t=>t.especialistaId===i)})}isHorarioOcupado(i,e){let o=new Date(i.fecha),t=new Date(o);return t.setMinutes(t.getMinutes()+30),e.some(r=>{let s=new Date(r.fecha),p=new Date(s);return p.setMinutes(p.getMinutes()+30),s<t&&p>o})}isWithinNext15Days(i){let e=new Date(i),o=new Date,t=new Date;return t.setDate(o.getDate()+15),e>=o&&e<=t}solicitarTurno(i){return l(this,null,function*(){let e=x(g(this.firestore,"turnos"));yield w(e,i)})}static \u0275fac=function(e){return new(e||n)(b(L))};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})};var P=class n{constructor(i,e){this.firestore=i;this.authService=e}guardarDisponibilidad(i,e){return l(this,null,function*(){let o=x(g(this.firestore,"Disponibilidad"),i);yield w(o,{disponibilidad:e})})}guardarTurnos(i){return l(this,null,function*(){let e=g(this.firestore,"Turnos"),o=i.map(t=>{let r=x(e);return w(r,t)});yield Promise.all(o)})}obtenerTurnosDisponibles(i){return l(this,null,function*(){let e=g(this.firestore,"Turnos"),t=(yield F(e)).docs.map(r=>{let s=r.data();return C({id:r.id},s)}).filter(r=>{let s=r.especialista_id===i,p=r.estado==="disponible";return console.log(`Turno ID: ${r.id}, Especialista ID: ${r.especialista_id}, Estado: ${r.estado}, Coincide: ${s&&p}`),s&&p});return console.log("Turnos disponibles:",t),t})}obtenerDisponibilidad(i){return l(this,null,function*(){let e=x(this.firestore,`Disponibilidad/${i}`),o=yield he(e);return o.exists()?o.data().disponibilidad:(console.log("No existe la disponibilidad para este especialista."),null)})}solicitarTurno(i,e){return l(this,null,function*(){let o=x(this.firestore,`Turnos/${i.horario}`);yield w(o,ae(C({},i),{estado:"solicitado",pacienteId:e}),{merge:!0})})}static \u0275fac=function(e){return new(e||n)(b(L),b(D))};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})};function He(n,i){if(n&1&&(a(0,"option",11),m(1),c()),n&2){let e=i.$implicit;u("value",e.nombre),d(),O(e.nombre)}}function Ue(n,i){if(n&1&&(a(0,"option",11),m(1),c()),n&2){let e=i.$implicit;u("value",e.uid),d(),O(e.nombre)}}function Le(n,i){if(n&1&&(a(0,"option",11),m(1),c()),n&2){let e=i.$implicit;u("value",e.id),d(),de("",e.fecha," - ",e.hora_inicio,"hs hasta ",e.hora_fin,"hs")}}function We(n,i){if(n&1&&(a(0,"div")(1,"label",12),m(2,"Paciente:"),c(),k(3,"input",13),a(4,"label",14),m(5,"DNI:"),c(),k(6,"input",15),a(7,"label",16),m(8,"Obra Social:"),c(),k(9,"input",17),c()),n&2){let e=_();d(3),u("readonly",e.isAdmin),d(3),u("readonly",e.isAdmin),d(3),u("readonly",e.isAdmin)}}function qe(n,i){if(n&1){let e=N();a(0,"app-listado-paciente",18),v("usuarioSeleccionado",function(t){E(e);let r=_();return I(r.setPacienteData(t))}),c()}}var J=class n{constructor(i,e,o,t,r,s){this.especialidadService=i;this.especialistaService=e;this.turnoService=o;this.authService=t;this.fb=r;this.router=s;this.turnoForm=this.fb.group({especialidad:["",y.required],especialista:["",y.required],horario:["",y.required],paciente:["",y.required],dni:["",[y.required,y.pattern(/^[0-9]{8,}$/)]],obraSocial:["",y.required]})}especialidades=[];especialistas=[];horarios=[];turnoForm;isAdmin=!1;isPaciente=!1;usuarioSeleccionado;obtenerIdPaciente;ngOnInit(){this.cargarEspecialidades(),this.checkUserRole()}cargarEspecialidades(){return l(this,null,function*(){this.especialidades=yield this.especialidadService.getEspecialidades()})}checkUserRole(){return l(this,null,function*(){this.authService.getUser().subscribe(i=>{i&&(this.isAdmin=i.role==="administrador",this.isPaciente=i.role==="paciente")})})}setPacienteData(i){return l(this,null,function*(){this.usuarioSeleccionado=i,i&&this.turnoForm.patchValue({paciente:i.nombre,dni:i.dni,obraSocial:i.obraSocial,especialista:""})})}onEspecialidadChange(i){return l(this,null,function*(){let o=i.target.value;if(console.log("Nombre de especialidad seleccionada:",o),o)try{this.especialistas=yield this.especialistaService.getEspecialistasPorEspecialidad(o),console.log("Especialistas cargados:",this.especialistas)}catch(t){console.error("Error al cargar especialistas:",t),A.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.especialistas=[]})}onEspecialistaChange(i){return l(this,null,function*(){let o=i.target.value;if(console.log("ID del especialista seleccionado:",o),o)try{this.horarios=yield this.turnoService.obtenerTurnosDisponibles(o),this.horarios.sort((t,r)=>{let s=new Date(t.fecha),p=new Date(r.fecha);return s.getTime()!==p.getTime()?s.getTime()-p.getTime():t.hora_inicio.localeCompare(r.hora_inicio)}),console.log("Turnos disponibles cargados:",this.horarios)}catch(t){console.error("Error al cargar turnos:",t),A.default.fire("Error","No se pudieron cargar los turnos","error")}else this.horarios=[]})}solicitarTurno(){return l(this,null,function*(){try{this.authService.getUser().subscribe(e=>{e.role==="paciente"?(this.obtenerIdPaciente=e.uid,this.turnoForm.patchValue({especialista:"",paciente:e.nombre,dni:e.dni,obraSocial:e.obraSocial})):this.obtenerIdPaciente=this.usuarioSeleccionado.uid});let i=this.turnoForm.value;yield this.turnoService.solicitarTurno(i,this.obtenerIdPaciente),A.default.fire("Registro exitoso","El turno ha sido solicitado correctamente","success"),this.router.navigate(["/bienvenida"])}catch(i){console.error("Error al solicitar el turno:",i),A.default.fire("Error","No se pudo solicitar el turno. Int\xE9ntalo nuevamente.","error")}})}static \u0275fac=function(e){return new(e||n)(h(we),h(Y),h(P),h(D),h(Te),h(U))};static \u0275cmp=V({type:n,selectors:[["app-solicitar-turno"]],decls:17,vars:6,consts:[[3,"ngSubmit","formGroup"],["for","especialidad"],["id","especialidad","formControlName","especialidad",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","especialista"],["id","especialista","formControlName","especialista",3,"change"],["for","horario"],["id","horario","formControlName","horario"],[4,"ngIf"],[3,"usuarioSeleccionado",4,"ngIf"],["type","submit"],[3,"value"],["for","paciente"],["id","paciente","formControlName","paciente","type","text",3,"readonly"],["for","dni"],["id","dni","formControlName","dni","type","text",3,"readonly"],["for","obraSocial"],["id","obraSocial","formControlName","obraSocial","type","text",3,"readonly"],[3,"usuarioSeleccionado"]],template:function(e,o){e&1&&(a(0,"form",0),v("ngSubmit",function(){return o.solicitarTurno()}),a(1,"label",1),m(2,"Especialidad:"),c(),a(3,"select",2),v("change",function(r){return o.onEspecialidadChange(r)}),S(4,He,2,2,"option",3),c(),a(5,"label",4),m(6,"Especialista:"),c(),a(7,"select",5),v("change",function(r){return o.onEspecialistaChange(r)}),S(8,Ue,2,2,"option",3),c(),a(9,"label",6),m(10,"Horario:"),c(),a(11,"select",7),S(12,Le,2,4,"option",3),c(),S(13,We,10,3,"div",8)(14,qe,1,0,"app-listado-paciente",9),a(15,"button",10),m(16,"Solicitar Turno"),c()()),e&2&&(u("formGroup",o.turnoForm),d(4),u("ngForOf",o.especialidades),d(4),u("ngForOf",o.especialistas),d(4),u("ngForOf",o.horarios),d(),u("ngIf",o.isAdmin),d(),u("ngIf",o.isAdmin))},dependencies:[$,H,B,Ce,xe,W,ye,q,z,ve,_e,De],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;margin-bottom:15px;box-sizing:border-box;transition:border-color .3s,background-color .3s;background-color:#f1f1f1}input[type=text][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}div[ngIf][_ngcontent-%COMP%]{color:#dc3545;font-size:.9em;margin-top:-10px;margin-bottom:10px}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}div[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ngIf[_ngcontent-%COMP%]{margin-bottom:20px}']})};var K=class n{constructor(i,e){this.authService=i;this.router=e}canActivate(i,e){return this.authService.getUser().pipe(ce(o=>o&&(o.role==="administrador"||o.role==="paciente")?!0:(this.router.navigate(["/bienvenida"]),console.log("Acceso denegado: no es administrador ni paciente"),!1)))}static \u0275fac=function(e){return new(e||n)(b(D),b(U))};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})};var f=se(Fe());var ze=()=>["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"];function Be(n,i){if(n&1){let e=N();a(0,"div")(1,"label"),m(2),ue(3,"titlecase"),c(),a(4,"div",5)(5,"input",6),te("ngModelChange",function(t){let r=E(e).$implicit,s=_(2);return oe(s.disponibilidadSemana[r].horaInicio,t)||(s.disponibilidadSemana[r].horaInicio=t),I(t)}),c(),a(6,"input",7),te("ngModelChange",function(t){let r=E(e).$implicit,s=_(2);return oe(s.disponibilidadSemana[r].horaFin,t)||(s.disponibilidadSemana[r].horaFin=t),I(t)}),c()()()}if(n&2){let e=i.$implicit,o=_(2);d(2),O(me(3,7,e)),d(3),ee("name","",e,"HoraInicio"),ie("ngModel",o.disponibilidadSemana[e].horaInicio),d(),ee("name","",e,"HoraFin"),ie("ngModel",o.disponibilidadSemana[e].horaFin)}}function Ye(n,i){if(n&1){let e=N();a(0,"div")(1,"form",2),v("ngSubmit",function(){E(e);let t=_();return I(t.guardarDisponibilidad())}),S(2,Be,7,9,"div",3),a(3,"button",4),m(4,"Guardar Disponibilidad"),c()()()}n&2&&(d(2),u("ngForOf",pe(1,ze)))}function Je(n,i){n&1&&(a(0,"p"),m(1,"Selecciona un especialista para asignar disponibilidad."),c())}var Q=class n{constructor(i){this.turnoService=i}usuarioSeleccionado=null;disponibilidadSemana={lunes:{horaInicio:"",horaFin:""},martes:{horaInicio:"",horaFin:""},mi\u00E9rcoles:{horaInicio:"",horaFin:""},jueves:{horaInicio:"",horaFin:""},viernes:{horaInicio:"",horaFin:""},s\u00E1bado:{horaInicio:"",horaFin:""},domingo:{horaInicio:"",horaFin:""}};horariosClinica={lunes:{apertura:"08:00",cierre:"19:00"},martes:{apertura:"08:00",cierre:"19:00"},mi\u00E9rcoles:{apertura:"08:00",cierre:"19:00"},jueves:{apertura:"08:00",cierre:"19:00"},viernes:{apertura:"08:00",cierre:"19:00"},s\u00E1bado:{apertura:"08:00",cierre:"14:00"},domingo:{apertura:null,cierre:null}};mostrarUsuario(i){this.usuarioSeleccionado=i}esHorarioValido(i){let e=parseInt(i.split(":")[1],10);return e===0||e===30}guardarDisponibilidad(){return l(this,null,function*(){if(!this.usuarioSeleccionado){f.default.fire("Error","Por favor, selecciona un especialista.","error");return}for(let i in this.disponibilidadSemana){let e=this.disponibilidadSemana[i],o=this.horariosClinica[i];if(e.horaInicio&&!this.esHorarioValido(e.horaInicio)||e.horaFin&&!this.esHorarioValido(e.horaFin)){f.default.fire("Error",`Los horarios de ${i} deben ser en intervalos de media hora (ej. 08:00 o 08:30).`,"error");return}if(o.apertura&&o.cierre){if(e.horaInicio<o.apertura||e.horaInicio>o.cierre||e.horaFin<o.apertura||e.horaFin>o.cierre){f.default.fire("Error",`El horario de ${i} debe estar entre ${o.apertura} y ${o.cierre}.`,"error");return}if(e.horaInicio>=e.horaFin){f.default.fire("Error",`En ${i}, la hora de inicio debe ser anterior a la hora de fin.`,"error");return}}else if(e.horaInicio||e.horaFin){f.default.fire("Error",`El d\xEDa ${i} est\xE1 cerrado, no debe haber horarios de disponibilidad.`,"error");return}}try{yield this.turnoService.guardarDisponibilidad(this.usuarioSeleccionado.uid,this.disponibilidadSemana),this.generarTurnosProximos15Dias(),f.default.fire("\xC9xito","Disponibilidad guardada correctamente.","success")}catch(i){console.error("Error al guardar la disponibilidad:",i),f.default.fire("Error","No se pudo guardar la disponibilidad.","error")}})}generarTurnosProximos15Dias(){return l(this,null,function*(){if(console.log("entramos a la creacion de turnos"),!this.usuarioSeleccionado){f.default.fire("Error","Por favor, selecciona un especialista.","error");return}let i=yield this.turnoService.obtenerDisponibilidad(this.usuarioSeleccionado.uid);if(!i){f.default.fire("Error","No se encontr\xF3 disponibilidad para el especialista seleccionado.","error");return}let e=[],o=new Date;for(let t=0;t<15;t++){let r=new Date(o);r.setDate(o.getDate()+t);let s=this.obtenerNombreDia(r);if(i[s]){let p=i[s];if(p.horaInicio&&p.horaFin){let j=p.horaInicio;for(;j<p.horaFin;){let Z=this.sumarMinutos(j,30);Z<=p.horaFin&&e.push({especialista_id:this.usuarioSeleccionado.uid,fecha:r.toISOString().split("T")[0],hora_inicio:j,hora_fin:Z,estado:"disponible"}),j=Z}}}}try{yield this.turnoService.guardarTurnos(e),f.default.fire("\xC9xito","Turnos generados para los pr\xF3ximos 15 d\xEDas.","success")}catch(t){console.error("Error al generar los turnos:",t),f.default.fire("Error","No se pudieron generar los turnos.","error")}})}obtenerNombreDia(i){return["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"][i.getDay()]}sumarMinutos(i,e){let[o,t]=i.split(":").map(Number),r=new Date;r.setHours(o,t+e);let s=String(r.getHours()).padStart(2,"0"),p=String(r.getMinutes()).padStart(2,"0");return`${s}:${p}`}static \u0275fac=function(e){return new(e||n)(h(P))};static \u0275cmp=V({type:n,selectors:[["app-gestion-turnos"]],decls:5,vars:3,consts:[[3,"usuarioSeleccionado"],[4,"ngIf"],[3,"ngSubmit"],[4,"ngFor","ngForOf"],["type","submit"],[1,"horarios"],["type","time","placeholder","Hora de inicio",3,"ngModelChange","ngModel","name"],["type","time","placeholder","Hora de fin",3,"ngModelChange","ngModel","name"]],template:function(e,o){e&1&&(a(0,"app-listado-especialista",0),v("usuarioSeleccionado",function(r){return o.mostrarUsuario(r)}),c(),a(1,"h2"),m(2),c(),S(3,Ye,5,2,"div",1)(4,Je,2,0,"p",1)),e&2&&(d(2),le("Asignar Disponibilidad para ",(o.usuarioSeleccionado==null?null:o.usuarioSeleccionado.nombre)||"Selecciona un especialista",""),d(),u("ngIf",o.usuarioSeleccionado),d(),u("ngIf",!o.usuarioSeleccionado))},dependencies:[$,H,B,W,q,z,Me,Se,be,fe],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}.horarios[_ngcontent-%COMP%]{display:flex;gap:15px}input[type=time][_ngcontent-%COMP%]{width:48%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;box-sizing:border-box;background-color:#f1f1f1;transition:border-color .3s,background-color .3s}input[type=time][_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}']})};var Ke=[{path:"solicitar-turno",component:J,canActivate:[K]},{path:"gestionar-turno",component:Q,canActivate:[ge]}],X=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=G({type:n});static \u0275inj=R({imports:[ne.forChild(Ke),ne]})};var Ae=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=G({type:n});static \u0275inj=R({imports:[re,X,Ie,Pe,re,Ee]})};export{Ae as SeccionTurnosModule};
