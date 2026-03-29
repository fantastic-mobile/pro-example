
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{C as e,Ct as t,H as n,K as r,S as i,f as a,lt as o,mt as s,rt as c,w as l,x as u,y as d}from"./vue.runtime.esm-bundler-DMY3hWtO.js";import{P as f,R as p,T as m}from"./components-CBpXWGFQ.js";import{t as h}from"./VanFieldPicker-4sm4lNfL.js";import{t as g}from"./AppPageLayout-S1V78StU.js";var _=l({__name:`_demo1`,setup(l){let d=s(`plane`),f=s(50),g=s(`加载中...`);function _(){let{close:e}=m({type:d.value,size:f.value,text:g.value});setTimeout(()=>{e()},2e3)}return(s,l)=>{let m=h,v=r(`VanSlider`),y=r(`VanField`),b=r(`VanCellGroup`),x=r(`VanForm`),S=p;return n(),u(a,null,[e(x,null,{default:c(()=>[e(b,null,{default:c(()=>[e(m,{modelValue:t(d),"onUpdate:modelValue":l[0]||(l[0]=e=>o(d)?d.value=e:null),label:`类型`,columns:[{text:`Plane`,value:`plane`},{text:`Chase`,value:`chase`},{text:`Bounce`,value:`bounce`},{text:`Wave`,value:`wave`},{text:`Pulse`,value:`pulse`},{text:`Flow`,value:`flow`},{text:`Swing`,value:`swing`},{text:`Circle`,value:`circle`},{text:`Circle Fade`,value:`circle-fade`},{text:`Grid`,value:`grid`},{text:`Fold`,value:`fold`},{text:`Wander`,value:`wander`}]},null,8,[`modelValue`]),e(y,{label:`尺寸`},{input:c(()=>[e(v,{modelValue:t(f),"onUpdate:modelValue":l[1]||(l[1]=e=>o(f)?f.value=e:null),min:20,max:200,step:10},null,8,[`modelValue`])]),_:1}),e(y,{modelValue:t(g),"onUpdate:modelValue":l[2]||(l[2]=e=>o(g)?g.value=e:null),label:`提示文字`},null,8,[`modelValue`])]),_:1})]),_:1}),e(S,{onClick:_},{default:c(()=>[...l[3]||(l[3]=[i(` 加载 Loading（演示控制在 2 秒后关闭） `,-1)])]),_:1})],64)}}}),v=`<script setup lang="ts">
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
`,y=l({__name:`index`,setup(r){return(r,i)=>{let a=f,o=g;return n(),d(o,{navbar:``,"navbar-start-side":`back`},{default:c(()=>[e(a,{code:t(v)},{default:c(()=>[e(_)]),_:1},8,[`code`])]),_:1})}}});export{y as default};