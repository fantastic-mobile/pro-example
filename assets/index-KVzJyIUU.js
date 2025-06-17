
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as x}from"./index-BAKb5WLg.js";import{_ as $}from"./index.vue_vue_type_script_setup_true_lang-b72J4Aia.js";import{d as m,z as F,k as o,o as s,q as h,u as r,p,a as u,b as n,t as _,f as y,s as i,c as g,w as l}from"./index-BTfEXlhq.js";import"./index.vue_vue_type_script_setup_true_lang-C0ArQLu7.js";const w={key:0,class:"prefix"},T={class:"text"},k={key:1,class:"suffix"},d=m({name:"FmTrend",__name:"index",props:{value:{},type:{default:"up"},prefix:{default:""},suffix:{default:""},reverse:{type:Boolean,default:!1}},setup(c){const a=c,t=F(()=>{let e=a.type==="up";return a.reverse&&(e=!e),e});return(e,f)=>{const v=y;return s(),o("div",{class:h(["flex items-center transition",`${r(t)?"c-green":"c-red"}`])},[e.prefix?(s(),o("span",w,_(e.prefix),1)):p("",!0),u("span",T,_(e.value),1),e.suffix?(s(),o("span",k,_(e.suffix),1)):p("",!0),n(v,{name:"i-ep:caret-top",rotate:r(t)?0:180,class:"ml-1 transition"},null,8,["rotate"])],2)}}}),D={},B={class:"flex flex-col gap-2"};function C(c,a){const t=d;return s(),o("div",B,[n(t,{value:"12.3"}),n(t,{value:"12.3",type:"down"})])}const b=i(D,[["render",C]]),N=`<template>
  <div class="flex flex-col gap-2">
    <FmTrend value="12.3" />
    <FmTrend value="12.3" type="down" />
  </div>
</template>
`,R={},V={class:"flex flex-col gap-2"};function z(c,a){const t=d;return s(),o("div",V,[n(t,{value:"12.3",reverse:""}),n(t,{value:"12.3",type:"down",reverse:""})])}const P=i(R,[["render",z]]),U=`<template>
  <div class="flex flex-col gap-2">
    <FmTrend value="12.3" reverse />
    <FmTrend value="12.3" type="down" reverse />
  </div>
</template>
`,q={},E={class:"flex flex-col gap-2"};function I(c,a){const t=d;return s(),o("div",E,[n(t,{value:"12.3",prefix:"$"}),n(t,{value:"12.3",suffix:"%"})])}const L=i(q,[["render",I]]),S=`<template>
  <div class="flex flex-col gap-2">
    <FmTrend value="12.3" prefix="$" />
    <FmTrend value="12.3" suffix="%" />
  </div>
</template>
`,J=m({__name:"index",setup(c){return(a,t)=>{const e=$,f=x;return s(),g(f,{navbar:"","navbar-start-side":"back"},{default:l(()=>[u("div",null,[n(e,{code:r(N)},{default:l(()=>[n(b)]),_:1},8,["code"]),n(e,{title:"颜色反转",code:r(U)},{default:l(()=>[n(P)]),_:1},8,["code"]),n(e,{title:"前缀后缀",code:r(S)},{default:l(()=>[n(L)]),_:1},8,["code"])])]),_:1})}}});export{J as default};
