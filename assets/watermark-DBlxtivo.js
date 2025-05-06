
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as b}from"./index-CS_isp3V.js";import{d as g,ad as w,bl as S,z as v,c as x,o as V,w as a,a as W,b as s,a3 as u,af as B,i as C,u as n,_ as Y,e as c,a4 as i,b6 as D}from"./index-BHoQCIPp.js";const F={class:"flex flex-col items-center gap-4 p-4"},H=g({__name:"watermark",setup(N){const o=w(),r=S(),t=v({get(){return o.settings.app.enableWatermark},set(m){o.$patch(e=>{e.settings.app.enableWatermark=m})}});function p(){r.update({content:D().format(`YYYY-MM-DD
HH:mm:ss`)})}function _(){r.update()}return(m,e)=>{const d=B,l=Y,f=b;return V(),x(f,{navbar:"","navbar-start-side":"back"},{default:a(()=>[W("div",F,[s(d,{modelValue:n(t),"onUpdate:modelValue":e[0]||(e[0]=k=>C(t)?t.value=k:null)},null,8,["modelValue"]),u(s(l,{onClick:p},{default:a(()=>e[1]||(e[1]=[c(" 更新水印 ")])),_:1},512),[[i,n(t)]]),u(s(l,{onClick:_},{default:a(()=>e[2]||(e[2]=[c(" 重置水印 ")])),_:1},512),[[i,n(t)]])])]),_:1})}}});export{H as default};
