
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{d as f,a0 as m,r as u,k as o,o as a,p as n,a as b,W as r,e as g,t as h,u as s,b as v,f as _,K as y,q as k}from"./index-BuiYM_8b.js";const C={key:0,class:"title-container border-b-1 border-b-[var(--g-bg)] border-b-solid px-4 py-3 transition-border-color-300"},S={class:"main-container p-4"},N=f({name:"PageMain",__name:"index",props:{title:{default:""},collaspe:{type:Boolean,default:!1},height:{default:""}},setup(l){const i=l,c=!!m().title,t=u(i.collaspe);function p(){t.value=!1}return(e,x)=>{const d=_;return a(),o("div",{class:k(["page-main relative m-4 flex flex-col bg-[var(--g-container-bg)] transition-background-color-300",{"of-hidden":s(t)}]),style:y({height:s(t)?e.height:""})},[c||e.title?(a(),o("div",C,[r(e.$slots,"title",{},()=>[g(h(e.title),1)])])):n("",!0),b("div",S,[r(e.$slots,"default")]),s(t)?(a(),o("div",{key:1,class:"collaspe absolute bottom-0 w-full cursor-pointer from-transparent to-[var(--g-container-bg)] bg-gradient-to-b pb-2 pt-10 text-center",onClick:p},[v(d,{name:"i-ep:arrow-down",class:"text-xl op-30 transition-opacity hover-op-100"})])):n("",!0)],6)}}});export{N as _};
