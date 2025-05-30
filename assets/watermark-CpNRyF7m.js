
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as b}from"./index-CZoLKV0K.js";import{d as g,af as w,bl as S,z as v,c as x,o as V,w as a,a as W,b as s,a5 as u,ah as B,i as C,u as n,_ as Y,e as _,a6 as c,b6 as D}from"./index-r-6p5DPr.js";const F={class:"flex flex-col items-center gap-4 p-4"},y=g({__name:"watermark",setup(N){const o=w(),r=S(),t=v({get(){return o.settings.app.enableWatermark},set(m){o.$patch(e=>{e.settings.app.enableWatermark=m})}});function i(){r.update({content:D().format(`YYYY-MM-DD
HH:mm:ss`)})}function p(){r.update()}return(m,e)=>{const d=B,l=Y,f=b;return V(),x(f,{navbar:"","navbar-start-side":"back"},{default:a(()=>[W("div",F,[s(d,{modelValue:n(t),"onUpdate:modelValue":e[0]||(e[0]=k=>C(t)?t.value=k:null)},null,8,["modelValue"]),u(s(l,{onClick:i},{default:a(()=>e[1]||(e[1]=[_(" 更新水印 ")])),_:1,__:[1]},512),[[c,n(t)]]),u(s(l,{onClick:p},{default:a(()=>e[2]||(e[2]=[_(" 重置水印 ")])),_:1,__:[2]},512),[[c,n(t)]])])]),_:1})}}});export{y as default};
