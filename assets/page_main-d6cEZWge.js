
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,m as t,ut as n,w as r}from"./src-CTlveZFi.js";import{D as i,E as a,On as o,_ as s,k as c,mt as l,qt as u,v as d}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as f}from"./AppPageLayout-DpGpaj5G.js";import"./logo-B9PbTpwo.js";var p={};function m(e,t){let n=r;return l(),d(n,{class:`m-0`},{default:u(()=>[...t[0]||(t[0]=[a(` PageMain 是最常用的页面组件，几乎所有页面都会使用到 `,-1)])]),_:1})}var h=n(p,[[`render`,m]]),g=`<template>
  <FmPageMain class="m-0">
    PageMain 是最常用的页面组件，几乎所有页面都会使用到
  </FmPageMain>
</template>
`,_={};function v(e,t){let n=r;return l(),d(n,{title:`你可以设置一个自定义的标题`,class:`m-0`},{default:u(()=>[...t[0]||(t[0]=[a(` 这里放页面内容 `,-1)])]),_:1})}var y=n(_,[[`render`,v]]),b=`<template>
  <FmPageMain title="你可以设置一个自定义的标题" class="m-0">
    这里放页面内容
  </FmPageMain>
</template>
`,x={},S={class:`flex items-center justify-between`};function C(t,n){let o=e,c=r;return l(),d(c,{class:`m-0`},{title:u(()=>[s(`div`,S,[n[1]||(n[1]=a(` 通过 slot 设置标题 `,-1)),i(o,{size:`sm`,variant:`outline`},{default:u(()=>[...n[0]||(n[0]=[a(` 自定义按钮 `,-1)])]),_:1})])]),default:u(()=>[n[2]||(n[2]=a(` 这里放页面内容 `,-1))]),_:1})}var w=n(x,[[`render`,C]]),T=`<template>
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
`,E={};function D(e,t){let n=r;return l(),d(n,{title:`带展开/收起功能`,collaspe:``,height:`20vh`,class:`m-0`},{default:u(()=>[...t[0]||(t[0]=[s(`h1`,{class:`text-2xl font-bold`},` Fantastic-mobile `,-1),s(`img`,{src:``+new URL(`logo-CvGq432t.png`,import.meta.url).href,class:`w-40`},null,-1)])]),_:1})}var O=n(E,[[`render`,D]]),k=`<template>
  <FmPageMain title="带展开/收起功能" collaspe height="20vh" class="m-0">
    <h1 class="text-2xl font-bold">
      Fantastic-mobile
    </h1>
    <img src="@/assets/images/logo.png" class="w-40">
  </FmPageMain>
</template>
`,A=c({__name:`index`,setup(e){return(e,n)=>{let r=t,a=f;return l(),d(a,{navbar:``,"navbar-start-side":`back`},{default:u(()=>[s(`div`,null,[i(r,{code:o(g)},{default:u(()=>[i(h)]),_:1},8,[`code`]),i(r,{code:o(b)},{default:u(()=>[i(y)]),_:1},8,[`code`]),i(r,{code:o(T)},{default:u(()=>[i(w)]),_:1},8,[`code`]),i(r,{code:o(k)},{default:u(()=>[i(O)]),_:1},8,[`code`])])]),_:1})}}});export{A as default};