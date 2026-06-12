
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,S as r,mt as i,rt as a,v as o,w as s,x as c,y as l}from"./vue.runtime.esm-bundler-DOMO_wpA.js";import{K as u,o as d,x as f}from"./src-C_SUC8up.js";import{t as p}from"./AppPageLayout-CilNLEuS.js";var m=s({__name:`_demo1`,setup(e){let t=[1,5,2,4,8,3,7];return(e,r)=>{let i=d;return n(),l(i,{value:t})}}}),h=`<script setup lang="ts">
const value = [1, 5, 2, 4, 8, 3, 7]
<\/script>

<template>
  <FmSparkline :value="value" />
</template>
`,g=s({__name:`_demo2`,setup(e){let t=[1,5,2,4,8,3,7];return(e,r)=>{let i=d;return n(),l(i,{value:t,"stroke-color":`#409eff`})}}}),_=`<script setup lang="ts">
const value = [1, 5, 2, 4, 8, 3, 7]
<\/script>

<template>
  <FmSparkline :value="value" stroke-color="#409eff" />
</template>
`,v=s({__name:`_demo3`,setup(e){let t=[{tooltip:`1`,value:1},{tooltip:`3`,value:3},{tooltip:`5`,value:5},{tooltip:`8`,value:8},{tooltip:`4`,value:4},{tooltip:`6`,value:6},{tooltip:`9`,value:9}];return(e,r)=>{let i=d;return n(),l(i,{value:t,tooltip:``})}}}),y=`<script setup lang="ts">
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
`,b=s({__name:`_demo4`,setup(e){let t=[1,5,2,4,8,3,7];return(e,r)=>{let i=d;return n(),l(i,{value:t,width:160,height:48})}}}),x=`<script setup lang="ts">
const value = [1, 5, 2, 4, 8, 3, 7]
<\/script>

<template>
  <FmSparkline :value="value" :width="160" :height="48" />
</template>
`,S=s({__name:`_demo5`,setup(e){let t=[1,8,2,9,4,7,5];return(e,r)=>{let i=d;return n(),l(i,{value:t,smooth:``})}}}),C=`<script setup lang="ts">
const value = [1, 8, 2, 9, 4, 7, 5]
<\/script>

<template>
  <FmSparkline :value="value" smooth />
</template>
`,w={class:`flex flex-col gap-4`},T=s({__name:`_demo6`,setup(o){let s=i([12,16,19,23,26,29,33]);function l(){s.value=s.value.map(e=>Math.max(4,e+Math.floor(Math.random()*9)-4))}return(i,o)=>{let f=d,p=u;return n(),c(`div`,w,[e(f,{value:t(s)},null,8,[`value`]),e(p,{class:`self-start`,variant:`outline`,size:`sm`,onClick:l},{default:a(()=>[...o[0]||(o[0]=[r(` 随机刷新 `,-1)])]),_:1})])}}}),E=`<script setup lang="ts">
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
`,D=s({__name:`index`,setup(r){return(r,i)=>{let s=f,c=p;return n(),l(c,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[o(`div`,null,[e(s,{title:`默认`,code:t(h)},{default:a(()=>[e(m)]),_:1},8,[`code`]),e(s,{title:`自定义颜色`,code:t(_)},{default:a(()=>[e(g)]),_:1},8,[`code`]),e(s,{title:`开启 Tooltip`,code:t(y)},{default:a(()=>[e(v)]),_:1},8,[`code`]),e(s,{title:`自定义尺寸`,code:t(x)},{default:a(()=>[e(b)]),_:1},8,[`code`]),e(s,{title:`圆润过渡`,code:t(C)},{default:a(()=>[e(S)]),_:1},8,[`code`]),e(s,{title:`数据更新`,code:t(E)},{default:a(()=>[e(T)]),_:1},8,[`code`])])]),_:1})}}});export{D as default};