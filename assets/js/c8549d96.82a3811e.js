"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3602],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,b=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return a?r.createElement(b,i(i({ref:t},p),{},{components:a})):r.createElement(b,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_label:"Subsquid indexing",sidebar_position:1},i="Subsquid-based data indexing for NFT Marketplace",o={unversionedId:"examples/nft-marketplace/subsquid-marketplace",id:"examples/nft-marketplace/subsquid-marketplace",title:"Subsquid-based data indexing for NFT Marketplace",description:"Creating a good and usable frontend for an NFT marketplace web-application requires an indexer of on-chain programs. It will enable historical data to be displayed in the fastest way possible. Subsquid helps to achieve this goal.",source:"@site/docs/examples/nft-marketplace/subsquid-marketplace.md",sourceDirName:"examples/nft-marketplace",slug:"/examples/nft-marketplace/subsquid-marketplace",permalink:"/docs/examples/nft-marketplace/subsquid-marketplace",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/nft-marketplace/subsquid-marketplace.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Subsquid indexing",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Base Marketplace",permalink:"/docs/examples/nft-marketplace/marketplace"},next:{title:"RMRK NFT standard",permalink:"/docs/examples/rmrk"}},l={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"subsquid-based-data-indexing-for-nft-marketplace"},"Subsquid-based data indexing for NFT Marketplace"),(0,n.kt)("p",null,"Creating a good and usable frontend for an NFT marketplace web-application requires an indexer of on-chain programs. It will enable historical data to be displayed in the fastest way possible. Subsquid helps to achieve this goal."),(0,n.kt)("p",null,"You can look at the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsquid.io/overview/"},"Subsquid documentation")," to learn what the Subsquid architecture is."),(0,n.kt)("p",null,"Historical data that needs to be indexed, stored, and displayed in the user interface can be (but not limited to):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Token transfers between accounts"),(0,n.kt)("li",{parentName:"ul"},"Auctions and their bids"),(0,n.kt)("li",{parentName:"ul"},"Offers to buy tokens")),(0,n.kt)("p",null,"A dApp developer may also want to store other parameters of NFTs, such as - the token owner, the token description, links to media and other references too. With Subsquid, these data points can be quickly accessed without having to query the state of the programs on-chain."),(0,n.kt)("p",null,"In general Subsquid provides two main components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An Archive that indexes all blockchain calls and events."),(0,n.kt)("li",{parentName:"ul"},"A Squid that gets the data from the Archive and implements specific business logic.")),(0,n.kt)("p",null,"The Archive works out of the box so we focused on the development of the Squid."),(0,n.kt)("p",null,"The Squid includes, firstly, a processor that receives data from the Archive and creates its own entities that are stored in a database and secondly, GraphQL API through which the data can be retrieved. As for the latter, Subsquid provides a package that can be used to run the GraphQL API without any additional implementation."),(0,n.kt)("p",null,"The Processor must be developed as a regular NodeJS package."),(0,n.kt)("p",null,"Subsquid provides a set of packages that facilitate the development process."),(0,n.kt)("p",null,"First of all, we need to create a GraphQL scheme describing all entities and relations between them. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear-integrations/blob/master/Subsquid/nft-marketplace/schema.graphql"},"Here"),"  is an example of a scheme that can be used to generate Typeorm models for a database using the ",(0,n.kt)("inlineCode",{parentName:"p"},"@subsquid/typeorm-codegen")," package provided by Subsquid. We chose a Postgres database for storing all the data."),(0,n.kt)("p",null,"The next step is to create the Processor."),(0,n.kt)("p",null,"Subsquid provides a really simple way to obtain data from an Archive. Using ",(0,n.kt)("inlineCode",{parentName:"p"},"@subsquid/substrate-processor")," you can easily subscribe to necessary data. The Class ",(0,n.kt)("inlineCode",{parentName:"p"},"SubstrateBatchProcessor")," lets you select the range of blocks that you want to index and specify the event or extrinsic that you want to receive."),(0,n.kt)("p",null,"In our case we need only ",(0,n.kt)("inlineCode",{parentName:"p"},"UserMessageSent")," events, because they contain all the necessary data."),(0,n.kt)("p",null,"The payloads of messages received through the processor are represented as bytes. We need program metadata to decode these bytes, so we\u2019ve created a class called ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear-integrations/blob/master/Subsquid/nft-marketplace/src/meta.ts"},"Meta")," that is responsible for decoding these bytes."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"SubsquidBatchProcessor")," returns the data in batches, so in order to avoid a large number of read/write operations in the database it\u2019s better to prepare all the data in every batch and save it after the entire batch is processed. To achieve this goal we created a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear-integrations/blob/master/Subsquid/nft-marketplace/src/state.ts"},"BatchState")," class that is responsible for storing the prepared data before it is written into the database."),(0,n.kt)("p",null,"In case a new NFT program is registered in the marketplace, you may want to index it to get all its historical data. To do this we created ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear-integrations/blob/master/Subsquid/nft-marketplace/src/indexNft.ts"},"indexNft")," function that queries the relevant data from the Archive and writes it into the database."),(0,n.kt)("p",null,"The source code of the Subsquid-based indexer components is available on GitHub ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear-integrations/tree/master/Subsquid"},"here"),"."),(0,n.kt)("p",null,"The separate implementation of the NFT marketplace application example that is using indexing data via Subscquid is available in: ",(0,n.kt)("inlineCode",{parentName:"p"},"TBD")))}d.isMDXComponent=!0}}]);