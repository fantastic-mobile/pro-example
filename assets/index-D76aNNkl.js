
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as z}from"./index-BAKb5WLg.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-b72J4Aia.js";import{d as D,ah as T,U,r as A,j as G,k as y,o as k,a5 as J,p as K,a6 as Q,u as i,Z as tt,t as et,s as ot,b as f,F as lt,c as at,w as P}from"./index-BTfEXlhq.js";import"./index.vue_vue_type_script_setup_true_lang-C0ArQLu7.js";function W(t,e,o,l){return Number.parseFloat((e-l*e/t+o).toFixed(2))}function nt(t){[...t.querySelectorAll("*")].forEach(e=>t.removeChild(e))}function st(t){return t.value}function _(t,e){const o=document.createElementNS("http://www.w3.org/2000/svg",t);for(const l in e)o.setAttribute(l,e[l]);return o}function rt(t,e,o){if(nt(t),e.length<=1)return;o=o||{},typeof e[0]=="number"&&(e=e.map(n=>({value:n})));const l=o.onmousemove,a=o.onmouseout,s="interactive"in o?o.interactive:!!l,b=o.spotRadius||2,d=b*2,B=o.cursorWidth||2,F=Number.parseFloat(t.attributes["stroke-width"].value),V=o.fetch||st,w=e.map(n=>V(n)),I=Number.parseFloat(t.attributes.width.value)-d*2,x=Number.parseFloat(t.attributes.height.value),E=x-F*2-d,N=Math.max(...w),u=-1e3,R=w.length-1,M=I/R,m=[],X=W(N,E,F+b,w[0]);let S=`M${d} ${X}`;w.forEach((n,p)=>{const r=p*M+d,c=W(N,E,F+b,n);m.push(Object.assign({},e[p],{index:p,x:r,y:c})),S+=` L ${r} ${c}`});const Y=_("path",{class:"sparkline--line",d:S,fill:"none"}),j=`${S} V ${x} L ${d} ${x} Z`,O=_("path",{class:"sparkline--fill",d:j,stroke:"none"});if(t.appendChild(O),t.appendChild(Y),!s)return;const h=_("line",{class:"sparkline--cursor",x1:u,x2:u,y1:0,y2:x,"stroke-width":B}),C=_("circle",{class:"sparkline--spot",cx:u,cy:u,r:b});t.appendChild(h),t.appendChild(C);const g=_("rect",{width:t.attributes.width.value,height:t.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});t.appendChild(g),g.addEventListener("mouseout",n=>{h.setAttribute("x1",u.toString()),h.setAttribute("x2",u.toString()),C.setAttribute("cx",u.toString()),a&&a(n)}),g.addEventListener("mousemove",n=>{const p=n.offsetX;let r=m.find(q=>q.x>=p);r||(r=m[R]);const c=m[m.indexOf(r)-1];let v,L;c?(L=c.x+(r.x-c.x)/2,v=p>=L?r:c):v=r;const $=v.x,Z=v.y;C.setAttribute("cx",$),C.setAttribute("cy",Z),h.setAttribute("x1",$),h.setAttribute("x2",$),l&&l(n,v)})}const it={class:"sparkline"},ut=["width","height","stroke-width","stroke","fill"],ct=D({name:"FmSparkline",__name:"index",props:{value:{},width:{default:100},height:{default:30},strokeWidth:{default:3},strokeColor:{default:"#dc2b33"},fillColor:{default:"transparent"},cursorColor:{default:"#dc2b33"},spotColor:{default:"#dc2b33"},tooltip:{type:Boolean,default:!1}},setup(t){T(a=>({"6ce87f52":a.cursorColor,"2117aeaa":a.spotColor}));const e=t,o=U("sparklineRef"),l=A({show:!1,content:"",top:0,left:0});return G(()=>{rt(o.value,e.value,e.tooltip&&{onmousemove:(a,s)=>{l.value.show=!0,l.value.content=s.tooltip,l.value.top=a.offsetY,l.value.left=a.offsetX+20},onmouseout:()=>{l.value.show=!1}})}),(a,s)=>(k(),y("div",it,[(k(),y("svg",{ref_key:"sparklineRef",ref:o,width:a.width,height:a.height,"stroke-width":a.strokeWidth,stroke:a.strokeColor,fill:a.fillColor},null,8,ut)),a.tooltip?J((k(),y("span",{key:0,class:"tooltip",style:tt([`left: ${i(l).left}px`,`top: ${i(l).top}px`])},et(i(l).content),5)),[[Q,i(l).show]]):K("",!0)]))}}),pt=ot(ct,[["__scopeId","data-v-b6480129"]]),ft=D({__name:"_demo1",setup(t){const e=A([1,5,2,4,8,3,7]),o=A([{tooltip:"值：1",value:1},{tooltip:"值：3",value:3},{tooltip:"值：5",value:5},{tooltip:"值：8",value:8},{tooltip:"值：4",value:4},{tooltip:"值：6",value:6},{tooltip:"值：9",value:9}]);return(l,a)=>{const s=pt;return k(),y(lt,null,[f(s,{value:i(e)},null,8,["value"]),f(s,{value:i(e),"stroke-color":"#409eff","fill-color":"#b3d8ff"},null,8,["value"]),f(s,{value:i(o),tooltip:""},null,8,["value"]),f(s,{value:i(o),tooltip:"","stroke-color":"#409eff","fill-color":"#b3d8ff","cursor-color":"#e6a23c","spot-color":"#909399"},null,8,["value"])],64)}}}),dt=`<script setup lang="ts">
const value1 = ref([1, 5, 2, 4, 8, 3, 7])
const value2 = ref([
  { tooltip: '值：1', value: 1 },
  { tooltip: '值：3', value: 3 },
  { tooltip: '值：5', value: 5 },
  { tooltip: '值：8', value: 8 },
  { tooltip: '值：4', value: 4 },
  { tooltip: '值：6', value: 6 },
  { tooltip: '值：9', value: 9 },
])
<\/script>

<template>
  <FmSparkline :value="value1" />
  <FmSparkline :value="value1" stroke-color="#409eff" fill-color="#b3d8ff" />
  <FmSparkline :value="value2" tooltip />
  <FmSparkline :value="value2" tooltip stroke-color="#409eff" fill-color="#b3d8ff" cursor-color="#e6a23c" spot-color="#909399" />
</template>
`,kt=D({__name:"index",setup(t){return(e,o)=>{const l=H,a=z;return k(),at(a,{navbar:"","navbar-start-side":"back"},{default:P(()=>[f(l,{code:i(dt)},{default:P(()=>[f(ft)]),_:1},8,["code"])]),_:1})}}});export{kt as default};
