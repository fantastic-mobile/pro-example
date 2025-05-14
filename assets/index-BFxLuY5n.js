
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as u}from"./index-DDuBEHMP.js";import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-CAJe_klc.js";import{d as c,r as d,k as f,o as m,b as t,i as l,u as s,af as w,c as V,w as i}from"./index-DfiWcGfx.js";import"./index.vue_vue_type_script_setup_true_lang-DEN0_UPU.js";const v={class:"flex gap-4"},h=c({__name:"_demo1",setup(r){const e=d(!1);return(_,n)=>{const o=w;return m(),f("div",v,[t(o,{modelValue:s(e),"onUpdate:modelValue":n[0]||(n[0]=a=>l(e)?e.value=a:null)},null,8,["modelValue"]),t(o,{modelValue:s(e),"onUpdate:modelValue":n[1]||(n[1]=a=>l(e)?e.value=a:null),"on-icon":"ri:sun-line","off-icon":"ri:moon-line"},null,8,["modelValue"])])}}}),x=`<script setup lang="ts">
const switchVal = ref(false)
<\/script>

<template>
  <div class="flex gap-4">
    <FmSwitch v-model="switchVal" />
    <FmSwitch v-model="switchVal" on-icon="ri:sun-line" off-icon="ri:moon-line" />
  </div>
</template>
`,B=c({__name:"index",setup(r){return(e,_)=>{const n=p,o=u;return m(),V(o,{navbar:"","navbar-start-side":"back"},{default:i(()=>[t(n,{code:s(x)},{default:i(()=>[t(h)]),_:1},8,["code"])]),_:1})}}});export{B as default};
