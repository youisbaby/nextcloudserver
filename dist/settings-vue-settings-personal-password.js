(()=>{"use strict";var t,e,n,s={85526:(t,e,n)=>{var s=n(85471),o=n(88837),r=n(54332),a=n(16044),i=n(65043),l=n(63814),d=n(85168);const c={name:"PasswordSection",components:{NcSettingsSection:o.A,NcButton:r.A,NcPasswordField:a.A},data:()=>({oldPass:"",newPass:""}),methods:{changePassword(){i.Ay.post((0,l.Jv)("/settings/personal/changepassword"),{oldpassword:this.oldPass,newpassword:this.newPass}).then((t=>t.data)).then((t=>{"error"===t.status?(this.errorMessage=t.data.message,(0,d.Qg)(t.data.message)):(0,d.Te)(t.data.message)}))}}};var p=n(85072),u=n.n(p),m=n(97825),w=n.n(m),f=n(77659),h=n.n(f),g=n(55056),v=n.n(g),b=n(10540),P=n.n(b),A=n(41113),y=n.n(A),x=n(30514),S={};S.styleTagTransform=y(),S.setAttributes=v(),S.insert=h().bind(null,"head"),S.domAPI=w(),S.insertStyleElement=P(),u()(x.A,S),x.A&&x.A.locals&&x.A.locals;const N=(0,n(14486).A)(c,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("settings","Password")}},[e("form",{attrs:{id:"passwordform",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.changePassword.apply(null,arguments)}}},[e("NcPasswordField",{attrs:{id:"old-pass",label:t.t("settings","Current password"),name:"oldpassword",value:t.oldPass,autocomplete:"current-password",autocapitalize:"none",spellcheck:"false"},on:{"update:value":function(e){t.oldPass=e}}}),t._v(" "),e("NcPasswordField",{attrs:{id:"new-pass",label:t.t("settings","New password"),value:t.newPass,maxlength:469,autocomplete:"new-password",autocapitalize:"none",spellcheck:"false","check-password-strength":!0},on:{"update:value":function(e){t.newPass=e}}}),t._v(" "),e("NcButton",{attrs:{type:"primary","native-type":"submit",disabled:0===t.newPass.length||0===t.oldPass.length}},[t._v("\n\t\t\t"+t._s(t.t("settings","Change password"))+"\n\t\t")])],1)])}),[],!1,null,null,null).exports;var C=n(53334);n.nc=btoa(OC.requestToken),s.Ay.prototype.t=C.Tl,s.Ay.prototype.n=C.zw,new s.Ay({el:"#security-password",name:"main-personal-password",render:t=>t(N)})},30514:(t,e,n)=>{n.d(e,{A:()=>i});var s=n(71354),o=n.n(s),r=n(76314),a=n.n(r)()(o());a.push([t.id,"\n#passwordform {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\tmax-width: 400px;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/PasswordSection.vue"],names:[],mappings:";AAmFA;CACA,aAAA;CACA,sBAAA;CACA,SAAA;CACA,gBAAA;AACA",sourcesContent:['\x3c!--\n  - SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n--\x3e\n<template>\n\t<NcSettingsSection :name="t(\'settings\', \'Password\')">\n\t\t<form id="passwordform" method="POST" @submit.prevent="changePassword">\n\t\t\t<NcPasswordField id="old-pass"\n\t\t\t\t:label="t(\'settings\', \'Current password\')"\n\t\t\t\tname="oldpassword"\n\t\t\t\t:value.sync="oldPass"\n\t\t\t\tautocomplete="current-password"\n\t\t\t\tautocapitalize="none"\n\t\t\t\tspellcheck="false" />\n\n\t\t\t<NcPasswordField id="new-pass"\n\t\t\t\t:label="t(\'settings\', \'New password\')"\n\t\t\t\t:value.sync="newPass"\n\t\t\t\t:maxlength="469"\n\t\t\t\tautocomplete="new-password"\n\t\t\t\tautocapitalize="none"\n\t\t\t\tspellcheck="false"\n\t\t\t\t:check-password-strength="true" />\n\n\t\t\t<NcButton type="primary"\n\t\t\t\tnative-type="submit"\n\t\t\t\t:disabled="newPass.length === 0 || oldPass.length === 0">\n\t\t\t\t{{ t(\'settings\', \'Change password\') }}\n\t\t\t</NcButton>\n\t\t</form>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport NcSettingsSection from \'@nextcloud/vue/dist/Components/NcSettingsSection.js\'\nimport NcButton from \'@nextcloud/vue/dist/Components/NcButton.js\'\nimport NcPasswordField from \'@nextcloud/vue/dist/Components/NcPasswordField.js\'\nimport axios from \'@nextcloud/axios\'\nimport { generateUrl } from \'@nextcloud/router\'\nimport { showSuccess, showError } from \'@nextcloud/dialogs\'\n\nexport default {\n\tname: \'PasswordSection\',\n\tcomponents: {\n\t\tNcSettingsSection,\n\t\tNcButton,\n\t\tNcPasswordField,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\toldPass: \'\',\n\t\t\tnewPass: \'\',\n\t\t}\n\t},\n\tmethods: {\n\t\tchangePassword() {\n\t\t\taxios.post(generateUrl(\'/settings/personal/changepassword\'), {\n\t\t\t\toldpassword: this.oldPass,\n\t\t\t\tnewpassword: this.newPass,\n\t\t\t})\n\t\t\t\t.then(res => res.data)\n\t\t\t\t.then(data => {\n\t\t\t\t\tif (data.status === \'error\') {\n\t\t\t\t\t\tthis.errorMessage = data.data.message\n\t\t\t\t\t\tshowError(data.data.message)\n\t\t\t\t\t} else {\n\t\t\t\t\t\tshowSuccess(data.data.message)\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t},\n\t},\n}\n<\/script>\n\n<style>\n\t#passwordform {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 1rem;\n\t\tmax-width: 400px;\n\t}\n</style>\n'],sourceRoot:""}]);const i=a}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={id:t,loaded:!1,exports:{}};return s[t].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=s,t=[],r.O=(e,n,s,o)=>{if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],o=t[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((t=>r.O[t](n[l])))?n.splice(l--,1):(i=!1,o<a&&(a=o));if(i){t.splice(c--,1);var d=s();void 0!==d&&(e=d)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,s,o]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,n)=>(r.f[n](t,e),e)),[])),r.u=t=>t+"-"+t+".js?v="+{4254:"5c2324570f66dff0c8a1",9480:"2fb23485ae3a8860e96b"}[t],r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},n="nextcloud:",r.l=(t,s,o,a)=>{if(e[t])e[t].push(s);else{var i,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var p=d[c];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==n+o){i=p;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",n+o),i.src=t),e[t]=[s];var u=(n,s)=>{i.onerror=i.onload=null,clearTimeout(m);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((t=>t(s))),n)return n(s)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.j=186,(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var s=n.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=n[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{r.b=document.baseURI||self.location.href;var t={186:0};r.f.j=(e,n)=>{var s=r.o(t,e)?t[e]:void 0;if(0!==s)if(s)n.push(s[2]);else{var o=new Promise(((n,o)=>s=t[e]=[n,o]));n.push(s[2]=o);var a=r.p+r.u(e),i=new Error;r.l(a,(n=>{if(r.o(t,e)&&(0!==(s=t[e])&&(t[e]=void 0),s)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,s[1](i)}}),"chunk-"+e,e)}},r.O.j=e=>0===t[e];var e=(e,n)=>{var s,o,a=n[0],i=n[1],l=n[2],d=0;if(a.some((e=>0!==t[e]))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(l)var c=l(r)}for(e&&e(n);d<a.length;d++)o=a[d],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.nc=void 0;var a=r.O(void 0,[4208],(()=>r(85526)));a=r.O(a)})();
//# sourceMappingURL=settings-vue-settings-personal-password.js.map?v=fbe3d10462eb79cc1220