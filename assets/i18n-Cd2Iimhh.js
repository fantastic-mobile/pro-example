
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{a as y}from"./index-C3UlwTgG.js";import{_ as w}from"./index.vue_vue_type_script_setup_true_lang-BU7B9X2z.js";import{d as x,l as M,L as k,r as j,N as z,m as u,c as C,o as L,w as s,a as n,b as t,e as l,t as c,u as m,O as N,P as f,D as S}from"./index-BuiYM_8b.js";const V={class:"flex justify-center gap-4"},B={class:"mt-4 text-center"},h=x({__name:"i18n",setup(D){const{t:p}=M(),_=k(),r=j("");z(()=>_.lang,()=>{r.value=S().format("MMMM-dddd")},{immediate:!0});function i(a){const e=N();e&&(a==="zh-cn"?(Object.assign(e["zh-cn"],{hello:{world:"你好，世界！"}}),f.global.setLocaleMessage(a,e["zh-cn"])):(Object.assign(e["en-us"],{hello:{world:"Hello World !"}}),f.global.setLocaleMessage(a,e["en-us"])))}return(a,e)=>{const g=u("van-calendar"),o=w,d=u("van-button"),v=y;return L(),C(v,{navbar:"","navbar-start-side":"back","navbar-end-side":"i18n"},{default:s(()=>[e[4]||(e[4]=n("div",{class:"m-4 c-gray"}," Vant 组件国际化 ",-1)),t(o,null,{default:s(()=>[t(g,{poppable:!1,"show-confirm":!1,style:{height:"500px"}})]),_:1}),e[5]||(e[5]=n("div",{class:"m-4 c-gray"}," Dayjs ",-1)),t(o,null,{default:s(()=>[l(c(m(r)),1)]),_:1}),e[6]||(e[6]=n("div",{class:"m-4 c-gray"}," 延迟加载 ",-1)),t(o,null,{default:s(()=>[n("div",V,[t(d,{onClick:e[0]||(e[0]=b=>i("zh-cn"))},{default:s(()=>e[2]||(e[2]=[l(" 载入中文 ")])),_:1}),t(d,{onClick:e[1]||(e[1]=b=>i("en-us"))},{default:s(()=>e[3]||(e[3]=[l(" 载入英文 ")])),_:1})]),n("div",B,c(m(p)("hello.world")),1)]),_:1})]),_:1})}}});export{h as default};
