if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-ClosVtbS.css",revision:null},{url:"assets/index-DIguuYpS.js",revision:null},{url:"index.html",revision:"33cfdee3ce6f8a4a4280ee98cd4c3c4f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon.png",revision:"4adb49ae262dc7a50fd8fd5d28d1da14"},{url:"icons/icon_x144.png",revision:"844ca2ffb4287c9f04910ea452711c20"},{url:"icons/icon_x192.png",revision:"742dfac89021888cde88f0a23a677647"},{url:"manifest.webmanifest",revision:"760ef422a104e23ebe5d4e987b465e1b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
