import{A as o,Aa as ue,B as f,Ba as y,C as p,Ca as K,Ea as Pe,Fa as ye,K as ie,L as k,Q as w,R as T,S as A,U as he,X as be,Z as me,a as I,b as fe,c as z,d as g,e as xe,f as X,g as Z,h as L,i as E,j as ee,k as h,l as b,la as ve,m as R,ma as Ce,n as te,o as r,p as O,q as _,r as l,ra as Se,s as a,t as i,ta as P,u as N,ua as C,v,va as j,w as x,wa as D,x as m,ya as Ee,za as M}from"./chunk-2BCTBKAU.js";var Y=z(K());var we=(n,t)=>({habilitado:n,inhabilitado:t});function Te(n,t){if(n&1){let e=v();a(0,"tr",1),x("click",function(){let d=h(e).$implicit,c=m();return b(c.seleccionarUsuario(d))}),a(1,"td"),o(2),i(),a(3,"td"),o(4),i(),a(5,"td"),o(6),i(),a(7,"td"),o(8),i(),a(9,"td",2),o(10),i()()}if(n&2){let e=t.$implicit;r(2),f(e.nombre),r(2),f(e.apellido),r(2),f(e.email),r(2),f(e.role),r(),l("ngClass",k(6,we,e.habilitado,!e.habilitado)),r(),p(" ",e.habilitado?"Habilitado":"Inhabilitado"," ")}}var ne=class n{constructor(t){this.authService=t}usuarioSeleccionado=new R;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(t){this.usuarioSeleccionado.emit(t)}cargarUsuarios(){return g(this,null,function*(){try{Y.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{Y.default.showLoading()}});let t=yield this.authService.obtenerUsuarios();this.usuarios=t.filter(e=>e.role==="paciente")}catch(t){console.error("Error al cargar usuarios:",t),Y.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{Y.default.close()}})}static \u0275fac=function(e){return new(e||n)(O(y))};static \u0275cmp=E({type:n,selectors:[["app-listado-paciente"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:17,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"ngClass"]],template:function(e,s){e&1&&(a(0,"h2"),o(1,"Listado de Pacientes"),i(),a(2,"table")(3,"thead")(4,"tr")(5,"th"),o(6,"Nombre"),i(),a(7,"th"),o(8,"Apellido"),i(),a(9,"th"),o(10,"Email"),i(),a(11,"th"),o(12,"Rol"),i(),a(13,"th"),o(14,"Estado"),i()()(),a(15,"tbody"),_(16,Te,11,9,"tr",0),i()()),e&2&&(r(16),l("ngForOf",s.usuarios))},dependencies:[w,T],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}td.habilitado[_ngcontent-%COMP%]{color:#28a745;font-weight:700}td.inhabilitado[_ngcontent-%COMP%]{color:#dc3545;font-weight:700}']})};var J=z(K());var H=class n{constructor(t,e){this.firestore=t;this.authService=e}guardarDisponibilidadEspecialidad(t,e,s){return g(this,null,function*(){let d=`${t}_${s.replace(/\s+/g,"_")}`,c=C(P(this.firestore,"Disponibilidad"),d);yield M(c,{disponibilidad:e,especialidad:s,especialista_id:t})})}guardarDisponibilidad(t,e){return g(this,null,function*(){let s=C(P(this.firestore,"Disponibilidad"),t);yield M(s,{disponibilidad:e})})}guardarTurnos(t){return g(this,null,function*(){let e=P(this.firestore,"Turnos"),s=t.map(d=>{let c=C(e);return M(c,d)});yield Promise.all(s)})}obtenerTurnos(){return g(this,null,function*(){let t=P(this.firestore,"Turnos"),s=(yield D(t)).docs;return console.log("Turnos disponibles:",s),s})}obtenerTurnosDisponibles(t,e){return g(this,null,function*(){let s=P(this.firestore,"Turnos"),c=(yield D(s)).docs.map(u=>{let S=u.data();return I({id:u.id},S)}).filter(u=>{let S=u.especialista_id===t,V=u.especialidad===e,$=u.estado==="disponible";return console.log(`Turno ID: ${u.id}, Especialista ID: ${u.especialista_id}, Estado: ${u.estado}, Coincide: ${S&&$}`),S&&$&&V});return console.log("Turnos disponibles:",c),c})}obtenerTurnosDisponiblesEspecialista(t){return g(this,null,function*(){let e=P(this.firestore,"Turnos"),d=(yield D(e)).docs.map(c=>{let u=c.data();return I({id:c.id},u)}).filter(c=>{let u=c.especialista_id===t;return console.log(`Turno ID: ${c.id}, Especialista ID: ${c.especialista_id}`),u});return console.log("Turnos solicitados:",d),d})}obtenerTurnosDisponiblesPacienteEspecialista(t,e){return g(this,null,function*(){let s=P(this.firestore,"Turnos"),c=(yield D(s)).docs.map(u=>{let S=u.data();return I({id:u.id},S)}).filter(u=>{let S=u.especialista_id===e,V=u.pacienteId===t;return console.log(`Turno ID: ${u.id}, Paciente ID: ${u.pacienteId}`),V&&S});return console.log("Turnos solicitados:",c),c})}obtenerTurnosDisponiblesPaciente(t){return g(this,null,function*(){let e=P(this.firestore,"Turnos"),d=(yield D(e)).docs.map(c=>{let u=c.data();return I({id:c.id},u)}).filter(c=>{let u=c.pacienteId===t;return console.log(`Turno ID: ${c.id}, Paciente ID: ${c.pacienteId}`),u});return console.log("Turnos solicitados:",d),d})}obtenerTurnosEspecialidad(t){return g(this,null,function*(){let e=P(this.firestore,"Turnos"),d=(yield D(e)).docs.map(c=>{let u=c.data();return I({id:c.id},u)}).filter(c=>{let u=c.especialidad===t;return console.log(`Turno ID: ${c.id}, especialidad : ${c.especialidad}`),u});return console.log("Turnos solicitados:",d),d})}obtenerDisponibilidadEspecialista(t,e){return g(this,null,function*(){let s=P(this.firestore,"Disponibilidad"),d=Ee(s,ue("especialista_id","==",t),ue("especialidad","==",e)),c=yield D(d);return c.empty?(console.log("No existe la disponibilidad para este especialista y especialidad."),null):c.docs[0].data().disponibilidad})}obtenerDisponibilidad(t){return g(this,null,function*(){let e=C(this.firestore,`Disponibilidad/${t}`),s=yield j(e);return s.exists()?s.data().disponibilidad:(console.log("No existe la disponibilidad para este especialista."),null)})}solicitarTurno(t,e){return g(this,null,function*(){let s=C(this.firestore,`Turnos/${t.horario}`);yield M(s,fe(I({},t),{estado:"solicitado",pacienteId:e}),{merge:!0})})}cancelarTurno(t,e){return g(this,null,function*(){let s=C(this.firestore,`Turnos/${t}`);yield M(s,{estado:"cancelado",motivoCancelacion:e},{merge:!0})})}aceptarTurno(t){return g(this,null,function*(){let e=C(this.firestore,`Turnos/${t}`);yield M(e,{estado:"aceptado"},{merge:!0})})}finalizarTurno(d,c){return g(this,arguments,function*(t,{diagnostico:e,rese\u00F1a:s}){let u=C(this.firestore,`Turnos/${t}`);yield M(u,{estado:"realizado",rese\u00F1a:s,diagnostico:e},{merge:!0})})}finalizarTurnoHistoriaClinica(s,d){return g(this,arguments,function*(t,{historiaClinica:e}){let c=t.pacienteId,u=t.especialidad,S=t.especialista,V=t.fecha,$=t.especialista_id,pe=`turno_${V}_${u}`,W=C(this.firestore,`historiaClinica/${c}`);yield M(W,{turnos:{[pe]:I({especialidad:u,nombreEspecialista:S,idEspecialista:$,fechaTurno:V},e)}},{merge:!0})})}obtenerHistoriaClinica(t){return g(this,null,function*(){let e=C(this.firestore,`historiaClinica/${t}`),s=yield j(e);if(s.exists()){let c=s.data()?.turnos;if(c)return c}else return console.log("No existe el documento del paciente."),null})}obtenerPacientesAtendidosPorEspecialista(t){return g(this,null,function*(){let e=P(this.firestore,"historiaClinica"),s=yield D(e),d=[];for(let c of s.docs){let u=c.data(),S=u.turnos||{};for(let V in S)if(S[V].idEspecialista===t){let $=c.id,pe=C(this.firestore,"users",$),W=yield j(pe);if(W.exists()){let Ie=W.data();d.push(I(I({},Ie),u))}else console.error(`Paciente con ID ${$} no encontrado en la colecci\xF3n 'users'.`);break}}return d})}obtenerRese\u00F1aTurno(t){return g(this,null,function*(){let e=C(this.firestore,`Turnos/${t}`);try{let s=yield j(e);if(s.exists()){let d=s.data()?.rese\u00F1a;d?J.default.fire("Rese\xF1a del Turno",d,"info"):J.default.fire("Aviso","No hay rese\xF1a disponible para este turno","info")}else J.default.fire("Error","El turno no existe","error")}catch(s){J.default.fire("Error","No se pudo obtener la rese\xF1a","error"),console.error("Error al obtener rese\xF1a:",s)}})}guardarEncuesta(t,e){return g(this,null,function*(){let s=C(this.firestore,`Turnos/${t}`);yield M(s,{encuesta:e},{merge:!0}),console.log("Encuesta guardada con \xE9xito")})}guardarCalificacion(t,e){return g(this,null,function*(){let s=C(this.firestore,`Turnos/${t}`);yield M(s,{calificacionTurno:e},{merge:!0})})}static \u0275fac=function(e){return new(e||n)(L(Se),L(y))};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})};function De(n,t){if(n&1&&N(0,"img",10),n&2){let e=t.$implicit;l("src",e,te)}}function Ue(n,t){if(n&1&&(a(0,"div",8)(1,"p")(2,"strong"),o(3,"Obra Social:"),i(),o(4),i(),a(5,"div")(6,"strong"),o(7,"Im\xE1genes de Perfil:"),i(),_(8,De,1,1,"img",9),i()()),n&2){let e=m(3);r(4),p(" ",e.usuario.obraSocial,""),r(4),l("ngForOf",e.usuario.imagenes)}}function Fe(n,t){if(n&1&&(a(0,"li"),o(1),i()),n&2){let e=t.$implicit;r(),f(e)}}function Ve(n,t){if(n&1&&(a(0,"div",11)(1,"p")(2,"strong"),o(3,"Especialidades:"),i()(),a(4,"p"),o(5),i(),a(6,"ul"),_(7,Fe,2,1,"li",12),i(),a(8,"strong"),o(9,"Im\xE1gen de Perfil:"),i(),N(10,"img",10),i()),n&2){let e=m(3);r(5),f(e.usuario.especialidad),r(2),l("ngForOf",e.usuario.especialidades),r(3),l("src",e.usuario.imageUrl,te)}}function Ae(n,t){if(n&1&&(a(0,"div",13)(1,"div")(2,"strong"),o(3,"Im\xE1gen de Perfil:"),i(),N(4,"img",10),i()()),n&2){let e=m(3);r(4),l("src",e.usuario.imageUrl,te)}}function $e(n,t){if(n&1&&(a(0,"div")(1,"h3"),o(2,"Detalles del Usuario"),i(),a(3,"p")(4,"strong"),o(5,"Nombre:"),i(),o(6),i(),a(7,"p")(8,"strong"),o(9,"Apellido:"),i(),o(10),i(),a(11,"p")(12,"strong"),o(13,"Edad:"),i(),o(14),i(),a(15,"p")(16,"strong"),o(17,"DNI:"),i(),o(18),i(),a(19,"p")(20,"strong"),o(21,"Mail:"),i(),o(22),i(),_(23,Ue,9,2,"div",5)(24,Ve,11,3,"div",6)(25,Ae,5,1,"div",7),i()),n&2){let e=m(2);r(6),p(" ",e.usuario.nombre,""),r(4),p(" ",e.usuario.apellido,""),r(4),p(" ",e.usuario.edad,""),r(4),p(" ",e.usuario.dni,""),r(4),p(" ",e.usuario.email,""),r(),l("ngIf",e.esPaciente),r(),l("ngIf",e.esEspecialista),r(),l("ngIf",e.esAdministrador)}}function Ne(n,t){if(n&1){let e=v();a(0,"button",14),x("click",function(){h(e);let d=m(2);return b(d.toggleHistoriaClinica())}),o(1),i()}if(n&2){let e=m(2);r(),p(" ",e.historialVisible?"Ocultar Historia Cl\xEDnica":"Mostrar Historia Cl\xEDnica"," ")}}function Le(n,t){if(n&1&&(a(0,"div")(1,"p")(2,"strong"),o(3),i(),o(4),i()()),n&2){let e=t.$implicit;r(3),p("",e.clave,":"),r(),p(" ",e.valor,"")}}function Re(n,t){if(n&1&&(a(0,"div")(1,"h5"),o(2,"Otros Datos:"),i(),_(3,Le,5,2,"div",12),i()),n&2){let e=m(2).$implicit,s=m(4);r(3),l("ngForOf",s.turnos[e].datosDinamicos)}}function He(n,t){if(n&1&&(a(0,"div",17)(1,"h5"),o(2),i(),a(3,"p")(4,"strong"),o(5,"Especialidad:"),i(),o(6),i(),a(7,"p")(8,"strong"),o(9,"Especialista:"),i(),o(10),i(),a(11,"p")(12,"strong"),o(13,"Fecha:"),i(),o(14),i(),a(15,"p")(16,"strong"),o(17,"Altura:"),i(),o(18),i(),a(19,"p")(20,"strong"),o(21,"Peso:"),i(),o(22),i(),a(23,"p")(24,"strong"),o(25,"Temperatura:"),i(),o(26),i(),a(27,"p")(28,"strong"),o(29,"Presi\xF3n:"),i(),o(30),i(),_(31,Re,4,1,"div",2),i()),n&2){let e=m().$implicit,s=m(4);r(2),p("Turno de ",s.turnos[e].especialidad,""),r(4),p(" ",s.turnos[e].especialidad,""),r(4),p(" ",s.turnos[e].nombreEspecialista,""),r(4),p(" ",s.turnos[e].fechaTurno,""),r(4),p(" ",s.turnos[e].altura,""),r(4),p(" ",s.turnos[e].peso,""),r(4),p(" ",s.turnos[e].temperatura,""),r(4),p(" ",s.turnos[e].presion,""),r(),l("ngIf",s.turnos[e].datosDinamicos&&s.turnos[e].datosDinamicos.length>0)}}function ze(n,t){if(n&1&&(a(0,"div"),_(1,He,32,9,"div",16),i()),n&2){let e=t.$implicit,s=m(4);r(),l("ngIf",s.turnos[e])}}function je(n,t){if(n&1&&(a(0,"div")(1,"h4"),o(2,"Turnos"),i(),_(3,ze,2,1,"div",12),i()),n&2){let e=m(3);r(3),l("ngForOf",e.objectKeys(e.turnos))}}function Ke(n,t){if(n&1&&(a(0,"div",15)(1,"h3"),o(2),i(),_(3,je,4,1,"div",2),i()),n&2){let e=m(2);r(2),p("Historia Cl\xEDnica de ",e.usuario==null?null:e.usuario.nombre,""),r(),l("ngIf",e.turnos)}}function Ye(n,t){if(n&1&&(a(0,"div",1),_(1,$e,26,8,"div",2)(2,Ne,2,1,"button",3)(3,Ke,4,2,"div",4),i()),n&2){let e=m();r(),l("ngIf",!e.historialVisible),r(),l("ngIf",e.esPaciente),r(),l("ngIf",e.historialVisible)}}var oe=class n{constructor(t){this.turnosService=t}usuario;historiaClinica;turnos={};mostrarHistoriaClinica=!1;historialVisible=!1;ngOnInit(){this.usuario?.uid&&this.obtenerHistoriaClinica(this.usuario.uid)}obtenerHistoriaClinica(t){return g(this,null,function*(){this.turnos=yield this.turnosService.obtenerHistoriaClinica(t),this.turnos&&console.log(this.turnos)})}objectKeys(t){return Object.keys(t)}toggleHistoriaClinica(){this.historialVisible=!this.historialVisible,this.obtenerHistoriaClinica(this.usuario.uid)}get esPaciente(){return this.usuario?.role==="paciente"}get esEspecialista(){return this.usuario?.role==="especialista"}get esAdministrador(){return this.usuario?.role==="administrador"}get textoBotonHistoriaClinica(){return this.mostrarHistoriaClinica?"Ocultar Historia Cl\xEDnica":"Mostrar Historia Cl\xEDnica"}static \u0275fac=function(e){return new(e||n)(O(H))};static \u0275cmp=E({type:n,selectors:[["app-detalle-usuarios"]],inputs:{usuario:"usuario"},decls:1,vars:1,consts:[["class","details-container",4,"ngIf"],[1,"details-container"],[4,"ngIf"],["class","toggle-button",3,"click",4,"ngIf"],["class","historia-clinica",4,"ngIf"],["class","paciente",4,"ngIf"],["class","especialista",4,"ngIf"],["class","administrador",4,"ngIf"],[1,"paciente"],["alt","Imagen de Perfil","width","100",3,"src",4,"ngFor","ngForOf"],["alt","Imagen de Perfil","width","100",3,"src"],[1,"especialista"],[4,"ngFor","ngForOf"],[1,"administrador"],[1,"toggle-button",3,"click"],[1,"historia-clinica"],["class","turno-container",4,"ngIf"],[1,"turno-container"]],template:function(e,s){e&1&&_(0,Ye,4,3,"div",0),e&2&&l("ngIf",s.usuario)},dependencies:[T,A],styles:['@charset "UTF-8";.details-container[_ngcontent-%COMP%]{background-color:#eaeded;border-radius:10px;padding:2rem;box-shadow:0 6px 14px #0003;margin-top:2rem;width:95%}h3[_ngcontent-%COMP%]{color:#1e8449;text-align:center;margin-bottom:1.5rem;font-size:1.8rem}p[_ngcontent-%COMP%]{font-size:1.1rem;margin:.75rem 0;color:#333}strong[_ngcontent-%COMP%]{color:#154360}.paciente[_ngcontent-%COMP%], .especialista[_ngcontent-%COMP%], .administrador[_ngcontent-%COMP%]{margin-top:1.5rem;border:2px solid #1E8449;padding:1.5rem;border-radius:8px;background-color:#1e84491a;transition:background-color .3s ease,transform .2s ease}.paciente[_ngcontent-%COMP%]:hover, .especialista[_ngcontent-%COMP%]:hover, .administrador[_ngcontent-%COMP%]:hover{background-color:#1e84494d;transform:translateY(-2px)}img[_ngcontent-%COMP%]{margin-right:1rem;border-radius:8px;border:2px solid #1E8449}.historia-clinica[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:1rem;margin-top:2rem;border-radius:8px;border:2px solid #154360;transition:background-color .3s ease}.historia-clinica[_ngcontent-%COMP%]:hover{background-color:#1543601a}.historia-clinica[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#1e8449;font-size:1.5rem;margin-bottom:1rem}.historia-clinica[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#333;font-size:1.1rem;margin:.5rem 0}.toggle-button[_ngcontent-%COMP%]{background-color:#1e8449;color:#fff;border:none;padding:.8rem 1.5rem;font-size:1.1rem;border-radius:5px;margin-top:1rem;cursor:pointer;transition:background-color .3s ease,transform .2s ease}.toggle-button[_ngcontent-%COMP%]:hover{background-color:#154360;transform:scale(1.05)}.toggle-button[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0 0 3px #1e84494d}.turno-container[_ngcontent-%COMP%]{margin-bottom:20px;padding:15px;background-color:#f9f9f9;border:1px solid #ddd;border-radius:5px}.turno-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:0;font-size:1.2rem;color:#333}.turno-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}.turno-container[_ngcontent-%COMP%]:nth-child(2n){background-color:#f1f1f1}.turno-container[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}']})};var F=z(K());var Be=(n,t)=>({habilitado:n,inhabilitado:t}),Ge=(n,t)=>({inhabilitar:n,habilitar:t});function Je(n,t){if(n&1){let e=v();a(0,"button",4),x("click",function(){h(e);let d=m().$implicit,c=m();return b(c.alternarEstadoUsuario(d))}),o(1),i()}if(n&2){let e=m().$implicit;l("ngClass",k(2,Ge,e.habilitado,!e.habilitado)),r(),p(" ",e.habilitado?"Inhabilitar":"Habilitar"," ")}}function Qe(n,t){if(n&1){let e=v();a(0,"tr",1),x("click",function(){let d=h(e).$implicit,c=m();return b(c.seleccionarUsuario(d))}),a(1,"td"),o(2),i(),a(3,"td"),o(4),i(),a(5,"td"),o(6),i(),a(7,"td"),o(8),i(),a(9,"td",2),o(10),i(),a(11,"td"),_(12,Je,2,5,"button",3),i()()}if(n&2){let e=t.$implicit;r(2),f(e.nombre),r(2),f(e.apellido),r(2),f(e.email),r(2),f(e.role),r(),l("ngClass",k(7,Be,e.habilitado,!e.habilitado)),r(),p(" ",e.habilitado?"Habilitado":"Inhabilitado"," "),r(2),l("ngIf",e.role==="especialista")}}var ae=class n{constructor(t){this.authService=t}usuarioSeleccionado=new R;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(t){this.usuarioSeleccionado.emit(t)}cargarUsuarios(){return g(this,null,function*(){try{F.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{F.default.showLoading()}});let t=yield this.authService.obtenerUsuarios();this.usuarios=t.filter(e=>e.role==="especialista")}catch(t){console.error("Error al cargar usuarios:",t),F.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{F.default.close()}})}alternarEstadoUsuario(t){return g(this,null,function*(){if(t.role!=="especialista"){F.default.fire({icon:"error",title:"Error",text:"Solo se puede modificar el estado de un especialista."});return}try{t.habilitado?(yield this.authService.inhabilitarUsuario(t.uid),F.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido inhabilitado correctamente."})):(yield this.authService.habilitarUsuario(t.uid),F.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido habilitado correctamente."})),t.habilitado=!t.habilitado}catch(e){console.error("Error al modificar el estado del usuario:",e),F.default.fire({icon:"error",title:"Error",text:"No se pudo modificar el estado del usuario."})}})}static \u0275fac=function(e){return new(e||n)(O(y))};static \u0275cmp=E({type:n,selectors:[["app-listado-especialista"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:19,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"ngClass"],[3,"ngClass","click",4,"ngIf"],[3,"click","ngClass"]],template:function(e,s){e&1&&(a(0,"h2"),o(1,"Listado de Especialistas"),i(),a(2,"table")(3,"thead")(4,"tr")(5,"th"),o(6,"Nombre"),i(),a(7,"th"),o(8,"Apellido"),i(),a(9,"th"),o(10,"Email"),i(),a(11,"th"),o(12,"Rol"),i(),a(13,"th"),o(14,"Estado"),i(),a(15,"th"),o(16,"Cambiar Estado"),i()()(),a(17,"tbody"),_(18,Qe,13,10,"tr",0),i()()),e&2&&(r(18),l("ngForOf",s.usuarios))},dependencies:[w,T,A],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}button[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.9rem;border:none;border-radius:4px;color:#fff;cursor:pointer;transition:background-color .3s ease,transform .2s ease;width:100%}button.habilitar[_ngcontent-%COMP%]{background-color:#1e8449}button.habilitar[_ngcontent-%COMP%]:hover{background-color:#1E8449,10%;transform:scale(1.05)}button.inhabilitar[_ngcontent-%COMP%]{background-color:#c0392b}button.inhabilitar[_ngcontent-%COMP%]:hover{background-color:#C0392B,10%;transform:scale(1.05)}td.habilitado[_ngcontent-%COMP%]{color:#1e8449}td.inhabilitado[_ngcontent-%COMP%]{color:#c0392b}']})};var Q=z(K());var Xe=(n,t)=>({habilitado:n,inhabilitado:t});function Ze(n,t){if(n&1){let e=v();a(0,"tr",1),x("click",function(){let d=h(e).$implicit,c=m();return b(c.seleccionarUsuario(d))}),a(1,"td"),o(2),i(),a(3,"td"),o(4),i(),a(5,"td"),o(6),i(),a(7,"td"),o(8),i(),a(9,"td",2),o(10),i()()}if(n&2){let e=t.$implicit;r(2),f(e.nombre),r(2),f(e.apellido),r(2),f(e.email),r(2),f(e.role),r(),l("ngClass",k(6,Xe,e.habilitado,!e.habilitado)),r(),p(" ",e.habilitado?"Habilitado":"Inhabilitado"," ")}}var re=class n{constructor(t){this.authService=t}usuarioSeleccionado=new R;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(t){this.usuarioSeleccionado.emit(t)}cargarUsuarios(){return g(this,null,function*(){try{Q.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{Q.default.showLoading()}});let t=yield this.authService.obtenerUsuarios();this.usuarios=t.filter(e=>e.role==="administrador")}catch(t){console.error("Error al cargar usuarios:",t),Q.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{Q.default.close()}})}static \u0275fac=function(e){return new(e||n)(O(y))};static \u0275cmp=E({type:n,selectors:[["app-listado-admin"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:17,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"ngClass"]],template:function(e,s){e&1&&(a(0,"h2"),o(1,"Listado de Administradores"),i(),a(2,"table")(3,"thead")(4,"tr")(5,"th"),o(6,"Nombre"),i(),a(7,"th"),o(8,"Apellido"),i(),a(9,"th"),o(10,"Email"),i(),a(11,"th"),o(12,"Rol"),i(),a(13,"th"),o(14,"Estado"),i()()(),a(15,"tbody"),_(16,Ze,11,9,"tr",0),i()()),e&2&&(r(16),l("ngForOf",s.usuarios))},dependencies:[w,T],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}td.habilitado[_ngcontent-%COMP%]{color:#28a745;font-weight:700}td.inhabilitado[_ngcontent-%COMP%]{color:#dc3545;font-weight:700}']})};var ge=n=>({active:n});function tt(n,t){if(n&1){let e=v();a(0,"div",5)(1,"button",6),x("click",function(){h(e);let d=m();return b(d.mostrarListado("especialista"))}),o(2,"Listado Especialistas"),i(),a(3,"button",6),x("click",function(){h(e);let d=m();return b(d.mostrarListado("paciente"))}),o(4,"Listado Pacientes"),i(),a(5,"button",6),x("click",function(){h(e);let d=m();return b(d.mostrarListado("admin"))}),o(6,"Listado Administradores"),i()()}if(n&2){let e=m();r(),l("ngClass",ie(3,ge,e.listadoSeleccionado==="especialista")),r(2),l("ngClass",ie(5,ge,e.listadoSeleccionado==="paciente")),r(2),l("ngClass",ie(7,ge,e.listadoSeleccionado==="admin"))}}function it(n,t){if(n&1){let e=v();a(0,"app-listado-especialista",10),x("usuarioSeleccionado",function(d){h(e);let c=m(2);return b(c.mostrarDetalles(d))}),i()}}function nt(n,t){if(n&1){let e=v();a(0,"app-listado-paciente",10),x("usuarioSeleccionado",function(d){h(e);let c=m(2);return b(c.mostrarDetalles(d))}),i()}}function ot(n,t){if(n&1){let e=v();a(0,"app-listado-admin",10),x("usuarioSeleccionado",function(d){h(e);let c=m(2);return b(c.mostrarDetalles(d))}),i()}}function at(n,t){if(n&1&&N(0,"app-detalle-usuarios",11),n&2){let e=m(2);l("usuario",e.usuarioSeleccionado)}}function rt(n,t){if(n&1&&(a(0,"div",7),_(1,it,1,0,"app-listado-especialista",8)(2,nt,1,0,"app-listado-paciente",8)(3,ot,1,0,"app-listado-admin",8)(4,at,1,1,"app-detalle-usuarios",9),i()),n&2){let e=m();r(),l("ngIf",e.listadoSeleccionado==="especialista"),r(),l("ngIf",e.listadoSeleccionado==="paciente"),r(),l("ngIf",e.listadoSeleccionado==="admin"),r(),l("ngIf",e.usuarioSeleccionado)}}function st(n,t){n&1&&N(0,"app-registro")}var se=class n{registroVisible=!1;listadoSeleccionado="paciente";usuarioSeleccionado=null;toggleRegistro(){this.registroVisible=!this.registroVisible,this.registroVisible&&(this.listadoSeleccionado=null)}mostrarListado(t){this.listadoSeleccionado=t,this.registroVisible=!1}mostrarDetalles(t){this.usuarioSeleccionado=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["app-seccion-usuarios"]],decls:8,vars:4,consts:[["class","botones-container",4,"ngIf"],["class","usuarios-container",4,"ngIf"],[1,"boton-registro-container"],["id","boton-registro",3,"click"],[4,"ngIf"],[1,"botones-container"],[3,"click","ngClass"],[1,"usuarios-container"],[3,"usuarioSeleccionado",4,"ngIf"],[3,"usuario",4,"ngIf"],[3,"usuarioSeleccionado"],[3,"usuario"]],template:function(e,s){e&1&&(a(0,"h2"),o(1," Bienvenido a la secci\xF3n de Usuarios"),i(),_(2,tt,7,9,"div",0)(3,rt,5,4,"div",1),a(4,"div",2)(5,"button",3),x("click",function(){return s.toggleRegistro()}),o(6),i()(),_(7,st,1,0,"app-registro",4)),e&2&&(r(2),l("ngIf",!s.registroVisible),r(),l("ngIf",!s.registroVisible),r(3),p(" ",s.registroVisible?"Ocultar Registro":"Crear Usuario"," "),r(),l("ngIf",s.registroVisible))},dependencies:[w,A,Pe,ne,oe,ae,re],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700}.usuarios-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:1rem;max-height:80vh;overflow-y:auto}app-detalle-usuarios[_ngcontent-%COMP%]{width:100%;max-width:90%;max-height:50vh;overflow-y:auto;margin-top:1rem;background-color:#f8f9fa;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 8px #0000001a;transition:all .3s ease-in-out}app-listado-especialista[_ngcontent-%COMP%], app-listado-paciente[_ngcontent-%COMP%], app-listado-admin[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem}app-detalle-usuarios.ng-enter[_ngcontent-%COMP%]{opacity:0;transform:translateY(-20px)}app-detalle-usuarios.ng-enter-active[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}@media (max-width: 768px){app-detalle-usuarios[_ngcontent-%COMP%]{max-height:40vh;font-size:.9rem}app-registro[_ngcontent-%COMP%]{max-height:60vh;font-size:.9rem}}app-listado-usuarios[_ngcontent-%COMP%]{width:85%;margin-bottom:1rem}app-registro[_ngcontent-%COMP%]{width:100%;max-width:90%;max-height:70vh;overflow-y:auto;background-color:#f8f9fa;padding:1rem;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 8px #0000001a;margin-top:1rem;transition:all .3s ease-in-out}app-registro.ng-enter[_ngcontent-%COMP%]{opacity:0;transform:translateY(-20px)}app-registro.ng-enter-active[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.botones-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:1rem}button[_ngcontent-%COMP%]{margin:0 1rem;padding:.5rem 1rem;border:none;border-radius:4px;background-color:#1e8449;color:#fff;font-size:1rem;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#145a32}button.active[_ngcontent-%COMP%]{background-color:#145a32;font-weight:700}.boton-registro-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1rem}#boton-registro[_ngcontent-%COMP%]{padding:.5rem 1rem;border:none;border-radius:4px;background-color:#1e8449;color:#fff;font-size:1rem;cursor:pointer;transition:background-color .3s ease}#boton-registro[_ngcontent-%COMP%]:hover{background-color:#145a32}']})};var _e=z(K());var ct=(n,t)=>({habilitado:n,inhabilitado:t});function lt(n,t){if(n&1){let e=v();a(0,"tr",2),x("click",function(){let d=h(e).$implicit,c=m();return b(c.seleccionarPaciente(d))}),a(1,"td"),o(2),i(),a(3,"td"),o(4),i(),a(5,"td"),o(6),i(),a(7,"td"),o(8),i(),a(9,"td",3),o(10),i()()}if(n&2){let e=t.$implicit;r(2),f(e.nombre),r(2),f(e.apellido),r(2),f(e.email),r(2),f(e.obraSocial),r(),l("ngClass",k(6,ct,e.habilitado,!e.habilitado)),r(),p(" ",e.habilitado?"Habilitado":"Inhabilitado"," ")}}function dt(n,t){if(n&1&&(a(0,"div")(1,"h3"),o(2,"Detalles del Paciente"),i(),a(3,"p")(4,"strong"),o(5,"Nombre:"),i(),o(6),i(),a(7,"p")(8,"strong"),o(9,"Apellido:"),i(),o(10),i(),a(11,"p")(12,"strong"),o(13,"Edad:"),i(),o(14),i(),a(15,"p")(16,"strong"),o(17,"DNI:"),i(),o(18),i(),a(19,"p")(20,"strong"),o(21,"Mail:"),i(),o(22),i()()),n&2){let e=m(2);r(6),p(" ",e.pacienteSeleccionado.nombre,""),r(4),p(" ",e.pacienteSeleccionado.apellido,""),r(4),p(" ",e.pacienteSeleccionado.edad,""),r(4),p(" ",e.pacienteSeleccionado.dni,""),r(4),p(" ",e.pacienteSeleccionado.email,"")}}function pt(n,t){if(n&1&&(a(0,"div")(1,"p")(2,"strong"),o(3),i(),o(4),i()()),n&2){let e=t.$implicit;r(3),p("",e.clave,":"),r(),p(" ",e.valor,"")}}function mt(n,t){if(n&1&&(a(0,"div")(1,"h5"),o(2,"Otros Datos:"),i(),_(3,pt,5,2,"div",9),i()),n&2){let e=m(2).$implicit,s=m(4);r(3),l("ngForOf",s.turnos[e].datosDinamicos)}}function ut(n,t){if(n&1&&(a(0,"div",11)(1,"h5"),o(2),i(),a(3,"p")(4,"strong"),o(5,"Especialidad:"),i(),o(6),i(),a(7,"p")(8,"strong"),o(9,"Especialista:"),i(),o(10),i(),a(11,"p")(12,"strong"),o(13,"Fecha:"),i(),o(14),i(),a(15,"p")(16,"strong"),o(17,"Altura:"),i(),o(18),i(),a(19,"p")(20,"strong"),o(21,"Peso:"),i(),o(22),i(),a(23,"p")(24,"strong"),o(25,"Temperatura:"),i(),o(26),i(),a(27,"p")(28,"strong"),o(29,"Presi\xF3n:"),i(),o(30),i(),_(31,mt,4,1,"div",5),i()),n&2){let e=m().$implicit,s=m(4);r(2),p("Turno de ",s.turnos[e].especialidad,""),r(4),p(" ",s.turnos[e].especialidad,""),r(4),p(" ",s.turnos[e].nombreEspecialista,""),r(4),p(" ",s.turnos[e].fechaTurno,""),r(4),p(" ",s.turnos[e].altura,""),r(4),p(" ",s.turnos[e].peso,""),r(4),p(" ",s.turnos[e].temperatura,""),r(4),p(" ",s.turnos[e].presion,""),r(),l("ngIf",s.turnos[e].datosDinamicos&&s.turnos[e].datosDinamicos.length>0)}}function gt(n,t){if(n&1&&(a(0,"div"),_(1,ut,32,9,"div",10),i()),n&2){let e=t.$implicit,s=m(4);r(),l("ngIf",s.turnos[e])}}function _t(n,t){if(n&1&&(a(0,"div")(1,"h4"),o(2,"Turnos"),i(),_(3,gt,2,1,"div",9),i()),n&2){let e=m(3);r(3),l("ngForOf",e.objectKeys(e.turnos))}}function ft(n,t){if(n&1&&(a(0,"div",8)(1,"h3"),o(2),i(),_(3,_t,4,1,"div",5),i()),n&2){let e=m(2);r(2),p("Historia Cl\xEDnica de ",e.pacienteSeleccionado==null?null:e.pacienteSeleccionado.nombre,""),r(),l("ngIf",e.turnos)}}function xt(n,t){if(n&1){let e=v();a(0,"div",4),_(1,dt,23,5,"div",5),a(2,"button",6),x("click",function(){h(e);let d=m();return b(d.toggleHistoriaClinica())}),o(3),i(),_(4,ft,4,2,"div",7),i()}if(n&2){let e=m();r(),l("ngIf",!e.historialVisible),r(2),p(" ",e.historialVisible?"Ocultar Historia Cl\xEDnica":"Mostrar Historia Cl\xEDnica"," "),r(),l("ngIf",e.historialVisible)}}var ce=class n{constructor(t,e){this.authenticationService=t;this.turnosService=e}pacientesAtendidos=[];pacienteSeleccionado=null;turnos={};historialVisible=!1;usuario;ngOnInit(){this.cargarPacientesAtendidos()}cargarPacientesAtendidos(){this.authenticationService.getUser().subscribe(t=>{t?(this.usuario=t,this.turnosService.obtenerPacientesAtendidosPorEspecialista(this.usuario.uid).then(e=>{console.log("Pacientes atendidos:",e),this.pacientesAtendidos=e}).catch(e=>{_e.default.fire("Error","No se pudieron cargar los pacientes atendidos","error")})):_e.default.fire("Error","No se encontr\xF3 el usuario","error")})}seleccionarPaciente(t){this.pacienteSeleccionado=t,this.historialVisible=!1}toggleHistoriaClinica(){this.historialVisible=!this.historialVisible,this.historialVisible&&this.obtenerHistoriaClinica(this.pacienteSeleccionado.uid)}obtenerHistoriaClinica(t){return g(this,null,function*(){this.turnos=yield this.turnosService.obtenerHistoriaClinica(t)})}objectKeys(t){return Object.keys(t)}static \u0275fac=function(e){return new(e||n)(O(y),O(H))};static \u0275cmp=E({type:n,selectors:[["app-seccion-pacientes"]],decls:18,vars:2,consts:[[3,"click",4,"ngFor","ngForOf"],["class","details-container",4,"ngIf"],[3,"click"],[3,"ngClass"],[1,"details-container"],[4,"ngIf"],[1,"toggle-button",3,"click"],["class","historia-clinica",4,"ngIf"],[1,"historia-clinica"],[4,"ngFor","ngForOf"],["class","turno-container",4,"ngIf"],[1,"turno-container"]],template:function(e,s){e&1&&(a(0,"h2"),o(1,"Listado de Pacientes Atendidos"),i(),a(2,"table")(3,"thead")(4,"tr")(5,"th"),o(6,"Nombre"),i(),a(7,"th"),o(8,"Apellido"),i(),a(9,"th"),o(10,"Email"),i(),a(11,"th"),o(12,"Obra Social"),i(),a(13,"th"),o(14,"Estado"),i()()(),a(15,"tbody"),_(16,lt,11,9,"tr",0),i()(),_(17,xt,5,3,"div",1)),e&2&&(r(16),l("ngForOf",s.pacientesAtendidos),r(),l("ngIf",s.pacienteSeleccionado))},dependencies:[w,T,A],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}td.habilitado[_ngcontent-%COMP%]{color:#28a745;font-weight:700}td.inhabilitado[_ngcontent-%COMP%]{color:#dc3545;font-weight:700}.details-container[_ngcontent-%COMP%]{background-color:#eaeded;border-radius:10px;padding:2rem;box-shadow:0 6px 14px #0003;margin-top:2rem;width:95%}h3[_ngcontent-%COMP%]{color:#1e8449;text-align:center;margin-bottom:1.5rem;font-size:1.8rem}p[_ngcontent-%COMP%]{font-size:1.1rem;margin:.75rem 0;color:#333}strong[_ngcontent-%COMP%]{color:#154360}.paciente[_ngcontent-%COMP%], .especialista[_ngcontent-%COMP%], .administrador[_ngcontent-%COMP%]{margin-top:1.5rem;border:2px solid #1E8449;padding:1.5rem;border-radius:8px;background-color:#1e84491a;transition:background-color .3s ease,transform .2s ease}.paciente[_ngcontent-%COMP%]:hover, .especialista[_ngcontent-%COMP%]:hover, .administrador[_ngcontent-%COMP%]:hover{background-color:#1e84494d;transform:translateY(-2px)}img[_ngcontent-%COMP%]{margin-right:1rem;border-radius:8px;border:2px solid #1E8449}.historia-clinica[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:1rem;margin-top:2rem;border-radius:8px;border:2px solid #154360;transition:background-color .3s ease}.historia-clinica[_ngcontent-%COMP%]:hover{background-color:#1543601a}.historia-clinica[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#1e8449;font-size:1.5rem;margin-bottom:1rem}.historia-clinica[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#333;font-size:1.1rem;margin:.5rem 0}.toggle-button[_ngcontent-%COMP%]{background-color:#1e8449;color:#fff;border:none;padding:.8rem 1.5rem;font-size:1.1rem;border-radius:5px;margin-top:1rem;cursor:pointer;transition:background-color .3s ease,transform .2s ease}.toggle-button[_ngcontent-%COMP%]:hover{background-color:#154360;transform:scale(1.05)}.toggle-button[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0 0 3px #1e84494d}.turno-container[_ngcontent-%COMP%]{margin-bottom:20px;padding:15px;background-color:#f9f9f9;border:1px solid #ddd;border-radius:5px}.turno-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:0;font-size:1.2rem;color:#333}.turno-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}.turno-container[_ngcontent-%COMP%]:nth-child(2n){background-color:#f1f1f1}.turno-container[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}']})};var le=class n{constructor(t,e){this.authService=t;this.router=e}canActivate(t,e){return this.authService.getUser().pipe(xe(s=>s&&s.role==="administrador"?!0:(this.router.navigate(["/home"]),console.log("no es administrador verifica las cosas bien"),!1)))}static \u0275fac=function(e){return new(e||n)(L(y),L(be))};static \u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})};var ht=[{path:"seccion-usuarios",component:se,canActivate:[le]},{path:"seccion-pacientes",component:ce}],de=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=ee({type:n});static \u0275inj=Z({imports:[me.forChild(ht),me]})};var Me=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=ee({type:n});static \u0275inj=Z({imports:[he,de,ve,Ce,ye]})};export{ne as a,H as b,le as c,Me as d};