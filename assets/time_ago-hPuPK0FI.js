
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,f as r,rt as i,v as a,w as o,x as s,y as c}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{I as l,W as u,s as d}from"./components-DK30L-iF.js";import{t as f}from"./AppPageLayout-BwSv5Viu.js";var p={};function m(e,t){let r=d;return n(),c(r,{date:new Date},null,8,[`date`])}var h=u(p,[[`render`,m]]),g=`<template>
  <FmTimeAgo :date="new Date()" />
</template>
`,_={};function v(t,i){let o=d;return n(),s(r,null,[i[0]||(i[0]=a(`p`,null,`距离 2020/10/17 ：`,-1)),e(o,{date:new Date(`2020/10/17`)},null,8,[`date`])],64)}var y=u(_,[[`render`,v]]),b=`<template>
  <p>距离 2020/10/17 ：</p>
  <FmTimeAgo :date="new Date('2020/10/17')" />
</template>
`,x={};function S(t,i){let o=d;return n(),s(r,null,[i[0]||(i[0]=a(`p`,null,`显示秒，且更新间隔为1秒`,-1)),e(o,{date:new Date,"update-interval":1e3,"show-second":!0},null,8,[`date`])],64)}var C=u(x,[[`render`,S]]),w=`<template>
  <p>显示秒，且更新间隔为1秒</p>
  <FmTimeAgo :date="new Date()" :update-interval="1000" :show-second="true" />
</template>
`,T=o({__name:`index`,setup(r){return(r,o)=>{let s=l,u=f;return n(),c(u,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[a(`div`,null,[e(s,{code:t(g)},{default:i(()=>[e(h)]),_:1},8,[`code`]),e(s,{code:t(b)},{default:i(()=>[e(y)]),_:1},8,[`code`]),e(s,{code:t(w)},{default:i(()=>[e(C)]),_:1},8,[`code`])])]),_:1})}}});export{T as default};