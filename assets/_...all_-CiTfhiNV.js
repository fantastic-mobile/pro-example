
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{d as c,r as i,g as u,h as d,j as m,b as s,a as n,w as f,k as _,f as x,o as v,e as p,t as w,u as N,_ as g}from"./index-BWEzkdYe.js";const k={class:"min-h-screen flex flex-col items-center justify-center"},B={class:"flex flex-col items-center gap-4"},V=c({__name:"[...all]",setup(h){const a=_(),e=i({inter:Number.NaN,countdown:5});u(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),d(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){a.push("/")}return(I,t)=>{const l=g,r=x;return v(),m("div",k,[s(l,{name:"404",class:"text-[300px] -mt-9xl"}),n("div",B,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1)),s(r,{onClick:o},{default:f(()=>[p(w(N(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])}}});export{V as default};
