
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{S as e,m as t}from"./src-CTlveZFi.js";import{D as n,On as r,b as i,k as a,mt as o,qt as s,un as c,v as l,vn as u}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as d}from"./AppPageLayout-DpGpaj5G.js";var f={class:`flex gap-4`},p=a({__name:`_demo1`,setup(t){let a=u(!1);return(t,s)=>{let l=e;return o(),i(`div`,f,[n(l,{modelValue:r(a),"onUpdate:modelValue":s[0]||(s[0]=e=>c(a)?a.value=e:null)},null,8,[`modelValue`]),n(l,{modelValue:r(a),"onUpdate:modelValue":s[1]||(s[1]=e=>c(a)?a.value=e:null),"on-icon":`ri:sun-line`,"off-icon":`ri:moon-line`},null,8,[`modelValue`])])}}}),m=`<script setup lang="ts">
const switchVal = ref(false)
<\/script>

<template>
  <div class="flex gap-4">
    <FmSwitch v-model="switchVal" />
    <FmSwitch v-model="switchVal" on-icon="ri:sun-line" off-icon="ri:moon-line" />
  </div>
</template>
`,h=a({__name:`index`,setup(e){return(e,i)=>{let a=t,c=d;return o(),l(c,{navbar:``,"navbar-start-side":`back`},{default:s(()=>[n(a,{code:r(m)},{default:s(()=>[n(p)]),_:1},8,[`code`])]),_:1})}}});export{h as default};