
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{$ as e,C as t,Ct as n,H as r,S as i,f as a,mt as o,rt as s,v as c,w as l,x as u,y as d}from"./vue.runtime.esm-bundler-DMY3hWtO.js";import{H as f,N as p,P as m,R as h,at as g}from"./components-CBpXWGFQ.js";import{t as _}from"./AppPageLayout-S1V78StU.js";var v={};function y(e,t){let n=p;return r(),d(n,{"start-val":0,"end-val":1e5})}var b=f(v,[[`render`,y]]),x=`<template>
  <FmCountTo :start-val="0" :end-val="100000" />
</template>
`,S={};function C(e,t){let n=p;return r(),d(n,{"start-val":0,"end-val":1e5,duration:1e4})}var w=f(S,[[`render`,C]]),T=`<template>
  <FmCountTo :start-val="0" :end-val="100000" :duration="10000" />
</template>
`,E={};function D(e,t){let n=p;return r(),d(n,{"start-val":0,"end-val":1e5,decimals:2})}var O=f(E,[[`render`,D]]),k=`<template>
  <FmCountTo :start-val="0" :end-val="100000" :decimals="2" />
</template>
`,A={};function j(e,t){let n=p;return r(),d(n,{"start-val":0,"end-val":1e5,prefix:`￥`,suffix:`元`})}var M=f(A,[[`render`,j]]),N=`<template>
  <FmCountTo :start-val="0" :end-val="100000" prefix="￥" suffix="元" />
</template>
`,P={class:`flex flex-row gap-2`},F=l({__name:`_demo5`,setup(l){let d=e(`countToRef`),f=o(0),m=o(1e5);function _(){g(`开始`)}function v(){g(`结束`)}return(e,o)=>{let l=p,g=h;return r(),u(a,null,[t(l,{ref_key:`countToRef`,ref:d,"start-val":n(f),"end-val":n(m),autoplay:!1,onOnStarted:_,onOnFinished:v},null,8,[`start-val`,`end-val`]),c(`div`,P,[t(g,{onClick:n(d)?.start},{default:s(()=>[...o[1]||(o[1]=[i(` 开始 `,-1)])]),_:1},8,[`onClick`]),t(g,{onClick:n(d)?.reset},{default:s(()=>[...o[2]||(o[2]=[i(` 重置 `,-1)])]),_:1},8,[`onClick`]),t(g,{onClick:o[0]||(o[0]=e=>m.value+=1e4)},{default:s(()=>[...o[3]||(o[3]=[i(` 增加10000 `,-1)])]),_:1})])],64)}}}),I=`<script setup lang="ts">
import { toast } from 'vue-sonner'

const countToRef = useTemplateRef('countToRef')

const startVal = ref(0)
const endVal = ref(100000)

function onStarted() {
  toast('开始')
}

function onFinished() {
  toast('结束')
}
<\/script>

<template>
  <FmCountTo ref="countToRef" :start-val="startVal" :end-val="endVal" :autoplay="false" @on-started="onStarted" @on-finished="onFinished" />
  <div class="flex flex-row gap-2">
    <FmButton @click="countToRef?.start">
      开始
    </FmButton>
    <FmButton @click="countToRef?.reset">
      重置
    </FmButton>
    <FmButton @click="endVal += 10000">
      增加10000
    </FmButton>
  </div>
</template>
`,L=l({__name:`index`,setup(e){return(e,i)=>{let a=m,o=_;return r(),d(o,{navbar:``,"navbar-start-side":`back`},{default:s(()=>[c(`div`,null,[t(a,{code:n(x)},{default:s(()=>[t(b)]),_:1},8,[`code`]),t(a,{title:`持续10秒`,code:n(T)},{default:s(()=>[t(w)]),_:1},8,[`code`]),t(a,{title:`保留2位小数`,code:n(k)},{default:s(()=>[t(O)]),_:1},8,[`code`]),t(a,{title:`带前缀和后缀`,code:n(N)},{default:s(()=>[t(M)]),_:1},8,[`code`]),t(a,{title:`手动控制`,code:n(I)},{default:s(()=>[t(F)]),_:1},8,[`code`])])]),_:1})}}});export{L as default};