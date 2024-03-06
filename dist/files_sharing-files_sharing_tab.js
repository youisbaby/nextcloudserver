/*! For license information please see files_sharing-files_sharing_tab.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,i={69196:(e,t,r)=>{var i=r(85471),n=r(53334),o=r(92457),a=r(96763);var s=r(96763);var l=r(96763);r.nc=btoa((0,o.do)()),window.OCA.Sharing||(window.OCA.Sharing={}),Object.assign(window.OCA.Sharing,{ShareSearch:new class{constructor(){var e,t,r,i;e=this,r=void 0,(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t="_state"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._state={},this._state.results=[],a.debug("OCA.Sharing.ShareSearch initialized")}get state(){return this._state}addNewResult(e){return""!==e.displayName.trim()&&"function"==typeof e.handler?(this._state.results.push(e),!0):(a.error("Invalid search result provided",e),!1)}}}),Object.assign(window.OCA.Sharing,{ExternalLinkActions:new class{constructor(){var e,t,r,i;e=this,r=void 0,(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t="_state"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._state={},this._state.actions=[],s.debug("OCA.Sharing.ExternalLinkActions initialized")}get state(){return this._state}registerAction(e){return OC.debug&&s.warn("OCA.Sharing.ExternalLinkActions is deprecated, use OCA.Sharing.ExternalShareAction instead"),"object"==typeof e&&e.icon&&e.name&&e.url?(this._state.actions.push(e),!0):(s.error("Invalid action provided",e),!1)}}}),Object.assign(window.OCA.Sharing,{ExternalShareActions:new class{constructor(){var e,t,r,i;e=this,r=void 0,(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t="_state"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._state={},this._state.actions=[],l.debug("OCA.Sharing.ExternalShareActions initialized")}get state(){return this._state}registerAction(e){return"object"==typeof e&&"string"==typeof e.id&&"function"==typeof e.data&&Array.isArray(e.shareType)&&"object"==typeof e.handlers&&Object.values(e.handlers).every((e=>"function"==typeof e))?this._state.actions.findIndex((t=>t.id===e.id))>-1?(l.error("An action with the same id ".concat(e.id," already exists"),e),!1):(this._state.actions.push(e),!0):(l.error("Invalid action provided",e),!1)}}}),Object.assign(window.OCA.Sharing,{ShareTabSections:new class{constructor(){var e,t,r,i;e=this,r=void 0,(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t="_sections"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._sections=[]}registerSection(e){this._sections.push(e)}getSections(){return this._sections}}}),i.Ay.prototype.t=n.Tl,i.Ay.prototype.n=n.zw;let c=null;window.addEventListener("DOMContentLoaded",(function(){OCA.Files&&OCA.Files.Sidebar&&OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({id:"sharing",name:(0,n.Tl)("files_sharing","Sharing"),iconSvg:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-share-variant" viewBox="0 0 24 24"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" /></svg>',async mount(e,t,n){const o=(await Promise.all([r.e(4208),r.e(8670)]).then(r.bind(r,15988))).default,a=i.Ay.extend(o);c&&c.$destroy(),c=new a({parent:n}),await c.update(t),c.$mount(e)},update(e){c.update(e)},destroy(){c.$destroy(),c=null}}))}))}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=i,e=[],o.O=(t,r,i,n)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],n=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(s=!1,n<a&&(a=n));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,i,n]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+"-"+e+".js?v="+{3747:"b55c20e3f762b53dcf0e",5662:"d1f20e62402d8be29948",8670:"eacd32d8ad062127b565"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="nextcloud:",o.l=(e,i,n,a)=>{if(t[e])t[e].push(i);else{var s,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+n){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",r+n),s.src=e),t[e]=[i];var p=(r,i)=>{s.onerror=s.onload=null,clearTimeout(f);var n=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(i))),r)return r(i)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=4958,(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={4958:0};o.f.j=(t,r)=>{var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var n=new Promise(((r,n)=>i=e[t]=[r,n]));r.push(i[2]=n);var a=o.p+o.u(t),s=new Error;o.l(a,(r=>{if(o.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,i[1](s)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,a=r[0],s=r[1],l=r[2],c=0;if(a.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(l)var u=l(o)}for(t&&t(r);c<a.length;c++)n=a[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.nc=void 0;var a=o.O(void 0,[4208],(()=>o(69196)));a=o.O(a)})();
//# sourceMappingURL=files_sharing-files_sharing_tab.js.map?v=3eba770a2fa50543fd5b