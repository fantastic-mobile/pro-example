
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as y}from"./index-C0aM3m2R.js";import{_ as g}from"./index.vue_vue_type_script_setup_true_lang-Dt6-y8JN.js";import{d as C,r as v,O as h,T as D,z as S,u as o,Q as b,j as N,k as $,o as u,t as O,S as P,s as x,c as m,U as j,b as n,a as w,w as c,e as T,_ as z,F as E,W as B}from"./index-D1JO3_V0.js";import"./index.vue_vue_type_script_setup_true_lang-BdmnuK66.js";const _=C({name:"FmCountTo",__name:"index",props:{startVal:{},endVal:{},autoplay:{type:Boolean,default:!0},duration:{default:2e3},transition:{default:"linear"},delay:{default:0},decimals:{default:0},separator:{default:","},prefix:{},suffix:{}},emits:["onStarted","onFinished"],setup(l,{expose:a,emit:e}){const t=l,d=e,f=v(!1),p=v(t.startVal),s=h(p,{duration:t.duration,transition:D[t.transition],delay:t.delay,disabled:f,onStarted:()=>d("onStarted"),onFinished:()=>d("onFinished")}),F=S(()=>{let r=o(s.value);if(r=Number(r).toFixed(t.decimals),t.separator){const[k,R]=r.toString().split(".");r=k.replace(/\B(?=(\d{3})+(?!\d))/g,t.separator)+(R?`.${R}`:"")}return t.prefix&&(r=t.prefix+r),t.suffix&&(r=r+t.suffix),r});function i(){p.value=t.endVal}function V(){f.value=!0,p.value=t.startVal,P(()=>{f.value=!1})}return b([()=>t.startVal,()=>t.endVal],()=>{i()}),N(()=>{t.autoplay&&i()}),a({start:i,reset:V}),(r,k)=>(u(),$("span",null,O(o(F)),1))}}),L={};function M(l,a){const e=_;return u(),m(e,{"start-val":0,"end-val":1e5})}const Q=x(L,[["render",M]]),U=`<template>
  <FmCountTo :start-val="0" :end-val="100000" />
</template>
`,W={};function q(l,a){const e=_;return u(),m(e,{"start-val":0,"end-val":1e5,duration:1e4})}const A=x(W,[["render",q]]),G=`<template>
  <FmCountTo :start-val="0" :end-val="100000" :duration="10000" />
</template>
`,H={};function I(l,a){const e=_;return u(),m(e,{"start-val":0,"end-val":1e5,decimals:2})}const J=x(H,[["render",I]]),K=`<template>
  <FmCountTo :start-val="0" :end-val="100000" :decimals="2" />
</template>
`,X={};function Y(l,a){const e=_;return u(),m(e,{"start-val":0,"end-val":1e5,prefix:"￥",suffix:"元"})}const Z=x(X,[["render",Y]]),tt=`<template>
  <FmCountTo :start-val="0" :end-val="100000" prefix="￥" suffix="元" />
</template>
`,nt={class:"flex flex-row gap-2"},et=C({__name:"_demo5",setup(l){const a=j("countToRef"),e=v(0),t=v(1e5);function d(){B("开始")}function f(){B("结束")}return(p,s)=>{const F=_,i=z;return u(),$(E,null,[n(F,{ref_key:"countToRef",ref:a,"start-val":o(e),"end-val":o(t),autoplay:!1,onOnStarted:d,onOnFinished:f},null,8,["start-val","end-val"]),w("div",nt,[n(i,{onClick:o(a)?.start},{default:c(()=>s[1]||(s[1]=[T(" 开始 ",-1)])),_:1,__:[1]},8,["onClick"]),n(i,{onClick:o(a)?.reset},{default:c(()=>s[2]||(s[2]=[T(" 重置 ",-1)])),_:1,__:[2]},8,["onClick"]),n(i,{onClick:s[0]||(s[0]=V=>t.value+=1e4)},{default:c(()=>s[3]||(s[3]=[T(" 增加10000 ",-1)])),_:1,__:[3]})])],64)}}}),ot=`<script setup lang="ts">
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
`,lt=C({__name:"index",setup(l){return(a,e)=>{const t=g,d=y;return u(),m(d,{navbar:"","navbar-start-side":"back"},{default:c(()=>[w("div",null,[n(t,{code:o(U)},{default:c(()=>[n(Q)]),_:1},8,["code"]),n(t,{title:"持续10秒",code:o(G)},{default:c(()=>[n(A)]),_:1},8,["code"]),n(t,{title:"保留2位小数",code:o(K)},{default:c(()=>[n(J)]),_:1},8,["code"]),n(t,{title:"带前缀和后缀",code:o(tt)},{default:c(()=>[n(Z)]),_:1},8,["code"]),n(t,{title:"手动控制",code:o(ot)},{default:c(()=>[n(et)]),_:1},8,["code"])])]),_:1})}}});export{lt as default};
