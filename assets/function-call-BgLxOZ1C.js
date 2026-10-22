
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{D as e,et as t}from"./runtime-core.esm-bundler-D7siT_TS.js";import{St as n,kt as r,n as i,t as a,wt as o}from"./mount-component-CkA7XS3a.js";import{n as s}from"./index-CXygZjsd.js";var c,l,u=e=>r(e)?e:{message:e};function d(){({instance:l}=a({setup(){let{state:n,toggle:r}=i();return()=>e(s,t(n,{"onUpdate:show":r}),null)}}))}var f={type:`danger`,color:void 0,message:``,onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:``,lockScroll:!1,background:void 0},p=()=>{l&&l.toggle(!1)};function m(e){if(o)return l||d(),e=n({},f,u(e)),l.open(e),clearTimeout(c),e.duration>0&&(c=setTimeout(p,e.duration)),l}export{m as t};