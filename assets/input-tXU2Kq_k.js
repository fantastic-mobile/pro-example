
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,lt as r,mt as i,rt as a,w as o,y as s}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{I as c,O as l}from"./components-DK30L-iF.js";import{t as u}from"./AppPageLayout-BwSv5Viu.js";var d=o({__name:`_demo1`,setup(e){let a=i(``);return(e,i)=>{let o=l;return n(),s(o,{modelValue:t(a),"onUpdate:modelValue":i[0]||(i[0]=e=>r(a)?a.value=e:null),placeholder:`请输入内容`},null,8,[`modelValue`])}}}),f=`<script setup lang="ts">
const value = ref('')
<\/script>

<template>
  <FmInput v-model="value" placeholder="请输入内容" />
</template>
`,p=o({__name:`index`,setup(r){return(r,i)=>{let o=c,l=u;return n(),s(l,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[e(o,{code:t(f)},{default:a(()=>[e(d)]),_:1},8,[`code`])]),_:1})}}});export{p as default};