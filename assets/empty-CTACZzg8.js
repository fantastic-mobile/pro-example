
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,f as t,lt as n,m as r,ut as i}from"./src-CTlveZFi.js";import{D as a,E as o,On as s,_ as c,k as l,mt as u,qt as d,v as f}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as p}from"./avatar-CXRodyAZ.js";import{t as m}from"./AppPageLayout-DpGpaj5G.js";var h={},g={class:`flex gap-2`};function _(r,i){let s=e,l=n,p=t;return u(),f(p,{icon:`i-lucide:folder-open`,title:`没有项目`,description:`您尚未创建任何项目，请从创建第一个项目开始`},{default:d(()=>[c(`div`,g,[a(s,null,{default:d(()=>[...i[0]||(i[0]=[o(` 创建项目 `,-1)])]),_:1}),a(s,{variant:`outline`},{default:d(()=>[...i[1]||(i[1]=[o(` 导入项目 `,-1)])]),_:1})]),a(s,{variant:`link`,class:`text-muted-foreground`,size:`sm`},{default:d(()=>[i[2]||(i[2]=o(` 了解更多 `,-1)),a(l,{name:`i-lucide:arrow-up-right`})]),_:1})]),_:1})}var v=i(h,[[`render`,_]]),y=`<template>
  <FmEmpty icon="i-lucide:folder-open" title="没有项目" description="您尚未创建任何项目，请从创建第一个项目开始">
    <div class="flex gap-2">
      <FmButton>
        创建项目
      </FmButton>
      <FmButton variant="outline">
        导入项目
      </FmButton>
    </div>
    <FmButton variant="link" class="text-muted-foreground" size="sm">
      了解更多 <FmIcon name="i-lucide:arrow-up-right" />
    </FmButton>
  </FmEmpty>
</template>
`,b={};function x(n,r){let i=e,s=t;return u(),f(s,{icon:`i-lucide:cloud`,title:`云盘为空`,description:`将文件上传到云盘，随时随地访问`,class:`border border-dashed`},{default:d(()=>[a(i,{variant:`outline`,size:`sm`},{default:d(()=>[...r[0]||(r[0]=[o(` 上传文件 `,-1)])]),_:1})]),_:1})}var S=i(b,[[`render`,x]]),C=`<template>
  <FmEmpty icon="i-lucide:cloud" title="云盘为空" description="将文件上传到云盘，随时随地访问" class="border border-dashed">
    <FmButton variant="outline" size="sm">
      上传文件
    </FmButton>
  </FmEmpty>
</template>
`,w={};function T(r,i){let s=n,c=e,l=t;return u(),f(l,{icon:`i-lucide:bell`,title:`无通知`,description:`您已收到所有通知。新通知将出现在这里`,class:`h-full from-muted/50 to-transparent from-30% bg-gradient-to-b`},{default:d(()=>[a(c,{variant:`outline`,size:`sm`},{default:d(()=>[a(s,{name:`i-lucide:refresh-ccw`}),i[0]||(i[0]=o(` 刷新 `,-1))]),_:1})]),_:1})}var E=i(w,[[`render`,T]]),D=`<template>
  <FmEmpty icon="i-lucide:bell" title="无通知" description="您已收到所有通知。新通知将出现在这里" class="h-full from-muted/50 to-transparent from-30% bg-gradient-to-b">
    <FmButton variant="outline" size="sm">
      <FmIcon name="i-lucide:refresh-ccw" />
      刷新
    </FmButton>
  </FmEmpty>
</template>
`,O={};function k(n,r){let i=p,s=e,l=t;return u(),f(l,null,{icon:d(()=>[a(i,{src:`https://github.com/hooray.png`,class:`size-20 grayscale`})]),title:d(()=>[...r[0]||(r[0]=[c(`div`,{class:`text-xl`},` 用户离线 `,-1)])]),description:d(()=>[...r[1]||(r[1]=[c(`div`,null,`该用户目前离线`,-1),c(`div`,null,`您可以留言通知他或稍后再试`,-1)])]),default:d(()=>[a(s,null,{default:d(()=>[...r[2]||(r[2]=[o(` 留言 `,-1)])]),_:1})]),_:1})}var A=i(O,[[`render`,k]]),j=`<template>
  <FmEmpty>
    <template #icon>
      <FmAvatar src="https://github.com/hooray.png" class="size-20 grayscale" />
    </template>
    <template #title>
      <div class="text-xl">
        用户离线
      </div>
    </template>
    <template #description>
      <div>该用户目前离线</div>
      <div>您可以留言通知他或稍后再试</div>
    </template>
    <FmButton>
      留言
    </FmButton>
  </FmEmpty>
</template>
`,M=l({__name:`index`,setup(e){return(e,t)=>{let n=r,i=m;return u(),f(i,{navbar:``,"navbar-start-side":`back`},{default:d(()=>[c(`div`,null,[a(n,{code:s(y)},{default:d(()=>[a(v)]),_:1},8,[`code`]),a(n,{title:`边框`,code:s(C)},{default:d(()=>[a(S)]),_:1},8,[`code`]),a(n,{title:`背景`,code:s(D)},{default:d(()=>[a(E)]),_:1},8,[`code`]),a(n,{title:`插槽`,code:s(j)},{default:d(()=>[a(A)]),_:1},8,[`code`])])]),_:1})}}});export{M as default};