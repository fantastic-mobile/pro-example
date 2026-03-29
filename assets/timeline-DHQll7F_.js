
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{C as e,Ct as t,H as n,S as r,b as i,kt as a,rt as o,v as s,w as c,x as l,y as u}from"./vue.runtime.esm-bundler-DMY3hWtO.js";import{L as d,P as f,i as p}from"./components-CBpXWGFQ.js";import{t as m}from"./AppPageLayout-S1V78StU.js";var h={key:0,class:`flex-center-end flex-1`},g=c({__name:`_demo1`,setup(t){let r=[{datetime:`2025/03/23`,content:`请假申请`,name:`张三`},{datetime:`2025/03/23`,content:`部门主管审批`,name:`李四`},{datetime:`2025/03/24`,content:`人事审批`,name:`王五`},{datetime:`2025/03/24`,content:`完成`}];return(t,c)=>{let f=d,m=p;return n(),u(m,{data:r},{default:o(({item:t})=>[e(f,{class:`h-full`},{header:o(()=>[s(`div`,null,a(t.content),1)]),footer:o(()=>[t.name?(n(),l(`div`,h,[s(`div`,null,`操作人：`+a(t.name),1)])):i(``,!0)]),_:2},1024)]),_:1})}}}),_=`<script setup lang="ts">
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
`,v={key:0,class:`flex-center-end flex-1`},y=c({__name:`_demo2`,setup(t){let r=[{datetime:`2025/03/23`,content:`请假申请`,name:`张三`},{datetime:`2025/03/23`,content:`部门主管审批`,name:`李四`},{datetime:`2025/03/24`,content:`人事审批`,name:`王五`},{datetime:`2025/03/24`,content:`完成`}];return(t,c)=>{let f=d,m=p;return n(),u(m,{data:r,merge:``},{default:o(({item:t})=>[e(f,{class:`h-full`},{header:o(()=>[s(`div`,null,a(t.content),1)]),footer:o(()=>[t.name?(n(),l(`div`,v,[s(`div`,null,`操作人：`+a(t.name),1)])):i(``,!0)]),_:2},1024)]),_:1})}}}),b=`<script setup lang="ts">
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
`,x=c({__name:`_demo3`,setup(t){let i=[{datetime:`2022/05/08`,title:`Element Plus`,content:`4000.00`},{datetime:`2022/07/06`,title:`Element Plus`,content:`4000.00`},{datetime:`2022/08/08`,title:`Element Plus`,content:`4000.00`},{datetime:`2024/01/09`,title:`condorheroblog`,content:`100.00`},{datetime:`2024/01/12`,title:`antfu`,content:`1024.00`},{datetime:`2024/01/12`,title:`sxzz`,content:`256.00`},{datetime:`2024/02/04`,title:`Vue.js`,content:`15000.00`},{datetime:`2024/05/06`,title:`Element Plus`,content:`2000.00`},{datetime:`2024/07/17`,title:`Vxe Table`,content:`800.00`},{datetime:`2024/10/18`,title:`Element Plus`,content:`2000.00`},{datetime:`2025/02/28`,title:`hyoban`,content:`60.00`},{datetime:`2025/03/19`,title:`Element Plus`,content:`10000.00`}];return(t,c)=>{let l=d,f=p;return n(),u(f,{data:i,class:`h-100`},{default:o(({item:t})=>[e(l,null,{header:o(()=>[s(`p`,null,[c[0]||(c[0]=r(`向 `,-1)),s(`b`,null,a(t.title),1),c[1]||(c[1]=r(` 赞助`,-1))])]),default:o(()=>[s(`div`,null,a(t.content)+` 元`,1)]),_:2},1024)]),_:1})}}}),S=`<script setup lang="ts">
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
`,C=c({__name:`index`,setup(r){return(r,i)=>{let a=f,c=m;return n(),u(c,{navbar:``,"navbar-start-side":`back`},{default:o(()=>[s(`div`,null,[e(a,{code:t(_)},{default:o(()=>[e(g)]),_:1},8,[`code`]),e(a,{code:t(b),title:`合并时间线`},{default:o(()=>[e(y)]),_:1},8,[`code`]),e(a,{code:t(S),title:`设置高度并出现滚动条`},{default:o(()=>[e(x)]),_:1},8,[`code`])])]),_:1})}}});export{C as default};