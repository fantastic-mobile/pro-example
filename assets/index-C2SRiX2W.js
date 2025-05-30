
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as y}from"./index-CZoLKV0K.js";import{_ as g}from"./index.vue_vue_type_script_setup_true_lang-juQdyMyI.js";import{d as R,r as x,Q as h,T as D,z as S,u as a,R as b,j as N,k as $,o as u,t as P,S as O,s as F,c as m,U as j,b as n,a as w,w as c,e as V,_ as z,F as E,V as B}from"./index-r-6p5DPr.js";import"./index.vue_vue_type_script_setup_true_lang-tI7kj3pw.js";const _=R({name:"FmCountTo",__name:"index",props:{startVal:{},endVal:{},autoplay:{type:Boolean,default:!0},duration:{default:2e3},transition:{default:"linear"},delay:{default:0},decimals:{default:0},separator:{default:","},prefix:{},suffix:{}},emits:["onStarted","onFinished"],setup(l,{expose:s,emit:o}){const t=l,d=o,f=x(!1),p=x(t.startVal),r=h(p,{duration:t.duration,transition:D[t.transition],delay:t.delay,disabled:f,onStarted:()=>d("onStarted"),onFinished:()=>d("onFinished")}),T=S(()=>{let e=a(r.value);if(e=Number(e).toFixed(t.decimals),t.separator){const[C,k]=e.toString().split(".");e=C.replace(/\B(?=(\d{3})+(?!\d))/g,t.separator)+(k?`.${k}`:"")}return t.prefix&&(e=t.prefix+e),t.suffix&&(e=e+t.suffix),e});function i(){p.value=t.endVal}function v(){f.value=!0,p.value=t.startVal,O(()=>{f.value=!1})}return b([()=>t.startVal,()=>t.endVal],()=>{i()}),N(()=>{t.autoplay&&i()}),s({start:i,reset:v}),(e,C)=>(u(),$("span",null,P(a(T)),1))}}),L={};function M(l,s){const o=_;return u(),m(o,{"start-val":0,"end-val":1e5})}const Q=F(L,[["render",M]]),U=`<template>
  <FmCountTo :start-val="0" :end-val="100000" />
</template>
`,q={};function A(l,s){const o=_;return u(),m(o,{"start-val":0,"end-val":1e5,duration:1e4})}const G=F(q,[["render",A]]),H=`<template>
  <FmCountTo :start-val="0" :end-val="100000" :duration="10000" />
</template>
`,I={};function J(l,s){const o=_;return u(),m(o,{"start-val":0,"end-val":1e5,decimals:2})}const K=F(I,[["render",J]]),W=`<template>
  <FmCountTo :start-val="0" :end-val="100000" :decimals="2" />
</template>
`,X={};function Y(l,s){const o=_;return u(),m(o,{"start-val":0,"end-val":1e5,prefix:"￥",suffix:"元"})}const Z=F(X,[["render",Y]]),tt=`<template>
  <FmCountTo :start-val="0" :end-val="100000" prefix="￥" suffix="元" />
</template>
`,nt={class:"flex flex-row gap-2"},et=R({__name:"_demo5",setup(l){const s=j("countToRef"),o=x(0),t=x(1e5);function d(){B("开始")}function f(){B("结束")}return(p,r)=>{var v,e;const T=_,i=z;return u(),$(E,null,[n(T,{ref_key:"countToRef",ref:s,"start-val":a(o),"end-val":a(t),autoplay:!1,onOnStarted:d,onOnFinished:f},null,8,["start-val","end-val"]),w("div",nt,[n(i,{onClick:(v=a(s))==null?void 0:v.start},{default:c(()=>r[1]||(r[1]=[V(" 开始 ")])),_:1,__:[1]},8,["onClick"]),n(i,{onClick:(e=a(s))==null?void 0:e.reset},{default:c(()=>r[2]||(r[2]=[V(" 重置 ")])),_:1,__:[2]},8,["onClick"]),n(i,{onClick:r[0]||(r[0]=C=>t.value+=1e4)},{default:c(()=>r[3]||(r[3]=[V(" 增加10000 ")])),_:1,__:[3]})])],64)}}}),ot=`<script setup lang="ts">
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
`,lt=R({__name:"index",setup(l){return(s,o)=>{const t=g,d=y;return u(),m(d,{navbar:"","navbar-start-side":"back"},{default:c(()=>[w("div",null,[n(t,{code:a(U)},{default:c(()=>[n(Q)]),_:1},8,["code"]),n(t,{title:"持续10秒",code:a(H)},{default:c(()=>[n(G)]),_:1},8,["code"]),n(t,{title:"保留2位小数",code:a(W)},{default:c(()=>[n(K)]),_:1},8,["code"]),n(t,{title:"带前缀和后缀",code:a(tt)},{default:c(()=>[n(Z)]),_:1},8,["code"]),n(t,{title:"手动控制",code:a(ot)},{default:c(()=>[n(et)]),_:1},8,["code"])])]),_:1})}}});export{lt as default};
