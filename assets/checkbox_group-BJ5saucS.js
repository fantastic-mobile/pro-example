
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{Bt as e,Rt as t,dt as n,m as r,zt as i}from"./src-CTlveZFi.js";import{$ as a,D as o,Ft as s,Ht as c,Lt as l,On as u,Pt as d,Yt as f,Zn as p,_ as m,b as h,bt as g,g as _,k as v,mt as y,nr as b,o as x,qt as S,un as C,v as w,vn as T,xt as E,y as D}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as O}from"./Checkbox-DEaiwcVG.js";import{t as k}from"./Label-Bsws0Ln_.js";import{t as A}from"./AppPageLayout-DpGpaj5G.js";var j=[`dir`],M=[`tabindex`,`role`,`aria-checked`,`aria-disabled`,`onClick`,`onKeydown`],N={class:`gap-1 grid min-w-0`},P={class:`truncate`},F={key:0,class:`text-xs text-muted-foreground leading-5 font-normal`},I=v({name:`BuiltInCheckboxGroup`,__name:`index`,props:a({options:{},disabled:{type:Boolean},min:{},max:{},dir:{},class:{type:[Boolean,null,String,Object,Array]},optionClass:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]},labelClass:{type:[Boolean,null,String,Object,Array]}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:a([`change`],[`update:modelValue`]),setup(r,{emit:a}){let v=r,C=a,w=l(),T=s(r,`modelValue`),A=d(),I=_(()=>T.value.length);c(T,e=>{C(`change`,e)});function L(e,t){return e.id||`${A}-${t}`}function R(e,t){return e.id?e.id:typeof e.value==`string`||typeof e.value==`number`?e.value:t}function z(e){if(v.disabled||e.disabled)return!0;let t=V(e);return!!(t&&v.min!==void 0&&I.value<=v.min||!t&&v.max!==void 0&&I.value>=v.max)}function B(e){return T.value.findIndex(t=>Object.is(t,e.value))}function V(e){return B(e)>-1}function H(e,t){let n=[...T.value],r=n.findIndex(t=>Object.is(t,e.value));t?r===-1&&n.push(e.value):r>-1&&n.splice(r,1),T.value=n}function U(e,t){z(e)||H(e,t===!0)}function W(e){!w.option||z(e)||H(e,!V(e))}function G(e){!w.option||z(e)||H(e,!V(e))}return(a,s)=>(y(),h(`div`,{role:`group`,dir:r.dir,class:p(u(n)(`grid gap-3`,v.class))},[(y(!0),h(x,null,g(v.options,(r,s)=>(y(),h(`div`,{key:R(r,s),tabindex:w.option&&!z(r)?0:void 0,role:w.option?`checkbox`:void 0,"aria-checked":w.option?`${V(r)}`:void 0,"aria-disabled":w.option?`${z(r)}`:void 0,class:p(u(n)(`flex gap-2`,r.description?`items-start`:`items-center`,w.option&&`outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-xl`,v.optionClass)),onClick:e=>W(r),onKeydown:[i(e(e=>G(r),[`prevent`]),[`enter`]),i(e(e=>G(r),[`prevent`]),[`space`])]},[f(o(u(O),{id:L(r,s),"model-value":V(r),disabled:z(r),class:p(v.itemClass),"onUpdate:modelValue":e=>U(r,e)},null,8,[`id`,`model-value`,`disabled`,`class`,`onUpdate:modelValue`]),[[t,!w.option]]),o(u(k),{for:w.option?void 0:L(r,s),class:p(u(n)(`min-w-0 flex-1 cursor-pointer gap-0`,r.description?`items-start`:`items-center`,z(r)&&`cursor-not-allowed opacity-60`,v.labelClass))},{default:S(()=>[E(a.$slots,`option`,{id:L(r,s),option:r,checked:V(r),disabled:z(r)},()=>[m(`div`,N,[m(`span`,P,b(r.label),1),r.description?(y(),h(`span`,F,b(r.description),1)):D(``,!0)])])]),_:2},1032,[`for`,`class`])],42,M))),128))],10,j))}}),L={class:`gap-4 grid`},R={class:`text-sm text-muted-foreground`},z=v({__name:`_demo1`,setup(e){let t=T([`music`]),n=[{label:`阅读`,value:`reading`},{label:`音乐`,value:`music`},{label:`运动`,value:`sports`}],r=_(()=>n.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,i)=>{let a=I;return y(),h(`div`,L,[o(a,{modelValue:u(t),"onUpdate:modelValue":i[0]||(i[0]=e=>C(t)?t.value=e:null),options:n},null,8,[`modelValue`]),o(a,{modelValue:u(t),"onUpdate:modelValue":i[1]||(i[1]=e=>C(t)?t.value=e:null),options:n,class:`flex`},null,8,[`modelValue`]),m(`div`,R,` 当前值：`+b(u(r)),1)])}}}),B=`<script setup lang="ts">
const value = ref(['music'])

const options = [
  { label: '阅读', value: 'reading' },
  { label: '音乐', value: 'music' },
  { label: '运动', value: 'sports' },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FmCheckboxGroup v-model="value" :options="options" />
    <FmCheckboxGroup v-model="value" :options="options" class="flex" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText }}
    </div>
  </div>
</template>
`,V={class:`gap-4 grid`},H={class:`text-sm text-muted-foreground`},U=v({__name:`_demo2`,setup(e){let t=T([`dashboard`,`report`]),n=[{label:`看板订阅`,value:`dashboard`,description:`每天 8:00 推送核心经营指标。`},{label:`周报摘要`,value:`report`,description:`每周一汇总关键数据变化。`},{label:`系统告警`,value:`alarm`,description:`异常波动时立即通知处理人。`,disabled:!0}],r=_(()=>n.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,i)=>{let a=I;return y(),h(`div`,V,[o(a,{modelValue:u(t),"onUpdate:modelValue":i[0]||(i[0]=e=>C(t)?t.value=e:null),options:n},null,8,[`modelValue`]),m(`div`,H,` 当前值：`+b(u(r)),1)])}}}),W=`<script setup lang="ts">
const value = ref(['dashboard', 'report'])

const options = [
  {
    label: '看板订阅',
    value: 'dashboard',
    description: '每天 8:00 推送核心经营指标。',
  },
  {
    label: '周报摘要',
    value: 'report',
    description: '每周一汇总关键数据变化。',
  },
  {
    label: '系统告警',
    value: 'alarm',
    description: '异常波动时立即通知处理人。',
    disabled: true,
  },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FmCheckboxGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText }}
    </div>
  </div>
</template>
`,G={class:`gap-4 grid`},K={class:`gap-1 grid min-w-0`},q={class:`flex gap-2 items-center`},J={class:`text-sm font-medium truncate`},Y={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},X={class:`text-xs text-muted-foreground leading-5`},Z={class:`text-sm text-muted-foreground`},Q=v({__name:`_demo3`,setup(e){let t=T([`focus`,`balanced`]),n=[{label:`专注模式`,value:`focus`,summary:`任务优先`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,summary:`默认体验`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,summary:`信息看板`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(e,r)=>{let i=I;return y(),h(`div`,G,[o(i,{modelValue:u(t),"onUpdate:modelValue":r[0]||(r[0]=e=>C(t)?t.value=e:null),options:n,class:`gap-2`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:S(({option:e,checked:t,disabled:n})=>[m(`div`,{class:p([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[t?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,n&&`opacity-60`]])},[m(`div`,K,[m(`div`,q,[m(`span`,J,b(e.label),1),m(`span`,Y,b(e.summary),1)]),m(`div`,X,b(e.description),1)]),m(`span`,{class:p([`text-xs font-medium shrink-0`,t?`text-primary`:`text-muted-foreground`])},b(t?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),m(`div`,Z,` 当前值：`+b(u(t).join(`、`)),1)])}}}),$=`<script setup lang="ts">
const value = ref(['focus', 'balanced'])

const options = [
  {
    label: '专注模式',
    value: 'focus',
    summary: '任务优先',
    description: '突出主任务，弱化辅助信息，适合录入和审批场景。',
  },
  {
    label: '平衡模式',
    value: 'balanced',
    summary: '默认体验',
    description: '信息密度与可读性保持平衡，适合作为默认配置。',
  },
  {
    label: '高密度模式',
    value: 'dense',
    summary: '信息看板',
    description: '在大屏中同时承载更多信息，适合运营与监控看板。',
  },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <FmCheckboxGroup
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
                {{ option.summary }}
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
    </FmCheckboxGroup>
    <div class="text-sm text-muted-foreground">
      当前值：{{ value.join('、') }}
    </div>
  </div>
</template>
`,ee={class:`gap-4 grid`},te={class:`text-sm text-muted-foreground`},ne=v({__name:`_demo4`,setup(e){let t=T([`dashboard`]),n=[{label:`看板订阅`,value:`dashboard`},{label:`周报摘要`,value:`report`},{label:`系统告警`,value:`alarm`}],r=_(()=>n.filter(e=>t.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,i)=>{let a=I;return y(),h(`div`,ee,[o(a,{modelValue:u(t),"onUpdate:modelValue":i[0]||(i[0]=e=>C(t)?t.value=e:null),options:n,min:1,max:2},null,8,[`modelValue`]),m(`div`,te,` 当前值：`+b(u(r)),1),i[1]||(i[1]=m(`div`,{class:`text-xs text-muted-foreground leading-5`},` 已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。 `,-1))])}}}),re=`<script setup lang="ts">
const value = ref(['dashboard'])

const options = [
  { label: '看板订阅', value: 'dashboard' },
  { label: '周报摘要', value: 'report' },
  { label: '系统告警', value: 'alarm' },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FmCheckboxGroup
      v-model="value"
      :options="options"
      :min="1"
      :max="2"
    />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText }}
    </div>
    <div class="text-xs text-muted-foreground leading-5">
      已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。
    </div>
  </div>
</template>
`,ie=v({__name:`index`,setup(e){return(e,t)=>{let n=r,i=A;return y(),w(i,{navbar:``,"navbar-start-side":`back`},{default:S(()=>[m(`div`,null,[o(n,{code:u(B)},{default:S(()=>[o(z)]),_:1},8,[`code`]),o(n,{title:`带描述和禁用态`,code:u(W)},{default:S(()=>[o(U)]),_:1},8,[`code`]),o(n,{title:`自定义选项内容`,code:u($)},{default:S(()=>[o(Q)]),_:1},8,[`code`]),o(n,{title:`最少 / 最多选择`,code:u(re)},{default:S(()=>[o(ne)]),_:1},8,[`code`])])]),_:1})}}});export{ie as default};