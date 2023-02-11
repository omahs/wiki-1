"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"SS58 \u5730\u5740\u683c\u5f0f",sidebar_position:2},s="SS58 \u5730\u5740\u683c\u5f0f",i={unversionedId:"idea/account/ss58",id:"idea/account/ss58",title:"SS58 \u5730\u5740\u683c\u5f0f",description:"SS58 \u662f\u4e00\u79cd\u7b80\u5355\u7684\u5730\u5740\u683c\u5f0f\uff0c\u662f\u4e3a\u57fa\u4e8e Substrate \u6846\u67b6\u7684\u533a\u5757\u94fe\u6240\u8bbe\u8ba1\u3002\u5176\u57fa\u672c\u601d\u60f3\u662f\u4f7f\u7528 base-58 \u7f16\u7801\u7684\u503c\u6765\u533a\u5206\u4e0d\u540c\u7684\u94fe\u4e0a\u7684\u4e0d\u540c\u8d26\u6237\u3002\u5173\u4e8e\u683c\u5f0f\u7684\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003 https://docs.substrate.io/v3/advanced/ss58/",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/idea/account/ss58.md",sourceDirName:"idea/account",slug:"/idea/account/ss58",permalink:"/zh-cn/docs/idea/account/ss58",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/idea/account/ss58.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"SS58 \u5730\u5740\u683c\u5f0f",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u8d26\u6237",permalink:"/zh-cn/docs/idea/account/create-account"},next:{title:"\u5f00\u59cb",permalink:"/zh-cn/docs/api/getting-started"}},c={},p=[],l={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ss58-\u5730\u5740\u683c\u5f0f"},"SS58 \u5730\u5740\u683c\u5f0f"),(0,a.kt)("p",null,"SS58 \u662f\u4e00\u79cd\u7b80\u5355\u7684\u5730\u5740\u683c\u5f0f\uff0c\u662f\u4e3a\u57fa\u4e8e Substrate \u6846\u67b6\u7684\u533a\u5757\u94fe\u6240\u8bbe\u8ba1\u3002\u5176\u57fa\u672c\u601d\u60f3\u662f\u4f7f\u7528 base-58 \u7f16\u7801\u7684\u503c\u6765\u533a\u5206\u4e0d\u540c\u7684\u94fe\u4e0a\u7684\u4e0d\u540c\u8d26\u6237\u3002\u5173\u4e8e\u683c\u5f0f\u7684\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/advanced/ss58/"},"https://docs.substrate.io/v3/advanced/ss58/")),(0,a.kt)("h1",{id:"\u9009\u62e9\u5bf9\u5e94\u7684\u5730\u5740\u683c\u5f0f\u6765\u4f7f\u7528-gear-\u6d4b\u8bd5\u7f51"},"\u9009\u62e9\u5bf9\u5e94\u7684\u5730\u5740\u683c\u5f0f\u6765\u4f7f\u7528 Gear \u6d4b\u8bd5\u7f51"),(0,a.kt)("p",null,"Gear Idea \u540e\u7aef\u4f7f\u7528 Substrate \u5730\u5740\u683c\u5f0f\u3002\u5f53\u4f60\u53c2\u4e0e\u4e00\u4e9b Gear \u7684\u6d3b\u52a8\u6216\u76f8\u5173\u4e8b\u4ef6\u65f6\uff0c\u4f8b\u5982 workshop\u3001\u5728\u7ebf AMA \u7b49\uff0c\u4f1a\u6536\u5230\u4e00\u4e9b\u5956\u52b1\u7684\u4ee3\u5e01\uff0c\u6b64\u65f6\u4f60\u9700\u8981\u63d0\u4f9b\u4f60\u7684 Substrate \u683c\u5f0f\u7684\u8d26\u6237\u5730\u5740\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e00\u4e2a Polkadot \u8d26\u6237\u3001Kusama \u8d26\u6237\u6216\u8005\u4efb\u4f55\u5176\u4ed6\u57fa\u4e8e Substrate \u7684\u533a\u5757\u94fe\u7f51\u7edc\u7684\u8d26\u6237\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"polkadot.js")," \u63d2\u4ef6\u4e2d\u4e3a\u4f60\u7684\u94b1\u5305\u8bbe\u7f6e\u5730\u5740\u683c\u5f0f\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"polkadot.js")," \u63d2\u4ef6\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u8bbe\u7f6e"),"\u56fe\u6807\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u6253\u5f00\u7684\u7a97\u53e3\u4e2d\u70b9\u51fb\u4e0b\u62c9\u83dc\u5355",(0,a.kt)("inlineCode",{parentName:"p"},"\u663e\u793a\u5730\u5740\u683c\u5f0f"),"\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Substrate"),"\uff1a"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:r(8253).Z,width:"299",height:"543"})),(0,a.kt)("h1",{id:"ss58-\u5730\u5740\u8f6c\u6362"},"SS58 \u5730\u5740\u8f6c\u6362"),(0,a.kt)("p",null,"\u4e0d\u5e78\u7684\u662f\uff0cSS58 \u683c\u5f0f\u7684\u5730\u5740\u5bf9\u4e8e\u4f7f\u7528 Gear IDEA \u4e2d\u7684\u667a\u80fd\u5408\u7ea6\u5f88\u4e0d\u65b9\u4fbf\uff0c\u56e0\u4e3a\u5b83\u4eec\u63a5\u53d7\u7684\u5730\u5740\u662f 256 \u4f4d\u516c\u94a5 (\u4e5f\u79f0\u4e3a actor ID)\u3002\n\u4f60\u53ef\u4ee5\u81ea\u5df1\u628a\u5730\u5740\u8f6c\u6362\u6210\u516c\u94a5\uff0c\u6216\u8005\u4f7f\u7528\u8fd9\u4e2a\u7b80\u5355\u7684\u5728\u7ebf\u8f6c\u6362\u5668\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://ss58.org%EF%BC%88%E5%88%AB%E5%BF%98%E4%BA%86%E9%80%89%E6%8B%A9**%E5%9C%B0%E5%9D%80%E2%AE%8A%E9%92%A5%E5%8C%99**%E6%A0%87%E7%AD%BE%EF%BC%89%E3%80%82"},"https://ss58.org\uff08\u522b\u5fd8\u4e86\u9009\u62e9**\u5730\u5740\u2b8a\u94a5\u5319**\u6807\u7b7e\uff09\u3002")))}u.isMDXComponent=!0},8253:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/address-format-6287d3431f39906f9e26e8e07377c53d.png"}}]);