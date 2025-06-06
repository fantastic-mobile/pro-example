
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as g}from"./index-d6ZB0Jya.js";import{_ as w}from"./index.vue_vue_type_script_setup_true_lang-DMxm4nWt.js";import{d as k,r as _,k as d,o,a,b as r,i as f,u as t,ai as F,w as c,F as p,n as v,as as h,t as x,c as S}from"./index-BLP5v8hh.js";import"./index.vue_vue_type_script_setup_true_lang-Bk9FuQCK.js";const V={class:"flex-col-start gap-4"},y={class:"flex-col-start gap-4"},A={class:"flex-center-start gap-4"},B={class:"flex-center-start gap-4"},$={class:"flex-center-start"},C=k({__name:"_demo1",setup(b){const l=_(!0),n=_(!1);return(m,s)=>{const i=F,u=h;return o(),d("div",V,[a("div",y,[a("div",A,[s[2]||(s[2]=a("div",{class:"text-sm"}," 显示滚动条 ",-1)),r(i,{modelValue:t(l),"onUpdate:modelValue":s[0]||(s[0]=e=>f(l)?l.value=e:null)},null,8,["modelValue"])]),a("div",B,[s[3]||(s[3]=a("div",{class:"text-sm"}," 显示遮罩 ",-1)),r(i,{modelValue:t(n),"onUpdate:modelValue":s[1]||(s[1]=e=>f(n)?n.value=e:null)},null,8,["modelValue"])])]),r(u,{scrollbar:t(l),mask:t(n),class:"h-72 w-full border rounded-md"},{default:c(()=>[(o(),d(p,null,v(20,e=>a("div",{key:e,class:"p-4 text-sm"},x(e),1)),64))]),_:1},8,["scrollbar","mask"]),r(u,{horizontal:"",scrollbar:t(l),mask:t(n),class:"w-full border rounded-md"},{default:c(()=>[a("div",$,[(o(),d(p,null,v(20,e=>a("div",{key:e,class:"h-16 w-16 flex-center text-sm"},x(e),1)),64))])]),_:1},8,["scrollbar","mask"])])}}}),z=`<script setup lang="ts">
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
    <FmScrollArea :scrollbar :mask class="h-72 w-full border rounded-md">
      <div v-for="tag in 20" :key="tag" class="p-4 text-sm">
        {{ tag }}
      </div>
    </FmScrollArea>
    <FmScrollArea horizontal :scrollbar :mask class="w-full border rounded-md">
      <div class="flex-center-start">
        <div v-for="tag in 20" :key="tag" class="h-16 w-16 flex-center text-sm">
          {{ tag }}
        </div>
      </div>
    </FmScrollArea>
  </div>
</template>
`,R=k({__name:"index",setup(b){return(l,n)=>{const m=w,s=g;return o(),S(s,{navbar:"","navbar-start-side":"back"},{default:c(()=>[r(m,{code:t(z)},{default:c(()=>[r(C)]),_:1},8,["code"])]),_:1})}}});export{R as default};
