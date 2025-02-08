
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.hurui.me/
 */
    
import{a as le}from"./index-C3UlwTgG.js";import{_ as fe}from"./index.vue_vue_type_script_setup_true_lang-BU7B9X2z.js";import{ak as de,d as ge,r as O,H as he,j as me,m as Mt,c as we,o as ye,w as D,b as F,a as q,u as G,f as Ce,i as pe,e as Pt}from"./index-BuiYM_8b.js";var K={},tt,bt;function Ee(){return bt||(bt=1,tt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),tt}var et={},k={},St;function V(){if(St)return k;St=1;let o;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return k.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17},k.getSymbolTotalCodewords=function(e){return r[e]},k.getBCHDigit=function(s){let e=0;for(;s!==0;)e++,s>>>=1;return e},k.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');o=e},k.isKanjiModeEnabled=function(){return typeof o<"u"},k.toSJIS=function(e){return o(e)},k}var nt={},_t;function At(){return _t||(_t=1,function(o){o.L={bit:1},o.M={bit:0},o.Q={bit:3},o.H={bit:2};function r(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"l":case"low":return o.L;case"m":case"medium":return o.M;case"q":case"quartile":return o.Q;case"h":case"high":return o.H;default:throw new Error("Unknown EC Level: "+s)}}o.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4},o.from=function(e,t){if(o.isValid(e))return e;try{return r(e)}catch{return t}}}(nt)),nt}var rt,vt;function Be(){if(vt)return rt;vt=1;function o(){this.buffer=[],this.length=0}return o.prototype={get:function(r){const s=Math.floor(r/8);return(this.buffer[s]>>>7-r%8&1)===1},put:function(r,s){for(let e=0;e<s;e++)this.putBit((r>>>s-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(r){const s=Math.floor(this.length/8);this.buffer.length<=s&&this.buffer.push(0),r&&(this.buffer[s]|=128>>>this.length%8),this.length++}},rt=o,rt}var ot,Lt;function Re(){if(Lt)return ot;Lt=1;function o(r){if(!r||r<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=r,this.data=new Uint8Array(r*r),this.reservedBit=new Uint8Array(r*r)}return o.prototype.set=function(r,s,e,t){const n=r*this.size+s;this.data[n]=e,t&&(this.reservedBit[n]=!0)},o.prototype.get=function(r,s){return this.data[r*this.size+s]},o.prototype.xor=function(r,s,e){this.data[r*this.size+s]^=e},o.prototype.isReserved=function(r,s){return this.reservedBit[r*this.size+s]},ot=o,ot}var it={},Dt;function Ae(){return Dt||(Dt=1,function(o){const r=V().getSymbolSize;o.getRowColCoords=function(e){if(e===1)return[];const t=Math.floor(e/7)+2,n=r(e),i=n===145?26:Math.ceil((n-13)/(2*t-2))*2,u=[n-7];for(let a=1;a<t-1;a++)u[a]=u[a-1]-i;return u.push(6),u.reverse()},o.getPositions=function(e){const t=[],n=o.getRowColCoords(e),i=n.length;for(let u=0;u<i;u++)for(let a=0;a<i;a++)u===0&&a===0||u===0&&a===i-1||u===i-1&&a===0||t.push([n[u],n[a]]);return t}}(it)),it}var st={},qt;function Te(){if(qt)return st;qt=1;const o=V().getSymbolSize,r=7;return st.getPositions=function(e){const t=o(e);return[[0,0],[t-r,0],[0,t-r]]},st}var ut={},Ut;function Ne(){return Ut||(Ut=1,function(o){o.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const r={N1:3,N2:3,N3:40,N4:10};o.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7},o.from=function(t){return o.isValid(t)?parseInt(t,10):void 0},o.getPenaltyN1=function(t){const n=t.size;let i=0,u=0,a=0,c=null,f=null;for(let m=0;m<n;m++){u=a=0,c=f=null;for(let h=0;h<n;h++){let l=t.get(m,h);l===c?u++:(u>=5&&(i+=r.N1+(u-5)),c=l,u=1),l=t.get(h,m),l===f?a++:(a>=5&&(i+=r.N1+(a-5)),f=l,a=1)}u>=5&&(i+=r.N1+(u-5)),a>=5&&(i+=r.N1+(a-5))}return i},o.getPenaltyN2=function(t){const n=t.size;let i=0;for(let u=0;u<n-1;u++)for(let a=0;a<n-1;a++){const c=t.get(u,a)+t.get(u,a+1)+t.get(u+1,a)+t.get(u+1,a+1);(c===4||c===0)&&i++}return i*r.N2},o.getPenaltyN3=function(t){const n=t.size;let i=0,u=0,a=0;for(let c=0;c<n;c++){u=a=0;for(let f=0;f<n;f++)u=u<<1&2047|t.get(c,f),f>=10&&(u===1488||u===93)&&i++,a=a<<1&2047|t.get(f,c),f>=10&&(a===1488||a===93)&&i++}return i*r.N3},o.getPenaltyN4=function(t){let n=0;const i=t.data.length;for(let a=0;a<i;a++)n+=t.data[a];return Math.abs(Math.ceil(n*100/i/5)-10)*r.N4};function s(e,t,n){switch(e){case o.Patterns.PATTERN000:return(t+n)%2===0;case o.Patterns.PATTERN001:return t%2===0;case o.Patterns.PATTERN010:return n%3===0;case o.Patterns.PATTERN011:return(t+n)%3===0;case o.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(n/3))%2===0;case o.Patterns.PATTERN101:return t*n%2+t*n%3===0;case o.Patterns.PATTERN110:return(t*n%2+t*n%3)%2===0;case o.Patterns.PATTERN111:return(t*n%3+(t+n)%2)%2===0;default:throw new Error("bad maskPattern:"+e)}}o.applyMask=function(t,n){const i=n.size;for(let u=0;u<i;u++)for(let a=0;a<i;a++)n.isReserved(a,u)||n.xor(a,u,s(t,a,u))},o.getBestMask=function(t,n){const i=Object.keys(o.Patterns).length;let u=0,a=1/0;for(let c=0;c<i;c++){n(c),o.applyMask(c,t);const f=o.getPenaltyN1(t)+o.getPenaltyN2(t)+o.getPenaltyN3(t)+o.getPenaltyN4(t);o.applyMask(c,t),f<a&&(a=f,u=c)}return u}}(ut)),ut}var Q={},Ft;function re(){if(Ft)return Q;Ft=1;const o=At(),r=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],s=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Q.getBlocksCount=function(t,n){switch(n){case o.L:return r[(t-1)*4+0];case o.M:return r[(t-1)*4+1];case o.Q:return r[(t-1)*4+2];case o.H:return r[(t-1)*4+3];default:return}},Q.getTotalCodewordsCount=function(t,n){switch(n){case o.L:return s[(t-1)*4+0];case o.M:return s[(t-1)*4+1];case o.Q:return s[(t-1)*4+2];case o.H:return s[(t-1)*4+3];default:return}},Q}var at={},j={},kt;function Ie(){if(kt)return j;kt=1;const o=new Uint8Array(512),r=new Uint8Array(256);return function(){let e=1;for(let t=0;t<255;t++)o[t]=e,r[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)o[t]=o[t-255]}(),j.log=function(e){if(e<1)throw new Error("log("+e+")");return r[e]},j.exp=function(e){return o[e]},j.mul=function(e,t){return e===0||t===0?0:o[r[e]+r[t]]},j}var Vt;function Me(){return Vt||(Vt=1,function(o){const r=Ie();o.mul=function(e,t){const n=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let u=0;u<t.length;u++)n[i+u]^=r.mul(e[i],t[u]);return n},o.mod=function(e,t){let n=new Uint8Array(e);for(;n.length-t.length>=0;){const i=n[0];for(let a=0;a<t.length;a++)n[a]^=r.mul(t[a],i);let u=0;for(;u<n.length&&n[u]===0;)u++;n=n.slice(u)}return n},o.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let n=0;n<e;n++)t=o.mul(t,new Uint8Array([1,r.exp(n)]));return t}}(at)),at}var ct,zt;function Pe(){if(zt)return ct;zt=1;const o=Me();function r(s){this.genPoly=void 0,this.degree=s,this.degree&&this.initialize(this.degree)}return r.prototype.initialize=function(e){this.degree=e,this.genPoly=o.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=o.mod(t,this.genPoly),i=this.degree-n.length;if(i>0){const u=new Uint8Array(this.degree);return u.set(n,i),u}return n},ct=r,ct}var lt={},ft={},dt={},Ht;function oe(){return Ht||(Ht=1,dt.isValid=function(r){return!isNaN(r)&&r>=1&&r<=40}),dt}var _={},Kt;function ie(){if(Kt)return _;Kt=1;const o="[0-9]+",r="[A-Z $%*+\\-./:]+";let s="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";s=s.replace(/u/g,"\\u");const e="(?:(?![A-Z0-9 $%*+\\-./:]|"+s+`)(?:.|[\r
]))+`;_.KANJI=new RegExp(s,"g"),_.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),_.BYTE=new RegExp(e,"g"),_.NUMERIC=new RegExp(o,"g"),_.ALPHANUMERIC=new RegExp(r,"g");const t=new RegExp("^"+s+"$"),n=new RegExp("^"+o+"$"),i=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return _.testKanji=function(a){return t.test(a)},_.testNumeric=function(a){return n.test(a)},_.testAlphanumeric=function(a){return i.test(a)},_}var Jt;function z(){return Jt||(Jt=1,function(o){const r=oe(),s=ie();o.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},o.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},o.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},o.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},o.MIXED={bit:-1},o.getCharCountIndicator=function(n,i){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!r.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?n.ccBits[0]:i<27?n.ccBits[1]:n.ccBits[2]},o.getBestModeForData=function(n){return s.testNumeric(n)?o.NUMERIC:s.testAlphanumeric(n)?o.ALPHANUMERIC:s.testKanji(n)?o.KANJI:o.BYTE},o.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},o.isValid=function(n){return n&&n.bit&&n.ccBits};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return o.NUMERIC;case"alphanumeric":return o.ALPHANUMERIC;case"kanji":return o.KANJI;case"byte":return o.BYTE;default:throw new Error("Unknown mode: "+t)}}o.from=function(n,i){if(o.isValid(n))return n;try{return e(n)}catch{return i}}}(ft)),ft}var jt;function be(){return jt||(jt=1,function(o){const r=V(),s=re(),e=At(),t=z(),n=oe(),i=7973,u=r.getBCHDigit(i);function a(h,l,I){for(let M=1;M<=40;M++)if(l<=o.getCapacity(M,I,h))return M}function c(h,l){return t.getCharCountIndicator(h,l)+4}function f(h,l){let I=0;return h.forEach(function(M){const b=c(M.mode,l);I+=b+M.getBitsLength()}),I}function m(h,l){for(let I=1;I<=40;I++)if(f(h,I)<=o.getCapacity(I,l,t.MIXED))return I}o.from=function(l,I){return n.isValid(l)?parseInt(l,10):I},o.getCapacity=function(l,I,M){if(!n.isValid(l))throw new Error("Invalid QR Code version");typeof M>"u"&&(M=t.BYTE);const b=r.getSymbolTotalCodewords(l),A=s.getTotalCodewordsCount(l,I),P=(b-A)*8;if(M===t.MIXED)return P;const T=P-c(M,l);switch(M){case t.NUMERIC:return Math.floor(T/10*3);case t.ALPHANUMERIC:return Math.floor(T/11*2);case t.KANJI:return Math.floor(T/13);case t.BYTE:default:return Math.floor(T/8)}},o.getBestVersionForData=function(l,I){let M;const b=e.from(I,e.M);if(Array.isArray(l)){if(l.length>1)return m(l,b);if(l.length===0)return 1;M=l[0]}else M=l;return a(M.mode,M.getLength(),b)},o.getEncodedBits=function(l){if(!n.isValid(l)||l<7)throw new Error("Invalid QR Code version");let I=l<<12;for(;r.getBCHDigit(I)-u>=0;)I^=i<<r.getBCHDigit(I)-u;return l<<12|I}}(lt)),lt}var gt={},Yt;function Se(){if(Yt)return gt;Yt=1;const o=V(),r=1335,s=21522,e=o.getBCHDigit(r);return gt.getEncodedBits=function(n,i){const u=n.bit<<3|i;let a=u<<10;for(;o.getBCHDigit(a)-e>=0;)a^=r<<o.getBCHDigit(a)-e;return(u<<10|a)^s},gt}var ht={},mt,Ot;function _e(){if(Ot)return mt;Ot=1;const o=z();function r(s){this.mode=o.NUMERIC,this.data=s.toString()}return r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,i;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),i=parseInt(n,10),e.put(i,10);const u=this.data.length-t;u>0&&(n=this.data.substr(t),i=parseInt(n,10),e.put(i,u*3+1))},mt=r,mt}var wt,Gt;function ve(){if(Gt)return wt;Gt=1;const o=z(),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function s(e){this.mode=o.ALPHANUMERIC,this.data=e}return s.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},s.prototype.getLength=function(){return this.data.length},s.prototype.getBitsLength=function(){return s.getBitsLength(this.data.length)},s.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let i=r.indexOf(this.data[n])*45;i+=r.indexOf(this.data[n+1]),t.put(i,11)}this.data.length%2&&t.put(r.indexOf(this.data[n]),6)},wt=s,wt}var yt,Qt;function Le(){if(Qt)return yt;Qt=1;const o=z();function r(s){this.mode=o.BYTE,typeof s=="string"?this.data=new TextEncoder().encode(s):this.data=new Uint8Array(s)}return r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(s){for(let e=0,t=this.data.length;e<t;e++)s.put(this.data[e],8)},yt=r,yt}var Ct,$t;function De(){if($t)return Ct;$t=1;const o=z(),r=V();function s(e){this.mode=o.KANJI,this.data=e}return s.getBitsLength=function(t){return t*13},s.prototype.getLength=function(){return this.data.length},s.prototype.getBitsLength=function(){return s.getBitsLength(this.data.length)},s.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},Ct=s,Ct}var pt={exports:{}},Wt;function qe(){return Wt||(Wt=1,function(o){var r={single_source_shortest_paths:function(s,e,t){var n={},i={};i[e]=0;var u=r.PriorityQueue.make();u.push(e,0);for(var a,c,f,m,h,l,I,M,b;!u.empty();){a=u.pop(),c=a.value,m=a.cost,h=s[c]||{};for(f in h)h.hasOwnProperty(f)&&(l=h[f],I=m+l,M=i[f],b=typeof i[f]>"u",(b||M>I)&&(i[f]=I,u.push(f,I),n[f]=c))}if(typeof t<"u"&&typeof i[t]>"u"){var A=["Could not find a path from ",e," to ",t,"."].join("");throw new Error(A)}return n},extract_shortest_path_from_predecessor_list:function(s,e){for(var t=[],n=e;n;)t.push(n),s[n],n=s[n];return t.reverse(),t},find_path:function(s,e,t){var n=r.single_source_shortest_paths(s,e,t);return r.extract_shortest_path_from_predecessor_list(n,t)},PriorityQueue:{make:function(s){var e=r.PriorityQueue,t={},n;s=s||{};for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t.queue=[],t.sorter=s.sorter||e.default_sorter,t},default_sorter:function(s,e){return s.cost-e.cost},push:function(s,e){var t={value:s,cost:e};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};o.exports=r}(pt)),pt.exports}var Zt;function Ue(){return Zt||(Zt=1,function(o){const r=z(),s=_e(),e=ve(),t=Le(),n=De(),i=ie(),u=V(),a=qe();function c(A){return unescape(encodeURIComponent(A)).length}function f(A,P,T){const B=[];let S;for(;(S=A.exec(T))!==null;)B.push({data:S[0],index:S.index,mode:P,length:S[0].length});return B}function m(A){const P=f(i.NUMERIC,r.NUMERIC,A),T=f(i.ALPHANUMERIC,r.ALPHANUMERIC,A);let B,S;return u.isKanjiModeEnabled()?(B=f(i.BYTE,r.BYTE,A),S=f(i.KANJI,r.KANJI,A)):(B=f(i.BYTE_KANJI,r.BYTE,A),S=[]),P.concat(T,B,S).sort(function(p,C){return p.index-C.index}).map(function(p){return{data:p.data,mode:p.mode,length:p.length}})}function h(A,P){switch(P){case r.NUMERIC:return s.getBitsLength(A);case r.ALPHANUMERIC:return e.getBitsLength(A);case r.KANJI:return n.getBitsLength(A);case r.BYTE:return t.getBitsLength(A)}}function l(A){return A.reduce(function(P,T){const B=P.length-1>=0?P[P.length-1]:null;return B&&B.mode===T.mode?(P[P.length-1].data+=T.data,P):(P.push(T),P)},[])}function I(A){const P=[];for(let T=0;T<A.length;T++){const B=A[T];switch(B.mode){case r.NUMERIC:P.push([B,{data:B.data,mode:r.ALPHANUMERIC,length:B.length},{data:B.data,mode:r.BYTE,length:B.length}]);break;case r.ALPHANUMERIC:P.push([B,{data:B.data,mode:r.BYTE,length:B.length}]);break;case r.KANJI:P.push([B,{data:B.data,mode:r.BYTE,length:c(B.data)}]);break;case r.BYTE:P.push([{data:B.data,mode:r.BYTE,length:c(B.data)}])}}return P}function M(A,P){const T={},B={start:{}};let S=["start"];for(let g=0;g<A.length;g++){const p=A[g],C=[];for(let d=0;d<p.length;d++){const R=p[d],w=""+g+d;C.push(w),T[w]={node:R,lastCount:0},B[w]={};for(let E=0;E<S.length;E++){const y=S[E];T[y]&&T[y].node.mode===R.mode?(B[y][w]=h(T[y].lastCount+R.length,R.mode)-h(T[y].lastCount,R.mode),T[y].lastCount+=R.length):(T[y]&&(T[y].lastCount=R.length),B[y][w]=h(R.length,R.mode)+4+r.getCharCountIndicator(R.mode,P))}}S=C}for(let g=0;g<S.length;g++)B[S[g]].end=0;return{map:B,table:T}}function b(A,P){let T;const B=r.getBestModeForData(A);if(T=r.from(P,B),T!==r.BYTE&&T.bit<B.bit)throw new Error('"'+A+'" cannot be encoded with mode '+r.toString(T)+`.
 Suggested mode is: `+r.toString(B));switch(T===r.KANJI&&!u.isKanjiModeEnabled()&&(T=r.BYTE),T){case r.NUMERIC:return new s(A);case r.ALPHANUMERIC:return new e(A);case r.KANJI:return new n(A);case r.BYTE:return new t(A)}}o.fromArray=function(P){return P.reduce(function(T,B){return typeof B=="string"?T.push(b(B,null)):B.data&&T.push(b(B.data,B.mode)),T},[])},o.fromString=function(P,T){const B=m(P,u.isKanjiModeEnabled()),S=I(B),g=M(S,T),p=a.find_path(g.map,"start","end"),C=[];for(let d=1;d<p.length-1;d++)C.push(g.table[p[d]].node);return o.fromArray(l(C))},o.rawSplit=function(P){return o.fromArray(m(P,u.isKanjiModeEnabled()))}}(ht)),ht}var Xt;function Fe(){if(Xt)return et;Xt=1;const o=V(),r=At(),s=Be(),e=Re(),t=Ae(),n=Te(),i=Ne(),u=re(),a=Pe(),c=be(),f=Se(),m=z(),h=Ue();function l(g,p){const C=g.size,d=n.getPositions(p);for(let R=0;R<d.length;R++){const w=d[R][0],E=d[R][1];for(let y=-1;y<=7;y++)if(!(w+y<=-1||C<=w+y))for(let N=-1;N<=7;N++)E+N<=-1||C<=E+N||(y>=0&&y<=6&&(N===0||N===6)||N>=0&&N<=6&&(y===0||y===6)||y>=2&&y<=4&&N>=2&&N<=4?g.set(w+y,E+N,!0,!0):g.set(w+y,E+N,!1,!0))}}function I(g){const p=g.size;for(let C=8;C<p-8;C++){const d=C%2===0;g.set(C,6,d,!0),g.set(6,C,d,!0)}}function M(g,p){const C=t.getPositions(p);for(let d=0;d<C.length;d++){const R=C[d][0],w=C[d][1];for(let E=-2;E<=2;E++)for(let y=-2;y<=2;y++)E===-2||E===2||y===-2||y===2||E===0&&y===0?g.set(R+E,w+y,!0,!0):g.set(R+E,w+y,!1,!0)}}function b(g,p){const C=g.size,d=c.getEncodedBits(p);let R,w,E;for(let y=0;y<18;y++)R=Math.floor(y/3),w=y%3+C-8-3,E=(d>>y&1)===1,g.set(R,w,E,!0),g.set(w,R,E,!0)}function A(g,p,C){const d=g.size,R=f.getEncodedBits(p,C);let w,E;for(w=0;w<15;w++)E=(R>>w&1)===1,w<6?g.set(w,8,E,!0):w<8?g.set(w+1,8,E,!0):g.set(d-15+w,8,E,!0),w<8?g.set(8,d-w-1,E,!0):w<9?g.set(8,15-w-1+1,E,!0):g.set(8,15-w-1,E,!0);g.set(d-8,8,1,!0)}function P(g,p){const C=g.size;let d=-1,R=C-1,w=7,E=0;for(let y=C-1;y>0;y-=2)for(y===6&&y--;;){for(let N=0;N<2;N++)if(!g.isReserved(R,y-N)){let U=!1;E<p.length&&(U=(p[E]>>>w&1)===1),g.set(R,y-N,U),w--,w===-1&&(E++,w=7)}if(R+=d,R<0||C<=R){R-=d,d=-d;break}}}function T(g,p,C){const d=new s;C.forEach(function(N){d.put(N.mode.bit,4),d.put(N.getLength(),m.getCharCountIndicator(N.mode,g)),N.write(d)});const R=o.getSymbolTotalCodewords(g),w=u.getTotalCodewordsCount(g,p),E=(R-w)*8;for(d.getLengthInBits()+4<=E&&d.put(0,4);d.getLengthInBits()%8!==0;)d.putBit(0);const y=(E-d.getLengthInBits())/8;for(let N=0;N<y;N++)d.put(N%2?17:236,8);return B(d,g,p)}function B(g,p,C){const d=o.getSymbolTotalCodewords(p),R=u.getTotalCodewordsCount(p,C),w=d-R,E=u.getBlocksCount(p,C),y=d%E,N=E-y,U=Math.floor(d/E),J=Math.floor(w/E),ue=J+1,Tt=U-J,ae=new a(Tt);let W=0;const Y=new Array(E),Nt=new Array(E);let Z=0;const ce=new Uint8Array(g.buffer);for(let H=0;H<E;H++){const x=H<N?J:ue;Y[H]=ce.slice(W,W+x),Nt[H]=ae.encode(Y[H]),W+=x,Z=Math.max(Z,x)}const X=new Uint8Array(d);let It=0,v,L;for(v=0;v<Z;v++)for(L=0;L<E;L++)v<Y[L].length&&(X[It++]=Y[L][v]);for(v=0;v<Tt;v++)for(L=0;L<E;L++)X[It++]=Nt[L][v];return X}function S(g,p,C,d){let R;if(Array.isArray(g))R=h.fromArray(g);else if(typeof g=="string"){let U=p;if(!U){const J=h.rawSplit(g);U=c.getBestVersionForData(J,C)}R=h.fromString(g,U||40)}else throw new Error("Invalid data");const w=c.getBestVersionForData(R,C);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(!p)p=w;else if(p<w)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+w+`.
