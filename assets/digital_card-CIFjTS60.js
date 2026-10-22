
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{m as e,p as t,ut as n}from"./src-CTlveZFi.js";import{D as r,On as i,b as a,k as o,mt as s,qt as c,v as l}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as u}from"./AppPageLayout-DpGpaj5G.js";var d={},f={class:`flex flex-col gap-4`};function p(e,n){let i=t;return s(),a(`div`,f,[r(i,{title:`总收入`,icon:`i-carbon:currency-yen`,digital:`￥45,231.89`,description:`较上周上升19%`,trend:`up`}),r(i,{title:`订阅数`,icon:`i-mynaui:users`,digital:`+50`,description:`较上周下降3%`,trend:`down`}),r(i,{title:`销售额`,icon:`i-bytesize:creditcard`,digital:`+12,234`,description:`较上周上升55%`,trend:`stable`}),r(i,{title:`活跃用户`,"title-tips":`仅统计近一小时的活跃用户数量`,icon:`i-carbon:activity`,digital:`+573`,description:`较近一小时上升10%`})])}var m=n(d,[[`render`,p]]),h=`<template>
  <div class="flex flex-col gap-4">
    <FmDigitalCard title="总收入" icon="i-carbon:currency-yen" digital="￥45,231.89" description="较上周上升19%" trend="up" />
    <FmDigitalCard title="订阅数" icon="i-mynaui:users" digital="+50" description="较上周下降3%" trend="down" />
    <FmDigitalCard title="销售额" icon="i-bytesize:creditcard" digital="+12,234" description="较上周上升55%" trend="stable" />
    <FmDigitalCard title="活跃用户" title-tips="仅统计近一小时的活跃用户数量" icon="i-carbon:activity" digital="+573" description="较近一小时上升10%" />
  </div>
</template>
`,g=o({__name:`index`,setup(t){return(t,n)=>{let a=e,o=u;return s(),l(o,{navbar:``,"navbar-start-side":`back`},{default:c(()=>[r(a,{code:i(h)},{default:c(()=>[r(m)]),_:1},8,[`code`])]),_:1})}}});export{g as default};