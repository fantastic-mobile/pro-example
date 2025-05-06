
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as p}from"./index-CS_isp3V.js";import{_ as f}from"./index.vue_vue_type_script_setup_true_lang-c6EAtaK0.js";import{d,k as g,o as u,b as o,w as i,e,_ as c,V as l,c as F,u as k}from"./index-BHoQCIPp.js";import"./index.vue_vue_type_script_setup_true_lang-DMOaZCng.js";const w={class:"flex flex-col gap-2"},B=d({__name:"_demo1",setup(m){function s(r){if(r)if(r==="loading1")l.promise(()=>new Promise(n=>{setTimeout(n,2e3)}),{loading:"加载中",success:()=>"加载成功",error:()=>"加载失败",position:"top-right",duration:3e3});else if(r==="loading2"){const n=l.loading("加载中",{position:"top-right",duration:1/0});setTimeout(()=>{l.dismiss(n),l("Fantastic-mobile 自成一派的 H5 框架",{description:"开箱即用，提供舒适开发体验",position:"top-right",duration:3e3})},2e3)}else l[r]("Fantastic-mobile 自成一派的 H5 框架",{description:"开箱即用，提供舒适开发体验",position:"top-right",duration:3e3});else l("Fantastic-mobile 自成一派的 H5 框架",{description:"开箱即用，提供舒适开发体验",position:"top-right",duration:3e3})}return(r,n)=>{const t=c;return u(),g("div",w,[o(t,{onClick:n[0]||(n[0]=a=>s())},{default:i(()=>n[7]||(n[7]=[e(" 默认 ")])),_:1}),o(t,{onClick:n[1]||(n[1]=a=>s("success"))},{default:i(()=>n[8]||(n[8]=[e(" 成功 ")])),_:1}),o(t,{onClick:n[2]||(n[2]=a=>s("error"))},{default:i(()=>n[9]||(n[9]=[e(" 错误 ")])),_:1}),o(t,{onClick:n[3]||(n[3]=a=>s("info"))},{default:i(()=>n[10]||(n[10]=[e(" 信息 ")])),_:1}),o(t,{onClick:n[4]||(n[4]=a=>s("warning"))},{default:i(()=>n[11]||(n[11]=[e(" 警告 ")])),_:1}),o(t,{onClick:n[5]||(n[5]=a=>s("loading1"))},{default:i(()=>n[12]||(n[12]=[e(" 加载中 1 ")])),_:1}),o(t,{onClick:n[6]||(n[6]=a=>s("loading2"))},{default:i(()=>n[13]||(n[13]=[e(" 加载中 2 ")])),_:1})])}}}),_=`<script setup lang="ts">
import { toast } from 'vue-sonner'

function showToast(type?: 'success' | 'error' | 'info' | 'warning' | 'loading1' | 'loading2') {
  if (type) {
    if (type === 'loading1') {
      toast.promise(() => new Promise((resolve) => {
        setTimeout(resolve, 2000)
      }), {
        loading: '加载中',
        success: () => '加载成功',
        error: () => '加载失败',
        position: 'top-right',
        duration: 3000,
      })
    }
    else if (type === 'loading2') {
      const loading = toast.loading('加载中', {
        position: 'top-right',
        duration: Infinity,
      })
      setTimeout(() => {
        toast.dismiss(loading)
        toast('Fantastic-mobile 自成一派的 H5 框架', {
          description: '开箱即用，提供舒适开发体验',
          position: 'top-right',
          duration: 3000,
        })
      }, 2000)
    }
    else {
      toast[type]('Fantastic-mobile 自成一派的 H5 框架', {
        description: '开箱即用，提供舒适开发体验',
        position: 'top-right',
        duration: 3000,
      })
    }
  }
  else {
    toast('Fantastic-mobile 自成一派的 H5 框架', {
      description: '开箱即用，提供舒适开发体验',
      position: 'top-right',
      duration: 3000,
    })
  }
}
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <FmButton @click="showToast()">
      默认
    </FmButton>
    <FmButton @click="showToast('success')">
      成功
    </FmButton>
    <FmButton @click="showToast('error')">
      错误
    </FmButton>
    <FmButton @click="showToast('info')">
      信息
    </FmButton>
    <FmButton @click="showToast('warning')">
      警告
    </FmButton>
    <FmButton @click="showToast('loading1')">
      加载中 1
    </FmButton>
    <FmButton @click="showToast('loading2')">
      加载中 2
    </FmButton>
  </div>
</template>
`,C=d({__name:"index",setup(m){return(s,r)=>{const n=f,t=p;return u(),F(t,{navbar:"","navbar-start-side":"back"},{default:i(()=>[o(n,{code:k(_)},{default:i(()=>[o(B)]),_:1},8,["code"])]),_:1})}}});export{C as default};
