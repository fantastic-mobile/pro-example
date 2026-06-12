
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,S as r,rt as i,v as a,w as o,x as s,y as c}from"./vue.runtime.esm-bundler-DOMO_wpA.js";import{K as l,Q as u,et as d,x as f}from"./src-C_SUC8up.js";import{t as p}from"./AppPageLayout-CilNLEuS.js";var m={};function h(e,t){let r=u;return n(),c(r,{icon:`i-lucide:info`,title:`提示信息`,description:`这是一条普通提示，用于展示页面说明或操作反馈。`})}var g=d(m,[[`render`,h]]),_=`<template>
  <FmAlert
    icon="i-lucide:info"
    title="提示信息"
    description="这是一条普通提示，用于展示页面说明或操作反馈。"
  />
</template>
`,v={},y={class:`space-y-4`};function b(t,r){let i=u;return n(),s(`div`,y,[e(i,{icon:`i-lucide:info`,title:`普通提示`,description:`数据已同步完成，可以继续后续操作。`}),e(i,{icon:`i-lucide:circle-alert`,title:`危险提示`,description:`删除后数据将无法恢复，请谨慎操作。`,variant:`destructive`})])}var x=d(v,[[`render`,b]]),S=`<template>
  <div class="space-y-4">
    <FmAlert
      icon="i-lucide:info"
      title="普通提示"
      description="数据已同步完成，可以继续后续操作。"
    />
    <FmAlert
      icon="i-lucide:circle-alert"
      title="危险提示"
      description="删除后数据将无法恢复，请谨慎操作。"
      variant="destructive"
    />
  </div>
</template>
`,C={};function w(t,o){let s=l,d=u;return n(),c(d,{icon:`i-lucide:terminal`,title:`命令执行完成`},{description:i(()=>[a(`div`,null,[o[1]||(o[1]=r(` 已成功生成文件，可继续进行下一步操作。 `,-1)),e(s,{variant:`link`,class:`px-0 h-auto`},{default:i(()=>[...o[0]||(o[0]=[r(` 查看详情 `,-1)])]),_:1})])]),_:1})}var T=d(C,[[`render`,w]]),E=`<template>
  <FmAlert icon="i-lucide:terminal" title="命令执行完成">
    <template #description>
      <div>
        已成功生成文件，可继续进行下一步操作。
        <FmButton variant="link" class="px-0 h-auto">
          查看详情
        </FmButton>
      </div>
    </template>
  </FmAlert>
</template>
`,D=o({__name:`index`,setup(r){return(r,o)=>{let s=f,l=p;return n(),c(l,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[a(`div`,null,[e(s,{code:t(_)},{default:i(()=>[e(g)]),_:1},8,[`code`]),e(s,{code:t(S),title:`不同样式`},{default:i(()=>[e(x)]),_:1},8,[`code`]),e(s,{code:t(E),title:`自定义描述`},{default:i(()=>[e(T)]),_:1},8,[`code`])])]),_:1})}}});export{D as default};