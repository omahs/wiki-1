"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"gNFT (ERC-4907)",sidebar_position:5},i="Gear Rentable Non-Fungible Token",s={unversionedId:"examples/gnft-4907",id:"examples/gnft-4907",title:"Gear Rentable Non-Fungible Token",description:"Introduction",source:"@site/docs/examples/gnft-4907.md",sourceDirName:"examples",slug:"/examples/gnft-4907",permalink:"/zh-cn/docs/examples/gnft-4907",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/gnft-4907.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"gNFT (ERC-4907)",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"gMT (ERC-1155)",permalink:"/zh-cn/docs/examples/gmt-1155"},next:{title:"Gear Feeds",permalink:"/zh-cn/docs/examples/feeds"}},l={},p=[{value:"Introduction",id:"introduction",level:3},{value:"Motivation",id:"motivation",level:3},{value:"Details",id:"details",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gear-rentable-non-fungible-token"},"Gear Rentable Non-Fungible Token"),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This is an extension of standard ",(0,r.kt)("a",{parentName:"p",href:"./gnft-721"},"Non-Fungible token"),'. It proposes an additional role (user) which can be granted to addresses, and a time where the role is automatically revoked (expires). The user role represents permission to "use" the NFT, but not the ability to transfer it or set users.'),(0,r.kt)("h3",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,'Some NFTs have certain utilities. For example, virtual land can be "used" to build scenes, and NFTs representing game assets can be "used" in-game. In some cases, the owner and user may not always be the same. There may be an owner of the NFT that rents it out to a \u201cuser\u201d. The actions that a \u201cuser\u201d should be able to take with an NFT would be different from the \u201cowner\u201d (for instance, \u201cusers\u201d usually shouldn\u2019t be able to sell ownership of the NFT).  In these situations, it makes sense to have separate roles that identify whether an address represents an \u201cowner\u201d or a \u201cuser\u201d and manage permissions to perform actions accordingly.'),(0,r.kt)("p",null,"Some projects already use this design scheme under different names such as \u201coperator\u201d or \u201ccontroller\u201d but as it becomes more and more prevalent, we need a unified standard to facilitate collaboration amongst all applications."),(0,r.kt)("p",null,"Furthermore, applications of this model (such as renting) often demand that user addresses have only temporary access to using the NFT. Normally, this means the owner needs to submit two on-chain transactions, one to list a new address as the new user role at the start of the duration and one to reclaim the user role at the end. This is inefficient in both labor and gas and so an \u201cexpires\u201d function is introduced that would facilitate the automatic end of a usage term without the need of a second transaction."),(0,r.kt)("h3",{id:"details"},"Details"),(0,r.kt)("p",null,"The default implementation of the NFT contract is provided in the gear library: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/gear-lib/tree/master/lib/src/non_fungible_token"},"gear-lib/non_fungible_token"),"."),(0,r.kt)("p",null,"To use the default implementation you should include the packages into your ",(0,r.kt)("em",{parentName:"p"},"Cargo.toml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'gear-lib = { git = "https://github.com/gear-dapps/gear-lib.git" }\ngear-lib-derive = { git = "https://github.com/gear-dapps/gear-lib.git" }\nhashbrown = "0.13.1"\n')),(0,r.kt)("p",null,"Rentable NFT contains regular NFT (gnft-721) and additional field  ",(0,r.kt)("inlineCode",{parentName:"p"},"users_info"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use hashbrown::HashMap;\n\n#[derive(Debug, Default, NFTStateKeeper, NFTCore, NFTMetaState)]\npub struct Nft {\n    #[NFTStateField]\n    pub token: NFTState,\n    pub token_id: TokenId,\n    pub owner: ActorId,\n    pub transactions: HashMap<H256, NFTEvent>,\n    pub users_info: HashMap<TokenId, UserInfo>,\n}\n")),(0,r.kt)("p",null,"In all other cases, everything also corresponds to the usual ",(0,r.kt)("a",{parentName:"p",href:"./gnft-721"},"non-fungible-token")," contract, except additional specific actions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum NFTAction {\n    // ... like a usual NFT contract\n    SetUser {\n        token_id: TokenId,\n        address: ActorId,\n        expires: u64, // unix timestamp\n        transaction_id: u64,\n    },\n    UserOf {\n        token_id: TokenId,\n    },\n    UserExpires {\n        token_id: TokenId,\n    },\n}\n")),(0,r.kt)("p",null,"And features specific events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug, Encode, Decode, TypeInfo)]\npub enum NFTEvent {\n    UpdateUser {\n        token_id: TokenId,\n        address: ActorId,\n        expires: u64,\n    },\n    UserOf {\n        address: ActorId,\n    },\n    UserExpires {\n        expires: u64,\n    },\n}\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Gear provides a reusable ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/gear-lib/tree/master/lib/src/non_fungible_token"},"library")," with core functionality for the gNFT-4907 protocol. By using object composition, the library can be utilized within a custom NFT contract implementation in order to minimize duplication of community available code."),(0,r.kt)("p",null,"A source code of the Gear NFT smart contract example based on ",(0,r.kt)("inlineCode",{parentName:"p"},"gear-lib")," is available on GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/rentable_nft"},"gear-dapps/non-fungible-token"),"."),(0,r.kt)("p",null,"See also an example of the smart contract testing implementation based on ",(0,r.kt)("inlineCode",{parentName:"p"},"gtest"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/rentable_nft/tree/master/tests"},"gear-dapps/non-fungible-token/tests"),"."),(0,r.kt)("p",null,"For more details about testing smart contracts written on Gear, refer to this article: ",(0,r.kt)("a",{parentName:"p",href:"/docs/developing-contracts/testing"},"Program Testing"),"."))}c.isMDXComponent=!0}}]);