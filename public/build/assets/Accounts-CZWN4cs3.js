import{o as p,e as $,w as C,h as i,f as s,u as x,c as g,r as w,l as h,d as y,i as A,g as E,F as S,j as T,$ as N}from"./app-qiqL2HN5.js";import{C as U}from"./Card-Bp_0ONhO.js";import{a as b}from"./TextInput.vue_vue_type_script_setup_true_lang-B-nQnCxH.js";import{_ as k}from"./Heading.vue_vue_type_script_setup_true_lang-BNFqA62x.js";import{_ as O}from"./Table.vue_vue_type_script_setup_true_lang-BC3cMhsI.js";import{a as B,_ as D}from"./AccountForm-C3yRH3WV.js";import{_ as j}from"./Modal.vue_vue_type_script_setup_true_lang-DJ0FJLZC.js";import{_ as M}from"./SelectInput.vue_vue_type_script_setup_true_lang-CK9XKdSJ.js";/* empty css            */import"./number-BqreZRFo.js";const R={__name:"UpdateAccountModal",props:{show:{type:Boolean,default:()=>!1},model:{type:Object,required:!0}},emits:["close","success"],setup(c,{emit:o}){const n=o;return(f,t)=>(p(),$(s(j),{show:c.show,title:"Edit Account","wrapper-class":"lg:max-w-[500px]",onClose:t[2]||(t[2]=l=>n("close"))},{"body-footer":C(()=>[i(s(B),{"api-route":"REQUEST_UPDATE_ACCOUNT",model:c.model,onClose:t[0]||(t[0]=l=>n("close")),onSuccess:t[1]||(t[1]=l=>n("success"))},null,8,["model"])]),_:1},8,["show"]))}},V={__name:"DeleteAccount",props:{show:{type:Boolean,default:()=>!1},model:{type:Object,required:!0}},emits:["close","confirm"],setup(c,{emit:o}){const n=c,f=o,l=x().dispatch,m=async()=>{let{status:r}=await l("REQUEST_DELETE_ACCOUNT",{id:n.model.id});r===200&&(l("SHOW_NOTIF_ALERT",{message:"Account deleted."}),f("confirm"))};return(r,a)=>(p(),$(s(M),{show:c.show,message:"Are you sure you want to delete this account?",onClose:a[0]||(a[0]=d=>f("close")),onConfirm:m},null,8,["show"]))}},F={class:"container md:py-2 lg:py-5 md:px-2 lg:px-8 grid md:grid-cols-2"},Q={class:"mb-3 flex items-center justify-between gap-x-2"},q={class:"flex items-start gap-x-2"},Y={__name:"Accounts",setup(c){const o=x(),n=o.dispatch,f=g(()=>o.state.accounts.headers),t=g(()=>o.state.accounts.items.map(_=>(_.showActions=!!_.user_id,_))),l=g(()=>o.state.accounts.pagination),m=w({}),r=w(!1),a=w(!1),d=w(!1);h(()=>{v()});const v=()=>{n("REQUEST_GET_ACCOUNTS")};return(_,e)=>(p(),y(S,null,[A("section",F,[i(s(U),{class:"!p-2 md:!p-4"},{default:C(()=>[A("div",Q,[i(s(k),{as:"h3"},{default:C(()=>[T("Accounts")]),_:1}),A("div",q,[i(s(b),{class:"!p-2",onClick:e[0]||(e[0]=u=>r.value=!0)},{default:C(()=>[i(s(N),{name:"PlusIcon",class:"w-5"})]),_:1})])]),i(s(O),{id:"account-table",class:"",headers:f.value,data:t.value,"show-checkbox":!1,"show-items-info":!1,pagination:l.value,onEdit:e[1]||(e[1]=u=>{m.value=u,a.value=!0}),onDelete:e[2]||(e[2]=u=>{m.value=u,d.value=!0})},null,8,["headers","data","pagination"])]),_:1})]),i(s(D),{show:r.value,onClose:e[3]||(e[3]=u=>r.value=!1),onSuccess:e[4]||(e[4]=()=>{v(),r.value=!1})},null,8,["show"]),a.value?(p(),$(s(R),{key:0,show:a.value,model:m.value,onClose:e[5]||(e[5]=u=>a.value=!1),onSuccess:e[6]||(e[6]=()=>{v(),a.value=!1})},null,8,["show","model"])):E("",!0),d.value?(p(),$(s(V),{key:1,show:d.value,model:m.value,onClose:e[7]||(e[7]=u=>d.value=!1),onConfirm:e[8]||(e[8]=()=>{v(),d.value=!1})},null,8,["show","model"])):E("",!0)],64))}};export{Y as default};
