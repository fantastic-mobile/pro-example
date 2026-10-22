
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{St as e,_t as t,dt as n,m as r,ut as i,xt as a}from"./src-CTlveZFi.js";import{D as o,Ht as s,On as c,Zn as l,_ as u,b as d,ct as f,g as p,gn as m,it as h,k as g,mt as _,qt as v,v as y,vn as b}from"./runtime-core.esm-bundler-D7siT_TS.js";import{O as x}from"./devtools-CLRpXhL7-CzTLzqSY.js";import{t as S}from"./AppPageLayout-DpGpaj5G.js";var C=g({name:`BuiltInParticlesBg`,__name:`index`,props:{color:{default:`#FFF`},quantity:{default:100},staticity:{default:50},ease:{default:50},class:{type:[Boolean,null,String,Object,Array]}},setup(r){let i=r,o=b(null),g=b(null),v=b(null),y=b([]),x=m({x:0,y:0}),S=m({w:0,h:0}),{x:C,y:w}=a(),{pixelRatio:T}=t(),E=null,D=p(()=>{let e=i.color.replace(/^#/,``);e.length===3&&(e=e.split(``).map(e=>e+e).join(``));let t=Number.parseInt(e,16);return`${t>>16&255} ${t>>8&255} ${t&255}`});f(()=>{o.value&&(v.value=o.value.getContext(`2d`)),O(),I()}),h(()=>{E!==null&&window.cancelAnimationFrame(E)}),s([C,w],()=>{k()}),s(T,()=>{O()}),e(g,()=>{O()});function O(){A(),P()}function k(){if(o.value){let e=o.value.getBoundingClientRect(),{w:t,h:n}=S,r=C.value-e.left-t/2,i=w.value-e.top-n/2;r<t/2&&r>-t/2&&i<n/2&&i>-n/2&&(x.x=r,x.y=i)}}function A(){if(g.value&&o.value&&v.value){let e=g.value.offsetWidth,t=g.value.offsetHeight;if(e<=0||t<=0)return;y.value.length=0,S.w=e,S.h=t,o.value.width=S.w*T.value,o.value.height=S.h*T.value,v.value.setTransform(T.value,0,0,T.value,0,0)}}function j(){return{x:Math.floor(Math.random()*S.w),y:Math.floor(Math.random()*S.h),translateX:0,translateY:0,size:Math.floor(Math.random()*2)+1,alpha:0,targetAlpha:Number.parseFloat((Math.random()*.6+.1).toFixed(1)),dx:(Math.random()-.5)*.2,dy:(Math.random()-.5)*.2,magnetism:.1+Math.random()*4}}function M(e,t=!1){if(v.value){let{x:n,y:r,translateX:i,translateY:a,size:o,alpha:s}=e;v.value.translate(i,a),v.value.beginPath(),v.value.arc(n,r,o,0,2*Math.PI),v.value.fillStyle=`rgba(${D.value.split(` `).join(`, `)}, ${s})`,v.value.fill(),v.value.setTransform(T.value,0,0,T.value,0,0),t||y.value.push(e)}}function N(){v.value&&v.value.clearRect(0,0,S.w,S.h)}function P(){N();let e=i.quantity;for(let t=0;t<e;t++)M(j())}function F(e,t,n,r,i){let a=(e-t)*(i-r)/(n-t)+r;return a>0?a:0}function I(){N(),y.value.forEach((e,t)=>{let n=[e.x+e.translateX-e.size,S.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,S.h-e.y-e.translateY-e.size].reduce((e,t)=>Math.min(e,t)),r=Number.parseFloat(F(n,0,20,0,1).toFixed(2));r>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*r,e.x+=e.dx,e.y+=e.dy,e.translateX+=(x.x/(i.staticity/e.magnetism)-e.translateX)/i.ease,e.translateY+=(x.y/(i.staticity/e.magnetism)-e.translateY)/i.ease,e.x<-e.size||e.x>S.w+e.size||e.y<-e.size||e.y>S.h+e.size?(y.value.splice(t,1),M(j())):M({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),E=window.requestAnimationFrame(I)}return(e,t)=>(_(),d(`div`,{ref_key:`canvasContainerRef`,ref:g,class:l(c(n)(`size-full`,i.class)),"aria-hidden":`true`},[u(`canvas`,{ref_key:`canvasRef`,ref:o,class:`size-full block`},null,512)],2))}}),w={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`},T=g({__name:`_demo1`,setup(e){let t=x();return(e,n)=>{let r=C;return _(),d(`div`,w,[o(r,{class:`inset-0 absolute`,color:c(t).currentColorScheme===`dark`?`#FFF`:`#000`},null,8,[`color`])])}}}),E=`<script setup lang="ts">
const appSettingsStore = useAppSettingsStore()
<\/script>

<template>
  <div class="p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden">
    <FmParticlesBg
      class="inset-0 absolute"
      :color="appSettingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
    />
  </div>
</template>
`,D={},O={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`};function k(e,t){let n=C;return _(),d(`div`,O,[o(n,{class:`inset-0 absolute`,color:`#2563EB`,quantity:1e3,ease:100,staticity:5})])}var A=i(D,[[`render`,k]]),j=`<template>
  <div class="p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden">
    <FmParticlesBg
      class="inset-0 absolute"
      color="#2563EB"
      :quantity="1000"
      :ease="100"
      :staticity="5"
    />
  </div>
</template>
`,M={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`},N=g({__name:`_demo3`,setup(e){let t=x();return(e,n)=>{let r=C;return _(),d(`div`,M,[n[0]||(n[0]=u(`span`,{class:`text-2xl text-transparent leading-none font-semibold text-center pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text dark:from-white dark:to-slate-900/10`},` Fantastic-mobile 真好用 ! `,-1)),o(r,{class:`inset-0 absolute`,color:c(t).currentColorScheme===`dark`?`#FFF`:`#000`,quantity:100,ease:100,staticity:10},null,8,[`color`])])}}}),P=`<script setup lang="ts">
const appSettingsStore = useAppSettingsStore()
<\/script>

<template>
  <div class="p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden">
    <span class="text-2xl text-transparent leading-none font-semibold text-center pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text dark:from-white dark:to-slate-900/10">
      Fantastic-mobile 真好用 !
    </span>
    <FmParticlesBg
      class="inset-0 absolute"
      :color="appSettingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
      :quantity="100"
      :ease="100"
      :staticity="10"
    />
  </div>
</template>
`,F=g({__name:`index`,setup(e){return(e,t)=>{let n=r,i=S;return _(),y(i,{navbar:``,"navbar-start-side":`back`},{default:v(()=>[u(`div`,null,[o(n,{code:c(E)},{default:v(()=>[o(T)]),_:1},8,[`code`]),o(n,{code:c(j)},{default:v(()=>[o(A)]),_:1},8,[`code`]),o(n,{code:c(P)},{default:v(()=>[o(N)]),_:1},8,[`code`])])]),_:1})}}});export{F as default};