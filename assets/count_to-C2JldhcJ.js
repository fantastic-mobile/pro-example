
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{Et as e,M as t,b as n,m as r,mt as i,ut as a}from"./src-CTlveZFi.js";import{D as o,E as s,Ht as c,On as l,Rt as u,_ as d,b as f,ct as p,g as m,k as h,mt as g,nr as _,o as v,qt as y,tt as b,v as x,vn as S}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as C}from"./AppPageLayout-DpGpaj5G.js";var w=h({name:`BuiltInCountTo`,__name:`index`,props:{startVal:{},endVal:{},autoplay:{type:Boolean,default:!0},duration:{default:2e3},transition:{default:`linear`},delay:{default:0},decimals:{default:0},separator:{default:`,`},prefix:{},suffix:{}},emits:[`onStarted`,`onFinished`],setup(t,{expose:n,emit:r}){let a=t,o=r,s=S(!1),u=S(a.startVal),d=e(u,{duration:a.duration,transition:i[a.transition],delay:a.delay,disabled:s,onStarted:()=>o(`onStarted`),onFinished:()=>o(`onFinished`)}),h=m(()=>{let e=l(d.value);if(e=Number(e).toFixed(a.decimals),a.separator){let[t,n]=e.toString().split(`.`);e=t.replace(/\B(?=(\d{3})+(?!\d))/g,a.separator)+(n?`.${n}`:``)}return a.prefix&&(e=a.prefix+e),a.suffix&&(e+=a.suffix),e});function v(){u.value=a.endVal}function y(){s.value=!0,u.value=a.startVal,b(()=>{s.value=!1})}return c([()=>a.startVal,()=>a.endVal],()=>{v()}),p(()=>{a.autoplay&&v()}),n({start:v,reset:y}),(e,t)=>(g(),f(`span`,null,_(h.value),1))}}),T={};function E(e,t){let n=w;return g(),x(n,{"start-val":0,"end-val":1e5})}var D=a(T,[[`render`,E]]),O=`<template>
  <FmCountTo :start-val="0" :end-val="100000" />
</template>
`,k={};function A(e,t){let n=w;return g(),x(n,{"start-val":0,"end-val":1e5,duration:1e4})}var j=a(k,[[`render`,A]]),M=`<template>
  <FmCountTo :start-val="0" :end-val="100000" :duration="10000" />
</template>
`,N={};function P(e,t){let n=w;return g(),x(n,{"start-val":0,"end-val":1e5,decimals:2})}var F=a(N,[[`render`,P]]),I=`<template>
  <FmCountTo :start-val="0" :end-val="100000" :decimals="2" />
</template>
`,L={};function R(e,t){let n=w;return g(),x(n,{"start-val":0,"end-val":1e5,prefix:`￥`,suffix:`元`})}var z=a(L,[[`render`,R]]),B=`<template>
  <FmCountTo :start-val="0" :end-val="100000" prefix="￥" suffix="元" />
</template>
`,V={class:`flex flex-row gap-2`},H=h({__name:`_demo5`,setup(e){let r=u(`countToRef`),i=S(0),a=S(1e5);function c(){n(`开始`)}function p(){n(`结束`)}return(e,n)=>{let u=w,m=t;return g(),f(v,null,[o(u,{ref_key:`countToRef`,ref:r,"start-val":l(i),"end-val":l(a),autoplay:!1,onOnStarted:c,onOnFinished:p},null,8,[`start-val`,`end-val`]),d(`div`,V,[o(m,{onClick:l(r)?.start},{default:y(()=>[...n[1]||(n[1]=[s(` 开始 `,-1)])]),_:1},8,[`onClick`]),o(m,{onClick:l(r)?.reset},{default:y(()=>[...n[2]||(n[2]=[s(` 重置 `,-1)])]),_:1},8,[`onClick`]),o(m,{onClick:n[0]||(n[0]=e=>a.value+=1e4)},{default:y(()=>[...n[3]||(n[3]=[s(` 增加10000 `,-1)])]),_:1})])],64)}}}),U=`<script setup lang="ts">
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
`,W=h({__name:`index`,setup(e){return(e,t)=>{let n=r,i=C;return g(),x(i,{navbar:``,"navbar-start-side":`back`},{default:y(()=>[d(`div`,null,[o(n,{code:l(O)},{default:y(()=>[o(D)]),_:1},8,[`code`]),o(n,{title:`持续10秒`,code:l(M)},{default:y(()=>[o(j)]),_:1},8,[`code`]),o(n,{title:`保留2位小数`,code:l(I)},{default:y(()=>[o(F)]),_:1},8,[`code`]),o(n,{title:`带前缀和后缀`,code:l(B)},{default:y(()=>[o(z)]),_:1},8,[`code`]),o(n,{title:`手动控制`,code:l(U)},{default:y(()=>[o(H)]),_:1},8,[`code`])])]),_:1})}}});export{W as default};