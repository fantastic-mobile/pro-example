
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,S as r,lt as i,mt as a,rt as o,v as s,w as c,x as l,y as u}from"./vue.runtime.esm-bundler-DOMO_wpA.js";import{U as d,x as f}from"./src-C_SUC8up.js";import{t as p}from"./AppPageLayout-CilNLEuS.js";var m={class:`flex gap-4`},h=c({__name:`_demo1`,setup(s){let c=a(!1);return(a,s)=>{let u=d;return n(),l(`div`,m,[e(u,{modelValue:t(c),"onUpdate:modelValue":s[0]||(s[0]=e=>i(c)?c.value=e:null)},{default:o(()=>[...s[1]||(s[1]=[r(` 同意协议 `,-1)])]),_:1},8,[`modelValue`])])}}}),g=`<script setup lang="ts">
const checked = ref(false)
<\/script>

<template>
  <div class="flex gap-4">
    <FmCheckbox v-model="checked">
      同意协议
    </FmCheckbox>
  </div>
</template>
`,_=c({__name:`_demo2`,setup(e){let s=a(`indeterminate`);return(e,a)=>{let c=d;return n(),u(c,{modelValue:t(s),"onUpdate:modelValue":a[0]||(a[0]=e=>i(s)?s.value=e:null)},{default:o(()=>[...a[1]||(a[1]=[r(` 部分选中 `,-1)])]),_:1},8,[`modelValue`])}}}),v=`<script setup lang="ts">
const checked = ref<'indeterminate' | boolean>('indeterminate')
<\/script>

<template>
  <FmCheckbox v-model="checked">
    部分选中
  </FmCheckbox>
</template>
`,y=c({__name:`index`,setup(r){return(r,i)=>{let a=f,c=p;return n(),u(c,{navbar:``,"navbar-start-side":`back`},{default:o(()=>[s(`div`,null,[e(a,{code:t(g)},{default:o(()=>[e(h)]),_:1},8,[`code`]),e(a,{title:`半选状态`,code:t(v)},{default:o(()=>[e(_)]),_:1},8,[`code`])])]),_:1})}}});export{y as default};