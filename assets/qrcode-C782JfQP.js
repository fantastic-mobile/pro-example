
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,N as t,O as n,lt as r,m as i,o as a}from"./src-CTlveZFi.js";import{D as o,E as s,On as c,Rt as l,_ as u,b as d,bt as f,g as p,k as m,mt as h,nr as g,o as _,qt as v,un as y,v as b,vn as x,y as S}from"./runtime-core.esm-bundler-D7siT_TS.js";import{o as C}from"./index-CXygZjsd.js";import{t as w}from"./AppPageLayout-DpGpaj5G.js";import{t as T}from"./logo-B9PbTpwo.js";var E={class:`flex flex-col gap-6`},D={class:`flex flex-col gap-2 items-center`},O={class:`flex flex-col gap-2 items-center`},k={class:`flex flex-col gap-2 items-center`},A=m({__name:`_demo1`,setup(e){let t=x(`https://fantastic-mobile.hurui.me`);return(e,n)=>{let r=a;return h(),d(`div`,E,[u(`div`,D,[n[0]||(n[0]=u(`span`,{class:`text-sm text-muted-foreground`},`基础二维码`,-1)),o(r,{value:c(t),size:150},null,8,[`value`])]),u(`div`,O,[n[1]||(n[1]=u(`span`,{class:`text-sm text-muted-foreground`},`带 Logo (网络图片)`,-1)),o(r,{value:c(t),size:150,logo:`https://fantastic-mobile.hurui.me/logo.png`},null,8,[`value`])]),u(`div`,k,[n[2]||(n[2]=u(`span`,{class:`text-sm text-muted-foreground`},`带 Logo (本地图片)`,-1)),o(r,{value:c(t),size:150,logo:c(T)},null,8,[`value`,`logo`])])])}}}),j=`<script setup lang="ts">
import logo from '@/assets/images/logo.png'

const qrValue = ref('https://fantastic-mobile.hurui.me')
<\/script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">基础二维码</span>
      <FmQrcode :value="qrValue" :size="150" />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">带 Logo (网络图片)</span>
      <FmQrcode
        :value="qrValue"
        :size="150"
        logo="https://fantastic-mobile.hurui.me/logo.png"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">带 Logo (本地图片)</span>
      <FmQrcode
        :value="qrValue"
        :size="150"
        :logo="logo"
      />
    </div>
  </div>
</template>
`,M={class:`flex flex-col gap-4`},N={class:`flex gap-4 items-center`},P=m({__name:`_demo2`,setup(t){let r=l(`qrcodeRef`),i=x(`https://fantastic-mobile.hurui.me`);return(t,l)=>{let f=n,p=e,m=a;return h(),d(`div`,M,[u(`div`,N,[o(f,{modelValue:c(i),"onUpdate:modelValue":l[0]||(l[0]=e=>y(i)?i.value=e:null),placeholder:`输入二维码内容`,class:`w-64`},null,8,[`modelValue`]),o(p,{variant:`secondary`,onClick:l[1]||(l[1]=e=>c(r)?.download(`my-qrcode.png`))},{default:v(()=>[...l[2]||(l[2]=[s(` 下载 `,-1)])]),_:1})]),o(m,{ref_key:`qrcodeRef`,ref:r,value:c(i),size:200},null,8,[`value`])])}}}),F=`<script setup lang="ts">
const qrcodeRef = useTemplateRef('qrcodeRef')

const qrValue = ref('https://fantastic-mobile.hurui.me')
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4 items-center">
      <FmInput v-model="qrValue" placeholder="输入二维码内容" class="w-64" />
      <FmButton variant="secondary" @click="qrcodeRef?.download('my-qrcode.png')">
        下载
      </FmButton>
    </div>
    <FmQrcode
      ref="qrcodeRef"
      :value="qrValue"
      :size="200"
    />
  </div>
</template>
`,I={class:`space-y-2`},L=m({__name:`_demo3`,setup(n){let r=x(`M`),i=x(`https://fantastic-mobile.hurui.me`),l=[{label:`L`,value:`L`,desc:`7%`},{label:`M`,value:`M`,desc:`15%`},{label:`Q`,value:`Q`,desc:`25%`},{label:`H`,value:`H`,desc:`30%`}];return(n,u)=>{let p=e,m=t,y=a;return h(),d(`div`,I,[o(m,null,{default:v(()=>[(h(),d(_,null,f(l,e=>o(p,{key:e.value,variant:c(r)===e.value?`default`:`outline`,onClick:t=>r.value=e.value},{default:v(()=>[s(g(e.label),1)]),_:2},1032,[`variant`,`onClick`])),64))]),_:1}),o(y,{value:c(i),size:150,"error-correction-level":c(r)},null,8,[`value`,`error-correction-level`])])}}}),R=`<script setup lang="ts">
const errorCorrectionLevel = ref<'L' | 'M' | 'Q' | 'H'>('M')
const qrValue = ref('https://fantastic-mobile.hurui.me')

const levels = [
  { label: 'L', value: 'L' as const, desc: '7%' },
  { label: 'M', value: 'M' as const, desc: '15%' },
  { label: 'Q', value: 'Q' as const, desc: '25%' },
  { label: 'H', value: 'H' as const, desc: '30%' },
]
<\/script>

<template>
  <div class="space-y-2">
    <FmButtonGroup>
      <FmButton
        v-for="item in levels"
        :key="item.value"
        :variant="errorCorrectionLevel === item.value ? 'default' : 'outline'"
        @click="errorCorrectionLevel = item.value"
      >
        {{ item.label }}
      </FmButton>
    </FmButtonGroup>
    <FmQrcode
      :value="qrValue"
      :size="150"
      :error-correction-level="errorCorrectionLevel"
    />
  </div>
</template>
`,z={class:`space-y-2`},B={class:`flex gap-4 items-center`},ee={class:`text-sm text-muted-foreground w-16`},V=m({__name:`_demo4`,setup(e){let t=x([200]),n=x(`https://fantastic-mobile.hurui.me`),r=p(()=>t.value[0]);return(e,i)=>{let s=C,l=a;return h(),d(`div`,z,[u(`div`,B,[o(s,{modelValue:c(t),"onUpdate:modelValue":i[0]||(i[0]=e=>y(t)?t.value=e:null),min:100,max:400,step:100,class:`w-48`},null,8,[`modelValue`]),u(`span`,ee,g(c(r))+`px`,1)]),o(l,{value:c(n),size:c(r)},null,8,[`value`,`size`])])}}}),H=`<script setup lang="ts">
const sizeValue = ref([200])
const qrValue = ref('https://fantastic-mobile.hurui.me')

const size = computed(() => sizeValue.value[0])
<\/script>

<template>
  <div class="space-y-2">
    <div class="flex gap-4 items-center">
      <FmSlider v-model="sizeValue" :min="100" :max="400" :step="100" class="w-48" />
      <span class="text-sm text-muted-foreground w-16">{{ size }}px</span>
    </div>
    <FmQrcode
      :value="qrValue"
      :size="size"
    />
  </div>
</template>
`,U={class:`flex flex-wrap gap-6`},W={class:`flex flex-col gap-2 items-center`},G={class:`flex flex-col gap-2 items-center`},K={class:`flex flex-col gap-2 items-center`},q={class:`flex flex-col gap-2 items-center`},J={class:`flex flex-col gap-2 items-center`},Y=m({__name:`_demo5`,setup(e){let t=x(`https://fantastic-mobile.hurui.me`);return(e,n)=>{let r=a;return h(),d(`div`,U,[u(`div`,W,[n[0]||(n[0]=u(`span`,{class:`text-sm text-muted-foreground`},`经典黑白`,-1)),o(r,{value:c(t),size:120,"foreground-color":`#000000`,"background-color":`#ffffff`},null,8,[`value`])]),u(`div`,G,[n[1]||(n[1]=u(`span`,{class:`text-sm text-muted-foreground`},`品牌绿色`,-1)),o(r,{value:c(t),size:120,"foreground-color":`#059669`,"background-color":`#f0fdf4`},null,8,[`value`])]),u(`div`,K,[n[2]||(n[2]=u(`span`,{class:`text-sm text-muted-foreground`},`科技蓝`,-1)),o(r,{value:c(t),size:120,"foreground-color":`#2563eb`,"background-color":`#eff6ff`},null,8,[`value`])]),u(`div`,q,[n[3]||(n[3]=u(`span`,{class:`text-sm text-muted-foreground`},`活力橙`,-1)),o(r,{value:c(t),size:120,"foreground-color":`#ea580c`,"background-color":`#fff7ed`},null,8,[`value`])]),u(`div`,J,[n[4]||(n[4]=u(`span`,{class:`text-sm text-muted-foreground`},`暗色模式`,-1)),o(r,{value:c(t),size:120,"foreground-color":`#e5e5e5`,"background-color":`#171717`},null,8,[`value`])])])}}}),X=`<script setup lang="ts">
const qrValue = ref('https://fantastic-mobile.hurui.me')
<\/script>

<template>
  <div class="flex flex-wrap gap-6">
    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">经典黑白</span>
      <FmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#000000"
        background-color="#ffffff"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">品牌绿色</span>
      <FmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#059669"
        background-color="#f0fdf4"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">科技蓝</span>
      <FmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#2563eb"
        background-color="#eff6ff"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">活力橙</span>
      <FmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#ea580c"
        background-color="#fff7ed"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">暗色模式</span>
      <FmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#e5e5e5"
        background-color="#171717"
      />
    </div>
  </div>
</template>
`,Z={class:`flex flex-col gap-4`},Q={key:0,class:`text-success flex flex-col gap-1 items-center`},$={key:1,class:`text-muted-foreground flex flex-col gap-1 items-center`},te={key:2,class:`text-destructive flex flex-col gap-1 items-center`},ne=m({__name:`_demo6`,setup(n){let i=x(`loading`),l=x(`https://fantastic-mobile.hurui.me`),p=[{label:`加载中`,value:`loading`},{label:`已扫描`,value:`success`},{label:`已过期`,value:`expired`},{label:`错误`,value:`error`}];function m(e){i.value=e}return(n,y)=>{let b=e,x=t,C=r,w=a;return h(),d(`div`,Z,[o(x,null,{default:v(()=>[(h(),d(_,null,f(p,e=>o(b,{key:e.value,variant:c(i)===e.value?`default`:`outline`,onClick:t=>m(e.value)},{default:v(()=>[s(g(e.label),1)]),_:2},1032,[`variant`,`onClick`])),64))]),_:1}),o(w,{value:c(l),size:200,status:c(i)},{statusRender:v(({status:e})=>[e===`success`?(h(),d(`div`,Q,[o(C,{name:`i-mdi:check-circle`,class:`size-6`}),y[0]||(y[0]=u(`span`,{class:`text-xs`},`已扫描`,-1))])):e===`expired`?(h(),d(`div`,$,[o(C,{name:`i-mdi:clock-alert`,class:`size-6`}),y[1]||(y[1]=u(`span`,{class:`text-xs`},`二维码已过期`,-1))])):e===`error`?(h(),d(`div`,te,[o(C,{name:`i-mdi:alert-circle`,class:`size-6`}),y[2]||(y[2]=u(`span`,{class:`text-xs`},`加载失败`,-1))])):S(``,!0)]),_:1},8,[`value`,`status`])])}}}),re=`<script setup lang="ts">
const status = ref<'loading' | 'success' | 'expired' | 'error'>('loading')
const qrValue = ref('https://fantastic-mobile.hurui.me')

const statuses = [
  { label: '加载中', value: 'loading' as const },
  { label: '已扫描', value: 'success' as const },
  { label: '已过期', value: 'expired' as const },
  { label: '错误', value: 'error' as const },
]

function setStatus(s: typeof status.value) {
  status.value = s
}
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <FmButtonGroup>
      <FmButton
        v-for="item in statuses"
        :key="item.value"
        :variant="status === item.value ? 'default' : 'outline'"
        @click="setStatus(item.value)"
      >
        {{ item.label }}
      </FmButton>
    </FmButtonGroup>
    <FmQrcode :value="qrValue" :size="200" :status="status">
      <template #statusRender="{ status: s }">
        <template v-if="s === 'success'">
          <div class="text-success flex flex-col gap-1 items-center">
            <FmIcon name="i-mdi:check-circle" class="size-6" />
            <span class="text-xs">已扫描</span>
          </div>
        </template>
        <template v-else-if="s === 'expired'">
          <div class="text-muted-foreground flex flex-col gap-1 items-center">
            <FmIcon name="i-mdi:clock-alert" class="size-6" />
            <span class="text-xs">二维码已过期</span>
          </div>
        </template>
        <template v-else-if="s === 'error'">
          <div class="text-destructive flex flex-col gap-1 items-center">
            <FmIcon name="i-mdi:alert-circle" class="size-6" />
            <span class="text-xs">加载失败</span>
          </div>
        </template>
      </template>
    </FmQrcode>
  </div>
</template>
`,ie=m({__name:`index`,setup(e){return(e,t)=>{let n=i,r=w;return h(),b(r,{navbar:``,"navbar-start-side":`back`},{default:v(()=>[u(`div`,null,[o(n,{code:c(j)},{default:v(()=>[o(A)]),_:1},8,[`code`]),o(n,{title:`交互式操作`,code:c(F)},{default:v(()=>[o(P)]),_:1},8,[`code`]),o(n,{title:`纠错等级`,code:c(R)},{default:v(()=>[o(L)]),_:1},8,[`code`]),o(n,{title:`尺寸设置`,code:c(H)},{default:v(()=>[o(V)]),_:1},8,[`code`]),o(n,{title:`颜色定制`,code:c(X)},{default:v(()=>[o(Y)]),_:1},8,[`code`]),o(n,{title:`状态展示`,code:c(re)},{default:v(()=>[o(ne)]),_:1},8,[`code`])])]),_:1})}}});export{ie as default};