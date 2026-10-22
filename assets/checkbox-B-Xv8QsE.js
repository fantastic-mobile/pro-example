
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{dt as e,m as t}from"./src-CTlveZFi.js";import{$ as n,D as r,E as i,Ft as a,Ht as o,On as s,Pt as c,Zn as l,_ as u,b as d,g as f,k as p,mt as m,qt as h,un as g,v as _,vn as v,xt as y}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as b}from"./Checkbox-DEaiwcVG.js";import{t as x}from"./Label-Bsws0Ln_.js";import{t as S}from"./AppPageLayout-DpGpaj5G.js";var C=p({name:`BuiltInCheckbox`,__name:`index`,props:n({id:{},disabled:{type:Boolean},class:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]},labelClass:{type:[Boolean,null,String,Object,Array]}},{modelValue:{},modelModifiers:{}}),emits:n([`change`],[`update:modelValue`]),setup(t,{emit:n}){let i=t,u=n,p=a(t,`modelValue`),g=c(),_=f(()=>i.id||g);return o(p,e=>{u(`change`,e)}),(n,a)=>(m(),d(`div`,{class:l(s(e)(`flex-center-start gap-2`,i.class))},[r(s(b),{id:_.value,modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value=e),disabled:t.disabled,class:l(i.itemClass)},null,8,[`id`,`modelValue`,`disabled`,`class`]),r(s(x),{for:_.value,class:l(s(e)(`text-sm cursor-pointer empty:hidden`,i.disabled&&`cursor-not-allowed opacity-60`,i.labelClass))},{default:h(()=>[y(n.$slots,`default`)]),_:3},8,[`for`,`class`])],2))}}),w={class:`flex gap-4`},T=p({__name:`_demo1`,setup(e){let t=v(!1);return(e,n)=>{let a=C;return m(),d(`div`,w,[r(a,{modelValue:s(t),"onUpdate:modelValue":n[0]||(n[0]=e=>g(t)?t.value=e:null)},{default:h(()=>[...n[1]||(n[1]=[i(` 同意协议 `,-1)])]),_:1},8,[`modelValue`])])}}}),E=`<script setup lang="ts">
const checked = ref(false)
<\/script>

<template>
  <div class="flex gap-4">
    <FmCheckbox v-model="checked">
      同意协议
    </FmCheckbox>
  </div>
</template>
`,D=p({__name:`_demo2`,setup(e){let t=v(`indeterminate`);return(e,n)=>{let r=C;return m(),_(r,{modelValue:s(t),"onUpdate:modelValue":n[0]||(n[0]=e=>g(t)?t.value=e:null)},{default:h(()=>[...n[1]||(n[1]=[i(` 部分选中 `,-1)])]),_:1},8,[`modelValue`])}}}),O=`<script setup lang="ts">
const checked = ref<'indeterminate' | boolean>('indeterminate')
<\/script>

<template>
  <FmCheckbox v-model="checked">
    部分选中
  </FmCheckbox>
</template>
`,k=p({__name:`index`,setup(e){return(e,n)=>{let i=t,a=S;return m(),_(a,{navbar:``,"navbar-start-side":`back`},{default:h(()=>[u(`div`,null,[r(i,{code:s(E)},{default:h(()=>[r(T)]),_:1},8,[`code`]),r(i,{title:`半选状态`,code:s(O)},{default:h(()=>[r(D)]),_:1},8,[`code`])])]),_:1})}}});export{k as default};