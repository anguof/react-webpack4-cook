if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-24aa846e"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"images/1b9661eca3c604bca02ea1bfe137a7dc.jpg",revision:"46d789be0ea92774ba6f49b61164cd13"},{url:"index.html",revision:"6f96261d5c5764f22b20714c90e73159"},{url:"jquery.dll.js",revision:"1b0981301b3a417bea83e719092ec27d"},{url:"main.320bb0755a0e94ad89d5.js",revision:"9faddff2ef0d198ef18f9d9acea007f2"},{url:"main.css",revision:"7a05f9de32c045619de701d103470896"},{url:"vendors.1341683410b538e1cabd.js",revision:"9001300b04338c33e785f5255f6d1165"}],{})}));
//# sourceMappingURL=service-worker.js.map
