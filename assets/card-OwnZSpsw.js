
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,S as r,W as i,f as a,rt as o,w as s,x as c,y as l}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{H as u,L as d,P as f}from"./components-BMqlqruM.js";import{t as p}from"./AppPageLayout-C9-qV5nV.js";var m={},h={class:`flex flex-col gap-4`};function g(t,s){let l=d;return n(),c(`div`,h,[(n(),c(a,null,i(3,t=>e(l,{key:t,title:`卡片标题`,description:`卡片描述`,class:`w-full`},{footer:o(()=>[...s[0]||(s[0]=[r(` 卡片底部 `,-1)])]),default:o(()=>[s[1]||(s[1]=r(` 卡片内容 `,-1))]),_:1})),64))])}var _=u(m,[[`render`,g]]),v=`<template>
  <div class="flex flex-col gap-4">
    <FmCard v-for="i in 3" :key="i" title="卡片标题" description="卡片描述" class="w-full">
      卡片内容
      <template #footer>
        卡片底部
      </template>
    </FmCard>
  </div>
</template>
`,y=s({__name:`index`,setup(r){return(r,i)=>{let a=f,s=p;return n(),l(s,{navbar:``,"navbar-start-side":`back`},{default:o(()=>[e(a,{code:t(v)},{default:o(()=>[e(_)]),_:1},8,[`code`])]),_:1})}}});export{y as default};