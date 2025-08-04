
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as V}from"./index-C0aM3m2R.js";import{_ as I}from"./index.vue_vue_type_script_setup_true_lang-Dt6-y8JN.js";import{d as y,r as x,ad as j,ae as H,z as Q,j as T,af as U,Q as W,ag as G,k as b,o as h,q as J,a as S,ah as X,b as d,u as v,s as K,c as O,w}from"./index-D1JO3_V0.js";import"./index.vue_vue_type_script_setup_true_lang-BdmnuK66.js";const z=y({name:"FmParticlesBg",__name:"index",props:{color:{default:"#FFF"},quantity:{default:100},staticity:{default:50},ease:{default:50},class:{}},setup(m){const u=m,n=x(null),c=x(null),a=x(null),_=x([]),g=j({x:0,y:0}),s=j({w:0,h:0}),{x:M,y:B}=H(),{pixelRatio:f}=G(),Y=Q(()=>{let e=u.color.replace(/^#/,"");e.length===3&&(e=e.split("").map(i=>i+i).join(""));const t=Number.parseInt(e,16),o=t>>16&255,l=t>>8&255,r=t&255;return`${o} ${l} ${r}`});T(()=>{n.value&&(a.value=n.value.getContext("2d")),F(),R(),window.addEventListener("resize",F)}),U(()=>{window.removeEventListener("resize",F)}),W([M,B],()=>{q()});function F(){E(),A()}function q(){if(n.value){const e=n.value.getBoundingClientRect(),{w:t,h:o}=s,l=M.value-e.left-t/2,r=B.value-e.top-o/2;l<t/2&&l>-t/2&&r<o/2&&r>-o/2&&(g.x=l,g.y=r)}}function E(){c.value&&n.value&&a.value&&(_.value.length=0,s.w=c.value.offsetWidth,s.h=c.value.offsetHeight,n.value.width=s.w*f.value,n.value.height=s.h*f.value,n.value.style.width=`${s.w}px`,n.value.style.height=`${s.h}px`,a.value.scale(f.value,f.value))}function P(){const e=Math.floor(Math.random()*s.w),t=Math.floor(Math.random()*s.h),o=0,l=0,r=Math.floor(Math.random()*2)+1,i=0,p=Number.parseFloat((Math.random()*.6+.1).toFixed(1)),C=(Math.random()-.5)*.2,N=(Math.random()-.5)*.2,L=.1+Math.random()*4;return{x:e,y:t,translateX:o,translateY:l,size:r,alpha:i,targetAlpha:p,dx:C,dy:N,magnetism:L}}function k(e,t=!1){if(a.value){const{x:o,y:l,translateX:r,translateY:i,size:p,alpha:C}=e;a.value.translate(r,i),a.value.beginPath(),a.value.arc(o,l,p,0,2*Math.PI),a.value.fillStyle=`rgba(${Y.value.split(" ").join(", ")}, ${C})`,a.value.fill(),a.value.setTransform(f.value,0,0,f.value,0,0),t||_.value.push(e)}}function $(){a.value&&a.value.clearRect(0,0,s.w,s.h)}function A(){$();const e=u.quantity;for(let t=0;t<e;t++){const o=P();k(o)}}function D(e,t,o,l,r){const i=(e-t)*(r-l)/(o-t)+l;return i>0?i:0}function R(){$(),_.value.forEach((e,t)=>{const l=[e.x+e.translateX-e.size,s.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,s.h-e.y-e.translateY-e.size].reduce((i,p)=>Math.min(i,p)),r=Number.parseFloat(D(l,0,20,0,1).toFixed(2));if(r>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*r,e.x+=e.dx,e.y+=e.dy,e.translateX+=(g.x/(u.staticity/e.magnetism)-e.translateX)/u.ease,e.translateY+=(g.y/(u.staticity/e.magnetism)-e.translateY)/u.ease,e.x<-e.size||e.x>s.w+e.size||e.y<-e.size||e.y>s.h+e.size){_.value.splice(t,1);const i=P();k(i)}else k({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),window.requestAnimationFrame(R)}return(e,t)=>(h(),b("div",{ref_key:"canvasContainerRef",ref:c,class:J(u.class),"aria-hidden":"true"},[S("canvas",{ref_key:"canvasRef",ref:n},null,512)],2))}}),Z={class:"relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2"},ee=y({__name:"_demo1",setup(m){const u=X();return(n,c)=>{const a=z;return h(),b("div",Z,[d(a,{class:"absolute inset-0",color:v(u).currentColorScheme==="dark"?"#FFF":"#000"},null,8,["color"])])}}}),te=`<script setup lang="ts">
const settingsStore = useSettingsStore()
<\/script>

<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <FmParticlesBg
      class="absolute inset-0"
      :color="settingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
    />
  </div>
</template>
`,ae={},ne={class:"relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2"};function se(m,u){const n=z;return h(),b("div",ne,[d(n,{class:"absolute inset-0",color:"#2563EB",quantity:1e3,ease:100,staticity:5})])}const oe=K(ae,[["render",se]]),le=`<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <FmParticlesBg
      class="absolute inset-0"
      color="#2563EB"
      :quantity="1000"
      :ease="100"
      :staticity="5"
    />
  </div>
</template>
`,re={class:"relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2"},ie=y({__name:"_demo3",setup(m){const u=X();return(n,c)=>{const a=z;return h(),b("div",re,[c[0]||(c[0]=S("span",{class:"pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text text-center text-2xl text-transparent font-semibold leading-none dark:from-white dark:to-slate-900/10"}," Fantastic-mobile 真好用 ! ",-1)),d(a,{class:"absolute inset-0",color:v(u).currentColorScheme==="dark"?"#FFF":"#000",quantity:100,ease:100,staticity:10},null,8,["color"])])}}}),ue=`<script setup lang="ts">
const settingsStore = useSettingsStore()
<\/script>

<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <span class="pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text text-center text-2xl text-transparent font-semibold leading-none dark:from-white dark:to-slate-900/10">
      Fantastic-mobile 真好用 !
    </span>
    <FmParticlesBg
      class="absolute inset-0"
      :color="settingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
      :quantity="100"
      :ease="100"
      :staticity="10"
    />
  </div>
</template>
`,pe=y({__name:"index",setup(m){return(u,n)=>{const c=I,a=V;return h(),O(a,{navbar:"","navbar-start-side":"back"},{default:w(()=>[S("div",null,[d(c,{code:v(te)},{default:w(()=>[d(ee)]),_:1},8,["code"]),d(c,{code:v(le)},{default:w(()=>[d(oe)]),_:1},8,["code"]),d(c,{code:v(ue)},{default:w(()=>[d(ie)]),_:1},8,["code"])])]),_:1})}}});export{pe as default};
