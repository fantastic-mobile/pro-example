
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as b}from"./index-DWv0hsML.js";import{_ as y}from"./index.vue_vue_type_script_setup_true_lang-B1p1QAEm.js";import{d as w,l as x,X as M,r as k,Z as j,c as z,w as t,m as c,o as C,a,b as n,e as r,t as m,u as f,Q as L,a0 as S,a1 as V}from"./index-BoebyoP1.js";const B={class:"flex justify-center gap-4"},N={class:"mt-4 text-center"},O=w({__name:"i18n",setup($){const{t:p}=x(),_=M(),i=k("");j(()=>_.lang,()=>{i.value=L().format("MMMM-dddd")},{immediate:!0});function d(o){const e=S(),s=V();s&&(o==="zh-cn"?(Object.assign(s["zh-cn"],{hello:{world:"你好，世界！"}}),e.global.setLocaleMessage(o,s["zh-cn"])):(Object.assign(s["en-us"],{hello:{world:"Hello World !"}}),e.global.setLocaleMessage(o,s["en-us"])))}return(o,e)=>{const s=c("van-calendar"),l=y,u=c("van-button"),g=b;return C(),z(g,{navbar:"","navbar-start-side":"back","navbar-end-side":"i18n"},{default:t(()=>[e[4]||(e[4]=a("div",{class:"m-4 c-gray"}," Vant 组件国际化 ",-1)),n(l,null,{default:t(()=>[n(s,{poppable:!1,"show-confirm":!1,style:{height:"500px"}})]),_:1}),e[5]||(e[5]=a("div",{class:"m-4 c-gray"}," Dayjs ",-1)),n(l,null,{default:t(()=>[r(m(f(i)),1)]),_:1}),e[6]||(e[6]=a("div",{class:"m-4 c-gray"}," 延迟加载 ",-1)),n(l,null,{default:t(()=>[a("div",B,[n(u,{onClick:e[0]||(e[0]=v=>d("zh-cn"))},{default:t(()=>e[2]||(e[2]=[r(" 载入中文 ")])),_:1}),n(u,{onClick:e[1]||(e[1]=v=>d("en-us"))},{default:t(()=>e[3]||(e[3]=[r(" 载入英文 ")])),_:1})]),a("div",N,m(f(p)("hello.world")),1)]),_:1})]),_:1})}}});export{O as default};
