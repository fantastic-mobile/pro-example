
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,a as t,m as n}from"./src-CTlveZFi.js";import{D as r,E as i,On as a,_ as o,b as s,k as c,mt as l,qt as u,v as d,vn as f}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as p}from"./AppPageLayout-DpGpaj5G.js";var m=c({__name:`_demo1`,setup(e){let n=[1,5,2,4,8,3,7];return(e,r)=>{let i=t;return l(),d(i,{value:n})}}}),h=`<script setup lang="ts">
const value = [1, 5, 2, 4, 8, 3, 7]
<\/script>

<template>
  <FmSparkline :value="value" />
</template>
`,g=c({__name:`_demo2`,setup(e){let n=[1,5,2,4,8,3,7];return(e,r)=>{let i=t;return l(),d(i,{value:n,"stroke-color":`#409eff`})}}}),_=`<script setup lang="ts">
const value = [1, 5, 2, 4, 8, 3, 7]
<\/script>

<template>
  <FmSparkline :value="value" stroke-color="#409eff" />
</template>
`,v=c({__name:`_demo3`,setup(e){let n=[{tooltip:`1`,value:1},{tooltip:`3`,value:3},{tooltip:`5`,value:5},{tooltip:`8`,value:8},{tooltip:`4`,value:4},{tooltip:`6`,value:6},{tooltip:`9`,value:9}];return(e,r)=>{let i=t;return l(),d(i,{value:n,tooltip:``})}}}),y=`<script setup lang="ts">
const value = [
  { tooltip: '1', value: 1 },
  { tooltip: '3', value: 3 },
  { tooltip: '5', value: 5 },
  { tooltip: '8', value: 8 },
  { tooltip: '4', value: 4 },
  { tooltip: '6', value: 6 },
  { tooltip: '9', value: 9 },
]
<\/script>

<template>
  <FmSparkline :value="value" tooltip />
</template>
`,b=c({__name:`_demo4`,setup(e){let n=[1,5,2,4,8,3,7];return(e,r)=>{let i=t;return l(),d(i,{value:n,width:160,height:48})}}}),x=`<script setup lang="ts">
const value = [1, 5, 2, 4, 8, 3, 7]
<\/script>

<template>
  <FmSparkline :value="value" :width="160" :height="48" />
</template>
`,S=c({__name:`_demo5`,setup(e){let n=[1,8,2,9,4,7,5];return(e,r)=>{let i=t;return l(),d(i,{value:n,smooth:``})}}}),C=`<script setup lang="ts">
const value = [1, 8, 2, 9, 4, 7, 5]
<\/script>

<template>
  <FmSparkline :value="value" smooth />
</template>
`,w={class:`flex flex-col gap-4`},T=c({__name:`_demo6`,setup(n){let o=f([12,16,19,23,26,29,33]);function c(){o.value=o.value.map(e=>Math.max(4,e+Math.floor(Math.random()*9)-4))}return(n,d)=>{let f=t,p=e;return l(),s(`div`,w,[r(f,{value:a(o)},null,8,[`value`]),r(p,{class:`self-start`,variant:`outline`,size:`sm`,onClick:c},{default:u(()=>[...d[0]||(d[0]=[i(` 随机刷新 `,-1)])]),_:1})])}}}),E=`<script setup lang="ts">
const value = ref([12, 16, 19, 23, 26, 29, 33])

function randomizeValue() {
  value.value = value.value.map(item => Math.max(4, item + Math.floor(Math.random() * 9) - 4))
}
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <FmSparkline :value="value" />
    <FmButton class="self-start" variant="outline" size="sm" @click="randomizeValue">
      随机刷新
    </FmButton>
  </div>
</template>
`,D=c({__name:`index`,setup(e){return(e,t)=>{let i=n,s=p;return l(),d(s,{navbar:``,"navbar-start-side":`back`},{default:u(()=>[o(`div`,null,[r(i,{title:`默认`,code:a(h)},{default:u(()=>[r(m)]),_:1},8,[`code`]),r(i,{title:`自定义颜色`,code:a(_)},{default:u(()=>[r(g)]),_:1},8,[`code`]),r(i,{title:`开启 Tooltip`,code:a(y)},{default:u(()=>[r(v)]),_:1},8,[`code`]),r(i,{title:`自定义尺寸`,code:a(x)},{default:u(()=>[r(b)]),_:1},8,[`code`]),r(i,{title:`圆润过渡`,code:a(C)},{default:u(()=>[r(S)]),_:1},8,[`code`]),r(i,{title:`数据更新`,code:a(E)},{default:u(()=>[r(T)]),_:1},8,[`code`])])]),_:1})}}});export{D as default};