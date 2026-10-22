
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,w as t}from"./src-CTlveZFi.js";import{D as n,E as r,k as i,mt as a,qt as o,v as s}from"./runtime-core.esm-bundler-D7siT_TS.js";import{O as c}from"./devtools-CLRpXhL7-CzTLzqSY.js";import{g as l,h as u}from"./useApi-CUgTH_jn-DEZp6Kym.js";import{t as d}from"./AppPageLayout-DpGpaj5G.js";function f(){let e=u(),t=l(),n=c();function r(){t.push({name:`reload`})}function i(t){n.setCustomTitle(e.fullPath,t)}function a(){n.resetCustomTitle(e.fullPath)}return{reload:r,setCustomTitle:i,resetCustomTitle:a}}var p=i({__name:`title`,setup(i){let c=f();function l(){c.setCustomTitle(`测试标题`)}function u(){c.resetCustomTitle()}return(i,c)=>{let f=e,p=t,m=d;return a(),s(m,{navbar:``,"navbar-start-side":`back`},{default:o(()=>[n(p,{"main-class":`flex gap-2`},{default:o(()=>[n(f,{onClick:l},{default:o(()=>[...c[0]||(c[0]=[r(` 标题设置为「 测试标题 」 `,-1)])]),_:1}),n(f,{onClick:u},{default:o(()=>[...c[1]||(c[1]=[r(` 标题重置 `,-1)])]),_:1})]),_:1})]),_:1})}}});export{p as default};