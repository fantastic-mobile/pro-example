
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,m as t}from"./src-CTlveZFi.js";import{D as n,E as r,Lt as i,On as a,Ut as o,Zn as s,_ as c,b as l,bt as u,ct as d,k as f,mt as p,o as m,qt as h,tt as g,v as _,vn as v,wt as y,y as b}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as x}from"./motion-Du6Fr-Ah.js";import{t as S}from"./AppPageLayout-DpGpaj5G.js";var C=f({name:`BuiltInBlurReveal`,__name:`index`,props:{duration:{default:1},delay:{default:1},blur:{default:`20px`},yOffset:{default:20},class:{type:[Boolean,null,String,Object,Array]}},setup(e){let t=e,n=i(),r=v([]);d(()=>{o(()=>{r.value=n.default?n.default():[]})});function c(){return{opacity:0,filter:`blur(${t.blur})`,y:t.yOffset}}function f(){return{opacity:1,filter:`blur(0px)`,y:0}}return(e,n)=>(p(),l(`div`,{class:s(t.class)},[(p(!0),l(m,null,u(r.value,(e,n)=>(p(),_(a(x),{key:n,as:`div`,initial:c(),"while-in-view":f(),transition:{duration:t.duration,ease:`easeInOut`,delay:t.delay*Number(n)}},{default:h(()=>[(p(),_(y(e)))]),_:2},1032,[`initial`,`while-in-view`,`transition`]))),128))],2))}}),w=f({__name:`_demo1`,setup(t){let i=v(!0);function o(){i.value=!1,g(()=>{i.value=!0})}return(t,s)=>{let u=C,d=e;return p(),l(m,null,[a(i)?(p(),_(u,{key:0,class:`p-4`},{default:h(()=>[...s[0]||(s[0]=[c(`h2`,{class:`text-6xl tracking-tighter font-bold`},` 你好呀 👋 `,-1),c(`div`,{class:`text-2xl tracking-tighter mt-4 text-pretty`},` 最近怎么样？ `,-1)])]),_:1})):b(``,!0),n(d,{onClick:o},{default:h(()=>[...s[1]||(s[1]=[r(` 重新执行 `,-1)])]),_:1})],64)}}}),T=`<script setup lang="ts">
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
`,E=f({__name:`_demo2`,setup(t){let i=v(!0);function o(){i.value=!1,g(()=>{i.value=!0})}return(t,s)=>{let u=C,d=e;return p(),l(m,null,[a(i)?(p(),_(u,{key:0,delay:.2,duration:.75,blur:`10px`,"y-offset":100,class:`p-4`},{default:h(()=>[...s[0]||(s[0]=[c(`h2`,{class:`text-6xl tracking-tighter font-bold`},` 你好呀 👋 `,-1),c(`div`,{class:`text-2xl tracking-tighter mt-4 text-pretty`},` 最近怎么样？ `,-1)])]),_:1})):b(``,!0),n(d,{onClick:o},{default:h(()=>[...s[1]||(s[1]=[r(` 重新执行 `,-1)])]),_:1})],64)}}}),D=`<script setup lang="ts">
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
`,O=f({__name:`index`,setup(e){return(e,r)=>{let i=t,o=S;return p(),_(o,{navbar:``,"navbar-start-side":`back`},{default:h(()=>[c(`div`,null,[n(i,{code:a(T)},{default:h(()=>[n(w)]),_:1},8,[`code`]),n(i,{title:`延迟、持续时间、模糊、偏移量`,code:a(D)},{default:h(()=>[n(E)]),_:1},8,[`code`])])]),_:1})}}});export{O as default};