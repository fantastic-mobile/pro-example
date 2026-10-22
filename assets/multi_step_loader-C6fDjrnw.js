
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,b as t,c as n,m as r}from"./src-CTlveZFi.js";import{D as i,E as a,On as o,b as s,k as c,mt as l,nr as u,qt as d,v as f,vn as p}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as m}from"./AppPageLayout-DpGpaj5G.js";var h={class:`flex gap-4`},g=c({__name:`_demo1`,setup(r){let c=p(!1),f=[{text:`获取用户数据`,afterText:`获取用户数据成功`,name:`user`,action:async()=>(await new Promise(e=>setTimeout(e,1e3)),{id:1,name:`张三`})},{text:`获取用户订单（随机模拟出错）`,afterText:`获取用户订单成功`,name:`orders`,action:async e=>{if(await new Promise(e=>setTimeout(e,1500)),Math.random()>.5)throw Error(`获取订单数据失败：网络连接超时`);return[{id:1,userId:e.user.id,product:`商品A`},{id:2,userId:e.user.id,product:`商品B`}]}},{text:`处理订单数据`,action:async e=>(await new Promise(e=>setTimeout(e,2e3)),{user:e.user,orders:e.orders,totalAmount:e.orders.length*100})}];function m(e){t.info(`当前步骤：${e+1}`)}function g(){t.success(`所有步骤已完成`),c.value=!1}function _(e,n){t.error(`步骤 ${n+1} 执行失败: ${e.message}`),c.value=!1}return(t,r)=>{let p=e,v=n;return l(),s(`div`,h,[i(p,{onClick:r[0]||(r[0]=e=>c.value=!o(c))},{default:d(()=>[a(u(o(c)?`停止`:`开始`),1)]),_:1}),i(v,{loading:o(c),steps:f,"prevent-close":``,onStateChange:m,onComplete:g,onError:_},null,8,[`loading`])])}}}),_=`<script setup lang="ts">
import type { Step, StepContext } from '@fantastic-mobile/components'
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
`,v=c({__name:`index`,setup(e){return(e,t)=>{let n=r,a=m;return l(),f(a,{navbar:``,"navbar-start-side":`back`},{default:d(()=>[i(n,{code:o(_)},{default:d(()=>[i(g)]),_:1},8,[`code`])]),_:1})}}});export{v as default};