
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{S as e,m as t,s as n}from"./src-CTlveZFi.js";import{D as r,On as i,_ as a,b as o,k as s,mt as c,qt as l,un as u,v as d,vn as f}from"./runtime-core.esm-bundler-D7siT_TS.js";import{s as p}from"./index-CXygZjsd.js";import{t as m}from"./AppPageLayout-DpGpaj5G.js";var h={class:`flex flex-col gap-2`},g={class:`flex gap-2 items-center`},_={class:`flex gap-2 items-center`},v={class:`flex gap-2 items-center`},y={class:`flex gap-2 items-center`},b={class:`flex gap-2 items-center`},x=s({__name:`_demo1`,setup(t){let s=f(`grid`),l=f(`md`),d=f(`ellipse`),m=f(!0),x=f(`top`);return(t,f)=>{let S=p,C=e,w=n;return c(),o(`div`,h,[a(`div`,g,[f[5]||(f[5]=a(`span`,null,`图案`,-1)),r(S,{modelValue:i(s),"onUpdate:modelValue":f[0]||(f[0]=e=>u(s)?s.value=e:null),options:[{label:`grid`,value:`grid`},{label:`dot`,value:`dot`},{label:`big-dot`,value:`big-dot`}]},null,8,[`modelValue`])]),a(`div`,_,[f[6]||(f[6]=a(`span`,null,`尺寸`,-1)),r(S,{modelValue:i(l),"onUpdate:modelValue":f[1]||(f[1]=e=>u(l)?l.value=e:null),options:[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}]},null,8,[`modelValue`])]),a(`div`,v,[f[7]||(f[7]=a(`span`,null,`动画`,-1)),r(C,{modelValue:i(m),"onUpdate:modelValue":f[2]||(f[2]=e=>u(m)?m.value=e:null)},null,8,[`modelValue`])]),a(`div`,y,[f[8]||(f[8]=a(`span`,null,`方向`,-1)),r(S,{modelValue:i(x),"onUpdate:modelValue":f[3]||(f[3]=e=>u(x)?x.value=e:null),options:[{label:`top-left`,value:`top-left`},{label:`top-right`,value:`top-right`},{label:`bottom-left`,value:`bottom-left`},{label:`bottom-right`,value:`bottom-right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`},{label:`left`,value:`left`},{label:`right`,value:`right`}]},null,8,[`modelValue`])]),a(`div`,b,[f[9]||(f[9]=a(`span`,null,`遮罩`,-1)),r(S,{modelValue:i(d),"onUpdate:modelValue":f[4]||(f[4]=e=>u(d)?d.value=e:null),options:[{label:`ellipse`,value:`ellipse`},{label:`ellipse-top`,value:`ellipse-top`},{label:`ellipse-bottom`,value:`ellipse-bottom`},{label:`ellipse-left`,value:`ellipse-left`},{label:`ellipse-right`,value:`ellipse-right`},{label:`ellipse-top-left`,value:`ellipse-top-left`},{label:`ellipse-top-right`,value:`ellipse-top-right`},{label:`ellipse-bottom-left`,value:`ellipse-bottom-left`},{label:`ellipse-bottom-right`,value:`ellipse-bottom-right`}]},null,8,[`modelValue`])]),r(w,{variant:i(s),size:i(l),animate:i(m),direction:i(x),mask:i(d),class:`h-100`},null,8,[`variant`,`size`,`animate`,`direction`,`mask`])])}}}),S=`<script setup lang="ts">
const variant = ref<'grid' | 'dot' | 'big-dot'>('grid')
const size = ref<'xs' | 'sm' | 'md' | 'lg'>('md')
const mask = ref<'ellipse' | 'ellipse-top' | 'ellipse-bottom' | 'ellipse-left' | 'ellipse-right' | 'ellipse-top-left' | 'ellipse-top-right' | 'ellipse-bottom-left' | 'ellipse-bottom-right'>('ellipse')
const animate = ref(true)
const direction = ref<'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top')
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2 items-center">
      <span>图案</span>
      <FmSelect
        v-model="variant" :options="[
          { label: 'grid', value: 'grid' },
          { label: 'dot', value: 'dot' },
          { label: 'big-dot', value: 'big-dot' },
        ]"
      />
    </div>
    <div class="flex gap-2 items-center">
      <span>尺寸</span>
      <FmSelect
        v-model="size" :options="[
          { label: 'xs', value: 'xs' },
          { label: 'sm', value: 'sm' },
          { label: 'md', value: 'md' },
          { label: 'lg', value: 'lg' },
        ]"
      />
    </div>
    <div class="flex gap-2 items-center">
      <span>动画</span>
      <FmSwitch v-model="animate" />
    </div>
    <div class="flex gap-2 items-center">
      <span>方向</span>
      <FmSelect
        v-model="direction" :options="[
          { label: 'top-left', value: 'top-left' },
          { label: 'top-right', value: 'top-right' },
          { label: 'bottom-left', value: 'bottom-left' },
          { label: 'bottom-right', value: 'bottom-right' },
          { label: 'top', value: 'top' },
          { label: 'bottom', value: 'bottom' },
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' },
        ]"
      />
    </div>
    <div class="flex gap-2 items-center">
      <span>遮罩</span>
      <FmSelect
        v-model="mask" :options="[
          { label: 'ellipse', value: 'ellipse' },
          { label: 'ellipse-top', value: 'ellipse-top' },
          { label: 'ellipse-bottom', value: 'ellipse-bottom' },
          { label: 'ellipse-left', value: 'ellipse-left' },
          { label: 'ellipse-right', value: 'ellipse-right' },
          { label: 'ellipse-top-left', value: 'ellipse-top-left' },
          { label: 'ellipse-top-right', value: 'ellipse-top-right' },
          { label: 'ellipse-bottom-left', value: 'ellipse-bottom-left' },
          { label: 'ellipse-bottom-right', value: 'ellipse-bottom-right' },
        ]"
      />
    </div>
    <FmPatternBg :variant :size :animate :direction :mask class="h-100" />
  </div>
</template>
`,C=s({__name:`index`,setup(e){return(e,n)=>{let a=t,o=m;return c(),d(o,{navbar:``,"navbar-start-side":`back`},{default:l(()=>[r(a,{code:i(S)},{default:l(()=>[r(x)]),_:1},8,[`code`])]),_:1})}}});export{C as default};