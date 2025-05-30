
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{_ as z}from"./index-CZoLKV0K.js";import{_ as F}from"./index.vue_vue_type_script_setup_true_lang-juQdyMyI.js";import{a9 as x,d as g,ag as B,z as S,k as h,o as v,q as f,u as l,L as _,a,B as $,s as w,r,b as i,i as m,ah as C,c as P,w as c}from"./index-r-6p5DPr.js";import{_ as U}from"./index.vue_vue_type_script_setup_true_lang-Dym06tkC.js";import"./index.vue_vue_type_script_setup_true_lang-tI7kj3pw.js";import"./check-SjLICMBw.js";import"./useBodyScrollLock-CofJb3-N.js";const y=x("relative text-clip",{variants:{variant:{grid:"bg-[linear-gradient(to_right,hsl(var(--foreground)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.3)_1px,transparent_1px)]",dot:"bg-[radial-gradient(hsl(var(--foreground)/0.3)_1px,transparent_1px)]","big-dot":"bg-[radial-gradient(hsl(var(--foreground)/0.3)_3px,transparent_3px)]"},size:{xs:"bg-[size:8px_8px]",sm:"bg-[size:16px_16px]",md:"bg-[size:24px_24px]",lg:"bg-[size:32px_32px]"}},defaultVariants:{variant:"grid",size:"md"}}),L=x("bg-background",{variants:{mask:{ellipse:"[mask-image:radial-gradient(ellipse_at_center,transparent,black_80%)]","ellipse-top":"[mask-image:radial-gradient(ellipse_at_top,transparent,black_80%)]","ellipse-bottom":"[mask-image:radial-gradient(ellipse_at_bottom,transparent,black_80%)]","ellipse-left":"[mask-image:radial-gradient(ellipse_at_left,transparent,black_80%)]","ellipse-right":"[mask-image:radial-gradient(ellipse_at_right,transparent,black_80%)]","ellipse-top-left":"[mask-image:radial-gradient(ellipse_at_top_left,transparent,black_80%)]","ellipse-top-right":"[mask-image:radial-gradient(ellipse_at_top_right,transparent,black_80%)]","ellipse-bottom-left":"[mask-image:radial-gradient(ellipse_at_bottom_left,transparent,black_80%)]","ellipse-bottom-right":"[mask-image:radial-gradient(ellipse_at_bottom_right,transparent,black_80%)]"}},defaultVariants:{mask:"ellipse"}}),N=g({name:"FaPatternBg",__name:"index",props:{variant:{default:"grid"},size:{default:"md"},mask:{default:"ellipse"},animate:{type:Boolean,default:!1},direction:{default:"top"},speed:{default:1e4},class:{}},setup(b){B(t=>({"0db21a7b":l(o)}));const n=b,o=S(()=>`${n.speed}ms`);return(t,p)=>(v(),h("div",{class:f(l(_)(l(y)({variant:t.variant,size:t.size}),` ${t.animate?`move move-${t.direction}`:""} `,n.class))},[a("div",{class:f(l(_)("absolute pointer-events-none inset-0 flex items-center justify-center",l(L)({mask:t.mask})))},null,2),$(t.$slots,"default",{},void 0,!0)],2))}}),R=w(N,[["__scopeId","data-v-a0dc88b2"]]),j={class:"flex flex-col gap-2"},q={class:"flex items-center gap-2"},D={class:"flex items-center gap-2"},E={class:"flex items-center gap-2"},I={class:"flex items-center gap-2"},M={class:"flex items-center gap-2"},A=g({__name:"_demo1",setup(b){const n=r("grid"),o=r("md"),t=r("ellipse"),p=r(!0),d=r("top");return(H,e)=>{const u=U,k=C,V=R;return v(),h("div",j,[a("div",q,[e[5]||(e[5]=a("span",null,"图案",-1)),i(u,{modelValue:l(n),"onUpdate:modelValue":e[0]||(e[0]=s=>m(n)?n.value=s:null),options:[{label:"grid",value:"grid"},{label:"dot",value:"dot"},{label:"big-dot",value:"big-dot"}]},null,8,["modelValue"])]),a("div",D,[e[6]||(e[6]=a("span",null,"尺寸",-1)),i(u,{modelValue:l(o),"onUpdate:modelValue":e[1]||(e[1]=s=>m(o)?o.value=s:null),options:[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"}]},null,8,["modelValue"])]),a("div",E,[e[7]||(e[7]=a("span",null,"动画",-1)),i(k,{modelValue:l(p),"onUpdate:modelValue":e[2]||(e[2]=s=>m(p)?p.value=s:null)},null,8,["modelValue"])]),a("div",I,[e[8]||(e[8]=a("span",null,"方向",-1)),i(u,{modelValue:l(d),"onUpdate:modelValue":e[3]||(e[3]=s=>m(d)?d.value=s:null),options:[{label:"top-left",value:"top-left"},{label:"top-right",value:"top-right"},{label:"bottom-left",value:"bottom-left"},{label:"bottom-right",value:"bottom-right"},{label:"top",value:"top"},{label:"bottom",value:"bottom"},{label:"left",value:"left"},{label:"right",value:"right"}]},null,8,["modelValue"])]),a("div",M,[e[9]||(e[9]=a("span",null,"遮罩",-1)),i(u,{modelValue:l(t),"onUpdate:modelValue":e[4]||(e[4]=s=>m(t)?t.value=s:null),options:[{label:"ellipse",value:"ellipse"},{label:"ellipse-top",value:"ellipse-top"},{label:"ellipse-bottom",value:"ellipse-bottom"},{label:"ellipse-left",value:"ellipse-left"},{label:"ellipse-right",value:"ellipse-right"},{label:"ellipse-top-left",value:"ellipse-top-left"},{label:"ellipse-top-right",value:"ellipse-top-right"},{label:"ellipse-bottom-left",value:"ellipse-bottom-left"},{label:"ellipse-bottom-right",value:"ellipse-bottom-right"}]},null,8,["modelValue"])]),i(V,{variant:l(n),size:l(o),animate:l(p),direction:l(d),mask:l(t),class:"h-100"},null,8,["variant","size","animate","direction","mask"])])}}}),G=`<script setup lang="ts">
const variant = ref<'grid' | 'dot' | 'big-dot'>('grid')
const size = ref<'xs' | 'sm' | 'md' | 'lg'>('md')
const mask = ref<'ellipse' | 'ellipse-top' | 'ellipse-bottom' | 'ellipse-left' | 'ellipse-right' | 'ellipse-top-left' | 'ellipse-top-right' | 'ellipse-bottom-left' | 'ellipse-bottom-right'>('ellipse')
const animate = ref(true)
const direction = ref<'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top')
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <span>图案</span>
      <FmSelect
        v-model="variant" :options="[
          { label: 'grid', value: 'grid' },
          { label: 'dot', value: 'dot' },
          { label: 'big-dot', value: 'big-dot' },
        ]"
      />
    </div>
    <div class="flex items-center gap-2">
      <span>尺寸</span>
      <FmSelect
        v-model="size" :options="[
          { label: 'xs', value: 'xs' },
          { label: 'sm', value: 'sm' },
          { label: 'md', value: 'md' },
          { label: 'lg', value: 'lg' },
        ]"
      />
    </div>
    <div class="flex items-center gap-2">
      <span>动画</span>
      <FmSwitch v-model="animate" />
    </div>
    <div class="flex items-center gap-2">
      <span>方向</span>
      <FmSelect
        v-model="direction" :options="[
          { label: 'top-left', value: 'top-left' },
          { label: 'top-right', value: 'top-right' },
          { label: 'bottom-left', value: 'bottom-left' },
          { label: 'bottom-right', value: 'bottom-right' },
          { label: 'top', value: 'top' },
          { label: 'bottom', value: 'bottom' },
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' },
        ]"
      />
    </div>
    <div class="flex items-center gap-2">
      <span>遮罩</span>
      <FmSelect
        v-model="mask" :options="[
          { label: 'ellipse', value: 'ellipse' },
          { label: 'ellipse-top', value: 'ellipse-top' },
          { label: 'ellipse-bottom', value: 'ellipse-bottom' },
          { label: 'ellipse-left', value: 'ellipse-left' },
          { label: 'ellipse-right', value: 'ellipse-right' },
          { label: 'ellipse-top-left', value: 'ellipse-top-left' },
          { label: 'ellipse-top-right', value: 'ellipse-top-right' },
          { label: 'ellipse-bottom-left', value: 'ellipse-bottom-left' },
          { label: 'ellipse-bottom-right', value: 'ellipse-bottom-right' },
        ]"
      />
    </div>
    <FmPatternBg :variant :size :animate :direction :mask class="h-100" />
  </div>
</template>
`,Y=g({__name:"index",setup(b){return(n,o)=>{const t=F,p=z;return v(),P(p,{navbar:"","navbar-start-side":"back"},{default:c(()=>[i(t,{code:l(G)},{default:c(()=>[i(A)]),_:1},8,["code"])]),_:1})}}});export{Y as default};
