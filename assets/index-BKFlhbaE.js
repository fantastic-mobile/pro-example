
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as u}from"./index-CmISDTFT.js";import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-vDF_K-gu.js";import{_ as d}from"./index.vue_vue_type_script_setup_true_lang-B3ALHhXS.js";import{d as l,r as f,c as s,o as r,u as m,i as b,w as a,b as o}from"./index-CUJLi7no.js";import"./index.vue_vue_type_script_setup_true_lang-DvoaD5o-.js";import"./check-B24FnYeW.js";import"./useBodyScrollLock-BjcGmJCG.js";const v=l({__name:"_demo1",setup(_){const e=f("1");return(c,t)=>{const n=d;return r(),s(n,{modelValue:m(e),"onUpdate:modelValue":t[0]||(t[0]=p=>b(e)?e.value=p:null),options:[{label:"选项1",value:"1"},{label:"选项2",value:"2",disabled:!0},{label:"选项3",value:"3"}]},null,8,["modelValue"])}}}),x=`<script setup lang="ts">
const select = ref('1')
<\/script>

<template>
  <FmSelect
    v-model="select"
    :options="[
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2', disabled: true },
      { label: '选项3', value: '3' },
    ]"
  />
</template>
`,B=l({__name:"index",setup(_){return(e,c)=>{const t=i,n=u;return r(),s(n,{navbar:"","navbar-start-side":"back"},{default:a(()=>[o(t,{code:m(x)},{default:a(()=>[o(v)]),_:1},8,["code"])]),_:1})}}});export{B as default};
