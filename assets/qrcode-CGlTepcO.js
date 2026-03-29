
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{$ as e,C as t,Ct as n,H as r,S as i,W as a,_ as o,b as s,f as c,kt as l,lt as u,mt as d,rt as f,v as p,w as m,x as h,y as g}from"./vue.runtime.esm-bundler-DMY3hWtO.js";import{B as _,E as v,P as y,R as b,p as x,v as S,z as C}from"./components-CBpXWGFQ.js";import{t as w}from"./AppPageLayout-S1V78StU.js";import{t as T}from"./logo-Ddh15yyf.js";var E={class:`flex flex-col gap-6`},D={class:`flex flex-col gap-2 items-center`},O={class:`flex flex-col gap-2 items-center`},k={class:`flex flex-col gap-2 items-center`},A=m({__name:`_demo1`,setup(e){let i=d(`https://fantastic-mobile.hurui.me`);return(e,a)=>{let o=S;return r(),h(`div`,E,[p(`div`,D,[a[0]||(a[0]=p(`span`,{class:`text-sm text-muted-foreground`},`基础二维码`,-1)),t(o,{value:n(i),size:150},null,8,[`value`])]),p(`div`,O,[a[1]||(a[1]=p(`span`,{class:`text-sm text-muted-foreground`},`带 Logo (网络图片)`,-1)),t(o,{value:n(i),size:150,logo:`https://fantastic-mobile.hurui.me/logo.png`},null,8,[`value`])]),p(`div`,k,[a[2]||(a[2]=p(`span`,{class:`text-sm text-muted-foreground`},`带 Logo (本地图片)`,-1)),t(o,{value:n(i),size:150,logo:n(T)},null,8,[`value`,`logo`])])])}}}),j=`<script setup lang="ts">
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
`,M={class:`flex flex-col gap-4`},N={class:`flex gap-4 items-center`},P=m({__name:`_demo2`,setup(a){let o=e(`qrcodeRef`),s=d(`https://fantastic-mobile.hurui.me`);return(e,a)=>{let c=v,l=b,d=S;return r(),h(`div`,M,[p(`div`,N,[t(c,{modelValue:n(s),"onUpdate:modelValue":a[0]||(a[0]=e=>u(s)?s.value=e:null),placeholder:`输入二维码内容`,class:`w-64`},null,8,[`modelValue`]),t(l,{variant:`secondary`,onClick:a[1]||(a[1]=e=>n(o)?.download(`my-qrcode.png`))},{default:f(()=>[...a[2]||(a[2]=[i(` 下载 `,-1)])]),_:1})]),t(d,{ref_key:`qrcodeRef`,ref:o,value:n(s),size:200},null,8,[`value`])])}}}),F=`<script setup lang="ts">
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
`,I={class:`space-y-2`},L=m({__name:`_demo3`,setup(e){let o=d(`M`),s=d(`https://fantastic-mobile.hurui.me`),u=[{label:`L`,value:`L`,desc:`7%`},{label:`M`,value:`M`,desc:`15%`},{label:`Q`,value:`Q`,desc:`25%`},{label:`H`,value:`H`,desc:`30%`}];return(e,d)=>{let p=b,m=_,g=S;return r(),h(`div`,I,[t(m,null,{default:f(()=>[(r(),h(c,null,a(u,e=>t(p,{key:e.value,variant:n(o)===e.value?`default`:`outline`,onClick:t=>o.value=e.value},{default:f(()=>[i(l(e.label),1)]),_:2},1032,[`variant`,`onClick`])),64))]),_:1}),t(g,{value:n(s),size:150,"error-correction-level":n(o)},null,8,[`value`,`error-correction-level`])])}}}),R=`<script setup lang="ts">
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
`,z={class:`space-y-2`},B={class:`flex gap-4 items-center`},ee={class:`text-sm text-muted-foreground w-16`},V=m({__name:`_demo4`,setup(e){let i=d([200]),a=d(`https://fantastic-mobile.hurui.me`),s=o(()=>i.value[0]);return(e,o)=>{let c=x,d=S;return r(),h(`div`,z,[p(`div`,B,[t(c,{modelValue:n(i),"onUpdate:modelValue":o[0]||(o[0]=e=>u(i)?i.value=e:null),min:100,max:400,step:100,class:`w-48`},null,8,[`modelValue`]),p(`span`,ee,l(n(s))+`px`,1)]),t(d,{value:n(a),size:n(s)},null,8,[`value`,`size`])])}}}),H=`<script setup lang="ts">
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
`,U={class:`flex flex-wrap gap-6`},W={class:`flex flex-col gap-2 items-center`},G={class:`flex flex-col gap-2 items-center`},K={class:`flex flex-col gap-2 items-center`},q={class:`flex flex-col gap-2 items-center`},J={class:`flex flex-col gap-2 items-center`},Y=m({__name:`_demo5`,setup(e){let i=d(`https://fantastic-mobile.hurui.me`);return(e,a)=>{let o=S;return r(),h(`div`,U,[p(`div`,W,[a[0]||(a[0]=p(`span`,{class:`text-sm text-muted-foreground`},`经典黑白`,-1)),t(o,{value:n(i),size:120,"foreground-color":`#000000`,"background-color":`#ffffff`},null,8,[`value`])]),p(`div`,G,[a[1]||(a[1]=p(`span`,{class:`text-sm text-muted-foreground`},`品牌绿色`,-1)),t(o,{value:n(i),size:120,"foreground-color":`#059669`,"background-color":`#f0fdf4`},null,8,[`value`])]),p(`div`,K,[a[2]||(a[2]=p(`span`,{class:`text-sm text-muted-foreground`},`科技蓝`,-1)),t(o,{value:n(i),size:120,"foreground-color":`#2563eb`,"background-color":`#eff6ff`},null,8,[`value`])]),p(`div`,q,[a[3]||(a[3]=p(`span`,{class:`text-sm text-muted-foreground`},`活力橙`,-1)),t(o,{value:n(i),size:120,"foreground-color":`#ea580c`,"background-color":`#fff7ed`},null,8,[`value`])]),p(`div`,J,[a[4]||(a[4]=p(`span`,{class:`text-sm text-muted-foreground`},`暗色模式`,-1)),t(o,{value:n(i),size:120,"foreground-color":`#e5e5e5`,"background-color":`#171717`},null,8,[`value`])])])}}}),X=`<script setup lang="ts">
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
`,Z={class:`flex flex-col gap-4`},Q={key:0,class:`text-success flex flex-col gap-1 items-center`},$={key:1,class:`text-muted-foreground flex flex-col gap-1 items-center`},te={key:2,class:`text-destructive flex flex-col gap-1 items-center`},ne=m({__name:`_demo6`,setup(e){let o=d(`loading`),u=d(`https://fantastic-mobile.hurui.me`),m=[{label:`加载中`,value:`loading`},{label:`已扫描`,value:`success`},{label:`已过期`,value:`expired`},{label:`错误`,value:`error`}];function g(e){o.value=e}return(e,d)=>{let v=b,y=_,x=C,w=S;return r(),h(`div`,Z,[t(y,null,{default:f(()=>[(r(),h(c,null,a(m,e=>t(v,{key:e.value,variant:n(o)===e.value?`default`:`outline`,onClick:t=>g(e.value)},{default:f(()=>[i(l(e.label),1)]),_:2},1032,[`variant`,`onClick`])),64))]),_:1}),t(w,{value:n(u),size:200,status:n(o)},{statusRender:f(({status:e})=>[e===`success`?(r(),h(`div`,Q,[t(x,{name:`i-mdi:check-circle`,class:`size-6`}),d[0]||(d[0]=p(`span`,{class:`text-xs`},`已扫描`,-1))])):e===`expired`?(r(),h(`div`,$,[t(x,{name:`i-mdi:clock-alert`,class:`size-6`}),d[1]||(d[1]=p(`span`,{class:`text-xs`},`二维码已过期`,-1))])):e===`error`?(r(),h(`div`,te,[t(x,{name:`i-mdi:alert-circle`,class:`size-6`}),d[2]||(d[2]=p(`span`,{class:`text-xs`},`加载失败`,-1))])):s(``,!0)]),_:1},8,[`value`,`status`])])}}}),re=`<script setup lang="ts">
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
`,ie=m({__name:`index`,setup(e){return(e,i)=>{let a=y,o=w;return r(),g(o,{navbar:``,"navbar-start-side":`back`},{default:f(()=>[p(`div`,null,[t(a,{code:n(j)},{default:f(()=>[t(A)]),_:1},8,[`code`]),t(a,{title:`交互式操作`,code:n(F)},{default:f(()=>[t(P)]),_:1},8,[`code`]),t(a,{title:`纠错等级`,code:n(R)},{default:f(()=>[t(L)]),_:1},8,[`code`]),t(a,{title:`尺寸设置`,code:n(H)},{default:f(()=>[t(V)]),_:1},8,[`code`]),t(a,{title:`颜色定制`,code:n(X)},{default:f(()=>[t(Y)]),_:1},8,[`code`]),t(a,{title:`状态展示`,code:n(re)},{default:f(()=>[t(ne)]),_:1},8,[`code`])])]),_:1})}}});export{ie as default};