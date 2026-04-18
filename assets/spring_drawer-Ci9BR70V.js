
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,S as r,f as i,lt as a,mt as o,rt as s,w as c,x as l,y as u}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{B as d,I as f,d as p}from"./components-DK30L-iF.js";import{t as m}from"./AppPageLayout-BwSv5Viu.js";var h=c({__name:`_demo1`,setup(c){let u=o(!1);return(o,c)=>{let f=d,m=p;return n(),l(i,null,[e(f,{onClick:c[0]||(c[0]=e=>u.value=!0)},{default:s(()=>[...c[2]||(c[2]=[r(` 打开 `,-1)])]),_:1}),e(m,{modelValue:t(u),"onUpdate:modelValue":c[1]||(c[1]=e=>a(u)?u.value=e:null),title:`标题`},{default:s(()=>[...c[3]||(c[3]=[r(` 这里是弹簧抽屉内容 `,-1)])]),_:1},8,[`modelValue`])],64)}}}),g=`<script setup lang="ts">
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
`,_=c({__name:`index`,setup(r){return(r,i)=>{let a=f,o=m;return n(),u(o,{navbar:``,"navbar-start-side":`back`},{default:s(()=>[e(a,{code:t(g)},{default:s(()=>[e(h)]),_:1},8,[`code`])]),_:1})}}});export{_ as default};