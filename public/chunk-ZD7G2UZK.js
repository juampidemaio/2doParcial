import{$ as ae,$a as R,Aa as ye,B as gt,Ba as Ee,C as mt,Ca as Re,Da as we,E as H,Ea as be,Fa as Ce,G as ft,Ga as xe,H as L,Ha as ke,I as re,Ia as Ne,J as vt,Ja as Se,K as _t,Ka as Le,La as Oe,M as It,Ma as Te,N as Pt,Na as We,Oa as Fe,Q as At,Qa as De,R as K,Ra as Ue,S as yt,Sa as N,T as Et,Ta as _,U as Rt,Ua as Me,V as P,Va as E,W as I,Wa as Ve,X as se,Xa as Be,Y as A,Ya as Ge,Z as O,Za as ze,_ as m,_a as He,aa as y,ab as Ke,ba as C,bb as Ye,ca as x,cb as Je,da as Y,db as bt,ea as oe,eb as T,f as o,fa as wt,fb as je,ga as k,gb as $e,ha as de,hb as qe,ia as le,ib as Ze,ja as ue,jb as W,ka as ce,kb as Ct,l as B,la as J,lb as xt,m as ct,ma as j,mb as kt,na as $,nb as Qe,oa as q,ob as Xe,pa as pe,q as G,qa as he,r as ee,ra as Z,s as pt,sa as ge,t as te,ta as me,u as ht,ua as fe,va as ve,w as z,wa as _e,x as b,xa as Ie,y as ne,ya as Pe,z as ie,za as Ae}from"./chunk-USSI7TAN.js";var et=class{constructor(e,t){this._delegate=e,this.firebase=t,re(e,new H("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),At(this._delegate)))}_getService(e,t=L){var i;this._delegate.checkDestroyed();let r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((i=r.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=L){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){re(this._delegate,e)}_addOrOverwriteComponent(e){vt(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}};var Yt={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Nt=new ne("app-compat","Firebase",Yt);function Jt(n){let e={},t={__esModule:!0,initializeApp:a,app:r,registerVersion:K,setLogLevel:Et,onLog:yt,apps:null,SDK_VERSION:It,INTERNAL:{registerComponent:u,removeApp:i,useAsService:p,modularAPIs:Rt}};t.default=t,Object.defineProperty(t,"apps",{get:d});function i(l){delete e[l]}function r(l){if(l=l||L,!ie(e,l))throw Nt.create("no-app",{appName:l});return e[l]}r.App=n;function a(l,c={}){let s=Pt(l,c);if(ie(e,s.name))return e[s.name];let f=new n(s,t);return e[s.name]=f,f}function d(){return Object.keys(e).map(l=>e[l])}function u(l){let c=l.name,s=c.replace("-compat","");if(_t(l)&&l.type==="PUBLIC"){let f=(V=r())=>{if(typeof V[s]!="function")throw Nt.create("invalid-app-argument",{appName:c});return V[s]()};l.serviceProps!==void 0&&B(f,l.serviceProps),t[s]=f,n.prototype[s]=function(...V){return this._getService.bind(this,c).apply(this,l.multipleInstances?V:[])}}return l.type==="PUBLIC"?t[s]:null}function p(l,c){return c==="serverAuth"?null:c}return t}function Lt(){let n=Jt(et);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Lt,extendNamespace:e,createSubscribe:mt,ErrorFactory:ne,deepExtend:B});function e(t){B(n,t)}return n}var jt=Lt();var St=new ft("@firebase/app-compat"),$t="@firebase/app-compat",qt="0.2.43";function Zt(n){K($t,qt,n)}try{let n=ct();if(n.firebase!==void 0){St.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);let e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&St.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}var Q=jt;Zt();function w(){return window}var Qt=2e3;function Xt(n,e,t){return o(this,null,function*(){var i;let{BuildInfo:r}=w();ae(e.sessionId,"AuthEvent did not contain a session ID");let a=yield sn(e.sessionId),d={};return oe()?d.ibi=r.packageName:Y()?d.apn=r.packageName:A(n,"operation-not-supported-in-this-environment"),r.displayName&&(d.appDisplayName=r.displayName),d.sessionId=a,kt(n,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,d)})}function en(n){return o(this,null,function*(){let{BuildInfo:e}=w(),t={};oe()?t.iosBundleId=e.packageName:Y()?t.androidPackageName=e.packageName:A(n,"operation-not-supported-in-this-environment"),yield xt(n,t)})}function tn(n){let{cordova:e}=w();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(n):r=e.InAppBrowser.open(n,wt()?"_blank":"_system","location=yes"),t(r)})})}function nn(n,e,t){return o(this,null,function*(){let{cordova:i}=w(),r=()=>{};try{yield new Promise((a,d)=>{let u=null;function p(){var s;a();let f=(s=i.plugins.browsertab)===null||s===void 0?void 0:s.close;typeof f=="function"&&f(),typeof t?.close=="function"&&t.close()}function l(){u||(u=window.setTimeout(()=>{d(O(n,"redirect-cancelled-by-user"))},Qt))}function c(){document?.visibilityState==="visible"&&l()}e.addPassiveListener(p),document.addEventListener("resume",l,!1),Y()&&document.addEventListener("visibilitychange",c,!1),r=()=>{e.removePassiveListener(p),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),u&&window.clearTimeout(u)}})}finally{r()}})}function rn(n){var e,t,i,r,a,d,u,p,l,c;let s=w();m(typeof((e=s?.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),m(typeof((t=s?.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),m(typeof((a=(r=(i=s?.cordova)===null||i===void 0?void 0:i.plugins)===null||r===void 0?void 0:r.browsertab)===null||a===void 0?void 0:a.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),m(typeof((p=(u=(d=s?.cordova)===null||d===void 0?void 0:d.plugins)===null||u===void 0?void 0:u.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),m(typeof((c=(l=s?.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}function sn(n){return o(this,null,function*(){let e=an(n),t=yield crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(r=>r.toString(16).padStart(2,"0")).join("")})}function an(n){if(ae(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);let e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return t}var on=20,tt=class extends Ct{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}initialized(){return o(this,null,function*(){yield this.initPromise})}};function dn(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:cn(),postBody:null,tenantId:n.tenantId,error:O(n,"no-auth-event")}}function ln(n,e){return nt()._set(it(n),e)}function Ot(n){return o(this,null,function*(){let e=yield nt()._get(it(n));return e&&(yield nt()._remove(it(n))),e})}function un(n,e){var t,i;let r=hn(e);if(r.includes("/__/auth/callback")){let a=X(r),d=a.firebaseError?pn(decodeURIComponent(a.firebaseError)):null,u=(i=(t=d?.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],p=u?O(u):null;return p?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:r,postBody:null}}return null}function cn(){let n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<on;t++){let i=Math.floor(Math.random()*e.length);n.push(e.charAt(i))}return n.join("")}function nt(){return y(N)}function it(n){return x("authEvent",n.config.apiKey,n.name)}function pn(n){try{return JSON.parse(n)}catch{return null}}function hn(n){let e=X(n),t=e.link?decodeURIComponent(e.link):void 0,i=X(t).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return X(r).link||r||i||t||n}function X(n){if(!n?.includes("?"))return{};let[e,...t]=n.split("?");return gt(t.join("?"))}var gn=500,rt=class{constructor(){this._redirectPersistence=_,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=W,this._overrideRedirectResult=T}_initialize(e){return o(this,null,function*(){let t=e._key(),i=this.eventManagers.get(t);return i||(i=new tt(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i})}_openPopup(e){A(e,"operation-not-supported-in-this-environment")}_openRedirect(e,t,i,r){return o(this,null,function*(){rn(e);let a=yield this._initialize(e);yield a.initialized(),a.resetRedirect(),bt(),yield this._originValidation(e);let d=dn(e,i,r);yield ln(e,d);let u=yield Xt(e,d,t),p=yield tn(u);return nn(e,a,p)})}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=en(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){let{universalLinks:i,handleOpenURL:r,BuildInfo:a}=w(),d=setTimeout(()=>o(this,null,function*(){yield Ot(e),t.onEvent(Tt())}),gn),u=c=>o(this,null,function*(){clearTimeout(d);let s=yield Ot(e),f=null;s&&c?.url&&(f=un(s,c.url)),t.onEvent(f||Tt())});typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,u);let p=r,l=`${a.packageName.toLowerCase()}://`;w().handleOpenURL=c=>o(this,null,function*(){if(c.toLowerCase().startsWith(l)&&u({url:c}),typeof p=="function")try{p(c)}catch(s){console.error(s)}})}},Wt=rt;function Tt(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:O("no-auth-event")}}function Ft(n,e){k(n)._logFramework(e)}var fn="@firebase/auth-compat",vn="0.5.14";var _n=1e3;function U(){var n;return((n=self?.location)===null||n===void 0?void 0:n.protocol)||null}function In(){return U()==="http:"||U()==="https:"}function Mt(n=G()){return!!((U()==="file:"||U()==="ionic:"||U()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function Pn(){return te()||ee()}function An(){return ht()&&document?.documentMode===11}function yn(n=G()){return/Edge\/\d+/.test(n)}function En(n=G()){return An()||yn(n)}function Vt(){try{let n=self.localStorage,e=Me();if(n)return n.setItem(e,"1"),n.removeItem(e),En()?z():!0}catch{return ut()&&z()}return!1}function ut(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function st(){return(In()||pt()||Mt())&&!Pn()&&Vt()&&!ut()}function Bt(){return Mt()&&typeof document<"u"}function Rn(){return o(this,null,function*(){return Bt()?new Promise(n=>{let e=setTimeout(()=>{n(!1)},_n);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1})}function wn(){return typeof window<"u"?window:null}var g={LOCAL:"local",NONE:"none",SESSION:"session"},F=m,Gt="persistence";function bn(n,e){if(F(Object.values(g).includes(e),n,"invalid-persistence-type"),te()){F(e!==g.SESSION,n,"unsupported-persistence-type");return}if(ee()){F(e===g.NONE,n,"unsupported-persistence-type");return}if(ut()){F(e===g.NONE||e===g.LOCAL&&z(),n,"unsupported-persistence-type");return}F(e===g.NONE||Vt(),n,"unsupported-persistence-type")}function at(n){return o(this,null,function*(){yield n._initializationPromise;let e=zt(),t=x(Gt,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())})}function Cn(n,e){let t=zt();if(!t)return[];let i=x(Gt,n,e);switch(t.getItem(i)){case g.NONE:return[C];case g.LOCAL:return[E,_];case g.SESSION:return[_];default:return[]}}function zt(){var n;try{return((n=wn())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}var xn=m,v=class{constructor(){this.browserResolver=y(Qe),this.cordovaResolver=y(Wt),this.underlyingResolver=null,this._redirectPersistence=_,this._completeRedirectFn=W,this._overrideRedirectResult=T}_initialize(e){return o(this,null,function*(){return yield this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)})}_openPopup(e,t,i,r){return o(this,null,function*(){return yield this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,r)})}_openRedirect(e,t,i,r){return o(this,null,function*(){return yield this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,r)})}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Bt()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return xn(this.underlyingResolver,"internal-error"),this.underlyingResolver}selectUnderlyingResolver(){return o(this,null,function*(){if(this.underlyingResolver)return;let e=yield Rn();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver})}};function Ht(n){return n.unwrap()}function kn(n){return n.wrapped()}function Nn(n){return Kt(n)}function Sn(n,e){var t;let i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(e?.code==="auth/multi-factor-auth-required"){let r=e;r.resolver=new dt(n,De(n,e))}else if(i){let r=Kt(e),a=e;r&&(a.credential=r,a.tenantId=i.tenantId||void 0,a.email=i.email||void 0,a.phoneNumber=i.phoneNumber||void 0)}}function Kt(n){let{_tokenResponse:e}=n instanceof b?n.customData:n;if(!e)return null;if(!(n instanceof b)&&"temporaryProof"in e&&"phoneNumber"in e)return R.credentialFromResult(n);let t=e.providerId;if(!t||t===P.PASSWORD)return null;let i;switch(t){case P.GOOGLE:i=$;break;case P.FACEBOOK:i=j;break;case P.GITHUB:i=q;break;case P.TWITTER:i=Z;break;default:let{oauthIdToken:r,oauthAccessToken:a,oauthTokenSecret:d,pendingToken:u,nonce:p}=e;return!a&&!d&&!r&&!u?null:u?t.startsWith("saml.")?pe._create(t,u):ue._fromParams({providerId:t,signInMethod:t,pendingToken:u,idToken:r,accessToken:a}):new J(t).credential({idToken:r,accessToken:a,rawNonce:p})}return n instanceof b?i.credentialFromError(n):i.credentialFromResult(n)}function h(n,e){return e.catch(t=>{throw t instanceof b&&Sn(n,t),t}).then(t=>{let i=t.operationType,r=t.user;return{operationType:i,credential:Nn(t),additionalUserInfo:Fe(t),user:S.getOrCreate(r)}})}function ot(n,e){return o(this,null,function*(){let t=yield e;return{verificationId:t.verificationId,confirm:i=>h(n,t.confirm(i))}})}var dt=class{constructor(e,t){this.resolver=t,this.auth=kn(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return h(Ht(this.auth),this.resolver.resolveSignIn(e))}};var S=class n{constructor(e){this._delegate=e,this.multiFactor=Ue(e)}static getOrCreate(e){return n.USER_MAP.has(e)||n.USER_MAP.set(e,new n(e)),n.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}linkWithCredential(e){return o(this,null,function*(){return h(this.auth,ve(this._delegate,e))})}linkWithPhoneNumber(e,t){return o(this,null,function*(){return ot(this.auth,Ge(this._delegate,e,t))})}linkWithPopup(e){return o(this,null,function*(){return h(this.auth,Je(this._delegate,e,v))})}linkWithRedirect(e){return o(this,null,function*(){return yield at(k(this.auth)),qe(this._delegate,e,v)})}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}reauthenticateWithCredential(e){return o(this,null,function*(){return h(this.auth,_e(this._delegate,e))})}reauthenticateWithPhoneNumber(e,t){return ot(this.auth,ze(this._delegate,e,t))}reauthenticateWithPopup(e){return h(this.auth,Ye(this._delegate,e,v))}reauthenticateWithRedirect(e){return o(this,null,function*(){return yield at(k(this.auth)),$e(this._delegate,e,v)})}sendEmailVerification(e){return Se(this._delegate,e)}unlink(e){return o(this,null,function*(){return yield me(this._delegate,e),this})}updateEmail(e){return Te(this._delegate,e)}updatePassword(e){return We(this._delegate,e)}updatePhoneNumber(e){return He(this._delegate,e)}updateProfile(e){return Oe(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Le(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};S.USER_MAP=new WeakMap;var D=m,Dt=(()=>{class n{constructor(t,i){if(this.app=t,i.isInitialized()){this._delegate=i.getImmediate(),this.linkUnderlyingAuth();return}let{apiKey:r}=t.options;D(r,"invalid-api-key",{appName:t.name}),D(r,"invalid-api-key",{appName:t.name});let a=typeof window<"u"?v:void 0;this._delegate=i.initialize({options:{persistence:Ln(r,t.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(se),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?S.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,i){de(this._delegate,t,i)}applyActionCode(t){return ye(this._delegate,t)}checkActionCode(t){return Ee(this._delegate,t)}confirmPasswordReset(t,i){return Ae(this._delegate,t,i)}createUserWithEmailAndPassword(t,i){return o(this,null,function*(){return h(this._delegate,we(this._delegate,t,i))})}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return Ne(this._delegate,t)}isSignInWithEmailLink(t){return xe(this._delegate,t)}getRedirectResult(){return o(this,null,function*(){D(st(),this._delegate,"operation-not-supported-in-this-environment");let t=yield Ze(this._delegate,v);return t?h(this._delegate,Promise.resolve(t)):{credential:null,user:null}})}addFrameworkForLogging(t){Ft(this._delegate,t)}onAuthStateChanged(t,i,r){let{next:a,error:d,complete:u}=Ut(t,i,r);return this._delegate.onAuthStateChanged(a,d,u)}onIdTokenChanged(t,i,r){let{next:a,error:d,complete:u}=Ut(t,i,r);return this._delegate.onIdTokenChanged(a,d,u)}sendSignInLinkToEmail(t,i){return Ce(this._delegate,t,i)}sendPasswordResetEmail(t,i){return Pe(this._delegate,t,i||void 0)}setPersistence(t){return o(this,null,function*(){bn(this._delegate,t);let i;switch(t){case g.SESSION:i=_;break;case g.LOCAL:i=(yield y(E)._isAvailable())?E:N;break;case g.NONE:i=C;break;default:return A("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(i)})}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return h(this._delegate,ge(this._delegate))}signInWithCredential(t){return h(this._delegate,fe(this._delegate,t))}signInWithCustomToken(t){return h(this._delegate,Ie(this._delegate,t))}signInWithEmailAndPassword(t,i){return h(this._delegate,be(this._delegate,t,i))}signInWithEmailLink(t,i){return h(this._delegate,ke(this._delegate,t,i))}signInWithPhoneNumber(t,i){return ot(this._delegate,Be(this._delegate,t,i))}signInWithPopup(t){return o(this,null,function*(){return D(st(),this._delegate,"operation-not-supported-in-this-environment"),h(this._delegate,Ke(this._delegate,t,v))})}signInWithRedirect(t){return o(this,null,function*(){return D(st(),this._delegate,"operation-not-supported-in-this-environment"),yield at(this._delegate),je(this._delegate,t,v)})}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return Re(this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}return n.Persistence=g,n})();function Ut(n,e,t){let i=n;typeof n!="function"&&({next:i,error:e,complete:t}=n);let r=i;return{next:d=>r(d&&S.getOrCreate(d)),error:e,complete:t}}function Ln(n,e){let t=Cn(n,e);if(typeof self<"u"&&!t.includes(E)&&t.push(E),typeof window<"u")for(let i of[N,_])t.includes(i)||t.push(i);return t.includes(C)||t.push(C),t}var M=class{constructor(){this.providerId="phone",this._delegate=new R(Ht(Q.auth()))}static credential(e,t){return R.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}};M.PHONE_SIGN_IN_METHOD=R.PHONE_SIGN_IN_METHOD;M.PROVIDER_ID=R.PROVIDER_ID;var On=m,lt=class{constructor(e,t,i=Q.app()){var r;On((r=i.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new Ve(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}};var Tn="auth-compat";function Wn(n){n.INTERNAL.registerComponent(new H(Tn,e=>{let t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Dt(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:I.EMAIL_SIGNIN,PASSWORD_RESET:I.PASSWORD_RESET,RECOVER_EMAIL:I.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:I.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:I.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:I.VERIFY_EMAIL}},EmailAuthProvider:ce,FacebookAuthProvider:j,GithubAuthProvider:q,GoogleAuthProvider:$,OAuthProvider:J,SAMLAuthProvider:he,PhoneAuthProvider:M,PhoneMultiFactorGenerator:Xe,RecaptchaVerifier:lt,TwitterAuthProvider:Z,Auth:Dt,AuthCredential:le,Error:b}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(fn,vn)}Wn(Q);export{Q as a};
