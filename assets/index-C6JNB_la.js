
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as F}from"./index-CmISDTFT.js";import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-vDF_K-gu.js";import{d as L,r as x,R as B,c as v,o,ab as $,w as g,k as d,p as b,a5 as E,a as p,a6 as M,b as f,f as P,F as I,n as A,Z as N,u as n,q as V,t as C,e as j,_ as D,V as S}from"./index-CUJLi7no.js";import"./index.vue_vue_type_script_setup_true_lang-DvoaD5o-.js";const R={key:0,class:"fixed inset-0 z-5000 size-full flex items-center justify-center backdrop-blur-2xl"},q={class:"relative h-96"},Y={class:"relative mx-auto mt-40 max-w-xl flex flex-col justify-start"},Z={class:"flex flex-col"},G={key:0,class:"mt-1 text-sm text-gray-500 dark:text-gray-400"},H=L({name:"FmMultiStepLoader",__name:"index",props:{loading:{type:Boolean,default:!1},steps:{},preventClose:{type:Boolean,default:!1}},emits:["stateChange","complete","close","error"],setup(w,{emit:i}){const l=w,c=i,e=x(0),u=x(!1),a=x({});async function r(t){if(typeof t.action=="function")try{const m=await t.action(a.value);return t.name&&(a.value[t.name]=m),!0}catch(m){return c("error",m,e.value),!1}return!0}async function k(){const t=l.steps[e.value];!t||!await r(t)||(e.value<l.steps.length-1?(e.value++,c("stateChange",e.value),h()):(u.value=!0,c("complete")))}async function h(){l.steps[e.value]&&await k()}function T(){c("close")}return B(()=>l.loading,t=>{t&&(e.value=0,u.value=!1,a.value={},h())}),(t,m)=>{const _=P;return o(),v($,{"enter-active-class":"transition-opacity duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-opacity duration-300","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:g(()=>[t.loading&&t.steps.length>0?(o(),d("div",R,[E(p("button",{class:"absolute right-4 top-4 z-5001 h-9 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-3 text-sm text-primary-foreground font-medium ring-offset-background transition-colors disabled:pointer-events-none hover:bg-primary/90 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",size:"sm",onClick:T},[f(_,{name:"i-heroicons:x-mark",class:"size-6"})],512),[[M,!t.preventClose]]),p("div",q,[p("div",Y,[(o(!0),d(I,null,A(t.steps,(y,s)=>(o(),d("div",{key:s},[y?(o(),d("div",{key:0,class:"mb-4 flex items-center gap-2 text-left transition-all duration-300 ease-in-out",style:N({opacity:s===n(e)?1:Math.max(1-Math.abs(s-n(e))*.2,0),transform:`translateY(${s===n(e)?-(n(e)*40):-(n(e)*40)}px)`})},[s<n(e)||s===t.steps.length-1&&s===n(e)&&n(u)?(o(),v(_,{key:0,name:"i-heroicons:check-circle-solid",class:"size-6 text-primary"})):s===n(e)&&(!n(u)||s!==t.steps.length-1)?(o(),v(_,{key:1,name:"i-heroicons:arrow-path",class:"size-6 animate-spin text-primary"})):(o(),v(_,{key:2,name:"i-heroicons:check-circle",class:"size-6 text-black opacity-50 dark:text-white"})),p("div",Z,[p("span",{class:V(["text-lg text-black dark:text-white",[s>n(e)&&"opacity-50"]])},C(y.text),3),f($,{"enter-active-class":"transition-all duration-300","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0"},{default:g(()=>[y.afterText&&(s<n(e)||s===t.steps.length-1&&s===n(e)&&n(u))?(o(),d("span",G,C(y.afterText),1)):b("",!0)]),_:2},1024)])],4)):b("",!0)]))),128))])]),m[0]||(m[0]=p("div",{class:"[mask-image:radial-gradient(900px_at_center,hsl(var(--primary))_30%,transparent)] absolute inset-x-0 bottom-0 z--1 h-full bg-white bg-gradient-to-t dark:bg-black"},null,-1))])):b("",!0)]),_:1})}}}),J={class:"flex gap-4"},K=L({__name:"_demo1",setup(w){const i=x(!1),l=[{text:"获取用户数据",afterText:"获取用户数据成功",name:"user",action:async()=>(await new Promise(a=>setTimeout(a,1e3)),{id:1,name:"张三"})},{text:"获取用户订单（随机模拟出错）",afterText:"获取用户订单成功",name:"orders",action:async a=>{if(await new Promise(r=>setTimeout(r,1500)),Math.random()>.5)throw new Error("获取订单数据失败：网络连接超时");return[{id:1,userId:a.user.id,product:"商品A"},{id:2,userId:a.user.id,product:"商品B"}]}},{text:"处理订单数据",action:async a=>(await new Promise(r=>setTimeout(r,2e3)),{user:a.user,orders:a.orders,totalAmount:a.orders.length*100})}];function c(a){S.info(`当前步骤：${a+1}`)}function e(){S.success("所有步骤已完成"),i.value=!1}function u(a,r){S.error(`步骤 ${r+1} 执行失败: ${a.message}`),i.value=!1}return(a,r)=>{const k=D,h=H;return o(),d("div",J,[f(k,{onClick:r[0]||(r[0]=T=>i.value=!n(i))},{default:g(()=>[j(C(n(i)?"停止":"开始"),1)]),_:1}),f(h,{loading:n(i),steps:l,"prevent-close":"",onStateChange:c,onComplete:e,onError:u},null,8,["loading"])])}}}),O=`<script setup lang="ts">
import type { Step, StepContext } from '@/ui/components/FmMultiStepLoader/index.vue'
import { toast } from 'vue-sonner'

const isLoading = ref(false)
const taskSteps: Step[] = [
  {
    text: '获取用户数据',
    afterText: '获取用户数据成功',
    name: 'user',
    action: async () => {
      // 模拟异步请求
      await new Promise(resolve => setTimeout(resolve, 1000))
      return { id: 1, name: '张三' }
    },
  },
  {
    text: '获取用户订单（随机模拟出错）',
    afterText: '获取用户订单成功',
    name: 'orders',
    action: async (context: StepContext) => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      // 随机模拟错误
      if (Math.random() > 0.5) {
        throw new Error('获取订单数据失败：网络连接超时')
      }
      return [
        { id: 1, userId: context.user.id, product: '商品A' },
        { id: 2, userId: context.user.id, product: '商品B' },
      ]
    },
  },
  {
    text: '处理订单数据',
    action: async (context: StepContext) => {
      // 模拟异步请求
      await new Promise(resolve => setTimeout(resolve, 2000))
      return {
        user: context.user,
        orders: context.orders,
        totalAmount: context.orders.length * 100,
      }
    },
  },
]

function handleStateChange(state: number) {
  toast.info(\`当前步骤：\${state + 1}\`)
}

function handleComplete() {
  toast.success('所有步骤已完成')
  isLoading.value = false
}

function handleError(error: Error, stepIndex: number) {
  toast.error(\`步骤 \${stepIndex + 1} 执行失败: \${error.message}\`)
  isLoading.value = false
}
<\/script>

<template>
  <div class="flex gap-4">
    <FmButton @click="isLoading = !isLoading">
      {{ isLoading ? '停止' : '开始' }}
    </FmButton>
    <FmMultiStepLoader
      :loading="isLoading"
      :steps="taskSteps"
      prevent-close
      @state-change="handleStateChange"
      @complete="handleComplete"
      @error="handleError"
    />
  </div>
</template>
`,ee=L({__name:"index",setup(w){return(i,l)=>{const c=z,e=F;return o(),v(e,{navbar:"","navbar-start-side":"back"},{default:g(()=>[f(c,{code:n(O)},{default:g(()=>[f(K)]),_:1},8,["code"])]),_:1})}}});export{ee as default};
