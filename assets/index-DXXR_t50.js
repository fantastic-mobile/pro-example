
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{a as p,_ as I}from"./index-C0aM3m2R.js";import{_ as h}from"./index.vue_vue_type_script_setup_true_lang-Dt6-y8JN.js";import{a2 as v,ab as g,d as F,r as b,Q as x,k,o as B,b as s,w as r,e as i,_ as M,a as _,u as e,q as O,i as y,F as $,W as d,c as E}from"./index-D1JO3_V0.js";import"./index.vue_vue_type_script_setup_true_lang-BdmnuK66.js";function C(){function w(n){const l=document.createElement("div"),a=v({render(){return g(p,Object.assign({modelValue:!0,icon:"info",closable:!1,border:!1,alignCenter:!0,closeOnClickOverlay:!1,contentClass:"py-0 min-h-auto",footerClass:"p-4",onClosed:()=>{a.unmount()}},n),()=>n.content)}});a.mount(l)}function c(n){const l=document.createElement("div"),a=v({render(){return g(p,Object.assign({modelValue:!0,icon:"success",closable:!1,border:!1,alignCenter:!0,closeOnClickOverlay:!1,contentClass:"py-0 min-h-auto",footerClass:"p-4",onClosed:()=>{a.unmount()}},n),()=>n.content)}});a.mount(l)}function o(n){const l=document.createElement("div"),a=v({render(){return g(p,Object.assign({modelValue:!0,icon:"warning",closable:!1,border:!1,alignCenter:!0,closeOnClickOverlay:!1,contentClass:"py-0 min-h-auto",footerClass:"p-4",onClosed:()=>{a.unmount()}},n),()=>n.content)}});a.mount(l)}function u(n){const l=document.createElement("div"),a=v({render(){return g(p,Object.assign({modelValue:!0,icon:"error",closable:!1,border:!1,alignCenter:!0,closeOnClickOverlay:!1,contentClass:"py-0 min-h-auto",footerClass:"p-4",onClosed:()=>{a.unmount()}},n),()=>n.content)}});a.mount(l)}function f(n){const l=document.createElement("div"),a=v({render(){return g(p,Object.assign({modelValue:!0,closable:!1,border:!1,alignCenter:!0,closeOnClickOverlay:!1,contentClass:"py-0 min-h-auto",footerClass:"p-4",showCancelButton:!0,onClosed:()=>{a.unmount()}},n),()=>n.content)}});a.mount(l)}return{info:w,success:c,warning:o,error:u,confirm:f}}const V={class:"flex-start-center flex-wrap gap-2"},H=F({__name:"_demo1",setup(w){const c=b(!1),o=b({closable:!0,center:!1,header:!0,footer:!0,contentHeight:"",loading:!1});x(()=>o.value.loading,f=>{f&&setTimeout(()=>{o.value.loading=!1},3e3)});function u(f,n){f==="close"?C().confirm({title:"提示",content:"确定要关闭吗？",onConfirm:()=>{n()}}):n()}return(f,n)=>{const l=M,a=p;return B(),k($,null,[s(l,{onClick:n[0]||(n[0]=t=>c.value=!0)},{default:r(()=>n[8]||(n[8]=[i(" 打开 ",-1)])),_:1,__:[8]}),s(a,{modelValue:e(c),"onUpdate:modelValue":n[7]||(n[7]=t=>y(c)?c.value=t:null),title:"标题",description:"这里是一段描述介绍",closable:e(o).closable,center:e(o).center,loading:e(o).loading,header:e(o).header,footer:e(o).footer,"before-close":u},{default:r(()=>[_("div",{class:O(e(o).contentHeight)},[_("div",V,[s(l,{variant:e(o).closable?"default":"outline",class:"w-full",onClick:n[1]||(n[1]=t=>e(o).closable=!e(o).closable)},{default:r(()=>n[9]||(n[9]=[i(" 关闭按钮 ",-1)])),_:1,__:[9]},8,["variant"]),s(l,{variant:e(o).center?"default":"outline",class:"w-full",onClick:n[2]||(n[2]=t=>e(o).center=!e(o).center)},{default:r(()=>n[10]||(n[10]=[i(" 居中显示 ",-1)])),_:1,__:[10]},8,["variant"]),s(l,{variant:e(o).header?"default":"outline",class:"w-full",onClick:n[3]||(n[3]=t=>e(o).header=!e(o).header)},{default:r(()=>n[11]||(n[11]=[i(" 头部区域 ",-1)])),_:1,__:[11]},8,["variant"]),s(l,{variant:e(o).footer?"default":"outline",class:"w-full",onClick:n[4]||(n[4]=t=>e(o).footer=!e(o).footer)},{default:r(()=>n[12]||(n[12]=[i(" 尾部区域 ",-1)])),_:1,__:[12]},8,["variant"]),s(l,{variant:e(o).contentHeight?"default":"outline",class:"w-full",onClick:n[5]||(n[5]=t=>e(o).contentHeight=e(o).contentHeight?"":"h-400")},{default:r(()=>n[13]||(n[13]=[i(" 切换内容高度 ",-1)])),_:1,__:[13]},8,["variant"]),s(l,{variant:"outline",class:"w-full",onClick:n[6]||(n[6]=t=>e(o).loading=!0)},{default:r(()=>n[14]||(n[14]=[i(" 显示加载中 ",-1)])),_:1,__:[14]})])],2)]),_:1},8,["modelValue","closable","center","loading","header","footer"])],64)}}}),P=`<script setup lang="ts">
import { useFmModal } from '@/ui/components/FmModal'

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

function handleBeforeClose(action: 'confirm' | 'cancel' | 'close', done: () => void) {
  if (action === 'close') {
    useFmModal().confirm({
      title: '提示',
      content: '确定要关闭吗？',
      onConfirm: () => {
        done()
      },
    })
  }
  else {
    done()
  }
}
<\/script>

<template>
  <FmButton @click="modal = true">
    打开
  </FmButton>
  <FmModal v-model="modal" title="标题" description="这里是一段描述介绍" :closable="modalInfo.closable" :center="modalInfo.center" :loading="modalInfo.loading" :header="modalInfo.header" :footer="modalInfo.footer" :before-close="handleBeforeClose">
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
`,T={class:"flex flex-wrap gap-4"},W=F({__name:"_demo2",setup(w){function c(){C().info({title:"温馨提醒",content:"这是 info 弹窗",onConfirm:()=>{d.info("你点了确定")}})}function o(){C().success({title:"温馨提醒",content:"这是 success 弹窗",onConfirm:()=>{d.info("你点了确定")}})}function u(){C().warning({title:"温馨提醒",content:"这是 warning 弹窗",onConfirm:()=>{d.info("你点了确定")}})}function f(){C().error({title:"温馨提醒",content:"这是 confirm 弹窗",onConfirm:()=>{d.info("你点了确定")}})}function n(){C().confirm({title:"温馨提醒",content:"这是 confirm 弹窗",onConfirm:()=>{d.info("你点了确定")}})}function l(){C().confirm({title:"温馨提醒",content:"这是 confirm 弹窗",confirmButtonText:"确认（随机成功或失败）",beforeClose:async(a,t)=>{a==="confirm"?(await new Promise(m=>setTimeout(m,1e3)),Math.random()>.5?(d.success("成功了！"),t()):d.error("失败了！")):t()}})}return(a,t)=>{const m=M;return B(),k("div",T,[s(m,{onClick:c},{default:r(()=>t[0]||(t[0]=[i(" Info ",-1)])),_:1,__:[0]}),s(m,{onClick:o},{default:r(()=>t[1]||(t[1]=[i(" Success ",-1)])),_:1,__:[1]}),s(m,{onClick:u},{default:r(()=>t[2]||(t[2]=[i(" Warning ",-1)])),_:1,__:[2]}),s(m,{onClick:f},{default:r(()=>t[3]||(t[3]=[i(" Error ",-1)])),_:1,__:[3]}),s(m,{onClick:n},{default:r(()=>t[4]||(t[4]=[i(" Confirm ",-1)])),_:1,__:[4]}),s(m,{onClick:l},{default:r(()=>t[5]||(t[5]=[i(" Confirm with promise ",-1)])),_:1,__:[5]})])}}}),j=`<script setup lang="ts">
import { toast } from 'vue-sonner'
import { useFmModal } from '@/ui/components/FmModal'

function showModalInfo() {
  useFmModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalSuccess() {
  useFmModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalWarning() {
  useFmModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalError() {
  useFmModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalConfirm() {
  useFmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalPromiseConfirm() {
  useFmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    confirmButtonText: '确认（随机成功或失败）',
    beforeClose: async (action, done) => {
      if (action === 'confirm') {
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (Math.random() > 0.5) {
          toast.success('成功了！')
          done()
        }
        else {
          toast.error('失败了！')
        }
      }
      else {
        done()
      }
    },
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
    <FmButton @click="showModalPromiseConfirm">
      Confirm with promise
    </FmButton>
  </div>
</template>
`,q=F({__name:"index",setup(w){return(c,o)=>{const u=h,f=I;return B(),E(f,{navbar:"","navbar-start-side":"back"},{default:r(()=>[_("div",null,[s(u,{title:"弹窗",code:e(P)},{default:r(()=>[s(H)]),_:1},8,["code"]),s(u,{title:"对话框",code:e(j)},{default:r(()=>[s(W)]),_:1},8,["code"])])]),_:1})}}});export{q as default};
