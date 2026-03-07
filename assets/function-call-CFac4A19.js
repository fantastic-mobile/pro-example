
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{bv as s,bw as i,bx as a,by as r,bz as l,b as c,B as u,bA as d}from"./index-D5iw2mOA.js";let o,t;const f=e=>r(e)?e:{message:e};function p(){({instance:t}=a({setup(){const{state:e,toggle:n}=l();return()=>c(d,u(e,{"onUpdate:show":n}),null)}}))}const b=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let m=b();const g=()=>{t&&t.toggle(!1)};function O(e){if(s)return t||p(),e=i({},m,f(e)),t.open(e),clearTimeout(o),e.duration>0&&(o=setTimeout(g,e.duration)),t}export{O as s};
