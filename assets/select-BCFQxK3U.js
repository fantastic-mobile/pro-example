
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{E as e,M as t,m as n}from"./src-CTlveZFi.js";import{D as r,E as i,On as a,_ as o,b as s,k as c,mt as l,nr as u,qt as d,un as f,v as p,vn as m,xn as h}from"./runtime-core.esm-bundler-D7siT_TS.js";import{s as g}from"./index-CXygZjsd.js";import{t as _}from"./AppPageLayout-DpGpaj5G.js";var v=c({__name:`_demo1`,setup(e){let t=m(`1`);return(e,n)=>{let r=g;return l(),p(r,{modelValue:a(t),"onUpdate:modelValue":n[0]||(n[0]=e=>f(t)?t.value=e:null),options:[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`,disabled:!0},{label:`Option 3`,value:`3`}]},null,8,[`modelValue`])}}}),y=`<script setup lang="ts">
const select = ref('1')
<\/script>

<template>
  <FmSelect
    v-model="select"
    :options="[
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
      { label: 'Option 3', value: '3' },
    ]"
  />
</template>
`,b=c({__name:`_demo2`,setup(e){let t=m(`1`);return(e,n)=>{let r=g;return l(),p(r,{modelValue:a(t),"onUpdate:modelValue":n[0]||(n[0]=e=>f(t)?t.value=e:null),options:[{label:`Group 1`,options:[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`}]},{label:`Group 2`,options:[{label:`Option 3`,value:`3`},{label:`Option 4`,value:`4`}]}]},null,8,[`modelValue`])}}}),x=`<script setup lang="ts">
const select = ref('1')
<\/script>

<template>
  <FmSelect
    v-model="select"
    :options="[
      {
        label: 'Group 1',
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      },
      {
        label: 'Group 2',
        options: [
          { label: 'Option 3', value: '3' },
          { label: 'Option 4', value: '4' },
        ],
      },
    ]"
  />
</template>
`,S=c({__name:`_demo3`,setup(e){let t=m([]);return(e,n)=>{let r=g;return l(),p(r,{modelValue:a(t),"onUpdate:modelValue":n[0]||(n[0]=e=>f(t)?t.value=e:null),options:[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}],multiple:``},null,8,[`modelValue`])}}}),C=`<script setup lang="ts">
const select = ref([])
<\/script>

<template>
  <FmSelect
    v-model="select"
    :options="[
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ]"
    multiple
  />
</template>
`,w={class:`space-y-2`},T=c({__name:`_demo4`,setup(e){let t=m(`2`),n=m(`2`),i=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,o)=>{let c=g;return l(),s(`div`,w,[r(c,{modelValue:a(t),"onUpdate:modelValue":o[0]||(o[0]=e=>f(t)?t.value=e:null),options:i,position:`popper`},null,8,[`modelValue`]),r(c,{modelValue:a(n),"onUpdate:modelValue":o[1]||(o[1]=e=>f(n)?n.value=e:null),options:i,position:`item-aligned`},null,8,[`modelValue`])])}}}),E=`<script setup lang="ts">
const popperValue = ref('2')
const itemAlignedValue = ref('2')

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
<\/script>

<template>
  <div class="space-y-2">
    <FmSelect
      v-model="popperValue"
      :options="options"
      position="popper"
    />
    <FmSelect
      v-model="itemAlignedValue"
      :options="options"
      position="item-aligned"
    />
  </div>
</template>
`,D={class:`flex gap-2`},O={class:`py-4 flex flex-col gap-4`},k={class:`text-sm text-muted-foreground`},A=c({__name:`_demo5`,setup(n){let c=h(!1),p=h(`shanghai`),m=[{label:`Beijing`,value:`beijing`},{label:`Shanghai`,value:`shanghai`},{label:`Shenzhen`,value:`shenzhen`}];return(n,h)=>{let _=t,v=g,y=e;return l(),s(`div`,null,[o(`div`,D,[r(_,{onClick:h[0]||(h[0]=e=>c.value=!0)},{default:d(()=>[...h[3]||(h[3]=[i(` 打开 FaModal `,-1)])]),_:1})]),r(y,{modelValue:a(c),"onUpdate:modelValue":h[2]||(h[2]=e=>f(c)?c.value=e:null),title:`FaModal 中的选择器`,description:`在模态框内容区内使用 FmSelect`,footer:!1,class:`sm:max-w-lg`,"content-class":`min-h-auto`},{default:d(()=>[o(`div`,O,[r(v,{modelValue:a(p),"onUpdate:modelValue":h[1]||(h[1]=e=>f(p)?p.value=e:null),options:m,placeholder:`请选择城市`,class:`w-full`},null,8,[`modelValue`]),o(`div`,k,` 当前值：`+u(a(p)),1)])]),_:1},8,[`modelValue`])])}}}),j=`<script setup lang="ts">
const modal = shallowRef(false)
const cityInFaModal = shallowRef('shanghai')

const options = [
  { label: 'Beijing', value: 'beijing' },
  { label: 'Shanghai', value: 'shanghai' },
  { label: 'Shenzhen', value: 'shenzhen' },
]
<\/script>

<template>
  <div>
    <div class="flex gap-2">
      <FmButton @click="modal = true">
        打开 FaModal
      </FmButton>
    </div>
    <FmModal
      v-model="modal"
      title="FaModal 中的选择器"
      description="在模态框内容区内使用 FmSelect"
      :footer="false"
      class="sm:max-w-lg"
      content-class="min-h-auto"
    >
      <div class="py-4 flex flex-col gap-4">
        <FmSelect
          v-model="cityInFaModal"
          :options="options"
          placeholder="请选择城市"
          class="w-full"
        />
        <div class="text-sm text-muted-foreground">
          当前值：{{ cityInFaModal }}
        </div>
      </div>
    </FmModal>
  </div>
</template>
`,M=c({__name:`index`,setup(e){return(e,t)=>{let i=n,s=_;return l(),p(s,{navbar:``,"navbar-start-side":`back`},{default:d(()=>[o(`div`,null,[r(i,{code:a(y)},{default:d(()=>[r(v)]),_:1},8,[`code`]),r(i,{title:`组`,code:a(x)},{default:d(()=>[r(b)]),_:1},8,[`code`]),r(i,{title:`多选`,code:a(C)},{default:d(()=>[r(S)]),_:1},8,[`code`]),r(i,{title:`定位模式`,code:a(E)},{default:d(()=>[r(T)]),_:1},8,[`code`]),r(i,{title:`在 FaModal 里展示`,code:a(j)},{default:d(()=>[r(A)]),_:1},8,[`code`])])]),_:1})}}});export{M as default};