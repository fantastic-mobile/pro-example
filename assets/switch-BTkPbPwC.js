
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,lt as r,mt as i,rt as a,w as o,x as s,y as c}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{P as l,c as u}from"./components-BMqlqruM.js";import{t as d}from"./AppPageLayout-C9-qV5nV.js";var f={class:`flex gap-4`},p=o({__name:`_demo1`,setup(a){let o=i(!1);return(i,a)=>{let c=u;return n(),s(`div`,f,[e(c,{modelValue:t(o),"onUpdate:modelValue":a[0]||(a[0]=e=>r(o)?o.value=e:null)},null,8,[`modelValue`]),e(c,{modelValue:t(o),"onUpdate:modelValue":a[1]||(a[1]=e=>r(o)?o.value=e:null),"on-icon":`ri:sun-line`,"off-icon":`ri:moon-line`},null,8,[`modelValue`])])}}}),m=`<script setup lang="ts">
const switchVal = ref(false)
<\/script>

<template>
  <div class="flex gap-4">
    <FmSwitch v-model="switchVal" />
    <FmSwitch v-model="switchVal" on-icon="ri:sun-line" off-icon="ri:moon-line" />
  </div>
</template>
`,h=o({__name:`index`,setup(r){return(r,i)=>{let o=l,s=d;return n(),c(s,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[e(o,{code:t(m)},{default:a(()=>[e(p)]),_:1},8,[`code`])]),_:1})}}});export{h as default};