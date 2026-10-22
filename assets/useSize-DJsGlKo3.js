
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{ht as e}from"./src-CTlveZFi.js";import{ct as t,ft as n,g as r,vn as i}from"./runtime-core.esm-bundler-D7siT_TS.js";function a(a){let o=i(),s=r(()=>o.value?.width??0),c=r(()=>o.value?.height??0),l;return t(()=>{let t=e(a);t?(o.value={width:t.offsetWidth,height:t.offsetHeight},l=new ResizeObserver(e=>{if(!Array.isArray(e)||!e.length)return;let n=e[0],r,i;if(`borderBoxSize`in n){let e=n.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=t.offsetWidth,i=t.offsetHeight;o.value={width:r,height:i}}),l.observe(t,{box:`border-box`})):o.value=void 0}),n(()=>{l?.disconnect(),l=void 0}),{width:s,height:c}}export{a as t};