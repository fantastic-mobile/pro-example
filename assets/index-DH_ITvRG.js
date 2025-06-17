
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as k}from"./index-BAKb5WLg.js";import{_ as I}from"./index.vue_vue_type_script_setup_true_lang-b72J4Aia.js";import{d as v,U as N,r as V,z,c as x,o as c,as as B,u as d,L as S,w as n,a,b as e,k as h,n as Y,F as R,bi as F,q as j,B as A,s as L,p as E,t as _,e as w}from"./index-BTfEXlhq.js";import{_ as M,a as q}from"./index.vue_vue_type_script_setup_true_lang-BMUd_Nq7.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang-B2PhPQYT.js";import"./index.vue_vue_type_script_setup_true_lang-C0ArQLu7.js";const G={class:"absolute top-0 z-1 w-20 flex-col-center-start p-2 backdrop-blur"},O={class:"flex items-center"},U={class:"w-full flex flex-col gap-4"},H={class:"flex items-center"},J={class:"flex-1"},K=v({name:"FmTimeline",__name:"index",props:{data:{default:()=>[]},merge:{type:Boolean,default:!1},class:{}},setup(p){const s=p,u=N("timelineItems"),l=V(0),m=z(()=>{var b;const t=(b=u.value)==null?void 0:b.map(i=>i.offsetTop-60);return((t==null?void 0:t.findIndex(i=>i>l.value))??1)-1});function r(t){l.value=t.target.scrollTop}function o(t){return F(t).format("YYYY")}function C(t){return F(t).format("MM")}function P(t){return F(t).format("DD")}return(t,b)=>{const i=M,$=q,D=B;return c(),x(D,{"content-class":d(S)("relative w-full",s.class),onOnScroll:r},{default:n(()=>[a("div",G,[e(i,{value:Number(o(t.data[d(m)].datetime)),"will-change":"",format:{notation:"compact"},class:"text-lg font-bold opacity-20"},null,8,["value"]),a("div",O,[e($,null,{default:n(()=>[e(i,{value:Number(C(t.data[d(m)].datetime)),"will-change":"",format:{minimumIntegerDigits:2,notation:"compact"},suffix:"/",class:"text-xl font-bold"},null,8,["value"]),e(i,{value:Number(P(t.data[d(m)].datetime)),"will-change":"",format:{minimumIntegerDigits:2,notation:"compact"},class:"text-xl font-bold"},null,8,["value"])]),_:1})])]),a("div",U,[(c(!0),h(R,null,Y(t.data,(f,g)=>(c(),h("div",{key:g,ref_for:!0,ref_key:"timelineItems",ref:u,class:"flex gap-4"},[a("div",{class:j(["w-20 flex-col-center-start p-2 transition-all",{"opacity-0 -translate-y-10":g<=d(m),"opacity-0":s.merge&&g>0&&f.datetime===t.data[g-1].datetime}])},[e(i,{value:Number(o(f.datetime)),format:{notation:"compact"},class:"text-lg font-bold opacity-20"},null,8,["value"]),a("div",H,[e(i,{value:Number(C(f.datetime)),format:{minimumIntegerDigits:2,notation:"compact"},suffix:"/",class:"text-xl font-bold"},null,8,["value"]),e(i,{value:Number(P(f.datetime)),format:{minimumIntegerDigits:2,notation:"compact"},class:"text-xl font-bold"},null,8,["value"])])],2),a("div",J,[A(t.$slots,"default",{item:f},void 0,!0)])]))),128))])]),_:3},8,["content-class"])}}}),y=L(K,[["__scopeId","data-v-462c1f0a"]]),Q={key:0,class:"flex-center-end flex-1"},W=v({__name:"_demo1",setup(p){const s=[{datetime:"2025/03/23",content:"请假申请",name:"张三"},{datetime:"2025/03/23",content:"部门主管审批",name:"李四"},{datetime:"2025/03/24",content:"人事审批",name:"王五"},{datetime:"2025/03/24",content:"完成"}];return(u,l)=>{const m=T,r=y;return c(),x(r,{data:s},{default:n(({item:o})=>[e(m,{class:"h-full"},{header:n(()=>[a("div",null,_(o.content),1)]),footer:n(()=>[o.name?(c(),h("div",Q,[a("div",null,"操作人："+_(o.name),1)])):E("",!0)]),_:2},1024)]),_:1})}}}),X=`<script setup lang="ts">
const data = [
  { datetime: '2025/03/23', content: '请假申请', name: '张三' },
  { datetime: '2025/03/23', content: '部门主管审批', name: '李四' },
  { datetime: '2025/03/24', content: '人事审批', name: '王五' },
  { datetime: '2025/03/24', content: '完成' },
]
<\/script>

<template>
  <FmTimeline :data="data">
    <template #default="{ item }">
      <FmCard class="h-full">
        <template #header>
          <div>{{ item.content }}</div>
        </template>
        <template #footer>
          <div v-if="item.name" class="flex-center-end flex-1">
            <div>操作人：{{ item.name }}</div>
          </div>
        </template>
      </FmCard>
    </template>
  </FmTimeline>
</template>
`,Z={key:0,class:"flex-center-end flex-1"},tt=v({__name:"_demo2",setup(p){const s=[{datetime:"2025/03/23",content:"请假申请",name:"张三"},{datetime:"2025/03/23",content:"部门主管审批",name:"李四"},{datetime:"2025/03/24",content:"人事审批",name:"王五"},{datetime:"2025/03/24",content:"完成"}];return(u,l)=>{const m=T,r=y;return c(),x(r,{data:s,merge:""},{default:n(({item:o})=>[e(m,{class:"h-full"},{header:n(()=>[a("div",null,_(o.content),1)]),footer:n(()=>[o.name?(c(),h("div",Z,[a("div",null,"操作人："+_(o.name),1)])):E("",!0)]),_:2},1024)]),_:1})}}}),et=`<script setup lang="ts">
const data = [
  { datetime: '2025/03/23', content: '请假申请', name: '张三' },
  { datetime: '2025/03/23', content: '部门主管审批', name: '李四' },
  { datetime: '2025/03/24', content: '人事审批', name: '王五' },
  { datetime: '2025/03/24', content: '完成' },
]
<\/script>

<template>
  <FmTimeline :data="data" merge>
    <template #default="{ item }">
      <FmCard class="h-full">
        <template #header>
          <div>{{ item.content }}</div>
        </template>
        <template #footer>
          <div v-if="item.name" class="flex-center-end flex-1">
            <div>操作人：{{ item.name }}</div>
          </div>
        </template>
      </FmCard>
    </template>
  </FmTimeline>
</template>
`,nt=v({__name:"_demo3",setup(p){const s=[{datetime:"2022/05/08",title:"Element Plus",content:"4000.00"},{datetime:"2022/07/06",title:"Element Plus",content:"4000.00"},{datetime:"2022/08/08",title:"Element Plus",content:"4000.00"},{datetime:"2024/01/09",title:"condorheroblog",content:"100.00"},{datetime:"2024/01/12",title:"antfu",content:"1024.00"},{datetime:"2024/01/12",title:"sxzz",content:"256.00"},{datetime:"2024/02/04",title:"Vue.js",content:"15000.00"},{datetime:"2024/05/06",title:"Element Plus",content:"2000.00"},{datetime:"2024/07/17",title:"Vxe Table",content:"800.00"},{datetime:"2024/10/18",title:"Element Plus",content:"2000.00"},{datetime:"2025/02/28",title:"hyoban",content:"60.00"},{datetime:"2025/03/19",title:"Element Plus",content:"10000.00"}];return(u,l)=>{const m=T,r=y;return c(),x(r,{data:s,class:"h-100"},{default:n(({item:o})=>[e(m,null,{header:n(()=>[a("p",null,[l[0]||(l[0]=w("向 ")),a("b",null,_(o.title),1),l[1]||(l[1]=w(" 赞助"))])]),default:n(()=>[a("div",null,_(o.content)+" 元",1)]),_:2},1024)]),_:1})}}}),at=`<script setup lang="ts">
const data = [
  { datetime: '2022/05/08', title: 'Element Plus', content: '4000.00' },
  { datetime: '2022/07/06', title: 'Element Plus', content: '4000.00' },
  { datetime: '2022/08/08', title: 'Element Plus', content: '4000.00' },
  { datetime: '2024/01/09', title: 'condorheroblog', content: '100.00' },
  { datetime: '2024/01/12', title: 'antfu', content: '1024.00' },
  { datetime: '2024/01/12', title: 'sxzz', content: '256.00' },
  { datetime: '2024/02/04', title: 'Vue.js', content: '15000.00' },
  { datetime: '2024/05/06', title: 'Element Plus', content: '2000.00' },
  { datetime: '2024/07/17', title: 'Vxe Table', content: '800.00' },
  { datetime: '2024/10/18', title: 'Element Plus', content: '2000.00' },
  { datetime: '2025/02/28', title: 'hyoban', content: '60.00' },
  { datetime: '2025/03/19', title: 'Element Plus', content: '10000.00' },
]
<\/script>

<template>
  <FmTimeline :data="data" class="h-100">
    <template #default="{ item }">
      <FmCard>
        <template #header>
          <p>向 <b>{{ item.title }}</b> 赞助</p>
        </template>
        <div>{{ item.content }} 元</div>
      </FmCard>
    </template>
  </FmTimeline>
</template>
`,dt=v({__name:"index",setup(p){return(s,u)=>{const l=I,m=k;return c(),x(m,{navbar:"","navbar-start-side":"back"},{default:n(()=>[a("div",null,[e(l,{code:d(X)},{default:n(()=>[e(W)]),_:1},8,["code"]),e(l,{code:d(et),title:"合并时间线"},{default:n(()=>[e(tt)]),_:1},8,["code"]),e(l,{code:d(at),title:"设置高度并出现滚动条"},{default:n(()=>[e(nt)]),_:1},8,["code"])])]),_:1})}}});export{dt as default};
