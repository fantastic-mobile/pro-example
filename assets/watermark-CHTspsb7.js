
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as b}from"./index-Byuq6co6.js";import{d as g,ai as w,bn as S,A as v,c as x,o as V,w as a,a as W,b as s,a7 as i,ak as B,i as C,u as n,_ as Y,e as l,a8 as c,bk as D}from"./index-CmFZgwC4.js";const F={class:"flex flex-col items-center gap-4 p-4"},H=g({__name:"watermark",setup(N){const o=w(),r=S(),t=v({get(){return o.settings.app.enableWatermark},set(m){o.$patch(e=>{e.settings.app.enableWatermark=m})}});function p(){r.update({content:D().format("YYYY-MM-DD\nHH:mm:ss")})}function _(){r.update()}return(m,e)=>{const d=B,u=Y,f=b;return V(),x(f,{navbar:"","navbar-start-side":"back"},{default:a(()=>[W("div",F,[s(d,{modelValue:n(t),"onUpdate:modelValue":e[0]||(e[0]=k=>C(t)?t.value=k:null)},null,8,["modelValue"]),i(s(u,{onClick:p},{default:a(()=>[...e[1]||(e[1]=[l(" 更新水印 ",-1)])]),_:1},512),[[c,n(t)]]),i(s(u,{onClick:_},{default:a(()=>[...e[2]||(e[2]=[l(" 重置水印 ",-1)])]),_:1},512),[[c,n(t)]])])]),_:1})}}});export{H as default};
