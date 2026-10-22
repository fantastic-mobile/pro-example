
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{$ as e,A as t,At as n,Bt as r,Dt as i,F as a,G as o,I as s,Q as c,R as l,Rt as u,X as d,Z as f,dt as p,et as m,it as h,m as g,ot as _,q as v,tt as y,yt as b,zt as x}from"./src-CTlveZFi.js";import{$ as S,$n as C,D as w,Ft as ee,Ht as te,Lt as ne,On as T,Pt as E,Tn as D,Yt as O,Zn as k,_ as A,b as j,bt as M,et as N,g as P,k as F,mt as I,nr as L,o as R,qt as z,un as B,v as V,vn as H,xt as U,y as W,z as G}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as K}from"./is-equal-DpdE2tV5.js";import{t as q}from"./Label-Bsws0Ln_.js";import{t as J}from"./AppPageLayout-DpGpaj5G.js";var Y=`radio.select`;function X(e,t,n){h(Y,n,{originalEvent:e,value:t})}var Z=F({inheritAttrs:!1,__name:`Radio`,props:{id:{type:String,required:!1},value:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},checked:{type:Boolean,required:!1,default:void 0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:[`update:checked`,`select`],setup(t,{emit:n}){let a=t,s=n,c=i(a,`checked`,s,{passive:a.checked===void 0}),{value:u}=D(a),{forwardRef:f,currentElement:p}=e(),h=m(p),g=d(),_=P(()=>a.id&&p.value?document.querySelector(`[for="${a.id}"]`)?.innerText:void 0);function v(e){a.disabled||X(e,a.value,e=>{s(`select`,e),!e?.defaultPrevented&&(c.value=!0,h.value&&e.stopPropagation())})}return(e,t)=>(I(),j(R,null,[w(T(o),N({id:e.id,ref:T(f),role:`radio`,type:e.as===`button`?`button`:void 0,as:e.as,"aria-checked":T(c)??!1,"aria-label":_.value,"as-child":e.asChild,disabled:e.disabled?``:void 0,"data-state":T(c)?`checked`:`unchecked`,"data-disabled":e.disabled?``:void 0,value:T(u),required:e.required,name:e.name},{...T(g),...e.$attrs},{onClick:r(v,[`stop`])}),{default:z(()=>[U(e.$slots,`default`,{checked:T(c)})]),_:3},16,[`id`,`type`,`as`,`aria-checked`,`aria-label`,`as-child`,`disabled`,`data-state`,`data-disabled`,`value`,`required`,`name`]),T(h)&&e.name?(I(),V(T(l),N({key:0,type:`radio`,tabindex:`-1`,value:T(u),checked:!!T(c),name:e.name,disabled:e.disabled,required:e.required},T(g)),null,16,[`value`,`checked`,`name`,`disabled`,`required`])):W(`v-if`,!0)],64))}}),[re,ie]=_(`RadioGroupRoot`),ae=F({__name:`RadioGroupRoot`,props:{modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},orientation:{type:String,required:!1,default:void 0},dir:{type:String,required:!1},loop:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1,default:!1}},emits:[`update:modelValue`],setup(t,{emit:n}){let r=t,a=n,{forwardRef:c,currentElement:u}=e(),d=i(r,`modelValue`,a,{defaultValue:r.defaultValue,passive:r.modelValue===void 0}),{disabled:f,loop:p,orientation:h,name:g,required:_,dir:v}=D(r),b=y(v),x=m(u);return ie({modelValue:d,changeModelValue:e=>{d.value=e},disabled:f,loop:p,orientation:h,name:g?.value,required:_}),(e,t)=>(I(),V(T(s),{"as-child":``,orientation:T(h),dir:T(b),loop:T(p)},{default:z(()=>[w(T(o),{ref:T(c),role:`radiogroup`,"data-disabled":T(f)?``:void 0,"as-child":e.asChild,as:e.as,"aria-orientation":T(h),"aria-required":T(_),dir:T(b)},{default:z(()=>[U(e.$slots,`default`,{modelValue:T(d)}),T(x)&&T(g)?(I(),V(T(l),{key:0,required:T(_),disabled:T(f),value:T(d),name:T(g)},null,8,[`required`,`disabled`,`value`,`name`])):W(`v-if`,!0)]),_:3},8,[`data-disabled`,`as-child`,`as`,`aria-orientation`,`aria-required`,`dir`])]),_:3},8,[`orientation`,`dir`,`loop`]))}}),[oe,se]=_(`RadioGroupItem`),ce=F({inheritAttrs:!1,__name:`RadioGroupItem`,props:{id:{type:String,required:!1},value:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:[`select`],setup(t,{emit:n}){let i=t,o=n,{forwardRef:s,currentElement:c}=e(),l=re(),u=P(()=>l.disabled.value||i.disabled),f=P(()=>l.required.value||i.required),p=P(()=>K(l.modelValue?.value,i.value));se({disabled:u,checked:p});let m=H(!1),h=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`];b(`keydown`,e=>{h.includes(e.key)&&(m.value=!0)}),b(`keyup`,()=>{m.value=!1});function g(){setTimeout(()=>{m.value&&c.value?.click()},0)}let _=d();return(e,t)=>(I(),V(T(a),{checked:p.value,disabled:u.value,"as-child":``,focusable:!u.value,active:p.value},{default:z(()=>[w(Z,N({...T(_),...e.$attrs,...i},{ref:T(s),checked:p.value,required:f.value,disabled:u.value,"onUpdate:checked":t[0]||(t[0]=t=>T(l).changeModelValue(e.value)),onSelect:t[1]||(t[1]=e=>o(`select`,e)),onKeydown:t[2]||(t[2]=x(r(()=>{},[`prevent`]),[`enter`])),onFocus:g}),{default:z(()=>[U(e.$slots,`default`,{checked:p.value,required:f.value,disabled:u.value})]),_:3},16,[`checked`,`required`,`disabled`])]),_:3},8,[`checked`,`disabled`,`focusable`,`active`]))}}),le=F({__name:`RadioGroupIndicator`,props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(t){let{forwardRef:n}=e(),r=oe();return(e,t)=>(I(),V(T(v),{present:e.forceMount||T(r).checked.value},{default:z(()=>[w(T(o),N({ref:T(n),"data-state":T(r).checked.value?`checked`:`unchecked`,"data-disabled":T(r).disabled.value?``:void 0,"as-child":e.asChild,as:e.as},e.$attrs),{default:z(()=>[U(e.$slots,`default`)]),_:3},16,[`data-state`,`data-disabled`,`as-child`,`as`])]),_:3},8,[`present`]))}}),ue=t(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),de=F({__name:`RadioGroup`,props:{modelValue:{},defaultValue:{},disabled:{type:Boolean},orientation:{},dir:{},loop:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{type:[Boolean,null,String,Object,Array]}},emits:[`update:modelValue`],setup(e,{emit:t}){let r=e,i=t,a=n(r,`class`),o=f(a,i);return(e,t)=>(I(),V(T(ae),N({"data-slot":`radio-group`,class:T(p)(`grid gap-3`,r.class)},T(o)),{default:z(t=>[U(e.$slots,`default`,C(G(t)))]),_:3},16,[`class`]))}}),fe=F({__name:`RadioGroupItem`,props:{id:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{type:[Boolean,null,String,Object,Array]}},setup(e){let t=e,r=n(t,`class`),i=c(r);return(e,n)=>(I(),V(T(ce),N({"data-slot":`radio-group-item`},T(i),{class:T(p)(`border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50`,t.class)}),{default:z(()=>[w(T(le),{"data-slot":`radio-group-indicator`,class:`flex items-center justify-center relative`},{default:z(()=>[U(e.$slots,`default`,{},()=>[w(T(ue),{class:`size-2 left-1/2 top-1/2 absolute fill-primary -translate-x-1/2 -translate-y-1/2`})])]),_:3})]),_:3},16,[`class`]))}}),pe={class:`gap-1 grid min-w-0`},me={class:`truncate`},he={key:0,class:`text-xs text-muted-foreground leading-5 font-normal`},Q=F({name:`BuiltInRadioGroup`,__name:`index`,props:S({options:{},disabled:{type:Boolean},dir:{},class:{type:[Boolean,null,String,Object,Array]},optionClass:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]}},{modelValue:{},modelModifiers:{}}),emits:S([`change`],[`update:modelValue`]),setup(e,{emit:t}){let n=e,r=t,i=ne(),a=ee(e,`modelValue`),o=E();te(a,e=>{r(`change`,e)});function s(e,t){return e.id||`${o}-${t}`}function c(e,t){return e.id?e.id:typeof e.value==`string`||typeof e.value==`number`?e.value:t}function l(e){return!!(n.disabled||e.disabled)}function d(e){return Object.is(a.value,e.value)}return(t,r)=>(I(),V(T(de),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=e=>a.value=e),disabled:e.disabled,dir:e.dir,class:k(n.class)},{default:z(()=>[(I(!0),j(R,null,M(n.options,(e,r)=>(I(),j(`div`,{key:c(e,r),class:k(T(p)(`flex gap-2`,e.description?`items-start`:`items-center`,n.optionClass))},[O(w(T(fe),{id:s(e,r),value:e.value,disabled:l(e),class:k(n.itemClass)},null,8,[`id`,`value`,`disabled`,`class`]),[[u,!i.option]]),w(T(q),{for:s(e,r),class:k(T(p)(`min-w-0 flex-1 cursor-pointer gap-0`,e.description?`items-start`:`items-center`,l(e)&&`cursor-not-allowed opacity-60`))},{default:z(()=>[U(t.$slots,`option`,{id:s(e,r),option:e,checked:d(e),disabled:l(e)},()=>[A(`div`,pe,[A(`span`,me,L(e.label),1),e.description?(I(),j(`span`,he,L(e.description),1)):W(``,!0)])])]),_:2},1032,[`for`,`class`])],2))),128))]),_:3},8,[`modelValue`,`disabled`,`dir`,`class`]))}}),ge={class:`gap-4 grid`},_e={class:`text-sm text-muted-foreground`},ve=F({__name:`_demo1`,setup(e){let t=H(`comfortable`),n=[{label:`默认`,value:`default`},{label:`舒适`,value:`comfortable`},{label:`紧凑`,value:`compact`}];return(e,r)=>{let i=Q;return I(),j(`div`,ge,[w(i,{modelValue:T(t),"onUpdate:modelValue":r[0]||(r[0]=e=>B(t)?t.value=e:null),options:n},null,8,[`modelValue`]),w(i,{modelValue:T(t),"onUpdate:modelValue":r[1]||(r[1]=e=>B(t)?t.value=e:null),options:n,class:`flex`},null,8,[`modelValue`]),A(`div`,_e,` 当前值：`+L(T(t)),1)])}}}),ye=`<script setup lang="ts">
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
`,be={class:`gap-4 grid`},xe={class:`text-sm text-muted-foreground`},Se=F({__name:`_demo2`,setup(e){let t=H(`growth`),n=[{label:`创业版`,value:`starter`,description:`适合 1-10 人小团队，保留核心能力。`},{label:`成长版`,value:`growth`,description:`适合多角色协作，支持审批与审计流程。`},{label:`企业版`,value:`enterprise`,description:`高级安全策略与 SSO 即将开放。`,disabled:!0}],r=P(()=>n.find(e=>e.value===t.value)?.label??``);return(e,i)=>{let a=Q;return I(),j(`div`,be,[w(a,{modelValue:T(t),"onUpdate:modelValue":i[0]||(i[0]=e=>B(t)?t.value=e:null),options:n},null,8,[`modelValue`]),A(`div`,xe,` 已选套餐：`+L(T(r)),1)])}}}),Ce=`<script setup lang="ts">
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
`,we={class:`gap-4 grid`},Te={class:`gap-1 grid min-w-0`},Ee={class:`flex gap-2 items-center`},De={class:`text-sm font-medium truncate`},$={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},Oe={class:`text-xs text-muted-foreground leading-5`},ke={class:`text-sm text-muted-foreground`},Ae=F({__name:`_demo3`,setup(e){let t=H(`balanced`),n=[{label:`专注模式`,value:`focus`,badge:`录入`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,badge:`推荐`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,badge:`大屏`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(e,r)=>{let i=Q;return I(),j(`div`,we,[w(i,{modelValue:T(t),"onUpdate:modelValue":r[0]||(r[0]=e=>B(t)?t.value=e:null),options:n,class:`gap-2`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:z(({option:e,checked:t,disabled:n})=>[A(`div`,{class:k([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[t?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,n&&`opacity-60`]])},[A(`div`,Te,[A(`div`,Ee,[A(`span`,De,L(e.label),1),A(`span`,$,L(e.badge),1)]),A(`div`,Oe,L(e.description),1)]),A(`span`,{class:k([`text-xs font-medium shrink-0`,t?`text-primary`:`text-muted-foreground`])},L(t?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),A(`div`,ke,` 当前值：`+L(T(t)),1)])}}}),je=`<script setup lang="ts">
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
`,Me=F({__name:`index`,setup(e){return(e,t)=>{let n=g,r=J;return I(),V(r,{navbar:``,"navbar-start-side":`back`},{default:z(()=>[A(`div`,null,[w(n,{code:T(ye)},{default:z(()=>[w(ve)]),_:1},8,[`code`]),w(n,{title:`带描述和禁用态`,code:T(Ce)},{default:z(()=>[w(Se)]),_:1},8,[`code`]),w(n,{title:`自定义选项内容`,code:T(je)},{default:z(()=>[w(Ae)]),_:1},8,[`code`])])]),_:1})}}});export{Me as default};