
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as b}from"./index-DWv0hsML.js";import{d as g,X as w,a3 as V,O as x,c as S,w as a,m as l,o as W,a as C,b as n,u as s,i as Y,U as p,V as c,e as i,Q as B}from"./index-BoebyoP1.js";const D={class:"flex flex-col items-center gap-4 p-4"},H=g({__name:"watermark",setup(N){const o=w(),r=V(),t=x({get(){return o.settings.app.enableWatermark},set(m){o.$patch(e=>{e.settings.app.enableWatermark=m})}});function d(){r.update({content:B().format(`YYYY-MM-DD
HH:mm:ss`)})}function _(){r.update()}return(m,e)=>{const f=l("van-switch"),u=l("van-button"),k=b;return W(),S(k,{navbar:"","navbar-start-side":"back"},{default:a(()=>[C("div",D,[n(f,{modelValue:s(t),"onUpdate:modelValue":e[0]||(e[0]=v=>Y(t)?t.value=v:null)},null,8,["modelValue"]),p(n(u,{onClick:d},{default:a(()=>e[1]||(e[1]=[i(" 更新水印 ")])),_:1},512),[[c,s(t)]]),p(n(u,{onClick:_},{default:a(()=>e[2]||(e[2]=[i(" 重置水印 ")])),_:1},512),[[c,s(t)]])])]),_:1})}}});export{H as default};
