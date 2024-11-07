import{a as Ee}from"./chunk-JAYMRRFR.js";import{a as Le,b as qe,c as Be}from"./chunk-P66W2FTI.js";import{a as te,b as k,c as ie,d as oe,e as Ae,f as ke,g as ne,h as Ve,i as $e,j as je,k as Ge,l as Re,m as He,n as Ue,o as ze,p as re,q as L}from"./chunk-KKPEPWNG.js";import{A as h,Aa as z,Ba as De,Ca as y,E as g,Ea as Fe,Fa as B,G as m,Ha as Ne,I as s,Ia as O,J as r,K as Z,L as x,M as v,N as b,O as he,P as c,Q as f,R as j,S as G,T as Ie,U as ge,V as be,W as ve,Z as Pe,a as C,aa as we,b as Te,ba as Me,d as Q,e as p,h as J,ka as R,l as N,la as H,m as K,ma as Oe,na as Se,o as M,p as A,q as X,qa as U,sa as _e,t as _,u as E,xa as ee,z as l,za as S}from"./chunk-2NKTPWVQ.js";var W=Q(re());var V=class a{constructor(t){this.firestore=t}getEspecialistasPorEspecialidad(t){return p(this,null,function*(){let e=S(this.firestore,"users"),n=(yield y(e)).docs.map(o=>C({id:o.id},o.data())).filter(o=>this.especialistaValido(o,t));return console.log("Especialistas filtrados:",n),n})}especialistaValido(t,e){return t.role==="especialista"&&t.especialidades.includes(e)}getPacientesUnicosPorEspecialidad(t,e){return p(this,null,function*(){let i=S(this.firestore,"Turnos"),n=yield y(i),o=new Set,d=[],u=n.docs.map(w=>{let Y=w.data();return C({id:w.id},Y)}).filter(w=>{let Y=w.especialista_id===t,ye=w.especialidad===e;return Y&&ye&&o.add(w.pacienteId),Y&&ye});console.log("Turnos solicitados:",u);let T=Array.from(o);return yield this.getPacientesPorIds(T)})}getPacientesUnicosPorEspecialista(t){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),i=yield y(e),n=new Set,o=[],d=i.docs.map(P=>{let w=P.data();return C({id:P.id},w)}).filter(P=>{let w=P.especialista_id===t;return w&&P.pacienteId&&n.add(P.pacienteId),w});console.log("Turnos solicitados:",d);let u=Array.from(n);return yield this.getPacientesPorIds(u)})}getPacientesPorIds(t){return p(this,null,function*(){let e=S(this.firestore,"users"),i=[];for(let n of t)if(n){let o=Fe(e,Ne("uid","==",n));(yield y(o)).forEach(u=>{let T=u.data();i.push(C({id:u.id},T))})}else console.warn("ID de paciente es undefined, omitiendo este ID.");return i})}getHorariosPorEspecialista(t){return p(this,null,function*(){let e=S(this.firestore,"horarios"),i=yield y(e),n=yield this.getTurnosPorEspecialista(t);return i.docs.map(o=>{let d=o.data();return C({id:o.id},d)}).filter(o=>o.especialistaId===t&&this.isWithinNext15Days(o.fecha)&&!this.isHorarioOcupado(o,n))})}getTurnosPorEspecialista(t){return p(this,null,function*(){let e=S(this.firestore,"turnos");return(yield y(e)).docs.map(n=>{let o=n.data();return C({id:n.id},o)}).filter(n=>n.especialistaId===t)})}isHorarioOcupado(t,e){let i=new Date(t.fecha),n=new Date(i);return n.setMinutes(n.getMinutes()+30),e.some(o=>{let d=new Date(o.fecha),u=new Date(d);return u.setMinutes(u.getMinutes()+30),d<n&&u>i})}isWithinNext15Days(t){let e=new Date(t),i=new Date,n=new Date;return n.setDate(i.getDate()+15),e>=i&&e<=n}static \u0275fac=function(e){return new(e||a)(M(ee))};static \u0275prov=N({token:a,factory:a.\u0275fac,providedIn:"root"})};var D=class a{constructor(t,e){this.firestore=t;this.authService=e}guardarDisponibilidad(t,e){return p(this,null,function*(){let i=z(S(this.firestore,"Disponibilidad"),t);yield B(i,{disponibilidad:e})})}guardarTurnos(t){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),i=t.map(n=>{let o=z(e);return B(o,n)});yield Promise.all(i)})}obtenerTurnos(){return p(this,null,function*(){let t=S(this.firestore,"Turnos"),i=(yield y(t)).docs;return console.log("Turnos disponibles:",i),i})}obtenerTurnosDisponibles(t){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),n=(yield y(e)).docs.map(o=>{let d=o.data();return C({id:o.id},d)}).filter(o=>{let d=o.especialista_id===t,u=o.estado==="disponible";return console.log(`Turno ID: ${o.id}, Especialista ID: ${o.especialista_id}, Estado: ${o.estado}, Coincide: ${d&&u}`),d&&u});return console.log("Turnos disponibles:",n),n})}obtenerTurnosDisponiblesEspecialista(t){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),n=(yield y(e)).docs.map(o=>{let d=o.data();return C({id:o.id},d)}).filter(o=>{let d=o.especialista_id===t;return console.log(`Turno ID: ${o.id}, Especialista ID: ${o.especialista_id}`),d});return console.log("Turnos solicitados:",n),n})}obtenerTurnosDisponiblesPaciente(t){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),n=(yield y(e)).docs.map(o=>{let d=o.data();return C({id:o.id},d)}).filter(o=>{let d=o.pacienteId===t;return console.log(`Turno ID: ${o.id}, Paciente ID: ${o.pacienteId}`),d});return console.log("Turnos solicitados:",n),n})}obtenerTurnosEspecialidad(t){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),n=(yield y(e)).docs.map(o=>{let d=o.data();return C({id:o.id},d)}).filter(o=>{let d=o.especialidad===t;return console.log(`Turno ID: ${o.id}, especialidad : ${o.especialidad}`),d});return console.log("Turnos solicitados:",n),n})}obtenerDisponibilidad(t){return p(this,null,function*(){let e=z(this.firestore,`Disponibilidad/${t}`),i=yield De(e);return i.exists()?i.data().disponibilidad:(console.log("No existe la disponibilidad para este especialista."),null)})}solicitarTurno(t,e){return p(this,null,function*(){let i=z(this.firestore,`Turnos/${t.horario}`);yield B(i,Te(C({},t),{estado:"solicitado",pacienteId:e}),{merge:!0})})}cancelarTurno(t,e){return p(this,null,function*(){let i=z(this.firestore,`Turnos/${t}`);yield B(i,{estado:"Cancelado",motivoCancelacion:e},{merge:!0})})}static \u0275fac=function(e){return new(e||a)(M(ee),M(O))};static \u0275prov=N({token:a,factory:a.\u0275fac,providedIn:"root"})};function Ze(a,t){if(a&1&&(s(0,"option",12),c(1),r()),a&2){let e=t.$implicit;m("value",e.nombre),l(),f(e.nombre)}}function et(a,t){if(a&1){let e=x();s(0,"option",13),v("nombreEspecialista",function(){let n=_(e).$implicit;return E(n)}),c(1),r()}if(a&2){let e=t.$implicit;m("value",e.uid),l(),f(e.nombre)}}function tt(a,t){if(a&1&&(s(0,"option",12),c(1),r()),a&2){let e=t.$implicit;m("value",e.id),l(),Ie("",e.fecha," - ",e.hora_inicio,"hs hasta ",e.hora_fin,"hs")}}function it(a,t){if(a&1&&(s(0,"div")(1,"label",14),c(2,"Paciente:"),r(),Z(3,"input",15),s(4,"label",16),c(5,"DNI:"),r(),Z(6,"input",17),s(7,"label",18),c(8,"Obra Social:"),r(),Z(9,"input",19),r()),a&2){let e=b();l(3),m("readonly",e.isAdmin),l(3),m("readonly",e.isAdmin),l(3),m("readonly",e.isAdmin)}}function ot(a,t){if(a&1){let e=x();s(0,"app-listado-paciente",20),v("usuarioSeleccionado",function(n){_(e);let o=b();return E(o.setPacienteData(n))}),r()}}var ce=class a{constructor(t,e,i,n,o,d){this.especialidadService=t;this.especialistaService=e;this.turnoService=i;this.authService=n;this.fb=o;this.router=d;this.turnoForm=this.fb.group({especialidad:["",k.required],especialista:["",k.required],horario:["",k.required],paciente:["",k.required],dni:["",[k.required,k.pattern(/^[0-9]{8,}$/)]],obraSocial:["",k.required]})}especialidades=[];especialistas=[];horarios=[];turnoForm;isAdmin=!1;isPaciente=!1;usuarioSeleccionado;obtenerIdPaciente;nombreEspecialista;ngOnInit(){this.cargarEspecialidades(),this.checkUserRole()}cargarEspecialidades(){return p(this,null,function*(){this.especialidades=yield this.especialidadService.getEspecialidades()})}checkUserRole(){return p(this,null,function*(){this.authService.getUser().subscribe(t=>{t&&(this.isAdmin=t.role==="administrador",this.isPaciente=t.role==="paciente")})})}setPacienteData(t){return p(this,null,function*(){this.usuarioSeleccionado=t,t&&this.turnoForm.patchValue({paciente:t.nombre,dni:t.dni,obraSocial:t.obraSocial,especialista:""})})}onEspecialidadChange(t){return p(this,null,function*(){let i=t.target.value;if(console.log("Nombre de especialidad seleccionada:",i),i)try{this.especialistas=yield this.especialistaService.getEspecialistasPorEspecialidad(i),console.log("Especialistas cargados:",this.especialistas)}catch(n){console.error("Error al cargar especialistas:",n),W.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.especialistas=[]})}onEspecialistaChange(t){return p(this,null,function*(){let i=t.target.value;if(console.log("ID del especialista seleccionado:",i),i)try{let n=this.especialistas.find(o=>o.uid===i);n&&(this.nombreEspecialista=`${n.nombre} ${n.apellido}`),this.horarios=yield this.turnoService.obtenerTurnosDisponibles(i),this.horarios.sort((o,d)=>{let u=new Date(o.fecha),T=new Date(d.fecha);return u.getTime()!==T.getTime()?u.getTime()-T.getTime():o.hora_inicio.localeCompare(d.hora_inicio)}),console.log("Turnos disponibles cargados:",this.horarios)}catch(n){console.error("Error al cargar turnos:",n),W.default.fire("Error","No se pudieron cargar los turnos","error")}else this.horarios=[]})}solicitarTurno(){return p(this,null,function*(){try{this.authService.getUser().subscribe(e=>{e.role==="paciente"?(this.obtenerIdPaciente=e.uid,this.turnoForm.patchValue({especialista:this.nombreEspecialista,paciente:e.nombre,dni:e.dni,obraSocial:e.obraSocial})):(this.obtenerIdPaciente=this.usuarioSeleccionado.uid,this.turnoForm.patchValue({especialista:this.nombreEspecialista}))});let t=this.turnoForm.value;yield this.turnoService.solicitarTurno(t,this.obtenerIdPaciente),W.default.fire("Registro exitoso","El turno ha sido solicitado correctamente","success"),this.router.navigate(["/bienvenida"])}catch(t){console.error("Error al solicitar el turno:",t),W.default.fire("Error","No se pudo solicitar el turno. Int\xE9ntalo nuevamente.","error")}})}static \u0275fac=function(e){return new(e||a)(h(L),h(V),h(D),h(O),h(He),h(U))};static \u0275cmp=A({type:a,selectors:[["app-solicitar-turno"]],decls:17,vars:6,consts:[[3,"ngSubmit","formGroup"],["for","especialidad"],["id","especialidad","formControlName","especialidad",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","especialista"],["id","especialista","formControlName","especialista",3,"change"],[3,"value","nombreEspecialista",4,"ngFor","ngForOf"],["for","horario"],["id","horario","formControlName","horario"],[4,"ngIf"],[3,"usuarioSeleccionado",4,"ngIf"],["type","submit"],[3,"value"],[3,"nombreEspecialista","value"],["for","paciente"],["id","paciente","formControlName","paciente","type","text",3,"readonly"],["for","dni"],["id","dni","formControlName","dni","type","text",3,"readonly"],["for","obraSocial"],["id","obraSocial","formControlName","obraSocial","type","text",3,"readonly"],[3,"usuarioSeleccionado"]],template:function(e,i){e&1&&(s(0,"form",0),v("ngSubmit",function(){return i.solicitarTurno()}),s(1,"label",1),c(2,"Especialidad:"),r(),s(3,"select",2),v("change",function(o){return i.onEspecialidadChange(o)}),g(4,Ze,2,2,"option",3),r(),s(5,"label",4),c(6,"Especialista:"),r(),s(7,"select",5),v("change",function(o){return i.onEspecialistaChange(o)}),g(8,et,2,2,"option",6),r(),s(9,"label",7),c(10,"Horario:"),r(),s(11,"select",8),g(12,tt,2,4,"option",3),r(),g(13,it,10,3,"div",9)(14,ot,1,0,"app-listado-paciente",10),s(15,"button",11),c(16,"Solicitar Turno"),r()()),e&2&&(m("formGroup",i.turnoForm),l(4),m("ngForOf",i.especialidades),l(4),m("ngForOf",i.especialistas),l(4),m("ngForOf",i.horarios),l(),m("ngIf",i.isAdmin),l(),m("ngIf",i.isAdmin))},dependencies:[R,H,ne,Ge,Re,te,je,ie,oe,Ve,$e,Le],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;margin-bottom:15px;box-sizing:border-box;transition:border-color .3s,background-color .3s;background-color:#f1f1f1}input[type=text][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}div[ngIf][_ngcontent-%COMP%]{color:#dc3545;font-size:.9em;margin-top:-10px;margin-bottom:10px}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}div[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ngIf[_ngcontent-%COMP%]{margin-bottom:20px}']})};var le=class a{constructor(t,e){this.authService=t;this.router=e}canActivate(t,e){return this.authService.getUser().pipe(J(i=>i&&(i.role==="administrador"||i.role==="paciente")?!0:(this.router.navigate(["/bienvenida"]),console.log("Acceso denegado: no es administrador ni paciente"),!1)))}static \u0275fac=function(e){return new(e||a)(M(O),M(U))};static \u0275prov=N({token:a,factory:a.\u0275fac,providedIn:"root"})};var I=Q(re());var nt=()=>["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"];function rt(a,t){if(a&1){let e=x();s(0,"div")(1,"label"),c(2),we(3,"titlecase"),r(),s(4,"div",5)(5,"input",6),ve("ngModelChange",function(n){let o=_(e).$implicit,d=b(2);return be(d.disponibilidadSemana[o].horaInicio,n)||(d.disponibilidadSemana[o].horaInicio=n),E(n)}),r(),s(6,"input",7),ve("ngModelChange",function(n){let o=_(e).$implicit,d=b(2);return be(d.disponibilidadSemana[o].horaFin,n)||(d.disponibilidadSemana[o].horaFin=n),E(n)}),r()()()}if(a&2){let e=t.$implicit,i=b(2);l(2),f(Me(3,7,e)),l(3),he("name","",e,"HoraInicio"),ge("ngModel",i.disponibilidadSemana[e].horaInicio),l(),he("name","",e,"HoraFin"),ge("ngModel",i.disponibilidadSemana[e].horaFin)}}function at(a,t){if(a&1){let e=x();s(0,"div")(1,"form",2),v("ngSubmit",function(){_(e);let n=b();return E(n.guardarDisponibilidad())}),g(2,rt,7,9,"div",3),s(3,"button",4),c(4,"Guardar Disponibilidad"),r()()()}a&2&&(l(2),m("ngForOf",Pe(1,nt)))}function st(a,t){a&1&&(s(0,"p"),c(1,"Selecciona un especialista para asignar disponibilidad."),r())}var de=class a{constructor(t){this.turnoService=t}usuarioSeleccionado=null;disponibilidadSemana={lunes:{horaInicio:"",horaFin:""},martes:{horaInicio:"",horaFin:""},mi\u00E9rcoles:{horaInicio:"",horaFin:""},jueves:{horaInicio:"",horaFin:""},viernes:{horaInicio:"",horaFin:""},s\u00E1bado:{horaInicio:"",horaFin:""},domingo:{horaInicio:"",horaFin:""}};horariosClinica={lunes:{apertura:"08:00",cierre:"19:00"},martes:{apertura:"08:00",cierre:"19:00"},mi\u00E9rcoles:{apertura:"08:00",cierre:"19:00"},jueves:{apertura:"08:00",cierre:"19:00"},viernes:{apertura:"08:00",cierre:"19:00"},s\u00E1bado:{apertura:"08:00",cierre:"14:00"},domingo:{apertura:null,cierre:null}};mostrarUsuario(t){this.usuarioSeleccionado=t}esHorarioValido(t){let e=parseInt(t.split(":")[1],10);return e===0||e===30}guardarDisponibilidad(){return p(this,null,function*(){if(!this.usuarioSeleccionado){I.default.fire("Error","Por favor, selecciona un especialista.","error");return}for(let t in this.disponibilidadSemana){let e=this.disponibilidadSemana[t],i=this.horariosClinica[t];if(e.horaInicio&&!this.esHorarioValido(e.horaInicio)||e.horaFin&&!this.esHorarioValido(e.horaFin)){I.default.fire("Error",`Los horarios de ${t} deben ser en intervalos de media hora (ej. 08:00 o 08:30).`,"error");return}if(i.apertura&&i.cierre){if(e.horaInicio<i.apertura||e.horaInicio>i.cierre||e.horaFin<i.apertura||e.horaFin>i.cierre){I.default.fire("Error",`El horario de ${t} debe estar entre ${i.apertura} y ${i.cierre}.`,"error");return}if(e.horaInicio>=e.horaFin){I.default.fire("Error",`En ${t}, la hora de inicio debe ser anterior a la hora de fin.`,"error");return}}else if(e.horaInicio||e.horaFin){I.default.fire("Error",`El d\xEDa ${t} est\xE1 cerrado, no debe haber horarios de disponibilidad.`,"error");return}}try{yield this.turnoService.guardarDisponibilidad(this.usuarioSeleccionado.uid,this.disponibilidadSemana),this.generarTurnosProximos15Dias(),I.default.fire("\xC9xito","Disponibilidad guardada correctamente.","success")}catch(t){console.error("Error al guardar la disponibilidad:",t),I.default.fire("Error","No se pudo guardar la disponibilidad.","error")}})}generarTurnosProximos15Dias(){return p(this,null,function*(){if(console.log("entramos a la creacion de turnos"),!this.usuarioSeleccionado){I.default.fire("Error","Por favor, selecciona un especialista.","error");return}let t=yield this.turnoService.obtenerDisponibilidad(this.usuarioSeleccionado.uid);if(!t){I.default.fire("Error","No se encontr\xF3 disponibilidad para el especialista seleccionado.","error");return}let e=[],i=new Date;for(let n=0;n<15;n++){let o=new Date(i);o.setDate(i.getDate()+n);let d=this.obtenerNombreDia(o);if(t[d]){let u=t[d];if(u.horaInicio&&u.horaFin){let T=u.horaInicio;for(;T<u.horaFin;){let P=this.sumarMinutos(T,30);P<=u.horaFin&&e.push({especialista_id:this.usuarioSeleccionado.uid,fecha:o.toISOString().split("T")[0],hora_inicio:T,hora_fin:P,estado:"disponible"}),T=P}}}}try{yield this.turnoService.guardarTurnos(e),I.default.fire("\xC9xito","Turnos generados para los pr\xF3ximos 15 d\xEDas.","success")}catch(n){console.error("Error al generar los turnos:",n),I.default.fire("Error","No se pudieron generar los turnos.","error")}})}obtenerNombreDia(t){return["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"][t.getDay()]}sumarMinutos(t,e){let[i,n]=t.split(":").map(Number),o=new Date;o.setHours(i,n+e);let d=String(o.getHours()).padStart(2,"0"),u=String(o.getMinutes()).padStart(2,"0");return`${d}:${u}`}static \u0275fac=function(e){return new(e||a)(h(D))};static \u0275cmp=A({type:a,selectors:[["app-gestion-horarios"]],decls:5,vars:3,consts:[[3,"usuarioSeleccionado"],[4,"ngIf"],[3,"ngSubmit"],[4,"ngFor","ngForOf"],["type","submit"],[1,"horarios"],["type","time","placeholder","Hora de inicio",3,"ngModelChange","ngModel","name"],["type","time","placeholder","Hora de fin",3,"ngModelChange","ngModel","name"]],template:function(e,i){e&1&&(s(0,"app-listado-especialista",0),v("usuarioSeleccionado",function(o){return i.mostrarUsuario(o)}),r(),s(1,"h2"),c(2),r(),g(3,at,5,2,"div",1)(4,st,2,0,"p",1)),e&2&&(l(2),j("Asignar Disponibilidad para ",(i.usuarioSeleccionado==null?null:i.usuarioSeleccionado.nombre)||"Selecciona un especialista",""),l(),m("ngIf",i.usuarioSeleccionado),l(),m("ngIf",!i.usuarioSeleccionado))},dependencies:[R,H,ne,te,ie,oe,qe,ke,Ae,Oe],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}.horarios[_ngcontent-%COMP%]{display:flex;gap:15px}input[type=time][_ngcontent-%COMP%]{width:48%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;box-sizing:border-box;background-color:#f1f1f1;transition:border-color .3s,background-color .3s}input[type=time][_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}']})};var $=Q(re());function ct(a,t){if(a&1){let e=x();s(0,"div")(1,"input",1),v("change",function(n){_(e);let o=b();return E(o.onEspecialidadChange(n))}),r(),c(2),r()}if(a&2){let e=t.$implicit;l(),m("value",e.nombre),l(),j(" ",e.nombre,`
`)}}function lt(a,t){if(a&1){let e=x();s(0,"div")(1,"input",2),v("change",function(n){let o=_(e).$implicit,d=b();return E(d.onEspecialistaChange(n,o))}),r(),c(2),r()}if(a&2){let e=t.$implicit;l(),m("value",e.uid),l(),G(" ",e.nombre," ",e.apellido,`
`)}}function dt(a,t){if(a&1){let e=x();s(0,"button",5),v("click",function(){_(e);let n=b().$implicit,o=b();return E(o.cancelarTurno(n))}),c(1," Cancelar Turno "),r()}}function pt(a,t){a&1&&(s(0,"button",6),c(1," no acciones "),r())}function mt(a,t){if(a&1&&(s(0,"tr")(1,"td"),c(2),r(),s(3,"td"),c(4),r(),s(5,"td"),c(6),r(),s(7,"td"),c(8),r(),s(9,"td"),c(10),r(),s(11,"td"),c(12),r(),s(13,"td"),c(14),r(),s(15,"td"),c(16),r(),s(17,"td"),g(18,dt,2,0,"button",3)(19,pt,2,0,"button",4),r()()),a&2){let e=t.$implicit,i=b();l(2),f(e.dni),l(2),f(e.paciente),l(2),f(e.obraSocial),l(2),f(i.nombreEspecialista),l(2),f(e.especialidad),l(2),f(e.fecha),l(2),G("",e.hora_inicio," - ",e.hora_fin,""),l(2),f(e.estado),l(2),m("ngIf",e.estado==="solicitado"),l(),m("ngIf",e.estado!=="solicitado")}}var pe=class a{constructor(t,e,i){this.turnoService=t;this.especialidadService=e;this.especialistaService=i}especialidades=[];especialistas=[];horarios=[];nombreEspecialista;especialidadSeleccionada="";ngOnInit(){this.cargarEspecialidades()}cargarEspecialidades(){return p(this,null,function*(){this.especialidades=yield this.especialidadService.getEspecialidades()})}onEspecialidadChange(t){return p(this,null,function*(){let e=t.target;if(this.especialidadSeleccionada=e.value,this.especialidadSeleccionada)try{this.especialistas=yield this.especialistaService.getEspecialistasPorEspecialidad(this.especialidadSeleccionada),this.horarios=[]}catch{$.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.especialistas=[],this.horarios=[]})}onEspecialistaChange(t,e){return p(this,null,function*(){let n=t.target.value;if(n){this.nombreEspecialista=`${e.nombre} ${e.apellido}`;try{let o=yield this.turnoService.obtenerTurnosDisponiblesEspecialista(n);this.horarios=o.filter(d=>d.especialidad===this.especialidadSeleccionada),this.horarios.sort((d,u)=>new Date(d.fecha).getTime()-new Date(u.fecha).getTime())}catch{$.default.fire("Error","No se pudieron cargar los turnos","error")}}else this.horarios=[]})}cancelarTurno(t){return p(this,null,function*(){if(["Aceptado","Realizado","Rechazado"].includes(t.estado)){$.default.fire("Aviso","No se puede cancelar un turno aceptado, realizado o rechazado","info");return}let{isConfirmed:e,value:i}=yield $.default.fire({title:"\xBFEst\xE1s seguro de cancelar el turno?",text:"Por favor, ingresa el motivo de la cancelaci\xF3n",input:"textarea",inputPlaceholder:"Escribe aqu\xED el motivo...",inputAttributes:{"aria-label":"Motivo de cancelaci\xF3n"},confirmButtonText:"Cancelar turno",showCancelButton:!0,cancelButtonText:"Volver",inputValidator:n=>n?null:"El motivo es requerido para cancelar el turno"});if(e&&i)try{yield this.turnoService.cancelarTurno(t.id,i),$.default.fire("Cancelado","El turno ha sido cancelado con \xE9xito","success"),yield this.onEspecialistaChange({target:{value:t.especialistaId}},{nombre:t.nombreEspecialista,apellido:t.apellidoEspecialista})}catch{$.default.fire("Error","No se pudo cancelar el turno","error")}})}static \u0275fac=function(e){return new(e||a)(h(D),h(L),h(V))};static \u0275cmp=A({type:a,selectors:[["app-gestionar-turnos"]],decls:31,vars:3,consts:[[4,"ngFor","ngForOf"],["type","radio","name","especialidad",3,"change","value"],["type","radio","name","especialista",3,"change","value"],["class","cancelar",3,"click",4,"ngIf"],["class","no-accion","disabled","",4,"ngIf"],[1,"cancelar",3,"click"],["disabled","",1,"no-accion"]],template:function(e,i){e&1&&(s(0,"h2"),c(1,"Listado de Turnos"),r(),s(2,"label"),c(3,"Especialidad:"),r(),g(4,ct,3,2,"div",0),s(5,"label"),c(6,"Especialista:"),r(),g(7,lt,3,3,"div",0),s(8,"table")(9,"thead")(10,"tr")(11,"th"),c(12,"DNI"),r(),s(13,"th"),c(14,"Paciente"),r(),s(15,"th"),c(16,"Obra Social"),r(),s(17,"th"),c(18,"Especialista"),r(),s(19,"th"),c(20,"Especialidad"),r(),s(21,"th"),c(22,"Fecha"),r(),s(23,"th"),c(24,"Horario"),r(),s(25,"th"),c(26,"Estado"),r(),s(27,"th"),c(28,"Acciones"),r()()(),s(29,"tbody"),g(30,mt,20,11,"tr",0),r()()),e&2&&(l(4),m("ngForOf",i.especialidades),l(3),m("ngForOf",i.especialistas),l(23),m("ngForOf",i.horarios))},dependencies:[R,H],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}label[_ngcontent-%COMP%]{font-weight:700;color:#154360;margin-right:.5rem}select[_ngcontent-%COMP%]{padding:.5rem;border-radius:4px;border:1px solid #D5D8DC;margin-bottom:1rem;margin-right:1rem;outline:none;transition:border-color .3s ease}select[_ngcontent-%COMP%]:focus{border-color:#154360}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}button[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.9rem;border:none;border-radius:4px;color:#fff;cursor:pointer;transition:background-color .3s ease,transform .2s ease;width:100%}button.no-accion[_ngcontent-%COMP%]{background-color:#b0e915}button.cancelar[_ngcontent-%COMP%]{background-color:#c0392b}button.cancelar[_ngcontent-%COMP%]:hover{background-color:#a93226;transform:scale(1.05)}td.estado[_ngcontent-%COMP%]{font-weight:700;color:#1e8449}td.estado.inhabilitado[_ngcontent-%COMP%]{color:#c0392b}']})};var q=Q(re());function ut(a,t){if(a&1){let e=x();s(0,"div")(1,"input",1),v("change",function(n){_(e);let o=b();return E(o.onEspecialidadChange(n))}),r(),c(2),r()}if(a&2){let e=t.$implicit;l(),m("value",e.nombre),l(),j(" ",e.nombre,`
`)}}function ft(a,t){if(a&1){let e=x();s(0,"div")(1,"input",2),v("change",function(n){let o=_(e).$implicit,d=b();return E(d.onPacienteChange(n,o))}),r(),c(2),r()}if(a&2){let e=t.$implicit;l(),m("value",e.uid),l(),G(" ",e.nombre," ",e.apellido,`
`)}}function ht(a,t){if(a&1&&(s(0,"tr")(1,"td"),c(2),r(),s(3,"td"),c(4),r(),s(5,"td"),c(6),r(),s(7,"td"),c(8),r(),s(9,"td"),c(10),r(),s(11,"td"),c(12),r(),s(13,"td"),c(14),r()()),a&2){let e=t.$implicit;l(2),f(e.dni),l(2),f(e.paciente),l(2),f(e.obraSocial),l(2),f(e.especialidad),l(2),f(e.fecha),l(2),G("",e.hora_inicio," - ",e.hora_fin,""),l(2),f(e.estado)}}var me=class a{constructor(t,e,i,n){this.turnoService=t;this.especialidadService=e;this.especialistaService=i;this.authenticationService=n}especialidades=[];pacientes=[];horarios=[];nombrePaciente="";especialidadSeleccionada="";especialistaIniciado;pacienteSeleccionadoId="";ngOnInit(){return p(this,null,function*(){this.authenticationService.getUser().subscribe(t=>{t?(this.especialistaIniciado=t,this.cargarPacientes(t.uid),this.cargarEspecialidades()):q.default.fire("Error","No se encontr\xF3 el usuario","error")})})}cargarPacientes(t){return p(this,null,function*(){try{this.pacientes=yield this.especialistaService.getPacientesUnicosPorEspecialista(t),console.log("Pacientes cargados:",this.pacientes)}catch(e){console.error("Error cargando pacientes:",e),q.default.fire("Error","No se pudieron cargar los pacientes","error")}})}cargarEspecialidades(){this.especialistaIniciado&&this.especialistaIniciado.especialidades?(this.especialidades=this.especialistaIniciado.especialidades,console.log("Especialidades cargadas:",this.especialidades)):(this.especialidades=[],q.default.fire("Error","No se encontraron especialidades para este especialista","error"))}onEspecialidadChange(t){return p(this,null,function*(){let e=t.target;if(this.especialidadSeleccionada=e.value,this.especialidadSeleccionada)try{this.pacientes=yield this.especialistaService.getPacientesUnicosPorEspecialidad(this.especialistaIniciado.uid,this.especialidadSeleccionada),this.horarios=[]}catch{q.default.fire("Error","No se pudieron cargar los pacientes","error")}else this.pacientes=[],this.horarios=[]})}onPacienteChange(t,e){return p(this,null,function*(){let i=t.target;if(this.pacienteSeleccionadoId=i.value,this.pacienteSeleccionadoId){this.nombrePaciente=`${e.nombre} ${e.apellido}`;try{let n=yield this.turnoService.obtenerTurnosDisponiblesPaciente(this.pacienteSeleccionadoId);this.horarios=n.filter(o=>o.especialidad===this.especialidadSeleccionada),this.horarios.sort((o,d)=>new Date(o.fecha).getTime()-new Date(d.fecha).getTime())}catch{q.default.fire("Error","No se pudieron cargar los turnos","error")}}else this.horarios=[]})}static \u0275fac=function(e){return new(e||a)(h(D),h(L),h(V),h(O))};static \u0275cmp=A({type:a,selectors:[["app-turnos-especialista"]],decls:31,vars:3,consts:[[4,"ngFor","ngForOf"],["type","radio","name","especialidad",3,"change","value"],["type","radio","name","paciente",3,"change","value"]],template:function(e,i){e&1&&(s(0,"h2"),c(1,"Listado de Turnos"),r(),s(2,"label"),c(3,"Especialidad:"),r(),g(4,ut,3,2,"div",0),s(5,"label"),c(6,"Pacientes:"),r(),g(7,ft,3,3,"div",0),s(8,"table")(9,"thead")(10,"tr")(11,"th"),c(12,"DNI"),r(),s(13,"th"),c(14,"Paciente"),r(),s(15,"th"),c(16,"Obra Social"),r(),s(17,"th"),c(18,"Especialista"),r(),s(19,"th"),c(20,"Especialidad"),r(),s(21,"th"),c(22,"Fecha"),r(),s(23,"th"),c(24,"Horario"),r(),s(25,"th"),c(26,"Estado"),r(),s(27,"th"),c(28,"Acciones"),r()()(),s(29,"tbody"),g(30,ht,15,8,"tr",0),r()()),e&2&&(l(4),m("ngForOf",i.especialidades),l(3),m("ngForOf",i.pacientes),l(23),m("ngForOf",i.horarios))},styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}label[_ngcontent-%COMP%]{font-weight:700;color:#154360;margin-right:.5rem}select[_ngcontent-%COMP%]{padding:.5rem;border-radius:4px;border:1px solid #D5D8DC;margin-bottom:1rem;margin-right:1rem;outline:none;transition:border-color .3s ease}select[_ngcontent-%COMP%]:focus{border-color:#154360}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}button[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.9rem;border:none;border-radius:4px;color:#fff;cursor:pointer;transition:background-color .3s ease,transform .2s ease;width:100%}button.no-accion[_ngcontent-%COMP%]{background-color:#b0e915}button.cancelar[_ngcontent-%COMP%]{background-color:#c0392b}button.cancelar[_ngcontent-%COMP%]:hover{background-color:#a93226;transform:scale(1.05)}td.estado[_ngcontent-%COMP%]{font-weight:700;color:#1e8449}td.estado.inhabilitado[_ngcontent-%COMP%]{color:#c0392b}']})};var ue=class a{constructor(t,e){this.authService=t;this.router=e}canActivate(t,e){return this.authService.getUser().pipe(J(i=>i&&i.role==="especialista"?!0:(this.router.navigate(["/bienvenida"]),console.log("no es especialista verifica las cosas bien"),!1)))}static \u0275fac=function(e){return new(e||a)(M(O),M(U))};static \u0275prov=N({token:a,factory:a.\u0275fac,providedIn:"root"})};var gt=[{path:"solicitar-turno",component:ce,canActivate:[le]},{path:"gestionar-horarios",component:de,canActivate:[Ee]},{path:"gestionar-turnos",component:pe,canActivate:[Ee]},{path:"turnos-especialista",component:me,canActivate:[ue]}],fe=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[_e.forChild(gt),_e]})};var Je=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[Se,fe,ze,Be,Se,Ue]})};export{Je as SeccionTurnosModule};
