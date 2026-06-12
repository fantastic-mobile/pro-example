
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,Ot as r,Tt as i,_ as a,lt as o,mt as s,rt as c,v as l,w as u,x as d,y as f}from"./vue.runtime.esm-bundler-DOMO_wpA.js";import{F as p,x as m}from"./src-C_SUC8up.js";import{t as h}from"./AppPageLayout-CilNLEuS.js";var g={class:`gap-4 grid`},_={class:`text-sm text-muted-foreground`},v=u({__name:`_demo1`,setup(i){let a=s(`comfortable`),c=[{label:`默认`,value:`default`},{label:`舒适`,value:`comfortable`},{label:`紧凑`,value:`compact`}];return(i,s)=>{let u=p;return n(),d(`div`,g,[e(u,{modelValue:t(a),"onUpdate:modelValue":s[0]||(s[0]=e=>o(a)?a.value=e:null),options:c},null,8,[`modelValue`]),e(u,{modelValue:t(a),"onUpdate:modelValue":s[1]||(s[1]=e=>o(a)?a.value=e:null),options:c,class:`flex`},null,8,[`modelValue`]),l(`div`,_,` 当前值：`+r(t(a)),1)])}}}),y=`<script setup lang="ts">
const value = ref('comfortable')

const options = [
  { label: '默认', value: 'default' },
  { label: '舒适', value: 'comfortable' },
  { label: '紧凑', value: 'compact' },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <FmRadioGroup v-model="value" :options="options" />
    <FmRadioGroup v-model="value" :options="options" class="flex" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ value }}
    </div>
  </div>
</template>
`,b={class:`gap-4 grid`},x={class:`text-sm text-muted-foreground`},S=u({__name:`_demo2`,setup(i){let c=s(`growth`),u=[{label:`创业版`,value:`starter`,description:`适合 1-10 人小团队，保留核心能力。`},{label:`成长版`,value:`growth`,description:`适合多角色协作，支持审批与审计流程。`},{label:`企业版`,value:`enterprise`,description:`高级安全策略与 SSO 即将开放。`,disabled:!0}],f=a(()=>u.find(e=>e.value===c.value)?.label??``);return(i,a)=>{let s=p;return n(),d(`div`,b,[e(s,{modelValue:t(c),"onUpdate:modelValue":a[0]||(a[0]=e=>o(c)?c.value=e:null),options:u},null,8,[`modelValue`]),l(`div`,x,` 已选套餐：`+r(t(f)),1)])}}}),C=`<script setup lang="ts">
const value = ref('growth')

const options = [
  {
    label: '创业版',
    value: 'starter',
    description: '适合 1-10 人小团队，保留核心能力。',
  },
  {
    label: '成长版',
    value: 'growth',
    description: '适合多角色协作，支持审批与审计流程。',
  },
  {
    label: '企业版',
    value: 'enterprise',
    description: '高级安全策略与 SSO 即将开放。',
    disabled: true,
  },
]

const currentLabel = computed(() =>
  options.find(option => option.value === value.value)?.label ?? '',
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FmRadioGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      已选套餐：{{ currentLabel }}
    </div>
  </div>
</template>
`,w={class:`gap-4 grid`},T={class:`gap-1 grid min-w-0`},E={class:`flex gap-2 items-center`},D={class:`text-sm font-medium truncate`},O={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},k={class:`text-xs text-muted-foreground leading-5`},A={class:`text-sm text-muted-foreground`},j=u({__name:`_demo3`,setup(a){let u=s(`balanced`),f=[{label:`专注模式`,value:`focus`,badge:`录入`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,badge:`推荐`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,badge:`大屏`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(a,s)=>{let m=p;return n(),d(`div`,w,[e(m,{modelValue:t(u),"onUpdate:modelValue":s[0]||(s[0]=e=>o(u)?u.value=e:null),options:f,class:`gap-2`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:c(({option:e,checked:t,disabled:n})=>[l(`div`,{class:i([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[t?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,n&&`opacity-60`]])},[l(`div`,T,[l(`div`,E,[l(`span`,D,r(e.label),1),l(`span`,O,r(e.badge),1)]),l(`div`,k,r(e.description),1)]),l(`span`,{class:i([`text-xs font-medium shrink-0`,t?`text-primary`:`text-muted-foreground`])},r(t?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),l(`div`,A,` 当前值：`+r(t(u)),1)])}}}),M=`<script setup lang="ts">
const value = ref('balanced')

const options = [
  {
    label: '专注模式',
    value: 'focus',
    badge: '录入',
    description: '突出主任务，弱化辅助信息，适合录入和审批场景。',
  },
  {
    label: '平衡模式',
    value: 'balanced',
    badge: '推荐',
    description: '信息密度与可读性保持平衡，适合作为默认配置。',
  },
  {
    label: '高密度模式',
    value: 'dense',
    badge: '大屏',
    description: '在大屏中同时承载更多信息，适合运营与监控看板。',
  },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <FmRadioGroup
      v-model="value"
      :options="options"
      class="gap-2"
      option-class="rounded-xl border border-transparent px-1 py-1"
    >
      <template #option="{ option, checked, disabled }">
        <div
          class="px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between" :class="[
            checked ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40',
            disabled && 'opacity-60',
          ]"
        >
          <div class="gap-1 grid min-w-0">
            <div class="flex gap-2 items-center">
              <span class="text-sm font-medium truncate">{{ option.label }}</span>
              <span class="text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                {{ option.badge }}
              </span>
            </div>
            <div class="text-xs text-muted-foreground leading-5">
              {{ option.description }}
            </div>
          </div>
          <span class="text-xs font-medium shrink-0" :class="checked ? 'text-primary' : 'text-muted-foreground'">
            {{ checked ? '已选中' : '可选择' }}
          </span>
        </div>
      </template>
    </FmRadioGroup>
    <div class="text-sm text-muted-foreground">
      当前值：{{ value }}
    </div>
  </div>
</template>
`,N=u({__name:`index`,setup(r){return(r,i)=>{let a=m,o=h;return n(),f(o,{navbar:``,"navbar-start-side":`back`},{default:c(()=>[l(`div`,null,[e(a,{code:t(y)},{default:c(()=>[e(v)]),_:1},8,[`code`]),e(a,{title:`带描述和禁用态`,code:t(C)},{default:c(()=>[e(S)]),_:1},8,[`code`]),e(a,{title:`自定义选项内容`,code:t(M)},{default:c(()=>[e(j)]),_:1},8,[`code`])])]),_:1})}}});export{N as default};