
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as D}from"./index-CDvm7Wea.js";import{_ as I}from"./index.vue_vue_type_script_setup_true_lang-Jnxs0B3b.js";import{d as x,U as N,r as V,z,c as g,o as i,at as B,u as c,K as S,w as n,k as v,p as T,a as o,b as e,n as Y,F as j,bj as F,q as M,B as R,s as A,t as _,e as E}from"./index-_PLUdafA.js";import{_ as L,a as q}from"./index.vue_vue_type_script_setup_true_lang-BPnFkR1F.js";import{_ as y}from"./index.vue_vue_type_script_setup_true_lang-DP3AXlvz.js";import"./index.vue_vue_type_script_setup_true_lang-DiSEdd4T.js";const G={key:0,class:"absolute top-0 z-1 w-20 flex-col-center-start p-2 backdrop-blur"},K={class:"flex items-center"},O={class:"w-full flex flex-col gap-4"},U={class:"flex items-center"},H={class:"flex-1"},J=x({name:"FmTimeline",__name:"index",props:{data:{default:()=>[]},merge:{type:Boolean,default:!1},class:{}},setup(p){const s=p,r=N("timelineItems"),a=V(0),m=z(()=>{const t=r.value?.map(h=>h.offsetTop-60);return Math.max(0,(t?.findIndex(h=>h>a.value)??1)-1)});function d(t){a.value=t.target.scrollTop}function l(t){return F(t).format("YYYY")}function P(t){return F(t).format("MM")}function w(t){return F(t).format("DD")}return(t,h)=>{const u=L,$=q,k=B;return i(),g(k,{"content-class":c(S)("relative w-full",s.class),onOnScroll:d},{default:n(()=>[t.data.length?(i(),v("div",G,[e(u,{value:Number(l(t.data[c(m)].datetime)),"will-change":"",format:{notation:"compact"},class:"text-lg font-bold opacity-20"},null,8,["value"]),o("div",K,[e($,null,{default:n(()=>[e(u,{value:Number(P(t.data[c(m)].datetime)),"will-change":"",format:{minimumIntegerDigits:2,notation:"compact"},suffix:"/",class:"text-xl font-bold"},null,8,["value"]),e(u,{value:Number(w(t.data[c(m)].datetime)),"will-change":"",format:{minimumIntegerDigits:2,notation:"compact"},class:"text-xl font-bold"},null,8,["value"])]),_:1})])])):T("",!0),o("div",O,[(i(!0),v(j,null,Y(t.data,(f,b)=>(i(),v("div",{key:b,ref_for:!0,ref_key:"timelineItems",ref:r,class:"flex gap-4"},[o("div",{class:M(["w-20 flex-col-center-start p-2 transition-all",{"opacity-0 -translate-y-10":b<=c(m),"opacity-0":s.merge&&b>0&&f.datetime===t.data[b-1].datetime}])},[e(u,{value:Number(l(f.datetime)),format:{notation:"compact"},class:"text-lg font-bold opacity-20"},null,8,["value"]),o("div",U,[e(u,{value:Number(P(f.datetime)),format:{minimumIntegerDigits:2,notation:"compact"},suffix:"/",class:"text-xl font-bold"},null,8,["value"]),e(u,{value:Number(w(f.datetime)),format:{minimumIntegerDigits:2,notation:"compact"},class:"text-xl font-bold"},null,8,["value"])])],2),o("div",H,[R(t.$slots,"default",{item:f},void 0,!0)])]))),128))])]),_:3},8,["content-class"])}}}),C=A(J,[["__scopeId","data-v-3d9835b1"]]),Q={key:0,class:"flex-center-end flex-1"},W=x({__name:"_demo1",setup(p){const s=[{datetime:"2025/03/23",content:"请假申请",name:"张三"},{datetime:"2025/03/23",content:"部门主管审批",name:"李四"},{datetime:"2025/03/24",content:"人事审批",name:"王五"},{datetime:"2025/03/24",content:"完成"}];return(r,a)=>{const m=y,d=C;return i(),g(d,{data:s},{default:n(({item:l})=>[e(m,{class:"h-full"},{header:n(()=>[o("div",null,_(l.content),1)]),footer:n(()=>[l.name?(i(),v("div",Q,[o("div",null,"操作人："+_(l.name),1)])):T("",!0)]),_:2},1024)]),_:1})}}}),X=`<script setup lang="ts">
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
`,Z={key:0,class:"flex-center-end flex-1"},tt=x({__name:"_demo2",setup(p){const s=[{datetime:"2025/03/23",content:"请假申请",name:"张三"},{datetime:"2025/03/23",content:"部门主管审批",name:"李四"},{datetime:"2025/03/24",content:"人事审批",name:"王五"},{datetime:"2025/03/24",content:"完成"}];return(r,a)=>{const m=y,d=C;return i(),g(d,{data:s,merge:""},{default:n(({item:l})=>[e(m,{class:"h-full"},{header:n(()=>[o("div",null,_(l.content),1)]),footer:n(()=>[l.name?(i(),v("div",Z,[o("div",null,"操作人："+_(l.name),1)])):T("",!0)]),_:2},1024)]),_:1})}}}),et=`<script setup lang="ts">
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
`,nt=x({__name:"_demo3",setup(p){const s=[{datetime:"2022/05/08",title:"Element Plus",content:"4000.00"},{datetime:"2022/07/06",title:"Element Plus",content:"4000.00"},{datetime:"2022/08/08",title:"Element Plus",content:"4000.00"},{datetime:"2024/01/09",title:"condorheroblog",content:"100.00"},{datetime:"2024/01/12",title:"antfu",content:"1024.00"},{datetime:"2024/01/12",title:"sxzz",content:"256.00"},{datetime:"2024/02/04",title:"Vue.js",content:"15000.00"},{datetime:"2024/05/06",title:"Element Plus",content:"2000.00"},{datetime:"2024/07/17",title:"Vxe Table",content:"800.00"},{datetime:"2024/10/18",title:"Element Plus",content:"2000.00"},{datetime:"2025/02/28",title:"hyoban",content:"60.00"},{datetime:"2025/03/19",title:"Element Plus",content:"10000.00"}];return(r,a)=>{const m=y,d=C;return i(),g(d,{data:s,class:"h-100"},{default:n(({item:l})=>[e(m,null,{header:n(()=>[o("p",null,[a[0]||(a[0]=E("向 ",-1)),o("b",null,_(l.title),1),a[1]||(a[1]=E(" 赞助",-1))])]),default:n(()=>[o("div",null,_(l.content)+" 元",1)]),_:2},1024)]),_:1})}}}),at=`<script setup lang="ts">
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
`,dt=x({__name:"index",setup(p){return(s,r)=>{const a=I,m=D;return i(),g(m,{navbar:"","navbar-start-side":"back"},{default:n(()=>[o("div",null,[e(a,{code:c(X)},{default:n(()=>[e(W)]),_:1},8,["code"]),e(a,{code:c(et),title:"合并时间线"},{default:n(()=>[e(tt)]),_:1},8,["code"]),e(a,{code:c(at),title:"设置高度并出现滚动条"},{default:n(()=>[e(nt)]),_:1},8,["code"])])]),_:1})}}});export{dt as default};
