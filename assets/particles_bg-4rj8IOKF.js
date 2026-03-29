
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{C as e,Ct as t,H as n,rt as r,v as i,w as a,x as o,y as s}from"./vue.runtime.esm-bundler-DMY3hWtO.js";import{H as c,P as l,b as u}from"./components-CBpXWGFQ.js";import{n as d}from"./dist-SpGahdYJ.js";import{t as f}from"./AppPageLayout-S1V78StU.js";var p={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`},m=a({__name:`_demo1`,setup(r){let i=d();return(r,a)=>{let s=u;return n(),o(`div`,p,[e(s,{class:`inset-0 absolute`,color:t(i).currentColorScheme===`dark`?`#FFF`:`#000`},null,8,[`color`])])}}}),h=`<script setup lang="ts">
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
`,g={},_={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`};function v(t,r){let i=u;return n(),o(`div`,_,[e(i,{class:`inset-0 absolute`,color:`#2563EB`,quantity:1e3,ease:100,staticity:5})])}var y=c(g,[[`render`,v]]),b=`<template>
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
`,x={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`},S=a({__name:`_demo3`,setup(r){let a=d();return(r,s)=>{let c=u;return n(),o(`div`,x,[s[0]||(s[0]=i(`span`,{class:`text-2xl text-transparent leading-none font-semibold text-center pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text dark:from-white dark:to-slate-900/10`},` Fantastic-mobile 真好用 ! `,-1)),e(c,{class:`inset-0 absolute`,color:t(a).currentColorScheme===`dark`?`#FFF`:`#000`,quantity:100,ease:100,staticity:10},null,8,[`color`])])}}}),C=`<script setup lang="ts">
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
`,w=a({__name:`index`,setup(a){return(a,o)=>{let c=l,u=f;return n(),s(u,{navbar:``,"navbar-start-side":`back`},{default:r(()=>[i(`div`,null,[e(c,{code:t(h)},{default:r(()=>[e(m)]),_:1},8,[`code`]),e(c,{code:t(b)},{default:r(()=>[e(y)]),_:1},8,[`code`]),e(c,{code:t(C)},{default:r(()=>[e(S)]),_:1},8,[`code`])])]),_:1})}}});export{w as default};