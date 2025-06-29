
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as b}from"./index--3D-Wt3r.js";import{d as g,ag as w,bl as S,z as v,c as x,o as V,w as a,a as W,b as s,a5 as l,ai as B,i as C,u as n,_ as Y,e as u,a6 as _,bi as D}from"./index-U1W1hkh6.js";const F={class:"flex flex-col items-center gap-4 p-4"},H=g({__name:"watermark",setup(N){const o=w(),r=S(),t=v({get(){return o.settings.app.enableWatermark},set(m){o.$patch(e=>{e.settings.app.enableWatermark=m})}});function c(){r.update({content:D().format(`YYYY-MM-DD
HH:mm:ss`)})}function p(){r.update()}return(m,e)=>{const d=B,i=Y,f=b;return V(),x(f,{navbar:"","navbar-start-side":"back"},{default:a(()=>[W("div",F,[s(d,{modelValue:n(t),"onUpdate:modelValue":e[0]||(e[0]=k=>C(t)?t.value=k:null)},null,8,["modelValue"]),l(s(i,{onClick:c},{default:a(()=>e[1]||(e[1]=[u(" 更新水印 ")])),_:1,__:[1]},512),[[_,n(t)]]),l(s(i,{onClick:p},{default:a(()=>e[2]||(e[2]=[u(" 重置水印 ")])),_:1,__:[2]},512),[[_,n(t)]])])]),_:1})}}});export{H as default};
