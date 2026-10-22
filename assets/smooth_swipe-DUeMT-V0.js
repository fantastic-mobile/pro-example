
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{Ft as e,It as t,M as n,N as r,m as i,vt as a}from"./src-CTlveZFi.js";import{D as o,E as s,Ht as c,Lt as l,On as u,Rt as d,Ut as f,_ as p,b as m,bt as h,ct as g,et as _,ft as v,g as y,k as b,mt as x,nr as S,o as C,qt as w,tt as T,v as E,vn as D,wt as O,xt as k,y as A}from"./runtime-core.esm-bundler-D7siT_TS.js";import{a as j,i as M,n as N,r as P,t as F,w as I}from"./motion-Du6Fr-Ah.js";import{t as L}from"./AppPageLayout-DpGpaj5G.js";var R=0;function z(e){let t=new WeakMap,n=j();function r(r){if(e.mode!==`popLayout`)return;let i=r.offsetParent,a=i instanceof HTMLElement&&i.offsetWidth||0,o={height:r.offsetHeight||0,width:r.offsetWidth||0,top:r.offsetTop,left:r.offsetLeft,right:0};o.right=a-o.width-o.left;let s=e.anchorX===`left`?`left: ${o.left}px`:`right: ${o.right}px`,c=`pop-${R++}`;r.dataset.motionPopId=c;let l=document.createElement(`style`);n.value.nonce&&(l.nonce=n.value.nonce),t.set(r,l),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
    [data-motion-pop-id="${c}"] {
      position: absolute !important;
      width: ${o.width}px !important;
      height: ${o.height}px !important;
      top: ${o.top}px !important;
      ${s} !important;
      }
      `)}function i(e){let n=t.get(e);n&&(t.delete(e),I.render(()=>{document.head.removeChild(n)}))}return{addPopStyle:r,removePopStyle:i}}var B=0;function V(e){let t=String(B++),n=new Map,{addPopStyle:r,removePopStyle:i}=z(e);function a(e){let n=[],r=P.get(e);r&&e.getAttribute(M.motionAttribute)===t&&n.push(r);let i=Array.from(e.querySelectorAll(`[${M.motionAttribute}="${t}"]`));for(let e of i){let t=P.get(e);t&&n.push(t)}return n}function o(e,t){let r=n.get(e);r&&(r.remaining.delete(t),r.remaining.size===0&&c(r))}let s={initial:e.initial,custom:e.custom,presenceId:t,onMotionExitComplete:o};N(s),g(()=>{s.initial=void 0});function c(t){i(t.el),t.states.forEach(e=>{e.getSnapshot(e.options,!1)}),t.done(),n.delete(t.el),t.el?.isConnected?t.states[0]?.didUpdate():t.states.forEach(e=>{e.unmount()}),e.onExitComplete?.()}function l(e,t){a(e).forEach(e=>{e.setActive(`exit`,!1),e.getSnapshot(e.options,!0)}),t()}function u(t,i){s.custom=e.custom;let o=t,c=a(o);if(c.length===0){i(),e.onExitComplete?.();return}let l={remaining:new Set(c),states:c,done:i,el:o};n.set(o,l),r(o),c.forEach(e=>{e.presenceContainer=o,e.setActive(`exit`,!0),e.getSnapshot(e.options,!1)}),c[0]?.didUpdate()}return v(()=>{n.forEach(e=>{e.states.forEach(e=>{e.unmount()})}),n.clear()}),{enter:l,exit:u}}var H=b({name:`AnimatePresence`,inheritAttrs:!0,__name:`AnimatePresence`,props:{mode:{default:`sync`},initial:{type:Boolean,default:!0},as:{},custom:{},onExitComplete:{},anchorX:{default:`left`}},setup(n){let r=n,{enter:i,exit:a}=V(r),o=y(()=>r.mode===`wait`?{mode:r.mode===`wait`?`out-in`:void 0}:{tag:r.as});return(n,r)=>(x(),E(O(n.mode===`wait`?e:t),_(o.value,{appear:``,css:!1,onLeave:u(a),onEnter:u(i)}),{default:w(()=>[k(n.$slots,`default`)]),_:3},16,[`onLeave`,`onEnter`]))}}),U=b({name:`BuiltInSmoothSwipe`,__name:`index`,props:{activeIndex:{}},setup(e){let t=e,n=l(),r=D(),i=D([]);g(()=>{f(()=>{i.value=n.default?n.default():[]})});let s=d(`contentRef`),_=D(`right`);c(()=>t.activeIndex,(e,t)=>{_.value=e>(t??-1)?`right`:`left`,T(()=>{r.value=e})},{immediate:!0});let{height:v}=a(s);return(e,t)=>(x(),E(u(F),{as:`div`,class:`w-full`,style:{position:`relative`,overflow:`hidden`},animate:{height:`${u(v)+1}px`},transition:{type:`spring`,stiffness:200,damping:25,duration:.3}},{default:w(()=>[o(u(H),{initial:!1,mode:`sync`},{default:w(()=>[(x(),E(u(F),{key:r.value,as:`div`,initial:{x:_.value===`left`?`-100%`:`100%`,opacity:0},animate:{x:`0%`,opacity:1},exit:{x:_.value===`left`?`50%`:`-50%`,opacity:0},transition:{type:`tween`,stiffness:300,damping:30,duration:.3},style:{position:`absolute`,left:0,right:0,top:0}},{default:w(()=>[p(`div`,{ref_key:`contentRef`,ref:s},[(x(!0),m(C,null,h(i.value,(e,t)=>(x(),m(C,{key:t},[t===r.value?(x(),E(O(e),{key:0})):A(``,!0)],64))),128))],512)]),_:1},8,[`initial`,`exit`]))]),_:1})]),_:1},8,[`animate`]))}}),W=b({__name:`_demo1`,setup(e){let t=D(0);return(e,i)=>{let a=n,c=r,l=U;return x(),m(C,null,[o(c,null,{default:w(()=>[(x(),m(C,null,h(4,e=>o(a,{key:e,variant:u(t)===e-1?`default`:`outline`,onClick:n=>t.value=e-1},{default:w(()=>[s(S(e),1)]),_:2},1032,[`variant`,`onClick`])),64))]),_:1}),o(l,{"active-index":u(t)},{default:w(()=>[...i[0]||(i[0]=[p(`div`,{class:`text-20 flex-center h-50`},` 1 `,-1),p(`div`,{class:`text-20 flex-center h-75`},` 2 `,-1),p(`div`,{class:`text-20 flex-center h-100`},` 3 `,-1),p(`div`,{class:`text-20 flex-center h-25`},` 4 `,-1)])]),_:1},8,[`active-index`])],64)}}}),G=`<script setup lang="ts">
const activeIndex = ref<number>(0)
<\/script>

<template>
  <FmButtonGroup>
    <FmButton v-for="index in 4" :key="index" :variant="activeIndex === index - 1 ? 'default' : 'outline'" @click="activeIndex = index - 1">
      {{ index }}
    </FmButton>
  </FmButtonGroup>
  <FmSmoothSwipe :active-index>
    <div class="text-20 flex-center h-50">
      1
    </div>
    <div class="text-20 flex-center h-75">
      2
    </div>
    <div class="text-20 flex-center h-100">
      3
    </div>
    <div class="text-20 flex-center h-25">
      4
    </div>
  </FmSmoothSwipe>
</template>
`,K=b({__name:`index`,setup(e){return(e,t)=>{let n=i,r=L;return x(),E(r,{navbar:``,"navbar-start-side":`back`},{default:w(()=>[o(n,{code:u(G)},{default:w(()=>[o(W)]),_:1},8,[`code`])]),_:1})}}});export{K as default};