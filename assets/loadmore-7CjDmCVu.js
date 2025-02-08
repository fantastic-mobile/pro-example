
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{a as k}from"./index-C3UlwTgG.js";import{d as x,H as y,r as n,j as w,c as R,o as f,w as B,a as _,k as v,F as H,n as L,u,t as b,V as M,M as T}from"./index-BuiYM_8b.js";const j={class:"m-4 flex flex-col gap-4"},C={class:"flex items-center justify-between gap-4 whitespace-nowrap text-sm text-stone-4 font-500 after:h-[1px] after:w-full before:h-[1px] before:w-full after:bg-stone-2 before:bg-stone-2 dark-text-stone-6 after:content-empty before:content-empty after:dark-bg-stone-6 before:dark-bg-stone-6"},V=x({__name:"loadmore",setup(F){const s=y("layoutRef"),i=n(0),p=n(10),t=n(0),e=n([]);function l(){M.get("page/loadmore",{baseURL:"/mock",params:{from:i.value*p.value,limit:p.value}}).then(r=>{e.value.push(...r.data.list),i.value+=1,t.value=r.data.total,T(()=>{var a,o,m,d;const g=((o=(a=s.value)==null?void 0:a.ref)==null?void 0:o.clientHeight)??0,c=((d=(m=s.value)==null?void 0:m.ref)==null?void 0:d.scrollHeight)??0;g===c&&e.value.length<t.value&&l()})})}function h(){e.value.length<t.value&&l()}return w(()=>{l()}),(r,g)=>{const c=k;return f(),R(c,{ref_key:"layoutRef",ref:s,navbar:"","navbar-start-side":"back",onReachBottom:h},{default:B(()=>[_("div",j,[(f(!0),v(H,null,L(u(e),(a,o)=>(f(),v("div",{key:o,class:"bg-[var(--g-container-bg)] p-4"},b(a),1))),128)),_("div",C,b(u(e).length<u(t)?"加载更多":"已经到底啦"),1)])]),_:1},512)}}});export{V as default};
