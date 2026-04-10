
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,f as r,mt as i,rt as a,w as o,x as s,y as c}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{P as l,u}from"./components-BMqlqruM.js";import{t as d}from"./AppPageLayout-C9-qV5nV.js";var f=o({__name:`_demo1`,setup(a){let o=i([1,5,2,4,8,3,7]),c=i([{tooltip:`值：1`,value:1},{tooltip:`值：3`,value:3},{tooltip:`值：5`,value:5},{tooltip:`值：8`,value:8},{tooltip:`值：4`,value:4},{tooltip:`值：6`,value:6},{tooltip:`值：9`,value:9}]);return(i,a)=>{let l=u;return n(),s(r,null,[e(l,{value:t(o)},null,8,[`value`]),e(l,{value:t(o),"stroke-color":`#409eff`,"fill-color":`#b3d8ff`},null,8,[`value`]),e(l,{value:t(c),tooltip:``},null,8,[`value`]),e(l,{value:t(c),tooltip:``,"stroke-color":`#409eff`,"fill-color":`#b3d8ff`,"cursor-color":`#e6a23c`,"spot-color":`#909399`},null,8,[`value`])],64)}}}),p=`<script setup lang="ts">
const value1 = ref([1, 5, 2, 4, 8, 3, 7])
const value2 = ref([
  { tooltip: '值：1', value: 1 },
  { tooltip: '值：3', value: 3 },
  { tooltip: '值：5', value: 5 },
  { tooltip: '值：8', value: 8 },
  { tooltip: '值：4', value: 4 },
  { tooltip: '值：6', value: 6 },
  { tooltip: '值：9', value: 9 },
])
<\/script>

<template>
  <FmSparkline :value="value1" />
  <FmSparkline :value="value1" stroke-color="#409eff" fill-color="#b3d8ff" />
  <FmSparkline :value="value2" tooltip />
  <FmSparkline :value="value2" tooltip stroke-color="#409eff" fill-color="#b3d8ff" cursor-color="#e6a23c" spot-color="#909399" />
</template>
`,m=o({__name:`index`,setup(r){return(r,i)=>{let o=l,s=d;return n(),c(s,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[e(o,{code:t(p)},{default:a(()=>[e(f)]),_:1},8,[`code`])]),_:1})}}});export{m as default};