import{p as fe,q as $e,l as z,r as _,s as Se,c as V,v as Te,x as Me,y as D,z as Ie,A as Ae,B as Ee,C as Y,D as J,I as se,E as Re,G as De,N as ie,H as ve,J as Oe,K as Ve,L as E,M as G,O as Ne,P as de,_ as ye,Q as Ue,o as b,d as k,i as u,e as R,w,h as c,f as o,n as B,m as ae,t as A,T as be,F,R as K,j as O,S as Pe,U as je,V as Be,W as xe,g as U,u as q,X as I,Y as ce,Z as me,k as ge,$ as L,a0 as Fe}from"./app-UHyGdYgY.js";import{a as j,_ as pe,C as Q}from"./TextInput.vue_vue_type_script_setup_true_lang-DKI3BxrR.js";import{p as Le,u as Qe,f as Ge,c as P,_ as he,a as ee,b as te}from"./SelectInput.vue_vue_type_script_setup_true_lang-C0SKz_U6.js";import{_ as Z,f as H,a as W}from"./number-BQS_SPu8.js";import{_ as ze}from"./CategoryForm-CD5qhZRW.js";import{_ as qe}from"./AccountForm-DGlghURk.js";/* empty css            */import"./_plugin-vue_export-helper-DlAUqK2U.js";function He({container:l,accept:v,walk:d,enabled:p}){fe(()=>{let n=l.value;if(!n||p!==void 0&&!p.value)return;let s=$e(l);if(!s)return;let e=Object.assign(m=>v(m),{acceptNode:v}),i=s.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,e,!1);for(;i.nextNode();)d(i.currentNode)})}var Ke=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(Ke||{}),We=(l=>(l[l.Pointer=0]="Pointer",l[l.Other=1]="Other",l))(We||{});function Ye(l){requestAnimationFrame(()=>requestAnimationFrame(l))}let we=Symbol("MenuContext");function X(l){let v=Ve(we,null);if(v===null){let d=new Error(`<${l} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,X),d}return v}let Je=z({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(l,{slots:v,attrs:d}){let p=_(1),n=_(null),s=_(null),e=_([]),i=_(""),m=_(null),y=_(1);function a(t=f=>f){let f=m.value!==null?e.value[m.value]:null,g=Ue(t(e.value.slice()),T=>D(T.dataRef.domRef)),C=f?g.indexOf(f):null;return C===-1&&(C=null),{items:g,activeItemIndex:C}}let r={menuState:p,buttonRef:n,itemsRef:s,items:e,searchQuery:i,activeItemIndex:m,activationTrigger:y,closeMenu:()=>{p.value=1,m.value=null},openMenu:()=>p.value=0,goToItem(t,f,g){let C=a(),T=Ge(t===P.Specific?{focus:P.Specific,id:f}:{focus:t},{resolveItems:()=>C.items,resolveActiveIndex:()=>C.activeItemIndex,resolveId:S=>S.id,resolveDisabled:S=>S.dataRef.disabled});i.value="",m.value=T,y.value=g??1,e.value=C.items},search(t){let f=i.value!==""?0:1;i.value+=t.toLowerCase();let g=(m.value!==null?e.value.slice(m.value+f).concat(e.value.slice(0,m.value+f)):e.value).find(T=>T.dataRef.textValue.startsWith(i.value)&&!T.dataRef.disabled),C=g?e.value.indexOf(g):-1;C===-1||C===m.value||(m.value=C,y.value=1)},clearSearch(){i.value=""},registerItem(t,f){let g=a(C=>[...C,{id:t,dataRef:f}]);e.value=g.items,m.value=g.activeItemIndex,y.value=1},unregisterItem(t){let f=a(g=>{let C=g.findIndex(T=>T.id===t);return C!==-1&&g.splice(C,1),g});e.value=f.items,m.value=f.activeItemIndex,y.value=1}};return Se([n,s],(t,f)=>{var g;r.closeMenu(),Te(f,Me.Loose)||(t.preventDefault(),(g=D(n))==null||g.focus())},V(()=>p.value===0)),Ie(we,r),Ae(V(()=>Ee(p.value,{0:Y.Open,1:Y.Closed}))),()=>{let t={open:p.value===0,close:r.closeMenu};return J({ourProps:{},theirProps:l,slot:t,slots:v,attrs:d,name:"Menu"})}}}),Ze=z({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(l,{attrs:v,slots:d,expose:p}){var n;let s=(n=l.id)!=null?n:`headlessui-menu-button-${se()}`,e=X("MenuButton");p({el:e.buttonRef,$el:e.buttonRef});function i(r){switch(r.key){case E.Space:case E.Enter:case E.ArrowDown:r.preventDefault(),r.stopPropagation(),e.openMenu(),G(()=>{var t;(t=D(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(P.First)});break;case E.ArrowUp:r.preventDefault(),r.stopPropagation(),e.openMenu(),G(()=>{var t;(t=D(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(P.Last)});break}}function m(r){switch(r.key){case E.Space:r.preventDefault();break}}function y(r){l.disabled||(e.menuState.value===0?(e.closeMenu(),G(()=>{var t;return(t=D(e.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(r.preventDefault(),e.openMenu(),Ye(()=>{var t;return(t=D(e.itemsRef))==null?void 0:t.focus({preventScroll:!0})})))}let a=Re(V(()=>({as:l.as,type:v.type})),e.buttonRef);return()=>{var r;let t={open:e.menuState.value===0},{...f}=l,g={ref:e.buttonRef,id:s,type:a.value,"aria-haspopup":"menu","aria-controls":(r=D(e.itemsRef))==null?void 0:r.id,"aria-expanded":e.menuState.value===0,onKeydown:i,onKeyup:m,onClick:y};return J({ourProps:g,theirProps:f,slot:t,attrs:v,slots:d,name:"MenuButton"})}}}),Xe=z({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(l,{attrs:v,slots:d,expose:p}){var n;let s=(n=l.id)!=null?n:`headlessui-menu-items-${se()}`,e=X("MenuItems"),i=_(null);p({el:e.itemsRef,$el:e.itemsRef}),He({container:V(()=>D(e.itemsRef)),enabled:V(()=>e.menuState.value===0),accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none")}});function m(t){var f;switch(i.value&&clearTimeout(i.value),t.key){case E.Space:if(e.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),e.search(t.key);case E.Enter:if(t.preventDefault(),t.stopPropagation(),e.activeItemIndex.value!==null){let g=e.items.value[e.activeItemIndex.value];(f=D(g.dataRef.domRef))==null||f.click()}e.closeMenu(),ye(D(e.buttonRef));break;case E.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(P.Next);case E.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(P.Previous);case E.Home:case E.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(P.First);case E.End:case E.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(P.Last);case E.Escape:t.preventDefault(),t.stopPropagation(),e.closeMenu(),G(()=>{var g;return(g=D(e.buttonRef))==null?void 0:g.focus({preventScroll:!0})});break;case E.Tab:t.preventDefault(),t.stopPropagation(),e.closeMenu(),G(()=>Ne(D(e.buttonRef),t.shiftKey?de.Previous:de.Next));break;default:t.key.length===1&&(e.search(t.key),i.value=setTimeout(()=>e.clearSearch(),350));break}}function y(t){switch(t.key){case E.Space:t.preventDefault();break}}let a=De(),r=V(()=>a!==null?(a.value&Y.Open)===Y.Open:e.menuState.value===0);return()=>{var t,f;let g={open:e.menuState.value===0},{...C}=l,T={"aria-activedescendant":e.activeItemIndex.value===null||(t=e.items.value[e.activeItemIndex.value])==null?void 0:t.id,"aria-labelledby":(f=D(e.buttonRef))==null?void 0:f.id,id:s,onKeydown:m,onKeyup:y,role:"menu",tabIndex:0,ref:e.itemsRef};return J({ourProps:T,theirProps:C,slot:g,attrs:v,slots:d,features:ie.RenderStrategy|ie.Static,visible:r.value,name:"MenuItems"})}}}),et=z({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(l,{slots:v,attrs:d,expose:p}){var n;let s=(n=l.id)!=null?n:`headlessui-menu-item-${se()}`,e=X("MenuItem"),i=_(null);p({el:i,$el:i});let m=V(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===s:!1),y=Le(i),a=V(()=>({disabled:l.disabled,get textValue(){return y()},domRef:i}));ve(()=>e.registerItem(s,a)),Oe(()=>e.unregisterItem(s)),fe(()=>{e.menuState.value===0&&m.value&&e.activationTrigger.value!==0&&G(()=>{var S,x;return(x=(S=D(i))==null?void 0:S.scrollIntoView)==null?void 0:x.call(S,{block:"nearest"})})});function r(S){if(l.disabled)return S.preventDefault();e.closeMenu(),ye(D(e.buttonRef))}function t(){if(l.disabled)return e.goToItem(P.Nothing);e.goToItem(P.Specific,s)}let f=Qe();function g(S){f.update(S)}function C(S){f.wasMoved(S)&&(l.disabled||m.value||e.goToItem(P.Specific,s,0))}function T(S){f.wasMoved(S)&&(l.disabled||m.value&&e.goToItem(P.Nothing))}return()=>{let{disabled:S}=l,x={active:m.value,disabled:S,close:e.closeMenu},{...N}=l;return J({ourProps:{id:s,ref:i,role:"menuitem",tabIndex:S===!0?void 0:-1,"aria-disabled":S===!0?!0:void 0,disabled:void 0,onClick:r,onFocus:t,onPointerenter:g,onMouseenter:g,onPointermove:C,onMousemove:C,onPointerleave:T,onMouseleave:T},theirProps:{...d,...N},slot:x,attrs:d,slots:v,name:"MenuItem"})}}});function Ce(l,v){return b(),k("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})])}const tt={class:"relative"},lt={class:"block truncate capitalize"},_e=z({__name:"Dropdown",props:{items:{type:Object,required:!0},modelValue:{type:[String,Boolean,Number,Object,null],default:null},dropdownDirection:{type:String,default:"bottom"},placeholder:{type:String,default:""},fixedPlaceholder:{type:Boolean,default:()=>!1},buttonClass:{type:[String,Array,Object],default:""}},emits:["change","update:model-value"],setup(l,{emit:v}){const d=l,p=v,n=_(d.modelValue);return(s,e)=>(b(),R(o(Je),{as:"div",class:"min-w-16 cursor-pointer"},{default:w(()=>[u("div",tt,[c(o(Ze),{class:B(["relative flex items-center gap-x-2 w-full rounded py-2 px-3 text-left focus:outline-none text-xs hover:opacity-90 border border-slate-400 text-slate-700 bg-white",l.buttonClass])},{default:w(()=>[ae(s.$slots,"button-content",{},()=>[u("span",lt,A(l.fixedPlaceholder?l.placeholder||"Select":n.value?n.value:l.placeholder),1),c(o(Ce),{class:"w-4 text-slate-700","aria-hidden":"true"})])]),_:3},8,["class"]),c(be,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:w(()=>[c(o(Xe),{as:"div",class:B(["absolute max-h-60 border min-w-[150px] overflow-auto rounded-md bg-white z-10",[l.dropdownDirection==="bottom"?"bottom-10 md:bottom-auto md:top-10":"bottom-10"]])},{default:w(()=>[(b(!0),k(F,null,K(l.items,i=>(b(),R(o(et),{key:i,as:"div",class:"cursor-pointer border-b border-[#e9eef4] px-3 pt-[10px] pb-[7px] text-xs text-[#3d4146] hover:bg-[#f8f9fa] capitalize",onClick:()=>{n.value=i,p("change",n.value),p("update:model-value",n.value)}},{default:w(()=>[O(A(i),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["class"])]),_:1})])]),_:3}))}}),at={class:"block truncate capitalize"},st={__name:"PopoverWrapper",props:{containerClass:{type:[String,Array,Object],default:""},buttonLabel:{type:String,default:""},buttonClass:{type:[String,Array,Object],default:""},panelClass:{type:[String,Array,Object],default:""}},setup(l){return(v,d)=>(b(),R(o(Be),{class:B(["relative",l.containerClass])},{default:w(({open:p,close:n})=>[c(o(Pe),{class:B(["relative flex items-center gap-x-2 w-full rounded py-2 px-3 text-left focus:outline-none text-xs hover:opacity-90 border border-slate-400 text-slate-700",["",l.buttonClass]])},{default:w(()=>[ae(v.$slots,"button-value",{},()=>[u("span",at,A(l.buttonLabel),1),c(o(Ce),{class:"w-4 text-slate-700","aria-hidden":"true"})])]),_:2},1032,["class"]),c(be,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:w(()=>[c(o(je),{class:B(["absolute z-[10] bg-white left-0 top-[38px] w-full rounded bg-white border",l.panelClass])},{default:w(()=>[ae(v.$slots,"default",{close:n})]),_:2},1032,["class"])]),_:2},1024)]),_:3},8,["class"]))}},le={__name:"Datepicker",props:{wrapperClass:{type:[String,Object,Array],default:""},modelValue:{type:[String,Date,Object,Array,null],default:null},monthPicker:{type:Boolean,default:()=>!1},range:{type:Boolean,default:()=>!1}},emits:["update:model-value","range-start","range-end"],setup(l,{emit:v}){const d=l,p=v,n=_(d.modelValue),s=e=>{e&&(n.value=e),p("update:model-value",e)};return(e,i)=>(b(),k("div",{class:B(["relative",l.wrapperClass])},[c(o(xe),{modelValue:n.value,"onUpdate:modelValue":[i[0]||(i[0]=m=>n.value=m),s],"input-class-name":"border-0 rounded-none py-2 px-1 border-b border-form-border outline-none text-sm read-only:border-gray-200 read-only:text-gray-500 read-only:cursor-not-allowed transition-all bg-white text-slate-800 font-sans",inline:"","month-picker":l.monthPicker,range:l.range,"auto-apply":!0,"hide-input-icon":!0,clearable:!1,"enable-time-picker":!1,format:"PP","action-row":{showNow:!1,showPreview:!0,showSelect:!1,showCancel:!1},config:{keepActionRow:!l.monthPicker},onRangeStart:i[1]||(i[1]=m=>p("range-start",n.value)),onRangeEnd:i[2]||(i[2]=m=>p("range-end",n.value))},null,8,["modelValue","month-picker","range","config"])],2))}},ot=["for"],nt={key:0},rt={class:"relative"},ut={key:0,class:"mt-1"},it={__name:"DatepickerInput",props:{id:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:()=>!1},errors:{type:Array,default:()=>[]},readOnly:{type:Boolean,default:()=>!1},wrapperClass:{type:[String,Object,Array],default:""},labelClass:{type:[String,Object,Array],default:""},modelValue:{type:[String,Date,null],default:null}},emits:["update:model-value"],setup(l,{emit:v}){const d=l,p=v,n=_(d.modelValue),s=e=>{e&&(n.value=e),p("update:model-value",e)};return(e,i)=>(b(),k("div",null,[u("div",{class:B(l.wrapperClass)},[l.label?(b(),k("label",{key:0,class:B(["text-xs block font-semibold mb-1",[{"text-gray-500 cursor-not-allowed":l.readOnly},l.labelClass]]),for:l.id},[O(A(l.label),1),l.required?(b(),k("span",nt,"*")):U("",!0)],10,ot)):U("",!0)],2),u("div",rt,[c(o(xe),{modelValue:n.value,"onUpdate:modelValue":[i[0]||(i[0]=m=>n.value=m),s],"input-class-name":"rounded py-2 px-2 border border-form-border outline-none text-sm read-only:border-gray-200 read-only:text-gray-500 read-only:cursor-not-allowed transition-all bg-white text-slate-800 font-sans focus:border-gray-900","auto-apply":!0,"hide-input-icon":!0,clearable:!1,"enable-time-picker":!1,format:"PP"},null,8,["modelValue"])]),l.errors.length?(b(),k("div",ut,[(b(!0),k(F,null,K(l.errors,m=>(b(),k("p",{key:m,class:"text-red-500 block text-xs"},A(m),1))),128))])):U("",!0)]))}},dt={__name:"CreateTransactionModal",props:{show:{type:Boolean,default:()=>!1}},emits:["close","success"],setup(l,{emit:v}){const d=v;return(p,n)=>(b(),R(o(Z),{show:l.show,title:"Create Transaction","wrapper-class":"lg:max-w-[600px]",onClose:n[2]||(n[2]=s=>d("close"))},{"body-footer":w(()=>[c(o(ke),{"api-route":"REQUEST_CREATE_TRANSACTION",onClose:n[0]||(n[0]=s=>d("close")),onSuccess:n[1]||(n[1]=s=>d("success"))})]),_:1},8,["show"]))}},ct={__name:"UpdateTransactionModal",props:{show:{type:Boolean,default:()=>!1},model:{type:Object,required:!0}},emits:["close","confirm","success"],setup(l,{emit:v}){const d=v;return(p,n)=>(b(),R(o(Z),{show:l.show,title:"Edit Transaction","wrapper-class":"lg:max-w-[500px]",onClose:n[2]||(n[2]=s=>d("close"))},{"body-footer":w(()=>[c(o(ke),{"api-route":"REQUEST_UPDATE_TRANSACTION",model:l.model,onClose:n[0]||(n[0]=s=>d("close")),onSuccess:n[1]||(n[1]=s=>d("success"))},null,8,["model"])]),_:1},8,["show"]))}},mt={__name:"DeleteTransaction",props:{show:{type:Boolean,default:()=>!1},model:{type:[Object,Array],required:!0}},emits:["close","confirm"],setup(l,{emit:v}){const d=l,p=v,s=q().dispatch,e=async()=>{let{status:i}=await s("REQUEST_DELETE_TRANSACTION",{id:d.model.id});i===200&&(s("SHOW_NOTIF_ALERT",{message:"Transaction deleted."}),p("confirm"))};return(i,m)=>(b(),R(o(he),{show:l.show,message:"Are you sure you want to delete this transaction?",onClose:m[0]||(m[0]=y=>p("close")),onConfirm:e},null,8,["show"]))}},pt={class:"space-y-4 px-6 py-6"},ft={class:""},vt=u("label",{class:"text-xs block font-semibold mb-1"},"Type",-1),yt=u("label",{class:"text-xs block font-semibold mb-1"},"Date",-1),bt={class:"flex items-center justify-end gap-x-4 p-4"},xt={__name:"TransactionFilterModal",props:{show:{type:Boolean,default:()=>!1}},emits:["close","dates-changed"],setup(l,{emit:v}){const d=v,p=V(()=>{let a=I(i.value[0],"MMM dd, yyyy"),r=I(i.value[1],"MMM dd, yyyy"),t=`${a} - ${r}`,f=I(new Date(e.value.year,e.value.month),"MMM yyyy");return n.value==="daily"?I(s.value,"MMM dd, yyyy"):n.value==="monthly"?f:n.value==="calendar"?t:"Date label"}),n=_("monthly"),s=_(new Date),e=_({month:Number(I(new Date,"MM"))-1,year:Number(I(new Date,"yyyy"))}),i=_([new Date,new Date]),m=(a,r)=>{n.value==="daily"&&(e.value={month:Number(I(s.value,"M"))-1,year:Number(I(s.value,"yyyy"))},i.value=[s.value,s.value]),n.value==="monthly"&&(s.value=new Date(ce(new Date(e.value.year,e.value.month))),i.value=[s.value,new Date(me(s.value))]),n.value==="calendar"&&(s.value=i.value[0],e.value={month:Number(I(i.value[0],"M"))-1,year:Number(I(i.value[0],"yyyy"))}),r()},y=()=>{let a={start:new Date,end:new Date};n.value==="daily"&&(a.start=I(s.value,"yyyy-MM-dd"),a.end=I(s.value,"yyyy-MM-dd")),n.value==="monthly"&&(a.start=I(ce(new Date(e.value.year,e.value.month)),"yyyy-MM-dd"),a.end=I(me(new Date(e.value.year,e.value.month)),"yyyy-MM-dd")),n.value==="calendar"&&(a.start=I(i.value[0],"yyyy-MM-dd"),a.end=I(i.value[1],"yyyy-MM-dd")),d("dates-changed",a)};return(a,r)=>(b(),R(o(Z),{show:l.show,title:"Transaction Filters","wrapper-class":"lg:max-w-[300px]",onClose:r[4]||(r[4]=t=>d("close"))},{"body-footer":w(()=>[u("div",pt,[u("div",ft,[vt,c(o(_e),{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=t=>n.value=t),class:"!min-w-0","button-class":"justify-between",items:["daily","monthly","calendar"]},null,8,["modelValue"])]),u("div",null,[yt,c(o(st),{"button-class":"bg-white justify-between","panel-class":"w-max","button-label":p.value},{default:w(({close:t})=>[n.value==="daily"?(b(),R(o(le),{key:0,modelValue:s.value,"onUpdate:modelValue":[r[1]||(r[1]=f=>s.value=f),f=>{m(f,t)}]},null,8,["modelValue","onUpdate:modelValue"])):U("",!0),n.value==="monthly"?(b(),R(o(le),{key:1,modelValue:e.value,"onUpdate:modelValue":[r[2]||(r[2]=f=>e.value=f),f=>{m(f,t)}],"month-picker":!0},null,8,["modelValue","onUpdate:modelValue"])):U("",!0),n.value==="calendar"?(b(),R(o(le),{key:2,modelValue:i.value,"onUpdate:modelValue":[r[3]||(r[3]=f=>i.value=f),f=>{m(f,t)}],range:!0},null,8,["modelValue","onUpdate:modelValue"])):U("",!0)]),_:1},8,["button-label"])])]),u("div",bt,[c(o(j),{variant:"blank"},{default:w(()=>[O(" Cancel ")]),_:1}),c(o(j),{onClick:y},{default:w(()=>[O(" Submit ")]),_:1})])]),_:1},8,["show"]))}},gt={class:"space-y-4 px-6 pt-6 pb-8"},ht={class:"grid lg:grid-cols-2 gap-x-3 gap-y-4"},wt={class:"grid lg:grid-cols-2 gap-x-3 gap-y-4"},Ct=u("br",null,null,-1),_t=u("span",{class:"underline"},"Add new category",-1),kt=u("br",null,null,-1),$t=u("span",{class:"underline"},"Add new account",-1),St={class:"flex items-center justify-end gap-x-4 p-4"},ke={__name:"TransactionForm",props:{model:{type:Object,default:()=>{}},apiRoute:{type:String,required:!0}},emits:["close","success"],setup(l,{emit:v}){var f,g,C,T;const d=l,p=v,n=q(),s=n.dispatch,e=V(()=>n.state.accounts.items),i=V(()=>n.state.category.items),m=_(!1),y=_(!1),a=_({type:((g=(f=d.model)==null?void 0:f.category)==null?void 0:g.type)??"expenses",source:null,total:null,description:null,date:new Date,errors:{},success:!1,...d.model,category:((T=(C=d.model)==null?void 0:C.category)==null?void 0:T.name)??null}),r=async()=>{a.value.errors={},a.value.date&&(a.value.date=I(new Date(a.value.date),"yyyy-MM-dd HH:mm:ss"));const{data:S,status:x}=await s(d.apiRoute,a.value);[200,201].includes(x)?(a.value.success=!0,t(),s("SHOW_NOTIF_ALERT",{message:"Changes saved."}),p("success")):(a.value.errors=S.errors,a.value.errors.name="")},t=()=>{a.value={source:null,total:null,description:null,category:null,date:new Date,errors:{},success:!1}};return(S,x)=>{var N,h,M,oe,ne,re,ue;return b(),k(F,null,[u("form",{novalidate:"",onSubmit:ge(r,["prevent"])},[u("div",gt,[u("div",ht,[c(o(ee),{modelValue:a.value.type,"onUpdate:modelValue":[x[0]||(x[0]=$=>a.value.type=$),x[1]||(x[1]=$=>a.value.category=null)],label:"Type",items:["income","expenses"],errors:(N=a.value.errors)==null?void 0:N.type},null,8,["modelValue","errors"])]),u("div",wt,[c(o(it),{modelValue:a.value.date,"onUpdate:modelValue":x[2]||(x[2]=$=>a.value.date=$),label:"Date",errors:(h=a.value.errors)==null?void 0:h.date},null,8,["modelValue","errors"]),c(o(pe),{modelValue:a.value.total,"onUpdate:modelValue":x[3]||(x[3]=$=>a.value.total=$),label:"Amount",type:"number",errors:(M=a.value.errors)==null?void 0:M.total},null,8,["modelValue","errors"]),u("div",null,[i.value.filter(({type:$})=>$===a.value.type).length?(b(),k(F,{key:0},[c(o(ee),{modelValue:a.value.category,"onUpdate:modelValue":x[4]||(x[4]=$=>a.value.category=$),"button-class":"!min-h-[38px]",label:"Category",items:i.value.filter(({type:$})=>$===a.value.type),errors:(oe=a.value.errors)==null?void 0:oe.category},null,8,["modelValue","items","errors"]),u("button",{type:"button",class:"outline-none text-[10px] text-center italic underline",onClick:x[5]||(x[5]=$=>m.value=!0)}," Add new category ")],64)):(b(),k("button",{key:1,type:"button",class:"text-xs w-full block bg-gray-200 rounded py-3 px-2 italic",onClick:x[6]||(x[6]=$=>m.value=!0)},[O(" No "+A(a.value.type)+" Categories yet. ",1),Ct,_t]))]),u("div",null,[e.value.length?(b(),k(F,{key:0},[c(o(ee),{modelValue:a.value.source,"onUpdate:modelValue":x[7]||(x[7]=$=>a.value.source=$),"button-class":"!min-h-[38px]",label:"Source",items:e.value,errors:(ne=a.value.errors)==null?void 0:ne.source},null,8,["modelValue","items","errors"]),u("button",{type:"button",class:"outline-none text-[10px] text-center italic underline",onClick:x[8]||(x[8]=$=>y.value=!0)}," Add new account ")],64)):(b(),k("button",{key:1,type:"button",class:"mt-4 text-xs w-full block bg-gray-200 rounded py-3 px-2 italic",onClick:x[9]||(x[9]=$=>y.value=!0)},[O(" No Accounts yet."),kt,$t]))]),c(o(pe),{modelValue:a.value.description,"onUpdate:modelValue":x[10]||(x[10]=$=>a.value.description=$),label:"Note",errors:(re=a.value.errors)==null?void 0:re.description},null,8,["modelValue","errors"])])]),u("div",St,[c(o(j),{variant:"blank",onClick:x[11]||(x[11]=$=>p("close"))},{default:w(()=>[O(" Cancel ")]),_:1}),c(o(j),{disabled:!((ue=i.value.filter(({type:$})=>$===a.value.type))!=null&&ue.length)||!e.value.length,type:"submit"},{default:w(()=>[O(" Submit ")]),_:1},8,["disabled"])])],32),c(o(ze),{show:m.value,type:a.value.type,onClose:x[12]||(x[12]=$=>m.value=!1),onSuccess:x[13]||(x[13]=()=>{o(s)("REQUEST_GET_CATEGORY"),m.value=!1})},null,8,["show","type"]),c(o(qe),{show:y.value,onClose:x[14]||(x[14]=$=>y.value=!1),onSuccess:x[15]||(x[15]=()=>{o(s)("REQUEST_GET_ACCOUNTS"),y.value=!1})},null,8,["show"])],64)}}},Tt={__name:"TransactionsActions",emits:["action"],setup(l,{emit:v}){const d=v,p=_(null);return(n,s)=>(b(),k("div",null,[c(o(_e),{modelValue:p.value,"onUpdate:modelValue":[s[0]||(s[0]=e=>p.value=e),s[1]||(s[1]=e=>d("action",p.value))],class:"min-w-0 md:min-w-16 w-max md:w-auto",placeholder:"Actions","fixed-placeholder":"",items:["update","delete"]},null,8,["modelValue"])]))}},Mt={class:"shrink-0"},It=u("div",{class:"grid md:grid-cols-4 gap-x-2 flex-1"},[u("div",{class:"hidden md:block font-medium text-xs"},"Note"),u("div",{class:"hidden md:block font-medium text-xs"},"Total"),u("div",{class:"hidden md:block font-medium text-xs"},"Source"),u("div",{class:"hidden md:block font-medium text-xs"},"Category"),u("div",{class:"block md:hidden font-medium text-xs"},"Transactions")],-1),At=u("div",{class:"font-medium text-xs w-[52px]"},[u("span",{class:"hidden md:block"},"Actions")],-1),Et={class:"md:py-2 md:space-y-2 overflow-y-auto lg:max-h-[calc(100vh-172px)] mr-[-3px] pr-[3px]"},Rt={class:"shrink-0"},Dt={class:"font-semibold flex-1"},Ot={class:"shrink-0"},Vt={class:"shrink-0"},Nt={class:"grid md:grid-cols-4 gap-y-1 gap-x-2 flex-1 items-start"},Ut={class:"capitalize"},Pt={class:"inline-block border border-slate-400 py-[1px] px-1 rounded text-xs"},jt={class:"flex items-center justify-end gap-x-1 w-[52px]"},Bt={key:0,class:"text-center px-4 py-3 text-xs"},Ft=z({__name:"TransactionList",props:{transactions:{type:Array,default:()=>[]}},emits:["edit","delete","selected","checkbox-checked"],setup(l,{emit:v}){const d=l,p=v,n=_(!1),s=_([]),e=y=>{n.value=y,y?s.value=d.transactions.reduce((a,r)=>(a=[...a,...r.items.map(({id:t})=>t)],a),[]):s.value=[],p("selected",s.value)},i=(y,a)=>{y?a.forEach(r=>{s.value.includes(r)||s.value.push(r)}):s.value=s.value.filter(r=>!a.includes(r)),p("selected",s.value)},m=(y,a)=>{n.value=!1,a?s.value.includes(y)||s.value.push(y):s.value=s.value.filter(r=>r!==y),p("selected",s.value)};return(y,a)=>(b(),k("div",null,[c(o(Q),{class:"!px-2 !py-3 md:!px-4 md:!py-3 flex items-center gap-x-5 !bg-gray-200"},{default:w(()=>[u("div",Mt,[c(o(te),{checked:n.value,onChange:a[0]||(a[0]=r=>{e(r),p("checkbox-checked",s.value)})},null,8,["checked"])]),It,At]),_:1}),u("div",Et,[(b(!0),k(F,null,K(l.transactions,r=>(b(),k("div",{key:r.date},[c(o(Q),{class:"!px-2 !py-3 md:!px-4 md:!py-3 flex items-center gap-x-5 cursor-pointer !bg-slate-200 mb-1",onClick:t=>r.show=!r.show},{default:w(()=>[u("div",Rt,[c(o(te),{checked:[...r.items.map(t=>t.id)].every(t=>s.value.includes(t)),onClick:a[1]||(a[1]=ge(()=>{},["stop"])),onChange:t=>{i(t,r.items.map(f=>f.id)),p("checkbox-checked",s.value)}},null,8,["checked","onChange"])]),u("div",Dt,A(o(I)(r.date,"MMM dd, yyyy")),1),u("div",Ot,[c(o(L),{name:r.show?"ChevronUpIcon":"ChevronDownIcon",class:"w-5"},null,8,["name"])])]),_:2},1032,["onClick"]),r.show?(b(!0),k(F,{key:0},K(r.items,t=>(b(),R(o(Q),{key:t.id,class:"!px-2 !py-3 md:!p-4 flex items-start gap-x-5"},{default:w(()=>{var f,g,C;return[u("div",Vt,[c(o(te),{checked:s.value.includes(t.id),onChange:T=>{m(t.id,T),p("checkbox-checked",s.value)}},null,8,["checked","onChange"])]),u("div",Nt,[u("div",null,A(t.description),1),u("div",{class:B(["font-medium",((f=t.category)==null?void 0:f.type)==="expenses"?"text-red-600":"text-green-600"])},A(`${((g=t.category)==null?void 0:g.type)==="expenses"?"-":""}${o(H)(t.total)}`),3),u("div",Ut,A(t.source),1),u("div",null,[u("span",Pt,A(((C=t.category)==null?void 0:C.name)||"Uncategorized"),1)])]),u("div",jt,[c(o(j),{variant:"blank",class:"!px-1 !py-0",onClick:T=>p("edit",t)},{default:w(()=>[c(o(L),{name:"PencilSquareIconOutline",class:"w-4"})]),_:2},1032,["onClick"]),c(o(j),{variant:"blank",class:"!px-1 !py-0",onClick:T=>p("delete",t)},{default:w(()=>[c(o(L),{name:"TrashIconOutline",class:"w-4"})]),_:2},1032,["onClick"])])]}),_:2},1024))),128)):U("",!0)]))),128)),l.transactions.length?U("",!0):(b(),k("div",Bt," No items yet. "))])]))}}),Lt={class:"space-y-2 px-6 py-4"},Qt={class:"group relative border border-dashed border-slate-400 hover:border-slate-900 w-full h-[180px] rounded flex items-center justify-center cursor-pointer mb-3 transition-all ease-in duration-200"},Gt={key:0,class:"text-center flex flex-col items-center text-slate-600 group-hover:text-slate-900 transition-all ease-in duration-200"},zt=u("p",{class:"w-[120px] mx-auto",textContent:"Click or Drop to upload a file"},null,-1),qt={key:1,class:"text-center"},Ht=u("span",{class:"font-bold"},"Filename:",-1),Kt={class:"flex items-center justify-end gap-x-4 p-4"},Wt={__name:"ImportTransactionsModal",props:{show:{type:Boolean,default:()=>!1}},emits:["close","success"],setup(l,{emit:v}){const d=v,n=q().dispatch,s=_({file:null}),e=_(null),i=async()=>{let y=new FormData;y.append("file",s.value.file);const a=await n("REQUEST_UPLOAD_TRANSACTIONS",y);a.status===201&&(n("SHOW_NOTIF_ALERT",{message:`${a.data.sucessfulImport.length} successful imports. ${a.data.failedImport.length} failed.`}),d("success"))},m=()=>{s.value.file=null,document.getElementById("file").value=""};return(y,a)=>(b(),R(o(Z),{show:l.show,title:"Import Transactions","wrapper-class":"lg:max-w-[600px]",onClose:a[2]||(a[2]=()=>{m(),d("close")})},{"body-footer":w(()=>[u("div",Lt,[u("div",Qt,[u("input",{id:"file",ref_key:"file",ref:e,type:"file",class:"h-full w-full absolute top-0 left-0 opacity-0 text-[0] cursor-pointer",onInput:a[0]||(a[0]=r=>{s.value.file=r.target.files[0]})},null,544),s.value.file?(b(),k("div",qt,[u("p",null,[Ht,O(" "+A(s.value.file.name),1)])])):(b(),k("div",Gt,[c(o(L),{name:"ArrowUpTrayIconOutline",class:"w-8 mb-3"}),zt]))])]),u("div",Kt,[c(o(j),{variant:"blank",onClick:a[1]||(a[1]=r=>d("close"))},{default:w(()=>[O(" Cancel ")]),_:1}),c(o(j),{type:"button",variant:s.value.file?"primary":"disabled",disabled:!s.value.file,onClick:i},{default:w(()=>[O(" Upload ")]),_:1},8,["variant","disabled"])])]),_:1},8,["show"]))}},Yt={class:"flex flex-col md:gap-y-2"},Jt={class:"text-2xl font-medium"},Zt={class:"text-2xl font-medium"},Xt={__name:"TransactionSummary",setup(l){const v=q(),d=V(()=>v.state.transactions.summary);return(p,n)=>(b(),k("div",Yt,[c(o(Q),{class:"!py-2 md:!p-5"},{default:w(()=>[c(o(W),{as:"h5",class:"text-slate-800 mb-1"},{default:w(()=>[O("Balance")]),_:1}),u("p",{class:B(["text-2xl font-semibold",d.value.balance<0?"text-red-800":"text-green-800"])},A(o(H)(d.value.balance)),3)]),_:1}),c(o(Q),{class:"!py-2 md:!p-5"},{default:w(()=>[c(o(W),{as:"h5",class:"text-slate-800 mb-1"},{default:w(()=>[O("Income")]),_:1}),u("p",Jt,A(o(H)(d.value.income)),1)]),_:1}),c(o(Q),{class:"!py-2 md:!p-5"},{default:w(()=>[c(o(W),{as:"h5",class:"text-slate-800 mb-1"},{default:w(()=>[O("Expenses")]),_:1}),u("p",Zt,A(o(H)(d.value.expenses)),1)]),_:1})]))}},el={class:"flex flex-col space-y-1"},tl={__name:"TransactionCategories",setup(l){const v=q(),d=V(()=>v.state.transactions.categories.filter(({total:n})=>n!==0)),p=_([{bgColor:"#e5f6ff",fontColor:"inherit"},{bgColor:"#ceeaf9",fontColor:"inherit"},{bgColor:"#b8ddf4",fontColor:"inherit"},{bgColor:"#a1d1ee",fontColor:"inherit"},{bgColor:"#8ac4e9",fontColor:"inherit"},{bgColor:"#73b7e4",fontColor:"inherit"},{bgColor:"#5aaae0",fontColor:"inherit"},{bgColor:"#3c9edb",fontColor:"inherit"},{bgColor:"#0091d6",fontColor:"inherit"},{bgColor:"#0585c7",fontColor:"#fff"},{bgColor:"#0879b9",fontColor:"#fff"},{bgColor:"#096dab",fontColor:"#fff"},{bgColor:"#09619c",fontColor:"#fff"},{bgColor:"#08568e",fontColor:"#fff"},{bgColor:"#054b80",fontColor:"#fff"},{bgColor:"#034073",fontColor:"#fff"},{bgColor:"#003665",fontColor:"#fff"},{bgColor:"#1b4576",fontColor:"#fff"},{bgColor:"#2f5488",fontColor:"#fff"},{bgColor:"#41649a",fontColor:"#fff"}]);return(n,s)=>(b(),R(o(Q),null,{default:w(()=>[c(o(W),{as:"h3",class:"text-slate-800 mb-2"},{default:w(()=>[O("Categories")]),_:1}),u("div",el,[(b(!0),k(F,null,K(d.value,({name:e,total:i},m)=>{var y,a,r;return b(),k("div",{key:e,class:"border text-sm rounded px-2 py-[3px] flex items-center justify-between",style:Fe({"background-color":(y=p.value[m])==null?void 0:y.bgColor,color:(a=p.value[m])==null?void 0:a.fontColor,"border-color":(r=p.value[m])==null?void 0:r.bgColor})},[u("label",null,A(e),1),u("p",null,A(o(H)(i)),1)],4)}),128))])]),_:1}))}},ll={class:"container md:pt-2 lg:pt-5 md:px-2 lg:px-8 h-full"},al={class:"flex flex-col lg:flex-row-reverse gap-y-10 gap-x-4"},sl={class:"flex-1 flex flex-col space-y-3 shrink-0 lg:pt-[50px]"},ol={class:"lg:w-9/12 h-max"},nl={class:"px-2 md:px-0 mb-3 flex flex-row items-start md:items-center justify-between gap-y-2 gap-x-2"},rl={class:"flex flex-col md:flex-row gap-y-5 gap-x-2 md:gap-x-4 md:items-center"},ul={class:"flex items-center gap-x-2"},il=u("span",{class:"text-xs"},"Filters: ",-1),dl={class:"flex gap-x-2"},cl={key:0,class:"bg-gray-200 rounded py-[2px] px-2 text-[11px]"},ml={class:"flex md:items-center justify-end flex-1 gap-x-2"},wl={__name:"Transactions",setup(l){const v=q(),d=v.dispatch,p=v.commit,n=V(()=>v.state.transactions.items),s=V(()=>v.state.transactions.filters),e=_(null),i=_([]),m=_(!1),y=_(!1),a=_(!1),r=_(!1),t=_(!1),f=_(!1),g=_(!1);ve(()=>{C(),d("REQUEST_GET_CATEGORY"),d("REQUEST_GET_ACCOUNTS")});const C=()=>{d("REQUEST_GET_TRANSACTIONS_SUMMARY"),d("REQUEST_GET_TRANSACTIONS_BY_CATEGORY"),d("REQUEST_GET_TRANSACTIONS")},T=N=>{p("UPDATE_TRANSACTIONS_STATE",{...s,filters:{start:N.start,end:N.end}}),C()},S=N=>{N==="update"&&(f.value=!0),N==="delete"&&(g.value=!0)},x=async()=>{(await d("REQUEST_BULK_DELETE_TRANSACTION",{transactions:i.value})).status===200&&(C(),a.value=!1,g.value=!1)};return(N,h)=>(b(),k(F,null,[u("section",ll,[u("div",al,[u("div",sl,[c(o(Xt)),c(o(tl))]),u("div",ol,[u("div",nl,[u("div",rl,[i.value.length?(b(),R(o(Tt),{key:0,onAction:S})):U("",!0),u("div",ul,[il,u("div",dl,[Object.keys(s.value).includes("start")&&Object.keys(s.value).includes("end")?(b(),k("div",cl,A(o(I)(s.value.start,"MMM dd, yyyy"))+" - "+A(o(I)(s.value.end,"MMM dd, yyyy")),1)):U("",!0)])])]),u("div",ml,[c(o(j),{variant:"blank",class:"!border !border-solid !border-slate-800",onClick:h[0]||(h[0]=M=>t.value=!0)},{default:w(()=>[c(o(L),{name:"ArrowUpTrayIconOutline",class:"w-5 h-5 text-slate-900"})]),_:1}),c(o(j),{variant:"blank",class:"!p-[6px] !border !border-solid !border-slate-800",onClick:h[1]||(h[1]=M=>r.value=!0)},{default:w(()=>[c(o(L),{name:"AdjustmentsHorizontalIconOutline",class:"w-6 h-6 text-slate-900"})]),_:1}),c(o(j),{class:"!p-2",onClick:h[2]||(h[2]=M=>m.value=!0)},{default:w(()=>[c(o(L),{name:"PlusIcon",class:"w-5 h-5"})]),_:1})])]),c(o(Ft),{transactions:n.value,onCheckboxChecked:h[3]||(h[3]=M=>i.value=M),onShow:h[4]||(h[4]=M=>{e.value=M}),onEdit:h[5]||(h[5]=M=>{e.value=M,y.value=!0}),onDelete:h[6]||(h[6]=M=>{e.value=M,a.value=!0})},null,8,["transactions"])])])]),c(o(xt),{show:r.value,onClose:h[7]||(h[7]=M=>r.value=!1),onDatesChanged:h[8]||(h[8]=M=>{T(M),r.value=!1})},null,8,["show"]),c(o(dt),{show:m.value,onClose:h[9]||(h[9]=M=>m.value=!1),onSuccess:h[10]||(h[10]=()=>{C(),m.value=!1})},null,8,["show"]),y.value?(b(),R(o(ct),{key:0,show:y.value,model:e.value,onClose:h[11]||(h[11]=M=>y.value=!1),onSuccess:h[12]||(h[12]=()=>{C(),y.value=!1})},null,8,["show","model"])):U("",!0),a.value?(b(),R(o(mt),{key:1,show:a.value,model:e.value,onClose:h[13]||(h[13]=M=>a.value=!1),onConfirm:x},null,8,["show","model"])):U("",!0),c(o(Wt),{show:t.value,onClose:h[14]||(h[14]=M=>t.value=!1),onSuccess:h[15]||(h[15]=()=>{C(),t.value=!1})},null,8,["show"]),c(o(he),{show:g.value,message:`Are you sure you want to delete (${i.value.length}) transaction${i.value.length>1?"s":""}?`,onClose:h[16]||(h[16]=M=>g.value=!1),onConfirm:x},null,8,["show","message"])],64))}};export{wl as default};