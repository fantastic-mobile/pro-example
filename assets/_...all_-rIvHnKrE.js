
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{d as c,g as i,h as u,j as d,o as m,k as f,b as s,e as _,a as n,w as x,f as p,t as v,u as w,_ as N,r as k}from"./index-DSCegQmK.js";const B={class:"min-h-screen flex flex-col items-center justify-center"},g={class:"flex flex-col items-center gap-4"},V=c({__name:"[...all]",setup(h){const a=i(),e=k({inter:Number.NaN,countdown:5});u(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),d(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){a.push("/")}return(I,t)=>{const l=_,r=N;return m(),f("div",B,[s(l,{name:"404",class:"text-[300px] -mt-9xl"}),n("div",g,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1)),s(r,{onClick:o},{default:x(()=>[p(v(w(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])}}});export{V as default};
