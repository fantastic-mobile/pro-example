
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,i as t,m as n}from"./src-CTlveZFi.js";import{D as r,E as i,On as a,b as o,k as s,mt as c,o as l,qt as u,un as d,v as f,vn as p}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as m}from"./AppPageLayout-DpGpaj5G.js";var h=s({__name:`_demo1`,setup(n){let s=p(!1);return(n,f)=>{let p=e,m=t;return c(),o(l,null,[r(p,{onClick:f[0]||(f[0]=e=>s.value=!0)},{default:u(()=>[...f[2]||(f[2]=[i(` 打开 `,-1)])]),_:1}),r(m,{modelValue:a(s),"onUpdate:modelValue":f[1]||(f[1]=e=>d(s)?s.value=e:null),title:`标题`},{default:u(()=>[...f[3]||(f[3]=[i(` 这里是弹簧抽屉内容 `,-1)])]),_:1},8,[`modelValue`])],64)}}}),g=`<script setup lang="ts">
const drawer = ref(false)
<\/script>

<template>
  <FmButton @click="drawer = true">
    打开
  </FmButton>
  <FmSpringDrawer v-model="drawer" title="标题">
    这里是弹簧抽屉内容
  </FmSpringDrawer>
</template>
`,_=s({__name:`index`,setup(e){return(e,t)=>{let i=n,o=m;return c(),f(o,{navbar:``,"navbar-start-side":`back`},{default:u(()=>[r(i,{code:a(g)},{default:u(()=>[r(h)]),_:1},8,[`code`])]),_:1})}}});export{_ as default};