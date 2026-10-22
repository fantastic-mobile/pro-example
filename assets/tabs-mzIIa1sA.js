
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{m as e,x as t}from"./src-CTlveZFi.js";import{D as n,On as r,_ as i,k as a,mt as o,qt as s,un as c,v as l,vn as u}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as d}from"./AppPageLayout-DpGpaj5G.js";var f=a({__name:`_demo1`,setup(e){let n=u(1);return(e,a)=>{let u=t;return o(),l(u,{modelValue:r(n),"onUpdate:modelValue":a[0]||(a[0]=e=>c(n)?n.value=e:null),list:[{label:`标签1`,value:1},{label:`标签2`,value:2},{label:`标签3`,value:3}]},{1:s(()=>[...a[1]||(a[1]=[i(`div`,{class:`flex-center`},` 标签1 `,-1)])]),2:s(()=>[...a[2]||(a[2]=[i(`div`,{class:`flex-center`},` 标签2 `,-1)])]),3:s(()=>[...a[3]||(a[3]=[i(`div`,{class:`flex-center`},` 标签3 `,-1)])]),_:1},8,[`modelValue`])}}}),p=`<script setup lang="ts">
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
`,m=a({__name:`index`,setup(t){return(t,i)=>{let a=e,c=d;return o(),l(c,{navbar:``,"navbar-start-side":`back`},{default:s(()=>[n(a,{code:r(p)},{default:s(()=>[n(f)]),_:1},8,[`code`])]),_:1})}}});export{m as default};