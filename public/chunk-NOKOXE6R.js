import{a as Ee}from"./chunk-JAYMRRFR.js";import{a as ze,b as qe,c as Be}from"./chunk-P66W2FTI.js";import{a as ie,b as V,c as te,d as oe,e as Ae,f as Ve,g as ne,h as $e,i as je,j as ke,k as Ge,l as Re,m as He,n as Ue,o as Le,p as re,q as z}from"./chunk-KKPEPWNG.js";import{A as h,Aa as L,Ba as Fe,Ca as y,E as g,Ea as Oe,Fa as q,G as m,Ha as Ne,I as s,Ia as D,J as r,K as Z,L as C,M as v,N as b,O as he,P as c,Q as f,R as k,S as G,T as Ie,U as ge,V as be,W as ve,Z as we,a as x,aa as Pe,b as Te,ba as Me,d as Q,e as p,h as J,ka as R,l as N,la as H,m as K,ma as De,na as Se,o as P,p as A,q as X,qa as U,sa as _e,t as _,u as E,xa as ee,z as l,za as S}from"./chunk-2NKTPWVQ.js";var B=Q(re());var $=class a{constructor(i){this.firestore=i}getEspecialistasPorEspecialidad(i){return p(this,null,function*(){let e=S(this.firestore,"users"),n=(yield y(e)).docs.map(o=>x({id:o.id},o.data())).filter(o=>this.especialistaValido(o,i));return console.log("Especialistas filtrados:",n),n})}especialistaValido(i,e){return i.role==="especialista"&&i.especialidades.includes(e)}getPacientesUnicosPorEspecialidad(i,e){return p(this,null,function*(){let t=S(this.firestore,"Turnos"),n=yield y(t),o=new Set,d=[],u=n.docs.map(w=>{let Y=w.data();return x({id:w.id},Y)}).filter(w=>{let Y=w.especialista_id===i,ye=w.especialidad===e;return Y&&ye&&o.add(w.pacienteId),Y&&ye});console.log("Turnos solicitados:",u);let T=Array.from(o);return yield this.getPacientesPorIds(T)})}getPacientesUnicosPorEspecialista(i){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),t=yield y(e),n=new Set,o=[],d=t.docs.map(M=>{let w=M.data();return x({id:M.id},w)}).filter(M=>{let w=M.especialista_id===i;return w&&n.add(M.pacienteId),w});console.log("Turnos solicitados:",d);let u=Array.from(n);return yield this.getPacientesPorIds(u)})}getPacientesPorIds(i){return p(this,null,function*(){let e=S(this.firestore,"users"),t=[];for(let n of i){let o=Oe(e,Ne("uid","==",n));(yield y(o)).forEach(u=>{let T=u.data();t.push(x({id:u.id},T))})}return t})}getHorariosPorEspecialista(i){return p(this,null,function*(){let e=S(this.firestore,"horarios"),t=yield y(e),n=yield this.getTurnosPorEspecialista(i);return t.docs.map(o=>{let d=o.data();return x({id:o.id},d)}).filter(o=>o.especialistaId===i&&this.isWithinNext15Days(o.fecha)&&!this.isHorarioOcupado(o,n))})}getTurnosPorEspecialista(i){return p(this,null,function*(){let e=S(this.firestore,"turnos");return(yield y(e)).docs.map(n=>{let o=n.data();return x({id:n.id},o)}).filter(n=>n.especialistaId===i)})}isHorarioOcupado(i,e){let t=new Date(i.fecha),n=new Date(t);return n.setMinutes(n.getMinutes()+30),e.some(o=>{let d=new Date(o.fecha),u=new Date(d);return u.setMinutes(u.getMinutes()+30),d<n&&u>t})}isWithinNext15Days(i){let e=new Date(i),t=new Date,n=new Date;return n.setDate(t.getDate()+15),e>=t&&e<=n}static \u0275fac=function(e){return new(e||a)(P(ee))};static \u0275prov=N({token:a,factory:a.\u0275fac,providedIn:"root"})};var F=class a{constructor(i,e){this.firestore=i;this.authService=e}guardarDisponibilidad(i,e){return p(this,null,function*(){let t=L(S(this.firestore,"Disponibilidad"),i);yield q(t,{disponibilidad:e})})}guardarTurnos(i){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),t=i.map(n=>{let o=L(e);return q(o,n)});yield Promise.all(t)})}obtenerTurnos(){return p(this,null,function*(){let i=S(this.firestore,"Turnos"),t=(yield y(i)).docs;return console.log("Turnos disponibles:",t),t})}obtenerTurnosDisponibles(i){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),n=(yield y(e)).docs.map(o=>{let d=o.data();return x({id:o.id},d)}).filter(o=>{let d=o.especialista_id===i,u=o.estado==="disponible";return console.log(`Turno ID: ${o.id}, Especialista ID: ${o.especialista_id}, Estado: ${o.estado}, Coincide: ${d&&u}`),d&&u});return console.log("Turnos disponibles:",n),n})}obtenerTurnosDisponiblesEspecialista(i){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),n=(yield y(e)).docs.map(o=>{let d=o.data();return x({id:o.id},d)}).filter(o=>{let d=o.especialista_id===i;return console.log(`Turno ID: ${o.id}, Especialista ID: ${o.especialista_id}`),d});return console.log("Turnos solicitados:",n),n})}obtenerTurnosDisponiblesPaciente(i){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),n=(yield y(e)).docs.map(o=>{let d=o.data();return x({id:o.id},d)}).filter(o=>{let d=o.pacienteId===i;return console.log(`Turno ID: ${o.id}, Paciente ID: ${o.pacienteId}`),d});return console.log("Turnos solicitados:",n),n})}obtenerTurnosEspecialidad(i){return p(this,null,function*(){let e=S(this.firestore,"Turnos"),n=(yield y(e)).docs.map(o=>{let d=o.data();return x({id:o.id},d)}).filter(o=>{let d=o.especialidad===i;return console.log(`Turno ID: ${o.id}, especialidad : ${o.especialidad}`),d});return console.log("Turnos solicitados:",n),n})}obtenerDisponibilidad(i){return p(this,null,function*(){let e=L(this.firestore,`Disponibilidad/${i}`),t=yield Fe(e);return t.exists()?t.data().disponibilidad:(console.log("No existe la disponibilidad para este especialista."),null)})}solicitarTurno(i,e){return p(this,null,function*(){let t=L(this.firestore,`Turnos/${i.horario}`);yield q(t,Te(x({},i),{estado:"solicitado",pacienteId:e}),{merge:!0})})}cancelarTurno(i,e){return p(this,null,function*(){let t=L(this.firestore,`Turnos/${i}`);yield q(t,{estado:"Cancelado",motivoCancelacion:e},{merge:!0})})}static \u0275fac=function(e){return new(e||a)(P(ee),P(D))};static \u0275prov=N({token:a,factory:a.\u0275fac,providedIn:"root"})};function Ze(a,i){if(a&1&&(s(0,"option",12),c(1),r()),a&2){let e=i.$implicit;m("value",e.nombre),l(),f(e.nombre)}}function ei(a,i){if(a&1){let e=C();s(0,"option",13),v("nombreEspecialista",function(){let n=_(e).$implicit;return E(n)}),c(1),r()}if(a&2){let e=i.$implicit;m("value",e.uid),l(),f(e.nombre)}}function ii(a,i){if(a&1&&(s(0,"option",12),c(1),r()),a&2){let e=i.$implicit;m("value",e.id),l(),Ie("",e.fecha," - ",e.hora_inicio,"hs hasta ",e.hora_fin,"hs")}}function ti(a,i){if(a&1&&(s(0,"div")(1,"label",14),c(2,"Paciente:"),r(),Z(3,"input",15),s(4,"label",16),c(5,"DNI:"),r(),Z(6,"input",17),s(7,"label",18),c(8,"Obra Social:"),r(),Z(9,"input",19),r()),a&2){let e=b();l(3),m("readonly",e.isAdmin),l(3),m("readonly",e.isAdmin),l(3),m("readonly",e.isAdmin)}}function oi(a,i){if(a&1){let e=C();s(0,"app-listado-paciente",20),v("usuarioSeleccionado",function(n){_(e);let o=b();return E(o.setPacienteData(n))}),r()}}var ce=class a{constructor(i,e,t,n,o,d){this.especialidadService=i;this.especialistaService=e;this.turnoService=t;this.authService=n;this.fb=o;this.router=d;this.turnoForm=this.fb.group({especialidad:["",V.required],especialista:["",V.required],horario:["",V.required],paciente:["",V.required],dni:["",[V.required,V.pattern(/^[0-9]{8,}$/)]],obraSocial:["",V.required]})}especialidades=[];especialistas=[];horarios=[];turnoForm;isAdmin=!1;isPaciente=!1;usuarioSeleccionado;obtenerIdPaciente;nombreEspecialista;ngOnInit(){this.cargarEspecialidades(),this.checkUserRole()}cargarEspecialidades(){return p(this,null,function*(){this.especialidades=yield this.especialidadService.getEspecialidades()})}checkUserRole(){return p(this,null,function*(){this.authService.getUser().subscribe(i=>{i&&(this.isAdmin=i.role==="administrador",this.isPaciente=i.role==="paciente")})})}setPacienteData(i){return p(this,null,function*(){this.usuarioSeleccionado=i,i&&this.turnoForm.patchValue({paciente:i.nombre,dni:i.dni,obraSocial:i.obraSocial,especialista:""})})}onEspecialidadChange(i){return p(this,null,function*(){let t=i.target.value;if(console.log("Nombre de especialidad seleccionada:",t),t)try{this.especialistas=yield this.especialistaService.getEspecialistasPorEspecialidad(t),console.log("Especialistas cargados:",this.especialistas)}catch(n){console.error("Error al cargar especialistas:",n),B.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.especialistas=[]})}onEspecialistaChange(i){return p(this,null,function*(){let t=i.target.value;if(console.log("ID del especialista seleccionado:",t),t)try{let n=this.especialistas.find(o=>o.uid===t);n&&(this.nombreEspecialista=`${n.nombre} ${n.apellido}`),this.horarios=yield this.turnoService.obtenerTurnosDisponibles(t),this.horarios.sort((o,d)=>{let u=new Date(o.fecha),T=new Date(d.fecha);return u.getTime()!==T.getTime()?u.getTime()-T.getTime():o.hora_inicio.localeCompare(d.hora_inicio)}),console.log("Turnos disponibles cargados:",this.horarios)}catch(n){console.error("Error al cargar turnos:",n),B.default.fire("Error","No se pudieron cargar los turnos","error")}else this.horarios=[]})}solicitarTurno(){return p(this,null,function*(){try{this.authService.getUser().subscribe(e=>{e.role==="paciente"?(this.obtenerIdPaciente=e.uid,this.turnoForm.patchValue({especialista:this.nombreEspecialista,paciente:e.nombre,dni:e.dni,obraSocial:e.obraSocial})):(this.obtenerIdPaciente=this.usuarioSeleccionado.uid,this.turnoForm.patchValue({especialista:this.nombreEspecialista}))});let i=this.turnoForm.value;yield this.turnoService.solicitarTurno(i,this.obtenerIdPaciente),B.default.fire("Registro exitoso","El turno ha sido solicitado correctamente","success"),this.router.navigate(["/bienvenida"])}catch(i){console.error("Error al solicitar el turno:",i),B.default.fire("Error","No se pudo solicitar el turno. Int\xE9ntalo nuevamente.","error")}})}static \u0275fac=function(e){return new(e||a)(h(z),h($),h(F),h(D),h(He),h(U))};static \u0275cmp=A({type:a,selectors:[["app-solicitar-turno"]],decls:17,vars:6,consts:[[3,"ngSubmit","formGroup"],["for","especialidad"],["id","especialidad","formControlName","especialidad",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","especialista"],["id","especialista","formControlName","especialista",3,"change"],[3,"value","nombreEspecialista",4,"ngFor","ngForOf"],["for","horario"],["id","horario","formControlName","horario"],[4,"ngIf"],[3,"usuarioSeleccionado",4,"ngIf"],["type","submit"],[3,"value"],[3,"nombreEspecialista","value"],["for","paciente"],["id","paciente","formControlName","paciente","type","text",3,"readonly"],["for","dni"],["id","dni","formControlName","dni","type","text",3,"readonly"],["for","obraSocial"],["id","obraSocial","formControlName","obraSocial","type","text",3,"readonly"],[3,"usuarioSeleccionado"]],template:function(e,t){e&1&&(s(0,"form",0),v("ngSubmit",function(){return t.solicitarTurno()}),s(1,"label",1),c(2,"Especialidad:"),r(),s(3,"select",2),v("change",function(o){return t.onEspecialidadChange(o)}),g(4,Ze,2,2,"option",3),r(),s(5,"label",4),c(6,"Especialista:"),r(),s(7,"select",5),v("change",function(o){return t.onEspecialistaChange(o)}),g(8,ei,2,2,"option",6),r(),s(9,"label",7),c(10,"Horario:"),r(),s(11,"select",8),g(12,ii,2,4,"option",3),r(),g(13,ti,10,3,"div",9)(14,oi,1,0,"app-listado-paciente",10),s(15,"button",11),c(16,"Solicitar Turno"),r()()),e&2&&(m("formGroup",t.turnoForm),l(4),m("ngForOf",t.especialidades),l(4),m("ngForOf",t.especialistas),l(4),m("ngForOf",t.horarios),l(),m("ngIf",t.isAdmin),l(),m("ngIf",t.isAdmin))},dependencies:[R,H,ne,Ge,Re,ie,ke,te,oe,$e,je,ze],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;margin-bottom:15px;box-sizing:border-box;transition:border-color .3s,background-color .3s;background-color:#f1f1f1}input[type=text][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}div[ngIf][_ngcontent-%COMP%]{color:#dc3545;font-size:.9em;margin-top:-10px;margin-bottom:10px}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}div[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ngIf[_ngcontent-%COMP%]{margin-bottom:20px}']})};var le=class a{constructor(i,e){this.authService=i;this.router=e}canActivate(i,e){return this.authService.getUser().pipe(J(t=>t&&(t.role==="administrador"||t.role==="paciente")?!0:(this.router.navigate(["/bienvenida"]),console.log("Acceso denegado: no es administrador ni paciente"),!1)))}static \u0275fac=function(e){return new(e||a)(P(D),P(U))};static \u0275prov=N({token:a,factory:a.\u0275fac,providedIn:"root"})};var I=Q(re());var ni=()=>["lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado","domingo"];function ri(a,i){if(a&1){let e=C();s(0,"div")(1,"label"),c(2),Pe(3,"titlecase"),r(),s(4,"div",5)(5,"input",6),ve("ngModelChange",function(n){let o=_(e).$implicit,d=b(2);return be(d.disponibilidadSemana[o].horaInicio,n)||(d.disponibilidadSemana[o].horaInicio=n),E(n)}),r(),s(6,"input",7),ve("ngModelChange",function(n){let o=_(e).$implicit,d=b(2);return be(d.disponibilidadSemana[o].horaFin,n)||(d.disponibilidadSemana[o].horaFin=n),E(n)}),r()()()}if(a&2){let e=i.$implicit,t=b(2);l(2),f(Me(3,7,e)),l(3),he("name","",e,"HoraInicio"),ge("ngModel",t.disponibilidadSemana[e].horaInicio),l(),he("name","",e,"HoraFin"),ge("ngModel",t.disponibilidadSemana[e].horaFin)}}function ai(a,i){if(a&1){let e=C();s(0,"div")(1,"form",2),v("ngSubmit",function(){_(e);let n=b();return E(n.guardarDisponibilidad())}),g(2,ri,7,9,"div",3),s(3,"button",4),c(4,"Guardar Disponibilidad"),r()()()}a&2&&(l(2),m("ngForOf",we(1,ni)))}function si(a,i){a&1&&(s(0,"p"),c(1,"Selecciona un especialista para asignar disponibilidad."),r())}var de=class a{constructor(i){this.turnoService=i}usuarioSeleccionado=null;disponibilidadSemana={lunes:{horaInicio:"",horaFin:""},martes:{horaInicio:"",horaFin:""},mi\u00E9rcoles:{horaInicio:"",horaFin:""},jueves:{horaInicio:"",horaFin:""},viernes:{horaInicio:"",horaFin:""},s\u00E1bado:{horaInicio:"",horaFin:""},domingo:{horaInicio:"",horaFin:""}};horariosClinica={lunes:{apertura:"08:00",cierre:"19:00"},martes:{apertura:"08:00",cierre:"19:00"},mi\u00E9rcoles:{apertura:"08:00",cierre:"19:00"},jueves:{apertura:"08:00",cierre:"19:00"},viernes:{apertura:"08:00",cierre:"19:00"},s\u00E1bado:{apertura:"08:00",cierre:"14:00"},domingo:{apertura:null,cierre:null}};mostrarUsuario(i){this.usuarioSeleccionado=i}esHorarioValido(i){let e=parseInt(i.split(":")[1],10);return e===0||e===30}guardarDisponibilidad(){return p(this,null,function*(){if(!this.usuarioSeleccionado){I.default.fire("Error","Por favor, selecciona un especialista.","error");return}for(let i in this.disponibilidadSemana){let e=this.disponibilidadSemana[i],t=this.horariosClinica[i];if(e.horaInicio&&!this.esHorarioValido(e.horaInicio)||e.horaFin&&!this.esHorarioValido(e.horaFin)){I.default.fire("Error",`Los horarios de ${i} deben ser en intervalos de media hora (ej. 08:00 o 08:30).`,"error");return}if(t.apertura&&t.cierre){if(e.horaInicio<t.apertura||e.horaInicio>t.cierre||e.horaFin<t.apertura||e.horaFin>t.cierre){I.default.fire("Error",`El horario de ${i} debe estar entre ${t.apertura} y ${t.cierre}.`,"error");return}if(e.horaInicio>=e.horaFin){I.default.fire("Error",`En ${i}, la hora de inicio debe ser anterior a la hora de fin.`,"error");return}}else if(e.horaInicio||e.horaFin){I.default.fire("Error",`El d\xEDa ${i} est\xE1 cerrado, no debe haber horarios de disponibilidad.`,"error");return}}try{yield this.turnoService.guardarDisponibilidad(this.usuarioSeleccionado.uid,this.disponibilidadSemana),this.generarTurnosProximos15Dias(),I.default.fire("\xC9xito","Disponibilidad guardada correctamente.","success")}catch(i){console.error("Error al guardar la disponibilidad:",i),I.default.fire("Error","No se pudo guardar la disponibilidad.","error")}})}generarTurnosProximos15Dias(){return p(this,null,function*(){if(console.log("entramos a la creacion de turnos"),!this.usuarioSeleccionado){I.default.fire("Error","Por favor, selecciona un especialista.","error");return}let i=yield this.turnoService.obtenerDisponibilidad(this.usuarioSeleccionado.uid);if(!i){I.default.fire("Error","No se encontr\xF3 disponibilidad para el especialista seleccionado.","error");return}let e=[],t=new Date;for(let n=0;n<15;n++){let o=new Date(t);o.setDate(t.getDate()+n);let d=this.obtenerNombreDia(o);if(i[d]){let u=i[d];if(u.horaInicio&&u.horaFin){let T=u.horaInicio;for(;T<u.horaFin;){let M=this.sumarMinutos(T,30);M<=u.horaFin&&e.push({especialista_id:this.usuarioSeleccionado.uid,fecha:o.toISOString().split("T")[0],hora_inicio:T,hora_fin:M,estado:"disponible"}),T=M}}}}try{yield this.turnoService.guardarTurnos(e),I.default.fire("\xC9xito","Turnos generados para los pr\xF3ximos 15 d\xEDas.","success")}catch(n){console.error("Error al generar los turnos:",n),I.default.fire("Error","No se pudieron generar los turnos.","error")}})}obtenerNombreDia(i){return["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"][i.getDay()]}sumarMinutos(i,e){let[t,n]=i.split(":").map(Number),o=new Date;o.setHours(t,n+e);let d=String(o.getHours()).padStart(2,"0"),u=String(o.getMinutes()).padStart(2,"0");return`${d}:${u}`}static \u0275fac=function(e){return new(e||a)(h(F))};static \u0275cmp=A({type:a,selectors:[["app-gestion-horarios"]],decls:5,vars:3,consts:[[3,"usuarioSeleccionado"],[4,"ngIf"],[3,"ngSubmit"],[4,"ngFor","ngForOf"],["type","submit"],[1,"horarios"],["type","time","placeholder","Hora de inicio",3,"ngModelChange","ngModel","name"],["type","time","placeholder","Hora de fin",3,"ngModelChange","ngModel","name"]],template:function(e,t){e&1&&(s(0,"app-listado-especialista",0),v("usuarioSeleccionado",function(o){return t.mostrarUsuario(o)}),r(),s(1,"h2"),c(2),r(),g(3,ai,5,2,"div",1)(4,si,2,0,"p",1)),e&2&&(l(2),k("Asignar Disponibilidad para ",(t.usuarioSeleccionado==null?null:t.usuarioSeleccionado.nombre)||"Selecciona un especialista",""),l(),m("ngIf",t.usuarioSeleccionado),l(),m("ngIf",!t.usuarioSeleccionado))},dependencies:[R,H,ne,ie,te,oe,qe,Ve,Ae,De],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}.horarios[_ngcontent-%COMP%]{display:flex;gap:15px}input[type=time][_ngcontent-%COMP%]{width:48%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;box-sizing:border-box;background-color:#f1f1f1;transition:border-color .3s,background-color .3s}input[type=time][_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}']})};var j=Q(re());function ci(a,i){if(a&1){let e=C();s(0,"div")(1,"input",1),v("change",function(n){_(e);let o=b();return E(o.onEspecialidadChange(n))}),r(),c(2),r()}if(a&2){let e=i.$implicit;l(),m("value",e.nombre),l(),k(" ",e.nombre,`
`)}}function li(a,i){if(a&1){let e=C();s(0,"div")(1,"input",2),v("change",function(n){let o=_(e).$implicit,d=b();return E(d.onEspecialistaChange(n,o))}),r(),c(2),r()}if(a&2){let e=i.$implicit;l(),m("value",e.uid),l(),G(" ",e.nombre," ",e.apellido,`
`)}}function di(a,i){if(a&1){let e=C();s(0,"button",5),v("click",function(){_(e);let n=b().$implicit,o=b();return E(o.cancelarTurno(n))}),c(1," Cancelar Turno "),r()}}function pi(a,i){a&1&&(s(0,"button",6),c(1," no acciones "),r())}function mi(a,i){if(a&1&&(s(0,"tr")(1,"td"),c(2),r(),s(3,"td"),c(4),r(),s(5,"td"),c(6),r(),s(7,"td"),c(8),r(),s(9,"td"),c(10),r(),s(11,"td"),c(12),r(),s(13,"td"),c(14),r(),s(15,"td"),c(16),r(),s(17,"td"),g(18,di,2,0,"button",3)(19,pi,2,0,"button",4),r()()),a&2){let e=i.$implicit,t=b();l(2),f(e.dni),l(2),f(e.paciente),l(2),f(e.obraSocial),l(2),f(t.nombreEspecialista),l(2),f(e.especialidad),l(2),f(e.fecha),l(2),G("",e.hora_inicio," - ",e.hora_fin,""),l(2),f(e.estado),l(2),m("ngIf",e.estado==="solicitado"),l(),m("ngIf",e.estado!=="solicitado")}}var pe=class a{constructor(i,e,t){this.turnoService=i;this.especialidadService=e;this.especialistaService=t}especialidades=[];especialistas=[];horarios=[];nombreEspecialista;especialidadSeleccionada="";ngOnInit(){this.cargarEspecialidades()}cargarEspecialidades(){return p(this,null,function*(){this.especialidades=yield this.especialidadService.getEspecialidades()})}onEspecialidadChange(i){return p(this,null,function*(){let e=i.target;if(this.especialidadSeleccionada=e.value,this.especialidadSeleccionada)try{this.especialistas=yield this.especialistaService.getEspecialistasPorEspecialidad(this.especialidadSeleccionada),this.horarios=[]}catch{j.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.especialistas=[],this.horarios=[]})}onEspecialistaChange(i,e){return p(this,null,function*(){let n=i.target.value;if(n){this.nombreEspecialista=`${e.nombre} ${e.apellido}`;try{let o=yield this.turnoService.obtenerTurnosDisponiblesEspecialista(n);this.horarios=o.filter(d=>d.especialidad===this.especialidadSeleccionada),this.horarios.sort((d,u)=>new Date(d.fecha).getTime()-new Date(u.fecha).getTime())}catch{j.default.fire("Error","No se pudieron cargar los turnos","error")}}else this.horarios=[]})}cancelarTurno(i){return p(this,null,function*(){if(["Aceptado","Realizado","Rechazado"].includes(i.estado)){j.default.fire("Aviso","No se puede cancelar un turno aceptado, realizado o rechazado","info");return}let{isConfirmed:e,value:t}=yield j.default.fire({title:"\xBFEst\xE1s seguro de cancelar el turno?",text:"Por favor, ingresa el motivo de la cancelaci\xF3n",input:"textarea",inputPlaceholder:"Escribe aqu\xED el motivo...",inputAttributes:{"aria-label":"Motivo de cancelaci\xF3n"},confirmButtonText:"Cancelar turno",showCancelButton:!0,cancelButtonText:"Volver",inputValidator:n=>n?null:"El motivo es requerido para cancelar el turno"});if(e&&t)try{yield this.turnoService.cancelarTurno(i.id,t),j.default.fire("Cancelado","El turno ha sido cancelado con \xE9xito","success"),yield this.onEspecialistaChange({target:{value:i.especialistaId}},{nombre:i.nombreEspecialista,apellido:i.apellidoEspecialista})}catch{j.default.fire("Error","No se pudo cancelar el turno","error")}})}static \u0275fac=function(e){return new(e||a)(h(F),h(z),h($))};static \u0275cmp=A({type:a,selectors:[["app-gestionar-turnos"]],decls:31,vars:3,consts:[[4,"ngFor","ngForOf"],["type","radio","name","especialidad",3,"change","value"],["type","radio","name","especialista",3,"change","value"],["class","cancelar",3,"click",4,"ngIf"],["class","no-accion","disabled","",4,"ngIf"],[1,"cancelar",3,"click"],["disabled","",1,"no-accion"]],template:function(e,t){e&1&&(s(0,"h2"),c(1,"Listado de Turnos"),r(),s(2,"label"),c(3,"Especialidad:"),r(),g(4,ci,3,2,"div",0),s(5,"label"),c(6,"Especialista:"),r(),g(7,li,3,3,"div",0),s(8,"table")(9,"thead")(10,"tr")(11,"th"),c(12,"DNI"),r(),s(13,"th"),c(14,"Paciente"),r(),s(15,"th"),c(16,"Obra Social"),r(),s(17,"th"),c(18,"Especialista"),r(),s(19,"th"),c(20,"Especialidad"),r(),s(21,"th"),c(22,"Fecha"),r(),s(23,"th"),c(24,"Horario"),r(),s(25,"th"),c(26,"Estado"),r(),s(27,"th"),c(28,"Acciones"),r()()(),s(29,"tbody"),g(30,mi,20,11,"tr",0),r()()),e&2&&(l(4),m("ngForOf",t.especialidades),l(3),m("ngForOf",t.especialistas),l(23),m("ngForOf",t.horarios))},dependencies:[R,H],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}label[_ngcontent-%COMP%]{font-weight:700;color:#154360;margin-right:.5rem}select[_ngcontent-%COMP%]{padding:.5rem;border-radius:4px;border:1px solid #D5D8DC;margin-bottom:1rem;margin-right:1rem;outline:none;transition:border-color .3s ease}select[_ngcontent-%COMP%]:focus{border-color:#154360}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}button[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.9rem;border:none;border-radius:4px;color:#fff;cursor:pointer;transition:background-color .3s ease,transform .2s ease;width:100%}button.no-accion[_ngcontent-%COMP%]{background-color:#b0e915}button.cancelar[_ngcontent-%COMP%]{background-color:#c0392b}button.cancelar[_ngcontent-%COMP%]:hover{background-color:#a93226;transform:scale(1.05)}td.estado[_ngcontent-%COMP%]{font-weight:700;color:#1e8449}td.estado.inhabilitado[_ngcontent-%COMP%]{color:#c0392b}']})};var W=Q(re());function ui(a,i){if(a&1){let e=C();s(0,"div")(1,"input",1),v("change",function(n){_(e);let o=b();return E(o.onEspecialidadChange(n))}),r(),c(2),r()}if(a&2){let e=i.$implicit;l(),m("value",e.nombre),l(),k(" ",e.nombre,`
`)}}function fi(a,i){if(a&1){let e=C();s(0,"div")(1,"input",2),v("change",function(n){let o=_(e).$implicit,d=b();return E(d.onPacienteChange(n,o))}),r(),c(2),r()}if(a&2){let e=i.$implicit;l(),m("value",e.uid),l(),G(" ",e.nombre," ",e.apellido,`
`)}}function hi(a,i){if(a&1&&(s(0,"tr")(1,"td"),c(2),r(),s(3,"td"),c(4),r(),s(5,"td"),c(6),r(),s(7,"td"),c(8),r(),s(9,"td"),c(10),r(),s(11,"td"),c(12),r(),s(13,"td"),c(14),r()()),a&2){let e=i.$implicit;l(2),f(e.dni),l(2),f(e.paciente),l(2),f(e.obraSocial),l(2),f(e.especialidad),l(2),f(e.fecha),l(2),G("",e.hora_inicio," - ",e.hora_fin,""),l(2),f(e.estado)}}var me=class a{constructor(i,e,t,n){this.turnoService=i;this.especialidadService=e;this.especialistaService=t;this.authenticationService=n}especialidades=[];pacientes=[];horarios=[];nombrePaciente="";especialidadSeleccionada="";especialistaIniciado;pacienteSeleccionadoId="";ngOnInit(){return p(this,null,function*(){this.especialistaIniciado=this.authenticationService.getUser().subscribe(i=>{this.cargarPacientes(i.uid)})})}cargarPacientes(i){return p(this,null,function*(){try{this.pacientes=yield this.especialistaService.getPacientesUnicosPorEspecialista(i),console.log("Pacientes cargados:",this.pacientes)}catch(e){console.error("Error cargando pacientes:",e),W.default.fire("Error","No se pudieron cargar los pacientes","error")}})}cargarEspecialidades(){this.especialistaIniciado&&this.especialistaIniciado.especialidades?this.especialidades=this.especialistaIniciado.especialidades:(this.especialidades=[],W.default.fire("Error","No se encontraron especialidades para este especialista","error"))}onEspecialidadChange(i){return p(this,null,function*(){let e=i.target;if(this.especialidadSeleccionada=e.value,this.especialidadSeleccionada)try{this.pacientes=yield this.especialistaService.getPacientesUnicosPorEspecialidad(this.especialistaIniciado.uid,this.especialidadSeleccionada),this.horarios=[]}catch{W.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.pacientes=[],this.horarios=[]})}onPacienteChange(i,e){return p(this,null,function*(){let t=i.target;if(this.pacienteSeleccionadoId=t.value,this.pacienteSeleccionadoId){this.nombrePaciente=`${e.nombre} ${e.apellido}`;try{let n=yield this.turnoService.obtenerTurnosDisponiblesPaciente(this.pacienteSeleccionadoId);this.horarios=n.filter(o=>o.especialidad===this.especialidadSeleccionada),this.horarios.sort((o,d)=>new Date(o.fecha).getTime()-new Date(d.fecha).getTime())}catch{W.default.fire("Error","No se pudieron cargar los turnos","error")}}else this.horarios=[]})}static \u0275fac=function(e){return new(e||a)(h(F),h(z),h($),h(D))};static \u0275cmp=A({type:a,selectors:[["app-turnos-especialista"]],decls:31,vars:3,consts:[[4,"ngFor","ngForOf"],["type","radio","name","especialidad",3,"change","value"],["type","radio","name","paciente",3,"change","value"]],template:function(e,t){e&1&&(s(0,"h2"),c(1,"Listado de Turnos"),r(),s(2,"label"),c(3,"Especialidad:"),r(),g(4,ui,3,2,"div",0),s(5,"label"),c(6,"Pacientes:"),r(),g(7,fi,3,3,"div",0),s(8,"table")(9,"thead")(10,"tr")(11,"th"),c(12,"DNI"),r(),s(13,"th"),c(14,"Paciente"),r(),s(15,"th"),c(16,"Obra Social"),r(),s(17,"th"),c(18,"Especialista"),r(),s(19,"th"),c(20,"Especialidad"),r(),s(21,"th"),c(22,"Fecha"),r(),s(23,"th"),c(24,"Horario"),r(),s(25,"th"),c(26,"Estado"),r(),s(27,"th"),c(28,"Acciones"),r()()(),s(29,"tbody"),g(30,hi,15,8,"tr",0),r()()),e&2&&(l(4),m("ngForOf",t.especialidades),l(3),m("ngForOf",t.Pacientes),l(23),m("ngForOf",t.horarios))}})};var ue=class a{constructor(i,e){this.authService=i;this.router=e}canActivate(i,e){return this.authService.getUser().pipe(J(t=>t&&t.role==="especialista"?!0:(this.router.navigate(["/bienvenida"]),console.log("no es especialista verifica las cosas bien"),!1)))}static \u0275fac=function(e){return new(e||a)(P(D),P(U))};static \u0275prov=N({token:a,factory:a.\u0275fac,providedIn:"root"})};var gi=[{path:"solicitar-turno",component:ce,canActivate:[le]},{path:"gestionar-horarios",component:de,canActivate:[Ee]},{path:"gestionar-turnos",component:pe,canActivate:[Ee]},{path:"turnos-especialista",component:me,canActivate:[ue]}],fe=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[_e.forChild(gi),_e]})};var Je=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[Se,fe,Le,Be,Se,Ue]})};export{Je as SeccionTurnosModule};
