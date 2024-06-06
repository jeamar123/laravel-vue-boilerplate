import{l as Y,o as qe,e as Ie,w as x,m as te,n as M,aa as at,r as v,c as d,q as Ye,H as C,J as z,ab as nt,a4 as L,a5 as Me,a7 as Ne,D as ae,F as lt,p as q,ac as W,a3 as ne,y as E,ad as ze,B as I,ae as ce,af as pe,P as N,ag as ot,ah as rt,ai as it,z as J,K as X,I as Be,G as Ke,C as F,aj as st,ak as ut,s as dt,M as ct,L as ft,al as vt,am as pt,an as je,N as Le,ao as mt,ap as U,A as gt,aq as ht,a8 as yt,h as O,f as k,i as G,j as we,t as Ee,ar as bt,g as Ue}from"./app-UHyGdYgY.js";import{a as Se}from"./TextInput.vue_vue_type_script_setup_true_lang-DKI3BxrR.js";const wt=Y({__name:"Heading",props:{as:{type:String,default:"h1"}},setup(e){const t=e,a=()=>{let n="font-medium",l="";switch(t.as){case"h2":l="text-xl";break;case"h3":l="text-lg";break;case"h4":l="text-base";break;case"h5":l="text-sm";break;case"h1":default:l="text-4xl";break}return`${n} ${l}`};return(n,l)=>(qe(),Ie(at(e.as),{key:"test",class:M([a()])},{default:x(()=>[te(n.$slots,"default")]),_:3},8,["class"]))}});function Et(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let j=[];Et(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&j[0]!==t.target&&(j.unshift(t.target),j=j.filter(a=>a!=null&&a.isConnected),j.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function De(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function le(){let e=[],t={addEventListener(a,n,l,o){return a.addEventListener(n,l,o),t.add(()=>a.removeEventListener(n,l,o))},requestAnimationFrame(...a){let n=requestAnimationFrame(...a);t.add(()=>cancelAnimationFrame(n))},nextFrame(...a){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...a)})},setTimeout(...a){let n=setTimeout(...a);t.add(()=>clearTimeout(n))},microTask(...a){let n={current:!0};return De(()=>{n.current&&a[0]()}),t.add(()=>{n.current=!1})},style(a,n,l){let o=a.style.getPropertyValue(n);return Object.assign(a.style,{[n]:l}),this.add(()=>{Object.assign(a.style,{[n]:o})})},group(a){let n=le();return a(n),this.add(()=>n.dispose())},add(a){return e.push(a),()=>{let n=e.indexOf(a);if(n>=0)for(let l of e.splice(n,1))l()}},dispose(){for(let a of e.splice(0))a()}};return t}function Qe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let a of e.value){let n=E(a);n instanceof HTMLElement&&t.add(n)}return t}var Ge=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ge||{});let _=Object.assign(Y({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:a,expose:n}){let l=v(null);n({el:l,$el:l});let o=d(()=>Ye(l)),i=v(!1);C(()=>i.value=!0),z(()=>i.value=!1),Tt({ownerDocument:o},d(()=>i.value&&!!(e.features&16)));let r=$t({ownerDocument:o,container:l,initialFocus:d(()=>e.initialFocus)},d(()=>i.value&&!!(e.features&2)));Lt({ownerDocument:o,container:l,containers:e.containers,previousActiveElement:r},d(()=>i.value&&!!(e.features&8)));let s=nt();function u(y){let g=E(l);g&&(b=>b())(()=>{I(s.value,{[ce.Forwards]:()=>{pe(g,N.First,{skipElements:[y.relatedTarget]})},[ce.Backwards]:()=>{pe(g,N.Last,{skipElements:[y.relatedTarget]})}})})}let c=v(!1);function w(y){y.key==="Tab"&&(c.value=!0,requestAnimationFrame(()=>{c.value=!1}))}function m(y){if(!i.value)return;let g=Qe(e.containers);E(l)instanceof HTMLElement&&g.add(E(l));let b=y.relatedTarget;b instanceof HTMLElement&&b.dataset.headlessuiFocusGuard!=="true"&&(Je(g,b)||(c.value?pe(E(l),I(s.value,{[ce.Forwards]:()=>N.Next,[ce.Backwards]:()=>N.Previous})|N.WrapAround,{relativeTo:y.target}):y.target instanceof HTMLElement&&W(y.target)))}return()=>{let y={},g={ref:l,onKeydown:w,onFocusout:m},{features:b,initialFocus:h,containers:P,...S}=e;return L(lt,[!!(b&4)&&L(Me,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Ne.Focusable}),ae({ourProps:g,theirProps:{...t,...S},slot:y,attrs:t,slots:a,name:"FocusTrap"}),!!(b&4)&&L(Me,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Ne.Focusable})])}}}),{features:Ge});function St(e){let t=v(j.slice());return ne([e],([a],[n])=>{n===!0&&a===!1?De(()=>{t.value.splice(0)}):n===!1&&a===!0&&(t.value=j.slice())},{flush:"post"}),()=>{var a;return(a=t.value.find(n=>n!=null&&n.isConnected))!=null?a:null}}function Tt({ownerDocument:e},t){let a=St(t);C(()=>{q(()=>{var n,l;t.value||((n=e.value)==null?void 0:n.activeElement)===((l=e.value)==null?void 0:l.body)&&W(a())},{flush:"post"})}),z(()=>{t.value&&W(a())})}function $t({ownerDocument:e,container:t,initialFocus:a},n){let l=v(null),o=v(!1);return C(()=>o.value=!0),z(()=>o.value=!1),C(()=>{ne([t,a,n],(i,r)=>{if(i.every((u,c)=>(r==null?void 0:r[c])===u)||!n.value)return;let s=E(t);s&&De(()=>{var u,c;if(!o.value)return;let w=E(a),m=(u=e.value)==null?void 0:u.activeElement;if(w){if(w===m){l.value=m;return}}else if(s.contains(m)){l.value=m;return}w?W(w):pe(s,N.First|N.NoScroll)===ot.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(c=e.value)==null?void 0:c.activeElement})},{immediate:!0,flush:"post"})}),l}function Lt({ownerDocument:e,container:t,containers:a,previousActiveElement:n},l){var o;ze((o=e.value)==null?void 0:o.defaultView,"focus",i=>{if(!l.value)return;let r=Qe(a);E(t)instanceof HTMLElement&&r.add(E(t));let s=n.value;if(!s)return;let u=i.target;u&&u instanceof HTMLElement?Je(r,u)?(n.value=u,W(u)):(i.preventDefault(),i.stopPropagation(),W(s)):W(n.value)},!0)}function Je(e,t){for(let a of e)if(a.contains(t))return!0;return!1}function Ft(e){let t=rt(e.getSnapshot());return z(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Ct(e,t){let a=e(),n=new Set;return{getSnapshot(){return a},subscribe(l){return n.add(l),()=>n.delete(l)},dispatch(l,...o){let i=t[l].call(a,...o);i&&(a=i,n.forEach(r=>r()))}}}function At(){let e;return{before({doc:t}){var a;let n=t.documentElement;e=((a=t.defaultView)!=null?a:window).innerWidth-n.clientWidth},after({doc:t,d:a}){let n=t.documentElement,l=n.clientWidth-n.offsetWidth,o=e-l;a.style(n,"paddingRight",`${o}px`)}}}function kt(){return it()?{before({doc:e,d:t,meta:a}){function n(l){return a.containers.flatMap(o=>o()).some(o=>o.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let r=le();r.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>r.dispose()))}let o=(l=window.scrollY)!=null?l:window.pageYOffset,i=null;t.addEventListener(e,"click",r=>{if(r.target instanceof HTMLElement)try{let s=r.target.closest("a");if(!s)return;let{hash:u}=new URL(s.href),c=e.querySelector(u);c&&!n(c)&&(i=c)}catch{}},!0),t.addEventListener(e,"touchstart",r=>{if(r.target instanceof HTMLElement)if(n(r.target)){let s=r.target;for(;s.parentElement&&n(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(r.target,"touchAction","none")}),t.addEventListener(e,"touchmove",r=>{if(r.target instanceof HTMLElement)if(n(r.target)){let s=r.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&r.preventDefault()}else r.preventDefault()},{passive:!1}),t.add(()=>{var r;let s=(r=window.scrollY)!=null?r:window.pageYOffset;o!==s&&window.scrollTo(0,o),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function Bt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Dt(e){let t={};for(let a of e)Object.assign(t,a(t));return t}let V=Ct(()=>new Map,{PUSH(e,t){var a;let n=(a=this.get(e))!=null?a:{doc:e,count:0,d:le(),meta:new Set};return n.count++,n.meta.add(t),this.set(e,n),this},POP(e,t){let a=this.get(e);return a&&(a.count--,a.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:a}){let n={doc:e,d:t,meta:Dt(a)},l=[kt(),At(),Bt()];l.forEach(({before:o})=>o==null?void 0:o(n)),l.forEach(({after:o})=>o==null?void 0:o(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});V.subscribe(()=>{let e=V.getSnapshot(),t=new Map;for(let[a]of e)t.set(a,a.documentElement.style.overflow);for(let a of e.values()){let n=t.get(a.doc)==="hidden",l=a.count!==0;(l&&!n||!l&&n)&&V.dispatch(a.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",a),a.count===0&&V.dispatch("TEARDOWN",a)}});function Ot(e,t,a){let n=Ft(V),l=d(()=>{let o=e.value?n.value.get(e.value):void 0;return o?o.count>0:!1});return ne([e,t],([o,i],[r],s)=>{if(!o||!i)return;V.dispatch("PUSH",o,a);let u=!1;s(()=>{u||(V.dispatch("POP",r??o,a),u=!0)})},{immediate:!0}),l}let Te=new Map,ee=new Map;function Ve(e,t=v(!0)){q(a=>{var n;if(!t.value)return;let l=E(e);if(!l)return;a(function(){var i;if(!l)return;let r=(i=ee.get(l))!=null?i:1;if(r===1?ee.delete(l):ee.set(l,r-1),r!==1)return;let s=Te.get(l);s&&(s["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",s["aria-hidden"]),l.inert=s.inert,Te.delete(l))});let o=(n=ee.get(l))!=null?n:0;ee.set(l,o+1),o===0&&(Te.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}let Xe=Symbol("StackContext");var Fe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Fe||{});function xt(){return X(Xe,()=>{})}function Pt({type:e,enabled:t,element:a,onUpdate:n}){let l=xt();function o(...i){n==null||n(...i),l(...i)}C(()=>{ne(t,(i,r)=>{i?o(0,e,a):r===!0&&o(1,e,a)},{immediate:!0,flush:"sync"})}),z(()=>{t.value&&o(1,e,a)}),J(Xe,o)}let Ht=Symbol("DescriptionContext");function Rt({slot:e=v({}),name:t="Description",props:a={}}={}){let n=v([]);function l(o){return n.value.push(o),()=>{let i=n.value.indexOf(o);i!==-1&&n.value.splice(i,1)}}return J(Ht,{register:l,slot:e,name:t,props:a}),d(()=>n.value.length>0?n.value.join(" "):void 0)}var Mt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Mt||{});let Ce=Symbol("DialogContext");function Ze(e){let t=X(Ce,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Ze),a}return t}let fe="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Nt=Y({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:fe},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:a,slots:n,expose:l}){var o,i;let r=(o=e.id)!=null?o:`headlessui-dialog-${Be()}`,s=v(!1);C(()=>{s.value=!0});let u=!1,c=d(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(u||(u=!0,console.warn(`Invalid role [${c}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),w=v(0),m=Ke(),y=d(()=>e.open===fe&&m!==null?(m.value&F.Open)===F.Open:e.open),g=v(null),b=d(()=>Ye(g));if(l({el:g,$el:g}),!(e.open!==fe||m!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof y.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${y.value===fe?void 0:e.open}`);let h=d(()=>s.value&&y.value?0:1),P=d(()=>h.value===0),S=d(()=>w.value>1),H=X(Ce,null)!==null,[oe,re]=st(),{resolveContainers:K,mainTreeNodeRef:ie,MainTreeNode:se}=ut({portals:oe,defaultContainers:[d(()=>{var f;return(f=Q.panelRef.value)!=null?f:g.value})]}),ge=d(()=>S.value?"parent":"leaf"),ue=d(()=>m!==null?(m.value&F.Closing)===F.Closing:!1),he=d(()=>H||ue.value?!1:P.value),ye=d(()=>{var f,p,T;return(T=Array.from((p=(f=b.value)==null?void 0:f.querySelectorAll("body > *"))!=null?p:[]).find($=>$.id==="headlessui-portal-root"?!1:$.contains(E(ie))&&$ instanceof HTMLElement))!=null?T:null});Ve(ye,he);let A=d(()=>S.value?!0:P.value),Z=d(()=>{var f,p,T;return(T=Array.from((p=(f=b.value)==null?void 0:f.querySelectorAll("[data-headlessui-portal]"))!=null?p:[]).find($=>$.contains(E(ie))&&$ instanceof HTMLElement))!=null?T:null});Ve(Z,A),Pt({type:"Dialog",enabled:d(()=>h.value===0),element:g,onUpdate:(f,p)=>{if(p==="Dialog")return I(f,{[Fe.Add]:()=>w.value+=1,[Fe.Remove]:()=>w.value-=1})}});let B=Rt({name:"DialogDescription",slot:d(()=>({open:y.value}))}),D=v(null),Q={titleId:D,panelRef:v(null),dialogState:h,setTitleId(f){D.value!==f&&(D.value=f)},close(){t("close",!1)}};J(Ce,Q);let Pe=d(()=>!(!P.value||S.value));dt(K,(f,p)=>{Q.close(),ct(()=>p==null?void 0:p.focus())},Pe);let He=d(()=>!(S.value||h.value!==0));ze((i=b.value)==null?void 0:i.defaultView,"keydown",f=>{He.value&&(f.defaultPrevented||f.key===ft.Escape&&(f.preventDefault(),f.stopPropagation(),Q.close()))});let Re=d(()=>!(ue.value||h.value!==0||H));return Ot(b,Re,f=>{var p;return{containers:[...(p=f.containers)!=null?p:[],K]}}),q(f=>{if(h.value!==0)return;let p=E(g);if(!p)return;let T=new ResizeObserver($=>{for(let be of $){let de=be.target.getBoundingClientRect();de.x===0&&de.y===0&&de.width===0&&de.height===0&&Q.close()}});T.observe(p),f(()=>T.disconnect())}),()=>{let{open:f,initialFocus:p,...T}=e,$={...a,ref:g,id:r,role:c.value,"aria-modal":h.value===0?!0:void 0,"aria-labelledby":D.value,"aria-describedby":B.value},be={open:h.value===0};return L(je,{force:!0},()=>[L(vt,()=>L(pt,{target:g.value},()=>L(je,{force:!1},()=>L(_,{initialFocus:p,containers:K,features:P.value?I(ge.value,{parent:_.features.RestoreFocus,leaf:_.features.All&~_.features.FocusLock}):_.features.None},()=>L(re,{},()=>ae({ourProps:$,theirProps:{...T,...a},slot:be,attrs:a,slots:n,visible:h.value===0,features:Le.RenderStrategy|Le.Static,name:"Dialog"})))))),L(se)])}}}),jt=Y({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:a}){var n;let l=(n=e.id)!=null?n:`headlessui-dialog-overlay-${Be()}`,o=Ze("DialogOverlay");function i(r){r.target===r.currentTarget&&(r.preventDefault(),r.stopPropagation(),o.close())}return()=>{let{...r}=e;return ae({ourProps:{id:l,"aria-hidden":!0,onClick:i},theirProps:r,slot:{open:o.dialogState.value===0},attrs:t,slots:a,name:"DialogOverlay"})}}});function Ut(e){let t={called:!1};return(...a)=>{if(!t.called)return t.called=!0,e(...a)}}function $e(e,...t){e&&t.length>0&&e.classList.add(...t)}function ve(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Ae=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ae||{});function Vt(e,t){let a=le();if(!e)return a.dispose;let{transitionDuration:n,transitionDelay:l}=getComputedStyle(e),[o,i]=[n,l].map(r=>{let[s=0]=r.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,c)=>c-u);return s});return o!==0?a.setTimeout(()=>t("finished"),o+i):t("finished"),a.add(()=>t("cancelled")),a.dispose}function We(e,t,a,n,l,o){let i=le(),r=o!==void 0?Ut(o):()=>{};return ve(e,...l),$e(e,...t,...a),i.nextFrame(()=>{ve(e,...a),$e(e,...n),i.add(Vt(e,s=>(ve(e,...n,...t),$e(e,...l),r(s))))}),i.add(()=>ve(e,...t,...a,...n,...l)),i.add(()=>r("cancelled")),i.dispose}function R(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Oe=Symbol("TransitionContext");var Wt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Wt||{});function qt(){return X(Oe,null)!==null}function It(){let e=X(Oe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Yt(){let e=X(xe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let xe=Symbol("NestingContext");function me(e){return"children"in e?me(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function _e(e){let t=v([]),a=v(!1);C(()=>a.value=!0),z(()=>a.value=!1);function n(o,i=U.Hidden){let r=t.value.findIndex(({id:s})=>s===o);r!==-1&&(I(i,{[U.Unmount](){t.value.splice(r,1)},[U.Hidden](){t.value[r].state="hidden"}}),!me(t)&&a.value&&(e==null||e()))}function l(o){let i=t.value.find(({id:r})=>r===o);return i?i.state!=="visible"&&(i.state="visible"):t.value.push({id:o,state:"visible"}),()=>n(o,U.Unmount)}return{children:t,register:l,unregister:n}}let et=Le.RenderStrategy,ke=Y({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:n,expose:l}){let o=v(0);function i(){o.value|=F.Opening,t("beforeEnter")}function r(){o.value&=~F.Opening,t("afterEnter")}function s(){o.value|=F.Closing,t("beforeLeave")}function u(){o.value&=~F.Closing,t("afterLeave")}if(!qt()&&mt())return()=>L(tt,{...e,onBeforeEnter:i,onAfterEnter:r,onBeforeLeave:s,onAfterLeave:u},n);let c=v(null),w=d(()=>e.unmount?U.Unmount:U.Hidden);l({el:c,$el:c});let{show:m,appear:y}=It(),{register:g,unregister:b}=Yt(),h=v(m.value?"visible":"hidden"),P={value:!0},S=Be(),H={value:!1},oe=_e(()=>{!H.value&&h.value!=="hidden"&&(h.value="hidden",b(S),u())});C(()=>{let A=g(S);z(A)}),q(()=>{if(w.value===U.Hidden&&S){if(m.value&&h.value!=="visible"){h.value="visible";return}I(h.value,{hidden:()=>b(S),visible:()=>g(S)})}});let re=R(e.enter),K=R(e.enterFrom),ie=R(e.enterTo),se=R(e.entered),ge=R(e.leave),ue=R(e.leaveFrom),he=R(e.leaveTo);C(()=>{q(()=>{if(h.value==="visible"){let A=E(c);if(A instanceof Comment&&A.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ye(A){let Z=P.value&&!y.value,B=E(c);!B||!(B instanceof HTMLElement)||Z||(H.value=!0,m.value&&i(),m.value||s(),A(m.value?We(B,re,K,ie,se,D=>{H.value=!1,D===Ae.Finished&&r()}):We(B,ge,ue,he,se,D=>{H.value=!1,D===Ae.Finished&&(me(oe)||(h.value="hidden",b(S),u()))})))}return C(()=>{ne([m],(A,Z,B)=>{ye(B),P.value=!1},{immediate:!0})}),J(xe,oe),gt(d(()=>I(h.value,{visible:F.Open,hidden:F.Closed})|o.value)),()=>{let{appear:A,show:Z,enter:B,enterFrom:D,enterTo:Q,entered:Pe,leave:He,leaveFrom:Re,leaveTo:f,...p}=e,T={ref:c},$={...p,...y.value&&m.value&&ht.isServer?{class:M([a.class,p.class,...re,...K])}:{}};return ae({theirProps:$,ourProps:T,slot:{},slots:n,attrs:a,features:et,visible:h.value==="visible",name:"TransitionChild"})}}}),zt=ke,tt=Y({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:n}){let l=Ke(),o=d(()=>e.show===null&&l!==null?(l.value&F.Open)===F.Open:e.show);q(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let i=v(o.value?"visible":"hidden"),r=_e(()=>{i.value="hidden"}),s=v(!0),u={show:o,appear:d(()=>e.appear||!s.value)};return C(()=>{q(()=>{s.value=!1,o.value?i.value="visible":me(r)||(i.value="hidden")})}),J(xe,r),J(Oe,u),()=>{let c=yt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),w={unmount:e.unmount};return ae({ourProps:{...w,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[L(zt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...w,...c},n.default)]},attrs:{},features:et,visible:i.value==="visible",name:"Transition"})}}});const Kt={class:"h-screen overflow-y-auto font-sans text-sm text-[#27272a]"},Jt=Y({__name:"Modal",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},bodyClass:{type:String,default:""},wrapperClass:{type:String,default:""},verticalPosition:{type:String,default:"center"},showHeader:{type:Boolean,default:!0},headerClass:{type:String,default:""},showFooter:{type:Boolean,default:!0},footerButtonsAlignment:{type:String,default:"right"},closeButtonText:{type:String,default:"Cancel"},confirmButtonText:{type:String,default:"Confirm"}},emits:["close","confirm"],setup(e,{emit:t}){const a=t;return(n,l)=>(qe(),Ie(k(tt),{appear:"",show:e.show},{default:x(()=>[O(k(Nt),{as:"div",open:"",class:"fixed top-0 -left-[2px] z-[5] h-screen w-full overflow-y-auto",onClose:l[3]||(l[3]=o=>a("close"))},{default:x(()=>[O(k(ke),{as:"template",enter:"duration-200 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:x(()=>[O(k(jt),{class:"fixed top-0 left-0 h-full w-full bg-black bg-opacity-50"})]),_:1}),O(k(ke),{as:"template",enter:"duration-200 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:x(()=>[G("div",Kt,[G("div",{class:M(["flex min-h-screen justify-center pl-1 py-2 md:py-10",{"items-start":e.verticalPosition==="top","items-center":e.verticalPosition==="center"}])},[G("div",{class:M(["relative w-[99%] md:w-full lg:max-w-[500px] bg-white shadow-md rounded-lg",e.wrapperClass])},[e.showHeader?te(n.$slots,"header",{key:0},()=>[G("div",{class:M(["flex justify-between items-center rounded-t-lg py-3 px-4 bg-[#f6f7f8]",e.headerClass])},[O(k(wt),{as:"h4",class:"font-normal"},{default:x(()=>[we(Ee(e.title||""),1)]),_:1}),O(k(Se),{variant:"blank",class:"",onClick:l[0]||(l[0]=o=>a("close"))},{default:x(()=>[O(k(bt),{class:"w-4"})]),_:1})],2)]):Ue("",!0),te(n.$slots,"body-footer",{},()=>[G("div",{class:M(["px-4 pt-4 pb-8",e.bodyClass])},[te(n.$slots,"default")],2),e.showFooter?te(n.$slots,"footer",{key:0},()=>[G("div",{class:M(["flex items-center justify-end gap-x-4 p-4",{"justify-end":e.footerButtonsAlignment==="right","justify-center":e.footerButtonsAlignment==="center","justify-start":e.footerButtonsAlignment==="left"}])},[O(k(Se),{variant:"blank",onClick:l[1]||(l[1]=o=>a("close"))},{default:x(()=>[we(Ee(e.closeButtonText),1)]),_:1}),O(k(Se),{onClick:l[2]||(l[2]=o=>a("confirm"))},{default:x(()=>[we(Ee(e.confirmButtonText),1)]),_:1})],2)]):Ue("",!0)])],2)],2)])]),_:3})]),_:3})]),_:3},8,["show"]))}}),Xt=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e);export{Jt as _,wt as a,Xt as f};