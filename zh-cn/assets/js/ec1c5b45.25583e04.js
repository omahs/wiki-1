"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3266],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),l=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(a),g=r,u=c["".concat(d,".").concat(g)]||c[g]||p[g]||s;return a?t.createElement(u,o(o({ref:n},m),{},{components:a})):t.createElement(u,o({ref:n},m))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5638:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=a(7462),r=(a(7294),a(3905));const s={sidebar_position:10,sidebar_label:"\u4e8b\u4ef6"},o="\u4e8b\u4ef6",i={unversionedId:"api/events",id:"api/events",title:"\u4e8b\u4ef6",description:"\u5728\u6267\u884c\u671f\u95f4\uff0c\u67d0\u4e9b\u64cd\u4f5c\u4f1a\u751f\u6210\u4e8b\u4ef6\u3002 \u4ee5\u4e0b\u90e8\u5206\u63cf\u8ff0\u4e86\u4f5c\u4e3a\u9ed8\u8ba4 Gear \u8fd0\u884c\u65f6\u4e00\u90e8\u5206\u7684\u4e8b\u4ef6\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/events.mdx",sourceDirName:"api",slug:"/api/events",permalink:"/zh-cn/docs/api/events",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/events.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"\u4e8b\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"Mailbox",permalink:"/zh-cn/docs/api/mailbox"},next:{title:"\u793a\u4f8b",permalink:"/zh-cn/docs/api/extra-queries"}},d={},l=[{value:"Gear \u4e8b\u4ef6 \u7c7b\u578b",id:"gear-\u4e8b\u4ef6-\u7c7b\u578b",level:2},{value:"MessageEnqueued",id:"messageenqueued",level:3},{value:"UserMessageSent",id:"usermessagesent",level:3},{value:"UserMessageSent",id:"usermessagesent-1",level:3},{value:"MessagesDispatched",id:"messagesdispatched",level:3},{value:"MessageWaited",id:"messagewaited",level:3},{value:"MessageWoken",id:"messagewoken",level:3},{value:"CodeChanged",id:"codechanged",level:3},{value:"ProgramChanged",id:"programchanged",level:3},{value:"Cookbook",id:"cookbook",level:2}],m={toc:l};function p(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5728\u6267\u884c\u671f\u95f4\uff0c\u67d0\u4e9b\u64cd\u4f5c\u4f1a\u751f\u6210\u4e8b\u4ef6\u3002 \u4ee5\u4e0b\u90e8\u5206\u63cf\u8ff0\u4e86\u4f5c\u4e3a\u9ed8\u8ba4 Gear \u8fd0\u884c\u65f6\u4e00\u90e8\u5206\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u8ba2\u9605\u6240\u6709\u4e8b\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nimport { GearApi } from "@gear-js/api";\n\nGearApi.query.system.events((events) => {\n    console.log(events)\n}\n\n')),(0,r.kt)("h2",{id:"gear-\u4e8b\u4ef6-\u7c7b\u578b"},"Gear \u4e8b\u4ef6 \u7c7b\u578b"),(0,r.kt)("h3",{id:"messageenqueued"},"MessageEnqueued"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary:")," \u5f53\u7528\u6237\u6210\u529f\u5411\u7a0b\u5e8f\u53d1\u9001\u6d88\u606f\u5e76\u5c06\u5176\u6dfb\u52a0\u5230 Gear \u6d88\u606f\u961f\u5217\u65f6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\nMessageEnqueued {\n    /// Generated id of the message.\n    id: MessageId,\n    /// Account id of the source of the message.\n    source: T::AccountId,\n    /// Program id, who is a destination of the message.\n    destination: ProgramId,\n    /// Entry point for processing of the message.\n    /// On the sending stage, processing function\n    /// of program is always known.\n    entry: Entry,\n}\n\n")),(0,r.kt)("h3",{id:"usermessagesent"},"UserMessageSent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary:")," \u5f53\u6709\u4eba\u5411\u7528\u6237\u53d1\u9001\u6d88\u606f\u65f6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"UserMessageSent {\n    /// Message sent.\n    message: StoredMessage,\n    /// Block number of expiration from `Mailbox`.\n    ///\n    /// Equals `Some(_)` with block number when message\n    /// will be removed from `Mailbox` due to some\n    /// reasons (see #642, #646 and #1010).\n    ///\n    /// Equals `None` if message wasn't inserted to\n    /// `Mailbox` and appears as only `Event`.\n    expiration: Option<T::BlockNumber>,\n}\n")),(0,r.kt)("h3",{id:"usermessagesent-1"},"UserMessageSent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary:")," \u5f53\u6d88\u606f\u88ab\u6807\u8bb0\u4e3a\u201c\u5df2\u8bfb\u201d\u5e76\u4e14\u5df2\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"Mailbox"),"\u4e2d\u5220\u9664\u65f6\u3002 \u6b64\u4e8b\u4ef6\u4ec5\u5f71\u54cd\u5148\u524d\u5df2\u63d2\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Mailbox"),"\u7684\u6d88\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"UserMessageRead {\n    /// Id of the message read.\n    id: MessageId,\n    /// The reason of the reading (removal from `Mailbox`).\n    ///\n    /// NOTE: See more docs about reasons at `gear_common::event`.\n    reason: UserMessageReadReason,\n}\n")),(0,r.kt)("h3",{id:"messagesdispatched"},"MessagesDispatched"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary:")," \u5f53\u4e00\u4e2a\u6d88\u606f\u5728\u5757\u5185\u88ab\u5904\u7406\u7684\u7ed3\u679c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"MessagesDispatched {\n    /// Total amount of messages removed from message queue.\n    total: MessengerCapacityOf<T>,\n    /// Execution statuses of the messages, which were already known\n    /// by `Event::MessageEnqueued` (sent from user to program).\n    statuses: BTreeMap<MessageId, DispatchStatus>,\n    /// Ids of programs, which state changed during queue processing.\n    state_changes: BTreeSet<ProgramId>,\n}\n")),(0,r.kt)("h3",{id:"messagewaited"},"MessageWaited"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary:")," \u5f53\u4e00\u4e2a\u6d88\u606f\u7684\u6267\u884c\u88ab\u63a8\u8fdf\uff0c\u5e76\u88ab\u6dfb\u52a0\u5230Gear\u7b49\u5f85\u5217\u8868\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"MessageWaited {\n    /// Id of the message waited.\n    id: MessageId,\n    /// Origin message id, which started messaging chain with programs,\n    /// where currently waited message was created.\n    ///\n    /// Used for identifying by user, that this message associated\n    /// with him and with the concrete initial message.\n    origin: Option<MessageId>,\n    /// The reason of the waiting (addition to `Waitlist`).\n    ///\n    /// NOTE: See more docs about reasons at `gear_common::event`.\n    reason: MessageWaitedReason,\n    /// Block number of expiration from `Waitlist`.\n    ///\n    /// Equals block number when message will be removed from `Waitlist`\n    /// due to some reasons (see #642, #646 and #1010).\n    expiration: T::BlockNumber,\n}\n")),(0,r.kt)("h3",{id:"messagewoken"},"MessageWoken"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary:")," \u5f53\u4e00\u6761\u6d88\u606f\u51c6\u5907\u597d\u7ee7\u7eed\u6267\u884c\u5e76\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"Waitlist")," \u4e2d\u5220\u9664\u65f6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"MessageWoken {\n    /// Id of the message woken.\n    id: MessageId,\n    /// The reason of the waking (removal from `Waitlist`).\n    ///\n    /// NOTE: See more docs about reasons at `gear_common::event`.\n    reason: MessageWokenReason,\n}\n")),(0,r.kt)("h3",{id:"codechanged"},"CodeChanged"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary:"),"  \u5f53\u7a0b\u5e8f\u4ee3\u7801\u88ab\u6539\u53d8\u65f6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"CodeChanged {\n    /// Id of the code affected.\n    id: CodeId,\n    /// Change applied on code with current id.\n    ///\n    /// NOTE: See more docs about change kinds at `gear_common::event`.\n    change: CodeChangeKind<T::BlockNumber>,\n}\n")),(0,r.kt)("h3",{id:"programchanged"},"ProgramChanged"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary:")," \u4e0e\u7a0b\u5e8f\u6709\u5173\u7684\u4efb\u4f55\u6570\u636e\u6539\u53d8\u65f6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"ProgramChanged {\n    /// Id of the program affected.\n    id: ProgramId,\n    /// Change applied on program with current id.\n    ///\n    /// NOTE: See more docs about change kinds at `gear_common::event`.\n    change: ProgramChangeKind<T::BlockNumber>,\n}\n")),(0,r.kt)("h2",{id:"cookbook"},"Cookbook"),(0,r.kt)("p",null,"\u83b7\u53d6\u4e8b\u4ef6\u4ee5\u68c0\u67e5\u6307\u5b9a\u7a0b\u5e8f\u662f\u5426\u5df2\u88ab\u521d\u59cb\u5316\u7684\u4f8b\u5b50\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { GearApi, Hex, MessageEnqueued, ProgramChanged, UserMessageSent } from '@gear-js/api';\nimport { UnsubscribePromise } from '@polkadot/api/types';\n\nexport function waitForInit(api: GearApi, programId: string): Promise<UnsubscribePromise> {\n  let messageId: Hex;\n  return new Promise((resolve, reject) => {\n    const unsub = api.query.system.events((events) => {\n      events.forEach(({ event }) => {\n        switch (event.method) {\n          case 'MessageEnqueued':\n            const meEvent = event as MessageEnqueued;\n            if (meEvent.data.destination.eq(programId) && meEvent.data.entry.isInit) {\n              messageId = meEvent.data.id.toHex();\n            }\n            break;\n          case 'UserMessageSent':\n            const {\n              data: {\n                message: { source, reply, payload },\n              },\n            } = event as UserMessageSent;\n            if (source.eq(programId) && reply.isSome && reply.unwrap()[0].eq(messageId) && reply.unwrap()[1].eq(1)) {\n              reject(payload.toHuman());\n            }\n            break;\n          case 'ProgramChanged':\n            const pcEvent = event as ProgramChanged;\n            if (pcEvent.data.id.eq(programId) && pcEvent.data.change.isActive) {\n              resolve(unsub);\n            }\n            break;\n        }\n      });\n    });\n  });\n}\n")))}p.isMDXComponent=!0}}]);