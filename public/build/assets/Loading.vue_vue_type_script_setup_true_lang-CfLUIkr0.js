import{s as o,o as n,d as a,i as t,S as i,t as r,g as c,R as l}from"./app-qiqL2HN5.js";const d=t("svg",{class:"loading-animation fill-cyan-500 w-14 h-14",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0","xml:space":"preserve"},[t("path",{d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"})],-1),x={key:0,class:"text-cyan-800 italic font-medium"},g=o({__name:"Loading",props:{placement:{type:String,default:"external"},showText:{type:Boolean,default:()=>!0},loadingText:{type:String,default:"loading"}},setup(e){return(s,m)=>(n(),a("div",{class:l(["z-50 flex h-full w-full items-center justify-center",{"fixed top-0 left-0 bg-[rgba(0,0,0,0.1)]":e.placement==="external"}])},[t("div",{class:l(["rounded-md px-6 py-3 text-center text-xs",{"bg-transparent":e.placement==="external","bg-white":e.placement==="internal"}])},[i(s.$slots,"icon",{},()=>[d]),e.showText?(n(),a("p",x,r(e.loadingText),1)):c("",!0)],2)],2))}});export{g as _};
