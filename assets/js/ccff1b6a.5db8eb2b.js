"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9224],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4097:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"Create Account",sidebar_position:1},i="How to create an account",s={unversionedId:"idea/account/create-account",id:"idea/account/create-account",title:"How to create an account",description:"Key information and security",source:"@site/docs/idea/account/create-account.md",sourceDirName:"idea/account",slug:"/idea/account/create-account",permalink:"/docs/idea/account/create-account",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/idea/account/create-account.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Create Account",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"IDEA Overview",permalink:"/docs/idea/idea-overview"},next:{title:"SS58 account format",permalink:"/docs/idea/account/ss58"}},l={},c=[{value:"Key information and security",id:"key-information-and-security",level:2},{value:"Storing your accounts",id:"storing-your-accounts",level:3},{value:"How to create account",id:"how-to-create-account",level:2},{value:"Via Talisman Wallet",id:"via-talisman-wallet",level:3},{value:"Via Subwallet",id:"via-subwallet",level:3},{value:"Via Polkadot.js browser extension",id:"via-polkadotjs-browser-extension",level:3},{value:"Via mobile app",id:"via-mobile-app",level:3},{value:"Via console",id:"via-console",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"Is this account portable?",id:"is-this-account-portable",level:4},{value:"Can I transact directly in the polkadot.js browser extension?",id:"can-i-transact-directly-in-the-polkadotjs-browser-extension",level:4}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-an-account"},"How to create an account"),(0,o.kt)("h2",{id:"key-information-and-security"},"Key information and security"),(0,o.kt)("p",null,"Account represents an identity - typically a person or an organization, that is capable of making transactions or holding funds. Users can upload smart-contracts and interact with them through transactions in blockchain networks built on top of Gear Protocol. To make this happen, users need to connect a Substrate account. Gear Idea portal can work with Substrate accounts in any connected Gear-powered networks. Moreover this account can be used for holding funds and making transactions in any network of the Dotsama ecosystem and even ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/fundamentals/accounts-addresses-keys/"},"more"),"."),(0,o.kt)("p",null,"There are several ways to create a Substrate account, depending on whether you are using a desktop or a mobile device."),(0,o.kt)("p",null,"There are two main features that make up an account - an address and a key:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An address is the public aspect of the account. This is essentially a location that can be shared with others in order to send transactions to and from."),(0,o.kt)("li",{parentName:"ul"},"A key is the private part of the account. This is what enables you as an account owner to access the address. The only way to access your account is via your private key (using the mnemonic phrase, seed, or your account's JSON file and a password).")),(0,o.kt)("h3",{id:"storing-your-accounts"},"Storing your accounts"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Seed phrase")),(0,o.kt)("p",{parentName:"admonition"},"Your seed or mnemonic phrase is the key to your account. If you lose seed you will lose access to your account. We recommend that you store your seed in secure places like encrypted hard drives, non-digital devices or ideally, paper. Never share your private key with anyone.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"JSON file")),(0,o.kt)("p",{parentName:"admonition"},"JSON file is a backup of your account encrypted with a password. By using JSON, you can import/ restore your account in any wallet. Without a password, you will not be able to restore access to your account. If you use JSON, store the file and passwords in a safe place.")),(0,o.kt)("h2",{id:"how-to-create-account"},"How to create account"),(0,o.kt)("h3",{id:"via-talisman-wallet"},"Via Talisman Wallet"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Talisman")," is a popular and user-friendly wallet for creating and managing Substrate accounts. Being connected to web3 applications across various networks, Talisman browser extension allows to store, send and receive assets."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Talisman extension for your browser ",(0,o.kt)("a",{parentName:"p",href:"https://talisman.xyz/"},"here"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the extension by clicking on the logo in the menu bar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'In the opened application, click "New wallet":'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:a(8381).Z,width:"2802",height:"1426"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Enter a strong password:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:a(5197).Z,width:"2810",height:"1426"})),(0,o.kt)("p",null,"And that's it. Your wallet has been created:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:a(6482).Z,width:"2810",height:"1422"})),(0,o.kt)("h3",{id:"via-subwallet"},"Via Subwallet"),(0,o.kt)("p",null,"Subwallet is another advanced wallet for managing Substrate as well as EVM accounts."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To install Subwallet follow this ",(0,o.kt)("a",{parentName:"p",href:"https://subwallet.app/download.html"},"link"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Subwallet by clicking on its logo in the browser menu bar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "Create new account":'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:a(4462).Z,width:"2874",height:"1428"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Select the type of account you want to create (Subwallet allows you to create Substrate-like and Ethereum accounts at once). Copy your seed phrase and keep it in the same place:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:a(3408).Z,width:"2868",height:"1416"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'Provide your password in the next step. And click "Add the account with the generated seed"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:a(4440).Z,width:"2868",height:"1430"})),(0,o.kt)("p",null,"Congratulations, your wallet has been successfully created!"),(0,o.kt)("h3",{id:"via-polkadotjs-browser-extension"},"Via Polkadot.js browser extension"),(0,o.kt)("p",null,'The polkadot.js browser extension is the original application created by Parity Technologies for managing Substate accounts. This method involves installing the polkadot.js plugin and using it as a "virtual vault" that\'s separate from your browser to store your private keys and sign transactions.'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can install the extension via the following links.")),(0,o.kt)("p",null,"Install on ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en"},"Chromium"),"-based browser."),(0,o.kt)("p",null,"Install on ",(0,o.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension"},"FireFox"),"."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the extension by clicking on the logo in the menu bar")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click the large plus button to create a new account. Alternatively, you can navigate to the smaller plus icon in the top right and select "Create New Account".'))),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(7909).Z},"img alt")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Save the ",(0,o.kt)("inlineCode",{parentName:"li"},"seed phrase")," in a safe place using the security advices at the beginning of this article.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:a(3601).Z,width:"2876",height:"1428"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'Specify the name of your account and a strong password for making transactions. Click "Add the account with the generated seed".')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:a(1993).Z,width:"2872",height:"1426"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The password that you choose here will be used to encrypt this account's information. You will need to re-enter it when attempting to process any kind of outgoing transaction, or when using it to cryptographically sign a message. This password is stored locally on the browser extension.")),(0,o.kt)("p",null,"You've now successfully created a new account using the polkadot.js browser extension."),(0,o.kt)("h3",{id:"via-mobile-app"},"Via mobile app"),(0,o.kt)("p",null,"If you need access to your accounts on a mobile device, then you can use the following mobile wallets for the Polkadot/Kusama ecosystem:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://novawallet.io/"},(0,o.kt)("img",{alt:"img alt",src:a(3910).Z,width:"340",height:"108"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://subwallet.app/"},(0,o.kt)("img",{alt:"img alt",src:a(703).Z,width:"356",height:"120"}))),(0,o.kt)("p",null,"All supported wallets you can check ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-wallets"},"here"),"."),(0,o.kt)("h3",{id:"via-console"},"Via console"),(0,o.kt)("p",null,"If you have ",(0,o.kt)("inlineCode",{parentName:"p"},"Gear node")," installed, you can generate a new ",(0,o.kt)("inlineCode",{parentName:"p"},"seed phrase")," using the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./gear key generate | grep phrase\n")),(0,o.kt)("p",null,"And then ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," the generated seed phrase into any convenient wallet."),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h4",{id:"is-this-account-portable"},"Is this account portable?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Yes, you can access your account on a different device or wallet of your choice as long as you have the account's seed\nphrase or JSON file associated with the account.")),(0,o.kt)("h4",{id:"can-i-transact-directly-in-the-polkadotjs-browser-extension"},"Can I transact directly in the polkadot.js browser extension?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There isn't functionality to make transactions directly in the polkadot.js browser extension.\nTo make transactions, you need to launch ",(0,o.kt)("a",{parentName:"p",href:"https://idea.gear-tech.io"},"Gear Idea")," on your browser.\nBefore you can make any transactions, you have to allow Gear Idea to access your account.\nThe browser extension is what holds your account information. You choose which websites get to access this information.")))}p.isMDXComponent=!0},7909:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/create-account-1-61b6042e92671d253cec4ad9b1bd2aa4.png"},3601:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-account-2-bac61add811f249d7ebb224eb7dcf451.png"},1993:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-account-3-798deb216795937341bb03e3b710aa07.png"},3910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nova-logo-29c7436881b084aafe66871f3813637f.png"},4462:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subwallet-1-ba247c1f44ca64cf70758bfe9bdab96b.png"},3408:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subwallet-2-351b84f37a7ecedce7f80f632330a836.png"},4440:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subwallet-3-563adfc57cbd80a49d811a3a86084223.png"},703:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subwallet-logo-030772530670f3ff8f32615a1d09fd11.png"},8381:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/talisman-1-a3171db5e65b5e6912eceb2f2fc478eb.png"},5197:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/talisman-2-a95a3f3c8066139b16379f1418dba6ae.png"},6482:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/talisman-3-aa6887234aeb5290e2d93cd200cbe25d.png"}}]);