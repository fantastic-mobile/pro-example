
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as b}from"./index-TGLGxjLi.js";import{d as g,ai as w,bn as S,o as v,c as x,w as a,a as V,b as s,ak as W,i as B,u as n,a7 as i,_ as C,f as l,a8 as c,G as Y,bk as D}from"./index-DSCegQmK.js";const F={class:"flex flex-col items-center gap-4 p-4"},H=g({__name:"watermark",setup(N){const o=w(),r=S(),t=Y({get(){return o.settings.app.enableWatermark},set(m){o.$patch(e=>{e.settings.app.enableWatermark=m})}});function p(){r.update({content:D().format("YYYY-MM-DD\nHH:mm:ss")})}function _(){r.update()}return(m,e)=>{const d=W,u=C,f=b;return v(),x(f,{navbar:"","navbar-start-side":"back"},{default:a(()=>[V("div",F,[s(d,{modelValue:n(t),"onUpdate:modelValue":e[0]||(e[0]=k=>B(t)?t.value=k:null)},null,8,["modelValue"]),i(s(u,{onClick:p},{default:a(()=>[...e[1]||(e[1]=[l(" 更新水印 ",-1)])]),_:1},512),[[c,n(t)]]),i(s(u,{onClick:_},{default:a(()=>[...e[2]||(e[2]=[l(" 重置水印 ",-1)])]),_:1},512),[[c,n(t)]])])]),_:1})}}});export{H as default};
