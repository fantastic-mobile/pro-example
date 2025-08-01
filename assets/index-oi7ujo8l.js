
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as l}from"./index-CDvm7Wea.js";import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-Jnxs0B3b.js";import{_ as f}from"./index.vue_vue_type_script_setup_true_lang-DP3AXlvz.js";import{s as d,k as r,o,F as p,n as u,b as a,w as t,e as c,d as x,c as k,u as v}from"./index-_PLUdafA.js";import"./index.vue_vue_type_script_setup_true_lang-DiSEdd4T.js";const F={},w={class:"flex flex-col gap-4"};function C(_,e){const s=f;return o(),r("div",w,[(o(),r(p,null,u(3,n=>a(s,{key:n,title:"卡片标题",description:"卡片描述",class:"w-full"},{footer:t(()=>e[0]||(e[0]=[c(" 卡片底部 ",-1)])),default:t(()=>[e[1]||(e[1]=c(" 卡片内容 ",-1))]),_:2,__:[1]},1024)),64))])}const g=d(F,[["render",C]]),b=`<template>
  <div class="flex flex-col gap-4">
    <FmCard v-for="i in 3" :key="i" title="卡片标题" description="卡片描述" class="w-full">
      卡片内容
      <template #footer>
        卡片底部
      </template>
    </FmCard>
  </div>
</template>
`,N=x({__name:"index",setup(_){return(e,s)=>{const n=i,m=l;return o(),k(m,{navbar:"","navbar-start-side":"back"},{default:t(()=>[a(n,{code:v(b)},{default:t(()=>[a(g)]),_:1},8,["code"])]),_:1})}}});export{N as default};
