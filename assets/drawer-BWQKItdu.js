
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{M as e,k as t,m as n}from"./src-CTlveZFi.js";import{D as r,E as i,Ht as a,On as o,_ as s,b as c,k as l,mt as u,o as d,qt as f,un as p,v as m,vn as h}from"./runtime-core.esm-bundler-D7siT_TS.js";import{s as g}from"./index-CXygZjsd.js";import{t as _}from"./AppPageLayout-DpGpaj5G.js";var v={class:`flex-start-center flex-wrap gap-2`},y=l({__name:`_demo1`,setup(n){let l=h(!1),m=h({side:`right`,closable:!0,header:!0,footer:!0,loading:!1});return a(()=>m.value.loading,e=>{e&&setTimeout(()=>{m.value.loading=!1},3e3)}),(n,a)=>{let h=e,_=g,y=t;return u(),c(d,null,[r(h,{onClick:a[0]||(a[0]=e=>l.value=!0)},{default:f(()=>[...a[7]||(a[7]=[i(` 打开 `,-1)])]),_:1}),r(y,{modelValue:o(l),"onUpdate:modelValue":a[6]||(a[6]=e=>p(l)?l.value=e:null),title:`标题`,description:`这里是一段描述介绍`,side:o(m).side,closable:o(m).closable,header:o(m).header,footer:o(m).footer,loading:o(m).loading},{default:f(()=>[s(`div`,v,[r(_,{modelValue:o(m).side,"onUpdate:modelValue":a[1]||(a[1]=e=>o(m).side=e),options:[{label:`左侧`,value:`left`},{label:`右侧`,value:`right`},{label:`顶部`,value:`top`},{label:`底部`,value:`bottom`}],class:`w-full`},null,8,[`modelValue`]),r(h,{variant:o(m).closable?`default`:`outline`,class:`w-full`,onClick:a[2]||(a[2]=e=>o(m).closable=!o(m).closable)},{default:f(()=>[...a[8]||(a[8]=[i(` 关闭按钮 `,-1)])]),_:1},8,[`variant`]),r(h,{variant:o(m).header?`default`:`outline`,class:`w-full`,onClick:a[3]||(a[3]=e=>o(m).header=!o(m).header)},{default:f(()=>[...a[9]||(a[9]=[i(` 头部区域 `,-1)])]),_:1},8,[`variant`]),r(h,{variant:o(m).footer?`default`:`outline`,class:`w-full`,onClick:a[4]||(a[4]=e=>o(m).footer=!o(m).footer)},{default:f(()=>[...a[10]||(a[10]=[i(` 尾部区域 `,-1)])]),_:1},8,[`variant`]),r(h,{variant:`outline`,class:`w-full`,onClick:a[5]||(a[5]=e=>o(m).loading=!0)},{default:f(()=>[...a[11]||(a[11]=[i(` 显示加载中 `,-1)])]),_:1})])]),_:1},8,[`modelValue`,`side`,`closable`,`header`,`footer`,`loading`])],64)}}}),b=`<script setup lang="ts">
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
`,x=l({__name:`index`,setup(e){return(e,t)=>{let i=n,a=_;return u(),m(a,{navbar:``,"navbar-start-side":`back`},{default:f(()=>[r(i,{code:o(b)},{default:f(()=>[r(y)]),_:1},8,[`code`])]),_:1})}}});export{x as default};