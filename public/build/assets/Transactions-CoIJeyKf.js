import{p as ie,q as we,l as q,r as k,s as he,c as R,v as ke,x as Se,y as I,z as Ce,A as $e,B as Te,C as G,D as K,I as ae,E as _e,G as Me,N as se,H as de,J as Ie,K as Ae,L as M,M as F,O as Ee,P as ne,_ as ce,Q as Re,o as h,d as $,i as f,e as A,w,h as c,f as o,n as j,m as le,t as E,T as me,F as Q,R as H,j as O,S as De,U as Ve,V as Oe,W as pe,g as N,u as W,X as _,Y as oe,Z as re,k as ve,$ as B}from"./app-DrU6nhd4.js";import{a as P,_ as ue,C as L}from"./TextInput.vue_vue_type_script_setup_true_lang-DwHfulx2.js";import{_ as Y,f as z,a as Z}from"./number-BYUqgHT9.js";import{p as Ne,u as Pe,f as Ue,c as V,_ as fe,a as X,b as ee}from"./SelectInput.vue_vue_type_script_setup_true_lang-Dbv1UOyT.js";import{_ as je}from"./CategoryForm-BPP-Gpb8.js";/* empty css            */import"./_plugin-vue_export-helper-DlAUqK2U.js";function Be({container:l,accept:b,walk:y,enabled:p}){ie(()=>{let s=l.value;if(!s||p!==void 0&&!p.value)return;let a=we(l);if(!a)return;let e=Object.assign(m=>b(m),{acceptNode:b}),i=a.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,e,!1);for(;i.nextNode();)y(i.currentNode)})}var Fe=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(Fe||{}),Le=(l=>(l[l.Pointer=0]="Pointer",l[l.Other=1]="Other",l))(Le||{});function Qe(l){requestAnimationFrame(()=>requestAnimationFrame(l))}let ye=Symbol("MenuContext");function J(l){let b=Ae(ye,null);if(b===null){let y=new Error(`<${l} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(y,J),y}return b}let qe=q({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(l,{slots:b,attrs:y}){let p=k(1),s=k(null),a=k(null),e=k([]),i=k(""),m=k(null),u=k(1);function d(t=n=>n){let n=m.value!==null?e.value[m.value]:null,x=Re(t(e.value.slice()),C=>I(C.dataRef.domRef)),g=n?x.indexOf(n):null;return g===-1&&(g=null),{items:x,activeItemIndex:g}}let r={menuState:p,buttonRef:s,itemsRef:a,items:e,searchQuery:i,activeItemIndex:m,activationTrigger:u,closeMenu:()=>{p.value=1,m.value=null},openMenu:()=>p.value=0,goToItem(t,n,x){let g=d(),C=Ue(t===V.Specific?{focus:V.Specific,id:n}:{focus:t},{resolveItems:()=>g.items,resolveActiveIndex:()=>g.activeItemIndex,resolveId:S=>S.id,resolveDisabled:S=>S.dataRef.disabled});i.value="",m.value=C,u.value=x??1,e.value=g.items},search(t){let n=i.value!==""?0:1;i.value+=t.toLowerCase();let x=(m.value!==null?e.value.slice(m.value+n).concat(e.value.slice(0,m.value+n)):e.value).find(C=>C.dataRef.textValue.startsWith(i.value)&&!C.dataRef.disabled),g=x?e.value.indexOf(x):-1;g===-1||g===m.value||(m.value=g,u.value=1)},clearSearch(){i.value=""},registerItem(t,n){let x=d(g=>[...g,{id:t,dataRef:n}]);e.value=x.items,m.value=x.activeItemIndex,u.value=1},unregisterItem(t){let n=d(x=>{let g=x.findIndex(C=>C.id===t);return g!==-1&&x.splice(g,1),x});e.value=n.items,m.value=n.activeItemIndex,u.value=1}};return he([s,a],(t,n)=>{var x;r.closeMenu(),ke(n,Se.Loose)||(t.preventDefault(),(x=I(s))==null||x.focus())},R(()=>p.value===0)),Ce(ye,r),$e(R(()=>Te(p.value,{0:G.Open,1:G.Closed}))),()=>{let t={open:p.value===0,close:r.closeMenu};return K({ourProps:{},theirProps:l,slot:t,slots:b,attrs:y,name:"Menu"})}}}),ze=q({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(l,{attrs:b,slots:y,expose:p}){var s;let a=(s=l.id)!=null?s:`headlessui-menu-button-${ae()}`,e=J("MenuButton");p({el:e.buttonRef,$el:e.buttonRef});function i(r){switch(r.key){case M.Space:case M.Enter:case M.ArrowDown:r.preventDefault(),r.stopPropagation(),e.openMenu(),F(()=>{var t;(t=I(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(V.First)});break;case M.ArrowUp:r.preventDefault(),r.stopPropagation(),e.openMenu(),F(()=>{var t;(t=I(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(V.Last)});break}}function m(r){switch(r.key){case M.Space:r.preventDefault();break}}function u(r){l.disabled||(e.menuState.value===0?(e.closeMenu(),F(()=>{var t;return(t=I(e.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(r.preventDefault(),e.openMenu(),Qe(()=>{var t;return(t=I(e.itemsRef))==null?void 0:t.focus({preventScroll:!0})})))}let d=_e(R(()=>({as:l.as,type:b.type})),e.buttonRef);return()=>{var r;let t={open:e.menuState.value===0},{...n}=l,x={ref:e.buttonRef,id:a,type:d.value,"aria-haspopup":"menu","aria-controls":(r=I(e.itemsRef))==null?void 0:r.id,"aria-expanded":e.menuState.value===0,onKeydown:i,onKeyup:m,onClick:u};return K({ourProps:x,theirProps:n,slot:t,attrs:b,slots:y,name:"MenuButton"})}}}),Ge=q({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(l,{attrs:b,slots:y,expose:p}){var s;let a=(s=l.id)!=null?s:`headlessui-menu-items-${ae()}`,e=J("MenuItems"),i=k(null);p({el:e.itemsRef,$el:e.itemsRef}),Be({container:R(()=>I(e.itemsRef)),enabled:R(()=>e.menuState.value===0),accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none")}});function m(t){var n;switch(i.value&&clearTimeout(i.value),t.key){case M.Space:if(e.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),e.search(t.key);case M.Enter:if(t.preventDefault(),t.stopPropagation(),e.activeItemIndex.value!==null){let x=e.items.value[e.activeItemIndex.value];(n=I(x.dataRef.domRef))==null||n.click()}e.closeMenu(),ce(I(e.buttonRef));break;case M.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(V.Next);case M.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(V.Previous);case M.Home:case M.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(V.First);case M.End:case M.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(V.Last);case M.Escape:t.preventDefault(),t.stopPropagation(),e.closeMenu(),F(()=>{var x;return(x=I(e.buttonRef))==null?void 0:x.focus({preventScroll:!0})});break;case M.Tab:t.preventDefault(),t.stopPropagation(),e.closeMenu(),F(()=>Ee(I(e.buttonRef),t.shiftKey?ne.Previous:ne.Next));break;default:t.key.length===1&&(e.search(t.key),i.value=setTimeout(()=>e.clearSearch(),350));break}}function u(t){switch(t.key){case M.Space:t.preventDefault();break}}let d=Me(),r=R(()=>d!==null?(d.value&G.Open)===G.Open:e.menuState.value===0);return()=>{var t,n;let x={open:e.menuState.value===0},{...g}=l,C={"aria-activedescendant":e.activeItemIndex.value===null||(t=e.items.value[e.activeItemIndex.value])==null?void 0:t.id,"aria-labelledby":(n=I(e.buttonRef))==null?void 0:n.id,id:a,onKeydown:m,onKeyup:u,role:"menu",tabIndex:0,ref:e.itemsRef};return K({ourProps:C,theirProps:g,slot:x,attrs:b,slots:y,features:se.RenderStrategy|se.Static,visible:r.value,name:"MenuItems"})}}}),He=q({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(l,{slots:b,attrs:y,expose:p}){var s;let a=(s=l.id)!=null?s:`headlessui-menu-item-${ae()}`,e=J("MenuItem"),i=k(null);p({el:i,$el:i});let m=R(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===a:!1),u=Ne(i),d=R(()=>({disabled:l.disabled,get textValue(){return u()},domRef:i}));de(()=>e.registerItem(a,d)),Ie(()=>e.unregisterItem(a)),ie(()=>{e.menuState.value===0&&m.value&&e.activationTrigger.value!==0&&F(()=>{var S,U;return(U=(S=I(i))==null?void 0:S.scrollIntoView)==null?void 0:U.call(S,{block:"nearest"})})});function r(S){if(l.disabled)return S.preventDefault();e.closeMenu(),ce(I(e.buttonRef))}function t(){if(l.disabled)return e.goToItem(V.Nothing);e.goToItem(V.Specific,a)}let n=Pe();function x(S){n.update(S)}function g(S){n.wasMoved(S)&&(l.disabled||m.value||e.goToItem(V.Specific,a,0))}function C(S){n.wasMoved(S)&&(l.disabled||m.value&&e.goToItem(V.Nothing))}return()=>{let{disabled:S}=l,U={active:m.value,disabled:S,close:e.closeMenu},{...D}=l;return K({ourProps:{id:a,ref:i,role:"menuitem",tabIndex:S===!0?void 0:-1,"aria-disabled":S===!0?!0:void 0,disabled:void 0,onClick:r,onFocus:t,onPointerenter:x,onMouseenter:x,onPointermove:g,onMousemove:g,onPointerleave:C,onMouseleave:C},theirProps:{...y,...D},slot:U,attrs:y,slots:b,name:"MenuItem"})}}});function be(l,b){return h(),$("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})])}const Ke={class:"relative"},We={class:"block truncate capitalize"},xe=q({__name:"Dropdown",props:{items:{type:Object,required:!0},modelValue:{type:[String,Boolean,Number,Object,null],default:null},dropdownDirection:{type:String,default:"bottom"},placeholder:{type:String,default:""},fixedPlaceholder:{type:Boolean,default:()=>!1},buttonClass:{type:[String,Array,Object],default:""}},emits:["change","update:model-value"],setup(l,{emit:b}){const y=l,p=b,s=k(y.modelValue);return(a,e)=>(h(),A(o(qe),{as:"div",class:"min-w-16 cursor-pointer"},{default:w(()=>[f("div",Ke,[c(o(ze),{class:j(["relative flex items-center gap-x-2 w-full rounded-lg py-2 px-3 text-left shadow-md focus:outline-none text-xs hover:opacity-90 border border-slate-400 text-slate-700 bg-white",l.buttonClass])},{default:w(()=>[le(a.$slots,"button-content",{},()=>[f("span",We,E(l.fixedPlaceholder?l.placeholder||"Select":s.value?s.value:l.placeholder),1),c(o(be),{class:"w-4 text-slate-700","aria-hidden":"true"})])]),_:3},8,["class"]),c(me,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:w(()=>[c(o(Ge),{as:"div",class:j(["absolute max-h-60 border min-w-[150px] overflow-auto rounded-md bg-white z-10",[l.dropdownDirection==="bottom"?"bottom-10 md:bottom-auto md:top-10":"bottom-10"]])},{default:w(()=>[(h(!0),$(Q,null,H(l.items,i=>(h(),A(o(He),{key:i,as:"div",class:"cursor-pointer border-b border-[#e9eef4] px-3 pt-[10px] pb-[7px] text-xs text-[#3d4146] hover:bg-[#f8f9fa] capitalize",onClick:()=>{s.value=i,p("change",s.value),p("update:model-value",s.value)}},{default:w(()=>[O(E(i),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["class"])]),_:1})])]),_:3}))}}),Ye={class:"block truncate capitalize"},Je={__name:"PopoverWrapper",props:{containerClass:{type:[String,Array,Object],default:""},buttonLabel:{type:String,default:""},buttonClass:{type:[String,Array,Object],default:""},panelClass:{type:[String,Array,Object],default:""}},setup(l){return(b,y)=>(h(),A(o(Oe),{class:j(["relative",l.containerClass])},{default:w(({open:p,close:s})=>[c(o(De),{class:j(["relative flex items-center gap-x-2 w-full rounded-lg py-2 px-3 text-left shadow-md focus:outline-none text-xs hover:opacity-90 border border-slate-400 text-slate-700",["",l.buttonClass]])},{default:w(()=>[le(b.$slots,"button-value",{},()=>[f("span",Ye,E(l.buttonLabel),1),c(o(be),{class:"w-4 text-slate-700","aria-hidden":"true"})])]),_:2},1032,["class"]),c(me,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:w(()=>[c(o(Ve),{class:j(["absolute z-[10] bg-white left-0 top-[38px] w-full rounded bg-white border",l.panelClass])},{default:w(()=>[le(b.$slots,"default",{close:s})]),_:2},1032,["class"])]),_:2},1024)]),_:3},8,["class"]))}},te={__name:"Datepicker",props:{wrapperClass:{type:[String,Object,Array],default:""},modelValue:{type:[String,Date,Object,Array,null],default:null},monthPicker:{type:Boolean,default:()=>!1},range:{type:Boolean,default:()=>!1}},emits:["update:model-value","range-start","range-end"],setup(l,{emit:b}){const y=l,p=b,s=k(y.modelValue),a=e=>{e&&(s.value=e),p("update:model-value",e)};return(e,i)=>(h(),$("div",{class:j(["relative",l.wrapperClass])},[c(o(pe),{modelValue:s.value,"onUpdate:modelValue":[i[0]||(i[0]=m=>s.value=m),a],"input-class-name":"border-0 rounded-none py-2 px-1 border-b border-form-border outline-none text-sm read-only:border-gray-200 read-only:text-gray-500 read-only:cursor-not-allowed transition-all bg-white text-slate-800 font-sans",inline:"","month-picker":l.monthPicker,range:l.range,"auto-apply":!0,"hide-input-icon":!0,clearable:!1,"enable-time-picker":!1,format:"PP","action-row":{showNow:!1,showPreview:!0,showSelect:!1,showCancel:!1},config:{keepActionRow:!l.monthPicker},onRangeStart:i[1]||(i[1]=m=>p("range-start",s.value)),onRangeEnd:i[2]||(i[2]=m=>p("range-end",s.value))},null,8,["modelValue","month-picker","range","config"])],2))}},Ze=["for"],Xe={key:0},et={class:"relative"},tt={key:0,class:"mt-1"},lt={__name:"DatepickerInput",props:{id:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:()=>!1},errors:{type:Array,default:()=>[]},readOnly:{type:Boolean,default:()=>!1},wrapperClass:{type:[String,Object,Array],default:""},labelClass:{type:[String,Object,Array],default:""},modelValue:{type:[String,Date,null],default:null}},emits:["update:model-value"],setup(l,{emit:b}){const y=l,p=b,s=k(y.modelValue),a=e=>{e&&(s.value=e),p("update:model-value",e)};return(e,i)=>(h(),$("div",null,[f("div",{class:j(l.wrapperClass)},[l.label?(h(),$("label",{key:0,class:j(["text-sm block mb-1",[{"text-gray-500 cursor-not-allowed":l.readOnly},l.labelClass]]),for:l.id},[O(E(l.label),1),l.required?(h(),$("span",Xe,"*")):N("",!0)],10,Ze)):N("",!0)],2),f("div",et,[c(o(pe),{modelValue:s.value,"onUpdate:modelValue":[i[0]||(i[0]=m=>s.value=m),a],"input-class-name":"border-0 rounded-none py-2 px-1 border-b border-form-border outline-none text-sm read-only:border-gray-200 read-only:text-gray-500 read-only:cursor-not-allowed transition-all bg-white text-slate-800 font-sans","auto-apply":!0,"hide-input-icon":!0,clearable:!1,"enable-time-picker":!1,format:"PP"},null,8,["modelValue"])]),l.errors.length?(h(),$("div",tt,[(h(!0),$(Q,null,H(l.errors,m=>(h(),$("p",{key:m,class:"text-red-500 block text-xs"},E(m),1))),128))])):N("",!0)]))}},at={__name:"CreateTransactionModal",props:{show:{type:Boolean,default:()=>!1}},emits:["close","success"],setup(l,{emit:b}){const y=b;return(p,s)=>(h(),A(o(Y),{show:l.show,title:"Create Transaction","wrapper-class":"lg:max-w-[500px]",onClose:s[2]||(s[2]=a=>y("close"))},{"body-footer":w(()=>[c(o(ge),{"api-route":"REQUEST_CREATE_TRANSACTION",onClose:s[0]||(s[0]=a=>y("close")),onSuccess:s[1]||(s[1]=a=>y("success"))})]),_:1},8,["show"]))}},st={__name:"UpdateTransactionModal",props:{show:{type:Boolean,default:()=>!1},model:{type:Object,required:!0}},emits:["close","confirm","success"],setup(l,{emit:b}){const y=b;return(p,s)=>(h(),A(o(Y),{show:l.show,title:"Edit Transaction","wrapper-class":"lg:max-w-[500px]",onClose:s[2]||(s[2]=a=>y("close"))},{"body-footer":w(()=>[c(o(ge),{"api-route":"REQUEST_UPDATE_TRANSACTION",model:l.model,onClose:s[0]||(s[0]=a=>y("close")),onSuccess:s[1]||(s[1]=a=>y("success"))},null,8,["model"])]),_:1},8,["show"]))}},nt={__name:"DeleteTransaction",props:{show:{type:Boolean,default:()=>!1},model:{type:[Object,Array],required:!0}},emits:["close","confirm"],setup(l,{emit:b}){const y=l,p=b,a=W().dispatch,e=async()=>{let{status:i}=await a("REQUEST_DELETE_TRANSACTION",{id:y.model.id});i===200&&(a("SHOW_NOTIF_ALERT",{message:"Transaction deleted."}),p("confirm"))};return(i,m)=>(h(),A(o(fe),{show:l.show,message:"Are you sure you want to delete this transaction?",onClose:m[0]||(m[0]=u=>p("close")),onConfirm:e},null,8,["show"]))}},ot={class:"space-y-2 px-6 pt-6 pb-8 max-w-[200px]"},rt={class:"flex items-center justify-end gap-x-4 p-4 border-t"},ut={__name:"TransactionFilterModal",props:{show:{type:Boolean,default:()=>!1}},emits:["close","dates-changed"],setup(l,{emit:b}){const y=b,p=R(()=>{let d=_(i.value[0],"MMM dd, yyyy"),r=_(i.value[1],"MMM dd, yyyy"),t=`${d} - ${r}`,n=_(new Date(e.value.year,e.value.month),"MMM yyyy");return s.value==="daily"?_(a.value,"MMM dd, yyyy"):s.value==="monthly"?n:s.value==="calendar"?t:"Date label"}),s=k("monthly"),a=k(new Date),e=k({month:Number(_(new Date,"MM"))-1,year:Number(_(new Date,"yyyy"))}),i=k([new Date,new Date]),m=(d,r)=>{s.value==="daily"&&(e.value={month:Number(_(a.value,"M"))-1,year:Number(_(a.value,"yyyy"))},i.value=[a.value,a.value]),s.value==="monthly"&&(a.value=new Date(oe(new Date(e.value.year,e.value.month))),i.value=[a.value,new Date(re(a.value))]),s.value==="calendar"&&(a.value=i.value[0],e.value={month:Number(_(i.value[0],"M"))-1,year:Number(_(i.value[0],"yyyy"))}),r(),u()},u=()=>{let d={start:new Date,end:new Date};s.value==="daily"&&(d.start=_(a.value,"yyyy-MM-dd"),d.end=_(a.value,"yyyy-MM-dd")),s.value==="monthly"&&(d.start=_(oe(new Date(e.value.year,e.value.month)),"yyyy-MM-dd"),d.end=_(re(new Date(e.value.year,e.value.month)),"yyyy-MM-dd")),s.value==="calendar"&&(d.start=_(i.value[0],"yyyy-MM-dd"),d.end=_(i.value[1],"yyyy-MM-dd")),y("dates-changed",d)};return(d,r)=>(h(),A(o(Y),{show:l.show,title:"Transaction Filters","wrapper-class":"lg:max-w-[350px]",onClose:r[4]||(r[4]=t=>y("close"))},{"body-footer":w(()=>[f("div",ot,[c(o(xe),{modelValue:s.value,"onUpdate:modelValue":[r[0]||(r[0]=t=>s.value=t),u],class:"!min-w-0","button-class":"justify-between",items:["daily","monthly","calendar"]},null,8,["modelValue"]),c(o(Je),{"button-class":"bg-white justify-between","panel-class":"w-max","button-label":p.value},{default:w(({close:t})=>[s.value==="daily"?(h(),A(o(te),{key:0,modelValue:a.value,"onUpdate:modelValue":[r[1]||(r[1]=n=>a.value=n),n=>{m(n,t)}]},null,8,["modelValue","onUpdate:modelValue"])):N("",!0),s.value==="monthly"?(h(),A(o(te),{key:1,modelValue:e.value,"onUpdate:modelValue":[r[2]||(r[2]=n=>e.value=n),n=>{m(n,t)}],"month-picker":!0},null,8,["modelValue","onUpdate:modelValue"])):N("",!0),s.value==="calendar"?(h(),A(o(te),{key:2,modelValue:i.value,"onUpdate:modelValue":[r[3]||(r[3]=n=>i.value=n),n=>{m(n,t)}],range:!0},null,8,["modelValue","onUpdate:modelValue"])):N("",!0)]),_:1},8,["button-label"])]),f("div",rt,[c(o(P),{variant:"blank"},{default:w(()=>[O(" Cancel ")]),_:1}),c(o(P),{type:"submit"},{default:w(()=>[O(" Submit ")]),_:1})])]),_:1},8,["show"]))}},it={class:"space-y-4 px-6 pt-6 pb-8"},dt={class:"flex items-center justify-end gap-x-4 p-4 border-t"},ge={__name:"TransactionForm",props:{model:{type:Object,default:()=>{}},apiRoute:{type:String,required:!0}},emits:["close","success"],setup(l,{emit:b}){const y=l,p=b,s=W(),a=s.dispatch,e=R(()=>s.state.accounts.items),i=R(()=>s.state.category.items),m=k(!1),u=k({type:"expenses",source:null,total:null,description:null,category:null,date:new Date,errors:{},success:!1,...y.model}),d=async()=>{u.value.errors={},u.value.date&&(u.value.date=_(new Date(u.value.date),"yyyy-MM-dd HH:mm:ss"));const{data:t,status:n}=await a(y.apiRoute,u.value);[200,201].includes(n)?(u.value.success=!0,r(),a("SHOW_NOTIF_ALERT",{message:"Changes saved."}),p("success")):(u.value.errors=t.errors,u.value.errors.name="")},r=()=>{u.value={source:null,total:null,description:null,category:null,date:new Date,errors:{},success:!1}};return(t,n)=>{var x,g,C,S,U,D;return h(),$(Q,null,[f("form",{novalidate:"",onSubmit:ve(d,["prevent"])},[f("div",it,[c(o(X),{modelValue:u.value.type,"onUpdate:modelValue":[n[0]||(n[0]=v=>u.value.type=v),n[1]||(n[1]=v=>u.value.category=null)],label:"Type",items:["income","expenses"],errors:(x=u.value.errors)==null?void 0:x.type},null,8,["modelValue","errors"]),c(o(ue),{modelValue:u.value.total,"onUpdate:modelValue":n[2]||(n[2]=v=>u.value.total=v),label:"Amount",type:"number",errors:(g=u.value.errors)==null?void 0:g.total},null,8,["modelValue","errors"]),c(o(ue),{modelValue:u.value.description,"onUpdate:modelValue":n[3]||(n[3]=v=>u.value.description=v),label:"Note",errors:(C=u.value.errors)==null?void 0:C.description},null,8,["modelValue","errors"]),f("div",null,[c(o(X),{modelValue:u.value.category,"onUpdate:modelValue":n[4]||(n[4]=v=>u.value.category=v),label:"Category",items:i.value.filter(({type:v})=>v===u.value.type),errors:(S=u.value.errors)==null?void 0:S.category},null,8,["modelValue","items","errors"]),f("button",{type:"button",class:"mt-1 text-xs underline text-blue-600 ml-auto block",onClick:n[5]||(n[5]=v=>m.value=!0)}," Add new category ")]),c(o(X),{modelValue:u.value.source,"onUpdate:modelValue":n[6]||(n[6]=v=>u.value.source=v),label:"Source",items:e.value,errors:(U=u.value.errors)==null?void 0:U.source},null,8,["modelValue","items","errors"]),c(o(lt),{modelValue:u.value.date,"onUpdate:modelValue":n[7]||(n[7]=v=>u.value.date=v),label:"Date",errors:(D=u.value.errors)==null?void 0:D.date},null,8,["modelValue","errors"])]),f("div",dt,[c(o(P),{variant:"blank",onClick:n[8]||(n[8]=v=>p("close"))},{default:w(()=>[O(" Cancel ")]),_:1}),c(o(P),{type:"submit"},{default:w(()=>[O(" Submit ")]),_:1})])],32),c(o(je),{show:m.value,type:u.value.type,onClose:n[9]||(n[9]=v=>m.value=!1),onSuccess:n[10]||(n[10]=()=>{o(a)("REQUEST_GET_CATEGORY"),m.value=!1})},null,8,["show","type"])],64)}}},ct={__name:"TransactionsActions",emits:["action"],setup(l,{emit:b}){const y=b,p=k(null);return(s,a)=>(h(),$("div",null,[c(o(xe),{modelValue:p.value,"onUpdate:modelValue":[a[0]||(a[0]=e=>p.value=e),a[1]||(a[1]=e=>y("action",p.value))],class:"min-w-0 md:min-w-16 w-max md:w-auto",placeholder:"Actions","fixed-placeholder":"",items:["delete"]},null,8,["modelValue"])]))}},mt={class:"shrink-0"},pt=f("div",{class:"grid md:grid-cols-4 gap-x-2 flex-1"},[f("div",{class:"hidden md:block font-medium text-xs"},"Note"),f("div",{class:"hidden md:block font-medium text-xs"},"Total"),f("div",{class:"hidden md:block font-medium text-xs"},"Source"),f("div",{class:"hidden md:block font-medium text-xs"},"Category"),f("div",{class:"block md:hidden font-medium text-xs"},"Transactions")],-1),vt=f("div",{class:"font-medium text-xs w-[52px]"},[f("span",{class:"hidden md:block"},"Actions")],-1),ft={class:"md:py-2 md:space-y-2 overflow-y-auto lg:max-h-[calc(100vh-172px)] mr-[-3px] pr-[3px]"},yt={class:"shrink-0"},bt={class:"font-semibold flex-1"},xt={class:"shrink-0"},gt={class:"shrink-0"},wt={class:"grid md:grid-cols-4 gap-y-1 gap-x-2 flex-1 items-start"},ht={class:"capitalize"},kt={class:"inline-block border border-slate-400 py-[1px] px-1 rounded text-xs"},St={class:"flex items-center justify-end gap-x-1 w-[52px]"},Ct={key:0,class:"text-center px-4 py-3 text-xs"},$t=q({__name:"TransactionList",props:{transactions:{type:Array,default:()=>[]}},emits:["edit","delete","selected","checkbox-checked"],setup(l,{emit:b}){const y=l,p=b,s=k(!1),a=k([]),e=u=>{s.value=u,u?a.value=y.transactions.reduce((d,r)=>(d=[...d,...r.items.map(({id:t})=>t)],d),[]):a.value=[],p("selected",a.value)},i=(u,d)=>{u?d.forEach(r=>{a.value.includes(r)||a.value.push(r)}):a.value=a.value.filter(r=>!d.includes(r)),p("selected",a.value)},m=(u,d)=>{s.value=!1,d?a.value.includes(u)||a.value.push(u):a.value=a.value.filter(r=>r!==u),p("selected",a.value)};return(u,d)=>(h(),$("div",null,[c(o(L),{class:"!px-2 !py-3 md:!px-4 md:!py-3 flex items-center gap-x-5 !bg-gray-200"},{default:w(()=>[f("div",mt,[c(o(ee),{checked:s.value,onChange:d[0]||(d[0]=r=>{e(r),p("checkbox-checked",a.value)})},null,8,["checked"])]),pt,vt]),_:1}),f("div",ft,[(h(!0),$(Q,null,H(l.transactions,r=>(h(),$("div",{key:r.date},[c(o(L),{class:"!px-2 !py-3 md:!px-4 md:!py-3 flex items-center gap-x-5 cursor-pointer !bg-slate-200 mb-1",onClick:t=>r.show=!r.show},{default:w(()=>[f("div",yt,[c(o(ee),{checked:[...r.items.map(t=>t.id)].every(t=>a.value.includes(t)),onClick:d[1]||(d[1]=ve(()=>{},["stop"])),onChange:t=>{i(t,r.items.map(n=>n.id)),p("checkbox-checked",a.value)}},null,8,["checked","onChange"])]),f("div",bt,E(o(_)(r.date,"MMM dd, yyyy")),1),f("div",xt,[c(o(B),{name:r.show?"ChevronUpIcon":"ChevronDownIcon",class:"w-5"},null,8,["name"])])]),_:2},1032,["onClick"]),r.show?(h(!0),$(Q,{key:0},H(r.items,t=>(h(),A(o(L),{key:t.id,class:"!px-2 !py-3 md:!p-4 flex items-start gap-x-5"},{default:w(()=>{var n,x,g;return[f("div",gt,[c(o(ee),{checked:a.value.includes(t.id),onChange:C=>{m(t.id,C),p("checkbox-checked",a.value)}},null,8,["checked","onChange"])]),f("div",wt,[f("div",null,E(t.description),1),f("div",{class:j(["font-medium",((n=t.category)==null?void 0:n.type)==="expenses"?"text-red-600":"text-green-600"])},E(`${((x=t.category)==null?void 0:x.type)==="expenses"?"-":""}${o(z)(t.total)}`),3),f("div",ht,E(t.source),1),f("div",null,[f("span",kt,E(((g=t.category)==null?void 0:g.name)||"uncategorized"),1)])]),f("div",St,[c(o(P),{variant:"blank",class:"!px-1 !py-0",onClick:C=>p("edit",t)},{default:w(()=>[c(o(B),{name:"PencilSquareIconOutline",class:"w-4"})]),_:2},1032,["onClick"]),c(o(P),{variant:"blank",class:"!px-1 !py-0",onClick:C=>p("delete",t)},{default:w(()=>[c(o(B),{name:"TrashIconOutline",class:"w-4"})]),_:2},1032,["onClick"])])]}),_:2},1024))),128)):N("",!0)]))),128)),l.transactions.length?N("",!0):(h(),$("div",Ct," No items yet. "))])]))}}),Tt={class:"space-y-2 px-6 pt-6 pb-8"},_t={class:"group relative border border-dashed border-slate-400 hover:border-slate-900 w-full h-[180px] rounded flex items-center justify-center cursor-pointer mb-3 transition-all ease-in duration-200"},Mt={key:0,class:"text-center flex flex-col items-center text-slate-600 group-hover:text-slate-900 transition-all ease-in duration-200"},It=f("p",{class:"w-[120px] mx-auto",textContent:"Click or Drop to upload a file"},null,-1),At={key:1,class:"text-center"},Et=f("span",{class:"font-bold"},"Filename:",-1),Rt={class:"flex items-center justify-end gap-x-4 p-4 border-t"},Dt={__name:"ImportTransactionsModal",props:{show:{type:Boolean,default:()=>!1}},emits:["close","success"],setup(l,{emit:b}){const y=b,s=W().dispatch,a=k({file:null});k([]);const e=k(null),i=async()=>{let u=new FormData;u.append("file",a.value.file);const d=await s("REQUEST_UPLOAD_TRANSACTIONS",u);console.log(d),d.status===201&&(s("SHOW_NOTIF_ALERT",{message:`${d.data.sucessfulImport.length} successful imports. ${d.data.failedImport.length} failed.`}),y("success"))},m=()=>{a.value.file=null,document.getElementById("file").value=""};return(u,d)=>(h(),A(o(Y),{show:l.show,title:"Import Transactions","wrapper-class":"lg:max-w-[600px]",onClose:d[2]||(d[2]=()=>{m(),y("close")})},{"body-footer":w(()=>[f("div",Tt,[f("div",_t,[f("input",{id:"file",ref_key:"file",ref:e,type:"file",class:"h-full w-full absolute top-0 left-0 opacity-0 text-[0] cursor-pointer",onInput:d[0]||(d[0]=r=>{a.value.file=r.target.files[0]})},null,544),a.value.file?(h(),$("div",At,[f("p",null,[Et,O(" "+E(a.value.file.name),1)])])):(h(),$("div",Mt,[c(o(B),{name:"ArrowUpTrayIconOutline",class:"w-8 mb-3"}),It]))])]),f("div",Rt,[c(o(P),{variant:"blank",onClick:d[1]||(d[1]=r=>y("close"))},{default:w(()=>[O(" Cancel ")]),_:1}),c(o(P),{type:"button",variant:a.value.file?"primary":"disabled",disabled:!a.value.file,onClick:i},{default:w(()=>[O(" Upload ")]),_:1},8,["variant","disabled"])])]),_:1},8,["show"]))}},Vt={class:"container md:pt-2 lg:pt-5 md:px-2 lg:px-8 h-full"},Ot={class:"flex flex-col lg:flex-row-reverse gap-y-2 gap-x-4"},Nt={class:"flex-1 flex flex-col md:gap-y-2 shrink-0 lg:pt-[50px]"},Pt={class:"text-2xl font-medium"},Ut={class:"text-2xl font-medium"},jt={class:"lg:w-9/12 h-max"},Bt={class:"px-2 md:px-0 mb-3 flex flex-row items-center justify-between gap-y-2 gap-x-2"},Ft={class:"flex flex-row gap-y-2 gap-x-2 md:gap-x-4 md:items-center"},Lt={class:"flex md:items-center justify-end flex-1 gap-x-2"},Yt={__name:"Transactions",setup(l){const b=W(),y=b.dispatch,p=b.commit,s=R(()=>b.state.transactions.items),a=R(()=>b.state.transactions.filters),e=R(()=>b.state.transactions.summary),i=k(null),m=k([]),u=k(!1),d=k(!1),r=k(!1),t=k(!1),n=k(!1),x=k(!1);de(()=>{g(),y("REQUEST_GET_CATEGORY"),y("REQUEST_GET_ACCOUNTS")});const g=()=>{y("REQUEST_GET_TRANSACTIONS_SUMMARY"),y("REQUEST_GET_TRANSACTIONS")},C=D=>{p("UPDATE_TRANSACTIONS_STATE",{...a,filters:{start:D.start,end:D.end}}),g()},S=D=>{D==="delete"&&(t.value=!0)},U=async()=>{let D=await y("REQUEST_BULK_DELETE_TRANSACTION",{transactions:m.value});console.log(D),D.status===201&&(g(),t.value=!1)};return(D,v)=>(h(),$(Q,null,[f("section",Vt,[f("div",Ot,[f("div",Nt,[c(o(L),{class:"!py-2 md:!p-5"},{default:w(()=>[c(o(Z),{as:"h5",class:"text-slate-800 mb-1"},{default:w(()=>[O("Income")]),_:1}),f("p",Pt,E(o(z)(e.value.income)),1)]),_:1}),c(o(L),{class:"!py-2 md:!p-5"},{default:w(()=>[c(o(Z),{as:"h5",class:"text-slate-800 mb-1"},{default:w(()=>[O("Expenses")]),_:1}),f("p",Ut,E(o(z)(e.value.expenses)),1)]),_:1}),c(o(L),{class:"!py-2 md:!p-5"},{default:w(()=>[c(o(Z),{as:"h5",class:"text-slate-800 mb-1"},{default:w(()=>[O("Balance")]),_:1}),f("p",{class:j(["text-2xl font-medium",e.value.balance<0?"text-red-800":"text-green-800"])},E(o(z)(e.value.balance)),3)]),_:1})]),f("div",jt,[f("div",Bt,[f("div",Ft,[m.value.length?(h(),A(o(ct),{key:0,onAction:S})):N("",!0)]),f("div",Lt,[c(o(P),{variant:"blank",class:"!border !border-solid !border-slate-800",onClick:v[0]||(v[0]=T=>x.value=!0)},{default:w(()=>[c(o(B),{name:"ArrowUpTrayIconOutline",class:"w-5 h-5 text-slate-900"})]),_:1}),c(o(P),{variant:"blank",class:"!p-[6px] !border !border-solid !border-slate-800",onClick:v[1]||(v[1]=T=>n.value=!0)},{default:w(()=>[c(o(B),{name:"AdjustmentsHorizontalIconOutline",class:"w-6 h-6 text-slate-900"})]),_:1}),c(o(P),{class:"!p-2",onClick:v[2]||(v[2]=T=>u.value=!0)},{default:w(()=>[c(o(B),{name:"PlusIcon",class:"w-5 h-5"})]),_:1})])]),c(o($t),{transactions:s.value,onCheckboxChecked:v[3]||(v[3]=T=>m.value=T),onShow:v[4]||(v[4]=T=>{i.value=T}),onEdit:v[5]||(v[5]=T=>{i.value=T,d.value=!0}),onDelete:v[6]||(v[6]=T=>{i.value=T,r.value=!0})},null,8,["transactions"])])])]),c(o(ut),{show:n.value,onClose:v[7]||(v[7]=T=>n.value=!1),onDatesChanged:v[8]||(v[8]=T=>{C(T),n.value=!1})},null,8,["show"]),c(o(at),{show:u.value,onClose:v[9]||(v[9]=T=>u.value=!1),onSuccess:v[10]||(v[10]=()=>{g(),u.value=!1})},null,8,["show"]),d.value?(h(),A(o(st),{key:0,show:d.value,model:i.value,onClose:v[11]||(v[11]=T=>d.value=!1),onSuccess:v[12]||(v[12]=()=>{g(),d.value=!1})},null,8,["show","model"])):N("",!0),r.value?(h(),A(o(nt),{key:1,show:r.value,model:i.value,onClose:v[13]||(v[13]=T=>r.value=!1),onConfirm:U},null,8,["show","model"])):N("",!0),c(o(Dt),{show:x.value,onClose:v[14]||(v[14]=T=>x.value=!1),onSuccess:v[15]||(v[15]=()=>{g(),x.value=!1})},null,8,["show"]),c(o(fe),{show:t.value,message:`Are you sure you want to delete (${m.value.length}) transaction${m.value.length>1?"s":""}?`,onClose:v[16]||(v[16]=T=>t.value=!1),onConfirm:U},null,8,["show","message"])],64))}};export{Yt as default};
