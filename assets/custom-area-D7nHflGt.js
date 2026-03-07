
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as k}from"./index-CZKjdDac.js";import{d as x,g as V,m as g,o as C,c as B,w as t,a as m,t as S,u as s,b as l,_ as $,f as i,i as _,an as F,r as f,br as N}from"./index-D5iw2mOA.js";const y={class:"flex flex-col gap-4 p-4"},h=x({__name:"custom-area",setup(R){const a=f(!1),n=f(!1),p=[{name:"选项一"},{name:"选项二"},{name:"选项三"}];function c(u){n.value=!1,N(u.name)}const d=V();return(u,e)=>{const v=F,r=$,w=g("van-action-sheet"),b=k;return C(),B(b,{navbar:""},{"navbar-start":t(()=>[l(v,{modelValue:s(a),"onUpdate:modelValue":e[0]||(e[0]=o=>_(a)?a.value=o:null)},null,8,["modelValue"])]),"navbar-end":t(()=>[l(r,{size:"sm",onClick:e[1]||(e[1]=o=>n.value=!0)},{default:t(()=>[...e[4]||(e[4]=[i(" 操作按钮 ",-1)])]),_:1}),l(w,{show:s(n),"onUpdate:show":e[2]||(e[2]=o=>_(n)?n.value=o:null),actions:p,onSelect:c},null,8,["show"])]),default:t(()=>[m("div",y,[m("div",null," Switch: "+S(s(a)),1),l(r,{onClick:e[3]||(e[3]=o=>s(d).back())},{default:t(()=>[...e[5]||(e[5]=[i(" 返回 ",-1)])]),_:1})])]),_:1})}}});export{h as default};
