"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4548],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5,sidebar_label:"\u63d0\u4ea4\u4ee3\u7801"},i="\u63d0\u4ea4\u4ee3\u7801",c={unversionedId:"api/submit-code",id:"api/submit-code",title:"\u63d0\u4ea4\u4ee3\u7801",description:"\u5982\u679c\u9700\u8981\u5728\u4e0d\u521d\u59cb\u5316\u7684\u60c5\u51b5\u4e0b\u5c06\u7a0b\u5e8f\u4ee3\u7801\u52a0\u8f7d\u5230\u94fe\u4e2d\uff0c\u8bf7\u770b\u4ee5\u4e0b\u793a\u4f8b\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/submit-code.md",sourceDirName:"api",slug:"/api/submit-code",permalink:"/zh-cn/docs/api/submit-code",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/submit-code.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u63d0\u4ea4\u4ee3\u7801"},sidebar:"tutorialSidebar",previous:{title:"\u4e0a\u4f20\u7a0b\u5e8f",permalink:"/zh-cn/docs/api/upload-program"},next:{title:"\u53d1\u9001\u6d88\u606f",permalink:"/zh-cn/docs/api/send-message"}},s={},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u63d0\u4ea4\u4ee3\u7801"},"\u63d0\u4ea4\u4ee3\u7801"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u5728\u4e0d\u521d\u59cb\u5316\u7684\u60c5\u51b5\u4e0b\u5c06\u7a0b\u5e8f\u4ee3\u7801\u52a0\u8f7d\u5230\u94fe\u4e2d\uff0c\u8bf7\u770b\u4ee5\u4e0b\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { GearKeyring } from '@gear-js/api';\n\nconst alice = await GearKeyring.fromSuri('//Alice');\nconst code = fs.readFileSync('path/to/program.opt.wasm');\n\nconst { codeHash } = gearApi.code.upload(code);\ngearApi.code.signAndSend(alice, () => {\n  events.forEach(({ event: { method, data } }) => {\n    if (method === 'ExtrinsicFailed') {\n      throw new Error(data.toString());\n    } else if (method === 'CodeSaved') {\n      console.log(data.toHuman());\n    }\n  });\n});\n")))}u.isMDXComponent=!0}}]);