
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as v}from"./index-DWv0hsML.js";import{d as b,r as t,h as x,c as k,w as y,a7 as w,Y as B,o as l,a as p,j as g,n as H,u as c,F as R,t as m}from"./index-BoebyoP1.js";const L={class:"m-4 flex flex-col gap-4"},j={class:"flex items-center justify-between gap-4 whitespace-nowrap text-sm text-stone-4 font-500 after:h-[1px] after:w-full before:h-[1px] before:w-full after:bg-stone-2 before:bg-stone-2 dark-text-stone-6 after:content-empty before:content-empty after:dark-bg-stone-6 before:dark-bg-stone-6"},N=b({__name:"loadmore",setup(C){const o=t(),f=t(0),i=t(10),a=t(0),e=t([]);function n(){w.get("page/loadmore",{baseURL:"/mock",params:{from:f.value*i.value,limit:i.value}}).then(s=>{e.value.push(...s.data.list),f.value+=1,a.value=s.data.total,B(()=>{const u=o.value.ref.clientHeight,r=o.value.ref.scrollHeight;u===r&&e.value.length<a.value&&n()})})}function d(){e.value.length<a.value&&n()}return x(()=>{n()}),(s,u)=>{const r=v;return l(),k(r,{ref_key:"layoutRef",ref:o,navbar:"","navbar-start-side":"back",onReachBottom:d},{default:y(()=>[p("div",L,[(l(!0),g(R,null,H(c(e),(_,h)=>(l(),g("div",{key:h,class:"bg-[var(--g-container-bg)] p-4"},m(_),1))),128)),p("div",j,m(c(e).length<c(a)?"加载更多":"已经到底啦"),1)])]),_:1},512)}}});export{N as default};
