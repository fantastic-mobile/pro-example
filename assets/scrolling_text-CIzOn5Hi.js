
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{dt as e,m as t,ut as n}from"./src-CTlveZFi.js";import{D as r,E as i,Ht as a,Lt as o,On as s,Zn as c,_ as l,b as u,bt as d,ct as f,er as p,g as m,it as h,k as g,mt as _,nr as v,o as y,qt as b,tt as x,v as S,vn as C,xt as w}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as T}from"./toast-ny_sRYkJ.js";import{t as E}from"./AppPageLayout-DpGpaj5G.js";var D=[`onClick`],O=[`onClick`],k=g({name:`BuiltInScrollingText`,__name:`index`,props:{items:{},visibleCount:{default:1},duration:{default:3e3},transition:{default:500},animation:{default:`slide`},direction:{default:`up`},class:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]}},emits:[`itemClick`],setup(t,{emit:n}){let r=t,l=n,g=C(0),b=C(!1),S=C(!1),T=null,E=C(null),k=C(null),A=C(0),j=null,M=o(),N=m(()=>!!M.item),P=m(()=>N.value&&A.value?A.value:E.value?E.value.clientHeight/r.visibleCount:0),F=m(()=>N.value&&A.value?{height:`${A.value*r.visibleCount}px`}:{}),I=m(()=>r.items.length?r.direction===`down`?Array.from({length:r.visibleCount*2},(e,t)=>{let n=(g.value-r.visibleCount+t+r.items.length)%r.items.length;return{text:r.items[n],originalIndex:n}}):Array.from({length:r.visibleCount*2},(e,t)=>({text:r.items[(g.value+t)%r.items.length],originalIndex:(g.value+t)%r.items.length})):[]),L=m(()=>r.animation===`slide`&&r.direction===`down`?-(P.value*r.visibleCount):0),R=C(null),z=m(()=>({transform:`translateY(${R.value??L.value}px)`,transition:b.value?`transform ${r.transition}ms ease`:`none`})),B=m(()=>({opacity:+!b.value,transition:`opacity ${r.transition}ms ease`}));function V(){S.value||(r.animation===`slide`?r.direction===`up`?(b.value=!0,R.value=-(P.value*r.visibleCount),T=setTimeout(()=>{S.value||(b.value=!1,g.value=(g.value+r.visibleCount)%r.items.length,R.value=null,H())},r.transition)):(b.value=!1,R.value=null,requestAnimationFrame(()=>{requestAnimationFrame(()=>{S.value||(b.value=!0,R.value=0,T=setTimeout(()=>{S.value||(b.value=!1,g.value=(g.value-r.visibleCount+r.items.length)%r.items.length,R.value=null,H())},r.transition))})})):(b.value=!0,T=setTimeout(()=>{S.value||(g.value=r.direction===`up`?(g.value+r.visibleCount)%r.items.length:(g.value-r.visibleCount+r.items.length)%r.items.length,x(()=>{b.value=!1,H()}))},r.transition)))}function H(){T=setTimeout(V,r.duration)}function U(){S.value=!0,T&&(clearTimeout(T),T=null),b.value=!1,R.value=null}function W(){S.value=!1,T&&clearTimeout(T),H()}return a(()=>r.items,()=>{g.value=0,b.value=!1,R.value=null,T&&clearTimeout(T),r.items.length>r.visibleCount&&H()}),f(()=>{r.items.length>r.visibleCount&&H(),j=new ResizeObserver(e=>{let t=e[0]?.contentRect.height;t&&(A.value=t)}),a(k,e=>{j?.disconnect(),e&&j?.observe(e)},{immediate:!0})}),h(()=>{T&&clearTimeout(T),j?.disconnect()}),(t,n)=>(_(),u(`div`,{ref_key:`containerRef`,ref:E,class:c(s(e)(`relative overflow-hidden h-8`,r.class)),style:p(F.value),onMouseenter:U,onMouseleave:W},[r.animation===`slide`?(_(),u(`div`,{key:0,class:`h-full`,style:p(z.value)},[(_(!0),u(y,null,d(I.value,(n,a)=>(_(),u(`div`,{key:`${a}-${n.originalIndex}`,ref_for:!0,ref:e=>{a===0&&(k.value=e)},class:c(s(e)(`flex items-center`,t.$attrs.onItemClick?`cursor-pointer`:``,r.itemClass)),style:p(N.value&&A.value?{height:`${A.value}px`}:{height:`${100/r.visibleCount}%`}),onClick:e=>l(`itemClick`,n.text,n.originalIndex)},[w(t.$slots,`item`,{item:n.text,index:n.originalIndex},()=>[i(v(n.text),1)])],14,D))),128))],4)):(_(),u(`div`,{key:1,class:`h-full`,style:p(B.value)},[(_(!0),u(y,null,d(I.value.slice(0,r.visibleCount),(n,a)=>(_(),u(`div`,{key:n.originalIndex,ref_for:!0,ref:e=>{a===0&&(k.value=e)},class:c(s(e)(`flex items-center`,t.$attrs.onItemClick?`cursor-pointer`:``,r.itemClass)),style:p(N.value&&A.value?{height:`${A.value}px`}:{height:`${100/r.visibleCount}%`}),onClick:e=>l(`itemClick`,n.text,n.originalIndex)},[w(t.$slots,`item`,{item:n.text,index:n.originalIndex},()=>[i(v(n.text),1)])],14,O))),128))],4))],38))}}),A={};function j(e,t){let n=k;return _(),S(n,{items:[`Fantastic-admin v6 正式发布，欢迎体验新特性！`,`框架已支持 Vue 3.6 + Vite 8，性能大幅提升`,`新增 30+ 内建 UI 组件，开箱即用`,`支持亮色/暗色主题，一键切换`],class:`text-sm flex-1 h-6`})}var M=n(A,[[`render`,j]]),N=`<template>
  <FmScrollingText
    :items="[
      'Fantastic-admin v6 正式发布，欢迎体验新特性！',
      '框架已支持 Vue 3.6 + Vite 8，性能大幅提升',
      '新增 30+ 内建 UI 组件，开箱即用',
      '支持亮色/暗色主题，一键切换',
    ]"
    class="text-sm flex-1 h-6"
  />
</template>
`,P={};function F(e,t){let n=k;return _(),S(n,{items:[`公告：系统将于今晚 22:00 进行维护升级`,`新功能：支持批量导出数据，欢迎体验`,`提示：请及时更新您的账户安全信息`],"visible-count":2,animation:`fade`,transition:300,class:`text-sm px-3 border rounded-lg h-16`,"item-class":`border-b border-dashed last:border-0`})}var I=n(P,[[`render`,F]]),L=`<template>
  <FmScrollingText
    :items="[
      '公告：系统将于今晚 22:00 进行维护升级',
      '新功能：支持批量导出数据，欢迎体验',
      '提示：请及时更新您的账户安全信息',
    ]"
    :visible-count="2"
    animation="fade"
    :transition="300"
    class="text-sm px-3 border rounded-lg h-16"
    item-class="border-b border-dashed last:border-0"
  />
</template>
`,R=g({__name:`_demo3`,setup(e){let t=[`点击查看：Vue 3 最佳实践指南`,`点击查看：TypeScript 进阶教程`,`点击查看：Vite 构建优化技巧`,`点击查看：Pinia 状态管理详解`,`点击查看：Fantasic Admin 最新功能介绍`];function n(e,t){T().info(`点击了第 ${t+1} 条：${e}`)}return(e,r)=>{let i=k;return _(),S(i,{items:t,direction:`down`,duration:2e3,class:`text-sm text-primary h-8 cursor-pointer`,onItemClick:n})}}}),z=`<script setup lang="ts">
const items = [
  '点击查看：Vue 3 最佳实践指南',
  '点击查看：TypeScript 进阶教程',
  '点击查看：Vite 构建优化技巧',
  '点击查看：Pinia 状态管理详解',
  '点击查看：Fantasic Admin 最新功能介绍',
]

function handleClick(text: string, index: number) {
  useFmToast().info(\`点击了第 \${index + 1} 条：\${text}\`)
}
<\/script>

<template>
  <FmScrollingText
    :items="items"
    direction="down"
    :duration="2000"
    class="text-sm text-primary h-8 cursor-pointer"
    @item-click="handleClick"
  />
</template>
`,B={class:`py-1 flex gap-2 w-full items-center`},V={class:`text-sm truncate`},H=g({__name:`_demo4`,setup(e){let t=[{tag:`紧急`,text:`系统将于今晚 22:00 进行维护升级`,type:`error`},{tag:`新功能`,text:`支持批量导出数据，欢迎体验`,type:`success`},{tag:`提示`,text:`请及时更新您的账户安全信息`,type:`warning`}];return(e,n)=>{let r=k;return _(),S(r,{items:t.map(e=>e.text)},{item:b(({index:e})=>[l(`div`,B,[l(`span`,{class:c([`text-xs font-medium px-1.5 py-0.5 rounded shrink-0`,{"bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400":t[e].type===`error`,"bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400":t[e].type===`success`,"bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400":t[e].type===`warning`}])},v(t[e].tag),3),l(`span`,V,v(t[e].text),1)])]),_:1},8,[`items`])}}}),U=`<script setup lang="ts">
const notices = [
  { tag: '紧急', text: '系统将于今晚 22:00 进行维护升级', type: 'error' },
  { tag: '新功能', text: '支持批量导出数据，欢迎体验', type: 'success' },
  { tag: '提示', text: '请及时更新您的账户安全信息', type: 'warning' },
]
<\/script>

<template>
  <FmScrollingText :items="notices.map(n => n.text)">
    <template #item="{ index }">
      <div class="py-1 flex gap-2 w-full items-center">
        <span
          class="text-xs font-medium px-1.5 py-0.5 rounded shrink-0"
          :class="{
            'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400': notices[index].type === 'error',
            'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400': notices[index].type === 'success',
            'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400': notices[index].type === 'warning',
          }"
        >
          {{ notices[index].tag }}
        </span>
        <span class="text-sm truncate">{{ notices[index].text }}</span>
      </div>
    </template>
  </FmScrollingText>
</template>
`,W=g({__name:`index`,setup(e){return(e,n)=>{let i=t,a=E;return _(),S(a,{navbar:``,"navbar-start-side":`back`},{default:b(()=>[l(`div`,null,[r(i,{code:s(N)},{default:b(()=>[r(M)]),_:1},8,[`code`]),r(i,{title:`多条可见 + fade 动画`,code:s(L)},{default:b(()=>[r(I)]),_:1},8,[`code`]),r(i,{title:`向下滚动 + 点击事件`,code:s(z)},{default:b(()=>[r(R)]),_:1},8,[`code`]),r(i,{title:`自定义条目 slot`,code:s(U)},{default:b(()=>[r(H)]),_:1},8,[`code`])])]),_:1})}}});export{W as default};