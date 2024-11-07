import{l as Q,m as W,n as q,p as X,q as Z}from"./chunk-FEVRMDU2.js";import{A as P,Aa as y,E as p,G as s,I as n,J as t,K as E,L as x,M as u,N as c,O as a,P as m,Q as C,X as T,Y as H,d as B,e as S,ea as V,fa as v,ga as M,ha as J,m as k,ma as Y,p as b,q as F,t as g,u as _,w as O,y as L,z as r}from"./chunk-VE5QODOT.js";var I=B(q());function ie(i,o){if(i&1){let e=x();n(0,"tr",1),u("click",function(){let d=g(e).$implicit,f=c();return _(f.seleccionarUsuario(d))}),n(1,"td"),a(2),t(),n(3,"td"),a(4),t(),n(5,"td"),a(6),t(),n(7,"td"),a(8),t(),n(9,"td"),a(10),t()()}if(i&2){let e=o.$implicit;r(2),m(e.nombre),r(2),m(e.apellido),r(2),m(e.email),r(2),m(e.role),r(2),m(e.habilitado)}}var D=class i{constructor(o){this.authService=o}usuarioSeleccionado=new O;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(o){this.usuarioSeleccionado.emit(o)}cargarUsuarios(){return S(this,null,function*(){try{I.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{I.default.showLoading()}});let o=yield this.authService.obtenerUsuarios();this.usuarios=o.filter(e=>e.role==="paciente")}catch(o){console.error("Error al cargar usuarios:",o),I.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{I.default.close()}})}static \u0275fac=function(e){return new(e||i)(P(y))};static \u0275cmp=b({type:i,selectors:[["app-listado-paciente"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:17,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(e,l){e&1&&(n(0,"h2"),a(1,"Listado de Pacientes"),t(),n(2,"table")(3,"thead")(4,"tr")(5,"th"),a(6,"Nombre"),t(),n(7,"th"),a(8,"Apellido"),t(),n(9,"th"),a(10,"Email"),t(),n(11,"th"),a(12,"Rol"),t(),n(13,"th"),a(14,"Estado"),t()()(),n(15,"tbody"),p(16,ie,11,5,"tr",0),t()()),e&2&&(r(16),s("ngForOf",l.usuarios))},dependencies:[v],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}']})};function oe(i,o){if(i&1&&E(0,"img",7),i&2){let e=o.$implicit;s("src",e,L)}}function ae(i,o){if(i&1&&(n(0,"div",5)(1,"p")(2,"strong"),a(3,"Obra Social:"),t(),a(4),t(),n(5,"div")(6,"strong"),a(7,"Im\xE1genes de Perfil:"),t(),p(8,oe,1,1,"img",6),t()()),i&2){let e=c(2);r(4),C(" ",e.usuario.obraSocial,""),r(4),s("ngForOf",e.usuario.imagenes)}}function re(i,o){if(i&1&&(n(0,"li"),a(1),t()),i&2){let e=o.$implicit;r(),m(e)}}function se(i,o){if(i&1&&(n(0,"div",8)(1,"p")(2,"strong"),a(3,"Especialidades:"),t()(),n(4,"p"),a(5),t(),n(6,"ul"),p(7,re,2,1,"li",9),t(),n(8,"strong"),a(9,"Im\xE1gen de Perfil:"),t(),E(10,"img",7),t()),i&2){let e=c(2);r(5),m(e.usuario.especialidad),r(2),s("ngForOf",e.usuario.especialidades),r(3),s("src",e.usuario.imageUrl,L)}}function ce(i,o){if(i&1&&(n(0,"div",10)(1,"div")(2,"strong"),a(3,"Im\xE1gen de Perfil:"),t(),E(4,"img",7),t()()),i&2){let e=c(2);r(4),s("src",e.usuario.imageUrl,L)}}function le(i,o){if(i&1&&(n(0,"div",1)(1,"h3"),a(2,"Detalles del Usuario"),t(),n(3,"p")(4,"strong"),a(5,"Nombre:"),t(),a(6),t(),n(7,"p")(8,"strong"),a(9,"Apellido:"),t(),a(10),t(),n(11,"p")(12,"strong"),a(13,"Edad:"),t(),a(14),t(),n(15,"p")(16,"strong"),a(17,"DNI:"),t(),a(18),t(),n(19,"p")(20,"strong"),a(21,"Mail:"),t(),a(22),t(),p(23,ae,9,2,"div",2)(24,se,11,3,"div",3)(25,ce,5,1,"div",4),t()),i&2){let e=c();r(6),C(" ",e.usuario.nombre,""),r(4),C(" ",e.usuario.apellido,""),r(4),C(" ",e.usuario.edad,""),r(4),C(" ",e.usuario.dni,""),r(4),C(" ",e.usuario.email,""),r(),s("ngIf",e.esPaciente),r(),s("ngIf",e.esEspecialista),r(),s("ngIf",e.esAdministrador)}}var R=class i{usuario;get esPaciente(){return this.usuario?.role==="paciente"}get esEspecialista(){return this.usuario?.role==="especialista"}get esAdministrador(){return this.usuario?.role==="administrador"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-detalle-usuarios"]],inputs:{usuario:"usuario"},decls:1,vars:1,consts:[["class","details-container",4,"ngIf"],[1,"details-container"],["class","paciente",4,"ngIf"],["class","especialista",4,"ngIf"],["class","administrador",4,"ngIf"],[1,"paciente"],["alt","Imagen de Perfil","width","100",3,"src",4,"ngFor","ngForOf"],["alt","Imagen de Perfil","width","100",3,"src"],[1,"especialista"],[4,"ngFor","ngForOf"],[1,"administrador"]],template:function(e,l){e&1&&p(0,le,26,8,"div",0),e&2&&s("ngIf",l.usuario)},dependencies:[v,M],styles:[".details-container[_ngcontent-%COMP%]{background-color:#eaeded;border-radius:10px;padding:2rem;box-shadow:0 6px 14px #0003;margin-top:2rem;width:95%}.details-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e8449;text-align:center;margin-bottom:1.5rem;font-size:1.8rem}.details-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;margin:.75rem 0;color:#333}.details-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#154360}.details-container[_ngcontent-%COMP%]   .paciente[_ngcontent-%COMP%], .details-container[_ngcontent-%COMP%]   .especialista[_ngcontent-%COMP%], .details-container[_ngcontent-%COMP%]   .administrador[_ngcontent-%COMP%]{margin-top:1.5rem;border:2px solid #1E8449;padding:1.5rem;border-radius:8px;background-color:#1e84491a;transition:background-color .3s ease,transform .2s ease}.details-container[_ngcontent-%COMP%]   .paciente[_ngcontent-%COMP%]:hover, .details-container[_ngcontent-%COMP%]   .especialista[_ngcontent-%COMP%]:hover, .details-container[_ngcontent-%COMP%]   .administrador[_ngcontent-%COMP%]:hover{background-color:#1e84494d;transform:translateY(-2px)}.details-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:1rem;border-radius:8px;border:2px solid #1E8449}"]})};var h=B(q());var me=(i,o)=>({habilitado:i,inhabilitado:o}),pe=(i,o)=>({inhabilitar:i,habilitar:o});function ue(i,o){if(i&1){let e=x();n(0,"button",4),u("click",function(){g(e);let d=c().$implicit,f=c();return _(f.alternarEstadoUsuario(d))}),a(1),t()}if(i&2){let e=c().$implicit;s("ngClass",H(2,pe,e.habilitado,!e.habilitado)),r(),C(" ",e.habilitado?"Inhabilitar":"Habilitar"," ")}}function ge(i,o){if(i&1){let e=x();n(0,"tr",1),u("click",function(){let d=g(e).$implicit,f=c();return _(f.seleccionarUsuario(d))}),n(1,"td"),a(2),t(),n(3,"td"),a(4),t(),n(5,"td"),a(6),t(),n(7,"td"),a(8),t(),n(9,"td",2),a(10),t(),n(11,"td"),p(12,ue,2,5,"button",3),t()()}if(i&2){let e=o.$implicit;r(2),m(e.nombre),r(2),m(e.apellido),r(2),m(e.email),r(2),m(e.role),r(),s("ngClass",H(7,me,e.habilitado,!e.habilitado)),r(),C(" ",e.habilitado?"Habilitado":"Inhabilitado"," "),r(2),s("ngIf",e.role==="especialista")}}var z=class i{constructor(o){this.authService=o}usuarioSeleccionado=new O;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(o){this.usuarioSeleccionado.emit(o)}cargarUsuarios(){return S(this,null,function*(){try{h.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{h.default.showLoading()}});let o=yield this.authService.obtenerUsuarios();this.usuarios=o.filter(e=>e.role==="especialista")}catch(o){console.error("Error al cargar usuarios:",o),h.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{h.default.close()}})}alternarEstadoUsuario(o){return S(this,null,function*(){if(o.role!=="especialista"){h.default.fire({icon:"error",title:"Error",text:"Solo se puede modificar el estado de un especialista."});return}try{o.habilitado?(yield this.authService.inhabilitarUsuario(o.uid),h.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido inhabilitado correctamente."})):(yield this.authService.habilitarUsuario(o.uid),h.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido habilitado correctamente."})),o.habilitado=!o.habilitado}catch(e){console.error("Error al modificar el estado del usuario:",e),h.default.fire({icon:"error",title:"Error",text:"No se pudo modificar el estado del usuario."})}})}static \u0275fac=function(e){return new(e||i)(P(y))};static \u0275cmp=b({type:i,selectors:[["app-listado-especialista"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:19,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"ngClass"],[3,"ngClass","click",4,"ngIf"],[3,"click","ngClass"]],template:function(e,l){e&1&&(n(0,"h2"),a(1,"Listado de Especialistas"),t(),n(2,"table")(3,"thead")(4,"tr")(5,"th"),a(6,"Nombre"),t(),n(7,"th"),a(8,"Apellido"),t(),n(9,"th"),a(10,"Email"),t(),n(11,"th"),a(12,"Rol"),t(),n(13,"th"),a(14,"Estado"),t(),n(15,"th"),a(16,"Cambiar Estado"),t()()(),n(17,"tbody"),p(18,ge,13,10,"tr",0),t()()),e&2&&(r(18),s("ngForOf",l.usuarios))},dependencies:[V,v,M],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}button[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.9rem;border:none;border-radius:4px;color:#fff;cursor:pointer;transition:background-color .3s ease,transform .2s ease;width:100%}button.habilitar[_ngcontent-%COMP%]{background-color:#1e8449}button.habilitar[_ngcontent-%COMP%]:hover{background-color:#1E8449,10%;transform:scale(1.05)}button.inhabilitar[_ngcontent-%COMP%]{background-color:#c0392b}button.inhabilitar[_ngcontent-%COMP%]:hover{background-color:#C0392B,10%;transform:scale(1.05)}td.habilitado[_ngcontent-%COMP%]{color:#1e8449}td.inhabilitado[_ngcontent-%COMP%]{color:#c0392b}']})};var U=B(q());function fe(i,o){if(i&1){let e=x();n(0,"tr",1),u("click",function(){let d=g(e).$implicit,f=c();return _(f.seleccionarUsuario(d))}),n(1,"td"),a(2),t(),n(3,"td"),a(4),t(),n(5,"td"),a(6),t(),n(7,"td"),a(8),t(),n(9,"td"),a(10),t()()}if(i&2){let e=o.$implicit;r(2),m(e.nombre),r(2),m(e.apellido),r(2),m(e.email),r(2),m(e.role),r(2),m(e.habilitado)}}var $=class i{constructor(o){this.authService=o}usuarioSeleccionado=new O;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(o){this.usuarioSeleccionado.emit(o)}cargarUsuarios(){return S(this,null,function*(){try{U.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{U.default.showLoading()}});let o=yield this.authService.obtenerUsuarios();this.usuarios=o.filter(e=>e.role==="administrador")}catch(o){console.error("Error al cargar usuarios:",o),U.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{U.default.close()}})}static \u0275fac=function(e){return new(e||i)(P(y))};static \u0275cmp=b({type:i,selectors:[["app-listado-admin"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:17,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(e,l){e&1&&(n(0,"h2"),a(1,"Listado de Administradores"),t(),n(2,"table")(3,"thead")(4,"tr")(5,"th"),a(6,"Nombre"),t(),n(7,"th"),a(8,"Apellido"),t(),n(9,"th"),a(10,"Email"),t(),n(11,"th"),a(12,"Rol"),t(),n(13,"th"),a(14,"Estado"),t()()(),n(15,"tbody"),p(16,fe,11,5,"tr",0),t()()),e&2&&(r(16),s("ngForOf",l.usuarios))},dependencies:[v],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}']})};var G=i=>({active:i});function Ce(i,o){if(i&1){let e=x();n(0,"div",5)(1,"button",6),u("click",function(){g(e);let d=c();return _(d.mostrarListado("especialista"))}),a(2,"Listado Especialistas"),t(),n(3,"button",6),u("click",function(){g(e);let d=c();return _(d.mostrarListado("paciente"))}),a(4,"Listado Pacientes"),t(),n(5,"button",6),u("click",function(){g(e);let d=c();return _(d.mostrarListado("admin"))}),a(6,"Listado Administradores"),t()()}if(i&2){let e=c();r(),s("ngClass",T(3,G,e.listadoSeleccionado==="especialista")),r(2),s("ngClass",T(5,G,e.listadoSeleccionado==="paciente")),r(2),s("ngClass",T(7,G,e.listadoSeleccionado==="admin"))}}function be(i,o){if(i&1){let e=x();n(0,"app-listado-especialista",10),u("usuarioSeleccionado",function(d){g(e);let f=c(2);return _(f.mostrarDetalles(d))}),t()}}function he(i,o){if(i&1){let e=x();n(0,"app-listado-paciente",10),u("usuarioSeleccionado",function(d){g(e);let f=c(2);return _(f.mostrarDetalles(d))}),t()}}function ve(i,o){if(i&1){let e=x();n(0,"app-listado-admin",10),u("usuarioSeleccionado",function(d){g(e);let f=c(2);return _(f.mostrarDetalles(d))}),t()}}function Se(i,o){if(i&1&&E(0,"app-detalle-usuarios",11),i&2){let e=c(2);s("usuario",e.usuarioSeleccionado)}}function Ee(i,o){if(i&1&&(n(0,"div",7),p(1,be,1,0,"app-listado-especialista",8)(2,he,1,0,"app-listado-paciente",8)(3,ve,1,0,"app-listado-admin",8)(4,Se,1,1,"app-detalle-usuarios",9),t()),i&2){let e=c();r(),s("ngIf",e.listadoSeleccionado==="especialista"),r(),s("ngIf",e.listadoSeleccionado==="paciente"),r(),s("ngIf",e.listadoSeleccionado==="admin"),r(),s("ngIf",e.usuarioSeleccionado)}}function Oe(i,o){i&1&&E(0,"app-registro")}var j=class i{registroVisible=!1;listadoSeleccionado="paciente";usuarioSeleccionado=null;toggleRegistro(){this.registroVisible=!this.registroVisible,this.registroVisible&&(this.listadoSeleccionado=null)}mostrarListado(o){this.listadoSeleccionado=o,this.registroVisible=!1}mostrarDetalles(o){this.usuarioSeleccionado=o}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-seccion-usuarios"]],decls:8,vars:4,consts:[["class","botones-container",4,"ngIf"],["class","usuarios-container",4,"ngIf"],[1,"boton-registro-container"],["id","boton-registro",3,"click"],[4,"ngIf"],[1,"botones-container"],[3,"click","ngClass"],[1,"usuarios-container"],[3,"usuarioSeleccionado",4,"ngIf"],[3,"usuario",4,"ngIf"],[3,"usuarioSeleccionado"],[3,"usuario"]],template:function(e,l){e&1&&(n(0,"h2"),a(1," Bienvenido a la secci\xF3n de Usuarios"),t(),p(2,Ce,7,9,"div",0)(3,Ee,5,4,"div",1),n(4,"div",2)(5,"button",3),u("click",function(){return l.toggleRegistro()}),a(6),t()(),p(7,Oe,1,0,"app-registro",4)),e&2&&(r(2),s("ngIf",!l.registroVisible),r(),s("ngIf",!l.registroVisible),r(3),C(" ",l.registroVisible?"Ocultar Registro":"Crear Usuario"," "),r(),s("ngIf",l.registroVisible))},dependencies:[V,M,X,D,R,z,$],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700}.usuarios-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:1rem}app-listado-usuarios[_ngcontent-%COMP%], app-detalle-usuarios[_ngcontent-%COMP%], app-registro[_ngcontent-%COMP%]{width:85%;margin-bottom:1rem}.botones-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:1rem}button[_ngcontent-%COMP%]{margin:0 1rem;padding:.5rem 1rem;border:none;border-radius:4px;background-color:#1e8449;color:#fff;font-size:1rem;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#145a32}button.active[_ngcontent-%COMP%]{background-color:#145a32;font-weight:700}.boton-registro-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1rem}#boton-registro[_ngcontent-%COMP%]{padding:.5rem 1rem;border:none;border-radius:4px;background-color:#1e8449;color:#fff;font-size:1rem;cursor:pointer;transition:background-color .3s ease}#boton-registro[_ngcontent-%COMP%]:hover{background-color:#145a32}']})};var Pe=[{path:"seccion-usuarios",component:j}],K=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=F({type:i});static \u0275inj=k({imports:[Y.forChild(Pe),Y]})};var te=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=F({type:i});static \u0275inj=k({imports:[J,K,Q,W,Z]})};export{D as a,te as b};