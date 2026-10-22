
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,S as t,m as n}from"./src-CTlveZFi.js";import{D as r,On as i,_ as a,b as o,bt as s,k as c,mt as l,nr as u,o as d,qt as f,un as p,v as m,vn as h}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as g}from"./AppPageLayout-DpGpaj5G.js";var _={class:`flex-col-start gap-4`},v={class:`flex-col-start gap-4`},y={class:`flex-center-start gap-4`},b={class:`flex-center-start gap-4`},x={class:`flex-center-start`},S=c({__name:`_demo1`,setup(n){let c=h(!0),m=h(!1);return(n,h)=>{let g=t,S=e;return l(),o(`div`,_,[a(`div`,v,[a(`div`,y,[h[2]||(h[2]=a(`div`,{class:`text-sm`},` 显示滚动条 `,-1)),r(g,{modelValue:i(c),"onUpdate:modelValue":h[0]||(h[0]=e=>p(c)?c.value=e:null)},null,8,[`modelValue`])]),a(`div`,b,[h[3]||(h[3]=a(`div`,{class:`text-sm`},` 显示遮罩 `,-1)),r(g,{modelValue:i(m),"onUpdate:modelValue":h[1]||(h[1]=e=>p(m)?m.value=e:null)},null,8,[`modelValue`])])]),r(S,{scrollbar:i(c),mask:i(m),class:`border rounded-md h-72 w-full`},{default:f(()=>[(l(),o(d,null,s(20,e=>a(`div`,{key:e,class:`text-sm p-4`},u(e),1)),64))]),_:1},8,[`scrollbar`,`mask`]),r(S,{horizontal:``,scrollbar:i(c),mask:i(m),class:`border rounded-md w-full`},{default:f(()=>[a(`div`,x,[(l(),o(d,null,s(20,e=>a(`div`,{key:e,class:`text-sm flex-center h-16 w-16`},u(e),1)),64))])]),_:1},8,[`scrollbar`,`mask`])])}}}),C=`<script setup lang="ts">
const scrollbar = ref(true)
const mask = ref(false)
<\/script>

<template>
  <div class="flex-col-start gap-4">
    <div class="flex-col-start gap-4">
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示滚动条
        </div>
        <FmSwitch v-model="scrollbar" />
      </div>
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示遮罩
        </div>
        <FmSwitch v-model="mask" />
      </div>
    </div>
    <FmScrollArea :scrollbar :mask class="border rounded-md h-72 w-full">
      <div v-for="tag in 20" :key="tag" class="text-sm p-4">
        {{ tag }}
      </div>
    </FmScrollArea>
    <FmScrollArea horizontal :scrollbar :mask class="border rounded-md w-full">
      <div class="flex-center-start">
        <div v-for="tag in 20" :key="tag" class="text-sm flex-center h-16 w-16">
          {{ tag }}
        </div>
      </div>
    </FmScrollArea>
  </div>
</template>
`,w=c({__name:`index`,setup(e){return(e,t)=>{let a=n,o=g;return l(),m(o,{navbar:``,"navbar-start-side":`back`},{default:f(()=>[r(a,{code:i(C)},{default:f(()=>[r(S)]),_:1},8,[`code`])]),_:1})}}});export{w as default};