import{a as X,b as Z}from"./chunk-UQWOLRUZ.js";import{p as Q,q as W,r as q}from"./chunk-ID6MRWOA.js";import{A as P,Aa as y,E as u,G as s,I as i,J as t,K as E,L as x,M as p,N as l,O as a,P as d,Q as f,X as T,Y as H,d as B,e as v,ea as D,fa as S,ga as M,ha as J,m as k,ma as Y,p as b,q as F,t as _,u as C,w as O,y as L,z as r}from"./chunk-VE5QODOT.js";var I=B(q());function ie(n,o){if(n&1){let e=x();i(0,"tr",1),p("click",function(){let m=_(e).$implicit,g=l();return C(g.seleccionarUsuario(m))}),i(1,"td"),a(2),t(),i(3,"td"),a(4),t(),i(5,"td"),a(6),t(),i(7,"td"),a(8),t()()}if(n&2){let e=o.$implicit;r(2),d(e.nombre),r(2),d(e.apellido),r(2),d(e.email),r(2),d(e.role)}}var N=class n{constructor(o){this.authService=o}usuarioSeleccionado=new O;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(o){this.usuarioSeleccionado.emit(o)}cargarUsuarios(){return v(this,null,function*(){try{I.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{I.default.showLoading()}});let o=yield this.authService.obtenerUsuarios();this.usuarios=o.filter(e=>e.role==="paciente")}catch(o){console.error("Error al cargar usuarios:",o),I.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{I.default.close()}})}static \u0275fac=function(e){return new(e||n)(P(y))};static \u0275cmp=b({type:n,selectors:[["app-listado-paciente"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:17,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(e,c){e&1&&(i(0,"h2"),a(1,"Listado de Pacientes"),t(),i(2,"table")(3,"thead")(4,"tr")(5,"th"),a(6,"Nombre"),t(),i(7,"th"),a(8,"Apellido"),t(),i(9,"th"),a(10,"Email"),t(),i(11,"th"),a(12,"Rol"),t(),i(13,"th"),a(14,"Estado"),t()()(),i(15,"tbody"),u(16,ie,9,4,"tr",0),t()()),e&2&&(r(16),s("ngForOf",c.usuarios))},dependencies:[S],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}']})};function oe(n,o){if(n&1&&E(0,"img",7),n&2){let e=o.$implicit;s("src",e,L)}}function ae(n,o){if(n&1&&(i(0,"div",5)(1,"p")(2,"strong"),a(3,"Obra Social:"),t(),a(4),t(),i(5,"div")(6,"strong"),a(7,"Im\xE1genes de Perfil:"),t(),u(8,oe,1,1,"img",6),t()()),n&2){let e=l(2);r(4),f(" ",e.usuario.obraSocial,""),r(4),s("ngForOf",e.usuario.imagenes)}}function re(n,o){if(n&1&&(i(0,"li"),a(1),t()),n&2){let e=o.$implicit;r(),d(e)}}function se(n,o){if(n&1&&(i(0,"div",8)(1,"p")(2,"strong"),a(3,"Especialidades:"),t()(),i(4,"p"),a(5),t(),i(6,"ul"),u(7,re,2,1,"li",9),t(),i(8,"strong"),a(9,"Im\xE1gen de Perfil:"),t(),E(10,"img",7),t()),n&2){let e=l(2);r(5),d(e.usuario.especialidad),r(2),s("ngForOf",e.usuario.especialidades),r(3),s("src",e.usuario.imageUrl,L)}}function ce(n,o){if(n&1&&(i(0,"div",10)(1,"div")(2,"strong"),a(3,"Im\xE1gen de Perfil:"),t(),E(4,"img",7),t()()),n&2){let e=l(2);r(4),s("src",e.usuario.imageUrl,L)}}function le(n,o){if(n&1&&(i(0,"div",1)(1,"h3"),a(2,"Detalles del Usuario"),t(),i(3,"p")(4,"strong"),a(5,"Nombre:"),t(),a(6),t(),i(7,"p")(8,"strong"),a(9,"Apellido:"),t(),a(10),t(),i(11,"p")(12,"strong"),a(13,"Edad:"),t(),a(14),t(),i(15,"p")(16,"strong"),a(17,"DNI:"),t(),a(18),t(),i(19,"p")(20,"strong"),a(21,"Mail:"),t(),a(22),t(),u(23,ae,9,2,"div",2)(24,se,11,3,"div",3)(25,ce,5,1,"div",4),t()),n&2){let e=l();r(6),f(" ",e.usuario.nombre,""),r(4),f(" ",e.usuario.apellido,""),r(4),f(" ",e.usuario.edad,""),r(4),f(" ",e.usuario.dni,""),r(4),f(" ",e.usuario.email,""),r(),s("ngIf",e.esPaciente),r(),s("ngIf",e.esEspecialista),r(),s("ngIf",e.esAdministrador)}}var R=class n{usuario;get esPaciente(){return this.usuario?.role==="paciente"}get esEspecialista(){return this.usuario?.role==="especialista"}get esAdministrador(){return this.usuario?.role==="administrador"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-detalle-usuarios"]],inputs:{usuario:"usuario"},decls:1,vars:1,consts:[["class","details-container",4,"ngIf"],[1,"details-container"],["class","paciente",4,"ngIf"],["class","especialista",4,"ngIf"],["class","administrador",4,"ngIf"],[1,"paciente"],["alt","Imagen de Perfil","width","100",3,"src",4,"ngFor","ngForOf"],["alt","Imagen de Perfil","width","100",3,"src"],[1,"especialista"],[4,"ngFor","ngForOf"],[1,"administrador"]],template:function(e,c){e&1&&u(0,le,26,8,"div",0),e&2&&s("ngIf",c.usuario)},dependencies:[S,M],styles:[".details-container[_ngcontent-%COMP%]{background-color:#eaeded;border-radius:10px;padding:2rem;box-shadow:0 6px 14px #0003;margin-top:2rem;width:95%}.details-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e8449;text-align:center;margin-bottom:1.5rem;font-size:1.8rem}.details-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;margin:.75rem 0;color:#333}.details-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#154360}.details-container[_ngcontent-%COMP%]   .paciente[_ngcontent-%COMP%], .details-container[_ngcontent-%COMP%]   .especialista[_ngcontent-%COMP%], .details-container[_ngcontent-%COMP%]   .administrador[_ngcontent-%COMP%]{margin-top:1.5rem;border:2px solid #1E8449;padding:1.5rem;border-radius:8px;background-color:#1e84491a;transition:background-color .3s ease,transform .2s ease}.details-container[_ngcontent-%COMP%]   .paciente[_ngcontent-%COMP%]:hover, .details-container[_ngcontent-%COMP%]   .especialista[_ngcontent-%COMP%]:hover, .details-container[_ngcontent-%COMP%]   .administrador[_ngcontent-%COMP%]:hover{background-color:#1e84494d;transform:translateY(-2px)}.details-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:1rem;border-radius:8px;border:2px solid #1E8449}"]})};var h=B(q());var me=(n,o)=>({habilitado:n,inhabilitado:o}),pe=(n,o)=>({inhabilitar:n,habilitar:o});function ue(n,o){if(n&1){let e=x();i(0,"button",4),p("click",function(){_(e);let m=l().$implicit,g=l();return C(g.alternarEstadoUsuario(m))}),a(1),t()}if(n&2){let e=l().$implicit;s("ngClass",H(2,pe,e.habilitado,!e.habilitado)),r(),f(" ",e.habilitado?"Inhabilitar":"Habilitar"," ")}}function ge(n,o){if(n&1){let e=x();i(0,"tr",1),p("click",function(){let m=_(e).$implicit,g=l();return C(g.seleccionarUsuario(m))}),i(1,"td"),a(2),t(),i(3,"td"),a(4),t(),i(5,"td"),a(6),t(),i(7,"td"),a(8),t(),i(9,"td",2),a(10),t(),i(11,"td"),u(12,ue,2,5,"button",3),t()()}if(n&2){let e=o.$implicit;r(2),d(e.nombre),r(2),d(e.apellido),r(2),d(e.email),r(2),d(e.role),r(),s("ngClass",H(7,me,e.habilitado,!e.habilitado)),r(),f(" ",e.habilitado?"Habilitado":"Inhabilitado"," "),r(2),s("ngIf",e.role==="especialista")}}var z=class n{constructor(o){this.authService=o}usuarioSeleccionado=new O;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(o){this.usuarioSeleccionado.emit(o)}cargarUsuarios(){return v(this,null,function*(){try{h.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{h.default.showLoading()}});let o=yield this.authService.obtenerUsuarios();this.usuarios=o.filter(e=>e.role==="especialista")}catch(o){console.error("Error al cargar usuarios:",o),h.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{h.default.close()}})}alternarEstadoUsuario(o){return v(this,null,function*(){if(o.role!=="especialista"){h.default.fire({icon:"error",title:"Error",text:"Solo se puede modificar el estado de un especialista."});return}try{o.habilitado?(yield this.authService.inhabilitarUsuario(o.uid),h.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido inhabilitado correctamente."})):(yield this.authService.habilitarUsuario(o.uid),h.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido habilitado correctamente."})),o.habilitado=!o.habilitado}catch(e){console.error("Error al modificar el estado del usuario:",e),h.default.fire({icon:"error",title:"Error",text:"No se pudo modificar el estado del usuario."})}})}static \u0275fac=function(e){return new(e||n)(P(y))};static \u0275cmp=b({type:n,selectors:[["app-listado-especialista"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:19,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"ngClass"],[3,"ngClass","click",4,"ngIf"],[3,"click","ngClass"]],template:function(e,c){e&1&&(i(0,"h2"),a(1,"Listado de Especialistas"),t(),i(2,"table")(3,"thead")(4,"tr")(5,"th"),a(6,"Nombre"),t(),i(7,"th"),a(8,"Apellido"),t(),i(9,"th"),a(10,"Email"),t(),i(11,"th"),a(12,"Rol"),t(),i(13,"th"),a(14,"Estado"),t(),i(15,"th"),a(16,"Cambiar Estado"),t()()(),i(17,"tbody"),u(18,ge,13,10,"tr",0),t()()),e&2&&(r(18),s("ngForOf",c.usuarios))},dependencies:[D,S,M],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}button[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.9rem;border:none;border-radius:4px;color:#fff;cursor:pointer;transition:background-color .3s ease,transform .2s ease;width:100%}button.habilitar[_ngcontent-%COMP%]{background-color:#1e8449}button.habilitar[_ngcontent-%COMP%]:hover{background-color:#1E8449,10%;transform:scale(1.05)}button.inhabilitar[_ngcontent-%COMP%]{background-color:#c0392b}button.inhabilitar[_ngcontent-%COMP%]:hover{background-color:#C0392B,10%;transform:scale(1.05)}td.habilitado[_ngcontent-%COMP%]{color:#1e8449}td.inhabilitado[_ngcontent-%COMP%]{color:#c0392b}']})};var U=B(q());function _e(n,o){if(n&1){let e=x();i(0,"tr",1),p("click",function(){let m=_(e).$implicit,g=l();return C(g.seleccionarUsuario(m))}),i(1,"td"),a(2),t(),i(3,"td"),a(4),t(),i(5,"td"),a(6),t(),i(7,"td"),a(8),t()()}if(n&2){let e=o.$implicit;r(2),d(e.nombre),r(2),d(e.apellido),r(2),d(e.email),r(2),d(e.role)}}var $=class n{constructor(o){this.authService=o}usuarioSeleccionado=new O;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(o){this.usuarioSeleccionado.emit(o)}cargarUsuarios(){return v(this,null,function*(){try{U.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{U.default.showLoading()}});let o=yield this.authService.obtenerUsuarios();this.usuarios=o.filter(e=>e.role==="administrador")}catch(o){console.error("Error al cargar usuarios:",o),U.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{U.default.close()}})}static \u0275fac=function(e){return new(e||n)(P(y))};static \u0275cmp=b({type:n,selectors:[["app-listado-admin"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:17,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(e,c){e&1&&(i(0,"h2"),a(1,"Listado de Administradores"),t(),i(2,"table")(3,"thead")(4,"tr")(5,"th"),a(6,"Nombre"),t(),i(7,"th"),a(8,"Apellido"),t(),i(9,"th"),a(10,"Email"),t(),i(11,"th"),a(12,"Rol"),t(),i(13,"th"),a(14,"Estado"),t()()(),i(15,"tbody"),u(16,_e,9,4,"tr",0),t()()),e&2&&(r(16),s("ngForOf",c.usuarios))},dependencies:[S],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}']})};var G=n=>({active:n});function xe(n,o){if(n&1){let e=x();i(0,"app-listado-especialista",7),p("usuarioSeleccionado",function(m){_(e);let g=l();return C(g.mostrarDetalles(m))}),t()}}function be(n,o){if(n&1){let e=x();i(0,"app-listado-paciente",7),p("usuarioSeleccionado",function(m){_(e);let g=l();return C(g.mostrarDetalles(m))}),t()}}function he(n,o){if(n&1){let e=x();i(0,"app-listado-admin",7),p("usuarioSeleccionado",function(m){_(e);let g=l();return C(g.mostrarDetalles(m))}),t()}}function Se(n,o){if(n&1&&E(0,"app-detalle-usuarios",8),n&2){let e=l();s("usuario",e.usuarioSeleccionado)}}function ve(n,o){n&1&&E(0,"app-registro")}var j=class n{usuarioSeleccionado=null;registroVisible=!1;listadoSeleccionado="";mostrarDetalles(o){this.usuarioSeleccionado=o}toggleRegistro(){this.registroVisible=!this.registroVisible}mostrarListado(o){this.listadoSeleccionado=o}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-seccion-usuarios"]],decls:17,vars:15,consts:[[1,"botones-container"],[3,"click","ngClass"],[1,"usuarios-container"],[3,"usuarioSeleccionado",4,"ngIf"],[3,"usuario",4,"ngIf"],[4,"ngIf"],["id","boton-registro",3,"click"],[3,"usuarioSeleccionado"],[3,"usuario"]],template:function(e,c){e&1&&(i(0,"h2"),a(1," Bienvenido a la secci\xF3n de Usuarios"),t(),i(2,"div",0)(3,"button",1),p("click",function(){return c.mostrarListado("especialista")}),a(4,"Listado Especialistas"),t(),i(5,"button",1),p("click",function(){return c.mostrarListado("paciente")}),a(6,"Listado Pacientes"),t(),i(7,"button",1),p("click",function(){return c.mostrarListado("admin")}),a(8,"Listado Administradores"),t()(),i(9,"div",2),u(10,xe,1,0,"app-listado-especialista",3)(11,be,1,0,"app-listado-paciente",3)(12,he,1,0,"app-listado-admin",3)(13,Se,1,1,"app-detalle-usuarios",4)(14,ve,1,0,"app-registro",5),t(),i(15,"button",6),p("click",function(){return c.toggleRegistro()}),a(16),t()),e&2&&(r(3),s("ngClass",T(9,G,c.listadoSeleccionado==="especialista")),r(2),s("ngClass",T(11,G,c.listadoSeleccionado==="paciente")),r(2),s("ngClass",T(13,G,c.listadoSeleccionado==="admin")),r(3),s("ngIf",c.listadoSeleccionado==="especialista"),r(),s("ngIf",c.listadoSeleccionado==="paciente"),r(),s("ngIf",c.listadoSeleccionado==="admin"),r(),s("ngIf",c.usuarioSeleccionado),r(),s("ngIf",c.registroVisible),r(2),f(" ",c.registroVisible?"Ocultar Registro":"Crear Usuario",`
`))},dependencies:[D,M,X,N,R,z,$],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700}.usuarios-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:1rem}app-listado-usuarios[_ngcontent-%COMP%], app-detalle-usuarios[_ngcontent-%COMP%], app-registro[_ngcontent-%COMP%]{width:85%;margin-bottom:1rem}.botones-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:1rem}button[_ngcontent-%COMP%], #boton-registro[_ngcontent-%COMP%]{margin:0 1rem;padding:.5rem 1rem;border:none;border-radius:4px;background-color:#1e8449;color:#fff;font-size:1rem;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#145a32}button.active[_ngcontent-%COMP%]{background-color:#145a32;font-weight:700}#boton-registro[_ngcontent-%COMP%]{display:block}']})};var Ee=[{path:"seccion-usuarios",component:j}],K=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=F({type:n});static \u0275inj=k({imports:[Y.forChild(Ee),Y]})};var te=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=F({type:n});static \u0275inj=k({imports:[J,K,Q,W,Z]})};export{te as UsuariosModule};