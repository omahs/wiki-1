"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6332:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:7,sidebar_label:"Read State"},i="Read State",p={unversionedId:"api/read-state",id:"api/read-state",title:"Read State",description:"There are two different ways to query the program State:",source:"@site/docs/api/read-state.md",sourceDirName:"api",slug:"/api/read-state",permalink:"/docs/api/read-state",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/read-state.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Read State"},sidebar:"tutorialSidebar",previous:{title:"Send Message",permalink:"/docs/api/send-message"},next:{title:"Metadata & Type Creation",permalink:"/docs/api/metadata-type-creation"}},l={},s=[{value:"Cookbook",id:"cookbook",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"read-state"},"Read State"),(0,n.kt)("p",null,"There are two different ways to query the program ",(0,n.kt)("inlineCode",{parentName:"p"},"State"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Query the full ",(0,n.kt)("inlineCode",{parentName:"li"},"State")," of the program. To read the full ",(0,n.kt)("inlineCode",{parentName:"li"},"State")," of the program, you need to have only the ",(0,n.kt)("inlineCode",{parentName:"li"},"metadata")," of this program. You can call ",(0,n.kt)("inlineCode",{parentName:"li"},"api.programState.read")," method to get the state.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"await api.programState.read({ programId: `0x...` }, programMetadata);\n")),(0,n.kt)("p",null,"Also, you can read the ",(0,n.kt)("inlineCode",{parentName:"p"},"State")," of the program at some specific block:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"await api.programState.read(\n  { programId: `0x...`, at: `0x...` },\n  programMetadata,\n);\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"If you are using the custom functions to query only specific parts of the program State (",(0,n.kt)("a",{parentName:"li",href:"/docs/developing-contracts/metadata#genarate-metadata"},"see more"),"), then you should to call ",(0,n.kt)("inlineCode",{parentName:"li"},"api.programState.readUsingWasm")," method:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// ...\n\nconst wasm = readFileSync('path/to/state.meta.wasm');\nconst metadata = await getStateMetadata(wasm);\n\nconst state = await api.programState.readUsingWasm(\n  {\n    programId,\n    fn_name: 'name_of_function_to_execute',\n    wasm,\n    argument: { input: 'payload' },\n  },\n  metadata,\n);\n")),(0,n.kt)("h2",{id:"cookbook"},"Cookbook"),(0,n.kt)("p",null,"To read state in JavaScript applications you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch")," browser API to get buffer from ",(0,n.kt)("inlineCode",{parentName:"p"},"meta.wasm"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// ...\n\nconst res = await fetch(metaFile);\nconst arrayBuffer = await res.arrayBuffer();\nconst buffer = await Buffer.from(arrayBuffer);\nconst metadata = await getStateMetadata(buffer);\n\n// get State only of the first wallet\nconst firstState = await api.programState.readUsingWasm(\n  { programId, fn_name: 'first_wallet', buffer },\n  metadata,\n);\n\n// get wallet State by id\nconst secondState = await api.programState.readUsingWasm(\n  { programId, fn_name: 'wallet_by_id', buffer,  argument: { decimal: 1, hex: '0x01' } },\n  metadata,\n);\n\n")))}d.isMDXComponent=!0}}]);