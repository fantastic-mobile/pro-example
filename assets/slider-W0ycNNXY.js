
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{C as e,Ct as t,H as n,lt as r,mt as i,rt as a,v as o,w as s,y as c}from"./vue.runtime.esm-bundler-DMY3hWtO.js";import{P as l,p as u}from"./components-CBpXWGFQ.js";import{t as d}from"./AppPageLayout-S1V78StU.js";var f=s({__name:`_demo1`,setup(e){let a=i([0]);return(e,i)=>{let o=u;return n(),c(o,{modelValue:t(a),"onUpdate:modelValue":i[0]||(i[0]=e=>r(a)?a.value=e:null)},null,8,[`modelValue`])}}}),p=`<script setup lang="ts">
const value = ref<number[]>([0])
<\/script>

<template>
  <FmSlider v-model="value" />
</template>
`,m=s({__name:`_demo2`,setup(e){let a=i([0]);return(e,i)=>{let o=u;return n(),c(o,{modelValue:t(a),"onUpdate:modelValue":i[0]||(i[0]=e=>r(a)?a.value=e:null),orientation:`vertical`,class:`data-[orientation=vertical]:h-50`},null,8,[`modelValue`])}}}),h=`<script setup lang="ts">
const value = ref<number[]>([0])
<\/script>

<template>
  <FmSlider v-model="value" orientation="vertical" class="data-[orientation=vertical]:h-50" />
</template>
`,g=s({__name:`index`,setup(r){return(r,i)=>{let s=l,u=d;return n(),c(u,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[o(`div`,null,[e(s,{code:t(p)},{default:a(()=>[e(f)]),_:1},8,[`code`]),e(s,{code:t(h)},{default:a(()=>[e(m)]),_:1},8,[`code`])])]),_:1})}}});export{g as default};