
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as b}from"./index-BrwUjcwR.js";import{d as g,ah as w,bm as S,z as v,c as x,o as V,w as a,a as W,b as s,a6 as l,aj as B,i as C,u as n,_ as Y,e as c,a7 as i,bj as j}from"./index-CC4bdbYS.js";const D={class:"flex flex-col items-center gap-4 p-4"},h=g({__name:"watermark",setup(F){const o=w(),r=S(),t=v({get(){return o.settings.app.enableWatermark},set(m){o.$patch(e=>{e.settings.app.enableWatermark=m})}});function p(){r.update({content:j().format("YYYY-MM-DD\nHH:mm:ss")})}function _(){r.update()}return(m,e)=>{const d=B,u=Y,f=b;return V(),x(f,{navbar:"","navbar-start-side":"back"},{default:a(()=>[W("div",D,[s(d,{modelValue:n(t),"onUpdate:modelValue":e[0]||(e[0]=k=>C(t)?t.value=k:null)},null,8,["modelValue"]),l(s(u,{onClick:p},{default:a(()=>[...e[1]||(e[1]=[c(" 更新水印 ",-1)])]),_:1},512),[[i,n(t)]]),l(s(u,{onClick:_},{default:a(()=>[...e[2]||(e[2]=[c(" 重置水印 ",-1)])]),_:1},512),[[i,n(t)]])])]),_:1})}}});export{h as default};
