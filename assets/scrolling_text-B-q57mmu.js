
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,Ot as r,Tt as i,rt as a,v as o,w as s,y as c}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{H as l,P as u,h as d,r as f}from"./components-BMqlqruM.js";import{t as p}from"./AppPageLayout-C9-qV5nV.js";var m={};function h(e,t){let r=d;return n(),c(r,{items:[`Fantastic-admin v6 正式发布，欢迎体验新特性！`,`框架已支持 Vue 3.6 + Vite 8，性能大幅提升`,`新增 30+ 内建 UI 组件，开箱即用`,`支持亮色/暗色主题，一键切换`],class:`text-sm flex-1 h-6`})}var g=l(m,[[`render`,h]]),_=`<template>
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
`,v={};function y(e,t){let r=d;return n(),c(r,{items:[`公告：系统将于今晚 22:00 进行维护升级`,`新功能：支持批量导出数据，欢迎体验`,`提示：请及时更新您的账户安全信息`],"visible-count":2,animation:`fade`,transition:300,class:`text-sm px-3 border rounded-lg h-16`,"item-class":`border-b border-dashed last:border-0`})}var b=l(v,[[`render`,y]]),x=`<template>
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
`,S=s({__name:`_demo3`,setup(e){let t=[`点击查看：Vue 3 最佳实践指南`,`点击查看：TypeScript 进阶教程`,`点击查看：Vite 构建优化技巧`,`点击查看：Pinia 状态管理详解`,`点击查看：Fantasic Admin 最新功能介绍`];function r(e,t){f.info(`点击了第 ${t+1} 条：${e}`)}return(e,i)=>{let a=d;return n(),c(a,{items:t,direction:`down`,duration:2e3,class:`text-sm text-primary h-8 cursor-pointer`,onItemClick:r})}}}),C=`<script setup lang="ts">
const items = [
  '点击查看：Vue 3 最佳实践指南',
  '点击查看：TypeScript 进阶教程',
  '点击查看：Vite 构建优化技巧',
  '点击查看：Pinia 状态管理详解',
  '点击查看：Fantasic Admin 最新功能介绍',
]

function handleClick(text: string, index: number) {
  fmToast.info(\`点击了第 \${index + 1} 条：\${text}\`)
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
`,w={class:`py-1 flex gap-2 w-full items-center`},T={class:`text-sm truncate`},E=s({__name:`_demo4`,setup(e){let t=[{tag:`紧急`,text:`系统将于今晚 22:00 进行维护升级`,type:`error`},{tag:`新功能`,text:`支持批量导出数据，欢迎体验`,type:`success`},{tag:`提示`,text:`请及时更新您的账户安全信息`,type:`warning`}];return(e,s)=>{let l=d;return n(),c(l,{items:t.map(e=>e.text)},{item:a(({index:e})=>[o(`div`,w,[o(`span`,{class:i([`text-xs font-medium px-1.5 py-0.5 rounded shrink-0`,{"bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400":t[e].type===`error`,"bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400":t[e].type===`success`,"bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400":t[e].type===`warning`}])},r(t[e].tag),3),o(`span`,T,r(t[e].text),1)])]),_:1},8,[`items`])}}}),D=`<script setup lang="ts">
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
`,O=s({__name:`index`,setup(r){return(r,i)=>{let s=u,l=p;return n(),c(l,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[o(`div`,null,[e(s,{code:t(_)},{default:a(()=>[e(g)]),_:1},8,[`code`]),e(s,{title:`多条可见 + fade 动画`,code:t(x)},{default:a(()=>[e(b)]),_:1},8,[`code`]),e(s,{title:`向下滚动 + 点击事件`,code:t(C)},{default:a(()=>[e(S)]),_:1},8,[`code`]),e(s,{title:`自定义条目 slot`,code:t(D)},{default:a(()=>[e(E)]),_:1},8,[`code`])])]),_:1})}}});export{O as default};