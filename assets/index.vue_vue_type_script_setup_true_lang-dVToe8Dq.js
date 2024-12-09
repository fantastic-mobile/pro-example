
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{d as m,ad as u,r as b,o,j as a,a9 as n,e as f,t as g,p as r,a as h,u as s,b as v,q as _,X as y,_ as k}from"./index-CsvJ3Gw5.js";const C={key:0,class:"title-container border-b-1 border-b-[var(--g-bg)] border-b-solid px-4 py-3 transition-border-color-300"},S={class:"main-container p-4"},N=m({name:"PageMain",__name:"index",props:{title:{default:""},collaspe:{type:Boolean,default:!1},height:{default:""}},setup(l){const i=l,c=!!u().title,t=b(i.collaspe);function p(){t.value=!1}return(e,x)=>{const d=k;return o(),a("div",{class:_(["page-main relative m-4 flex flex-col bg-[var(--g-container-bg)] transition-background-color-300",{"of-hidden":s(t)}]),style:y({height:s(t)?e.height:""})},[c||e.title?(o(),a("div",C,[n(e.$slots,"title",{},()=>[f(g(e.title),1)])])):r("",!0),h("div",S,[n(e.$slots,"default")]),s(t)?(o(),a("div",{key:1,class:"collaspe absolute bottom-0 w-full cursor-pointer from-transparent to-[var(--g-container-bg)] bg-gradient-to-b pb-2 pt-10 text-center",onClick:p},[v(d,{name:"i-ep:arrow-down",class:"text-xl op-30 transition-opacity hover-op-100"})])):r("",!0)],6)}}});export{N as _};
