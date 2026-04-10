
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,K as r,Ot as i,S as a,lt as o,mt as s,rt as c,v as l,w as u,y as d}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{R as f,c as p}from"./components-BMqlqruM.js";import{a as m}from"./vue-router-DULnEBjf.js";import{r as h}from"./es-BBhGNvTb.js";import{t as g}from"./AppPageLayout-C9-qV5nV.js";var _={class:`p-4 flex flex-col gap-4`},v=u({__name:`custom-area`,setup(u){let v=s(!1),y=s(!1),b=[{name:`选项一`},{name:`选项二`},{name:`选项三`}];function x(e){y.value=!1,h(e.name)}let S=m();return(s,u)=>{let m=p,h=f,C=r(`van-action-sheet`),w=g;return n(),d(w,{navbar:``},{"navbar-start":c(()=>[e(m,{modelValue:t(v),"onUpdate:modelValue":u[0]||(u[0]=e=>o(v)?v.value=e:null)},null,8,[`modelValue`])]),"navbar-end":c(()=>[e(h,{size:`sm`,onClick:u[1]||(u[1]=e=>y.value=!0)},{default:c(()=>[...u[4]||(u[4]=[a(` 操作按钮 `,-1)])]),_:1}),e(C,{show:t(y),"onUpdate:show":u[2]||(u[2]=e=>o(y)?y.value=e:null),actions:b,onSelect:x},null,8,[`show`])]),default:c(()=>[l(`div`,_,[l(`div`,null,` Switch: `+i(t(v)),1),e(h,{onClick:u[3]||(u[3]=e=>t(S).back())},{default:c(()=>[...u[5]||(u[5]=[a(` 返回 `,-1)])]),_:1})])]),_:1})}}});export{v as default};