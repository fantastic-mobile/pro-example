
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{ar as a,as as s,at as i,au as r,av as l,b as u,R as c,aw as d}from"./index-CvoiUby4.js";let o,e;const f=t=>i(t)?t:{message:t};function p(){({instance:e}=r({setup(){const{state:t,toggle:n}=l();return()=>u(d,c(t,{"onUpdate:show":n}),null)}}))}const m=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let g=m();const v=()=>{e&&e.toggle(!1)};function w(t){if(a)return e||p(),t=s({},g,f(t)),e.open(t),clearTimeout(o),t.duration>0&&(o=setTimeout(v,t.duration)),e}export{w as s};
