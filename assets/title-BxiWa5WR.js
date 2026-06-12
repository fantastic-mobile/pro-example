
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,H as t,S as n,rt as r,w as i,y as a}from"./vue.runtime.esm-bundler-DOMO_wpA.js";import{I as o,K as s}from"./src-C_SUC8up.js";import{n as c}from"./dist-Bu4ITDzu.js";import{c as l,l as u}from"./index-CG3z7NNQ.js";import{t as d}from"./AppPageLayout-CilNLEuS.js";function f(){let e=l(),t=u(),n=c();function r(){t.push({name:`reload`})}function i(t){n.setCustomTitle(e.fullPath,t)}function a(){n.resetCustomTitle(e.fullPath)}return{reload:r,setCustomTitle:i,resetCustomTitle:a}}var p=i({__name:`title`,setup(i){let c=f();function l(){c.setCustomTitle(`测试标题`)}function u(){c.resetCustomTitle()}return(i,c)=>{let f=s,p=o,m=d;return t(),a(m,{navbar:``,"navbar-start-side":`back`},{default:r(()=>[e(p,{"main-class":`flex gap-2`},{default:r(()=>[e(f,{onClick:l},{default:r(()=>[...c[0]||(c[0]=[n(` 标题设置为「 测试标题 」 `,-1)])]),_:1}),e(f,{onClick:u},{default:r(()=>[...c[1]||(c[1]=[n(` 标题重置 `,-1)])]),_:1})]),_:1})]),_:1})}}});export{p as default};