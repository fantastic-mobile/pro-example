
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,rt as r,w as i,x as a,y as o}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{I as s,P as c,W as l}from"./components-DK30L-iF.js";import{t as u}from"./AppPageLayout-BwSv5Viu.js";var d={},f={class:`flex flex-col gap-4`};function p(t,r){let i=c;return n(),a(`div`,f,[e(i,{title:`总收入`,icon:`i-carbon:currency-yen`,digital:`￥45,231.89`,description:`较上周上升19%`,trend:`up`}),e(i,{title:`订阅数`,icon:`i-mynaui:users`,digital:`+50`,description:`较上周下降3%`,trend:`down`}),e(i,{title:`销售额`,icon:`i-bytesize:creditcard`,digital:`+12,234`,description:`较上周上升55%`,trend:`stable`}),e(i,{title:`活跃用户`,"title-tips":`仅统计近一小时的活跃用户数量`,icon:`i-carbon:activity`,digital:`+573`,description:`较近一小时上升10%`})])}var m=l(d,[[`render`,p]]),h=`<template>
  <div class="flex flex-col gap-4">
    <FmDigitalCard title="总收入" icon="i-carbon:currency-yen" digital="￥45,231.89" description="较上周上升19%" trend="up" />
    <FmDigitalCard title="订阅数" icon="i-mynaui:users" digital="+50" description="较上周下降3%" trend="down" />
    <FmDigitalCard title="销售额" icon="i-bytesize:creditcard" digital="+12,234" description="较上周上升55%" trend="stable" />
    <FmDigitalCard title="活跃用户" title-tips="仅统计近一小时的活跃用户数量" icon="i-carbon:activity" digital="+573" description="较近一小时上升10%" />
  </div>
</template>
`,g=i({__name:`index`,setup(i){return(i,a)=>{let c=s,l=u;return n(),o(l,{navbar:``,"navbar-start-side":`back`},{default:r(()=>[e(c,{code:t(h)},{default:r(()=>[e(m)]),_:1},8,[`code`])]),_:1})}}});export{g as default};