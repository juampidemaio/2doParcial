import{A as _,Aa as J,B as g,Ca as xt,Da as bt,J as Y,K as F,O as w,P as T,Q as N,S as ut,X as rt,a as M,aa as mt,b as dt,c as j,ca as S,d as m,da as v,ea as G,f as pt,fa as k,g as K,h as at,ha as gt,i as O,ia as E,j as q,ja as st,k as b,ka as D,l as h,m as L,n as B,o as s,p as I,q as f,r as d,s as o,t as n,u as U,v as C,w as x,x as u,ya as ft,z as a,za as _t}from"./chunk-UOP4LCGL.js";var A=j(J());var St=(i,e)=>({habilitado:i,inhabilitado:e});function Et(i,e){if(i&1){let t=C();o(0,"tr",1),x("click",function(){let l=b(t).$implicit,c=u();return h(c.seleccionarUsuario(l))}),o(1,"td"),a(2),n(),o(3,"td"),a(4),n(),o(5,"td"),a(6),n(),o(7,"td"),a(8),n(),o(9,"td",2),a(10),n()()}if(i&2){let t=e.$implicit;s(2),_(t.nombre),s(2),_(t.apellido),s(2),_(t.email),s(2),_(t.role),s(),d("ngClass",F(6,St,t.habilitado,!t.habilitado)),s(),g(" ",t.habilitado?"Habilitado":"Inhabilitado"," ")}}var Q=class i{constructor(e){this.authService=e}usuarioSeleccionado=new L;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(e){this.usuarioSeleccionado.emit(e)}cargarUsuarios(){return m(this,null,function*(){try{A.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{A.default.showLoading()}});let e=yield this.authService.obtenerUsuarios();this.usuarios=e.filter(t=>t.role==="paciente")}catch(e){console.error("Error al cargar usuarios:",e),A.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{A.default.close()}})}static \u0275fac=function(t){return new(t||i)(I(D))};static \u0275cmp=O({type:i,selectors:[["app-listado-paciente"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:17,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"ngClass"]],template:function(t,r){t&1&&(o(0,"h2"),a(1,"Listado de Pacientes"),n(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),a(6,"Nombre"),n(),o(7,"th"),a(8,"Apellido"),n(),o(9,"th"),a(10,"Email"),n(),o(11,"th"),a(12,"Rol"),n(),o(13,"th"),a(14,"Estado"),n()()(),o(15,"tbody"),f(16,Et,11,9,"tr",0),n()()),t&2&&(s(16),d("ngForOf",r.usuarios))},dependencies:[w,T],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}td.habilitado[_ngcontent-%COMP%]{color:#28a745;font-weight:700}td.inhabilitado[_ngcontent-%COMP%]{color:#dc3545;font-weight:700}']})};var R=j(J());var Z=class i{constructor(e,t){this.firestore=e;this.authService=t}guardarDisponibilidadEspecialidad(e,t,r){return m(this,null,function*(){let l=`${e}_${r.replace(/\s+/g,"_")}`,c=v(S(this.firestore,"Disponibilidad"),l);yield E(c,{disponibilidad:t,especialidad:r,especialista_id:e})})}guardarDisponibilidad(e,t){return m(this,null,function*(){let r=v(S(this.firestore,"Disponibilidad"),e);yield E(r,{disponibilidad:t})})}guardarTurnos(e){return m(this,null,function*(){let t=S(this.firestore,"Turnos"),r=e.map(l=>{let c=v(t);return E(c,l)});yield Promise.all(r)})}obtenerTurnos(){return m(this,null,function*(){let e=S(this.firestore,"Turnos"),r=(yield k(e)).docs;return console.log("Turnos disponibles:",r),r})}obtenerTurnosDisponibles(e,t){return m(this,null,function*(){let r=S(this.firestore,"Turnos"),c=(yield k(r)).docs.map(p=>{let y=p.data();return M({id:p.id},y)}).filter(p=>{let y=p.especialista_id===e,$=p.especialidad===t,z=p.estado==="disponible";return console.log(`Turno ID: ${p.id}, Especialista ID: ${p.especialista_id}, Estado: ${p.estado}, Coincide: ${y&&z}`),y&&z&&$});return console.log("Turnos disponibles:",c),c})}obtenerTurnosDisponiblesEspecialista(e){return m(this,null,function*(){let t=S(this.firestore,"Turnos"),l=(yield k(t)).docs.map(c=>{let p=c.data();return M({id:c.id},p)}).filter(c=>{let p=c.especialista_id===e;return console.log(`Turno ID: ${c.id}, Especialista ID: ${c.especialista_id}`),p});return console.log("Turnos solicitados:",l),l})}obtenerTurnosDisponiblesPacienteEspecialista(e,t){return m(this,null,function*(){let r=S(this.firestore,"Turnos"),c=(yield k(r)).docs.map(p=>{let y=p.data();return M({id:p.id},y)}).filter(p=>{let y=p.especialista_id===t,$=p.pacienteId===e;return console.log(`Turno ID: ${p.id}, Paciente ID: ${p.pacienteId}`),$&&y});return console.log("Turnos solicitados:",c),c})}obtenerTurnosDisponiblesPaciente(e){return m(this,null,function*(){let t=S(this.firestore,"Turnos"),l=(yield k(t)).docs.map(c=>{let p=c.data();return M({id:c.id},p)}).filter(c=>{let p=c.pacienteId===e;return console.log(`Turno ID: ${c.id}, Paciente ID: ${c.pacienteId}`),p});return console.log("Turnos solicitados:",l),l})}obtenerTurnosEspecialidad(e){return m(this,null,function*(){let t=S(this.firestore,"Turnos"),l=(yield k(t)).docs.map(c=>{let p=c.data();return M({id:c.id},p)}).filter(c=>{let p=c.especialidad===e;return console.log(`Turno ID: ${c.id}, especialidad : ${c.especialidad}`),p});return console.log("Turnos solicitados:",l),l})}obtenerDisponibilidadEspecialista(e,t){return m(this,null,function*(){let r=S(this.firestore,"Disponibilidad"),l=gt(r,st("especialista_id","==",e),st("especialidad","==",t)),c=yield k(l);return c.empty?(console.log("No existe la disponibilidad para este especialista y especialidad."),null):c.docs[0].data().disponibilidad})}obtenerDisponibilidad(e){return m(this,null,function*(){let t=v(this.firestore,`Disponibilidad/${e}`),r=yield G(t);return r.exists()?r.data().disponibilidad:(console.log("No existe la disponibilidad para este especialista."),null)})}solicitarTurno(e,t){return m(this,null,function*(){let r=v(this.firestore,`Turnos/${e.horario}`);yield E(r,dt(M({},e),{estado:"solicitado",pacienteId:t}),{merge:!0})})}cancelarTurno(e,t){return m(this,null,function*(){let r=v(this.firestore,`Turnos/${e}`);yield E(r,{estado:"cancelado",motivoCancelacion:t},{merge:!0})})}aceptarTurno(e){return m(this,null,function*(){let t=v(this.firestore,`Turnos/${e}`);yield E(t,{estado:"aceptado"},{merge:!0})})}finalizarTurno(l,c){return m(this,arguments,function*(e,{diagnostico:t,rese\u00F1a:r}){let p=v(this.firestore,`Turnos/${e}`);yield E(p,{estado:"realizado",rese\u00F1a:r,diagnostico:t},{merge:!0})})}finalizarTurnoHistoriaClinica(r,l){return m(this,arguments,function*(e,{historiaClinica:t}){let c=e.pacienteId,p=e.especialidad,y=e.especialista,$=e.fecha,z=e.especialista_id,Ct=`turno_${$}_${p}`,vt=v(this.firestore,`historiaClinica/${c}`);yield E(vt,{turnos:{[Ct]:M({especialidad:p,nombreEspecialista:y,idEspecialista:z,fechaTurno:$},t)}},{merge:!0})})}obtenerHistoriaClinica(e){return m(this,null,function*(){let t=v(this.firestore,`historiaClinica/${e}`),r=yield G(t);if(r.exists()){let c=r.data()?.turnos;if(c)return c}else return console.log("No existe el documento del paciente."),null})}obtenerRese\u00F1aTurno(e){return m(this,null,function*(){let t=v(this.firestore,`Turnos/${e}`);try{let r=yield G(t);if(r.exists()){let l=r.data()?.rese\u00F1a;l?R.default.fire("Rese\xF1a del Turno",l,"info"):R.default.fire("Aviso","No hay rese\xF1a disponible para este turno","info")}else R.default.fire("Error","El turno no existe","error")}catch(r){R.default.fire("Error","No se pudo obtener la rese\xF1a","error"),console.error("Error al obtener rese\xF1a:",r)}})}guardarEncuesta(e,t){return m(this,null,function*(){let r=v(this.firestore,`Turnos/${e}`);yield E(r,{encuesta:t},{merge:!0}),console.log("Encuesta guardada con \xE9xito")})}guardarCalificacion(e,t){return m(this,null,function*(){let r=v(this.firestore,`Turnos/${e}`);yield E(r,{calificacionTurno:t},{merge:!0})})}static \u0275fac=function(t){return new(t||i)(at(mt),at(D))};static \u0275prov=pt({token:i,factory:i.\u0275fac,providedIn:"root"})};function Pt(i,e){if(i&1&&U(0,"img",10),i&2){let t=e.$implicit;d("src",t,B)}}function Mt(i,e){if(i&1&&(o(0,"div",8)(1,"p")(2,"strong"),a(3,"Obra Social:"),n(),a(4),n(),o(5,"div")(6,"strong"),a(7,"Im\xE1genes de Perfil:"),n(),f(8,Pt,1,1,"img",9),n()()),i&2){let t=u(3);s(4),g(" ",t.usuario.obraSocial,""),s(4),d("ngForOf",t.usuario.imagenes)}}function It(i,e){if(i&1&&(o(0,"li"),a(1),n()),i&2){let t=e.$implicit;s(),_(t)}}function wt(i,e){if(i&1&&(o(0,"div",11)(1,"p")(2,"strong"),a(3,"Especialidades:"),n()(),o(4,"p"),a(5),n(),o(6,"ul"),f(7,It,2,1,"li",12),n(),o(8,"strong"),a(9,"Im\xE1gen de Perfil:"),n(),U(10,"img",10),n()),i&2){let t=u(3);s(5),_(t.usuario.especialidad),s(2),d("ngForOf",t.usuario.especialidades),s(3),d("src",t.usuario.imageUrl,B)}}function Tt(i,e){if(i&1&&(o(0,"div",13)(1,"div")(2,"strong"),a(3,"Im\xE1gen de Perfil:"),n(),U(4,"img",10),n()()),i&2){let t=u(3);s(4),d("src",t.usuario.imageUrl,B)}}function kt(i,e){if(i&1&&(o(0,"div")(1,"h3"),a(2,"Detalles del Usuario"),n(),o(3,"p")(4,"strong"),a(5,"Nombre:"),n(),a(6),n(),o(7,"p")(8,"strong"),a(9,"Apellido:"),n(),a(10),n(),o(11,"p")(12,"strong"),a(13,"Edad:"),n(),a(14),n(),o(15,"p")(16,"strong"),a(17,"DNI:"),n(),a(18),n(),o(19,"p")(20,"strong"),a(21,"Mail:"),n(),a(22),n(),f(23,Mt,9,2,"div",5)(24,wt,11,3,"div",6)(25,Tt,5,1,"div",7),n()),i&2){let t=u(2);s(6),g(" ",t.usuario.nombre,""),s(4),g(" ",t.usuario.apellido,""),s(4),g(" ",t.usuario.edad,""),s(4),g(" ",t.usuario.dni,""),s(4),g(" ",t.usuario.email,""),s(),d("ngIf",t.esPaciente),s(),d("ngIf",t.esEspecialista),s(),d("ngIf",t.esAdministrador)}}function Dt(i,e){if(i&1){let t=C();o(0,"button",14),x("click",function(){b(t);let l=u(2);return h(l.toggleHistoriaClinica())}),a(1),n()}if(i&2){let t=u(2);s(),g(" ",t.historialVisible?"Ocultar Historia Cl\xEDnica":"Mostrar Historia Cl\xEDnica"," ")}}function Ut(i,e){if(i&1&&(o(0,"div")(1,"p")(2,"strong"),a(3),n(),a(4),n()()),i&2){let t=e.$implicit;s(3),g("",t.clave,":"),s(),g(" ",t.valor,"")}}function Ft(i,e){if(i&1&&(o(0,"div")(1,"h6"),a(2,"Otros Datos:"),n(),f(3,Ut,5,2,"div",12),n()),i&2){let t=u(2).$implicit,r=u(4);s(3),d("ngForOf",r.turnos[t].datosDinamicos)}}function Vt(i,e){if(i&1&&(o(0,"div",17)(1,"h5"),a(2),n(),o(3,"p")(4,"strong"),a(5,"Especialidad:"),n(),a(6),n(),o(7,"p")(8,"strong"),a(9,"Especialista:"),n(),a(10),n(),o(11,"p")(12,"strong"),a(13,"Fecha:"),n(),a(14),n(),o(15,"p")(16,"strong"),a(17,"Altura:"),n(),a(18),n(),o(19,"p")(20,"strong"),a(21,"Peso:"),n(),a(22),n(),o(23,"p")(24,"strong"),a(25,"Temperatura:"),n(),a(26),n(),o(27,"p")(28,"strong"),a(29,"Presi\xF3n:"),n(),a(30),n(),f(31,Ft,4,1,"div",2),n()),i&2){let t=u().$implicit,r=u(4);s(2),g("Turno de ",r.turnos[t].especialidad,""),s(4),g(" ",r.turnos[t].especialidad,""),s(4),g(" ",r.turnos[t].nombreEspecialista,""),s(4),g(" ",r.turnos[t].fechaTurno,""),s(4),g(" ",r.turnos[t].altura,""),s(4),g(" ",r.turnos[t].peso,""),s(4),g(" ",r.turnos[t].temperatura,""),s(4),g(" ",r.turnos[t].presion,""),s(),d("ngIf",r.turnos[t].datosDinamicos&&r.turnos[t].datosDinamicos.length>0)}}function $t(i,e){if(i&1&&(o(0,"div"),f(1,Vt,32,9,"div",16),n()),i&2){let t=e.$implicit,r=u(4);s(),d("ngIf",r.turnos[t])}}function Lt(i,e){if(i&1&&(o(0,"div")(1,"h4"),a(2,"Turnos"),n(),f(3,$t,2,1,"div",12),n()),i&2){let t=u(3);s(3),d("ngForOf",t.objectKeys(t.turnos))}}function Nt(i,e){if(i&1&&(o(0,"div",15)(1,"h3"),a(2),n(),f(3,Lt,4,1,"div",2),n()),i&2){let t=u(2);s(2),g("Historia Cl\xEDnica de ",t.usuario==null?null:t.usuario.nombre,""),s(),d("ngIf",t.turnos)}}function At(i,e){if(i&1&&(o(0,"div",1),f(1,kt,26,8,"div",2)(2,Dt,2,1,"button",3)(3,Nt,4,2,"div",4),n()),i&2){let t=u();s(),d("ngIf",!t.historialVisible),s(),d("ngIf",t.esPaciente),s(),d("ngIf",t.historialVisible)}}var tt=class i{constructor(e){this.turnosService=e}usuario;historiaClinica;turnos={};mostrarHistoriaClinica=!1;historialVisible=!1;ngOnInit(){this.usuario?.uid&&this.obtenerHistoriaClinica(this.usuario.uid)}obtenerHistoriaClinica(e){return m(this,null,function*(){this.turnos=yield this.turnosService.obtenerHistoriaClinica(e),this.turnos&&console.log(this.turnos)})}objectKeys(e){return Object.keys(e)}toggleHistoriaClinica(){this.historialVisible=!this.historialVisible,this.obtenerHistoriaClinica(this.usuario.uid)}get esPaciente(){return this.usuario?.role==="paciente"}get esEspecialista(){return this.usuario?.role==="especialista"}get esAdministrador(){return this.usuario?.role==="administrador"}get textoBotonHistoriaClinica(){return this.mostrarHistoriaClinica?"Ocultar Historia Cl\xEDnica":"Mostrar Historia Cl\xEDnica"}static \u0275fac=function(t){return new(t||i)(I(Z))};static \u0275cmp=O({type:i,selectors:[["app-detalle-usuarios"]],inputs:{usuario:"usuario"},decls:1,vars:1,consts:[["class","details-container",4,"ngIf"],[1,"details-container"],[4,"ngIf"],["class","toggle-button",3,"click",4,"ngIf"],["class","historia-clinica",4,"ngIf"],["class","paciente",4,"ngIf"],["class","especialista",4,"ngIf"],["class","administrador",4,"ngIf"],[1,"paciente"],["alt","Imagen de Perfil","width","100",3,"src",4,"ngFor","ngForOf"],["alt","Imagen de Perfil","width","100",3,"src"],[1,"especialista"],[4,"ngFor","ngForOf"],[1,"administrador"],[1,"toggle-button",3,"click"],[1,"historia-clinica"],["class","turno-container",4,"ngIf"],[1,"turno-container"]],template:function(t,r){t&1&&f(0,At,4,3,"div",0),t&2&&d("ngIf",r.usuario)},dependencies:[T,N],styles:['@charset "UTF-8";.details-container[_ngcontent-%COMP%]{background-color:#eaeded;border-radius:10px;padding:2rem;box-shadow:0 6px 14px #0003;margin-top:2rem;width:95%}h3[_ngcontent-%COMP%]{color:#1e8449;text-align:center;margin-bottom:1.5rem;font-size:1.8rem}p[_ngcontent-%COMP%]{font-size:1.1rem;margin:.75rem 0;color:#333}strong[_ngcontent-%COMP%]{color:#154360}.paciente[_ngcontent-%COMP%], .especialista[_ngcontent-%COMP%], .administrador[_ngcontent-%COMP%]{margin-top:1.5rem;border:2px solid #1E8449;padding:1.5rem;border-radius:8px;background-color:#1e84491a;transition:background-color .3s ease,transform .2s ease}.paciente[_ngcontent-%COMP%]:hover, .especialista[_ngcontent-%COMP%]:hover, .administrador[_ngcontent-%COMP%]:hover{background-color:#1e84494d;transform:translateY(-2px)}img[_ngcontent-%COMP%]{margin-right:1rem;border-radius:8px;border:2px solid #1E8449}.historia-clinica[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:1rem;margin-top:2rem;border-radius:8px;border:2px solid #154360;transition:background-color .3s ease}.historia-clinica[_ngcontent-%COMP%]:hover{background-color:#1543601a}.historia-clinica[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#1e8449;font-size:1.5rem;margin-bottom:1rem}.historia-clinica[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#333;font-size:1.1rem;margin:.5rem 0}.toggle-button[_ngcontent-%COMP%]{background-color:#1e8449;color:#fff;border:none;padding:.8rem 1.5rem;font-size:1.1rem;border-radius:5px;margin-top:1rem;cursor:pointer;transition:background-color .3s ease,transform .2s ease}.toggle-button[_ngcontent-%COMP%]:hover{background-color:#154360;transform:scale(1.05)}.toggle-button[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0 0 3px #1e84494d}.turno-container[_ngcontent-%COMP%]{margin-bottom:20px;padding:15px;background-color:#f9f9f9;border:1px solid #ddd;border-radius:5px}.turno-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:0;font-size:1.2rem;color:#333}.turno-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}.turno-container[_ngcontent-%COMP%]:nth-child(2n){background-color:#f1f1f1}.turno-container[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}']})};var P=j(J());var Ht=(i,e)=>({habilitado:i,inhabilitado:e}),zt=(i,e)=>({inhabilitar:i,habilitar:e});function jt(i,e){if(i&1){let t=C();o(0,"button",4),x("click",function(){b(t);let l=u().$implicit,c=u();return h(c.alternarEstadoUsuario(l))}),a(1),n()}if(i&2){let t=u().$implicit;d("ngClass",F(2,zt,t.habilitado,!t.habilitado)),s(),g(" ",t.habilitado?"Inhabilitar":"Habilitar"," ")}}function Kt(i,e){if(i&1){let t=C();o(0,"tr",1),x("click",function(){let l=b(t).$implicit,c=u();return h(c.seleccionarUsuario(l))}),o(1,"td"),a(2),n(),o(3,"td"),a(4),n(),o(5,"td"),a(6),n(),o(7,"td"),a(8),n(),o(9,"td",2),a(10),n(),o(11,"td"),f(12,jt,2,5,"button",3),n()()}if(i&2){let t=e.$implicit;s(2),_(t.nombre),s(2),_(t.apellido),s(2),_(t.email),s(2),_(t.role),s(),d("ngClass",F(7,Ht,t.habilitado,!t.habilitado)),s(),g(" ",t.habilitado?"Habilitado":"Inhabilitado"," "),s(2),d("ngIf",t.role==="especialista")}}var et=class i{constructor(e){this.authService=e}usuarioSeleccionado=new L;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(e){this.usuarioSeleccionado.emit(e)}cargarUsuarios(){return m(this,null,function*(){try{P.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{P.default.showLoading()}});let e=yield this.authService.obtenerUsuarios();this.usuarios=e.filter(t=>t.role==="especialista")}catch(e){console.error("Error al cargar usuarios:",e),P.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{P.default.close()}})}alternarEstadoUsuario(e){return m(this,null,function*(){if(e.role!=="especialista"){P.default.fire({icon:"error",title:"Error",text:"Solo se puede modificar el estado de un especialista."});return}try{e.habilitado?(yield this.authService.inhabilitarUsuario(e.uid),P.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido inhabilitado correctamente."})):(yield this.authService.habilitarUsuario(e.uid),P.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido habilitado correctamente."})),e.habilitado=!e.habilitado}catch(t){console.error("Error al modificar el estado del usuario:",t),P.default.fire({icon:"error",title:"Error",text:"No se pudo modificar el estado del usuario."})}})}static \u0275fac=function(t){return new(t||i)(I(D))};static \u0275cmp=O({type:i,selectors:[["app-listado-especialista"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:19,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"ngClass"],[3,"ngClass","click",4,"ngIf"],[3,"click","ngClass"]],template:function(t,r){t&1&&(o(0,"h2"),a(1,"Listado de Especialistas"),n(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),a(6,"Nombre"),n(),o(7,"th"),a(8,"Apellido"),n(),o(9,"th"),a(10,"Email"),n(),o(11,"th"),a(12,"Rol"),n(),o(13,"th"),a(14,"Estado"),n(),o(15,"th"),a(16,"Cambiar Estado"),n()()(),o(17,"tbody"),f(18,Kt,13,10,"tr",0),n()()),t&2&&(s(18),d("ngForOf",r.usuarios))},dependencies:[w,T,N],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}button[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.9rem;border:none;border-radius:4px;color:#fff;cursor:pointer;transition:background-color .3s ease,transform .2s ease;width:100%}button.habilitar[_ngcontent-%COMP%]{background-color:#1e8449}button.habilitar[_ngcontent-%COMP%]:hover{background-color:#1E8449,10%;transform:scale(1.05)}button.inhabilitar[_ngcontent-%COMP%]{background-color:#c0392b}button.inhabilitar[_ngcontent-%COMP%]:hover{background-color:#C0392B,10%;transform:scale(1.05)}td.habilitado[_ngcontent-%COMP%]{color:#1e8449}td.inhabilitado[_ngcontent-%COMP%]{color:#c0392b}']})};var H=j(J());var Bt=(i,e)=>({habilitado:i,inhabilitado:e});function Yt(i,e){if(i&1){let t=C();o(0,"tr",1),x("click",function(){let l=b(t).$implicit,c=u();return h(c.seleccionarUsuario(l))}),o(1,"td"),a(2),n(),o(3,"td"),a(4),n(),o(5,"td"),a(6),n(),o(7,"td"),a(8),n(),o(9,"td",2),a(10),n()()}if(i&2){let t=e.$implicit;s(2),_(t.nombre),s(2),_(t.apellido),s(2),_(t.email),s(2),_(t.role),s(),d("ngClass",F(6,Bt,t.habilitado,!t.habilitado)),s(),g(" ",t.habilitado?"Habilitado":"Inhabilitado"," ")}}var it=class i{constructor(e){this.authService=e}usuarioSeleccionado=new L;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(e){this.usuarioSeleccionado.emit(e)}cargarUsuarios(){return m(this,null,function*(){try{H.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{H.default.showLoading()}});let e=yield this.authService.obtenerUsuarios();this.usuarios=e.filter(t=>t.role==="administrador")}catch(e){console.error("Error al cargar usuarios:",e),H.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{H.default.close()}})}static \u0275fac=function(t){return new(t||i)(I(D))};static \u0275cmp=O({type:i,selectors:[["app-listado-admin"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:17,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"ngClass"]],template:function(t,r){t&1&&(o(0,"h2"),a(1,"Listado de Administradores"),n(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),a(6,"Nombre"),n(),o(7,"th"),a(8,"Apellido"),n(),o(9,"th"),a(10,"Email"),n(),o(11,"th"),a(12,"Rol"),n(),o(13,"th"),a(14,"Estado"),n()()(),o(15,"tbody"),f(16,Yt,11,9,"tr",0),n()()),t&2&&(s(16),d("ngForOf",r.usuarios))},dependencies:[w,T],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}td.habilitado[_ngcontent-%COMP%]{color:#28a745;font-weight:700}td.inhabilitado[_ngcontent-%COMP%]{color:#dc3545;font-weight:700}']})};var lt=i=>({active:i});function Jt(i,e){if(i&1){let t=C();o(0,"div",5)(1,"button",6),x("click",function(){b(t);let l=u();return h(l.mostrarListado("especialista"))}),a(2,"Listado Especialistas"),n(),o(3,"button",6),x("click",function(){b(t);let l=u();return h(l.mostrarListado("paciente"))}),a(4,"Listado Pacientes"),n(),o(5,"button",6),x("click",function(){b(t);let l=u();return h(l.mostrarListado("admin"))}),a(6,"Listado Administradores"),n()()}if(i&2){let t=u();s(),d("ngClass",Y(3,lt,t.listadoSeleccionado==="especialista")),s(2),d("ngClass",Y(5,lt,t.listadoSeleccionado==="paciente")),s(2),d("ngClass",Y(7,lt,t.listadoSeleccionado==="admin"))}}function Qt(i,e){if(i&1){let t=C();o(0,"app-listado-especialista",10),x("usuarioSeleccionado",function(l){b(t);let c=u(2);return h(c.mostrarDetalles(l))}),n()}}function Wt(i,e){if(i&1){let t=C();o(0,"app-listado-paciente",10),x("usuarioSeleccionado",function(l){b(t);let c=u(2);return h(c.mostrarDetalles(l))}),n()}}function Xt(i,e){if(i&1){let t=C();o(0,"app-listado-admin",10),x("usuarioSeleccionado",function(l){b(t);let c=u(2);return h(c.mostrarDetalles(l))}),n()}}function Zt(i,e){if(i&1&&U(0,"app-detalle-usuarios",11),i&2){let t=u(2);d("usuario",t.usuarioSeleccionado)}}function te(i,e){if(i&1&&(o(0,"div",7),f(1,Qt,1,0,"app-listado-especialista",8)(2,Wt,1,0,"app-listado-paciente",8)(3,Xt,1,0,"app-listado-admin",8)(4,Zt,1,1,"app-detalle-usuarios",9),n()),i&2){let t=u();s(),d("ngIf",t.listadoSeleccionado==="especialista"),s(),d("ngIf",t.listadoSeleccionado==="paciente"),s(),d("ngIf",t.listadoSeleccionado==="admin"),s(),d("ngIf",t.usuarioSeleccionado)}}function ee(i,e){i&1&&U(0,"app-registro")}var nt=class i{registroVisible=!1;listadoSeleccionado="paciente";usuarioSeleccionado=null;toggleRegistro(){this.registroVisible=!this.registroVisible,this.registroVisible&&(this.listadoSeleccionado=null)}mostrarListado(e){this.listadoSeleccionado=e,this.registroVisible=!1}mostrarDetalles(e){this.usuarioSeleccionado=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=O({type:i,selectors:[["app-seccion-usuarios"]],decls:8,vars:4,consts:[["class","botones-container",4,"ngIf"],["class","usuarios-container",4,"ngIf"],[1,"boton-registro-container"],["id","boton-registro",3,"click"],[4,"ngIf"],[1,"botones-container"],[3,"click","ngClass"],[1,"usuarios-container"],[3,"usuarioSeleccionado",4,"ngIf"],[3,"usuario",4,"ngIf"],[3,"usuarioSeleccionado"],[3,"usuario"]],template:function(t,r){t&1&&(o(0,"h2"),a(1," Bienvenido a la secci\xF3n de Usuarios"),n(),f(2,Jt,7,9,"div",0)(3,te,5,4,"div",1),o(4,"div",2)(5,"button",3),x("click",function(){return r.toggleRegistro()}),a(6),n()(),f(7,ee,1,0,"app-registro",4)),t&2&&(s(2),d("ngIf",!r.registroVisible),s(),d("ngIf",!r.registroVisible),s(3),g(" ",r.registroVisible?"Ocultar Registro":"Crear Usuario"," "),s(),d("ngIf",r.registroVisible))},dependencies:[w,N,xt,Q,tt,et,it],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700}.usuarios-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:1rem}app-listado-usuarios[_ngcontent-%COMP%], app-detalle-usuarios[_ngcontent-%COMP%], app-registro[_ngcontent-%COMP%]{width:85%;margin-bottom:1rem}.botones-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:1rem}button[_ngcontent-%COMP%]{margin:0 1rem;padding:.5rem 1rem;border:none;border-radius:4px;background-color:#1e8449;color:#fff;font-size:1rem;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#145a32}button.active[_ngcontent-%COMP%]{background-color:#145a32;font-weight:700}.boton-registro-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1rem}#boton-registro[_ngcontent-%COMP%]{padding:.5rem 1rem;border:none;border-radius:4px;background-color:#1e8449;color:#fff;font-size:1rem;cursor:pointer;transition:background-color .3s ease}#boton-registro[_ngcontent-%COMP%]:hover{background-color:#145a32}']})};var ie=[{path:"seccion-usuarios",component:nt}],ot=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=K({imports:[rt.forChild(ie),rt]})};var ht=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=K({imports:[ut,ot,ft,_t,bt]})};export{Q as a,Z as b,et as c,ht as d};