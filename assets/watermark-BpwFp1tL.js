
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{a as b}from"./index-C3UlwTgG.js";import{d as g,L as w,R as x,B as S,m as l,c as V,o as W,w as a,a as C,b as n,I as p,u as s,i as B,e as c,J as i,D}from"./index-BuiYM_8b.js";const Y={class:"flex flex-col items-center gap-4 p-4"},H=g({__name:"watermark",setup(N){const o=w(),r=x(),t=S({get(){return o.settings.app.enableWatermark},set(m){o.$patch(e=>{e.settings.app.enableWatermark=m})}});function d(){r.update({content:D().format(`YYYY-MM-DD
HH:mm:ss`)})}function _(){r.update()}return(m,e)=>{const f=l("van-switch"),u=l("van-button"),k=b;return W(),V(k,{navbar:"","navbar-start-side":"back"},{default:a(()=>[C("div",Y,[n(f,{modelValue:s(t),"onUpdate:modelValue":e[0]||(e[0]=v=>B(t)?t.value=v:null)},null,8,["modelValue"]),p(n(u,{onClick:d},{default:a(()=>e[1]||(e[1]=[c(" 更新水印 ")])),_:1},512),[[i,s(t)]]),p(n(u,{onClick:_},{default:a(()=>e[2]||(e[2]=[c(" 重置水印 ")])),_:1},512),[[i,s(t)]])])]),_:1})}}});export{H as default};
