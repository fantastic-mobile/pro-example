
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{j as e,m as t,ut as n}from"./src-CTlveZFi.js";import{D as r,E as i,On as a,b as o,bt as s,k as c,mt as l,o as u,qt as d,v as f}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as p}from"./AppPageLayout-DpGpaj5G.js";var m={},h={class:`flex flex-col gap-4`};function g(t,n){let a=e;return l(),o(`div`,h,[(l(),o(u,null,s(3,e=>r(a,{key:e,title:`卡片标题`,description:`卡片描述`,class:`w-full`},{footer:d(()=>[...n[0]||(n[0]=[i(` 卡片底部 `,-1)])]),default:d(()=>[n[1]||(n[1]=i(` 卡片内容 `,-1))]),_:1})),64))])}var _=n(m,[[`render`,g]]),v=`<template>
  <div class="flex flex-col gap-4">
    <FmCard v-for="i in 3" :key="i" title="卡片标题" description="卡片描述" class="w-full">
      卡片内容
      <template #footer>
        卡片底部
      </template>
    </FmCard>
  </div>
</template>
`,y=c({__name:`index`,setup(e){return(e,n)=>{let i=t,o=p;return l(),f(o,{navbar:``,"navbar-start-side":`back`},{default:d(()=>[r(i,{code:a(v)},{default:d(()=>[r(_)]),_:1},8,[`code`])]),_:1})}}});export{y as default};