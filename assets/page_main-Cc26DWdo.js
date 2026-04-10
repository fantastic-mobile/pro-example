
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,S as r,rt as i,v as a,w as o,y as s}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{F as c,H as l,P as u,R as d}from"./components-BMqlqruM.js";import{t as f}from"./AppPageLayout-C9-qV5nV.js";import"./logo-VMOXMTtL.js";var p={};function m(e,t){let a=c;return n(),s(a,{class:`m-0`},{default:i(()=>[...t[0]||(t[0]=[r(` PageMain 是最常用的页面组件，几乎所有页面都会使用到 `,-1)])]),_:1})}var h=l(p,[[`render`,m]]),g=`<template>
  <FmPageMain class="m-0">
    PageMain 是最常用的页面组件，几乎所有页面都会使用到
  </FmPageMain>
</template>
`,_={};function v(e,t){let a=c;return n(),s(a,{title:`你可以设置一个自定义的标题`,class:`m-0`},{default:i(()=>[...t[0]||(t[0]=[r(` 这里放页面内容 `,-1)])]),_:1})}var y=l(_,[[`render`,v]]),b=`<template>
  <FmPageMain title="你可以设置一个自定义的标题" class="m-0">
    这里放页面内容
  </FmPageMain>
</template>
`,x={},S={class:`flex items-center justify-between`};function C(t,o){let l=d,u=c;return n(),s(u,{class:`m-0`},{title:i(()=>[a(`div`,S,[o[1]||(o[1]=r(` 通过 slot 设置标题 `,-1)),e(l,{size:`sm`,variant:`outline`},{default:i(()=>[...o[0]||(o[0]=[r(` 自定义按钮 `,-1)])]),_:1})])]),default:i(()=>[o[2]||(o[2]=r(` 这里放页面内容 `,-1))]),_:1})}var w=l(x,[[`render`,C]]),T=`<template>
  <FmPageMain class="m-0">
    <template #title>
      <div class="flex items-center justify-between">
        通过 slot 设置标题
        <FmButton size="sm" variant="outline">
          自定义按钮
        </FmButton>
      </div>
    </template>
    这里放页面内容
  </FmPageMain>
</template>
`,E={};function D(e,t){let r=c;return n(),s(r,{title:`带展开/收起功能`,collaspe:``,height:`20vh`,class:`m-0`},{default:i(()=>[...t[0]||(t[0]=[a(`h1`,{class:`text-2xl font-bold`},` Fantastic-mobile `,-1),a(`img`,{src:``+new URL(`logo-CvGq432t.png`,import.meta.url).href,class:`w-40`},null,-1)])]),_:1})}var O=l(E,[[`render`,D]]),k=`<template>
  <FmPageMain title="带展开/收起功能" collaspe height="20vh" class="m-0">
    <h1 class="text-2xl font-bold">
      Fantastic-mobile
    </h1>
    <img src="@/assets/images/logo.png" class="w-40">
  </FmPageMain>
</template>
`,A=o({__name:`index`,setup(r){return(r,o)=>{let c=u,l=f;return n(),s(l,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[a(`div`,null,[e(c,{code:t(g)},{default:i(()=>[e(h)]),_:1},8,[`code`]),e(c,{code:t(b)},{default:i(()=>[e(y)]),_:1},8,[`code`]),e(c,{code:t(T)},{default:i(()=>[e(w)]),_:1},8,[`code`]),e(c,{code:t(k)},{default:i(()=>[e(O)]),_:1},8,[`code`])])]),_:1})}}});export{A as default};