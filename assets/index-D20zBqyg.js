
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as S}from"./index-d6ZB0Jya.js";import{_ as h}from"./index.vue_vue_type_script_setup_true_lang-DMxm4nWt.js";import{d as y,k as t,o as d,a as l,p as a,Z as B,a0 as u,t as P,a1 as G,r as _,m as k,b as i,w as c,u as p,i as w,e as N,_ as $,F as L,c as W}from"./index-BLP5v8hh.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-DC5q28B1.js";import"./index.vue_vue_type_script_setup_true_lang-Bk9FuQCK.js";const T={class:"fixed bottom-0 top-0 z-10010 w-full bg-black/50"},U={class:"absolute left-1/2 top-1/2 flex-col-center gap-4 -translate-x-1/2 -translate-y-1/2"},D={key:0,class:"sk-plane"},E={key:1,class:"sk-chase"},R={key:2,class:"sk-bounce"},A={key:3,class:"sk-wave"},Z={key:4,class:"sk-pulse"},j={key:5,class:"sk-flow"},q={key:6,class:"sk-swing"},I={key:7,class:"sk-circle"},J={key:8,class:"sk-circle-fade"},K={key:9,class:"sk-grid"},M={key:10,class:"sk-fold"},O={key:11,class:"sk-wander"},Q={key:0,class:"text-sm text-primary"},X=y({name:"FmLoading",__name:"index",props:{type:{default:"plane"},size:{default:50},text:{}},setup(r){return(s,e)=>(d(),t("div",T,[l("div",U,[l("div",{class:"flex-center",style:B({"--sk-size":`${s.size}px`,"--sk-color":"hsl(var(--primary))"})},[s.type==="plane"?(d(),t("div",D)):a("",!0),s.type==="chase"?(d(),t("div",E,e[0]||(e[0]=[u('<div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div>',6)]))):a("",!0),s.type==="bounce"?(d(),t("div",R,e[1]||(e[1]=[l("div",{class:"sk-bounce-dot"},null,-1),l("div",{class:"sk-bounce-dot"},null,-1)]))):a("",!0),s.type==="wave"?(d(),t("div",A,e[2]||(e[2]=[u('<div class="sk-wave-rect"></div><div class="sk-wave-rect"></div><div class="sk-wave-rect"></div><div class="sk-wave-rect"></div><div class="sk-wave-rect"></div>',5)]))):a("",!0),s.type==="pulse"?(d(),t("div",Z)):a("",!0),s.type==="flow"?(d(),t("div",j,e[3]||(e[3]=[l("div",{class:"sk-flow-dot"},null,-1),l("div",{class:"sk-flow-dot"},null,-1),l("div",{class:"sk-flow-dot"},null,-1)]))):a("",!0),s.type==="swing"?(d(),t("div",q,e[4]||(e[4]=[l("div",{class:"sk-swing-dot"},null,-1),l("div",{class:"sk-swing-dot"},null,-1)]))):a("",!0),s.type==="circle"?(d(),t("div",I,e[5]||(e[5]=[u('<div class="sk-circle-dot"></div><div class="sk-circle-dot"></div><div class="sk-circle-dot"></div><div class="sk-circle-dot"></div><div class="sk-circle-dot"></div><div class="sk-circle-dot"></div><div class="sk-circle-dot"></div><div class="sk-circle-dot"></div><div class="sk-circle-dot"></div><div class="sk-circle-dot"></div><div class="sk-circle-dot"></div><div class="sk-circle-dot"></div>',12)]))):a("",!0),s.type==="circle-fade"?(d(),t("div",J,e[6]||(e[6]=[u('<div class="sk-circle-fade-dot"></div><div class="sk-circle-fade-dot"></div><div class="sk-circle-fade-dot"></div><div class="sk-circle-fade-dot"></div><div class="sk-circle-fade-dot"></div><div class="sk-circle-fade-dot"></div><div class="sk-circle-fade-dot"></div><div class="sk-circle-fade-dot"></div><div class="sk-circle-fade-dot"></div><div class="sk-circle-fade-dot"></div><div class="sk-circle-fade-dot"></div><div class="sk-circle-fade-dot"></div>',12)]))):a("",!0),s.type==="grid"?(d(),t("div",K,e[7]||(e[7]=[u('<div class="sk-grid-cube"></div><div class="sk-grid-cube"></div><div class="sk-grid-cube"></div><div class="sk-grid-cube"></div><div class="sk-grid-cube"></div><div class="sk-grid-cube"></div><div class="sk-grid-cube"></div><div class="sk-grid-cube"></div><div class="sk-grid-cube"></div>',9)]))):a("",!0),s.type==="fold"?(d(),t("div",M,e[8]||(e[8]=[l("div",{class:"sk-fold-cube"},null,-1),l("div",{class:"sk-fold-cube"},null,-1),l("div",{class:"sk-fold-cube"},null,-1),l("div",{class:"sk-fold-cube"},null,-1)]))):a("",!0),s.type==="wander"?(d(),t("div",O,e[9]||(e[9]=[l("div",{class:"sk-wander-cube"},null,-1),l("div",{class:"sk-wander-cube"},null,-1),l("div",{class:"sk-wander-cube"},null,-1)]))):a("",!0)],4),s.text?(d(),t("span",Q,P(s.text),1)):a("",!0)])]))}});let g,m;function Y(r){g=G(X,r),m=document.createElement("div"),document.body.appendChild(m),g.mount(m)}function ee(){g.unmount(),document.body.removeChild(m)}const se=y({__name:"_demo1",setup(r){const s=_("plane"),e=_(50),o=_("加载中...");function f(){Y({type:s.value,size:e.value,text:o.value}),setTimeout(()=>{ee()},2e3)}return(de,n)=>{const x=H,V=k("VanSlider"),b=k("VanField"),F=k("VanCellGroup"),C=k("VanForm"),z=$;return d(),t(L,null,[i(C,null,{default:c(()=>[i(F,null,{default:c(()=>[i(x,{modelValue:p(s),"onUpdate:modelValue":n[0]||(n[0]=v=>w(s)?s.value=v:null),label:"类型",columns:[{text:"Plane",value:"plane"},{text:"Chase",value:"chase"},{text:"Bounce",value:"bounce"},{text:"Wave",value:"wave"},{text:"Pulse",value:"pulse"},{text:"Flow",value:"flow"},{text:"Swing",value:"swing"},{text:"Circle",value:"circle"},{text:"Circle Fade",value:"circle-fade"},{text:"Grid",value:"grid"},{text:"Fold",value:"fold"},{text:"Wander",value:"wander"}]},null,8,["modelValue"]),i(b,{label:"尺寸"},{input:c(()=>[i(V,{modelValue:p(e),"onUpdate:modelValue":n[1]||(n[1]=v=>w(e)?e.value=v:null),min:20,max:200,step:10},null,8,["modelValue"])]),_:1}),i(b,{modelValue:p(o),"onUpdate:modelValue":n[2]||(n[2]=v=>w(o)?o.value=v:null),label:"提示文字"},null,8,["modelValue"])]),_:1})]),_:1}),i(z,{onClick:f},{default:c(()=>n[3]||(n[3]=[N(" 加载 Loading（演示控制在 2 秒后关闭） ")])),_:1,__:[3]})],64)}}}),le=`<script setup lang="ts">
import { loadingHide, loadingShow } from '@/ui/components/FmLoading'

const type = ref<'plane' | 'chase' | 'bounce' | 'wave' | 'pulse' | 'flow' | 'swing' | 'circle' | 'circle-fade' | 'grid' | 'fold' | 'wander'>('plane')
const size = ref(50)
const text = ref('加载中...')

function loading() {
  // 提供 3 个参数
  loadingShow({
    type: type.value,
    size: size.value,
    text: text.value,
  })
  setTimeout(() => {
    loadingHide()
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
`,ce=y({__name:"index",setup(r){return(s,e)=>{const o=h,f=S;return d(),W(f,{navbar:"","navbar-start-side":"back"},{default:c(()=>[i(o,{code:p(le)},{default:c(()=>[i(se)]),_:1},8,["code"])]),_:1})}}});export{ce as default};
