
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as z}from"./index-0rsl5P6g.js";import{d as I,r as p,c as b,w as _,m as L,o as t,a as n,j as l,n as f,u,F as m,t as v,e as k,b as N,z as V}from"./index-CsvJ3Gw5.js";const D={class:"absolute left-0 top-0 h-full w-full of-auto overscroll-none"},F={key:0,class:"flex flex-col items-center gap-2"},$=I({__name:"schedule",setup(j){const x=p(["01/01","01/02","01/03","01/04","01/05","01/06","01/07","01/08","01/09","01/10","01/11","01/12","01/13","01/14","01/15","01/16","01/17","01/18","01/19","01/20","01/21","01/22","01/23","01/24","01/25","01/26","01/27","01/28","01/29","01/30","01/31"]),y=p(["09:00-10:00","10:00-11:00","11:00-12:00","14:00-15:00","15:00-16:00","16:00-17:00"]),r=p([{row:"01/05",col:"11:00-12:00",content:"张三"},{row:"01/08",col:"09:00-10:00",content:"李四"},{row:"01/15",col:"16:00-17:00",content:"王五"},{row:"01/26",col:"15:00-16:00",content:"某某"}]);function d(s,e){return r.value.findIndex(a=>a.row===s&&a.col===e)}function h(s,e){r.value.push({row:s,col:e,content:"某某"})}function C(s){r.value.splice(s,1)}return(s,e)=>{const a=L("van-button"),g=z;return t(),b(g,{navbar:"","navbar-start-side":"back"},{default:_(()=>[n("div",D,[n("table",null,[n("thead",null,[n("tr",null,[e[0]||(e[0]=n("th",null,[n("span",{class:"col"},"时段"),n("span",{class:"row"},"日期")],-1)),(t(!0),l(m,null,f(u(y),(o,i)=>(t(),l("th",{key:i},v(o),1))),128))])]),n("tbody",null,[(t(!0),l(m,null,f(u(x),(o,i)=>(t(),l("tr",{key:i},[n("td",null,v(o),1),(t(!0),l(m,null,f(u(y),(c,w)=>(t(),l("td",{key:w},[d(o,c)>=0?(t(),l("div",F,[k(v(u(r)[d(o,c)].content)+" ",1),N(a,{type:"danger",size:"mini",onClick:B=>C(d(o,c))},{default:_(()=>e[1]||(e[1]=[k(" 取消预约 ")])),_:2},1032,["onClick"])])):(t(),b(a,{key:1,type:"primary",size:"mini",onClick:B=>h(o,c)},{default:_(()=>e[2]||(e[2]=[k(" 预约 ")])),_:2},1032,["onClick"]))]))),128))]))),128))])])])]),_:1})}}}),P=V($,[["__scopeId","data-v-a4dde5e7"]]);export{P as default};