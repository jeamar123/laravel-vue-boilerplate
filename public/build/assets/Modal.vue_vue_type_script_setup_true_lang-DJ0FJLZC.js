import{s as X,r as v,c as d,q as Ue,l as C,J as I,aa as et,a4 as L,a5 as Me,a7 as Ne,E as te,F as tt,p as q,ab as W,a3 as ne,z as E,ac as Ie,C as U,ad as de,ae as pe,P as M,af as nt,ag as at,ah as lt,A as J,L as Z,I as Oe,H as Ye,D as F,ai as ot,aj as rt,v as it,ak as ut,al as st,am as je,N as Le,K as dt,M as ct,an as ft,ao as j,B as vt,ap as pt,R as Q,a8 as mt,o as gt,e as ht,w as P,h as k,f as B,i as K,S as ce,g as Ve,j as be,t as Ee,aq as yt}from"./app-qiqL2HN5.js";import{a as Se}from"./TextInput.vue_vue_type_script_setup_true_lang-B-nQnCxH.js";import{_ as wt}from"./Heading.vue_vue_type_script_setup_true_lang-BNFqA62x.js";function bt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let N=[];bt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&N[0]!==t.target&&(N.unshift(t.target),N=N.filter(n=>n!=null&&n.isConnected),N.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function De(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ae(){let e=[],t={addEventListener(n,a,l,o){return n.addEventListener(a,l,o),t.add(()=>n.removeEventListener(a,l,o))},requestAnimationFrame(...n){let a=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(a))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let a=setTimeout(...n);t.add(()=>clearTimeout(a))},microTask(...n){let a={current:!0};return De(()=>{a.current&&n[0]()}),t.add(()=>{a.current=!1})},style(n,a,l){let o=n.style.getPropertyValue(a);return Object.assign(n.style,{[a]:l}),this.add(()=>{Object.assign(n.style,{[a]:o})})},group(n){let a=ae();return n(a),this.add(()=>a.dispose())},add(n){return e.push(n),()=>{let a=e.indexOf(n);if(a>=0)for(let l of e.splice(a,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}function ze(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let a=E(n);a instanceof HTMLElement&&t.add(a)}return t}var Ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ke||{});let _=Object.assign(X({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:a}){let l=v(null);a({el:l,$el:l});let o=d(()=>Ue(l)),i=v(!1);C(()=>i.value=!0),I(()=>i.value=!1),St({ownerDocument:o},d(()=>i.value&&!!(e.features&16)));let r=Tt({ownerDocument:o,container:l,initialFocus:d(()=>e.initialFocus)},d(()=>i.value&&!!(e.features&2)));$t({ownerDocument:o,container:l,containers:e.containers,previousActiveElement:r},d(()=>i.value&&!!(e.features&8)));let u=et();function s(y){let g=E(l);g&&(w=>w())(()=>{U(u.value,{[de.Forwards]:()=>{pe(g,M.First,{skipElements:[y.relatedTarget]})},[de.Backwards]:()=>{pe(g,M.Last,{skipElements:[y.relatedTarget]})}})})}let c=v(!1);function b(y){y.key==="Tab"&&(c.value=!0,requestAnimationFrame(()=>{c.value=!1}))}function m(y){if(!i.value)return;let g=ze(e.containers);E(l)instanceof HTMLElement&&g.add(E(l));let w=y.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(Qe(g,w)||(c.value?pe(E(l),U(u.value,{[de.Forwards]:()=>M.Next,[de.Backwards]:()=>M.Previous})|M.WrapAround,{relativeTo:y.target}):y.target instanceof HTMLElement&&W(y.target)))}return()=>{let y={},g={ref:l,onKeydown:b,onFocusout:m},{features:w,initialFocus:h,containers:x,...S}=e;return L(tt,[!!(w&4)&&L(Me,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Ne.Focusable}),te({ourProps:g,theirProps:{...t,...S},slot:y,attrs:t,slots:n,name:"FocusTrap"}),!!(w&4)&&L(Me,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Ne.Focusable})])}}}),{features:Ke});function Et(e){let t=v(N.slice());return ne([e],([n],[a])=>{a===!0&&n===!1?De(()=>{t.value.splice(0)}):a===!1&&n===!0&&(t.value=N.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(a=>a!=null&&a.isConnected))!=null?n:null}}function St({ownerDocument:e},t){let n=Et(t);C(()=>{q(()=>{var a,l;t.value||((a=e.value)==null?void 0:a.activeElement)===((l=e.value)==null?void 0:l.body)&&W(n())},{flush:"post"})}),I(()=>{t.value&&W(n())})}function Tt({ownerDocument:e,container:t,initialFocus:n},a){let l=v(null),o=v(!1);return C(()=>o.value=!0),I(()=>o.value=!1),C(()=>{ne([t,n,a],(i,r)=>{if(i.every((s,c)=>(r==null?void 0:r[c])===s)||!a.value)return;let u=E(t);u&&De(()=>{var s,c;if(!o.value)return;let b=E(n),m=(s=e.value)==null?void 0:s.activeElement;if(b){if(b===m){l.value=m;return}}else if(u.contains(m)){l.value=m;return}b?W(b):pe(u,M.First|M.NoScroll)===nt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(c=e.value)==null?void 0:c.activeElement})},{immediate:!0,flush:"post"})}),l}function $t({ownerDocument:e,container:t,containers:n,previousActiveElement:a},l){var o;Ie((o=e.value)==null?void 0:o.defaultView,"focus",i=>{if(!l.value)return;let r=ze(n);E(t)instanceof HTMLElement&&r.add(E(t));let u=a.value;if(!u)return;let s=i.target;s&&s instanceof HTMLElement?Qe(r,s)?(a.value=s,W(s)):(i.preventDefault(),i.stopPropagation(),W(u)):W(a.value)},!0)}function Qe(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function Lt(e){let t=at(e.getSnapshot());return I(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Ft(e,t){let n=e(),a=new Set;return{getSnapshot(){return n},subscribe(l){return a.add(l),()=>a.delete(l)},dispatch(l,...o){let i=t[l].call(n,...o);i&&(n=i,a.forEach(r=>r()))}}}function Ct(){let e;return{before({doc:t}){var n;let a=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-a.clientWidth},after({doc:t,d:n}){let a=t.documentElement,l=a.clientWidth-a.offsetWidth,o=e-l;n.style(a,"paddingRight",`${o}px`)}}}function At(){return lt()?{before({doc:e,d:t,meta:n}){function a(l){return n.containers.flatMap(o=>o()).some(o=>o.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let r=ae();r.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>r.dispose()))}let o=(l=window.scrollY)!=null?l:window.pageYOffset,i=null;t.addEventListener(e,"click",r=>{if(r.target instanceof HTMLElement)try{let u=r.target.closest("a");if(!u)return;let{hash:s}=new URL(u.href),c=e.querySelector(s);c&&!a(c)&&(i=c)}catch{}},!0),t.addEventListener(e,"touchstart",r=>{if(r.target instanceof HTMLElement)if(a(r.target)){let u=r.target;for(;u.parentElement&&a(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(r.target,"touchAction","none")}),t.addEventListener(e,"touchmove",r=>{if(r.target instanceof HTMLElement)if(a(r.target)){let u=r.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&r.preventDefault()}else r.preventDefault()},{passive:!1}),t.add(()=>{var r;let u=(r=window.scrollY)!=null?r:window.pageYOffset;o!==u&&window.scrollTo(0,o),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function Bt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ot(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let V=Ft(()=>new Map,{PUSH(e,t){var n;let a=(n=this.get(e))!=null?n:{doc:e,count:0,d:ae(),meta:new Set};return a.count++,a.meta.add(t),this.set(e,a),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let a={doc:e,d:t,meta:Ot(n)},l=[At(),Ct(),Bt()];l.forEach(({before:o})=>o==null?void 0:o(a)),l.forEach(({after:o})=>o==null?void 0:o(a))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});V.subscribe(()=>{let e=V.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let a=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!a||!l&&a)&&V.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&V.dispatch("TEARDOWN",n)}});function Dt(e,t,n){let a=Lt(V),l=d(()=>{let o=e.value?a.value.get(e.value):void 0;return o?o.count>0:!1});return ne([e,t],([o,i],[r],u)=>{if(!o||!i)return;V.dispatch("PUSH",o,n);let s=!1;u(()=>{s||(V.dispatch("POP",r??o,n),s=!0)})},{immediate:!0}),l}let Te=new Map,ee=new Map;function We(e,t=v(!0)){q(n=>{var a;if(!t.value)return;let l=E(e);if(!l)return;n(function(){var i;if(!l)return;let r=(i=ee.get(l))!=null?i:1;if(r===1?ee.delete(l):ee.set(l,r-1),r!==1)return;let u=Te.get(l);u&&(u["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",u["aria-hidden"]),l.inert=u.inert,Te.delete(l))});let o=(a=ee.get(l))!=null?a:0;ee.set(l,o+1),o===0&&(Te.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}let Je=Symbol("StackContext");var Fe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Fe||{});function kt(){return Z(Je,()=>{})}function xt({type:e,enabled:t,element:n,onUpdate:a}){let l=kt();function o(...i){a==null||a(...i),l(...i)}C(()=>{ne(t,(i,r)=>{i?o(0,e,n):r===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),I(()=>{t.value&&o(1,e,n)}),J(Je,o)}let Pt=Symbol("DescriptionContext");function Rt({slot:e=v({}),name:t="Description",props:n={}}={}){let a=v([]);function l(o){return a.value.push(o),()=>{let i=a.value.indexOf(o);i!==-1&&a.value.splice(i,1)}}return J(Pt,{register:l,slot:e,name:t,props:n}),d(()=>a.value.length>0?a.value.join(" "):void 0)}var Ht=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ht||{});let Ce=Symbol("DialogContext");function Xe(e){let t=Z(Ce,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Xe),n}return t}let fe="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Mt=X({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:fe},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:a,expose:l}){var o,i;let r=(o=e.id)!=null?o:`headlessui-dialog-${Oe()}`,u=v(!1);C(()=>{u.value=!0});let s=!1,c=d(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(s||(s=!0,console.warn(`Invalid role [${c}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),b=v(0),m=Ye(),y=d(()=>e.open===fe&&m!==null?(m.value&F.Open)===F.Open:e.open),g=v(null),w=d(()=>Ue(g));if(l({el:g,$el:g}),!(e.open!==fe||m!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof y.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${y.value===fe?void 0:e.open}`);let h=d(()=>u.value&&y.value?0:1),x=d(()=>h.value===0),S=d(()=>b.value>1),R=Z(Ce,null)!==null,[le,oe]=ot(),{resolveContainers:Y,mainTreeNodeRef:re,MainTreeNode:ie}=rt({portals:le,defaultContainers:[d(()=>{var f;return(f=z.panelRef.value)!=null?f:g.value})]}),ge=d(()=>S.value?"parent":"leaf"),ue=d(()=>m!==null?(m.value&F.Closing)===F.Closing:!1),he=d(()=>R||ue.value?!1:x.value),ye=d(()=>{var f,p,T;return(T=Array.from((p=(f=w.value)==null?void 0:f.querySelectorAll("body > *"))!=null?p:[]).find($=>$.id==="headlessui-portal-root"?!1:$.contains(E(re))&&$ instanceof HTMLElement))!=null?T:null});We(ye,he);let A=d(()=>S.value?!0:x.value),G=d(()=>{var f,p,T;return(T=Array.from((p=(f=w.value)==null?void 0:f.querySelectorAll("[data-headlessui-portal]"))!=null?p:[]).find($=>$.contains(E(re))&&$ instanceof HTMLElement))!=null?T:null});We(G,A),xt({type:"Dialog",enabled:d(()=>h.value===0),element:g,onUpdate:(f,p)=>{if(p==="Dialog")return U(f,{[Fe.Add]:()=>b.value+=1,[Fe.Remove]:()=>b.value-=1})}});let O=Rt({name:"DialogDescription",slot:d(()=>({open:y.value}))}),D=v(null),z={titleId:D,panelRef:v(null),dialogState:h,setTitleId(f){D.value!==f&&(D.value=f)},close(){t("close",!1)}};J(Ce,z);let Pe=d(()=>!(!x.value||S.value));it(Y,(f,p)=>{z.close(),dt(()=>p==null?void 0:p.focus())},Pe);let Re=d(()=>!(S.value||h.value!==0));Ie((i=w.value)==null?void 0:i.defaultView,"keydown",f=>{Re.value&&(f.defaultPrevented||f.key===ct.Escape&&(f.preventDefault(),f.stopPropagation(),z.close()))});let He=d(()=>!(ue.value||h.value!==0||R));return Dt(w,He,f=>{var p;return{containers:[...(p=f.containers)!=null?p:[],Y]}}),q(f=>{if(h.value!==0)return;let p=E(g);if(!p)return;let T=new ResizeObserver($=>{for(let we of $){let se=we.target.getBoundingClientRect();se.x===0&&se.y===0&&se.width===0&&se.height===0&&z.close()}});T.observe(p),f(()=>T.disconnect())}),()=>{let{open:f,initialFocus:p,...T}=e,$={...n,ref:g,id:r,role:c.value,"aria-modal":h.value===0?!0:void 0,"aria-labelledby":D.value,"aria-describedby":O.value},we={open:h.value===0};return L(je,{force:!0},()=>[L(ut,()=>L(st,{target:g.value},()=>L(je,{force:!1},()=>L(_,{initialFocus:p,containers:Y,features:x.value?U(ge.value,{parent:_.features.RestoreFocus,leaf:_.features.All&~_.features.FocusLock}):_.features.None},()=>L(oe,{},()=>te({ourProps:$,theirProps:{...T,...n},slot:we,attrs:n,slots:a,visible:h.value===0,features:Le.RenderStrategy|Le.Static,name:"Dialog"})))))),L(ie)])}}}),Nt=X({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n}){var a;let l=(a=e.id)!=null?a:`headlessui-dialog-overlay-${Oe()}`,o=Xe("DialogOverlay");function i(r){r.target===r.currentTarget&&(r.preventDefault(),r.stopPropagation(),o.close())}return()=>{let{...r}=e;return te({ourProps:{id:l,"aria-hidden":!0,onClick:i},theirProps:r,slot:{open:o.dialogState.value===0},attrs:t,slots:n,name:"DialogOverlay"})}}});function jt(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function $e(e,...t){e&&t.length>0&&e.classList.add(...t)}function ve(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Ae=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ae||{});function Vt(e,t){let n=ae();if(!e)return n.dispose;let{transitionDuration:a,transitionDelay:l}=getComputedStyle(e),[o,i]=[a,l].map(r=>{let[u=0]=r.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,c)=>c-s);return u});return o!==0?n.setTimeout(()=>t("finished"),o+i):t("finished"),n.add(()=>t("cancelled")),n.dispose}function qe(e,t,n,a,l,o){let i=ae(),r=o!==void 0?jt(o):()=>{};return ve(e,...l),$e(e,...t,...n),i.nextFrame(()=>{ve(e,...n),$e(e,...a),i.add(Vt(e,u=>(ve(e,...a,...t),$e(e,...l),r(u))))}),i.add(()=>ve(e,...t,...n,...a,...l)),i.add(()=>r("cancelled")),i.dispose}function H(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let ke=Symbol("TransitionContext");var Wt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Wt||{});function qt(){return Z(ke,null)!==null}function Ut(){let e=Z(ke,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function It(){let e=Z(xe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let xe=Symbol("NestingContext");function me(e){return"children"in e?me(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Ze(e){let t=v([]),n=v(!1);C(()=>n.value=!0),I(()=>n.value=!1);function a(o,i=j.Hidden){let r=t.value.findIndex(({id:u})=>u===o);r!==-1&&(U(i,{[j.Unmount](){t.value.splice(r,1)},[j.Hidden](){t.value[r].state="hidden"}}),!me(t)&&n.value&&(e==null||e()))}function l(o){let i=t.value.find(({id:r})=>r===o);return i?i.state!=="visible"&&(i.state="visible"):t.value.push({id:o,state:"visible"}),()=>a(o,j.Unmount)}return{children:t,register:l,unregister:a}}let Ge=Le.RenderStrategy,Be=X({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a,expose:l}){let o=v(0);function i(){o.value|=F.Opening,t("beforeEnter")}function r(){o.value&=~F.Opening,t("afterEnter")}function u(){o.value|=F.Closing,t("beforeLeave")}function s(){o.value&=~F.Closing,t("afterLeave")}if(!qt()&&ft())return()=>L(_e,{...e,onBeforeEnter:i,onAfterEnter:r,onBeforeLeave:u,onAfterLeave:s},a);let c=v(null),b=d(()=>e.unmount?j.Unmount:j.Hidden);l({el:c,$el:c});let{show:m,appear:y}=Ut(),{register:g,unregister:w}=It(),h=v(m.value?"visible":"hidden"),x={value:!0},S=Oe(),R={value:!1},le=Ze(()=>{!R.value&&h.value!=="hidden"&&(h.value="hidden",w(S),s())});C(()=>{let A=g(S);I(A)}),q(()=>{if(b.value===j.Hidden&&S){if(m.value&&h.value!=="visible"){h.value="visible";return}U(h.value,{hidden:()=>w(S),visible:()=>g(S)})}});let oe=H(e.enter),Y=H(e.enterFrom),re=H(e.enterTo),ie=H(e.entered),ge=H(e.leave),ue=H(e.leaveFrom),he=H(e.leaveTo);C(()=>{q(()=>{if(h.value==="visible"){let A=E(c);if(A instanceof Comment&&A.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ye(A){let G=x.value&&!y.value,O=E(c);!O||!(O instanceof HTMLElement)||G||(R.value=!0,m.value&&i(),m.value||u(),A(m.value?qe(O,oe,Y,re,ie,D=>{R.value=!1,D===Ae.Finished&&r()}):qe(O,ge,ue,he,ie,D=>{R.value=!1,D===Ae.Finished&&(me(le)||(h.value="hidden",w(S),s()))})))}return C(()=>{ne([m],(A,G,O)=>{ye(O),x.value=!1},{immediate:!0})}),J(xe,le),vt(d(()=>U(h.value,{visible:F.Open,hidden:F.Closed})|o.value)),()=>{let{appear:A,show:G,enter:O,enterFrom:D,enterTo:z,entered:Pe,leave:Re,leaveFrom:He,leaveTo:f,...p}=e,T={ref:c},$={...p,...y.value&&m.value&&pt.isServer?{class:Q([n.class,p.class,...oe,...Y])}:{}};return te({theirProps:$,ourProps:T,slot:{},slots:a,attrs:n,features:Ge,visible:h.value==="visible",name:"TransitionChild"})}}}),Yt=Be,_e=X({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a}){let l=Ye(),o=d(()=>e.show===null&&l!==null?(l.value&F.Open)===F.Open:e.show);q(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let i=v(o.value?"visible":"hidden"),r=Ze(()=>{i.value="hidden"}),u=v(!0),s={show:o,appear:d(()=>e.appear||!u.value)};return C(()=>{q(()=>{u.value=!1,o.value?i.value="visible":me(r)||(i.value="hidden")})}),J(xe,r),J(ke,s),()=>{let c=mt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),b={unmount:e.unmount};return te({ourProps:{...b,as:"template"},theirProps:{},slot:{},slots:{...a,default:()=>[L(Yt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...b,...c},a.default)]},attrs:{},features:Ge,visible:i.value==="visible",name:"Transition"})}}});const zt={class:"h-screen overflow-y-auto font-sans text-sm text-[#27272a]"},Xt=X({__name:"Modal",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},bodyClass:{type:String,default:""},wrapperClass:{type:String,default:""},verticalPosition:{type:String,default:"center"},showHeader:{type:Boolean,default:!0},headerClass:{type:String,default:""},showFooter:{type:Boolean,default:!0},footerButtonsAlignment:{type:String,default:"right"},closeButtonText:{type:String,default:"Cancel"},confirmButtonText:{type:String,default:"Confirm"}},emits:["close","confirm"],setup(e,{emit:t}){const n=t;return(a,l)=>(gt(),ht(B(_e),{appear:"",show:e.show},{default:P(()=>[k(B(Mt),{as:"div",open:"",class:"fixed top-0 -left-[2px] z-[5] h-screen w-full overflow-y-auto",onClose:l[3]||(l[3]=o=>n("close"))},{default:P(()=>[k(B(Be),{as:"template",enter:"duration-200 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:P(()=>[k(B(Nt),{class:"fixed top-0 left-0 h-full w-full bg-black bg-opacity-50"})]),_:1}),k(B(Be),{as:"template",enter:"duration-200 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:P(()=>[K("div",zt,[K("div",{class:Q(["flex min-h-screen justify-center pl-1 py-2 md:py-10",{"items-start":e.verticalPosition==="top","items-center":e.verticalPosition==="center"}])},[K("div",{class:Q(["relative w-[99%] md:w-full lg:max-w-[500px] bg-white shadow-md rounded-lg",e.wrapperClass])},[e.showHeader?ce(a.$slots,"header",{key:0},()=>[K("div",{class:Q(["flex justify-between items-center rounded-t-lg py-3 px-4 bg-[#f6f7f8]",e.headerClass])},[k(B(wt),{as:"h4",class:"font-normal"},{default:P(()=>[be(Ee(e.title||""),1)]),_:1}),k(B(Se),{variant:"blank",class:"",onClick:l[0]||(l[0]=o=>n("close"))},{default:P(()=>[k(B(yt),{class:"w-4"})]),_:1})],2)]):Ve("",!0),ce(a.$slots,"body-footer",{},()=>[K("div",{class:Q(["px-4 pt-4 pb-8",e.bodyClass])},[ce(a.$slots,"default")],2),e.showFooter?ce(a.$slots,"footer",{key:0},()=>[K("div",{class:Q(["flex items-center justify-end gap-x-4 p-4",{"justify-end":e.footerButtonsAlignment==="right","justify-center":e.footerButtonsAlignment==="center","justify-start":e.footerButtonsAlignment==="left"}])},[k(B(Se),{variant:"blank",onClick:l[1]||(l[1]=o=>n("close"))},{default:P(()=>[be(Ee(e.closeButtonText),1)]),_:1}),k(B(Se),{onClick:l[2]||(l[2]=o=>n("confirm"))},{default:P(()=>[be(Ee(e.confirmButtonText),1)]),_:1})],2)]):Ve("",!0)])],2)],2)])]),_:3})]),_:3})]),_:3},8,["show"]))}});export{Xt as _};
