import{a as j,b as $,c as H,d as W,e as B,f as Y,g as q,h as G}from"./chunk-EYMEA52N.js";import{A as F,E as p,G as s,I as a,J as i,K as b,L as C,M as h,N as l,O as n,P as v,Q as m,R as L,S as V,T as A,ba as U,ca as E,d as X,da as R,e as S,ia as N,m as M,p as g,pa as z,q as y,t as x,u as _,w as T,y as D,z as r}from"./chunk-SOHUHQZ3.js";var f=X(Y());function Z(t,o){t&1&&(a(0,"div"),n(1,"Cargando usuarios..."),i())}function ee(t,o){if(t&1){let e=C();a(0,"button",4),h("click",function(){x(e);let d=l().$implicit,u=l(2);return _(u.habilitarUsuario(d))}),n(1,"Habilitar"),i()}if(t&2){let e=l().$implicit;s("disabled",e.habilitado)}}function te(t,o){if(t&1){let e=C();a(0,"button",4),h("click",function(){x(e);let d=l().$implicit,u=l(2);return _(u.inhabilitarUsuario(d))}),n(1,"Inhabilitar"),i()}if(t&2){let e=l().$implicit;s("disabled",!e.habilitado)}}function ie(t,o){if(t&1){let e=C();a(0,"tr",2),h("click",function(){let d=x(e).$implicit,u=l(2);return _(u.seleccionarUsuario(d))}),a(1,"td"),n(2),i(),a(3,"td"),n(4),i(),a(5,"td"),n(6),i(),a(7,"td"),n(8),i(),a(9,"td"),n(10),i(),a(11,"td"),p(12,ee,2,1,"button",3)(13,te,2,1,"button",3),i()()}if(t&2){let e=o.$implicit;r(2),v(e.nombre),r(2),v(e.apellido),r(2),v(e.email),r(2),v(e.role),r(2),v(e.habilitado?"Habilitado":"Inhabilitado"),r(2),s("ngIf",e.role==="especialista"),r(),s("ngIf",e.role==="especialista")}}function oe(t,o){if(t&1&&(a(0,"table")(1,"thead")(2,"tr")(3,"th"),n(4,"Nombre"),i(),a(5,"th"),n(6,"Apellido"),i(),a(7,"th"),n(8,"Email"),i(),a(9,"th"),n(10,"Rol"),i()()(),a(11,"tbody"),p(12,ie,14,7,"tr",1),i()()),t&2){let e=l();r(12),s("ngForOf",e.usuarios)}}var I=class t{constructor(o){this.authService=o}usuarioSeleccionado=new T;usuarios=[];loading=!0;ngOnInit(){this.cargarUsuarios()}seleccionarUsuario(o){this.usuarioSeleccionado.emit(o)}cargarUsuarios(){return S(this,null,function*(){try{this.usuarios=yield this.authService.obtenerUsuarios()}catch(o){console.error("Error al cargar usuarios:",o),f.default.fire({icon:"error",title:"Error",text:"Error al cargar usuarios."})}finally{this.loading=!1}})}habilitarUsuario(o){return S(this,null,function*(){if(o.habilitado){f.default.fire({icon:"info",title:"Informaci\xF3n",text:"El usuario ya est\xE1 habilitado."});return}if(o.role!=="especialista"){f.default.fire({icon:"error",title:"Error",text:"No se puede habilitar a un paciente."});return}yield this.authService.habilitarUsuario(o.uid),f.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido habilitado correctamente."}),yield this.cargarUsuarios()})}inhabilitarUsuario(o){return S(this,null,function*(){if(!o.habilitado){f.default.fire({icon:"info",title:"Informaci\xF3n",text:"El usuario ya est\xE1 inhabilitado."});return}if(o.role!=="especialista"){f.default.fire({icon:"error",title:"Error",text:"No se puede inhabilitar a un paciente."});return}yield this.authService.inhabilitarUsuario(o.uid),f.default.fire({icon:"success",title:"\xC9xito",text:"El usuario ha sido inhabilitado correctamente."}),yield this.cargarUsuarios()})}static \u0275fac=function(e){return new(e||t)(F(z))};static \u0275cmp=g({type:t,selectors:[["app-listado-usuarios"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado"},decls:4,vars:2,consts:[[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"disabled","click",4,"ngIf"],[3,"click","disabled"]],template:function(e,c){e&1&&(a(0,"h2"),n(1,"Listado de Usuarios"),i(),p(2,Z,2,0,"div",0)(3,oe,13,1,"table",0)),e&2&&(r(2),s("ngIf",c.loading),r(),s("ngIf",!c.loading))},dependencies:[U,E],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{font-family:Oswald,sans-serif;color:#333;margin-bottom:20px}.loading-message[_ngcontent-%COMP%]{font-size:18px;color:#888;margin-bottom:20px}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:10px}thead[_ngcontent-%COMP%]{background-color:#007bff;color:#fff}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:12px;text-align:left;border-bottom:1px solid #e0e0e0}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}button[_ngcontent-%COMP%]{background-color:#28a745;color:#fff;border:none;border-radius:4px;padding:8px 12px;cursor:pointer;transition:background-color .3s}button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}button[_ngcontent-%COMP%]:not(:disabled):hover{background-color:#218838}td[_ngcontent-%COMP%]:nth-child(5){font-weight:700;color:#dc3545}td[_ngcontent-%COMP%]:nth-child(5):contains("Habilitado"){color:#28a745}']})};function ae(t,o){if(t&1&&b(0,"img",7),t&2){let e=o.$implicit;s("src",e,D)}}function re(t,o){if(t&1&&(a(0,"div",5)(1,"p")(2,"strong"),n(3,"Obra Social:"),i(),n(4),i(),a(5,"div")(6,"strong"),n(7,"Im\xE1genes de Perfil:"),i(),p(8,ae,1,1,"img",6),i()()),t&2){let e=l(2);r(4),m(" ",e.usuario.obraSocial,""),r(4),s("ngForOf",e.usuario.imagenes)}}function se(t,o){if(t&1){let e=C();a(0,"div",8)(1,"p")(2,"strong"),n(3,"Especialidad:"),i(),n(4),i(),a(5,"label"),n(6,"Agregar Especialidad:"),i(),a(7,"input",9),A("ngModelChange",function(d){x(e);let u=l(2);return V(u.usuario.nuevaEspecialidad,d)||(u.usuario.nuevaEspecialidad=d),_(d)}),i()()}if(t&2){let e=l(2);r(4),m(" ",e.usuario.especialidad,""),r(3),L("ngModel",e.usuario.nuevaEspecialidad)}}function le(t,o){if(t&1&&(a(0,"div",10)(1,"div")(2,"strong"),n(3,"Im\xE1gen de Perfil:"),i(),b(4,"img",7),i()()),t&2){let e=l(2);r(4),s("src",e.usuario.imagen,D)}}function ce(t,o){if(t&1&&(a(0,"div",1)(1,"h3"),n(2,"Detalles del Usuario"),i(),a(3,"p")(4,"strong"),n(5,"Nombre:"),i(),n(6),i(),a(7,"p")(8,"strong"),n(9,"Apellido:"),i(),n(10),i(),a(11,"p")(12,"strong"),n(13,"Edad:"),i(),n(14),i(),a(15,"p")(16,"strong"),n(17,"DNI:"),i(),n(18),i(),a(19,"p")(20,"strong"),n(21,"Mail:"),i(),n(22),i(),p(23,re,9,2,"div",2)(24,se,8,2,"div",3)(25,le,5,1,"div",4),i()),t&2){let e=l();r(6),m(" ",e.usuario.nombre,""),r(4),m(" ",e.usuario.apellido,""),r(4),m(" ",e.usuario.edad,""),r(4),m(" ",e.usuario.dni,""),r(4),m(" ",e.usuario.email,""),r(),s("ngIf",e.esPaciente),r(),s("ngIf",e.esEspecialista),r(),s("ngIf",e.esAdministrador)}}var P=class t{usuario;get esPaciente(){return this.usuario?.role==="paciente"}get esEspecialista(){return this.usuario?.role==="especialista"}get esAdministrador(){return this.usuario?.role==="administrador"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=g({type:t,selectors:[["app-detalle-usuarios"]],inputs:{usuario:"usuario"},decls:1,vars:1,consts:[["class","details-container",4,"ngIf"],[1,"details-container"],["class","paciente",4,"ngIf"],["class","especialista",4,"ngIf"],["class","administrador",4,"ngIf"],[1,"paciente"],["alt","Imagen de Perfil","width","100",3,"src",4,"ngFor","ngForOf"],["alt","Imagen de Perfil","width","100",3,"src"],[1,"especialista"],["type","text","placeholder","Especifique la especialidad",3,"ngModelChange","ngModel"],[1,"administrador"]],template:function(e,c){e&1&&p(0,ce,26,8,"div",0),e&2&&s("ngIf",c.usuario)},dependencies:[U,E,j,$,H],styles:['@charset "UTF-8";.details-container[_ngcontent-%COMP%]{margin:20px;padding:15px;border:1px solid #e0e0e0;border-radius:8px;background-color:#f9f9f9}.details-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Oswald,sans-serif;color:#333;margin-bottom:15px}.details-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#555;margin:8px 0}.details-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#333}.details-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px;border-radius:50%;border:2px solid #ccc}.details-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding:10px;margin-top:10px;border:1px solid #ccc;border-radius:4px;width:calc(100% - 22px);box-sizing:border-box}.paciente[_ngcontent-%COMP%]{background-color:#e7f3ff;padding:10px;border:1px solid #b3d7ff;border-radius:4px}.especialista[_ngcontent-%COMP%]{background-color:#fff3cd;padding:10px;border:1px solid #ffeeba;border-radius:4px}.administrador[_ngcontent-%COMP%]{background-color:#d4edda;padding:10px;border:1px solid #c3e6cb;border-radius:4px}']})};function ue(t,o){if(t&1&&b(0,"app-detalle-usuarios",2),t&2){let e=l();s("usuario",e.usuarioSeleccionado)}}var w=class t{usuarioSeleccionado=null;mostrarDetalles(o){this.usuarioSeleccionado=o}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=g({type:t,selectors:[["app-seccion-usuarios"]],decls:5,vars:1,consts:[[3,"usuarioSeleccionado"],[3,"usuario",4,"ngIf"],[3,"usuario"]],template:function(e,c){e&1&&(a(0,"h2"),n(1," Bienvenido a la seccion de Usuarios"),i(),b(2,"app-registro"),a(3,"app-listado-usuarios",0),h("usuarioSeleccionado",function(u){return c.mostrarDetalles(u)}),i(),p(4,ue,1,1,"app-detalle-usuarios",1)),e&2&&(r(4),s("ngIf",c.usuarioSeleccionado))},dependencies:[E,q,I,P],styles:['@charset "UTF-8";h2[_ngcontent-%COMP%]{text-align:center;color:#007bff;margin-bottom:20px;font-size:2em}[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:20px;background-color:#f8f9fa}app-registro[_ngcontent-%COMP%], app-listado-usuarios[_ngcontent-%COMP%], app-detalle-usuario[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;border-radius:8px;box-shadow:0 2px 8px #0000001a;width:100%;max-width:600px;margin-bottom:20px;padding:20px}app-detalle-usuario[_ngcontent-%COMP%]{background-color:#e9ecef}button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;border-radius:4px;padding:10px 15px;cursor:pointer;transition:background-color .3s}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}']})};var pe=[{path:"seccion-usuarios",component:w}],k=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=y({type:t});static \u0275inj=M({imports:[N.forChild(pe),N]})};var Q=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=y({type:t});static \u0275inj=M({imports:[R,k,W,B,G]})};export{Q as UsuariosModule};
