
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{j as e,m as t,t as n}from"./src-CTlveZFi.js";import{D as r,E as i,On as a,_ as o,b as s,k as c,mt as l,nr as u,qt as d,v as f,y as p}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as m}from"./AppPageLayout-DpGpaj5G.js";var h={key:0,class:`flex-center-end flex-1`},g=c({__name:`_demo1`,setup(t){let i=[{datetime:`2025/03/23`,content:`请假申请`,name:`张三`},{datetime:`2025/03/23`,content:`部门主管审批`,name:`李四`},{datetime:`2025/03/24`,content:`人事审批`,name:`王五`},{datetime:`2025/03/24`,content:`完成`}];return(t,a)=>{let c=e,m=n;return l(),f(m,{data:i},{default:d(({item:e})=>[r(c,{class:`h-full`},{header:d(()=>[o(`div`,null,u(e.content),1)]),footer:d(()=>[e.name?(l(),s(`div`,h,[o(`div`,null,`操作人：`+u(e.name),1)])):p(``,!0)]),_:2},1024)]),_:1})}}}),_=`<script setup lang="ts">
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
`,v={key:0,class:`flex-center-end flex-1`},y=c({__name:`_demo2`,setup(t){let i=[{datetime:`2025/03/23`,content:`请假申请`,name:`张三`},{datetime:`2025/03/23`,content:`部门主管审批`,name:`李四`},{datetime:`2025/03/24`,content:`人事审批`,name:`王五`},{datetime:`2025/03/24`,content:`完成`}];return(t,a)=>{let c=e,m=n;return l(),f(m,{data:i,merge:``},{default:d(({item:e})=>[r(c,{class:`h-full`},{header:d(()=>[o(`div`,null,u(e.content),1)]),footer:d(()=>[e.name?(l(),s(`div`,v,[o(`div`,null,`操作人：`+u(e.name),1)])):p(``,!0)]),_:2},1024)]),_:1})}}}),b=`<script setup lang="ts">
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
`,x=c({__name:`_demo3`,setup(t){let a=[{datetime:`2022/05/08`,title:`Element Plus`,content:`4000.00`},{datetime:`2022/07/06`,title:`Element Plus`,content:`4000.00`},{datetime:`2022/08/08`,title:`Element Plus`,content:`4000.00`},{datetime:`2024/01/09`,title:`condorheroblog`,content:`100.00`},{datetime:`2024/01/12`,title:`antfu`,content:`1024.00`},{datetime:`2024/01/12`,title:`sxzz`,content:`256.00`},{datetime:`2024/02/04`,title:`Vue.js`,content:`15000.00`},{datetime:`2024/05/06`,title:`Element Plus`,content:`2000.00`},{datetime:`2024/07/17`,title:`Vxe Table`,content:`800.00`},{datetime:`2024/10/18`,title:`Element Plus`,content:`2000.00`},{datetime:`2025/02/28`,title:`hyoban`,content:`60.00`},{datetime:`2025/03/19`,title:`Element Plus`,content:`10000.00`}];return(t,s)=>{let c=e,p=n;return l(),f(p,{data:a,class:`h-100`},{default:d(({item:e})=>[r(c,null,{header:d(()=>[o(`p`,null,[s[0]||(s[0]=i(`向 `,-1)),o(`b`,null,u(e.title),1),s[1]||(s[1]=i(` 赞助`,-1))])]),default:d(()=>[o(`div`,null,u(e.content)+` 元`,1)]),_:2},1024)]),_:1})}}}),S=`<script setup lang="ts">
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
`,C=c({__name:`index`,setup(e){return(e,n)=>{let i=t,s=m;return l(),f(s,{navbar:``,"navbar-start-side":`back`},{default:d(()=>[o(`div`,null,[r(i,{code:a(_)},{default:d(()=>[r(g)]),_:1},8,[`code`]),r(i,{code:a(b),title:`合并时间线`},{default:d(()=>[r(y)]),_:1},8,[`code`]),r(i,{code:a(S),title:`设置高度并出现滚动条`},{default:d(()=>[r(x)]),_:1},8,[`code`])])]),_:1})}}});export{C as default};