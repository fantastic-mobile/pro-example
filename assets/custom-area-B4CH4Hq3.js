
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{a as k}from"./index-C3UlwTgG.js";import{d as V,r as m,g,m as u,c as C,o as B,w as t,a as p,b as s,t as N,u as l,e as d,i as c,T as S}from"./index-BuiYM_8b.js";const T={class:"flex flex-col gap-4 p-4"},R=V({__name:"custom-area",setup(h){const a=m(!1),n=m(!1),v=[{name:"选项一"},{name:"选项二"},{name:"选项三"}];function f(r){n.value=!1,S(r.name)}const _=g();return(r,e)=>{const w=u("van-switch"),i=u("van-button"),b=u("van-action-sheet"),x=k;return B(),C(x,{navbar:""},{"navbar-start":t(()=>[s(w,{modelValue:l(a),"onUpdate:modelValue":e[0]||(e[0]=o=>c(a)?a.value=o:null),size:"16px"},null,8,["modelValue"])]),"navbar-end":t(()=>[s(i,{size:"small",onClick:e[1]||(e[1]=o=>n.value=!0)},{default:t(()=>e[4]||(e[4]=[d(" 操作按钮 ")])),_:1}),s(b,{show:l(n),"onUpdate:show":e[2]||(e[2]=o=>c(n)?n.value=o:null),actions:v,onSelect:f},null,8,["show"])]),default:t(()=>[p("div",T,[p("div",null," Switch: "+N(l(a)),1),s(i,{onClick:e[3]||(e[3]=o=>l(_).back())},{default:t(()=>e[5]||(e[5]=[d(" 返回 ")])),_:1})])]),_:1})}}});export{R as default};
