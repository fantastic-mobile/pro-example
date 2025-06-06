
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{a as d,_ as B}from"./index-d6ZB0Jya.js";import{_ as I}from"./index.vue_vue_type_script_setup_true_lang-DMxm4nWt.js";import{d as C,r as F,R as M,k,o as w,b as a,w as s,e as i,_ as b,a as _,u as o,q as h,i as x,F as O,a1 as m,aa as p,c as $}from"./index-BLP5v8hh.js";import"./index.vue_vue_type_script_setup_true_lang-Bk9FuQCK.js";const y={class:"flex-start-center flex-wrap gap-2"},E=C({__name:"_demo1",setup(v){const u=F(!1),e=F({closable:!0,center:!1,header:!0,footer:!0,contentHeight:"",loading:!1});return M(()=>e.value.loading,c=>{c&&setTimeout(()=>{e.value.loading=!1},3e3)}),(c,n)=>{const l=b,r=d;return w(),k(O,null,[a(l,{onClick:n[0]||(n[0]=t=>u.value=!0)},{default:s(()=>n[8]||(n[8]=[i(" 打开 ")])),_:1,__:[8]}),a(r,{modelValue:o(u),"onUpdate:modelValue":n[7]||(n[7]=t=>x(u)?u.value=t:null),title:"标题",description:"这里是一段描述介绍",closable:o(e).closable,center:o(e).center,loading:o(e).loading,header:o(e).header,footer:o(e).footer},{default:s(()=>[_("div",{class:h(o(e).contentHeight)},[_("div",y,[a(l,{variant:o(e).closable?"default":"outline",class:"w-full",onClick:n[1]||(n[1]=t=>o(e).closable=!o(e).closable)},{default:s(()=>n[9]||(n[9]=[i(" 关闭按钮 ")])),_:1,__:[9]},8,["variant"]),a(l,{variant:o(e).center?"default":"outline",class:"w-full",onClick:n[2]||(n[2]=t=>o(e).center=!o(e).center)},{default:s(()=>n[10]||(n[10]=[i(" 居中显示 ")])),_:1,__:[10]},8,["variant"]),a(l,{variant:o(e).header?"default":"outline",class:"w-full",onClick:n[3]||(n[3]=t=>o(e).header=!o(e).header)},{default:s(()=>n[11]||(n[11]=[i(" 头部区域 ")])),_:1,__:[11]},8,["variant"]),a(l,{variant:o(e).footer?"default":"outline",class:"w-full",onClick:n[4]||(n[4]=t=>o(e).footer=!o(e).footer)},{default:s(()=>n[12]||(n[12]=[i(" 尾部区域 ")])),_:1,__:[12]},8,["variant"]),a(l,{variant:o(e).contentHeight?"default":"outline",class:"w-full",onClick:n[5]||(n[5]=t=>o(e).contentHeight=o(e).contentHeight?"":"h-400")},{default:s(()=>n[13]||(n[13]=[i(" 切换内容高度 ")])),_:1,__:[13]},8,["variant"]),a(l,{variant:"outline",class:"w-full",onClick:n[6]||(n[6]=t=>o(e).loading=!0)},{default:s(()=>n[14]||(n[14]=[i(" 显示加载中 ")])),_:1,__:[14]})])],2)]),_:1},8,["modelValue","closable","center","loading","header","footer"])],64)}}}),V=`<script setup lang="ts">
const modal = ref(false)
const modalInfo = ref({
  closable: true,
  center: false,
  header: true,
  footer: true,
  contentHeight: '',
  loading: false,
})
watch(() => modalInfo.value.loading, (loading) => {
  if (loading) {
    setTimeout(() => {
      modalInfo.value.loading = false
    }, 3000)
  }
})
<\/script>

<template>
  <FmButton @click="modal = true">
    打开
  </FmButton>
  <FmModal v-model="modal" title="标题" description="这里是一段描述介绍" :closable="modalInfo.closable" :center="modalInfo.center" :loading="modalInfo.loading" :header="modalInfo.header" :footer="modalInfo.footer">
    <div :class="modalInfo.contentHeight">
      <div class="flex-start-center flex-wrap gap-2">
        <FmButton :variant="modalInfo.closable ? 'default' : 'outline'" class="w-full" @click="modalInfo.closable = !modalInfo.closable">
          关闭按钮
        </FmButton>
        <FmButton :variant="modalInfo.center ? 'default' : 'outline'" class="w-full" @click="modalInfo.center = !modalInfo.center">
          居中显示
        </FmButton>
        <FmButton :variant="modalInfo.header ? 'default' : 'outline'" class="w-full" @click="modalInfo.header = !modalInfo.header">
          头部区域
        </FmButton>
        <FmButton :variant="modalInfo.footer ? 'default' : 'outline'" class="w-full" @click="modalInfo.footer = !modalInfo.footer">
          尾部区域
        </FmButton>
        <FmButton :variant="!!modalInfo.contentHeight ? 'default' : 'outline'" class="w-full" @click="modalInfo.contentHeight = !!modalInfo.contentHeight ? '' : 'h-400'">
          切换内容高度
        </FmButton>
        <FmButton variant="outline" class="w-full" @click="modalInfo.loading = true">
          显示加载中
        </FmButton>
      </div>
    </div>
  </FmModal>
</template>
`;function g(){function v(l){const r=document.createElement("div"),t=m({render(){return p(d,Object.assign({modelValue:!0,icon:"info",closable:!1,border:!1,alignCenter:!0,closeOnClickOverlay:!1,contentClass:"py-0 min-h-auto",footerClass:"p-4",onClosed:()=>{t.unmount()}},l),()=>l.content)}});t.mount(r)}function u(l){const r=document.createElement("div"),t=m({render(){return p(d,Object.assign({modelValue:!0,icon:"success",closable:!1,border:!1,alignCenter:!0,closeOnClickOverlay:!1,contentClass:"py-0 min-h-auto",footerClass:"p-4",onClosed:()=>{t.unmount()}},l),()=>l.content)}});t.mount(r)}function e(l){const r=document.createElement("div"),t=m({render(){return p(d,Object.assign({modelValue:!0,icon:"warning",closable:!1,border:!1,alignCenter:!0,closeOnClickOverlay:!1,contentClass:"py-0 min-h-auto",footerClass:"p-4",onClosed:()=>{t.unmount()}},l),()=>l.content)}});t.mount(r)}function c(l){const r=document.createElement("div"),t=m({render(){return p(d,Object.assign({modelValue:!0,icon:"error",closable:!1,border:!1,alignCenter:!0,closeOnClickOverlay:!1,contentClass:"py-0 min-h-auto",footerClass:"p-4",onClosed:()=>{t.unmount()}},l),()=>l.content)}});t.mount(r)}function n(l){const r=document.createElement("div"),t=m({render(){return p(d,Object.assign({modelValue:!0,closable:!1,border:!1,alignCenter:!0,closeOnClickOverlay:!1,contentClass:"py-0 min-h-auto",footerClass:"p-4",showCancelButton:!0,onClosed:()=>{t.unmount()}},l),()=>l.content)}});t.mount(r)}return{info:v,success:u,warning:e,error:c,confirm:n}}const H={class:"flex flex-wrap gap-4"},j=C({__name:"_demo2",setup(v){function u(){g().info({title:"温馨提醒",content:"这是 info 弹窗"})}function e(){g().success({title:"温馨提醒",content:"这是 success 弹窗"})}function c(){g().warning({title:"温馨提醒",content:"这是 warning 弹窗"})}function n(){g().error({title:"温馨提醒",content:"这是 confirm 弹窗"})}function l(){g().confirm({title:"温馨提醒",content:"这是 confirm 弹窗"})}return(r,t)=>{const f=b;return w(),k("div",H,[a(f,{onClick:u},{default:s(()=>t[0]||(t[0]=[i(" Info ")])),_:1,__:[0]}),a(f,{onClick:e},{default:s(()=>t[1]||(t[1]=[i(" Success ")])),_:1,__:[1]}),a(f,{onClick:c},{default:s(()=>t[2]||(t[2]=[i(" Warning ")])),_:1,__:[2]}),a(f,{onClick:n},{default:s(()=>t[3]||(t[3]=[i(" Error ")])),_:1,__:[3]}),a(f,{onClick:l},{default:s(()=>t[4]||(t[4]=[i(" Confirm ")])),_:1,__:[4]})])}}}),S=`<script setup lang="ts">
import { useFmModal } from '@/ui/components/FmModal'

function showModalInfo() {
  useFmModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
  })
}
function showModalSuccess() {
  useFmModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
  })
}
function showModalWarning() {
  useFmModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
  })
}
function showModalError() {
  useFmModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
  })
}
function showModalConfirm() {
  useFmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
  })
}
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FmButton @click="showModalInfo">
      Info
    </FmButton>
    <FmButton @click="showModalSuccess">
      Success
    </FmButton>
    <FmButton @click="showModalWarning">
      Warning
    </FmButton>
    <FmButton @click="showModalError">
      Error
    </FmButton>
    <FmButton @click="showModalConfirm">
      Confirm
    </FmButton>
  </div>
</template>
`,D=C({__name:"index",setup(v){return(u,e)=>{const c=I,n=B;return w(),$(n,{navbar:"","navbar-start-side":"back"},{default:s(()=>[_("div",null,[a(c,{title:"弹窗",code:o(V)},{default:s(()=>[a(E)]),_:1},8,["code"]),a(c,{title:"对话框",code:o(S)},{default:s(()=>[a(j)]),_:1},8,["code"])])]),_:1})}}});export{D as default};
