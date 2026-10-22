
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,ct as t,m as n,ut as r}from"./src-CTlveZFi.js";import{D as i,E as a,On as o,_ as s,b as c,k as l,mt as u,qt as d,v as f}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as p}from"./AppPageLayout-DpGpaj5G.js";var m={};function h(e,n){let r=t;return u(),f(r,{icon:`i-lucide:info`,title:`提示信息`,description:`这是一条普通提示，用于展示页面说明或操作反馈。`})}var g=r(m,[[`render`,h]]),_=`<template>
  <FmAlert
    icon="i-lucide:info"
    title="提示信息"
    description="这是一条普通提示，用于展示页面说明或操作反馈。"
  />
</template>
`,v={},y={class:`space-y-4`};function b(e,n){let r=t;return u(),c(`div`,y,[i(r,{icon:`i-lucide:info`,title:`普通提示`,description:`数据已同步完成，可以继续后续操作。`}),i(r,{icon:`i-lucide:circle-alert`,title:`危险提示`,description:`删除后数据将无法恢复，请谨慎操作。`,variant:`destructive`})])}var x=r(v,[[`render`,b]]),S=`<template>
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
`,C={};function w(n,r){let o=e,c=t;return u(),f(c,{icon:`i-lucide:terminal`,title:`命令执行完成`},{description:d(()=>[s(`div`,null,[r[1]||(r[1]=a(` 已成功生成文件，可继续进行下一步操作。 `,-1)),i(o,{variant:`link`,class:`px-0 h-auto`},{default:d(()=>[...r[0]||(r[0]=[a(` 查看详情 `,-1)])]),_:1})])]),_:1})}var T=r(C,[[`render`,w]]),E=`<template>
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
`,D=l({__name:`index`,setup(e){return(e,t)=>{let r=n,a=p;return u(),f(a,{navbar:``,"navbar-start-side":`back`},{default:d(()=>[s(`div`,null,[i(r,{code:o(_)},{default:d(()=>[i(g)]),_:1},8,[`code`]),i(r,{code:o(S),title:`不同样式`},{default:d(()=>[i(x)]),_:1},8,[`code`]),i(r,{code:o(E),title:`自定义描述`},{default:d(()=>[i(T)]),_:1},8,[`code`])])]),_:1})}}});export{D as default};