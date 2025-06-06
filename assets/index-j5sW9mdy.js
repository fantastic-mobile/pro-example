
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as d}from"./index-d6ZB0Jya.js";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang-DMxm4nWt.js";import{d as o,r as f,c as m,o as r,b6 as v,u as p,i as b,w as t,a as s,b as l}from"./index-BLP5v8hh.js";import"./index.vue_vue_type_script_setup_true_lang-Bk9FuQCK.js";const x=o({__name:"_demo1",setup(c){const a=f(1);return(i,e)=>{const n=v;return r(),m(n,{modelValue:p(a),"onUpdate:modelValue":e[0]||(e[0]=_=>b(a)?a.value=_:null),list:[{label:"标签1",value:1},{label:"标签2",value:2},{label:"标签3",value:3}]},{1:t(()=>e[1]||(e[1]=[s("div",{class:"flex-center"}," 标签1 ",-1)])),2:t(()=>e[2]||(e[2]=[s("div",{class:"flex-center"}," 标签2 ",-1)])),3:t(()=>e[3]||(e[3]=[s("div",{class:"flex-center"}," 标签3 ",-1)])),_:1},8,["modelValue"])}}}),F=`<script setup lang="ts">
const tabs = ref(1)
<\/script>

<template>
  <FmTabs v-model="tabs" :list="[{ label: '标签1', value: 1 }, { label: '标签2', value: 2 }, { label: '标签3', value: 3 }]">
    <template #1>
      <div class="flex-center">
        标签1
      </div>
    </template>
    <template #2>
      <div class="flex-center">
        标签2
      </div>
    </template>
    <template #3>
      <div class="flex-center">
        标签3
      </div>
    </template>
  </FmTabs>
</template>
`,B=o({__name:"index",setup(c){return(a,i)=>{const e=u,n=d;return r(),m(n,{navbar:"","navbar-start-side":"back"},{default:t(()=>[l(e,{code:p(F)},{default:t(()=>[l(x)]),_:1},8,["code"])]),_:1})}}});export{B as default};
