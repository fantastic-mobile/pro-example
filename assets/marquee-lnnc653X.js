
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{C as e,Ct as t,H as n,W as r,f as i,kt as a,rt as o,v as s,w as c,x as l,y as u}from"./vue.runtime.esm-bundler-DMY3hWtO.js";import{G as d,P as f,w as p}from"./components-CBpXWGFQ.js";import{t as m}from"./AppPageLayout-S1V78StU.js";var h={class:`flex flex-row gap-2 items-center`},g={class:`flex flex-col`},_={class:`text-sm font-medium dark:text-white`},v={class:`text-sm mt-2 text-pretty`},y=c({__name:`_demo1`,setup(t){let c=[{name:`c***@msn.com`,content:`从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。`},{name:`t***@126.com`,content:`售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。`},{name:`l***@163.com`,content:`可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。`},{name:`3***@qq.com`,content:`无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。`},{name:`t***@163.com`,content:`Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。`},{name:`y***@163.com`,content:`作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。`},{name:`4***@qq.com`,content:`做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。`},{name:`b***@gmail.com`,content:`我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。`},{name:`r***@aliyun.com`,content:`我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。`},{name:`a***@163.com`,content:`厉害👍🏻，是后台系统里见过最好的框架。`}];return(t,f)=>{let m=d,y=p;return n(),u(y,null,{default:o(()=>[(n(),l(i,null,r(c,t=>s(`figure`,{key:t.name,class:`p-4 border border-gray-950/10 rounded-xl bg-gray-950/1 w-64 cursor-pointer relative overflow-hidden dark:border-gray-50/10 dark:bg-gray-50/10 hover:bg-gray-950/5 dark:hover:bg-gray-50/15`},[s(`div`,h,[e(m,{src:`https://avatar.vercel.sh/${t.name}`,class:`size-8`},null,8,[`src`]),s(`div`,g,[s(`span`,_,a(t.name),1)])]),s(`blockquote`,v,a(t.content),1)])),64))]),_:1})}}}),b=`<script lang="ts" setup>
const reviews = [
  { name: 'c***@msn.com', content: '从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。' },
  { name: 't***@126.com', content: '售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。' },
  { name: 'l***@163.com', content: '可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。' },
  { name: '3***@qq.com', content: '无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。' },
  { name: 't***@163.com', content: 'Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。' },
  { name: 'y***@163.com', content: '作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。' },
  { name: '4***@qq.com', content: '做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。' },
  { name: 'b***@gmail.com', content: '我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。' },
  { name: 'r***@aliyun.com', content: '我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。' },
  { name: 'a***@163.com', content: '厉害👍🏻，是后台系统里见过最好的框架。' },
]
<\/script>

<template>
  <FmMarquee>
    <figure v-for="review in reviews" :key="review.name" class="p-4 border border-gray-950/10 rounded-xl bg-gray-950/1 w-64 cursor-pointer relative overflow-hidden dark:border-gray-50/10 dark:bg-gray-50/10 hover:bg-gray-950/5 dark:hover:bg-gray-50/15">
      <div class="flex flex-row gap-2 items-center">
        <FmAvatar :src="\`https://avatar.vercel.sh/\${review.name}\`" class="size-8" />
        <div class="flex flex-col">
          <span class="text-sm font-medium dark:text-white">
            {{ review.name }}
          </span>
        </div>
      </div>
      <blockquote class="text-sm mt-2 text-pretty">
        {{ review.content }}
      </blockquote>
    </figure>
  </FmMarquee>
</template>
`,x={class:`flex flex-row gap-2 items-center`},S={class:`flex flex-col`},C={class:`text-sm font-medium dark:text-white`},w={class:`text-sm mt-2 text-pretty`},T=c({__name:`_demo2`,setup(t){let c=[{name:`c***@msn.com`,content:`从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。`},{name:`t***@126.com`,content:`售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。`},{name:`l***@163.com`,content:`可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。`},{name:`3***@qq.com`,content:`无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。`},{name:`t***@163.com`,content:`Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。`},{name:`y***@163.com`,content:`作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。`},{name:`4***@qq.com`,content:`做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。`},{name:`b***@gmail.com`,content:`我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。`},{name:`r***@aliyun.com`,content:`我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。`},{name:`a***@163.com`,content:`厉害👍🏻，是后台系统里见过最好的框架。`}];return(t,f)=>{let m=d,h=p;return n(),u(h,{reverse:``},{default:o(()=>[(n(),l(i,null,r(c,t=>s(`figure`,{key:t.name,class:`p-4 border border-gray-950/10 rounded-xl bg-gray-950/1 w-64 cursor-pointer relative overflow-hidden dark:border-gray-50/10 dark:bg-gray-50/10 hover:bg-gray-950/5 dark:hover:bg-gray-50/15`},[s(`div`,x,[e(m,{src:`https://avatar.vercel.sh/${t.name}`,class:`size-8`},null,8,[`src`]),s(`div`,S,[s(`span`,C,a(t.name),1)])]),s(`blockquote`,w,a(t.content),1)])),64))]),_:1})}}}),E=`<script lang="ts" setup>
const reviews = [
  { name: 'c***@msn.com', content: '从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。' },
  { name: 't***@126.com', content: '售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。' },
  { name: 'l***@163.com', content: '可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。' },
  { name: '3***@qq.com', content: '无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。' },
  { name: 't***@163.com', content: 'Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。' },
  { name: 'y***@163.com', content: '作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。' },
  { name: '4***@qq.com', content: '做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。' },
  { name: 'b***@gmail.com', content: '我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。' },
  { name: 'r***@aliyun.com', content: '我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。' },
  { name: 'a***@163.com', content: '厉害👍🏻，是后台系统里见过最好的框架。' },
]
<\/script>

<template>
  <FmMarquee reverse>
    <figure v-for="review in reviews" :key="review.name" class="p-4 border border-gray-950/10 rounded-xl bg-gray-950/1 w-64 cursor-pointer relative overflow-hidden dark:border-gray-50/10 dark:bg-gray-50/10 hover:bg-gray-950/5 dark:hover:bg-gray-50/15">
      <div class="flex flex-row gap-2 items-center">
        <FmAvatar :src="\`https://avatar.vercel.sh/\${review.name}\`" class="size-8" />
        <div class="flex flex-col">
          <span class="text-sm font-medium dark:text-white">
            {{ review.name }}
          </span>
        </div>
      </div>
      <blockquote class="text-sm mt-2 text-pretty">
        {{ review.content }}
      </blockquote>
    </figure>
  </FmMarquee>
</template>
`,D={class:`flex flex-row gap-2 items-center`},O={class:`flex flex-col`},k={class:`text-sm font-medium dark:text-white`},A={class:`text-sm mt-2 text-pretty`},j=c({__name:`_demo3`,setup(t){let c=[{name:`c***@msn.com`,content:`从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。`},{name:`t***@126.com`,content:`售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。`},{name:`l***@163.com`,content:`可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。`},{name:`3***@qq.com`,content:`无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。`},{name:`t***@163.com`,content:`Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。`},{name:`y***@163.com`,content:`作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。`},{name:`4***@qq.com`,content:`做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。`},{name:`b***@gmail.com`,content:`我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。`},{name:`r***@aliyun.com`,content:`我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。`},{name:`a***@163.com`,content:`厉害👍🏻，是后台系统里见过最好的框架。`}];return(t,f)=>{let m=d,h=p;return n(),u(h,{class:`[--duration:10s] [--gap:2rem]`},{default:o(()=>[(n(),l(i,null,r(c,t=>s(`figure`,{key:t.name,class:`p-4 border border-gray-950/10 rounded-xl bg-gray-950/1 w-64 cursor-pointer relative overflow-hidden dark:border-gray-50/10 dark:bg-gray-50/10 hover:bg-gray-950/5 dark:hover:bg-gray-50/15`},[s(`div`,D,[e(m,{src:`https://avatar.vercel.sh/${t.name}`,class:`size-8`},null,8,[`src`]),s(`div`,O,[s(`span`,k,a(t.name),1)])]),s(`blockquote`,A,a(t.content),1)])),64))]),_:1})}}}),M=`<script lang="ts" setup>
const reviews = [
  { name: 'c***@msn.com', content: '从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。' },
  { name: 't***@126.com', content: '售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。' },
  { name: 'l***@163.com', content: '可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。' },
  { name: '3***@qq.com', content: '无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。' },
  { name: 't***@163.com', content: 'Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。' },
  { name: 'y***@163.com', content: '作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。' },
  { name: '4***@qq.com', content: '做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。' },
  { name: 'b***@gmail.com', content: '我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。' },
  { name: 'r***@aliyun.com', content: '我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。' },
  { name: 'a***@163.com', content: '厉害👍🏻，是后台系统里见过最好的框架。' },
]
<\/script>

<template>
  <FmMarquee class="[--duration:10s] [--gap:2rem]">
    <figure v-for="review in reviews" :key="review.name" class="p-4 border border-gray-950/10 rounded-xl bg-gray-950/1 w-64 cursor-pointer relative overflow-hidden dark:border-gray-50/10 dark:bg-gray-50/10 hover:bg-gray-950/5 dark:hover:bg-gray-50/15">
      <div class="flex flex-row gap-2 items-center">
        <FmAvatar :src="\`https://avatar.vercel.sh/\${review.name}\`" class="size-8" />
        <div class="flex flex-col">
          <span class="text-sm font-medium dark:text-white">
            {{ review.name }}
          </span>
        </div>
      </div>
      <blockquote class="text-sm mt-2 text-pretty">
        {{ review.content }}
      </blockquote>
    </figure>
  </FmMarquee>
</template>
`,N={class:`flex flex-row gap-2 items-center`},P={class:`flex flex-col`},F={class:`text-sm font-medium dark:text-white`},I={class:`text-sm mt-2 text-pretty`},L=c({__name:`_demo4`,setup(t){let c=[{name:`c***@msn.com`,content:`从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。`},{name:`t***@126.com`,content:`售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。`},{name:`l***@163.com`,content:`可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。`},{name:`3***@qq.com`,content:`无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。`},{name:`t***@163.com`,content:`Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。`},{name:`y***@163.com`,content:`作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。`},{name:`4***@qq.com`,content:`做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。`},{name:`b***@gmail.com`,content:`我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。`},{name:`r***@aliyun.com`,content:`我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。`},{name:`a***@163.com`,content:`厉害👍🏻，是后台系统里见过最好的框架。`}];return(t,f)=>{let m=d,h=p;return n(),u(h,{vertical:``,class:`h-128 items-center`},{default:o(()=>[(n(),l(i,null,r(c,t=>s(`figure`,{key:t.name,class:`p-4 border border-gray-950/10 rounded-xl bg-gray-950/1 w-64 cursor-pointer relative overflow-hidden dark:border-gray-50/10 dark:bg-gray-50/10 hover:bg-gray-950/5 dark:hover:bg-gray-50/15`},[s(`div`,N,[e(m,{src:`https://avatar.vercel.sh/${t.name}`,class:`size-8`},null,8,[`src`]),s(`div`,P,[s(`span`,F,a(t.name),1)])]),s(`blockquote`,I,a(t.content),1)])),64))]),_:1})}}}),R=`<script lang="ts" setup>
const reviews = [
  { name: 'c***@msn.com', content: '从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。' },
  { name: 't***@126.com', content: '售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。' },
  { name: 'l***@163.com', content: '可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。' },
  { name: '3***@qq.com', content: '无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。' },
  { name: 't***@163.com', content: 'Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。' },
  { name: 'y***@163.com', content: '作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。' },
  { name: '4***@qq.com', content: '做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。' },
  { name: 'b***@gmail.com', content: '我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。' },
  { name: 'r***@aliyun.com', content: '我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。' },
  { name: 'a***@163.com', content: '厉害👍🏻，是后台系统里见过最好的框架。' },
]
<\/script>

<template>
  <FmMarquee vertical class="h-128 items-center">
    <figure v-for="review in reviews" :key="review.name" class="p-4 border border-gray-950/10 rounded-xl bg-gray-950/1 w-64 cursor-pointer relative overflow-hidden dark:border-gray-50/10 dark:bg-gray-50/10 hover:bg-gray-950/5 dark:hover:bg-gray-50/15">
      <div class="flex flex-row gap-2 items-center">
        <FmAvatar :src="\`https://avatar.vercel.sh/\${review.name}\`" class="size-8" />
        <div class="flex flex-col">
          <span class="text-sm font-medium dark:text-white">
            {{ review.name }}
          </span>
        </div>
      </div>
      <blockquote class="text-sm mt-2 text-pretty">
        {{ review.content }}
      </blockquote>
    </figure>
  </FmMarquee>
</template>
`,z=c({__name:`index`,setup(r){return(r,i)=>{let a=f,c=m;return n(),u(c,{navbar:``,"navbar-start-side":`back`},{default:o(()=>[s(`div`,null,[e(a,{code:t(b)},{default:o(()=>[e(y)]),_:1},8,[`code`]),e(a,{title:`反向`,code:t(E)},{default:o(()=>[e(T)]),_:1},8,[`code`]),e(a,{title:`速度、间隔`,code:t(M)},{default:o(()=>[e(j)]),_:1},8,[`code`]),e(a,{title:`垂直`,code:t(R)},{default:o(()=>[e(L)]),_:1},8,[`code`])])]),_:1})}}});export{z as default};