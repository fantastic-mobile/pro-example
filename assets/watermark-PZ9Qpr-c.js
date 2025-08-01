
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as b}from"./index-CDvm7Wea.js";import{d as g,ah as w,bm as S,z as v,c as x,o as V,w as a,a as W,b as s,a6 as l,aj as B,i as C,u as n,_ as Y,e as _,a7 as c,bj as j}from"./index-_PLUdafA.js";const D={class:"flex flex-col items-center gap-4 p-4"},h=g({__name:"watermark",setup(F){const o=w(),r=S(),t=v({get(){return o.settings.app.enableWatermark},set(m){o.$patch(e=>{e.settings.app.enableWatermark=m})}});function i(){r.update({content:j().format(`YYYY-MM-DD
HH:mm:ss`)})}function p(){r.update()}return(m,e)=>{const d=B,u=Y,f=b;return V(),x(f,{navbar:"","navbar-start-side":"back"},{default:a(()=>[W("div",D,[s(d,{modelValue:n(t),"onUpdate:modelValue":e[0]||(e[0]=k=>C(t)?t.value=k:null)},null,8,["modelValue"]),l(s(u,{onClick:i},{default:a(()=>e[1]||(e[1]=[_(" 更新水印 ",-1)])),_:1,__:[1]},512),[[c,n(t)]]),l(s(u,{onClick:p},{default:a(()=>e[2]||(e[2]=[_(" 重置水印 ",-1)])),_:1,__:[2]},512),[[c,n(t)]])])]),_:1})}}});export{h as default};
