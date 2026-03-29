
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{C as e,Ct as t,H as n,lt as r,mt as i,rt as a,v as o,w as s,x as c,y as l}from"./vue.runtime.esm-bundler-DMY3hWtO.js";import{P as u,c as d,m as f,y as p}from"./components-CBpXWGFQ.js";import{t as m}from"./AppPageLayout-S1V78StU.js";var h={class:`flex flex-col gap-2`},g={class:`flex gap-2 items-center`},_={class:`flex gap-2 items-center`},v={class:`flex gap-2 items-center`},y={class:`flex gap-2 items-center`},b={class:`flex gap-2 items-center`},x=s({__name:`_demo1`,setup(a){let s=i(`grid`),l=i(`md`),u=i(`ellipse`),m=i(!0),x=i(`top`);return(i,a)=>{let S=f,C=d,w=p;return n(),c(`div`,h,[o(`div`,g,[a[5]||(a[5]=o(`span`,null,`图案`,-1)),e(S,{modelValue:t(s),"onUpdate:modelValue":a[0]||(a[0]=e=>r(s)?s.value=e:null),options:[{label:`grid`,value:`grid`},{label:`dot`,value:`dot`},{label:`big-dot`,value:`big-dot`}]},null,8,[`modelValue`])]),o(`div`,_,[a[6]||(a[6]=o(`span`,null,`尺寸`,-1)),e(S,{modelValue:t(l),"onUpdate:modelValue":a[1]||(a[1]=e=>r(l)?l.value=e:null),options:[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}]},null,8,[`modelValue`])]),o(`div`,v,[a[7]||(a[7]=o(`span`,null,`动画`,-1)),e(C,{modelValue:t(m),"onUpdate:modelValue":a[2]||(a[2]=e=>r(m)?m.value=e:null)},null,8,[`modelValue`])]),o(`div`,y,[a[8]||(a[8]=o(`span`,null,`方向`,-1)),e(S,{modelValue:t(x),"onUpdate:modelValue":a[3]||(a[3]=e=>r(x)?x.value=e:null),options:[{label:`top-left`,value:`top-left`},{label:`top-right`,value:`top-right`},{label:`bottom-left`,value:`bottom-left`},{label:`bottom-right`,value:`bottom-right`},{label:`top`,value:`top`},{label:`bottom`,value:`bottom`},{label:`left`,value:`left`},{label:`right`,value:`right`}]},null,8,[`modelValue`])]),o(`div`,b,[a[9]||(a[9]=o(`span`,null,`遮罩`,-1)),e(S,{modelValue:t(u),"onUpdate:modelValue":a[4]||(a[4]=e=>r(u)?u.value=e:null),options:[{label:`ellipse`,value:`ellipse`},{label:`ellipse-top`,value:`ellipse-top`},{label:`ellipse-bottom`,value:`ellipse-bottom`},{label:`ellipse-left`,value:`ellipse-left`},{label:`ellipse-right`,value:`ellipse-right`},{label:`ellipse-top-left`,value:`ellipse-top-left`},{label:`ellipse-top-right`,value:`ellipse-top-right`},{label:`ellipse-bottom-left`,value:`ellipse-bottom-left`},{label:`ellipse-bottom-right`,value:`ellipse-bottom-right`}]},null,8,[`modelValue`])]),e(w,{variant:t(s),size:t(l),animate:t(m),direction:t(x),mask:t(u),class:`h-100`},null,8,[`variant`,`size`,`animate`,`direction`,`mask`])])}}}),S=`<script setup lang="ts">
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
`,C=s({__name:`index`,setup(r){return(r,i)=>{let o=u,s=m;return n(),l(s,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[e(o,{code:t(S)},{default:a(()=>[e(x)]),_:1},8,[`code`])]),_:1})}}});export{C as default};