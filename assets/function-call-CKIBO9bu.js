
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{ae as a,af as s,ag as i,ah as r,ai as u,b as d,E as f,aj as l}from"./index-BuiYM_8b.js";let t,n;const c=e=>r(e)?e:{message:e};function p(){({instance:n}=i({setup(){const{state:e,toggle:o}=u();return()=>d(l,f(e,{"onUpdate:show":o}),null)}}))}const g=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let m=g();const O=()=>{n&&n.toggle(!1)};function b(e){if(a)return n||p(),e=s({},m,c(e)),n.open(e),clearTimeout(t),e.duration>0&&(t=setTimeout(O,e.duration)),n}export{b as s};
