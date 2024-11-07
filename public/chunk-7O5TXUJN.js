import{a as de,b as fe}from"./chunk-RDMDQK7B.js";import{a as te,b as g,c as oe,d as ie,e as re,f as ne,g as ae,h as se,i as ce,j as pe,k as le,m as me,n as xe,o as ue}from"./chunk-OT64GT4H.js";import{A as v,Aa as x,E as C,G as p,I as s,J as c,K as D,L as B,M as E,N as V,O as u,P as $,R as Q,a as d,b as U,d as be,e as a,fa as J,ga as K,h as W,ha as X,ka as F,l as S,m as T,ma as q,o as f,p as Y,q as w,ra as P,t as L,ta as h,u as z,ua as y,va as Z,wa as b,ya as M,z as l,za as ee}from"./chunk-VE5QODOT.js";var j=be(xe());var A=class i{constructor(e){this.firestore=e}getEspecialistasPorEspecialidad(e){return a(this,null,function*(){let t=h(this.firestore,"users"),r=(yield b(t)).docs.map(n=>d({id:n.id},n.data())).filter(n=>this.especialistaValido(n,e));return console.log("Especialistas filtrados:",r),r})}especialistaValido(e,t){return e.rol==="especialista"&&e.especialidad.includes(t)}getHorariosPorEspecialista(e){return a(this,null,function*(){let t=h(this.firestore,"horarios"),o=yield b(t),r=yield this.getTurnosPorEspecialista(e);return o.docs.map(n=>{let m=n.data();return d({id:n.id},m)}).filter(n=>n.especialistaId===e&&this.isWithinNext15Days(n.fecha)&&!this.isHorarioOcupado(n,r))})}getTurnosPorEspecialista(e){return a(this,null,function*(){let t=h(this.firestore,"turnos");return(yield b(t)).docs.map(r=>{let n=r.data();return d({id:r.id},n)}).filter(r=>r.especialistaId===e)})}isHorarioOcupado(e,t){let o=new Date(e.fecha),r=new Date(o);return r.setMinutes(r.getMinutes()+30),t.some(n=>{let m=new Date(n.fecha),I=new Date(m);return I.setMinutes(I.getMinutes()+30),m<r&&I>o})}isWithinNext15Days(e){let t=new Date(e),o=new Date,r=new Date;return r.setDate(o.getDate()+15),t>=o&&t<=r}solicitarTurno(e){return a(this,null,function*(){let t=y(h(this.firestore,"turnos"));yield M(t,e)})}static \u0275fac=function(t){return new(t||i)(f(P))};static \u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ee=Math.pow(10,8)*24*60*60*1e3,Ve=-Ee;var _e=3600;var he=_e*24,$e=he*7,Te=he*365.2425,we=Te/12,qe=we*3,G=Symbol.for("constructDateFrom");function ge(i,e){return typeof i=="function"?i(e):i&&typeof i=="object"&&G in i?i[G](e):i instanceof Date?new i.constructor(e):new Date(e)}function N(i,e){return ge(e||i,i)}function ve(i,e,t){let o=+N(i,t?.in),[r,n]=[+N(e.start,t?.in),+N(e.end,t?.in)].sort((m,I)=>m-I);return o>=r&&o<=n}var O=class i{constructor(e,t){this.firestore=e;this.authService=t}horariosApertura={lunes:{apertura:"08:00",cierre:"19:00"},martes:{apertura:"08:00",cierre:"19:00"},mi\u00E9rcoles:{apertura:"08:00",cierre:"19:00"},jueves:{apertura:"08:00",cierre:"19:00"},viernes:{apertura:"08:00",cierre:"19:00"},s\u00E1bado:{apertura:"08:00",cierre:"14:00"},domingo:{apertura:null,cierre:null}};estaAbierto(e,t){let o=this.horariosApertura[e];if(!o||!o.apertura||!o.cierre)return!1;let r=new Date(`1970-01-01T${t}:00`),n=new Date(`1970-01-01T${o.apertura}:00`),m=new Date(`1970-01-01T${o.cierre}:00`);return ve(r,{start:n,end:m})}solicitarTurno(e){return a(this,null,function*(){let t=yield this.authService.getUser().toPromise();if(t){let{dia:o,hora:r}=e;if(!this.estaAbierto(o,r))throw new Error("La cl\xEDnica est\xE1 cerrada en el horario solicitado. Por favor, elija otro horario.");let n=U(d({},e),{pacienteId:t.uid,pacienteNombre:t.nombre}),m=y(h(this.firestore,"turnos"));yield M(m,n)}else throw new Error("No hay usuario autenticado")})}getTurnos(){return a(this,null,function*(){let e=h(this.firestore,"turnos");return(yield b(e)).docs.map(o=>d({id:o.id},o.data()))})}getTurno(e){return a(this,null,function*(){let t=y(this.firestore,`turnos/${e}`),o=yield Z(t);if(o.exists())return d({id:o.id},o.data());throw new Error("No se encontr\xF3 el turno")})}updateTurno(e,t){return a(this,null,function*(){let o=y(this.firestore,`turnos/${e}`);yield ee(o,t)})}static \u0275fac=function(t){return new(t||i)(f(P),f(x))};static \u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"})};function Pe(i,e){if(i&1&&(s(0,"option",11),u(1),c()),i&2){let t=e.$implicit;p("value",t.nombre),l(),$(t.nombre)}}function Me(i,e){if(i&1&&(s(0,"option",11),u(1),c()),i&2){let t=e.$implicit;p("value",t.nombre),l(),$(t.nombre)}}function Ae(i,e){if(i&1&&(s(0,"option",11),u(1),c()),i&2){let t=e.$implicit;p("value",t.id),l(),Q("",t.fecha," - ",t.hora,"")}}function Ne(i,e){if(i&1&&(s(0,"div")(1,"label",12),u(2,"Paciente:"),c(),D(3,"input",13),s(4,"label",14),u(5,"DNI:"),c(),D(6,"input",15),s(7,"label",16),u(8,"Obra Social:"),c(),D(9,"input",17),c()),i&2){let t=V();l(3),p("readonly",t.isAdmin),l(3),p("readonly",t.isAdmin),l(3),p("readonly",t.isAdmin)}}function Oe(i,e){if(i&1){let t=B();s(0,"app-listado-paciente",18),E("usuarioSeleccionado",function(r){L(t);let n=V();return z(n.setPacienteData(r))}),c()}}var R=class i{constructor(e,t,o,r,n,m){this.especialidadService=e;this.especialistaService=t;this.turnoService=o;this.authService=r;this.fb=n;this.router=m;this.turnoForm=this.fb.group({especialidad:["",g.required],especialista:["",g.required],horario:["",g.required],paciente:["",g.required],dni:["",[g.required,g.pattern(/^[0-9]{8,}$/)]],obraSocial:["",g.required]})}especialidades=[];especialistas=[];horarios=[];turnoForm;isAdmin=!1;isPaciente=!1;usuarioSeleccionado;ngOnInit(){this.cargarEspecialidades(),this.checkUserRole()}cargarEspecialidades(){return a(this,null,function*(){this.especialidades=yield this.especialidadService.getEspecialidades()})}checkUserRole(){return a(this,null,function*(){this.authService.getUser().subscribe(e=>{e&&(this.isAdmin=e.role==="administrador",this.isPaciente=e.role==="paciente")})})}setPacienteData(e){return a(this,null,function*(){this.usuarioSeleccionado=e,e&&this.turnoForm.patchValue({paciente:e.nombre,dni:e.dni,obraSocial:e.obraSocial})})}onEspecialidadChange(e){return a(this,null,function*(){let o=e.target.value;if(console.log("Nombre de especialidad seleccionada:",o),o)try{this.especialistas=yield this.especialistaService.getEspecialistasPorEspecialidad(o),console.log("Especialistas cargados:",this.especialistas)}catch(r){console.error("Error al cargar especialistas:",r),j.default.fire("Error","No se pudieron cargar los especialistas","error")}else this.especialistas=[]})}onEspecialistaChange(e){return a(this,null,function*(){let o=e.target.value;this.horarios=yield this.especialistaService.getHorariosPorEspecialista(o)})}solicitarTurno(){return a(this,null,function*(){let e=this.turnoForm.value;try{yield this.turnoService.solicitarTurno(e),j.default.fire("Registro exitoso","El turno ha sido solicitado correctamente","success"),this.router.navigate(["/bienvenida"])}catch{j.default.fire("Error","No se pudo solicitar el turno. Int\xE9ntalo nuevamente.","error")}})}static \u0275fac=function(t){return new(t||i)(v(ue),v(A),v(O),v(x),v(le),v(F))};static \u0275cmp=Y({type:i,selectors:[["app-solicitar-turno"]],decls:17,vars:6,consts:[[3,"ngSubmit","formGroup"],["for","especialidad"],["id","especialidad","formControlName","especialidad",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","especialista"],["id","especialista","formControlName","especialista",3,"change"],["for","horario"],["id","horario","formControlName","horario"],[4,"ngIf"],[3,"usuarioSeleccionado",4,"ngIf"],["type","submit"],[3,"value"],["for","paciente"],["id","paciente","formControlName","paciente","type","text",3,"readonly"],["for","dni"],["id","dni","formControlName","dni","type","text",3,"readonly"],["for","obraSocial"],["id","obraSocial","formControlName","obraSocial","type","text",3,"readonly"],[3,"usuarioSeleccionado"]],template:function(t,o){t&1&&(s(0,"form",0),E("ngSubmit",function(){return o.solicitarTurno()}),s(1,"label",1),u(2,"Especialidad:"),c(),s(3,"select",2),E("change",function(n){return o.onEspecialidadChange(n)}),C(4,Pe,2,2,"option",3),c(),s(5,"label",4),u(6,"Especialista:"),c(),s(7,"select",5),E("change",function(n){return o.onEspecialistaChange(n)}),C(8,Me,2,2,"option",3),c(),s(9,"label",6),u(10,"Horario:"),c(),s(11,"select",7),C(12,Ae,2,3,"option",3),c(),C(13,Ne,10,3,"div",8)(14,Oe,1,0,"app-listado-paciente",9),s(15,"button",10),u(16,"Solicitar Turno"),c()()),t&2&&(p("formGroup",o.turnoForm),l(4),p("ngForOf",o.especialidades),l(4),p("ngForOf",o.especialistas),l(4),p("ngForOf",o.horarios),l(),p("ngIf",o.isAdmin),l(),p("ngIf",o.isAdmin))},dependencies:[J,K,re,ce,pe,te,se,oe,ie,ne,ae,de],styles:['@charset "UTF-8";form[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:30px;border:2px solid #007bff;border-radius:15px;background-color:#e0f7fa;box-shadow:0 4px 20px #0003}label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block;color:#007bff}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #007bff;border-radius:6px;font-size:16px;margin-bottom:15px;box-sizing:border-box;transition:border-color .3s,background-color .3s;background-color:#f1f1f1}input[type=text][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{border-color:#0056b3;outline:none;background-color:#fff}div[ngIf][_ngcontent-%COMP%]{color:#dc3545;font-size:.9em;margin-top:-10px;margin-bottom:10px}button[type=submit][_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:12px 15px;border:none;border-radius:6px;cursor:pointer;transition:background-color .3s,transform .2s;width:100%;font-size:1em}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}div[_ngcontent-%COMP%]{margin-bottom:20px}div[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ngIf[_ngcontent-%COMP%]{margin-bottom:20px}']})};var k=class i{constructor(e,t){this.authService=e;this.router=t}canActivate(e,t){return this.authService.getUser().pipe(W(o=>o&&(o.role==="administrador"||o.role==="paciente")?!0:(this.router.navigate(["/bienvenida"]),console.log("Acceso denegado: no es administrador ni paciente"),!1)))}static \u0275fac=function(t){return new(t||i)(f(x),f(F))};static \u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"})};var je=[{path:"solicitar-turno",component:R,canActivate:[k]}],H=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=w({type:i});static \u0275inj=T({imports:[q.forChild(je),q]})};var ye=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=w({type:i});static \u0275inj=T({imports:[X,H,me,fe]})};export{ye as SeccionTurnosModule};
