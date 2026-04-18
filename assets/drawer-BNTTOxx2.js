
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{C as e,Ct as t,H as n,S as r,et as i,f as a,lt as o,mt as s,rt as c,v as l,w as u,x as d,y as f}from"./vue.runtime.esm-bundler-BBr2zMyZ.js";import{B as p,I as m,M as h,g}from"./components-DK30L-iF.js";import{t as _}from"./AppPageLayout-BwSv5Viu.js";var v={class:`flex-start-center flex-wrap gap-2`},y=u({__name:`_demo1`,setup(u){let f=s(!1),m=s({side:`right`,closable:!0,header:!0,footer:!0,loading:!1});return i(()=>m.value.loading,e=>{e&&setTimeout(()=>{m.value.loading=!1},3e3)}),(i,s)=>{let u=p,_=g,y=h;return n(),d(a,null,[e(u,{onClick:s[0]||(s[0]=e=>f.value=!0)},{default:c(()=>[...s[7]||(s[7]=[r(` 打开 `,-1)])]),_:1}),e(y,{modelValue:t(f),"onUpdate:modelValue":s[6]||(s[6]=e=>o(f)?f.value=e:null),title:`标题`,description:`这里是一段描述介绍`,side:t(m).side,closable:t(m).closable,header:t(m).header,footer:t(m).footer,loading:t(m).loading},{default:c(()=>[l(`div`,v,[e(_,{modelValue:t(m).side,"onUpdate:modelValue":s[1]||(s[1]=e=>t(m).side=e),options:[{label:`左侧`,value:`left`},{label:`右侧`,value:`right`},{label:`顶部`,value:`top`},{label:`底部`,value:`bottom`}],class:`w-full`},null,8,[`modelValue`]),e(u,{variant:t(m).closable?`default`:`outline`,class:`w-full`,onClick:s[2]||(s[2]=e=>t(m).closable=!t(m).closable)},{default:c(()=>[...s[8]||(s[8]=[r(` 关闭按钮 `,-1)])]),_:1},8,[`variant`]),e(u,{variant:t(m).header?`default`:`outline`,class:`w-full`,onClick:s[3]||(s[3]=e=>t(m).header=!t(m).header)},{default:c(()=>[...s[9]||(s[9]=[r(` 头部区域 `,-1)])]),_:1},8,[`variant`]),e(u,{variant:t(m).footer?`default`:`outline`,class:`w-full`,onClick:s[4]||(s[4]=e=>t(m).footer=!t(m).footer)},{default:c(()=>[...s[10]||(s[10]=[r(` 尾部区域 `,-1)])]),_:1},8,[`variant`]),e(u,{variant:`outline`,class:`w-full`,onClick:s[5]||(s[5]=e=>t(m).loading=!0)},{default:c(()=>[...s[11]||(s[11]=[r(` 显示加载中 `,-1)])]),_:1})])]),_:1},8,[`modelValue`,`side`,`closable`,`header`,`footer`,`loading`])],64)}}}),b=`<script setup lang="ts">
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
`,x=u({__name:`index`,setup(r){return(r,i)=>{let a=m,o=_;return n(),f(o,{navbar:``,"navbar-start-side":`back`},{default:c(()=>[e(a,{code:t(b)},{default:c(()=>[e(y)]),_:1},8,[`code`])]),_:1})}}});export{x as default};