
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as k}from"./index--3D-Wt3r.js";import{d as x,r,g as V,m as g,c as C,o as B,w as t,a as i,b as s,t as S,u as l,_ as $,e as _,i as p,ai as F,bn as N}from"./index-U1W1hkh6.js";const y={class:"flex flex-col gap-4 p-4"},h=x({__name:"custom-area",setup(R){const a=r(!1),n=r(!1),c=[{name:"选项一"},{name:"选项二"},{name:"选项三"}];function d(u){n.value=!1,N(u.name)}const f=V();return(u,e)=>{const v=F,m=$,w=g("van-action-sheet"),b=k;return B(),C(b,{navbar:""},{"navbar-start":t(()=>[s(v,{modelValue:l(a),"onUpdate:modelValue":e[0]||(e[0]=o=>p(a)?a.value=o:null)},null,8,["modelValue"])]),"navbar-end":t(()=>[s(m,{size:"sm",onClick:e[1]||(e[1]=o=>n.value=!0)},{default:t(()=>e[4]||(e[4]=[_(" 操作按钮 ")])),_:1,__:[4]}),s(w,{show:l(n),"onUpdate:show":e[2]||(e[2]=o=>p(n)?n.value=o:null),actions:c,onSelect:d},null,8,["show"])]),default:t(()=>[i("div",y,[i("div",null," Switch: "+S(l(a)),1),s(m,{onClick:e[3]||(e[3]=o=>l(f).back())},{default:t(()=>e[5]||(e[5]=[_(" 返回 ")])),_:1,__:[5]})])]),_:1})}}});export{h as default};
