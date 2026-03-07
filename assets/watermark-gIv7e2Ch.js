
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as b}from"./index-CZKjdDac.js";import{d as g,al as w,bp as S,o as v,c as x,w as a,a as V,b as s,an as W,i as B,u as n,a7 as u,_ as C,f as c,a8 as i,G as Y,bm as D}from"./index-D5iw2mOA.js";const F={class:"flex flex-col items-center gap-4 p-4"},H=g({__name:"watermark",setup(N){const o=w(),r=S(),t=Y({get(){return o.settings.app.enableWatermark},set(m){o.$patch(e=>{e.settings.app.enableWatermark=m})}});function p(){r.update({content:D().format("YYYY-MM-DD\nHH:mm:ss")})}function _(){r.update()}return(m,e)=>{const d=W,l=C,f=b;return v(),x(f,{navbar:"","navbar-start-side":"back"},{default:a(()=>[V("div",F,[s(d,{modelValue:n(t),"onUpdate:modelValue":e[0]||(e[0]=k=>B(t)?t.value=k:null)},null,8,["modelValue"]),u(s(l,{onClick:p},{default:a(()=>[...e[1]||(e[1]=[c(" 更新水印 ",-1)])]),_:1},512),[[i,n(t)]]),u(s(l,{onClick:_},{default:a(()=>[...e[2]||(e[2]=[c(" 重置水印 ",-1)])]),_:1},512),[[i,n(t)]])])]),_:1})}}});export{H as default};
