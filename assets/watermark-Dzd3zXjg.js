
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,Nt as r,S as i,_ as a,c as o,it as s,lt as c,rt as l,v as u,w as d,y as f}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{R as p,c as m,tt as h}from"./components-BMqlqruM.js";import{n as g}from"./dist-D1Mmh2fb.js";import{t as _}from"./watermark-BNyv1nwu.js";import{t as v}from"./AppPageLayout-C9-qV5nV.js";var y=r(h(),1),b={class:`p-4 flex flex-col gap-4 items-center`},x=d({__name:`watermark`,setup(r){let d=g(),h=_(),x=a({get(){return d.settings.app.watermark},set(e){d.$patch(t=>{t.settings.app.watermark=e})}});function S(){h.update({content:(0,y.default)().format(`YYYY-MM-DD
HH:mm:ss`)})}function C(){h.update()}return(r,a)=>{let d=m,h=p,g=v;return n(),f(g,{navbar:``,"navbar-start-side":`back`},{default:l(()=>[u(`div`,b,[e(d,{modelValue:t(x),"onUpdate:modelValue":a[0]||(a[0]=e=>c(x)?x.value=e:null)},null,8,[`modelValue`]),s(e(h,{onClick:S},{default:l(()=>[...a[1]||(a[1]=[i(` 更新水印 `,-1)])]),_:1},512),[[o,t(x)]]),s(e(h,{onClick:C},{default:l(()=>[...a[2]||(a[2]=[i(` 重置水印 `,-1)])]),_:1},512),[[o,t(x)]])])]),_:1})}}});export{x as default};