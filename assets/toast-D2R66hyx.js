
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,b as t,m as n}from"./src-CTlveZFi.js";import{D as r,E as i,On as a,b as o,k as s,mt as c,qt as l,v as u}from"./runtime-core.esm-bundler-D7siT_TS.js";import{t as d}from"./AppPageLayout-DpGpaj5G.js";var f={class:`flex flex-col gap-2`},p=s({__name:`_demo1`,setup(n){function a(e){if(e){if(e===`loading1`)t.promise(()=>new Promise(e=>{setTimeout(e,2e3)}),{loading:`加载中`,success:()=>`加载成功`,error:()=>`加载失败`,position:`top-right`,duration:3e3});else if(e===`loading2`){let e=t.loading(`加载中`,{position:`top-right`,duration:1/0});setTimeout(()=>{t.dismiss(e),t(`Fantastic-mobile 自成一派的 H5 框架`,{description:`开箱即用，提供舒适开发体验`,position:`top-right`,duration:3e3})},2e3)}else t[e](`Fantastic-mobile 自成一派的 H5 框架`,{description:`开箱即用，提供舒适开发体验`,position:`top-right`,duration:3e3})}else t(`Fantastic-mobile 自成一派的 H5 框架`,{description:`开箱即用，提供舒适开发体验`,position:`top-right`,duration:3e3})}return(t,n)=>{let s=e;return c(),o(`div`,f,[r(s,{onClick:n[0]||(n[0]=e=>a())},{default:l(()=>[...n[7]||(n[7]=[i(` 默认 `,-1)])]),_:1}),r(s,{onClick:n[1]||(n[1]=e=>a(`success`))},{default:l(()=>[...n[8]||(n[8]=[i(` 成功 `,-1)])]),_:1}),r(s,{onClick:n[2]||(n[2]=e=>a(`error`))},{default:l(()=>[...n[9]||(n[9]=[i(` 错误 `,-1)])]),_:1}),r(s,{onClick:n[3]||(n[3]=e=>a(`info`))},{default:l(()=>[...n[10]||(n[10]=[i(` 信息 `,-1)])]),_:1}),r(s,{onClick:n[4]||(n[4]=e=>a(`warning`))},{default:l(()=>[...n[11]||(n[11]=[i(` 警告 `,-1)])]),_:1}),r(s,{onClick:n[5]||(n[5]=e=>a(`loading1`))},{default:l(()=>[...n[12]||(n[12]=[i(` 加载中 1 `,-1)])]),_:1}),r(s,{onClick:n[6]||(n[6]=e=>a(`loading2`))},{default:l(()=>[...n[13]||(n[13]=[i(` 加载中 2 `,-1)])]),_:1})])}}}),m=`<script setup lang="ts">
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
`,h=s({__name:`index`,setup(e){return(e,t)=>{let i=n,o=d;return c(),u(o,{navbar:``,"navbar-start-side":`back`},{default:l(()=>[r(i,{code:a(m)},{default:l(()=>[r(p)]),_:1},8,[`code`])]),_:1})}}});export{h as default};