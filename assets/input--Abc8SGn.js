
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,lt as r,mt as i,rt as a,w as o,y as s}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{E as c,P as l}from"./components-BMqlqruM.js";import{t as u}from"./AppPageLayout-C9-qV5nV.js";var d=o({__name:`_demo1`,setup(e){let a=i(``);return(e,i)=>{let o=c;return n(),s(o,{modelValue:t(a),"onUpdate:modelValue":i[0]||(i[0]=e=>r(a)?a.value=e:null),placeholder:`请输入内容`},null,8,[`modelValue`])}}}),f=`<script setup lang="ts">
const value = ref('')
<\/script>

<template>
  <FmInput v-model="value" placeholder="请输入内容" />
</template>
`,p=o({__name:`index`,setup(r){return(r,i)=>{let o=l,c=u;return n(),s(c,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[e(o,{code:t(f)},{default:a(()=>[e(d)]),_:1},8,[`code`])]),_:1})}}});export{p as default};