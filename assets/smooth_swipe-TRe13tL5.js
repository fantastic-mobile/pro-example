
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{C as e,Ct as t,H as n,S as r,W as i,f as a,kt as o,mt as s,rt as c,v as l,w as u,x as d,y as f}from"./vue.runtime.esm-bundler-DMY3hWtO.js";import{B as p,P as m,R as h,f as g}from"./components-CBpXWGFQ.js";import{t as _}from"./AppPageLayout-S1V78StU.js";var v=u({__name:`_demo1`,setup(u){let f=s(0);return(s,u)=>{let m=h,_=p,v=g;return n(),d(a,null,[e(_,null,{default:c(()=>[(n(),d(a,null,i(4,n=>e(m,{key:n,variant:t(f)===n-1?`default`:`outline`,onClick:e=>f.value=n-1},{default:c(()=>[r(o(n),1)]),_:2},1032,[`variant`,`onClick`])),64))]),_:1}),e(v,{"active-index":t(f)},{default:c(()=>[...u[0]||(u[0]=[l(`div`,{class:`text-20 flex-center h-50`},` 1 `,-1),l(`div`,{class:`text-20 flex-center h-75`},` 2 `,-1),l(`div`,{class:`text-20 flex-center h-100`},` 3 `,-1),l(`div`,{class:`text-20 flex-center h-25`},` 4 `,-1)])]),_:1},8,[`active-index`])],64)}}}),y=`<script setup lang="ts">
const activeIndex = ref<number>(0)
<\/script>

<template>
  <FmButtonGroup>
    <FmButton v-for="index in 4" :key="index" :variant="activeIndex === index - 1 ? 'default' : 'outline'" @click="activeIndex = index - 1">
      {{ index }}
    </FmButton>
  </FmButtonGroup>
  <FmSmoothSwipe :active-index>
    <div class="text-20 flex-center h-50">
      1
    </div>
    <div class="text-20 flex-center h-75">
      2
    </div>
    <div class="text-20 flex-center h-100">
      3
    </div>
    <div class="text-20 flex-center h-25">
      4
    </div>
  </FmSmoothSwipe>
</template>
`,b=u({__name:`index`,setup(r){return(r,i)=>{let a=m,o=_;return n(),f(o,{navbar:``,"navbar-start-side":`back`},{default:c(()=>[e(a,{code:t(y)},{default:c(()=>[e(v)]),_:1},8,[`code`])]),_:1})}}});export{b as default};