
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,Tt as r,mt as i,rt as a,v as o,w as s,x as c,y as l}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{$ as u,P as d,et as f}from"./components-BMqlqruM.js";import{t as p}from"./AppPageLayout-C9-qV5nV.js";var m=s({__name:`_demo1`,setup(e){let r=i(0);return setInterval(()=>{r.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(e,i)=>{let a=u;return n(),l(a,{value:t(r),"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])}}}),h=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FmAnimatedCountTo :value will-change class="text-4xl font-bold" />
</template>
`,g=s({__name:`_demo2`,setup(e){let r=i(0);return setInterval(()=>{r.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(e,i)=>{let a=u;return n(),l(a,{value:t(r),prefix:`￥`,suffix:`元`,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])}}}),_=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FmAnimatedCountTo :value prefix="￥" suffix="元" will-change class="text-4xl font-bold" />
</template>
`,v={class:`flex flex-col gap-2`},y=s({__name:`_demo3`,setup(r){let a=i(0);return setInterval(()=>{a.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(r,i)=>{let o=u;return n(),c(`div`,v,[e(o,{value:t(a),trend:1,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`]),e(o,{value:t(a),trend:0,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`]),e(o,{value:t(a),trend:-1,"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])])}}}),b=`<script setup lang="ts">
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
`,x=s({__name:`_demo4`,setup(e){let r=i(0),a=i(0),o=[`en-US`,`en-US`,`fr-FR`,`en-US`,`en-US`,`zh-CN`,`en-US`,`en-US`,`fr-FR`],s=[{},{minimumFractionDigits:2},{style:`currency`,currency:`USD`,currencySign:`accounting`,signDisplay:`always`},{style:`percent`,signDisplay:`always`},{style:`unit`,unit:`meter`,notation:`compact`,minimumFractionDigits:2,maximumFractionDigits:2,signDisplay:`never`},{style:`currency`,currency:`CNY`},{signDisplay:`always`}];return setInterval(()=>{a.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),r.value+=1},2e3),(e,i)=>{let c=u;return n(),l(c,{value:t(a),format:s[t(r)%s.length],locales:o[t(r)%o.length],"will-change":``,class:`text-4xl font-bold`},null,8,[`value`,`format`,`locales`])}}}),S=`<script setup lang="ts">
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
`,C=s({__name:`_demo5`,setup(e){let r=i(0);return setInterval(()=>{r.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(e,i)=>{let a=u;return n(),l(a,{value:t(r),"transform-timing":{duration:750,easing:`ease-out`},"spin-timing":{duration:750,easing:`cubic-bezier(0.175, 0.885, 0.32, 1.275)`},"opacity-timing":{duration:350,easing:`ease-out`},"will-change":``,class:`text-4xl font-bold`},null,8,[`value`])}}}),w=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FmAnimatedCountTo :value :transform-timing="{ duration: 750, easing: 'ease-out' }" :spin-timing="{ duration: 750, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }" :opacity-timing="{ duration: 350, easing: 'ease-out' }" will-change class="text-4xl font-bold" />
</template>
`,T={class:`flex-center-start gap-2`},E=s({__name:`_demo6`,setup(o){let s=i(0),l=i(0);return setInterval(()=>{s.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),l.value+=Math.random()*(Math.random()>.5?1:-1)},2e3),(i,o)=>{let d=u,p=f;return n(),c(`div`,T,[e(p,null,{default:a(()=>[e(d,{value:t(s),locales:`zh-CN`,format:{style:`currency`,currency:`CNY`},"will-change":``,class:`text-4xl font-bold`},null,8,[`value`]),e(d,{value:t(l),locales:`zh-CN`,format:{style:`percent`,maximumFractionDigits:2,signDisplay:`always`},"will-change":``,class:r([`text-2xl text-green-500 font-bold`,{"text-red-500":t(l)<0}])},null,8,[`value`,`class`])]),_:1})])}}}),D=`<script setup lang="ts">
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
`,O=s({__name:`index`,setup(r){return(r,i)=>{let s=d,c=p;return n(),l(c,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[o(`div`,null,[e(s,{code:t(h)},{default:a(()=>[e(m)]),_:1},8,[`code`]),e(s,{title:`前缀/后缀`,code:t(_)},{default:a(()=>[e(g)]),_:1},8,[`code`]),e(s,{title:`方向`,code:t(b)},{default:a(()=>[e(y)]),_:1},8,[`code`]),e(s,{title:`格式化`,code:t(S)},{default:a(()=>[e(x)]),_:1},8,[`code`]),e(s,{title:`时机`,code:t(w)},{default:a(()=>[e(C)]),_:1},8,[`code`]),e(s,{title:`组`,code:t(D)},{default:a(()=>[e(E)]),_:1},8,[`code`])])]),_:1})}}});export{O as default};