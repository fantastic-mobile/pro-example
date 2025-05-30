
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_}from"./index-CZoLKV0K.js";import{_ as v}from"./index.vue_vue_type_script_setup_true_lang-juQdyMyI.js";import{d as f,r as u,R as b,k as g,o as m,b as l,w as t,e as d,_ as F,a as I,u as n,i as k,X as B,F as x,c as $}from"./index-r-6p5DPr.js";import{_ as V}from"./index.vue_vue_type_script_setup_true_lang-Dym06tkC.js";import"./index.vue_vue_type_script_setup_true_lang-tI7kj3pw.js";import"./check-SjLICMBw.js";import"./useBodyScrollLock-CofJb3-N.js";const C={class:"flex-start-center flex-wrap gap-2"},D=f({__name:"_demo1",setup(c){const r=u(!1),a=u({side:"right",closable:!0,header:!0,footer:!0,loading:!1});return b(()=>a.value.loading,i=>{i&&setTimeout(()=>{a.value.loading=!1},3e3)}),(i,e)=>{const s=F,w=V,p=B;return m(),g(x,null,[l(s,{onClick:e[0]||(e[0]=o=>r.value=!0)},{default:t(()=>e[7]||(e[7]=[d(" 打开 ")])),_:1,__:[7]}),l(p,{modelValue:n(r),"onUpdate:modelValue":e[6]||(e[6]=o=>k(r)?r.value=o:null),title:"标题",description:"这里是一段描述介绍",side:n(a).side,closable:n(a).closable,header:n(a).header,footer:n(a).footer,loading:n(a).loading},{default:t(()=>[I("div",C,[l(w,{modelValue:n(a).side,"onUpdate:modelValue":e[1]||(e[1]=o=>n(a).side=o),options:[{label:"左侧",value:"left"},{label:"右侧",value:"right"},{label:"顶部",value:"top"},{label:"底部",value:"bottom"}],class:"w-full"},null,8,["modelValue"]),l(s,{variant:n(a).closable?"default":"outline",class:"w-full",onClick:e[2]||(e[2]=o=>n(a).closable=!n(a).closable)},{default:t(()=>e[8]||(e[8]=[d(" 关闭按钮 ")])),_:1,__:[8]},8,["variant"]),l(s,{variant:n(a).header?"default":"outline",class:"w-full",onClick:e[3]||(e[3]=o=>n(a).header=!n(a).header)},{default:t(()=>e[9]||(e[9]=[d(" 头部区域 ")])),_:1,__:[9]},8,["variant"]),l(s,{variant:n(a).footer?"default":"outline",class:"w-full",onClick:e[4]||(e[4]=o=>n(a).footer=!n(a).footer)},{default:t(()=>e[10]||(e[10]=[d(" 尾部区域 ")])),_:1,__:[10]},8,["variant"]),l(s,{variant:"outline",class:"w-full",onClick:e[5]||(e[5]=o=>n(a).loading=!0)},{default:t(()=>e[11]||(e[11]=[d(" 显示加载中 ")])),_:1,__:[11]})])]),_:1},8,["modelValue","side","closable","header","footer","loading"])],64)}}}),N=`<script setup lang="ts">
const drawer = ref(false)

const drawerInfo = ref({
  side: 'right' as const,
  closable: true,
  header: true,
  footer: true,
  loading: false,
})
watch(() => drawerInfo.value.loading, (loading) => {
  if (loading) {
    setTimeout(() => {
      drawerInfo.value.loading = false
    }, 3000)
  }
})
<\/script>

<template>
  <FmButton @click="drawer = true">
    打开
  </FmButton>
  <FmDrawer v-model="drawer" title="标题" description="这里是一段描述介绍" :side="drawerInfo.side" :closable="drawerInfo.closable" :header="drawerInfo.header" :footer="drawerInfo.footer" :loading="drawerInfo.loading">
    <div class="flex-start-center flex-wrap gap-2">
      <FmSelect
        v-model="drawerInfo.side" :options="[
          { label: '左侧', value: 'left' },
          { label: '右侧', value: 'right' },
          { label: '顶部', value: 'top' },
          { label: '底部', value: 'bottom' },
        ]" class="w-full"
      />
      <FmButton :variant="drawerInfo.closable ? 'default' : 'outline'" class="w-full" @click="drawerInfo.closable = !drawerInfo.closable">
        关闭按钮
      </FmButton>
      <FmButton :variant="drawerInfo.header ? 'default' : 'outline'" class="w-full" @click="drawerInfo.header = !drawerInfo.header">
        头部区域
      </FmButton>
      <FmButton :variant="drawerInfo.footer ? 'default' : 'outline'" class="w-full" @click="drawerInfo.footer = !drawerInfo.footer">
        尾部区域
      </FmButton>
      <FmButton variant="outline" class="w-full" @click="drawerInfo.loading = true">
        显示加载中
      </FmButton>
    </div>
  </FmDrawer>
</template>
`,L=f({__name:"index",setup(c){return(r,a)=>{const i=v,e=_;return m(),$(e,{navbar:"","navbar-start-side":"back"},{default:t(()=>[l(i,{code:n(N)},{default:t(()=>[l(D)]),_:1},8,["code"])]),_:1})}}});export{L as default};
