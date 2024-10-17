
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as x}from"./index-DwMFhFHs.js";import{d as k,U as y,r as n,h as w,c as R,w as B,a8 as H,Z as L,o as f,a as _,j as h,n as T,u,F as j,t as v}from"./index-CvoiUby4.js";const C={class:"m-4 flex flex-col gap-4"},F={class:"flex items-center justify-between gap-4 whitespace-nowrap text-sm text-stone-4 font-500 after:h-[1px] after:w-full before:h-[1px] before:w-full after:bg-stone-2 before:bg-stone-2 dark-text-stone-6 after:content-empty before:content-empty after:dark-bg-stone-6 before:dark-bg-stone-6"},U=k({__name:"loadmore",setup(M){const s=y("layoutRef"),i=n(0),p=n(10),t=n(0),e=n([]);function l(){H.get("page/loadmore",{baseURL:"/mock",params:{from:i.value*p.value,limit:p.value}}).then(r=>{e.value.push(...r.data.list),i.value+=1,t.value=r.data.total,L(()=>{var a,o,m,d;const g=((o=(a=s.value)==null?void 0:a.ref)==null?void 0:o.clientHeight)??0,c=((d=(m=s.value)==null?void 0:m.ref)==null?void 0:d.scrollHeight)??0;g===c&&e.value.length<t.value&&l()})})}function b(){e.value.length<t.value&&l()}return w(()=>{l()}),(r,g)=>{const c=x;return f(),R(c,{ref_key:"layoutRef",ref:s,navbar:"","navbar-start-side":"back",onReachBottom:b},{default:B(()=>[_("div",C,[(f(!0),h(j,null,T(u(e),(a,o)=>(f(),h("div",{key:o,class:"bg-[var(--g-container-bg)] p-4"},v(a),1))),128)),_("div",F,v(u(e).length<u(t)?"加载更多":"已经到底啦"),1)])]),_:1},512)}}});export{U as default};
