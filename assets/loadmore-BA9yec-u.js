
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as y}from"./index-TGLGxjLi.js";import{d as w,W as R,j as B,o as f,c as H,w as F,a as v,k as h,F as L,n as T,u,t as k,r as n,bq as j,U as C}from"./index-DSCegQmK.js";const M={class:"m-4 flex flex-col gap-4"},N={class:"flex items-center justify-between gap-4 whitespace-nowrap text-sm text-stone-4 font-500 after:h-[1px] after:w-full before:h-[1px] before:w-full after:bg-stone-2 before:bg-stone-2 dark-text-stone-6 after:content-empty before:content-empty after:dark-bg-stone-6 before:dark-bg-stone-6"},z=w({__name:"loadmore",setup(S){const s=R("layoutRef"),i=n(0),p=n(10),t=n(0),e=n([]);function l(){j.get("page/loadmore",{baseURL:"/mock",params:{from:i.value*p.value,limit:p.value}}).then(r=>{e.value.push(...r.data.list),i.value+=1,t.value=r.data.total,C(()=>{var a,o,g,d,_,b;const m=(g=(o=(a=s.value)==null?void 0:a.ref)==null?void 0:o.clientHeight)!=null?g:0,c=(b=(_=(d=s.value)==null?void 0:d.ref)==null?void 0:_.scrollHeight)!=null?b:0;m===c&&e.value.length<t.value&&l()})})}function x(){e.value.length<t.value&&l()}return B(()=>{l()}),(r,m)=>{const c=y;return f(),H(c,{ref_key:"layoutRef",ref:s,navbar:"","navbar-start-side":"back",onReachBottom:x},{default:F(()=>[v("div",M,[(f(!0),h(L,null,T(u(e),(a,o)=>(f(),h("div",{key:o,class:"bg-[var(--g-container-bg)] p-4"},k(a),1))),128)),v("div",N,k(u(e).length<u(t)?"加载更多":"已经到底啦"),1)])]),_:1},512)}}});export{z as default};
