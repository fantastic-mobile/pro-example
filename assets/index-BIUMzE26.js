
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as y}from"./index-DDuBEHMP.js";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-CAJe_klc.js";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-BCaunlwp.js";import{d as u,z as h,c as s,o as i,w as r,a as l,k as f,p as d,e as w,t as m,u as o,f as C,q as v,L as F,s as k,b as n}from"./index-DfiWcGfx.js";import"./index.vue_vue_type_script_setup_true_lang-DEN0_UPU.js";const D={class:"flex flex-row items-center justify-between gap-y-1.5 space-y-0"},$={class:"flex-center-start gap-x-1 text-sm font-medium tracking-tight"},z={class:"flex-center-start gap-x-1 text-2xl font-bold"},B={key:0,class:"text-sm text-gray-500"},N=u({name:"FmDigitalCard",__name:"index",props:{title:{},icon:{},digital:{},description:{},trend:{},class:{}},setup(c){const a=c,t=h(()=>{switch(a.trend){case"up":return"i-material-symbols:trending-up";case"stable":return"i-material-symbols:trending-flat";case"down":return"i-material-symbols:trending-down";default:return""}});return(e,p)=>{const _=C,g=b;return i(),s(g,{class:v(o(F)("w-full",a.class)),"header-class":"pb-2","footer-class":"flex flex-col items-start gap-y-1"},{header:r(()=>[l("div",D,[l("h3",$,m(e.title),1),e.icon?(i(),s(_,{key:0,name:e.icon,class:"text-muted-foreground"},null,8,["name"])):d("",!0)])]),footer:r(()=>[l("div",z,[w(m(e.digital)+" ",1),o(t)?(i(),s(_,{key:0,name:o(t)},null,8,["name"])):d("",!0)]),e.description?(i(),f("p",B,m(e.description),1)):d("",!0)]),_:1},8,["class"])}}}),V={},I={class:"flex flex-col gap-4"};function L(c,a){const t=N;return i(),f("div",I,[n(t,{title:"总收入",icon:"i-carbon:currency-yen",digital:"￥45,231.89",description:"较上周上升19%",trend:"up"}),n(t,{title:"订阅数",icon:"i-mynaui:users",digital:"+50",description:"较上周下降3%",trend:"down"}),n(t,{title:"销售额",icon:"i-bytesize:creditcard",digital:"+12,234",description:"较上周上升55%",trend:"stable"}),n(t,{title:"活跃用户","title-tips":"仅统计近一小时的活跃用户数量",icon:"i-carbon:activity",digital:"+573",description:"较近一小时上升10%"})])}const P=k(V,[["render",L]]),j=`<template>
  <div class="flex flex-col gap-4">
    <FmDigitalCard title="总收入" icon="i-carbon:currency-yen" digital="￥45,231.89" description="较上周上升19%" trend="up" />
    <FmDigitalCard title="订阅数" icon="i-mynaui:users" digital="+50" description="较上周下降3%" trend="down" />
    <FmDigitalCard title="销售额" icon="i-bytesize:creditcard" digital="+12,234" description="较上周上升55%" trend="stable" />
    <FmDigitalCard title="活跃用户" title-tips="仅统计近一小时的活跃用户数量" icon="i-carbon:activity" digital="+573" description="较近一小时上升10%" />
  </div>
</template>
`,A=u({__name:"index",setup(c){return(a,t)=>{const e=x,p=y;return i(),s(p,{navbar:"","navbar-start-side":"back"},{default:r(()=>[n(e,{code:o(j)},{default:r(()=>[n(P)]),_:1},8,["code"])]),_:1})}}});export{A as default};
