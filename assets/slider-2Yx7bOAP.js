
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{m as e}from"./src-CTlveZFi.js";import{D as t,On as n,_ as r,k as i,mt as a,qt as o,un as s,v as c,vn as l}from"./runtime-core.esm-bundler-D7siT_TS.js";import{o as u}from"./index-CXygZjsd.js";import{t as d}from"./AppPageLayout-DpGpaj5G.js";var f=i({__name:`_demo1`,setup(e){let t=l([0]);return(e,r)=>{let i=u;return a(),c(i,{modelValue:n(t),"onUpdate:modelValue":r[0]||(r[0]=e=>s(t)?t.value=e:null)},null,8,[`modelValue`])}}}),p=`<script setup lang="ts">
const value = ref<number[]>([0])
<\/script>

<template>
  <FmSlider v-model="value" />
</template>
`,m=i({__name:`_demo2`,setup(e){let t=l([0]);return(e,r)=>{let i=u;return a(),c(i,{modelValue:n(t),"onUpdate:modelValue":r[0]||(r[0]=e=>s(t)?t.value=e:null),orientation:`vertical`,class:`data-[orientation=vertical]:h-50`},null,8,[`modelValue`])}}}),h=`<script setup lang="ts">
const value = ref<number[]>([0])
<\/script>

<template>
  <FmSlider v-model="value" orientation="vertical" class="data-[orientation=vertical]:h-50" />
</template>
`,g=i({__name:`index`,setup(i){return(i,s)=>{let l=e,u=d;return a(),c(u,{navbar:``,"navbar-start-side":`back`},{default:o(()=>[r(`div`,null,[t(l,{code:n(p)},{default:o(()=>[t(f)]),_:1},8,[`code`]),t(l,{code:n(h)},{default:o(()=>[t(m)]),_:1},8,[`code`])])]),_:1})}}});export{g as default};