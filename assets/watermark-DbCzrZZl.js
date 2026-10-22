
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{M as t,Rt as n,S as r,n as i}from"./src-CTlveZFi.js";import{D as a,E as o,On as s,Yt as c,_ as l,g as u,k as d,mt as f,qt as p,un as m,v as h}from"./runtime-core.esm-bundler-D7siT_TS.js";import{O as g}from"./devtools-CLRpXhL7-CzTLzqSY.js";import{t as _}from"./index-CXygZjsd.js";import{t as v}from"./AppPageLayout-DpGpaj5G.js";var y=e(i(),1),b={class:`p-4 flex flex-col gap-4 items-center`},x=d({__name:`watermark`,setup(e){let i=g(),d=_(),x=u({get(){return i.settings.app.watermark},set(e){i.$patch(t=>{t.settings.app.watermark=e})}});function S(){d.update({content:(0,y.default)().format(`YYYY-MM-DD
HH:mm:ss`)})}function C(){d.update()}return(e,i)=>{let u=r,d=t,g=v;return f(),h(g,{navbar:``,"navbar-start-side":`back`},{default:p(()=>[l(`div`,b,[a(u,{modelValue:s(x),"onUpdate:modelValue":i[0]||(i[0]=e=>m(x)?x.value=e:null)},null,8,[`modelValue`]),c(a(d,{onClick:S},{default:p(()=>[...i[1]||(i[1]=[o(` 更新水印 `,-1)])]),_:1},512),[[n,s(x)]]),c(a(d,{onClick:C},{default:p(()=>[...i[2]||(i[2]=[o(` 重置水印 `,-1)])]),_:1},512),[[n,s(x)]])])]),_:1})}}});export{x as default};