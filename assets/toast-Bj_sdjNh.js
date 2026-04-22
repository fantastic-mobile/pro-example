
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,S as r,rt as i,w as a,x as o,y as s}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{B as c,I as l,i as u}from"./components-DK30L-iF.js";import{t as d}from"./AppPageLayout-BwSv5Viu.js";var f={class:`flex flex-col gap-2`},p=a({__name:`_demo1`,setup(t){function a(e){if(e)if(e===`loading1`)u.promise(()=>new Promise(e=>{setTimeout(e,2e3)}),{loading:`加载中`,success:()=>`加载成功`,error:()=>`加载失败`,position:`top-right`,duration:3e3});else if(e===`loading2`){let e=u.loading(`加载中`,{position:`top-right`,duration:1/0});setTimeout(()=>{u.dismiss(e),u(`Fantastic-mobile 自成一派的 H5 框架`,{description:`开箱即用，提供舒适开发体验`,position:`top-right`,duration:3e3})},2e3)}else u[e](`Fantastic-mobile 自成一派的 H5 框架`,{description:`开箱即用，提供舒适开发体验`,position:`top-right`,duration:3e3});else u(`Fantastic-mobile 自成一派的 H5 框架`,{description:`开箱即用，提供舒适开发体验`,position:`top-right`,duration:3e3})}return(t,s)=>{let l=c;return n(),o(`div`,f,[e(l,{onClick:s[0]||(s[0]=e=>a())},{default:i(()=>[...s[7]||(s[7]=[r(` 默认 `,-1)])]),_:1}),e(l,{onClick:s[1]||(s[1]=e=>a(`success`))},{default:i(()=>[...s[8]||(s[8]=[r(` 成功 `,-1)])]),_:1}),e(l,{onClick:s[2]||(s[2]=e=>a(`error`))},{default:i(()=>[...s[9]||(s[9]=[r(` 错误 `,-1)])]),_:1}),e(l,{onClick:s[3]||(s[3]=e=>a(`info`))},{default:i(()=>[...s[10]||(s[10]=[r(` 信息 `,-1)])]),_:1}),e(l,{onClick:s[4]||(s[4]=e=>a(`warning`))},{default:i(()=>[...s[11]||(s[11]=[r(` 警告 `,-1)])]),_:1}),e(l,{onClick:s[5]||(s[5]=e=>a(`loading1`))},{default:i(()=>[...s[12]||(s[12]=[r(` 加载中 1 `,-1)])]),_:1}),e(l,{onClick:s[6]||(s[6]=e=>a(`loading2`))},{default:i(()=>[...s[13]||(s[13]=[r(` 加载中 2 `,-1)])]),_:1})])}}}),m=`<script setup lang="ts">
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
`,h=a({__name:`index`,setup(r){return(r,a)=>{let o=l,c=d;return n(),s(c,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[e(o,{code:t(m)},{default:i(()=>[e(p)]),_:1},8,[`code`])]),_:1})}}});export{h as default};