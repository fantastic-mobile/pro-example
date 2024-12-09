
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as x}from"./index-0rsl5P6g.js";import{d as V,r as m,c as C,w as t,k as g,m as u,o as B,b as s,u as l,i as p,e as d,a as c,t as N,a6 as S}from"./index-CsvJ3Gw5.js";const h={class:"flex flex-col gap-4 p-4"},T=V({__name:"custom-area",setup(y){const a=m(!1),n=m(!1),v=[{name:"选项一"},{name:"选项二"},{name:"选项三"}];function _(r){n.value=!1,S(r.name)}const f=g();return(r,e)=>{const w=u("van-switch"),i=u("van-button"),b=u("van-action-sheet"),k=x;return B(),C(k,{navbar:""},{"navbar-start":t(()=>[s(w,{modelValue:l(a),"onUpdate:modelValue":e[0]||(e[0]=o=>p(a)?a.value=o:null),size:"16px"},null,8,["modelValue"])]),"navbar-end":t(()=>[s(i,{size:"small",onClick:e[1]||(e[1]=o=>n.value=!0)},{default:t(()=>e[4]||(e[4]=[d(" 操作按钮 ")])),_:1}),s(b,{show:l(n),"onUpdate:show":e[2]||(e[2]=o=>p(n)?n.value=o:null),actions:v,onSelect:_},null,8,["show"])]),default:t(()=>[c("div",h,[c("div",null," Switch: "+N(l(a)),1),s(i,{onClick:e[3]||(e[3]=o=>l(f).back())},{default:t(()=>e[5]||(e[5]=[d(" 返回 ")])),_:1})])]),_:1})}}});export{T as default};
