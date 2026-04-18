
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,S as r,Tt as i,et as a,f as o,lt as s,mt as c,rt as l,v as u,w as d,x as f,y as p}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{B as m,I as h,T as g,r as _,w as v}from"./components-DK30L-iF.js";import{t as y}from"./AppPageLayout-BwSv5Viu.js";var b={class:`flex-start-center flex-wrap gap-2`},x=d({__name:`_demo1`,setup(d){let p=c(!1),h=c({closable:!0,center:!1,header:!0,footer:!0,contentHeight:``,loading:!1});a(()=>h.value.loading,e=>{e&&setTimeout(()=>{h.value.loading=!1},3e3)});function _(e,t){e===`close`?v().confirm({title:`提示`,content:`确定要关闭吗？`,onConfirm:()=>{t()}}):t()}return(a,c)=>{let d=m,v=g;return n(),f(o,null,[e(d,{onClick:c[0]||(c[0]=e=>p.value=!0)},{default:l(()=>[...c[8]||(c[8]=[r(` 打开 `,-1)])]),_:1}),e(v,{modelValue:t(p),"onUpdate:modelValue":c[7]||(c[7]=e=>s(p)?p.value=e:null),title:`标题`,description:`这里是一段描述介绍`,closable:t(h).closable,center:t(h).center,loading:t(h).loading,header:t(h).header,footer:t(h).footer,"before-close":_},{default:l(()=>[u(`div`,{class:i(t(h).contentHeight)},[u(`div`,b,[e(d,{variant:t(h).closable?`default`:`outline`,class:`w-full`,onClick:c[1]||(c[1]=e=>t(h).closable=!t(h).closable)},{default:l(()=>[...c[9]||(c[9]=[r(` 关闭按钮 `,-1)])]),_:1},8,[`variant`]),e(d,{variant:t(h).center?`default`:`outline`,class:`w-full`,onClick:c[2]||(c[2]=e=>t(h).center=!t(h).center)},{default:l(()=>[...c[10]||(c[10]=[r(` 居中显示 `,-1)])]),_:1},8,[`variant`]),e(d,{variant:t(h).header?`default`:`outline`,class:`w-full`,onClick:c[3]||(c[3]=e=>t(h).header=!t(h).header)},{default:l(()=>[...c[11]||(c[11]=[r(` 头部区域 `,-1)])]),_:1},8,[`variant`]),e(d,{variant:t(h).footer?`default`:`outline`,class:`w-full`,onClick:c[4]||(c[4]=e=>t(h).footer=!t(h).footer)},{default:l(()=>[...c[12]||(c[12]=[r(` 尾部区域 `,-1)])]),_:1},8,[`variant`]),e(d,{variant:t(h).contentHeight?`default`:`outline`,class:`w-full`,onClick:c[5]||(c[5]=e=>t(h).contentHeight=t(h).contentHeight?``:`h-400`)},{default:l(()=>[...c[13]||(c[13]=[r(` 切换内容高度 `,-1)])]),_:1},8,[`variant`]),e(d,{variant:`outline`,class:`w-full`,onClick:c[6]||(c[6]=e=>t(h).loading=!0)},{default:l(()=>[...c[14]||(c[14]=[r(` 显示加载中 `,-1)])]),_:1})])],2)]),_:1},8,[`modelValue`,`closable`,`center`,`loading`,`header`,`footer`])],64)}}}),S=`<script setup lang="ts">
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
`,C={class:`flex flex-wrap gap-4`},w=d({__name:`_demo2`,setup(t){function i(){v().info({title:`温馨提醒`,content:`这是 info 弹窗`,onConfirm:()=>{_.info(`你点了确定`)}})}function a(){v().success({title:`温馨提醒`,content:`这是 success 弹窗`,onConfirm:()=>{_.info(`你点了确定`)}})}function o(){v().warning({title:`温馨提醒`,content:`这是 warning 弹窗`,onConfirm:()=>{_.info(`你点了确定`)}})}function s(){v().error({title:`温馨提醒`,content:`这是 confirm 弹窗`,onConfirm:()=>{_.info(`你点了确定`)}})}function c(){v().confirm({title:`温馨提醒`,content:`这是 confirm 弹窗`,onConfirm:()=>{_.info(`你点了确定`)}})}function u(){let{update:e}=v().confirm({title:`温馨提醒`,content:`这是 confirm 弹窗`,beforeClose:(t,n)=>{t===`confirm`?e({title:`二次确认`,content:`确定要关闭吗？`,confirmButtonText:`我确定`,cancelButtonText:`我取消`,beforeClose:e=>{n()}}):n()}})}function d(){v().confirm({title:`温馨提醒`,content:`这是 confirm 弹窗`,confirmButtonText:`确认（随机成功或失败）`,beforeClose:async(e,t)=>{e===`confirm`?(await new Promise(e=>setTimeout(e,1e3)),Math.random()>.5?(_.success(`成功了！`),t()):_.error(`失败了！`)):t()}})}return(t,p)=>{let h=m;return n(),f(`div`,C,[e(h,{onClick:i},{default:l(()=>[...p[0]||(p[0]=[r(` Info `,-1)])]),_:1}),e(h,{onClick:a},{default:l(()=>[...p[1]||(p[1]=[r(` Success `,-1)])]),_:1}),e(h,{onClick:o},{default:l(()=>[...p[2]||(p[2]=[r(` Warning `,-1)])]),_:1}),e(h,{onClick:s},{default:l(()=>[...p[3]||(p[3]=[r(` Error `,-1)])]),_:1}),e(h,{onClick:c},{default:l(()=>[...p[4]||(p[4]=[r(` Confirm `,-1)])]),_:1}),e(h,{onClick:u},{default:l(()=>[...p[5]||(p[5]=[r(` Double Confirm `,-1)])]),_:1}),e(h,{onClick:d},{default:l(()=>[...p[6]||(p[6]=[r(` Confirm with promise `,-1)])]),_:1})])}}}),T=`<script setup lang="ts">
function showModalInfo() {
  useFmModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
    onConfirm: () => {
      fmToast.info('你点了确定')
    },
  })
}
function showModalSuccess() {
  useFmModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
    onConfirm: () => {
      fmToast.info('你点了确定')
    },
  })
}
function showModalWarning() {
  useFmModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
    onConfirm: () => {
      fmToast.info('你点了确定')
    },
  })
}
function showModalError() {
  useFmModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      fmToast.info('你点了确定')
    },
  })
}
function showModalConfirm() {
  useFmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      fmToast.info('你点了确定')
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
          fmToast.success('成功了！')
          done()
        }
        else {
          fmToast.error('失败了！')
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
`,E=d({__name:`index`,setup(r){return(r,i)=>{let a=h,o=y;return n(),p(o,{navbar:``,"navbar-start-side":`back`},{default:l(()=>[u(`div`,null,[e(a,{title:`弹窗`,code:t(S)},{default:l(()=>[e(x)]),_:1},8,[`code`]),e(a,{title:`对话框`,code:t(T)},{default:l(()=>[e(w)]),_:1},8,[`code`])])]),_:1})}}});export{E as default};