`);const E=T(p,C,R),y=o.getSymbolSize(p),N=new e(y);return l(N,p),I(N),M(N,p),A(N,C,0),p>=7&&b(N,p),P(N,E),isNaN(d)&&(d=i.getBestMask(N,A.bind(null,N,C))),i.applyMask(d,N),A(N,C,d),{modules:N,version:p,errorCorrectionLevel:C,maskPattern:d,segments:R}}return et.create=function(p,C){if(typeof p>"u"||p==="")throw new Error("No input text");let d=r.M,R,w;return typeof C<"u"&&(d=r.from(C.errorCorrectionLevel,r.M),R=c.from(C.version),w=i.from(C.maskPattern),C.toSJISFunc&&o.setToSJISFunction(C.toSJISFunc)),S(p,R,d,w)},et}var Et={},Bt={},xt;function se(){return xt||(xt=1,function(o){function r(s){if(typeof s=="number"&&(s=s.toString()),typeof s!="string")throw new Error("Color should be defined as hex string");let e=s.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+s);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(n){return[n,n]}))),e.length===6&&e.push("F","F");const t=parseInt(e.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+e.slice(0,6).join("")}}o.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=typeof e.margin>"u"||e.margin===null||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:n,scale:n?4:i,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},o.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},o.getImageWidth=function(e,t){const n=o.getScale(e,t);return Math.floor((e+t.margin*2)*n)},o.qrToImageData=function(e,t,n){const i=t.modules.size,u=t.modules.data,a=o.getScale(i,n),c=Math.floor((i+n.margin*2)*a),f=n.margin*a,m=[n.color.light,n.color.dark];for(let h=0;h<c;h++)for(let l=0;l<c;l++){let I=(h*c+l)*4,M=n.color.light;if(h>=f&&l>=f&&h<c-f&&l<c-f){const b=Math.floor((h-f)/a),A=Math.floor((l-f)/a);M=m[u[b*i+A]?1:0]}e[I++]=M.r,e[I++]=M.g,e[I++]=M.b,e[I]=M.a}}}(Bt)),Bt}var te;function ke(){return te||(te=1,function(o){const r=se();function s(t,n,i){t.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=i,n.width=i,n.style.height=i+"px",n.style.width=i+"px"}function e(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}o.render=function(n,i,u){let a=u,c=i;typeof a>"u"&&(!i||!i.getContext)&&(a=i,i=void 0),i||(c=e()),a=r.getOptions(a);const f=r.getImageWidth(n.modules.size,a),m=c.getContext("2d"),h=m.createImageData(f,f);return r.qrToImageData(h.data,n,a),s(m,c,f),m.putImageData(h,0,0),c},o.renderToDataURL=function(n,i,u){let a=u;typeof a>"u"&&(!i||!i.getContext)&&(a=i,i=void 0),a||(a={});const c=o.render(n,i,a),f=a.type||"image/png",m=a.rendererOpts||{};return c.toDataURL(f,m.quality)}}(Et)),Et}var Rt={},ee;function Ve(){if(ee)return Rt;ee=1;const o=se();function r(t,n){const i=t.a/255,u=n+'="'+t.hex+'"';return i<1?u+" "+n+'-opacity="'+i.toFixed(2).slice(1)+'"':u}function s(t,n,i){let u=t+n;return typeof i<"u"&&(u+=" "+i),u}function e(t,n,i){let u="",a=0,c=!1,f=0;for(let m=0;m<t.length;m++){const h=Math.floor(m%n),l=Math.floor(m/n);!h&&!c&&(c=!0),t[m]?(f++,m>0&&h>0&&t[m-1]||(u+=c?s("M",h+i,.5+l+i):s("m",a,0),a=0,c=!1),h+1<n&&t[m+1]||(u+=s("h",f),f=0)):a++}return u}return Rt.render=function(n,i,u){const a=o.getOptions(i),c=n.modules.size,f=n.modules.data,m=c+a.margin*2,h=a.color.light.a?"<path "+r(a.color.light,"fill")+' d="M0 0h'+m+"v"+m+'H0z"/>':"",l="<path "+r(a.color.dark,"stroke")+' d="'+e(f,c,a.margin)+'"/>',I='viewBox="0 0 '+m+" "+m+'"',b='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+I+' shape-rendering="crispEdges">'+h+l+`</svg>
`;return typeof u=="function"&&u(null,b),b},Rt}var ne;function ze(){if(ne)return K;ne=1;const o=Ee(),r=Fe(),s=ke(),e=Ve();function t(n,i,u,a,c){const f=[].slice.call(arguments,1),m=f.length,h=typeof f[m-1]=="function";if(!h&&!o())throw new Error("Callback required as last argument");if(h){if(m<2)throw new Error("Too few arguments provided");m===2?(c=u,u=i,i=a=void 0):m===3&&(i.getContext&&typeof c>"u"?(c=a,a=void 0):(c=a,a=u,u=i,i=void 0))}else{if(m<1)throw new Error("Too few arguments provided");return m===1?(u=i,i=a=void 0):m===2&&!i.getContext&&(a=u,u=i,i=void 0),new Promise(function(l,I){try{const M=r.create(u,a);l(n(M,i,a))}catch(M){I(M)}})}try{const l=r.create(u,a);c(null,n(l,i,a))}catch(l){c(l)}}return K.create=r.create,K.toCanvas=t.bind(null,s.render),K.toDataURL=t.bind(null,s.renderToDataURL),K.toString=t.bind(null,function(n,i,u){return e.render(n,u)}),K}var He=ze();const $=de(He),Ke={class:"whitespace-break-spaces p-4 space-y-2"},Je={class:"space-x-2"},je=["src"],Ye=["src"],Oe=["src"],We=ge({__name:"qrcode",setup(o){const r=O(!1),s=O(""),e=O(""),t=O(""),n=he("canvasRef");return me(()=>{$.toDataURL("Fantastic-mobile 真棒！").then(i=>{s.value=i}).catch(i=>{console.log(i)}),$.toCanvas(n.value,"Fantastic-mobile 真棒！").then(()=>{}).catch(i=>{console.log(i)}),$.toDataURL("Fantastic-mobile 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then(i=>{e.value=i}).catch(i=>{console.log(i)}),$.toDataURL("Fantastic-mobile 真棒！",{width:100}).then(i=>{t.value=i}).catch(i=>{console.log(i)})}),(i,u)=>{const a=Ce,c=Mt("van-tag"),f=Mt("van-action-sheet"),m=fe,h=le;return ye(),we(h,{navbar:"","navbar-start-side":"back"},{"navbar-end":D(()=>[q("div",{class:"h-full flex-center px-1",onClick:u[0]||(u[0]=l=>r.value=!0)},[F(a,{name:"i-mdi:information",class:"text-4"})]),F(f,{show:G(r),"onUpdate:show":u[1]||(u[1]=l=>pe(r)?r.value=l:null),teleport:"body"},{default:D(()=>[q("div",Ke,[u[4]||(u[4]=q("div",null," 「插件」栏目下均为第三方插件的演示页面，框架默认并不包含这些插件。如需使用，请先安装对应插件。 ",-1)),u[5]||(u[5]=q("div",null,"安装命令：",-1)),q("div",Je,[F(c,{type:"primary",plain:""},{default:D(()=>u[2]||(u[2]=[Pt(" pnpm add qrcode ")])),_:1}),F(c,{type:"primary",plain:""},{default:D(()=>u[3]||(u[3]=[Pt(" pnpm add @types/qrcode -D ")])),_:1})])])]),_:1},8,["show"])]),default:D(()=>[F(m,{title:"渲染成 img 标签"},{default:D(()=>[q("img",{src:G(s)},null,8,je)]),_:1}),F(m,{title:"渲染成 canvas 标签"},{default:D(()=>[q("canvas",{ref_key:"canvasRef",ref:n},null,512)]),_:1}),F(m,{title:"自定义颜色"},{default:D(()=>[q("img",{src:G(e)},null,8,Ye)]),_:1}),F(m,{title:"指定宽度"},{default:D(()=>[q("img",{src:G(t)},null,8,Oe)]),_:1})]),_:1})}}});export{We as default};
