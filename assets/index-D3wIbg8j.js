
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as f}from"./index--3D-Wt3r.js";import{_ as v}from"./index.vue_vue_type_script_setup_true_lang-AumOUN71.js";import{d as r,r as i,c,o as m,aU as d,u as o,i as p,w as s,a as V,b as a}from"./index-U1W1hkh6.js";import"./index.vue_vue_type_script_setup_true_lang-DppWa4d-.js";const b=r({__name:"_demo1",setup(_){const e=i([0]);return(u,n)=>{const t=d;return m(),c(t,{modelValue:o(e),"onUpdate:modelValue":n[0]||(n[0]=l=>p(e)?e.value=l:null)},null,8,["modelValue"])}}}),x=`<script setup lang="ts">
const value = ref<number[]>([0])
<\/script>

<template>
  <FmSlider v-model="value" />
</template>
`,F=r({__name:"_demo2",setup(_){const e=i([0]);return(u,n)=>{const t=d;return m(),c(t,{modelValue:o(e),"onUpdate:modelValue":n[0]||(n[0]=l=>p(e)?e.value=l:null),orientation:"vertical",class:"data-[orientation=vertical]:h-50"},null,8,["modelValue"])}}}),w=`<script setup lang="ts">
const value = ref<number[]>([0])
<\/script>

<template>
  <FmSlider v-model="value" orientation="vertical" class="data-[orientation=vertical]:h-50" />
</template>
`,B=r({__name:"index",setup(_){return(e,u)=>{const n=v,t=f;return m(),c(t,{navbar:"","navbar-start-side":"back"},{default:s(()=>[V("div",null,[a(n,{code:o(x)},{default:s(()=>[a(b)]),_:1},8,["code"]),a(n,{code:o(w)},{default:s(()=>[a(F)]),_:1},8,["code"])])]),_:1})}}});export{B as default};
