
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,lt as r,mt as i,rt as a,v as o,w as s,y as c}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{I as l,l as u}from"./components-DK30L-iF.js";import{t as d}from"./AppPageLayout-BwSv5Viu.js";var f=s({__name:`_demo1`,setup(e){let s=i(1);return(e,i)=>{let l=u;return n(),c(l,{modelValue:t(s),"onUpdate:modelValue":i[0]||(i[0]=e=>r(s)?s.value=e:null),list:[{label:`标签1`,value:1},{label:`标签2`,value:2},{label:`标签3`,value:3}]},{1:a(()=>[...i[1]||(i[1]=[o(`div`,{class:`flex-center`},` 标签1 `,-1)])]),2:a(()=>[...i[2]||(i[2]=[o(`div`,{class:`flex-center`},` 标签2 `,-1)])]),3:a(()=>[...i[3]||(i[3]=[o(`div`,{class:`flex-center`},` 标签3 `,-1)])]),_:1},8,[`modelValue`])}}}),p=`<script setup lang="ts">
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
`,m=s({__name:`index`,setup(r){return(r,i)=>{let o=l,s=d;return n(),c(s,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[e(o,{code:t(p)},{default:a(()=>[e(f)]),_:1},8,[`code`])]),_:1})}}});export{m as default};