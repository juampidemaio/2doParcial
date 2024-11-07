import{a as pe}from"./chunk-J5QWHNFI.js";import{a as Ne,b as Ae,c as Ve}from"./chunk-UALT75BI.js";import{a as W,b as w,c as Y,d as J,e as Ee,f as ye,g as K,h as Te,i as Ie,j as we,k as Me,l as Fe,m as Pe,n as De,o as Oe,p as me,q as Q}from"./chunk-L2E4HFTI.js";import{A as f,Aa as I,Ba as xe,Ca as F,E as g,Ea as P,G as m,Ga as k,I as s,J as a,K as U,L as E,M as v,N as h,O as ne,P as c,Q as b,R as j,S as he,T as be,U as ae,V as se,W as ce,Z as ve,a as y,aa as Se,b as fe,ba as _e,d as re,e as p,h as ge,ka as V,l as N,la as G,m as z,ma as Ce,na as le,o as T,p as A,q as L,qa as B,sa as de,t as _,u as C,xa as q,z as l,za as x}from"./chunk-LPHFI5WA.js";var R=re(me());var H=class n{constructor(i){this.firestore=i}getEspecialistasPorEspecialidad(i){return p(this,null,function*(){let e=x(this.firestore,"users"),o=(yield F(e)).docs.map(r=>y({id:r.id},r.data())).filter(r=>this.especialistaValido(r,i));return console.log("Especialistas filtrados:",o),o})}especialistaValido(i,e){return i.role==="especialista"&&i.especialidades.includes(e)}getHorariosPorEspecialista(i){return p(this,null,function*(){let e=x(this.firestore,"horarios"),t=yield F(e),o=yield this.getTurnosPorEspecialista(i);return t.docs.map(r=>{let d=r.data();return y({id:r.id},d)}).filter(r=>r.especialistaId===i&&this.isWithinNext15Days(r.fecha)&&!this.isHorarioOcupado(r,o))})}getTurnosPorEspecialista(i){return p(this,null,function*(){let e=x(this.firestore,"turnos");return(yield F(e)).docs.map(o=>{let r=o.data();return y({id:o.id},r)}).filter(o=>o.especialistaId===i)})}isHorarioOcupado(i,e){let t=new Date(i.fecha),o=new Date(t);return o.setMinutes(o.getMinutes()+30),e.some(r=>{let d=new Date(r.fecha),u=new Date(d);return u.setMinutes(u.getMinutes()+30),d<o&&u>t})}isWithinNext15Days(i){let e=new Date(i),t=new Date,o=new Date;return o.setDate(t.getDate()+15),e>=t&&e<=o}solicitarTurno(i){return p(this,null,function*(){let e=I(x(this.firestore,"turnos"));yield P(e,i)})}static \u0275fac=function(e){return new(e||n)(T(q))};static \u0275prov=N({token:n,factory:n.\u0275fac,providedIn:"root"})};var M=class n{constructor(i,e){this.firestore=i;this.authService=e}guardarDisponibilidad(i,e){return p(this,null,function*(){let t=I(x(this.firestore,"Disponibilidad"),i);yield P(t,{disponibilidad:e})})}guardarTurnos(i){return p(this,null,function*(){let e=x(this.firestore,"Turnos"),t=i.map(o=>{let r=I(e);return P(r,o)});yield Promise.all(t)})}obtenerTurnosDisponibles(i){return p(this,null,function*(){let e=x(this.firestore,"Turnos"),o=(yield F(e)).docs.map(r=>{let d=r.data();return y({id:r.id},d)}).filter(r=>{let d=r.especialista_id===i,u=r.estado==="disponible";return console.log(`Turno ID: ${r.id}, Especialista ID: ${r.especialista_id}, Estado: ${r.estado}, Coincide: ${d&&u}`),d&&u});return console.log("Turnos disponibles:",o),o})}obtenerTurnosDisponiblesEspecialista(i){return p(this,null,function*(){let e=x(this.firestore,"Turnos"),o=(yield F(e)).docs.map(r=>{let d=r.data();return y({id:r.id},d)}).filter(r=>{let d=r.especialista_id===i,u=r.estado==="solicitado";return console.log(`Turno ID: ${r.id}, Especialista ID: ${r.especialista_id}, Estado: ${r.estado}, Coincide: ${d&&u}`),d&&u});return console.log("Turnos solicitados:",o),o})}obtenerDisponibilidad(i){return p(this,null,function*(){let e=I(this.firestore,`Disponibilidad/${i}`),t=yield xe(e);return t.exists()?t.data().disponibilidad:(console.log("No existe la disponibilidad para este especialista."),null)})}solicitarTurno(i,e){return p(this,null,function*(){let t=I(this.firestore,`Turnos/${i.horario}`);yield P(t,fe(y({},i),{estado:"solicitado",pacienteId:e}),{merge:!0})})}cancelarTurno(i,e){return p(this,null,function*(){let t=I(this.firestore,`Turnos/${i}`);yield P(t,{estado:"Cancelado",motivoCancelacion:e},{merge:!0})})}static \u0275fac=function(e){return new(e||n)(T(q),T(k))};static \u0275prov=N({token:n,factory:n.\u0275fac,providedIn:"root"})};function Be(n,i){if(n&1&&(s(0,"option",11),c(1),a()),n&2){let e=i.$implicit;m("value",e.nombre),l(),b(e.nombre)}}function qe(n,i){if(n&1&&(s(0,"option",11),c(1),a()),n&2){let e=i.$implicit;m("value",e.uid),l(),b(e.nombre)}}function We(n,i){if(n&1&&(s(0,"option",11),c(1),a()),n&2){let e=i.$implicit;m("value",e.id),l(),be("",e.fecha," - ",e.hora_inicio,"hs hasta ",e.hora_fin,"hs")}}function Ye(n,i){if(n&1&&(s(0,"div")(1,"label",12),c(2,"Paciente:"),a(),U(3,"input",13),s(4,"label",14),c(5,"DNI:"),a(),U(6,"input",15),s(7,"label",16),c(8,"Obra Social:"),a(),U(9,"input",17),a()),n&2){let e=h();l(3),m("readonly",e.isAdmin),l(3),m("readonly",e.isAdmin),l(3),m("readonly",e.isAdmin)}}function Je(n,i){if(n&1){let e=E();s(0,"app-listado-paciente",18),v("usuarioSeleccionado",function(o){_(e);let r=h();return C(r.setPacienteData(o))}),a()}}var X=class n{constructor(i,e,t,o,r,d){this.especialidadService=i;this.especialistaService=e;this.turnoService=t;this.authService=o;this.fb=r;this.router=d;this.turnoForm=this.fb.group({especialidad:["",w.required],especialista:["",w.required],horario:["",w.required],paciente:["",w.required],dni:["",[w.required,w.pattern(/^[0-9]{8,}$/)]],obraSocial:["",w.required]})}especialidades=[];especialistas=[];horarios=[];turnoForm;isAdmin=!1;isPaciente=!1;usuarioSeleccionado;obtenerIdPaciente;ngOnInit(){this.cargarEspecialidades(),this.checkUserRole()}cargarEspecialidades(){return p(this,null,function*(){this.especialidades=yield this.especialidadService.getEspecialidades()})}checkUserRole(){return p(this,null,function*(){this.authService.getUser().subscribe(i=>{i&&(this.isAdmin=i.role==="administrador",this.isPaciente=i.role==="paciente")})})}setPacienteData(i){return p(this,null,function*(){this.usuarioSeleccionado=i,i&&this.turnoForm.patchValue({paciente:i.nombre,dni:i.dni,obraSocial:i.obraSocial,especialista:""})})}onEspecialidadChange(i){return p(this,null,function*(){let t=i.target.value;if(console.log("Nombre de especialidad seleccionada:",t),t)try{this.especialistas=yield this.especialistaService.getEspecialistasPorEspecialidad(t),console.log("Especialistas cargados:",this.especialistas)}catch(o){console.error("Error al cargar especialistas:",o),R.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.especialistas=[]})}onEspecialistaChange(i){return p(this,null,function*(){let t=i.target.value;if(console.log("ID del especialista seleccionado:",t),t)try{this.horarios=yield this.turnoService.obtenerTurnosDisponibles(t),this.horarios.sort((o,r)=>{let d=new Date(o.fecha),u=new Date(r.fecha);return d.getTime()!==u.getTime()?d.getTime()-u.getTime():o.hora_inicio.localeCompare(r.hora_inicio)}),console.log("Turnos disponibles cargados:",this.horarios)}catch(o){console.error("Error al cargar turnos:",o),R.default.fire("Error","No se pudieron cargar los turnos","error")}else this.horarios=[]})}solicitarTurno(){return p(this,null,function*(){try{this.authService.getUser().subscribe(e=>{e.role==="paciente"?(this.obtenerIdPaciente=e.uid,this.turnoForm.patchValue({especialista:"",paciente:e.nombre,dni:e.dni,obraSocial:e.obraSocial})):this.obtenerIdPaciente=this.usuarioSeleccionado.uid});let i=this.turnoForm.value;yield this.turnoService.solicitarTurno(i,this.obtenerIdPaciente),R.default.fire("Registro exitoso","El turno ha sido solicitado correctamente","success"),this.router.navigate(["/bienvenida"])}catch(i){console.error("Error al solicitar el turno:",i),R.default.fire("Error","No se pudo solicitar el turno. Int\xE9ntalo nuevamente.","error")}})}static \u0275fac=function(e){return new(e||n)(f(Q),f(H),f(M),f(k),f(Pe),f(B))};static \u0275cmp=A({type:n,selectors:[["app-solicitar-turno"]],decls:17,vars:6,consts:[[3,"ngSubmit","formGroup"],["for","especialidad"],["id","especialidad","formControlName","especialidad",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","especialista"],["id","especialista","formControlName","especialista",3,"change"],["for","horario"],["id","horario","formControlName","horario"],[4,"ngIf"],[3,"usuarioSeleccionado",4,"ngIf"],["type","submit"],[3,"value"],["for","paciente"],["id","paciente","formControlName","paciente","type","text",3,"readonly"],["for","dni"],["id","dni","formControlName","dni","type","text",3,"readonly"],["for","obraSocial"],["id","obraSocial","formControlName","obraSocial","type","text",3,"readonly"],[3,"usuarioSeleccionado"]],template:function(e,t){e&1&&(s(0,"form",0),v("ngSubmit",function(){return t.solicitarTurno()}),s(1,"label",1),c(2,"Especialidad:"),a(),s(3,"select",2),v("change",function(r){return t.onEspecialidadChange(r)}),g(4,Be,2,2,"option",3),a(),s(5,"label",4),c(6,"Especialista:"),a(),s(7,"select",5),v("change",function(r){return t.onEspecialistaChange(r)}),g(8,qe,2,2,"option",3),a(),s(9,"label",6),c(10,"Horario:"),a(),s(11,"select",7),g(12,We,2,4,"option",3),a(),g(13,Ye,10,3,"div",8)(14,Je,1,0,"app-listado-paciente",9),s(15,"button",10),c(16,"Solicitar Turno"),a()()),e&2&&(m("formGroup",t.turnoForm),l(4),m("ngForOf",t.especialidades),l(4),m("ngForOf",t.especialistas),l(4),m("ngForOf",t.horarios),l(),m("ngIf",t.isAdmin),l(),m("ngIf",t.isAdmin))},dependencies:[V,G,K,Me,Fe,W,we,Y,J,Te,Ie,Ne],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;margin-bottom:15px;box-sizing:border-box;transition:border-color .3s,background-color .3s;background-color:#f1f1f1}input[type=text][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}div[ngIf][_ngcontent-%COMP%]{color:#dc3545;font-size:.9em;margin-top:-10px;margin-bottom:10px}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}div[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ngIf[_ngcontent-%COMP%]{margin-bottom:20px}']})};var Z=class n{constructor(i,e){this.authService=i;this.router=e}canActivate(i,e){return this.authService.getUser().pipe(ge(t=>t&&(t.role==="administrador"||t.role==="paciente")?!0:(this.router.navigate(["/bienvenida"]),console.log("Acceso denegado: no es administrador ni paciente"),!1)))}static \u0275fac=function(e){return new(e||n)(T(k),T(B))};static \u0275prov=N({token:n,factory:n.\u0275fac,providedIn:"root"})};var S=re(me());var Ke=()=>["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"];function Qe(n,i){if(n&1){let e=E();s(0,"div")(1,"label"),c(2),Se(3,"titlecase"),a(),s(4,"div",5)(5,"input",6),ce("ngModelChange",function(o){let r=_(e).$implicit,d=h(2);return se(d.disponibilidadSemana[r].horaInicio,o)||(d.disponibilidadSemana[r].horaInicio=o),C(o)}),a(),s(6,"input",7),ce("ngModelChange",function(o){let r=_(e).$implicit,d=h(2);return se(d.disponibilidadSemana[r].horaFin,o)||(d.disponibilidadSemana[r].horaFin=o),C(o)}),a()()()}if(n&2){let e=i.$implicit,t=h(2);l(2),b(_e(3,7,e)),l(3),ne("name","",e,"HoraInicio"),ae("ngModel",t.disponibilidadSemana[e].horaInicio),l(),ne("name","",e,"HoraFin"),ae("ngModel",t.disponibilidadSemana[e].horaFin)}}function Xe(n,i){if(n&1){let e=E();s(0,"div")(1,"form",2),v("ngSubmit",function(){_(e);let o=h();return C(o.guardarDisponibilidad())}),g(2,Qe,7,9,"div",3),s(3,"button",4),c(4,"Guardar Disponibilidad"),a()()()}n&2&&(l(2),m("ngForOf",ve(1,Ke)))}function Ze(n,i){n&1&&(s(0,"p"),c(1,"Selecciona un especialista para asignar disponibilidad."),a())}var ee=class n{constructor(i){this.turnoService=i}usuarioSeleccionado=null;disponibilidadSemana={lunes:{horaInicio:"",horaFin:""},martes:{horaInicio:"",horaFin:""},mi\u00E9rcoles:{horaInicio:"",horaFin:""},jueves:{horaInicio:"",horaFin:""},viernes:{horaInicio:"",horaFin:""},s\u00E1bado:{horaInicio:"",horaFin:""},domingo:{horaInicio:"",horaFin:""}};horariosClinica={lunes:{apertura:"08:00",cierre:"19:00"},martes:{apertura:"08:00",cierre:"19:00"},mi\u00E9rcoles:{apertura:"08:00",cierre:"19:00"},jueves:{apertura:"08:00",cierre:"19:00"},viernes:{apertura:"08:00",cierre:"19:00"},s\u00E1bado:{apertura:"08:00",cierre:"14:00"},domingo:{apertura:null,cierre:null}};mostrarUsuario(i){this.usuarioSeleccionado=i}esHorarioValido(i){let e=parseInt(i.split(":")[1],10);return e===0||e===30}guardarDisponibilidad(){return p(this,null,function*(){if(!this.usuarioSeleccionado){S.default.fire("Error","Por favor, selecciona un especialista.","error");return}for(let i in this.disponibilidadSemana){let e=this.disponibilidadSemana[i],t=this.horariosClinica[i];if(e.horaInicio&&!this.esHorarioValido(e.horaInicio)||e.horaFin&&!this.esHorarioValido(e.horaFin)){S.default.fire("Error",`Los horarios de ${i} deben ser en intervalos de media hora (ej. 08:00 o 08:30).`,"error");return}if(t.apertura&&t.cierre){if(e.horaInicio<t.apertura||e.horaInicio>t.cierre||e.horaFin<t.apertura||e.horaFin>t.cierre){S.default.fire("Error",`El horario de ${i} debe estar entre ${t.apertura} y ${t.cierre}.`,"error");return}if(e.horaInicio>=e.horaFin){S.default.fire("Error",`En ${i}, la hora de inicio debe ser anterior a la hora de fin.`,"error");return}}else if(e.horaInicio||e.horaFin){S.default.fire("Error",`El d\xEDa ${i} est\xE1 cerrado, no debe haber horarios de disponibilidad.`,"error");return}}try{yield this.turnoService.guardarDisponibilidad(this.usuarioSeleccionado.uid,this.disponibilidadSemana),this.generarTurnosProximos15Dias(),S.default.fire("\xC9xito","Disponibilidad guardada correctamente.","success")}catch(i){console.error("Error al guardar la disponibilidad:",i),S.default.fire("Error","No se pudo guardar la disponibilidad.","error")}})}generarTurnosProximos15Dias(){return p(this,null,function*(){if(console.log("entramos a la creacion de turnos"),!this.usuarioSeleccionado){S.default.fire("Error","Por favor, selecciona un especialista.","error");return}let i=yield this.turnoService.obtenerDisponibilidad(this.usuarioSeleccionado.uid);if(!i){S.default.fire("Error","No se encontr\xF3 disponibilidad para el especialista seleccionado.","error");return}let e=[],t=new Date;for(let o=0;o<15;o++){let r=new Date(t);r.setDate(t.getDate()+o);let d=this.obtenerNombreDia(r);if(i[d]){let u=i[d];if(u.horaInicio&&u.horaFin){let $=u.horaInicio;for(;$<u.horaFin;){let oe=this.sumarMinutos($,30);oe<=u.horaFin&&e.push({especialista_id:this.usuarioSeleccionado.uid,fecha:r.toISOString().split("T")[0],hora_inicio:$,hora_fin:oe,estado:"disponible"}),$=oe}}}}try{yield this.turnoService.guardarTurnos(e),S.default.fire("\xC9xito","Turnos generados para los pr\xF3ximos 15 d\xEDas.","success")}catch(o){console.error("Error al generar los turnos:",o),S.default.fire("Error","No se pudieron generar los turnos.","error")}})}obtenerNombreDia(i){return["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"][i.getDay()]}sumarMinutos(i,e){let[t,o]=i.split(":").map(Number),r=new Date;r.setHours(t,o+e);let d=String(r.getHours()).padStart(2,"0"),u=String(r.getMinutes()).padStart(2,"0");return`${d}:${u}`}static \u0275fac=function(e){return new(e||n)(f(M))};static \u0275cmp=A({type:n,selectors:[["app-gestion-horarios"]],decls:5,vars:3,consts:[[3,"usuarioSeleccionado"],[4,"ngIf"],[3,"ngSubmit"],[4,"ngFor","ngForOf"],["type","submit"],[1,"horarios"],["type","time","placeholder","Hora de inicio",3,"ngModelChange","ngModel","name"],["type","time","placeholder","Hora de fin",3,"ngModelChange","ngModel","name"]],template:function(e,t){e&1&&(s(0,"app-listado-especialista",0),v("usuarioSeleccionado",function(r){return t.mostrarUsuario(r)}),a(),s(1,"h2"),c(2),a(),g(3,Xe,5,2,"div",1)(4,Ze,2,0,"p",1)),e&2&&(l(2),j("Asignar Disponibilidad para ",(t.usuarioSeleccionado==null?null:t.usuarioSeleccionado.nombre)||"Selecciona un especialista",""),l(),m("ngIf",t.usuarioSeleccionado),l(),m("ngIf",!t.usuarioSeleccionado))},dependencies:[V,G,K,W,Y,J,Ae,ye,Ee,Ce],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}.horarios[_ngcontent-%COMP%]{display:flex;gap:15px}input[type=time][_ngcontent-%COMP%]{width:48%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;box-sizing:border-box;background-color:#f1f1f1;transition:border-color .3s,background-color .3s}input[type=time][_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}']})};var O=re(me());function ei(n,i){if(n&1){let e=E();s(0,"div")(1,"input",1),v("change",function(o){_(e);let r=h();return C(r.onEspecialidadChange(o))}),a(),c(2),a()}if(n&2){let e=i.$implicit;l(),m("value",e.nombre),l(),j(" ",e.nombre,`
`)}}function ii(n,i){if(n&1){let e=E();s(0,"div")(1,"input",2),v("change",function(o){_(e);let r=h();return C(r.onEspecialistaChange(o))}),a(),c(2),a()}if(n&2){let e=i.$implicit;l(),m("value",e.uid),l(),j(" ",e.nombre,`
`)}}function ti(n,i){if(n&1){let e=E();s(0,"button",4),v("click",function(){_(e);let o=h().$implicit,r=h();return C(r.cancelarTurno(o))}),c(1," Cancelar Turno "),a()}}function oi(n,i){if(n&1&&(s(0,"tr")(1,"td"),c(2),a(),s(3,"td"),c(4),a(),s(5,"td"),c(6),a(),s(7,"td"),c(8),a(),s(9,"td"),c(10),a(),s(11,"td"),c(12),a(),s(13,"td"),c(14),a(),s(15,"td"),c(16),a(),s(17,"td"),g(18,ti,2,0,"button",3),a()()),n&2){let e=i.$implicit;l(2),b(e.dni),l(2),b(e.paciente),l(2),b(e.obraSocial),l(2),b(e.especialista_id),l(2),b(e.especialidad),l(2),b(e.fecha),l(2),he("",e.hora_inicio," - ",e.hora_fin,""),l(2),b(e.estado),l(2),m("ngIf",e.estado==="solicitado")}}var ie=class n{constructor(i,e,t){this.turnoService=i;this.especialidadService=e;this.especialistaService=t}especialidades=[];especialistas=[];horarios=[];ngOnInit(){this.cargarEspecialidades()}cargarEspecialidades(){return p(this,null,function*(){this.especialidades=yield this.especialidadService.getEspecialidades()})}onEspecialidadChange(i){return p(this,null,function*(){let t=i.target.value;if(t)try{this.especialistas=yield this.especialistaService.getEspecialistasPorEspecialidad(t)}catch{O.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.especialistas=[]})}onEspecialistaChange(i){return p(this,null,function*(){let t=i.target.value;if(console.log("id del especialista: ",t),t)try{this.horarios=yield this.turnoService.obtenerTurnosDisponiblesEspecialista(t),console.log("Horarios obtenidos:",this.horarios),this.horarios.sort((o,r)=>new Date(o.fecha).getTime()-new Date(r.fecha).getTime())}catch{O.default.fire("Error","No se pudieron cargar los turnos","error")}else this.horarios=[],console.log("no detecta el id del especialista  Horarios obtenidos:",this.horarios)})}cancelarTurno(i){return p(this,null,function*(){if(["Aceptado","Realizado","Rechazado"].includes(i.estado)){O.default.fire("Aviso","No se puede cancelar un turno aceptado, realizado o rechazado","info");return}let{isConfirmed:e,value:t}=yield O.default.fire({title:"\xBFEst\xE1s seguro de cancelar el turno?",text:"Por favor, ingresa el motivo de la cancelaci\xF3n",input:"textarea",inputPlaceholder:"Escribe aqu\xED el motivo...",inputAttributes:{"aria-label":"Motivo de cancelaci\xF3n"},confirmButtonText:"Cancelar turno",showCancelButton:!0,cancelButtonText:"Volver",inputValidator:o=>o?null:"El motivo es requerido para cancelar el turno"});if(e&&t)try{yield this.turnoService.cancelarTurno(i.id,t),O.default.fire("Cancelado","El turno ha sido cancelado con \xE9xito","success")}catch{O.default.fire("Error","No se pudo cancelar el turno","error")}})}static \u0275fac=function(e){return new(e||n)(f(M),f(Q),f(H))};static \u0275cmp=A({type:n,selectors:[["app-gestionar-turnos"]],decls:29,vars:3,consts:[[4,"ngFor","ngForOf"],["type","radio","name","especialidad",3,"change","value"],["type","radio","name","especialista",3,"change","value"],[3,"click",4,"ngIf"],[3,"click"]],template:function(e,t){e&1&&(s(0,"h2"),c(1,"Listado de Turnos"),a(),s(2,"label"),c(3,"Especialidad:"),a(),g(4,ei,3,2,"div",0),s(5,"label"),c(6,"Especialista:"),a(),g(7,ii,3,2,"div",0),s(8,"table")(9,"thead")(10,"tr")(11,"th"),c(12,"DNI"),a(),s(13,"th"),c(14,"Paciente"),a(),s(15,"th"),c(16,"Obra Social"),a(),s(17,"th"),c(18,"Especialista"),a(),s(19,"th"),c(20,"Especialidad"),a(),s(21,"th"),c(22,"Fecha"),a(),s(23,"th"),c(24,"Horario"),a(),s(25,"th"),c(26,"Estado"),a()()(),s(27,"tbody"),g(28,oi,19,10,"tr",0),a()()),e&2&&(l(4),m("ngForOf",t.especialidades),l(3),m("ngForOf",t.especialistas),l(21),m("ngForOf",t.horarios))},dependencies:[V,G],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}label[_ngcontent-%COMP%]{font-weight:700;color:#154360;margin-right:.5rem}select[_ngcontent-%COMP%]{padding:.5rem;border-radius:4px;border:1px solid #D5D8DC;margin-bottom:1rem;margin-right:1rem;outline:none;transition:border-color .3s ease}select[_ngcontent-%COMP%]:focus{border-color:#154360}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}button[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.9rem;border:none;border-radius:4px;color:#fff;cursor:pointer;transition:background-color .3s ease,transform .2s ease;width:100%}button.cancelar[_ngcontent-%COMP%]{background-color:#c0392b}button.cancelar[_ngcontent-%COMP%]:hover{background-color:#a93226;transform:scale(1.05)}td.estado[_ngcontent-%COMP%]{font-weight:700;color:#1e8449}td.estado.inhabilitado[_ngcontent-%COMP%]{color:#c0392b}']})};var ri=[{path:"solicitar-turno",component:X,canActivate:[Z]},{path:"gestionar-horarios",component:ee,canActivate:[pe]},{path:"gestionar-turnos",component:ie,canActivate:[pe]}],te=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=L({type:n});static \u0275inj=z({imports:[de.forChild(ri),de]})};var Re=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=L({type:n});static \u0275inj=z({imports:[le,te,Oe,Ve,le,De]})};export{Re as SeccionTurnosModule};
