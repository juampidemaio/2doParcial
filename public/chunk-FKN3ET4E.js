import{a as he}from"./chunk-UHQKBW24.js";import{a as De,b as Me,c as Pe}from"./chunk-OKKJHMAL.js";import{a as q,b as y,c as W,d as z,e as be,f as Se,g as B,h as ve,i as _e,j as ye,k as Ce,l as xe,m as Ee,n as Te,o as Ie,p as Fe,q as we}from"./chunk-UHOHH35X.js";import{$ as ue,A as g,Aa as ge,Ba as F,Da as w,E as S,Fa as D,G as p,I as a,J as s,K as k,L as N,M as v,N as _,O as ee,P as u,Q as O,R as le,S as de,T as ie,U as oe,V as te,Y as pe,a as C,aa as me,b as ae,d as se,e as l,h as ce,ja as $,ka as H,l as E,la as fe,m as R,ma as re,o as b,p as V,pa as L,q as G,ra as ne,t as T,u as I,wa as U,ya as h,z as d,za as x}from"./chunk-E2NVOQIH.js";var A=se(Fe());var Y=class n{constructor(i){this.firestore=i}getEspecialistasPorEspecialidad(i){return l(this,null,function*(){let e=h(this.firestore,"users"),t=(yield F(e)).docs.map(r=>C({id:r.id},r.data())).filter(r=>this.especialistaValido(r,i));return console.log("Especialistas filtrados:",t),t})}especialistaValido(i,e){return i.role==="especialista"&&i.especialidades.includes(e)}getHorariosPorEspecialista(i){return l(this,null,function*(){let e=h(this.firestore,"horarios"),o=yield F(e),t=yield this.getTurnosPorEspecialista(i);return o.docs.map(r=>{let c=r.data();return C({id:r.id},c)}).filter(r=>r.especialistaId===i&&this.isWithinNext15Days(r.fecha)&&!this.isHorarioOcupado(r,t))})}getTurnosPorEspecialista(i){return l(this,null,function*(){let e=h(this.firestore,"turnos");return(yield F(e)).docs.map(t=>{let r=t.data();return C({id:t.id},r)}).filter(t=>t.especialistaId===i)})}isHorarioOcupado(i,e){let o=new Date(i.fecha),t=new Date(o);return t.setMinutes(t.getMinutes()+30),e.some(r=>{let c=new Date(r.fecha),m=new Date(c);return m.setMinutes(m.getMinutes()+30),c<t&&m>o})}isWithinNext15Days(i){let e=new Date(i),o=new Date,t=new Date;return t.setDate(o.getDate()+15),e>=o&&e<=t}solicitarTurno(i){return l(this,null,function*(){let e=x(h(this.firestore,"turnos"));yield w(e,i)})}static \u0275fac=function(e){return new(e||n)(b(U))};static \u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})};var P=class n{constructor(i,e){this.firestore=i;this.authService=e}guardarDisponibilidad(i,e){return l(this,null,function*(){let o=x(h(this.firestore,"Disponibilidad"),i);yield w(o,{disponibilidad:e})})}guardarTurnos(i){return l(this,null,function*(){let e=h(this.firestore,"Turnos"),o=i.map(t=>{let r=x(e);return w(r,t)});yield Promise.all(o)})}obtenerTurnosDisponibles(i){return l(this,null,function*(){let e=h(this.firestore,"Turnos"),o=yield F(e);console.log("Llamando a este que se pasa por parametro es el id real:",i);let t=o.docs.map(r=>{console.log("Todos los turnos obtenidos:",o.docs);let c=r.data();return console.log("Llamando a obtenerTurnosDisponibles con ID:",i),C({id:r.id},c)}).filter(r=>{let c=r.especialista_Id===i,m=r.estado==="disponible";return console.log(`Turno ID: ${r.id}, Especialista ID: ${r.especialista_Id}, Estado: ${r.estado}, Coincide: ${c&&m}`),c&&m});return console.log("Turnos disponibles:",t),t})}obtenerDisponibilidad(i){return l(this,null,function*(){let e=x(this.firestore,`Disponibilidad/${i}`),o=yield ge(e);return o.exists()?o.data().disponibilidad:(console.log("No existe la disponibilidad para este especialista."),null)})}solicitarTurno(i,e){return l(this,null,function*(){let o=x(this.firestore,`Turnos/${i.horario}`);yield w(o,ae(C({},i),{estado:"solicitado",pacienteId:e}),{merge:!0})})}static \u0275fac=function(e){return new(e||n)(b(U),b(D))};static \u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})};function He(n,i){if(n&1&&(a(0,"option",11),u(1),s()),n&2){let e=i.$implicit;p("value",e.nombre),d(),O(e.nombre)}}function Le(n,i){if(n&1&&(a(0,"option",11),u(1),s()),n&2){let e=i.$implicit;p("value",e.uid),d(),O(e.nombre)}}function Ue(n,i){if(n&1&&(a(0,"option",11),u(1),s()),n&2){let e=i.$implicit;p("value",e.id),d(),de("",e.fecha," - ",e.hora,"")}}function qe(n,i){if(n&1&&(a(0,"div")(1,"label",12),u(2,"Paciente:"),s(),k(3,"input",13),a(4,"label",14),u(5,"DNI:"),s(),k(6,"input",15),a(7,"label",16),u(8,"Obra Social:"),s(),k(9,"input",17),s()),n&2){let e=_();d(3),p("readonly",e.isAdmin),d(3),p("readonly",e.isAdmin),d(3),p("readonly",e.isAdmin)}}function We(n,i){if(n&1){let e=N();a(0,"app-listado-paciente",18),v("usuarioSeleccionado",function(t){T(e);let r=_();return I(r.setPacienteData(t))}),s()}}var J=class n{constructor(i,e,o,t,r,c){this.especialidadService=i;this.especialistaService=e;this.turnoService=o;this.authService=t;this.fb=r;this.router=c;this.turnoForm=this.fb.group({especialidad:["",y.required],especialista:["",y.required],horario:["",y.required],paciente:["",y.required],dni:["",[y.required,y.pattern(/^[0-9]{8,}$/)]],obraSocial:["",y.required]})}especialidades=[];especialistas=[];horarios=[];turnoForm;isAdmin=!1;isPaciente=!1;usuarioSeleccionado;obtenerIdPaciente;ngOnInit(){this.cargarEspecialidades(),this.checkUserRole()}cargarEspecialidades(){return l(this,null,function*(){this.especialidades=yield this.especialidadService.getEspecialidades()})}checkUserRole(){return l(this,null,function*(){this.authService.getUser().subscribe(i=>{i&&(this.isAdmin=i.role==="administrador",this.isPaciente=i.role==="paciente")})})}setPacienteData(i){return l(this,null,function*(){this.usuarioSeleccionado=i,i&&this.turnoForm.patchValue({paciente:i.nombre,dni:i.dni,obraSocial:i.obraSocial})})}onEspecialidadChange(i){return l(this,null,function*(){let o=i.target.value;if(console.log("Nombre de especialidad seleccionada:",o),o)try{this.especialistas=yield this.especialistaService.getEspecialistasPorEspecialidad(o),console.log("Especialistas cargados:",this.especialistas)}catch(t){console.error("Error al cargar especialistas:",t),A.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.especialistas=[]})}onEspecialistaChange(i){return l(this,null,function*(){let o=i.target.value;if(console.log("ID del especialista seleccionado:",o),o)try{this.horarios=yield this.turnoService.obtenerTurnosDisponibles(o),console.log("Turnos disponibles cargados:",this.horarios)}catch(t){console.error("Error al cargar turnos:",t),A.default.fire("Error","No se pudieron cargar los turnos","error")}else this.horarios=[]})}solicitarTurno(){return l(this,null,function*(){let i=this.turnoForm.value;try{this.authService.getUser().subscribe(e=>{(this.isPaciente=e.role==="paciente")?this.obtenerIdPaciente=e.uid:this.obtenerIdPaciente=this.usuarioSeleccionado.uid}),yield this.turnoService.solicitarTurno(i,this.obtenerIdPaciente),A.default.fire("Registro exitoso","El turno ha sido solicitado correctamente","success"),this.router.navigate(["/bienvenida"])}catch(e){console.error("Error al solicitar el turno:",e),A.default.fire("Error","No se pudo solicitar el turno. Int\xE9ntalo nuevamente.","error")}})}static \u0275fac=function(e){return new(e||n)(g(we),g(Y),g(P),g(D),g(Ee),g(L))};static \u0275cmp=V({type:n,selectors:[["app-solicitar-turno"]],decls:17,vars:6,consts:[[3,"ngSubmit","formGroup"],["for","especialidad"],["id","especialidad","formControlName","especialidad",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","especialista"],["id","especialista","formControlName","especialista",3,"change"],["for","horario"],["id","horario","formControlName","horario"],[4,"ngIf"],[3,"usuarioSeleccionado",4,"ngIf"],["type","submit"],[3,"value"],["for","paciente"],["id","paciente","formControlName","paciente","type","text",3,"readonly"],["for","dni"],["id","dni","formControlName","dni","type","text",3,"readonly"],["for","obraSocial"],["id","obraSocial","formControlName","obraSocial","type","text",3,"readonly"],[3,"usuarioSeleccionado"]],template:function(e,o){e&1&&(a(0,"form",0),v("ngSubmit",function(){return o.solicitarTurno()}),a(1,"label",1),u(2,"Especialidad:"),s(),a(3,"select",2),v("change",function(r){return o.onEspecialidadChange(r)}),S(4,He,2,2,"option",3),s(),a(5,"label",4),u(6,"Especialista:"),s(),a(7,"select",5),v("change",function(r){return o.onEspecialistaChange(r)}),S(8,Le,2,2,"option",3),s(),a(9,"label",6),u(10,"Horario:"),s(),a(11,"select",7),S(12,Ue,2,3,"option",3),s(),S(13,qe,10,3,"div",8)(14,We,1,0,"app-listado-paciente",9),a(15,"button",10),u(16,"Solicitar Turno"),s()()),e&2&&(p("formGroup",o.turnoForm),d(4),p("ngForOf",o.especialidades),d(4),p("ngForOf",o.especialistas),d(4),p("ngForOf",o.horarios),d(),p("ngIf",o.isAdmin),d(),p("ngIf",o.isAdmin))},dependencies:[$,H,B,Ce,xe,q,ye,W,z,ve,_e,De],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;margin-bottom:15px;box-sizing:border-box;transition:border-color .3s,background-color .3s;background-color:#f1f1f1}input[type=text][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}div[ngIf][_ngcontent-%COMP%]{color:#dc3545;font-size:.9em;margin-top:-10px;margin-bottom:10px}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}div[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ngIf[_ngcontent-%COMP%]{margin-bottom:20px}']})};var K=class n{constructor(i,e){this.authService=i;this.router=e}canActivate(i,e){return this.authService.getUser().pipe(ce(o=>o&&(o.role==="administrador"||o.role==="paciente")?!0:(this.router.navigate(["/bienvenida"]),console.log("Acceso denegado: no es administrador ni paciente"),!1)))}static \u0275fac=function(e){return new(e||n)(b(D),b(L))};static \u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})};var f=se(Fe());var ze=()=>["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"];function Be(n,i){if(n&1){let e=N();a(0,"div")(1,"label"),u(2),ue(3,"titlecase"),s(),a(4,"div",5)(5,"input",6),te("ngModelChange",function(t){let r=T(e).$implicit,c=_(2);return oe(c.disponibilidadSemana[r].horaInicio,t)||(c.disponibilidadSemana[r].horaInicio=t),I(t)}),s(),a(6,"input",7),te("ngModelChange",function(t){let r=T(e).$implicit,c=_(2);return oe(c.disponibilidadSemana[r].horaFin,t)||(c.disponibilidadSemana[r].horaFin=t),I(t)}),s()()()}if(n&2){let e=i.$implicit,o=_(2);d(2),O(me(3,7,e)),d(3),ee("name","",e,"HoraInicio"),ie("ngModel",o.disponibilidadSemana[e].horaInicio),d(),ee("name","",e,"HoraFin"),ie("ngModel",o.disponibilidadSemana[e].horaFin)}}function Ye(n,i){if(n&1){let e=N();a(0,"div")(1,"form",2),v("ngSubmit",function(){T(e);let t=_();return I(t.guardarDisponibilidad())}),S(2,Be,7,9,"div",3),a(3,"button",4),u(4,"Guardar Disponibilidad"),s()()()}n&2&&(d(2),p("ngForOf",pe(1,ze)))}function Je(n,i){n&1&&(a(0,"p"),u(1,"Selecciona un especialista para asignar disponibilidad."),s())}var Q=class n{constructor(i){this.turnoService=i}usuarioSeleccionado=null;disponibilidadSemana={lunes:{horaInicio:"",horaFin:""},martes:{horaInicio:"",horaFin:""},mi\u00E9rcoles:{horaInicio:"",horaFin:""},jueves:{horaInicio:"",horaFin:""},viernes:{horaInicio:"",horaFin:""},s\u00E1bado:{horaInicio:"",horaFin:""},domingo:{horaInicio:"",horaFin:""}};horariosClinica={lunes:{apertura:"08:00",cierre:"19:00"},martes:{apertura:"08:00",cierre:"19:00"},mi\u00E9rcoles:{apertura:"08:00",cierre:"19:00"},jueves:{apertura:"08:00",cierre:"19:00"},viernes:{apertura:"08:00",cierre:"19:00"},s\u00E1bado:{apertura:"08:00",cierre:"14:00"},domingo:{apertura:null,cierre:null}};mostrarUsuario(i){this.usuarioSeleccionado=i}esHorarioValido(i){let e=parseInt(i.split(":")[1],10);return e===0||e===30}guardarDisponibilidad(){return l(this,null,function*(){if(!this.usuarioSeleccionado){f.default.fire("Error","Por favor, selecciona un especialista.","error");return}for(let i in this.disponibilidadSemana){let e=this.disponibilidadSemana[i],o=this.horariosClinica[i];if(e.horaInicio&&!this.esHorarioValido(e.horaInicio)||e.horaFin&&!this.esHorarioValido(e.horaFin)){f.default.fire("Error",`Los horarios de ${i} deben ser en intervalos de media hora (ej. 08:00 o 08:30).`,"error");return}if(o.apertura&&o.cierre){if(e.horaInicio<o.apertura||e.horaInicio>o.cierre||e.horaFin<o.apertura||e.horaFin>o.cierre){f.default.fire("Error",`El horario de ${i} debe estar entre ${o.apertura} y ${o.cierre}.`,"error");return}if(e.horaInicio>=e.horaFin){f.default.fire("Error",`En ${i}, la hora de inicio debe ser anterior a la hora de fin.`,"error");return}}else if(e.horaInicio||e.horaFin){f.default.fire("Error",`El d\xEDa ${i} est\xE1 cerrado, no debe haber horarios de disponibilidad.`,"error");return}}try{yield this.turnoService.guardarDisponibilidad(this.usuarioSeleccionado.uid,this.disponibilidadSemana),this.generarTurnosProximos15Dias(),f.default.fire("\xC9xito","Disponibilidad guardada correctamente.","success")}catch(i){console.error("Error al guardar la disponibilidad:",i),f.default.fire("Error","No se pudo guardar la disponibilidad.","error")}})}generarTurnosProximos15Dias(){return l(this,null,function*(){if(console.log("entramos a la creacion de turnos"),!this.usuarioSeleccionado){f.default.fire("Error","Por favor, selecciona un especialista.","error");return}let i=yield this.turnoService.obtenerDisponibilidad(this.usuarioSeleccionado.uid);if(!i){f.default.fire("Error","No se encontr\xF3 disponibilidad para el especialista seleccionado.","error");return}let e=[],o=new Date;for(let t=0;t<15;t++){let r=new Date(o);r.setDate(o.getDate()+t);let c=this.obtenerNombreDia(r);if(i[c]){let m=i[c];if(m.horaInicio&&m.horaFin){let j=m.horaInicio;for(;j<m.horaFin;){let Z=this.sumarMinutos(j,30);Z<=m.horaFin&&e.push({especialista_id:this.usuarioSeleccionado.uid,fecha:r.toISOString().split("T")[0],hora_inicio:j,hora_fin:Z,estado:"disponible"}),j=Z}}}}try{yield this.turnoService.guardarTurnos(e),f.default.fire("\xC9xito","Turnos generados para los pr\xF3ximos 15 d\xEDas.","success")}catch(t){console.error("Error al generar los turnos:",t),f.default.fire("Error","No se pudieron generar los turnos.","error")}})}obtenerNombreDia(i){return["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"][i.getDay()]}sumarMinutos(i,e){let[o,t]=i.split(":").map(Number),r=new Date;r.setHours(o,t+e);let c=String(r.getHours()).padStart(2,"0"),m=String(r.getMinutes()).padStart(2,"0");return`${c}:${m}`}static \u0275fac=function(e){return new(e||n)(g(P))};static \u0275cmp=V({type:n,selectors:[["app-gestion-turnos"]],decls:5,vars:3,consts:[[3,"usuarioSeleccionado"],[4,"ngIf"],[3,"ngSubmit"],[4,"ngFor","ngForOf"],["type","submit"],[1,"horarios"],["type","time","placeholder","Hora de inicio",3,"ngModelChange","ngModel","name"],["type","time","placeholder","Hora de fin",3,"ngModelChange","ngModel","name"]],template:function(e,o){e&1&&(a(0,"app-listado-especialista",0),v("usuarioSeleccionado",function(r){return o.mostrarUsuario(r)}),s(),a(1,"h2"),u(2),s(),S(3,Ye,5,2,"div",1)(4,Je,2,0,"p",1)),e&2&&(d(2),le("Asignar Disponibilidad para ",(o.usuarioSeleccionado==null?null:o.usuarioSeleccionado.nombre)||"Selecciona un especialista",""),d(),p("ngIf",o.usuarioSeleccionado),d(),p("ngIf",!o.usuarioSeleccionado))},dependencies:[$,H,B,q,W,z,Me,Se,be,fe],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}.horarios[_ngcontent-%COMP%]{display:flex;gap:15px}input[type=time][_ngcontent-%COMP%]{width:48%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;box-sizing:border-box;background-color:#f1f1f1;transition:border-color .3s,background-color .3s}input[type=time][_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}']})};var Ke=[{path:"solicitar-turno",component:J,canActivate:[K]},{path:"gestionar-turno",component:Q,canActivate:[he]}],X=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=G({type:n});static \u0275inj=R({imports:[ne.forChild(Ke),ne]})};var Ae=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=G({type:n});static \u0275inj=R({imports:[re,X,Ie,Pe,re,Te]})};export{Ae as SeccionTurnosModule};
