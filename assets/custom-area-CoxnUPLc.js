
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,S as t}from"./src-CTlveZFi.js";import{D as n,E as r,On as i,St as a,_ as o,k as s,mt as c,nr as l,qt as u,un as d,v as f,vn as p}from"./runtime-core.esm-bundler-D7siT_TS.js";import{g as m}from"./useApi-CUgTH_jn-DEZp6Kym.js";import{r as h}from"./index-CXygZjsd.js";import{t as g}from"./AppPageLayout-DpGpaj5G.js";var _={class:`p-4 flex flex-col gap-4`},v=s({__name:`custom-area`,setup(s){let v=p(!1),y=p(!1),b=[{name:`选项一`},{name:`选项二`},{name:`选项三`}];function x(e){y.value=!1,h(e.name)}let S=m();return(s,p)=>{let m=t,h=e,C=a(`van-action-sheet`),w=g;return c(),f(w,{navbar:``},{"navbar-start":u(()=>[n(m,{modelValue:i(v),"onUpdate:modelValue":p[0]||(p[0]=e=>d(v)?v.value=e:null)},null,8,[`modelValue`])]),"navbar-end":u(()=>[n(h,{size:`sm`,onClick:p[1]||(p[1]=e=>y.value=!0)},{default:u(()=>[...p[4]||(p[4]=[r(` 操作按钮 `,-1)])]),_:1}),n(C,{show:i(y),"onUpdate:show":p[2]||(p[2]=e=>d(y)?y.value=e:null),actions:b,onSelect:x},null,8,[`show`])]),default:u(()=>[o(`div`,_,[o(`div`,null,` Switch: `+l(i(v)),1),n(h,{onClick:p[3]||(p[3]=e=>i(S).back())},{default:u(()=>[...p[5]||(p[5]=[r(` 返回 `,-1)])]),_:1})])]),_:1})}}});export{v as default};