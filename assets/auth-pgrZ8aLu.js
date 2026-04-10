
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me
 */
  
import{n as e}from"./dist-D1Mmh2fb.js";import{t}from"./auth-Zhq2RzFr.js";function n(){function n(n){let r=e(),i=t();return r.settings.app.auth?i.permissions.includes(n):!0}function r(e){let t;return t=typeof e==`string`?e===``?!0:n(e):e.length>0?e.some(e=>n(e)):!0,t}function i(e){return e.length>0?e.every(e=>n(e)):!0}return{auth:r,authAll:i}}export{n as t};