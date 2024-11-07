import{a as A,b as j,c as G,d as $,e as H}from"./chunk-3BKFRRZX.js";import{A as V,E as u,G as s,I as r,J as i,K as p,L as v,M as _,N as c,O as n,P as M,Q as d,W as F,ca as L,d as q,da as P,e as D,ea as C,fa as R,ka as N,m as E,p as f,q as S,ra as z,t as b,u as h,w as T,y as O,z as a}from"./chunk-EK6EJXVH.js";var m=q(G());var J=(t,o)=>({habilitado:t,inhabilitado:o}),Q=(t,o)=>({inhabilitar:t,habilitar:o});function W(t,o){if(t&1){let e=v();r(0,"button",4),_("click",function(){b(e);let g=c().$implicit,x=c();return h(x.alternarEstadoUsuario(g))}),n(1),i()}if(t&2){let e=c().$implicit;s("ngClass",F(2,Q,e.habilitado,!e.habilitado)),a(),d(" ",e.habilitado?"Inhabilitar":"Habilitar"," ")}}function X(t,o){if(t&1){let e=v();r(0,"tr",1),_("click",function(){let g=b(e).$implicit,x=c();return h(x.seleccionarUsuario(g))}),r(1,"td"),n(2),i(),r(3,"td"),n(4),i(),r(5,"td"),n(6),i(),r(7,"td"),n(8),i(),r(9,"td",2),n(10),i(),r(11,"td"),u(12,W,2,5,"button",3),i()()}if(t&2){let e=o.$implicit;a(2),M(e.nombre),a(2),M(e.apellido),a(2),M(e.email),a(2),M(e.role),a(),s("ngClass",F(7,J,e.habilitado,!e.habilitado)),a(),d(" ",e.habilitado?"Habilitado":"Inhabilitado"," "),a(2),s("ngIf",e.role==="especialista")}}var y=class t{constructor(o){this.authService=o}usuarioSeleccionado=new T;usuarios=[];ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(o){this.usuarioSeleccionado.emit(o)}cargarUsuarios(){return D(this,null,function*(){try{m.default.fire({title:"Cargando usuarios...",html:"Por favor, espere un momento...",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{m.default.showLoading()}}),this.usuarios=yield this.authService.obtenerUsuarios()}catch(o){console.error("Error al cargar usuarios:",o),m.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{m.default.close()}})}alternarEstadoUsuario(o){return D(this,null,function*(){if(o.role!=="especialista"){m.default.fire({icon:"error",title:"Error",text:"Solo se puede modificar el estado de un especialista."});return}try{o.habilitado?(yield this.authService.inhabilitarUsuario(o.uid),m.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido inhabilitado correctamente."})):(yield this.authService.habilitarUsuario(o.uid),m.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido habilitado correctamente."})),o.habilitado=!o.habilitado}catch(e){console.error("Error al modificar el estado del usuario:",e),m.default.fire({icon:"error",title:"Error",text:"No se pudo modificar el estado del usuario."})}})}static \u0275fac=function(e){return new(e||t)(V(z))};static \u0275cmp=f({type:t,selectors:[["app-listado-usuarios"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:17,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"ngClass"],[3,"ngClass","click",4,"ngIf"],[3,"click","ngClass"]],template:function(e,l){e&1&&(r(0,"h2"),n(1,"Listado de Usuarios"),i(),r(2,"table")(3,"thead")(4,"tr")(5,"th"),n(6,"Nombre"),i(),r(7,"th"),n(8,"Apellido"),i(),r(9,"th"),n(10,"Email"),i(),r(11,"th"),n(12,"Rol"),i(),r(13,"th"),n(14,"Estado"),i()()(),r(15,"tbody"),u(16,X,13,10,"tr",0),i()()),e&2&&(a(16),s("ngForOf",l.usuarios))},dependencies:[L,P,C],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700;font-size:1.5rem}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 8px #0000001a;margin:0 auto;border-radius:8px;overflow:hidden}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1rem;text-align:left}thead[_ngcontent-%COMP%]{background-color:#154360;color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase;letter-spacing:.05em}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background-color .3s ease,transform .2s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f3f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#d5e8e8;transform:scale(1.01)}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #F2F3F4}button[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.9rem;border:none;border-radius:4px;color:#fff;cursor:pointer;transition:background-color .3s ease,transform .2s ease;width:100%}button.habilitar[_ngcontent-%COMP%]{background-color:#c0392b}button.habilitar[_ngcontent-%COMP%]:hover{background-color:#962d22;transform:scale(1.05)}button.inhabilitar[_ngcontent-%COMP%]{background-color:#1e8449}button.inhabilitar[_ngcontent-%COMP%]:hover{background-color:#155a32;transform:scale(1.05)}td.habilitado[_ngcontent-%COMP%]{color:#1e8449}td.inhabilitado[_ngcontent-%COMP%]{color:#c0392b}']})};function ee(t,o){if(t&1&&p(0,"img",7),t&2){let e=o.$implicit;s("src",e,O)}}function te(t,o){if(t&1&&(r(0,"div",5)(1,"p")(2,"strong"),n(3,"Obra Social:"),i(),n(4),i(),r(5,"div")(6,"strong"),n(7,"Im\xE1genes de Perfil:"),i(),u(8,ee,1,1,"img",6),i()()),t&2){let e=c(2);a(4),d(" ",e.usuario.obraSocial,""),a(4),s("ngForOf",e.usuario.imagenes)}}function ie(t,o){if(t&1&&(r(0,"div",8)(1,"p")(2,"strong"),n(3,"Especialidad:"),i(),n(4),i(),r(5,"strong"),n(6,"Im\xE1gen de Perfil:"),i(),p(7,"img",7),i()),t&2){let e=c(2);a(4),d(" ",e.usuario.especialidad,""),a(3),s("src",e.usuario.imagenes,O)}}function oe(t,o){if(t&1&&(r(0,"div",9)(1,"div")(2,"strong"),n(3,"Im\xE1gen de Perfil:"),i(),p(4,"img",7),i()()),t&2){let e=c(2);a(4),s("src",e.usuario.imagenes,O)}}function ne(t,o){if(t&1&&(r(0,"div",1)(1,"h3"),n(2,"Detalles del Usuario"),i(),r(3,"p")(4,"strong"),n(5,"Nombre:"),i(),n(6),i(),r(7,"p")(8,"strong"),n(9,"Apellido:"),i(),n(10),i(),r(11,"p")(12,"strong"),n(13,"Edad:"),i(),n(14),i(),r(15,"p")(16,"strong"),n(17,"DNI:"),i(),n(18),i(),r(19,"p")(20,"strong"),n(21,"Mail:"),i(),n(22),i(),u(23,te,9,2,"div",2)(24,ie,8,2,"div",3)(25,oe,5,1,"div",4),i()),t&2){let e=c();a(6),d(" ",e.usuario.nombre,""),a(4),d(" ",e.usuario.apellido,""),a(4),d(" ",e.usuario.edad,""),a(4),d(" ",e.usuario.dni,""),a(4),d(" ",e.usuario.email,""),a(),s("ngIf",e.esPaciente),a(),s("ngIf",e.esEspecialista),a(),s("ngIf",e.esAdministrador)}}var U=class t{usuario;get esPaciente(){return this.usuario?.role==="paciente"}get esEspecialista(){return this.usuario?.role==="especialista"}get esAdministrador(){return this.usuario?.role==="administrador"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["app-detalle-usuarios"]],inputs:{usuario:"usuario"},decls:1,vars:1,consts:[["class","details-container",4,"ngIf"],[1,"details-container"],["class","paciente",4,"ngIf"],["class","especialista",4,"ngIf"],["class","administrador",4,"ngIf"],[1,"paciente"],["alt","Imagen de Perfil","width","100",3,"src",4,"ngFor","ngForOf"],["alt","Imagen de Perfil","width","100",3,"src"],[1,"especialista"],[1,"administrador"]],template:function(e,l){e&1&&u(0,ne,26,8,"div",0),e&2&&s("ngIf",l.usuario)},dependencies:[P,C],styles:[".details-container[_ngcontent-%COMP%]{background-color:#eaeded;border-radius:10px;padding:2rem;box-shadow:0 6px 14px #0003;margin-top:2rem;width:100%}.details-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e8449;text-align:center;margin-bottom:1.5rem;font-size:1.8rem}.details-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;margin:.75rem 0;color:#333}.details-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#154360}.details-container[_ngcontent-%COMP%]   .paciente[_ngcontent-%COMP%], .details-container[_ngcontent-%COMP%]   .especialista[_ngcontent-%COMP%], .details-container[_ngcontent-%COMP%]   .administrador[_ngcontent-%COMP%]{margin-top:1.5rem;border:2px solid #1E8449;padding:1.5rem;border-radius:8px;background-color:#1e84491a;transition:background-color .3s ease,transform .2s ease}.details-container[_ngcontent-%COMP%]   .paciente[_ngcontent-%COMP%]:hover, .details-container[_ngcontent-%COMP%]   .especialista[_ngcontent-%COMP%]:hover, .details-container[_ngcontent-%COMP%]   .administrador[_ngcontent-%COMP%]:hover{background-color:#1e84494d;transform:translateY(-2px)}.details-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:1rem;border-radius:8px;border:2px solid #1E8449}"]})};function ae(t,o){if(t&1){let e=v();r(0,"app-listado-usuarios",5),_("usuarioSeleccionado",function(g){b(e);let x=c();return h(x.mostrarDetalles(g))}),i()}}function se(t,o){if(t&1&&p(0,"app-detalle-usuarios",6),t&2){let e=c();s("usuario",e.usuarioSeleccionado)}}function le(t,o){t&1&&p(0,"app-registro")}var w=class t{usuarioSeleccionado=null;registroVisible=!1;mostrarDetalles(o){this.usuarioSeleccionado=o}toggleRegistro(){this.registroVisible=!this.registroVisible}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["app-seccion-usuarios"]],decls:8,vars:4,consts:[[1,"usuarios-container"],[3,"usuarioSeleccionado",4,"ngIf"],[3,"usuario",4,"ngIf"],[4,"ngIf"],[3,"click"],[3,"usuarioSeleccionado"],[3,"usuario"]],template:function(e,l){e&1&&(r(0,"h2"),n(1," Bienvenido a la secci\xF3n de Usuarios"),i(),r(2,"div",0),u(3,ae,1,0,"app-listado-usuarios",1)(4,se,1,1,"app-detalle-usuarios",2)(5,le,1,0,"app-registro",3),i(),r(6,"button",4),_("click",function(){return l.toggleRegistro()}),n(7),i()),e&2&&(a(3),s("ngIf",!l.registroVisible),a(),s("ngIf",!l.registroVisible&&l.usuarioSeleccionado),a(),s("ngIf",l.registroVisible),a(2),d(" ",l.registroVisible?"Ocultar Registro":"Crear Usuario",`
`))},dependencies:[C,$,y,U],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{color:#154360;text-align:center;margin-bottom:1rem;font-weight:700}.usuarios-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:1rem}app-listado-usuarios[_ngcontent-%COMP%], app-detalle-usuarios[_ngcontent-%COMP%], app-registro[_ngcontent-%COMP%]{width:85%;margin-bottom:1rem}button[_ngcontent-%COMP%]{display:block;margin:1rem auto;padding:.5rem 1rem;border:none;border-radius:4px;background-color:#1e8449;color:#fff;font-size:1rem;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#155a32}']})};var ce=[{path:"seccion-usuarios",component:w}],k=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=S({type:t});static \u0275inj=E({imports:[N.forChild(ce),N]})};var Y=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=S({type:t});static \u0275inj=E({imports:[R,k,A,j,H]})};export{Y as UsuariosModule};
