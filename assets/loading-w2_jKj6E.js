
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{D as e,M as t,m as n}from"./src-CTlveZFi.js";import{D as r,E as i,On as a,St as o,b as s,k as c,mt as l,o as u,qt as d,un as f,v as p,vn as m}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as h}from"./VanFieldPicker-Ba_uWIm8.js";import{t as g}from"./AppPageLayout-DpGpaj5G.js";var _=c({__name:`_demo1`,setup(n){let c=m(`plane`),p=m(50),g=m(`加载中...`);function _(){let{close:t}=e({type:c.value,size:p.value,text:g.value});setTimeout(()=>{t()},2e3)}return(e,n)=>{let m=h,v=o(`VanSlider`),y=o(`VanField`),b=o(`VanCellGroup`),x=o(`VanForm`),S=t;return l(),s(u,null,[r(x,null,{default:d(()=>[r(b,null,{default:d(()=>[r(m,{modelValue:a(c),"onUpdate:modelValue":n[0]||(n[0]=e=>f(c)?c.value=e:null),label:`类型`,columns:[{text:`Plane`,value:`plane`},{text:`Chase`,value:`chase`},{text:`Bounce`,value:`bounce`},{text:`Wave`,value:`wave`},{text:`Pulse`,value:`pulse`},{text:`Flow`,value:`flow`},{text:`Swing`,value:`swing`},{text:`Circle`,value:`circle`},{text:`Circle Fade`,value:`circle-fade`},{text:`Grid`,value:`grid`},{text:`Fold`,value:`fold`},{text:`Wander`,value:`wander`}]},null,8,[`modelValue`]),r(y,{label:`尺寸`},{input:d(()=>[r(v,{modelValue:a(p),"onUpdate:modelValue":n[1]||(n[1]=e=>f(p)?p.value=e:null),min:20,max:200,step:10},null,8,[`modelValue`])]),_:1}),r(y,{modelValue:a(g),"onUpdate:modelValue":n[2]||(n[2]=e=>f(g)?g.value=e:null),label:`提示文字`},null,8,[`modelValue`])]),_:1})]),_:1}),r(S,{onClick:_},{default:d(()=>[...n[3]||(n[3]=[i(` 加载 Loading（演示控制在 2 秒后关闭） `,-1)])]),_:1})],64)}}}),v=`<script setup lang="ts">
const type = ref<'plane' | 'chase' | 'bounce' | 'wave' | 'pulse' | 'flow' | 'swing' | 'circle' | 'circle-fade' | 'grid' | 'fold' | 'wander'>('plane')
const size = ref(50)
const text = ref('加载中...')

function loading() {
  // 提供 3 个参数
  const { close } = useFmLoading({
    type: type.value,
    size: size.value,
    text: text.value,
  })
  setTimeout(() => {
    close()
  }, 2000)
}
<\/script>

<template>
  <VanForm>
    <VanCellGroup>
      <VanFieldPicker
        v-model="type"
        label="类型"
        :columns="[
          { text: 'Plane', value: 'plane' },
          { text: 'Chase', value: 'chase' },
          { text: 'Bounce', value: 'bounce' },
          { text: 'Wave', value: 'wave' },
          { text: 'Pulse', value: 'pulse' },
          { text: 'Flow', value: 'flow' },
          { text: 'Swing', value: 'swing' },
          { text: 'Circle', value: 'circle' },
          { text: 'Circle Fade', value: 'circle-fade' },
          { text: 'Grid', value: 'grid' },
          { text: 'Fold', value: 'fold' },
          { text: 'Wander', value: 'wander' },
        ]"
      />
      <VanField label="尺寸">
        <template #input>
          <VanSlider v-model="size" :min="20" :max="200" :step="10" />
        </template>
      </VanField>
      <VanField v-model="text" label="提示文字" />
    </VanCellGroup>
  </VanForm>
  <FmButton @click="loading">
    加载 Loading（演示控制在 2 秒后关闭）
  </FmButton>
</template>
`,y=c({__name:`index`,setup(e){return(e,t)=>{let i=n,o=g;return l(),p(o,{navbar:``,"navbar-start-side":`back`},{default:d(()=>[r(i,{code:a(v)},{default:d(()=>[r(_)]),_:1},8,[`code`])]),_:1})}}});export{y as default};