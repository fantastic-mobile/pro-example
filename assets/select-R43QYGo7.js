
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,Ot as r,S as i,_t as a,lt as o,mt as s,rt as c,v as l,w as u,x as d,y as f}from"./vue.runtime.esm-bundler-DOMO_wpA.js";import{K as p,N as m,R as h,x as g}from"./src-C_SUC8up.js";import{t as _}from"./AppPageLayout-CilNLEuS.js";var v=u({__name:`_demo1`,setup(e){let r=s(`1`);return(e,i)=>{let a=m;return n(),f(a,{modelValue:t(r),"onUpdate:modelValue":i[0]||(i[0]=e=>o(r)?r.value=e:null),options:[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`,disabled:!0},{label:`Option 3`,value:`3`}]},null,8,[`modelValue`])}}}),y=`<script setup lang="ts">
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
`,b=u({__name:`_demo2`,setup(e){let r=s(`1`);return(e,i)=>{let a=m;return n(),f(a,{modelValue:t(r),"onUpdate:modelValue":i[0]||(i[0]=e=>o(r)?r.value=e:null),options:[{label:`Group 1`,options:[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`}]},{label:`Group 2`,options:[{label:`Option 3`,value:`3`},{label:`Option 4`,value:`4`}]}]},null,8,[`modelValue`])}}}),x=`<script setup lang="ts">
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
`,S=u({__name:`_demo3`,setup(e){let r=s([]);return(e,i)=>{let a=m;return n(),f(a,{modelValue:t(r),"onUpdate:modelValue":i[0]||(i[0]=e=>o(r)?r.value=e:null),options:[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}],multiple:``},null,8,[`modelValue`])}}}),C=`<script setup lang="ts">
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
`,w={class:`space-y-2`},T=u({__name:`_demo4`,setup(r){let i=s(`2`),a=s(`2`),c=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(r,s)=>{let l=m;return n(),d(`div`,w,[e(l,{modelValue:t(i),"onUpdate:modelValue":s[0]||(s[0]=e=>o(i)?i.value=e:null),options:c,position:`popper`},null,8,[`modelValue`]),e(l,{modelValue:t(a),"onUpdate:modelValue":s[1]||(s[1]=e=>o(a)?a.value=e:null),options:c,position:`item-aligned`},null,8,[`modelValue`])])}}}),E=`<script setup lang="ts">
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
`,D={class:`flex gap-2`},O={class:`py-4 flex flex-col gap-4`},k={class:`text-sm text-muted-foreground`},A=u({__name:`_demo5`,setup(s){let u=a(!1),f=a(`shanghai`),g=[{label:`Beijing`,value:`beijing`},{label:`Shanghai`,value:`shanghai`},{label:`Shenzhen`,value:`shenzhen`}];return(a,s)=>{let _=p,v=m,y=h;return n(),d(`div`,null,[l(`div`,D,[e(_,{onClick:s[0]||(s[0]=e=>u.value=!0)},{default:c(()=>[...s[3]||(s[3]=[i(` 打开 FaModal `,-1)])]),_:1})]),e(y,{modelValue:t(u),"onUpdate:modelValue":s[2]||(s[2]=e=>o(u)?u.value=e:null),title:`FaModal 中的选择器`,description:`在模态框内容区内使用 FmSelect`,footer:!1,class:`sm:max-w-lg`,"content-class":`min-h-auto`},{default:c(()=>[l(`div`,O,[e(v,{modelValue:t(f),"onUpdate:modelValue":s[1]||(s[1]=e=>o(f)?f.value=e:null),options:g,placeholder:`请选择城市`,class:`w-full`},null,8,[`modelValue`]),l(`div`,k,` 当前值：`+r(t(f)),1)])]),_:1},8,[`modelValue`])])}}}),j=`<script setup lang="ts">
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
`,M=u({__name:`index`,setup(r){return(r,i)=>{let a=g,o=_;return n(),f(o,{navbar:``,"navbar-start-side":`back`},{default:c(()=>[l(`div`,null,[e(a,{code:t(y)},{default:c(()=>[e(v)]),_:1},8,[`code`]),e(a,{title:`组`,code:t(x)},{default:c(()=>[e(b)]),_:1},8,[`code`]),e(a,{title:`多选`,code:t(C)},{default:c(()=>[e(S)]),_:1},8,[`code`]),e(a,{title:`定位模式`,code:t(E)},{default:c(()=>[e(T)]),_:1},8,[`code`]),e(a,{title:`在 FaModal 里展示`,code:t(j)},{default:c(()=>[e(A)]),_:1},8,[`code`])])]),_:1})}}});export{M as default};