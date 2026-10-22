
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{_ as e,g as t,m as n}from"./src-CTlveZFi.js";import{D as r,On as i,Zn as a,_ as o,b as s,k as c,mt as l,qt as u,v as d,vn as f}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as p}from"./AppPageLayout-DpGpaj5G.js";var m=c({__name:`_demo1`,setup(e){let n=f(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(e,r)=>{let a=t;return l(),d(a,{value:i(n),"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])}}}),h=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FmAnimatedCountTo :value will-change class="text-4xl font-bold" />
</template>
`,g=c({__name:`_demo2`,setup(e){let n=f(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(e,r)=>{let a=t;return l(),d(a,{value:i(n),prefix:`￥`,suffix:`元`,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])}}}),_=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FmAnimatedCountTo :value prefix="￥" suffix="元" will-change class="text-4xl font-bold" />
</template>
`,v={class:`flex flex-col gap-2`},y=c({__name:`_demo3`,setup(e){let n=f(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(e,a)=>{let o=t;return l(),s(`div`,v,[r(o,{value:i(n),trend:1,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`]),r(o,{value:i(n),trend:0,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`]),r(o,{value:i(n),trend:-1,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])])}}}),b=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <FmAnimatedCountTo :value :trend="1" will-change class="text-4xl font-bold" />
    <FmAnimatedCountTo :value :trend="0" will-change class="text-4xl font-bold" />
    <FmAnimatedCountTo :value :trend="-1" will-change class="text-4xl font-bold" />
  </div>
</template>
`,x=c({__name:`_demo4`,setup(e){let n=f(0),r=f(0),a=[`en-US`,`en-US`,`fr-FR`,`en-US`,`en-US`,`zh-CN`,`en-US`,`en-US`,`fr-FR`],o=[{},{minimumFractionDigits:2},{style:`currency`,currency:`USD`,currencySign:`accounting`,signDisplay:`always`},{style:`percent`,signDisplay:`always`},{style:`unit`,unit:`meter`,notation:`compact`,minimumFractionDigits:2,maximumFractionDigits:2,signDisplay:`never`},{style:`currency`,currency:`CNY`},{signDisplay:`always`}];return setInterval(()=>{r.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),n.value+=1},2e3),(e,s)=>{let c=t;return l(),d(c,{value:i(r),format:o[i(n)%o.length],locales:a[i(n)%a.length],"will-change":``,class:`text-4xl font-bold`},null,8,[`value`,`format`,`locales`])}}}),S=`<script setup lang="ts">
const index = ref(0)
const value = ref(0)

const LOCALES = ['en-US', 'en-US', 'fr-FR', 'en-US', 'en-US', 'zh-CN', 'en-US', 'en-US', 'fr-FR']
const FORMATS = [
  {},
  {
    minimumFractionDigits: 2,
  },
  {
    style: 'currency',
    currency: 'USD',
    currencySign: 'accounting',
    signDisplay: 'always',
  },
  {
    style: 'percent',
    signDisplay: 'always',
  },
  {
    style: 'unit',
    unit: 'meter',
    notation: 'compact',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'never',
  },
  {
    style: 'currency',
    currency: 'CNY',
  },
  {
    signDisplay: 'always',
  },
]

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
  index.value += 1
}, 2000)
<\/script>

<template>
  <FmAnimatedCountTo
    :value
    :format="FORMATS[index % FORMATS.length] as any"
    :locales="LOCALES[index % LOCALES.length]"
    will-change
    class="text-4xl font-bold"
  />
</template>
`,C=c({__name:`_demo5`,setup(e){let n=f(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(e,r)=>{let a=t;return l(),d(a,{value:i(n),"transform-timing":{duration:750,easing:`ease-out`},"spin-timing":{duration:750,easing:`cubic-bezier(0.175, 0.885, 0.32, 1.275)`},"opacity-timing":{duration:350,easing:`ease-out`},"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])}}}),w=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FmAnimatedCountTo :value :transform-timing="{ duration: 750, easing: 'ease-out' }" :spin-timing="{ duration: 750, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }" :opacity-timing="{ duration: 350, easing: 'ease-out' }" will-change class="text-4xl font-bold" />
</template>
`,T={class:`flex-center-start gap-2`},E=c({__name:`_demo6`,setup(n){let o=f(0),c=f(0);return setInterval(()=>{o.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),c.value+=Math.random()*(Math.random()>.5?1:-1)},2e3),(n,d)=>{let f=t,p=e;return l(),s(`div`,T,[r(p,null,{default:u(()=>[r(f,{value:i(o),locales:`zh-CN`,format:{style:`currency`,currency:`CNY`},"will-change":``,class:`text-4xl font-bold`},null,8,[`value`]),r(f,{value:i(c),locales:`zh-CN`,format:{style:`percent`,maximumFractionDigits:2,signDisplay:`always`},"will-change":``,class:a([`text-2xl text-green-500 font-bold`,{"text-red-500":i(c)<0}])},null,8,[`value`,`class`])]),_:1})])}}}),D=`<script setup lang="ts">
const value1 = ref(0)
const value2 = ref(0)

setInterval(() => {
  value1.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
  value2.value += Math.random() * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <div class="flex-center-start gap-2">
    <FmAnimatedCountToGroup>
      <FmAnimatedCountTo :value="value1" locales="zh-CN" :format="{ style: 'currency', currency: 'CNY' }" will-change class="text-4xl font-bold" />
      <FmAnimatedCountTo :value="value2" locales="zh-CN" :format="{ style: 'percent', maximumFractionDigits: 2, signDisplay: 'always' }" will-change class="text-2xl text-green-500 font-bold" :class="{ 'text-red-500': value2 < 0 }" />
    </FmAnimatedCountToGroup>
  </div>
</template>
`,O=c({__name:`index`,setup(e){return(e,t)=>{let a=n,s=p;return l(),d(s,{navbar:``,"navbar-start-side":`back`},{default:u(()=>[o(`div`,null,[r(a,{code:i(h)},{default:u(()=>[r(m)]),_:1},8,[`code`]),r(a,{title:`前缀/后缀`,code:i(_)},{default:u(()=>[r(g)]),_:1},8,[`code`]),r(a,{title:`方向`,code:i(b)},{default:u(()=>[r(y)]),_:1},8,[`code`]),r(a,{title:`格式化`,code:i(S)},{default:u(()=>[r(x)]),_:1},8,[`code`]),r(a,{title:`时机`,code:i(w)},{default:u(()=>[r(C)]),_:1},8,[`code`]),r(a,{title:`组`,code:i(D)},{default:u(()=>[r(E)]),_:1},8,[`code`])])]),_:1})}}});export{O as default};