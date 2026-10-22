
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{Tt as e,m as t,ut as n}from"./src-CTlveZFi.js";import{D as r,On as i,_ as a,b as o,k as s,mt as c,nr as l,o as u,qt as d,v as f}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as p}from"./AppPageLayout-DpGpaj5G.js";var m=s({name:`BuiltInTimeAgo`,__name:`index`,props:{date:{default:()=>new Date},max:{},messages:{default:()=>({justNow:`刚刚`,past:e=>/\d/.test(e)?`${e}前`:e,future:e=>/\d/.test(e)?`${e}后`:e,month:(e,t)=>e===1?t?`上个月`:`下个月`:`${e} 月`,year:(e,t)=>e===1?t?`去年`:`明年`:`${e} 年`,day:(e,t)=>e===1?t?`昨天`:`明天`:`${e} 天`,week:(e,t)=>e===1?t?`上周`:`下周`:`${e} 周`,hour:e=>`${e} 小时`,minute:e=>`${e} 分钟`,second:e=>`${e} 秒`,invalid:``})},showSecond:{type:Boolean},updateInterval:{default:3e4}},setup(t){let n=t,r=e(n.date,{messages:n.messages,max:n.max,showSecond:n.showSecond,updateInterval:n.updateInterval});return(e,t)=>(c(),o(`span`,null,l(i(r)),1))}}),h={};function g(e,t){let n=m;return c(),f(n,{date:new Date},null,8,[`date`])}var _=n(h,[[`render`,g]]),v=`<template>
  <FmTimeAgo :date="new Date()" />
</template>
`,y={};function b(e,t){let n=m;return c(),o(u,null,[t[0]||(t[0]=a(`p`,null,`距离 2020/10/17 ：`,-1)),r(n,{date:new Date(`2020/10/17`)},null,8,[`date`])],64)}var x=n(y,[[`render`,b]]),S=`<template>
  <p>距离 2020/10/17 ：</p>
  <FmTimeAgo :date="new Date('2020/10/17')" />
</template>
`,C={};function w(e,t){let n=m;return c(),o(u,null,[t[0]||(t[0]=a(`p`,null,`显示秒，且更新间隔为1秒`,-1)),r(n,{date:new Date,"update-interval":1e3,"show-second":!0},null,8,[`date`])],64)}var T=n(C,[[`render`,w]]),E=`<template>
  <p>显示秒，且更新间隔为1秒</p>
  <FmTimeAgo :date="new Date()" :update-interval="1000" :show-second="true" />
</template>
`,D=s({__name:`index`,setup(e){return(e,n)=>{let o=t,s=p;return c(),f(s,{navbar:``,"navbar-start-side":`back`},{default:d(()=>[a(`div`,null,[r(o,{code:i(v)},{default:d(()=>[r(_)]),_:1},8,[`code`]),r(o,{code:i(S)},{default:d(()=>[r(x)]),_:1},8,[`code`]),r(o,{code:i(E)},{default:d(()=>[r(T)]),_:1},8,[`code`])])]),_:1})}}});export{D as default};