
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{bs as s,bt as i,bu as a,bv as r,bw as l,b as u,C as c,bx as d}from"./index-CC4bdbYS.js";let o,e;const f=t=>r(t)?t:{message:t};function p(){({instance:e}=a({setup(){const{state:t,toggle:n}=l();return()=>u(d,c(t,{"onUpdate:show":n}),null)}}))}const b=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let m=b();const g=()=>{e&&e.toggle(!1)};function O(t){if(s)return e||p(),t=i({},m,f(t)),e.open(t),clearTimeout(o),t.duration>0&&(o=setTimeout(g,t.duration)),e}export{O as s};
