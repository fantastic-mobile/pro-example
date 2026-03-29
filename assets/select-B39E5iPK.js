
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{C as e,Ct as t,H as n,lt as r,mt as i,rt as a,w as o,y as s}from"./vue.runtime.esm-bundler-DMY3hWtO.js";import{P as c,m as l}from"./components-CBpXWGFQ.js";import{t as u}from"./AppPageLayout-S1V78StU.js";var d=o({__name:`_demo1`,setup(e){let a=i(`1`);return(e,i)=>{let o=l;return n(),s(o,{modelValue:t(a),"onUpdate:modelValue":i[0]||(i[0]=e=>r(a)?a.value=e:null),options:[{label:`选项1`,value:`1`},{label:`选项2`,value:`2`,disabled:!0},{label:`选项3`,value:`3`}]},null,8,[`modelValue`])}}}),f=`<script setup lang="ts">
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
`,p=o({__name:`index`,setup(r){return(r,i)=>{let o=c,l=u;return n(),s(l,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[e(o,{code:t(f)},{default:a(()=>[e(d)]),_:1},8,[`code`])]),_:1})}}});export{p as default};