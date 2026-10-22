
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{E as e,M as t,T as n,m as r}from"./src-CTlveZFi.js";import{D as i,E as a,Ht as o,On as s,Zn as c,_ as l,b as u,k as d,mt as f,o as p,qt as m,un as h,v as g,vn as _}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as v}from"./toast-ny_sRYkJ.js";import{t as y}from"./AppPageLayout-DpGpaj5G.js";var b={class:`flex-start-center flex-wrap gap-2`},x=d({__name:`_demo1`,setup(r){let d=_(!1),g=_({closable:!0,center:!1,header:!0,footer:!0,contentHeight:``,loading:!1});o(()=>g.value.loading,e=>{e&&setTimeout(()=>{g.value.loading=!1},3e3)});function v(e,t){e===`close`?n().confirm({title:`提示`,content:`确定要关闭吗？`,onConfirm:()=>{t()}}):t()}return(n,r)=>{let o=t,_=e;return f(),u(p,null,[i(o,{onClick:r[0]||(r[0]=e=>d.value=!0)},{default:m(()=>[...r[8]||(r[8]=[a(` 打开 `,-1)])]),_:1}),i(_,{modelValue:s(d),"onUpdate:modelValue":r[7]||(r[7]=e=>h(d)?d.value=e:null),title:`标题`,description:`这里是一段描述介绍`,closable:s(g).closable,center:s(g).center,loading:s(g).loading,header:s(g).header,footer:s(g).footer,"before-close":v},{default:m(()=>[l(`div`,{class:c(s(g).contentHeight)},[l(`div`,b,[i(o,{variant:s(g).closable?`default`:`outline`,class:`w-full`,onClick:r[1]||(r[1]=e=>s(g).closable=!s(g).closable)},{default:m(()=>[...r[9]||(r[9]=[a(` 关闭按钮 `,-1)])]),_:1},8,[`variant`]),i(o,{variant:s(g).center?`default`:`outline`,class:`w-full`,onClick:r[2]||(r[2]=e=>s(g).center=!s(g).center)},{default:m(()=>[...r[10]||(r[10]=[a(` 居中显示 `,-1)])]),_:1},8,[`variant`]),i(o,{variant:s(g).header?`default`:`outline`,class:`w-full`,onClick:r[3]||(r[3]=e=>s(g).header=!s(g).header)},{default:m(()=>[...r[11]||(r[11]=[a(` 头部区域 `,-1)])]),_:1},8,[`variant`]),i(o,{variant:s(g).footer?`default`:`outline`,class:`w-full`,onClick:r[4]||(r[4]=e=>s(g).footer=!s(g).footer)},{default:m(()=>[...r[12]||(r[12]=[a(` 尾部区域 `,-1)])]),_:1},8,[`variant`]),i(o,{variant:s(g).contentHeight?`default`:`outline`,class:`w-full`,onClick:r[5]||(r[5]=e=>s(g).contentHeight=s(g).contentHeight?``:`h-400`)},{default:m(()=>[...r[13]||(r[13]=[a(` 切换内容高度 `,-1)])]),_:1},8,[`variant`]),i(o,{variant:`outline`,class:`w-full`,onClick:r[6]||(r[6]=e=>s(g).loading=!0)},{default:m(()=>[...r[14]||(r[14]=[a(` 显示加载中 `,-1)])]),_:1})])],2)]),_:1},8,[`modelValue`,`closable`,`center`,`loading`,`header`,`footer`])],64)}}}),S=`<script setup lang="ts">
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
`,C={class:`flex flex-wrap gap-4`},w=d({__name:`_demo2`,setup(e){function r(){n().info({title:`温馨提醒`,content:`这是 info 弹窗`,onConfirm:()=>{v().info(`你点了确定`)}})}function o(){n().success({title:`温馨提醒`,content:`这是 success 弹窗`,onConfirm:()=>{v().info(`你点了确定`)}})}function s(){n().warning({title:`温馨提醒`,content:`这是 warning 弹窗`,onConfirm:()=>{v().info(`你点了确定`)}})}function c(){n().error({title:`温馨提醒`,content:`这是 confirm 弹窗`,onConfirm:()=>{v().info(`你点了确定`)}})}function l(){n().confirm({title:`温馨提醒`,content:`这是 confirm 弹窗`,onConfirm:()=>{v().info(`你点了确定`)}})}function d(){let{update:e}=n().confirm({title:`温馨提醒`,content:`这是 confirm 弹窗`,beforeClose:(t,n)=>{t===`confirm`?e({title:`二次确认`,content:`确定要关闭吗？`,confirmButtonText:`我确定`,cancelButtonText:`我取消`,beforeClose:e=>{n()}}):n()}})}function p(){n().confirm({title:`温馨提醒`,content:`这是 confirm 弹窗`,confirmButtonText:`确认（随机成功或失败）`,beforeClose:async(e,t)=>{e===`confirm`?(await new Promise(e=>setTimeout(e,1e3)),Math.random()>.5?(v().success(`成功了！`),t()):v().error(`失败了！`)):t()}})}return(e,n)=>{let h=t;return f(),u(`div`,C,[i(h,{onClick:r},{default:m(()=>[...n[0]||(n[0]=[a(` Info `,-1)])]),_:1}),i(h,{onClick:o},{default:m(()=>[...n[1]||(n[1]=[a(` Success `,-1)])]),_:1}),i(h,{onClick:s},{default:m(()=>[...n[2]||(n[2]=[a(` Warning `,-1)])]),_:1}),i(h,{onClick:c},{default:m(()=>[...n[3]||(n[3]=[a(` Error `,-1)])]),_:1}),i(h,{onClick:l},{default:m(()=>[...n[4]||(n[4]=[a(` Confirm `,-1)])]),_:1}),i(h,{onClick:d},{default:m(()=>[...n[5]||(n[5]=[a(` Double Confirm `,-1)])]),_:1}),i(h,{onClick:p},{default:m(()=>[...n[6]||(n[6]=[a(` Confirm with promise `,-1)])]),_:1})])}}}),T=`<script setup lang="ts">
function showModalInfo() {
  useFmModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
    onConfirm: () => {
      useFmToast().info('你点了确定')
    },
  })
}
function showModalSuccess() {
  useFmModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
    onConfirm: () => {
      useFmToast().info('你点了确定')
    },
  })
}
function showModalWarning() {
  useFmModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
    onConfirm: () => {
      useFmToast().info('你点了确定')
    },
  })
}
function showModalError() {
  useFmModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      useFmToast().info('你点了确定')
    },
  })
}
function showModalConfirm() {
  useFmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      useFmToast().info('你点了确定')
    },
  })
}
function showModalDoubleConfirm() {
  const { update } = useFmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    beforeClose: (action, done) => {
      if (action === 'confirm') {
        update({
          title: '二次确认',
          content: '确定要关闭吗？',
          confirmButtonText: '我确定',
          cancelButtonText: '我取消',
          beforeClose: (action) => {
            if (action === 'confirm') {
              done()
            }
            else {
              done()
            }
          },
        })
      }
      else {
        done()
      }
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
          useFmToast().success('成功了！')
          done()
        }
        else {
          useFmToast().error('失败了！')
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
    <FmButton @click="showModalDoubleConfirm">
      Double Confirm
    </FmButton>
    <FmButton @click="showModalPromiseConfirm">
      Confirm with promise
    </FmButton>
  </div>
</template>
`,E=d({__name:`index`,setup(e){return(e,t)=>{let n=r,a=y;return f(),g(a,{navbar:``,"navbar-start-side":`back`},{default:m(()=>[l(`div`,null,[i(n,{title:`弹窗`,code:s(S)},{default:m(()=>[i(x)]),_:1},8,[`code`]),i(n,{title:`对话框`,code:s(T)},{default:m(()=>[i(w)]),_:1},8,[`code`])])]),_:1})}}});export{E as default};