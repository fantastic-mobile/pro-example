
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,Ot as r,W as i,f as a,lt as o,mt as s,rt as c,v as l,w as u,x as d,y as f}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{P as p,c as m,g as h}from"./components-BMqlqruM.js";import{t as g}from"./AppPageLayout-C9-qV5nV.js";var _={class:`flex-col-start gap-4`},v={class:`flex-col-start gap-4`},y={class:`flex-center-start gap-4`},b={class:`flex-center-start gap-4`},x={class:`flex-center-start`},S=u({__name:`_demo1`,setup(u){let f=s(!0),p=s(!1);return(s,u)=>{let g=m,S=h;return n(),d(`div`,_,[l(`div`,v,[l(`div`,y,[u[2]||(u[2]=l(`div`,{class:`text-sm`},` 显示滚动条 `,-1)),e(g,{modelValue:t(f),"onUpdate:modelValue":u[0]||(u[0]=e=>o(f)?f.value=e:null)},null,8,[`modelValue`])]),l(`div`,b,[u[3]||(u[3]=l(`div`,{class:`text-sm`},` 显示遮罩 `,-1)),e(g,{modelValue:t(p),"onUpdate:modelValue":u[1]||(u[1]=e=>o(p)?p.value=e:null)},null,8,[`modelValue`])])]),e(S,{scrollbar:t(f),mask:t(p),class:`border rounded-md h-72 w-full`},{default:c(()=>[(n(),d(a,null,i(20,e=>l(`div`,{key:e,class:`text-sm p-4`},r(e),1)),64))]),_:1},8,[`scrollbar`,`mask`]),e(S,{horizontal:``,scrollbar:t(f),mask:t(p),class:`border rounded-md w-full`},{default:c(()=>[l(`div`,x,[(n(),d(a,null,i(20,e=>l(`div`,{key:e,class:`text-sm flex-center h-16 w-16`},r(e),1)),64))])]),_:1},8,[`scrollbar`,`mask`])])}}}),C=`<script setup lang="ts">
const scrollbar = ref(true)
const mask = ref(false)
<\/script>

<template>
  <div class="flex-col-start gap-4">
    <div class="flex-col-start gap-4">
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示滚动条
        </div>
        <FmSwitch v-model="scrollbar" />
      </div>
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示遮罩
        </div>
        <FmSwitch v-model="mask" />
      </div>
    </div>
    <FmScrollArea :scrollbar :mask class="border rounded-md h-72 w-full">
      <div v-for="tag in 20" :key="tag" class="text-sm p-4">
        {{ tag }}
      </div>
    </FmScrollArea>
    <FmScrollArea horizontal :scrollbar :mask class="border rounded-md w-full">
      <div class="flex-center-start">
        <div v-for="tag in 20" :key="tag" class="text-sm flex-center h-16 w-16">
          {{ tag }}
        </div>
      </div>
    </FmScrollArea>
  </div>
</template>
`,w=u({__name:`index`,setup(r){return(r,i)=>{let a=p,o=g;return n(),f(o,{navbar:``,"navbar-start-side":`back`},{default:c(()=>[e(a,{code:t(C)},{default:c(()=>[e(S)]),_:1},8,[`code`])]),_:1})}}});export{w as default};