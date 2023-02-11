"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7393],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(a),d=r,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||n;return a?o.createElement(h,s(s({ref:t},m),{},{components:a})):o.createElement(h,s({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<n;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_label:"Actor Model",sidebar_position:2},s="Actor Model",i={unversionedId:"gear/technology/actor-model",id:"gear/technology/actor-model",title:"Actor Model",description:"One of the key and distinguished features of the Gear Protocol is the Actor model for message-passing communications.",source:"@site/docs/gear/technology/actor-model.md",sourceDirName:"gear/technology",slug:"/gear/technology/actor-model",permalink:"/docs/gear/technology/actor-model",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/gear/technology/actor-model.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Actor Model",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Substrate",permalink:"/docs/gear/technology/substrate"},next:{title:"WebAssembly (Wasm)",permalink:"/docs/gear/technology/WASM"}},c={},l=[{value:"Actor",id:"actor",level:2},{value:"Async/await support",id:"asyncawait-support",level:2}],m={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"actor-model"},"Actor Model"),(0,r.kt)("p",null,"One of the key and distinguished features of the Gear Protocol is the ",(0,r.kt)("strong",{parentName:"p"},"Actor model")," for message-passing communications."),(0,r.kt)("p",null,"Actor model framework enables asynchronous messaging and parallel computation which drastically increases the achievable speed and allows building more complex dApps in an easier way. Asynchronous format of dApps written on the Gear Protocol makes them cross-chain compatible by default."),(0,r.kt)("p",null,"In concurrent computing systems, \u201cmessage-passing communication\u201d means that programs communicate by exchanging messages. This has its advantages over \u201cshared memory communication\u201d as message passing is easier to understand than shared memory concurrency as it\u2019s more robust and has better performance characteristics."),(0,r.kt)("p",null,"The principle of the Actor model approach is that programs never share any state and just exchange messages between each other. With the Actor model, a system consists of simultaneously functioning objects that communicate with each other exclusively by messaging."),(0,r.kt)("p",null,"While an ordinary Actor model does not guarantee message ordering, the Gear Protocol provides some additional guarantees that the order of messages between two particular programs is preserved."),(0,r.kt)("p",null,"Actors are isolated from each other and do not share memory. They have a state and the only way to change it is by receiving a message."),(0,r.kt)("p",null,"The Actor model guarantees high scalability and high fault tolerance. As applications become more computationally intensive over time in Web3, the Actor model will naturally allow advancements in CPU technology to support this continued scale."),(0,r.kt)("h2",{id:"actor"},"Actor"),(0,r.kt)("p",null,"An Actor in the Actor model is an atomic computational unit that can send and receive messages. With Gear, any instance in the Gear Protocol is an Actor - a program (smart contract) or a user that sends messages to a program. Every Actor has an internal private state, also users have a mailbox. Communication is asynchronous, messages are popped out from the mailbox and allocated to message processing streams where they\u2019re then processed in cycles."),(0,r.kt)("p",null,"When an actor receives and processes a message, the response can be the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send a message to another actor"),(0,r.kt)("li",{parentName:"ul"},"Create another actor"),(0,r.kt)("li",{parentName:"ul"},"Change its own internal state")),(0,r.kt)("p",null,"Actors are independent, they never share any state and just exchange messages with each other."),(0,r.kt)("p",null,"Using the Actor model approach provides a way to implement Actor-based concurrency inside smart contract logic. It can utilize various language constructs for asynchronous programming (Futures and async-await in Rust)."),(0,r.kt)("h2",{id:"asyncawait-support"},"Async/await support"),(0,r.kt)("p",null,"Unlike classes, Actors allow only one task to access their mutable state at a time, which makes it safe for code in multiple tasks to interact with the same instance of an actor."),(0,r.kt)("p",null,"Asynchronous functions significantly streamline concurrency management, but they do not handle the possibility of deadlocks or state corruption. To avoid deadlocks or state corruption, async functions should avoid calling functions that may block their thread. To achieve it, they use an await expression."),(0,r.kt)("p",null,"Currently, the lack of normal support of async/await patterns in the typical smart contracts code brings a lot of problems for smart contract developers. Actually, achieving better control in a smart contract program flow is actually more or less possible by adding handmade functions (like in Solidity smart contracts). But the problem with many functions in a contract is that one can easily get confused - which function can be called at which stage in the contract's lifetime. It brings unnecessary complexity for developers writing smart contracts using domain specific languages."),(0,r.kt)("p",null,"Gear natively provides arbitrary async/await syntax for any programs. It greatly simplifies development and testing and reduces the likelihood of errors in smart contract development. The Gear Protocol's API also allows synchronous messages by simply not using await expressions if the logic of the program requires it."))}u.isMDXComponent=!0}}]);