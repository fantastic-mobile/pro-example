
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,rt as r,v as i,w as a,y as o}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{P as s,_ as c,at as l}from"./components-BMqlqruM.js";import{t as u}from"./AppPageLayout-C9-qV5nV.js";var d=a({__name:`_demo1`,setup(e){function t(){l.success(`恭喜你刮中了`)}return(e,a)=>{let s=c;return n(),o(s,{width:250,height:250,"min-scratch-percentage":30,class:`border-2 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden`,onComplete:t},{default:r(()=>[...a[0]||(a[0]=[i(`div`,{class:`text-8xl`},` 🥳 `,-1)])]),_:1})}}}),f=`<script lang="ts" setup>
import { toast } from 'vue-sonner'

function handleComplete() {
  toast.success('恭喜你刮中了')
}
<\/script>

<template>
  <FmScratchOff
    :width="250"
    :height="250"
    :min-scratch-percentage="30"
    class="border-2 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden"
    @complete="handleComplete"
  >
    <div class="text-8xl">
      🥳
    </div>
  </FmScratchOff>
</template>
`,p=a({__name:`index`,setup(i){return(i,a)=>{let c=s,l=u;return n(),o(l,{navbar:``,"navbar-start-side":`back`},{default:r(()=>[e(c,{code:t(f)},{default:r(()=>[e(d)]),_:1},8,[`code`])]),_:1})}}});export{p as default};