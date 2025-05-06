
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{d as c,g as i,r as u,h as d,j as m,k as f,o as _,b as s,a as n,f as x,w as p,e as v,t as w,u as N,_ as k}from"./index-BHoQCIPp.js";const B={class:"min-h-screen flex flex-col items-center justify-center"},g={class:"flex flex-col items-center gap-4"},V=c({__name:"[...all]",setup(h){const a=i(),e=u({inter:Number.NaN,countdown:5});d(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),m(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){a.push("/")}return(I,t)=>{const l=x,r=k;return _(),f("div",B,[s(l,{name:"404",class:"text-[300px] -mt-9xl"}),n("div",g,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1)),s(r,{onClick:o},{default:p(()=>[v(w(N(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])}}});export{V as default};
