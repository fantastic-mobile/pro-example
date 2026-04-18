
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,P as r,S as i,b as a,f as o,mt as s,rt as c,v as l,w as u,x as d,y as f}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{B as p,G as m,I as h}from"./components-DK30L-iF.js";import{t as g}from"./AppPageLayout-BwSv5Viu.js";var _=u({__name:`_demo1`,setup(u){let h=s(!0);function g(){h.value=!1,r(()=>{h.value=!0})}return(r,s)=>{let u=m,_=p;return n(),d(o,null,[t(h)?(n(),f(u,{key:0,class:`p-4`},{default:c(()=>[...s[0]||(s[0]=[l(`h2`,{class:`text-6xl tracking-tighter font-bold`},` 你好呀 👋 `,-1),l(`div`,{class:`text-2xl tracking-tighter mt-4 text-pretty`},` 最近怎么样？ `,-1)])]),_:1})):a(``,!0),e(_,{onClick:g},{default:c(()=>[...s[1]||(s[1]=[i(` 重新执行 `,-1)])]),_:1})],64)}}}),v=`<script setup lang="ts">
const show = ref(true)

function handleReset() {
  show.value = false
  nextTick(() => {
    show.value = true
  })
}
<\/script>

<template>
  <FmBlurReveal
    v-if="show"
    class="p-4"
  >
    <h2 class="text-6xl tracking-tighter font-bold">
      你好呀 👋
    </h2>
    <div class="text-2xl tracking-tighter mt-4 text-pretty">
      最近怎么样？
    </div>
  </FmBlurReveal>
  <FmButton @click="handleReset">
    重新执行
  </FmButton>
</template>
`,y=u({__name:`_demo2`,setup(u){let h=s(!0);function g(){h.value=!1,r(()=>{h.value=!0})}return(r,s)=>{let u=m,_=p;return n(),d(o,null,[t(h)?(n(),f(u,{key:0,delay:.2,duration:.75,blur:`10px`,"y-offset":100,class:`p-4`},{default:c(()=>[...s[0]||(s[0]=[l(`h2`,{class:`text-6xl tracking-tighter font-bold`},` 你好呀 👋 `,-1),l(`div`,{class:`text-2xl tracking-tighter mt-4 text-pretty`},` 最近怎么样？ `,-1)])]),_:1})):a(``,!0),e(_,{onClick:g},{default:c(()=>[...s[1]||(s[1]=[i(` 重新执行 `,-1)])]),_:1})],64)}}}),b=`<script setup lang="ts">
const show = ref(true)

function handleReset() {
  show.value = false
  nextTick(() => {
    show.value = true
  })
}
<\/script>

<template>
  <FmBlurReveal
    v-if="show"
    :delay="0.2"
    :duration="0.75"
    blur="10px"
    :y-offset="100"
    class="p-4"
  >
    <h2 class="text-6xl tracking-tighter font-bold">
      你好呀 👋
    </h2>
    <div class="text-2xl tracking-tighter mt-4 text-pretty">
      最近怎么样？
    </div>
  </FmBlurReveal>
  <FmButton @click="handleReset">
    重新执行
  </FmButton>
</template>
`,x=u({__name:`index`,setup(r){return(r,i)=>{let a=h,o=g;return n(),f(o,{navbar:``,"navbar-start-side":`back`},{default:c(()=>[l(`div`,null,[e(a,{code:t(v)},{default:c(()=>[e(_)]),_:1},8,[`code`]),e(a,{title:`延迟、持续时间、模糊、偏移量`,code:t(b)},{default:c(()=>[e(y)]),_:1},8,[`code`])])]),_:1})}}});export{x as default};