
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,Ot as r,S as i,lt as a,mt as o,rt as s,w as c,x as l,y as u}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{I as d,R as f}from"./components-DK30L-iF.js";import{t as p}from"./AppPageLayout-BwSv5Viu.js";var m={class:`flex gap-4`},h=c({__name:`_demo1`,setup(c){let u=o(!1);return(o,c)=>{let d=f;return n(),l(`div`,m,[e(d,{modelValue:t(u),"onUpdate:modelValue":c[0]||(c[0]=e=>a(u)?u.value=e:null)},{default:s(()=>[...c[1]||(c[1]=[i(` 复选框 `,-1)])]),_:1},8,[`modelValue`]),i(` `+r(t(u)),1)])}}}),g=`<script setup lang="ts">
const checked = ref(false)
<\/script>

<template>
  <div class="flex gap-4">
    <FmCheckbox v-model="checked">
      复选框
    </FmCheckbox>
    {{ checked }}
  </div>
</template>
`,_=c({__name:`index`,setup(r){return(r,i)=>{let a=d,o=p;return n(),u(o,{navbar:``,"navbar-start-side":`back`},{default:s(()=>[e(a,{code:t(g)},{default:s(()=>[e(h)]),_:1},8,[`code`])]),_:1})}}});export{_ as default};