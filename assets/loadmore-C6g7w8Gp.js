
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as v}from"./index-C0aM3m2R.js";import{d as h,U as k,r as a,j as x,c as y,o as r,w,a as p,k as m,F as R,n as B,u as c,t as g,bp as H,S as F}from"./index-D1JO3_V0.js";const L={class:"m-4 flex flex-col gap-4"},S={class:"flex items-center justify-between gap-4 whitespace-nowrap text-sm text-stone-4 font-500 after:h-[1px] after:w-full before:h-[1px] before:w-full after:bg-stone-2 before:bg-stone-2 dark-text-stone-6 after:content-empty before:content-empty after:dark-bg-stone-6 before:dark-bg-stone-6"},M=h({__name:"loadmore",setup(T){const o=k("layoutRef"),f=a(0),u=a(10),t=a(0),e=a([]);function n(){H.get("page/loadmore",{baseURL:"/mock",params:{from:f.value*u.value,limit:u.value}}).then(s=>{e.value.push(...s.data.list),f.value+=1,t.value=s.data.total,F(()=>{const i=o.value?.ref?.clientHeight??0,l=o.value?.ref?.scrollHeight??0;i===l&&e.value.length<t.value&&n()})})}function d(){e.value.length<t.value&&n()}return x(()=>{n()}),(s,i)=>{const l=v;return r(),y(l,{ref_key:"layoutRef",ref:o,navbar:"","navbar-start-side":"back",onReachBottom:d},{default:w(()=>[p("div",L,[(r(!0),m(R,null,B(c(e),(_,b)=>(r(),m("div",{key:b,class:"bg-[var(--g-container-bg)] p-4"},g(_),1))),128)),p("div",S,g(c(e).length<c(t)?"加载更多":"已经到底啦"),1)])]),_:1},512)}}});export{M as default};
