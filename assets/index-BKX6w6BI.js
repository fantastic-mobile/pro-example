
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{a as P}from"./index-C3UlwTgG.js";import{_ as L}from"./index.vue_vue_type_script_setup_true_lang-BU7B9X2z.js";import{d as A,W as $,ac as S,g as U,ad as E,m as B,S as H,c as I,o as m,w as s,b as o,a as t,x as M,u as C,t as R,e as n,I as b,k as w}from"./index-BuiYM_8b.js";import{s as g}from"./function-call-CKIBO9bu.js";const W=A({name:"Auth",__name:"index",props:{value:{},all:{type:Boolean}},setup(x){const l=x,i=S();function y(){return l.all?i.authAll(typeof l.value=="string"?[l.value]:l.value):i.auth(l.value)}return(d,V)=>y()?$(d.$slots,"default",{key:0}):$(d.$slots,"no-auth",{key:1})}}),j={class:"flex flex-col gap-2"},q={class:"flex-col-start gap-2"},F={class:"flex flex-col gap-2"},Q=A({__name:"index",setup(x){const l=U(),i=E(),{auth:y,authAll:d}=S();async function V(a){await i.login({account:a,password:""}),await i.getPermissions()}function T(){l.push({path:"/feature/permission/test"})}function k(a){y(a)?g({type:"success",message:"校验通过"}):g({type:"danger",message:"校验不通过"})}function z(a){d(a)?g({type:"success",message:"校验通过"}):g({type:"danger",message:"校验不通过"})}return(a,e)=>{const N=M,u=B("VanButton"),r=B("VanTag"),f=W,_=L,D=P,v=H("auth");return m(),I(D,{navbar:"","navbar-start-side":"back"},{default:s(()=>[o(_,null,{default:s(()=>[e[22]||(e[22]=t("h3",null,"切换帐号",-1)),o(N,{modelValue:C(i).account,"onUpdate:modelValue":e[0]||(e[0]=p=>C(i).account=p),options:[{label:"admin",value:"admin"},{label:"test",value:"test"},{label:"hooray(无权限)",value:"hooray"}],onChange:V},null,8,["modelValue"]),e[23]||(e[23]=t("h3",null,"帐号权限",-1)),t("div",null,R(C(i).permissions),1),e[24]||(e[24]=t("h3",null,"访问鉴权页面",-1)),t("div",null,[o(u,{onClick:T},{default:s(()=>e[5]||(e[5]=[n(" 点击访问 ")])),_:1})]),e[25]||(e[25]=t("h3",null,"鉴权指令（请对照代码查看）",-1)),t("div",j,[b((m(),w("div",null,e[6]||(e[6]=[n(" 如果你有 permission.browse 权限则能看到这句话 ")]))),[[v,"permission.browse"]]),b((m(),w("div",null,e[7]||(e[7]=[n(" 如果你有 permission.create 权限则能看到这句话 ")]))),[[v,"permission.create"]]),b((m(),w("div",null,e[8]||(e[8]=[n(" 如果你有 permission.browse 或 permission.create 权限则能看到这句话 ")]))),[[v,["permission.browse","permission.create"]]]),b((m(),w("div",null,e[9]||(e[9]=[n(" 如果你有 permission.browse 和 permission.create 权限则能看到这句话 ")]))),[[v,["permission.browse","permission.create"],void 0,{all:!0}]])]),e[26]||(e[26]=t("h3",null,"鉴权组件（请对照代码查看）",-1)),t("div",q,[o(f,{value:"permission.browse"},{"no-auth":s(()=>[o(r,{type:"danger"},{default:s(()=>e[11]||(e[11]=[n(" 你没有 permission.browse 权限 ")])),_:1})]),default:s(()=>[o(r,{type:"primary"},{default:s(()=>e[10]||(e[10]=[n(" 你有 permission.browse 权限 ")])),_:1})]),_:1}),o(f,{value:"permission.create"},{"no-auth":s(()=>[o(r,{type:"danger"},{default:s(()=>e[13]||(e[13]=[n(" 你没有 permission.create 权限 ")])),_:1})]),default:s(()=>[o(r,{type:"primary"},{default:s(()=>e[12]||(e[12]=[n(" 你有 permission.create 权限 ")])),_:1})]),_:1}),o(f,{value:["permission.browse","permission.create"]},{"no-auth":s(()=>[o(r,{type:"danger"},{default:s(()=>e[15]||(e[15]=[n(" 你没有 permission.browse 或 permission.create 权限 ")])),_:1})]),default:s(()=>[o(r,{type:"primary"},{default:s(()=>e[14]||(e[14]=[n(" 你有 permission.browse 或 permission.create 权限 ")])),_:1})]),_:1}),o(f,{value:["permission.browse","permission.create"],all:""},{"no-auth":s(()=>[o(r,{type:"danger"},{default:s(()=>e[17]||(e[17]=[n(" 你没有 permission.browse 和 permission.create 权限 ")])),_:1})]),default:s(()=>[o(r,{type:"primary"},{default:s(()=>e[16]||(e[16]=[n(" 你有 permission.browse 和 permission.create 权限 ")])),_:1})]),_:1})]),e[27]||(e[27]=t("h3",null,"鉴权函数（请对照代码查看）",-1)),t("div",null,[t("div",F,[t("div",null,[o(u,{size:"small",onClick:e[1]||(e[1]=p=>k("permission.browse"))},{default:s(()=>e[18]||(e[18]=[n(" 校验 permission.browse 权限 ")])),_:1})]),t("div",null,[o(u,{size:"small",onClick:e[2]||(e[2]=p=>k("permission.create"))},{default:s(()=>e[19]||(e[19]=[n(" 校验 permission.create 权限 ")])),_:1})]),t("div",null,[o(u,{size:"small",onClick:e[3]||(e[3]=p=>k(["permission.browse","permission.create"]))},{default:s(()=>e[20]||(e[20]=[n(" 校验 permission.browse 或 permission.create 权限 ")])),_:1})]),t("div",null,[o(u,{size:"small",onClick:e[4]||(e[4]=p=>z(["permission.browse","permission.create"]))},{default:s(()=>e[21]||(e[21]=[n(" 校验 permission.browse 和 permission.create 权限 ")])),_:1})])])])]),_:1})]),_:1})}}});export{Q as default};
