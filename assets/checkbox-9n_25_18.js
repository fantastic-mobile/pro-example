
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{C as e,Ct as t,H as n,S as r,kt as i,lt as a,mt as o,rt as s,w as c,x as l,y as u}from"./vue.runtime.esm-bundler-DMY3hWtO.js";import{I as d,P as f}from"./components-CBpXWGFQ.js";import{t as p}from"./AppPageLayout-S1V78StU.js";var m={class:`flex gap-4`},h=c({__name:`_demo1`,setup(c){let u=o(!1);return(o,c)=>{let f=d;return n(),l(`div`,m,[e(f,{modelValue:t(u),"onUpdate:modelValue":c[0]||(c[0]=e=>a(u)?u.value=e:null)},{default:s(()=>[...c[1]||(c[1]=[r(` 复选框 `,-1)])]),_:1},8,[`modelValue`]),r(` `+i(t(u)),1)])}}}),g=`<script setup lang="ts">
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
`,_=c({__name:`index`,setup(r){return(r,i)=>{let a=f,o=p;return n(),u(o,{navbar:``,"navbar-start-side":`back`},{default:s(()=>[e(a,{code:t(g)},{default:s(()=>[e(h)]),_:1},8,[`code`])]),_:1})}}});export{_ as default};