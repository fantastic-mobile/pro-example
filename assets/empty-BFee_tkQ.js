
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,S as r,rt as i,v as a,w as o,y as s}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{B as c,I as l,V as u,W as d,j as f,q as p}from"./components-DK30L-iF.js";import{t as m}from"./AppPageLayout-BwSv5Viu.js";var h={},g={class:`flex gap-2`};function _(t,o){let l=c,d=u,p=f;return n(),s(p,{icon:`i-lucide:folder-open`,title:`没有项目`,description:`您尚未创建任何项目，请从创建第一个项目开始`},{default:i(()=>[a(`div`,g,[e(l,null,{default:i(()=>[...o[0]||(o[0]=[r(` 创建项目 `,-1)])]),_:1}),e(l,{variant:`outline`},{default:i(()=>[...o[1]||(o[1]=[r(` 导入项目 `,-1)])]),_:1})]),e(l,{variant:`link`,class:`text-muted-foreground`,size:`sm`},{default:i(()=>[o[2]||(o[2]=r(` 了解更多 `,-1)),e(d,{name:`i-lucide:arrow-up-right`})]),_:1})]),_:1})}var v=d(h,[[`render`,_]]),y=`<template>
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
`,b={};function x(t,a){let o=c,l=f;return n(),s(l,{icon:`i-lucide:cloud`,title:`云盘为空`,description:`将文件上传到云盘，随时随地访问`,class:`border border-dashed`},{default:i(()=>[e(o,{variant:`outline`,size:`sm`},{default:i(()=>[...a[0]||(a[0]=[r(` 上传文件 `,-1)])]),_:1})]),_:1})}var S=d(b,[[`render`,x]]),C=`<template>
  <FmEmpty icon="i-lucide:cloud" title="云盘为空" description="将文件上传到云盘，随时随地访问" class="border border-dashed">
    <FmButton variant="outline" size="sm">
      上传文件
    </FmButton>
  </FmEmpty>
</template>
`,w={};function T(t,a){let o=u,l=c,d=f;return n(),s(d,{icon:`i-lucide:bell`,title:`无通知`,description:`您已收到所有通知。新通知将出现在这里`,class:`h-full from-muted/50 to-transparent from-30% bg-gradient-to-b`},{default:i(()=>[e(l,{variant:`outline`,size:`sm`},{default:i(()=>[e(o,{name:`i-lucide:refresh-ccw`}),a[0]||(a[0]=r(` 刷新 `,-1))]),_:1})]),_:1})}var E=d(w,[[`render`,T]]),D=`<template>
  <FmEmpty icon="i-lucide:bell" title="无通知" description="您已收到所有通知。新通知将出现在这里" class="h-full from-muted/50 to-transparent from-30% bg-gradient-to-b">
    <FmButton variant="outline" size="sm">
      <FmIcon name="i-lucide:refresh-ccw" />
      刷新
    </FmButton>
  </FmEmpty>
</template>
`,O={};function k(t,o){let l=p,u=c,d=f;return n(),s(d,null,{icon:i(()=>[e(l,{src:`https://github.com/hooray.png`,class:`size-20 grayscale`})]),title:i(()=>[...o[0]||(o[0]=[a(`div`,{class:`text-xl`},` 用户离线 `,-1)])]),description:i(()=>[...o[1]||(o[1]=[a(`div`,null,`该用户目前离线`,-1),a(`div`,null,`您可以留言通知他或稍后再试`,-1)])]),default:i(()=>[e(u,null,{default:i(()=>[...o[2]||(o[2]=[r(` 留言 `,-1)])]),_:1})]),_:1})}var A=d(O,[[`render`,k]]),j=`<template>
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
`,M=o({__name:`index`,setup(r){return(r,o)=>{let c=l,u=m;return n(),s(u,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[a(`div`,null,[e(c,{code:t(y)},{default:i(()=>[e(v)]),_:1},8,[`code`]),e(c,{title:`边框`,code:t(C)},{default:i(()=>[e(S)]),_:1},8,[`code`]),e(c,{title:`背景`,code:t(D)},{default:i(()=>[e(E)]),_:1},8,[`code`]),e(c,{title:`插槽`,code:t(j)},{default:i(()=>[e(A)]),_:1},8,[`code`])])]),_:1})}}});export{M as default};