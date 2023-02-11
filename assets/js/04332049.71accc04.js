"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_label:"Crowdsale smart contract mechanics",sidebar_position:19},o="Crowdsale smart contract mechanics",i={unversionedId:"examples/crowdsale",id:"examples/crowdsale",title:"Crowdsale smart contract mechanics",description:"Introduction",source:"@site/docs/examples/crowdsale.md",sourceDirName:"examples",slug:"/examples/crowdsale",permalink:"/docs/examples/crowdsale",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/crowdsale.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_label:"Crowdsale smart contract mechanics",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Staking",permalink:"/docs/examples/staking"},next:{title:"Rock Paper Scissors",permalink:"/docs/examples/rock-paper-scissors"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Interface",id:"interface",level:2},{value:"Source files",id:"source-files",level:3},{value:"Structs",id:"structs",level:3},{value:"Functions",id:"functions",level:3},{value:"Programm metadata and state",id:"programm-metadata-and-state",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"crowdsale-smart-contract-mechanics"},"Crowdsale smart contract mechanics"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A public offering to invest in a brand-new cryptocurrency or other digital asset is known as a cryptocurrency Crowdsale. A crowdsale can be used by new projects to raise money for development and other purposes. It is a time-limited campaign where investors can exchange their cryptocurrencies defined in the campaign to newly proposed tokens. The new tokens are promoted as future functional units after the crowdsale's funding goal is met and the project launches."),(0,r.kt)("p",null,"An example of a crowdsale smart-contract implementation described in this article is one of many other decentralized applications that can be implemented and laucnhed on Gear. This article explains the programming interface, data structure, basic functions and explains their purpose. It can be used as is or modified to suit your own scenarios. Anyone can easily create their own crowdsale application and run it on the Gear Network."),(0,r.kt)("p",null,"Initial funds with which a token is purchased are determined by the Gear fungible tokens contract - ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.gear-tech.io/examples/gft-20"},"gFT"),". The contract's source code is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/crowdsale"},"GitHub"),"."),(0,r.kt)("h2",{id:"interface"},"Interface"),(0,r.kt)("h3",{id:"source-files"},"Source files"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"messages.rs")," - contains function of the fungible token contract. Crowdsale contract interacts with fungible token contract through transfer_tokens function:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub async fn transfer_tokens(\n    transaction_id: u64, // - associated transaction id\n    token_id: &ActorId, // - the fungible token contract address\n    from: &ActorId, // - the sender address\n    to: &ActorId, // - the recipient address\n    amount: u128, // - the amount of tokens\n) \n")),(0,r.kt)("p",null,"This function sends a message (the action is defined in the enum IcoAction) and gets a reply (the reply is defined in the enum IcoEvent):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let _transfer_response = msg::send_for_reply_as::<ft_main_io::FTokenAction, FTokenEvent>(\n    *token_address,\n    FTokenAction::Message {\n        transaction_id,\n        payload: ft_logic_io::Action::Transfer {\n            sender: *from,\n            recipient: *to,\n            amount: amount_tokens,\n        }\n        .encode(),\n    },\n    0,\n)\n.expect("Error in sending a message `FTokenAction::Message`")\n.await\n.expect("Error int transfer");\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"asserts.rs")," - contains asserts functions: ",(0,r.kt)("inlineCode",{parentName:"li"},"owner_message")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"not_zero_address"),". ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owner_message")," checks if ",(0,r.kt)("inlineCode",{parentName:"li"},"msg::source()")," is equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"owner"),". Otherwise, it panics:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn owner_message(owner: &ActorId, message: &str) {\n    if msg::source() != *owner {\n        panic!("{}: Not owner message", message)\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"not_zero_address")," checks if ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," is not equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"ZERO_ID"),". Otherwise, it panics:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn not_zero_address(address: &ActorId, message: &str) {\n    if address == &ZERO_ID {\n        panic!("{}: Zero address", message)\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lib.rs")," - defines the contract logic.")),(0,r.kt)("h3",{id:"structs"},"Structs"),(0,r.kt)("p",null,"To use the hashmap you should add the ",(0,r.kt)("inlineCode",{parentName:"p"},"hashbrown")," package into your Cargo.toml file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependecies]\n# ...\nhashbrown = "0.13.1"\n')),(0,r.kt)("p",null,"The contract has the following structs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use hashbrown::HashMap;\n\nstruct IcoContract {\n    ico_state: IcoState,\n    start_price: u128,\n    price_increase_step: u128,\n    time_increase_step: u128,\n    tokens_sold: u128,\n    tokens_goal: u128,\n    owner: ActorId,\n    token_address: ActorId,\n    token_holders: HashMap<ActorId, u128>,\n    transaction_id: u64,\n    transactions: HashMap<ActorId, u64>,\n}\n")),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ico_state")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"IcoState")," struct which consists of:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct IcoState {\n    pub ico_started: bool, // true if ICO was started\n    pub start_time: u64, // time when ICO was started, otherwise is zero\n    pub duration: u64, // duration of the ICO, otherwise is zero\n    pub ico_ended: bool, // true if ICO was ended\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start_price")," - initial price of tokens"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"price_increase_step")," - how much does the price increase"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"time_increase_step")," - the period of time after which the price increases"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tokens_sold")," - how many tokens were sold"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tokens_goal")," - how many tokens are we going to sell"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owner")," - contract owner"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token_address")," - fungible token address "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token_holders")," - the list of buyers and the number of tokens they bought")),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Starts the ICO. Only owner can call it:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"async fn start_ico(&mut self, config: IcoAction)\n")),(0,r.kt)("p",null,"replies with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"IcoEvent::SaleStarted {\n    transaction_id,\n    duration,\n    start_price,\n    tokens_goal,\n    price_increase_step,\n    time_increase_step,\n},\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Purchase of tokens. Anyone with enough balance can call and buy tokens:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn buy_tokens(&mut self, tokens_cnt: u128)\n")),(0,r.kt)("p",null,"replies with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"IcoEvent::Bought {\n    buyer,\n    amount,\n    change,\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ends the ICO. Only owner can call it:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"async fn end_sale(&mut self)\n")),(0,r.kt)("p",null,"replies with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"IcoEvent::SaleEnded\n")),(0,r.kt)("h3",{id:"programm-metadata-and-state"},"Programm metadata and state"),(0,r.kt)("p",null,"Metadata interface description:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CrowdsaleMetadata;\n\nimpl Metadata for CrowdsaleMetadata {\n    type Init = ();\n    type Handle = InOut<IcoAction, IcoEvent>;\n    type Others = ();\n    type Reply = ();\n    type Signal = ();\n    type State = State;\n}\n")),(0,r.kt)("p",null,"To display the full contract state information, the ",(0,r.kt)("inlineCode",{parentName:"p"},"state()")," function is used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\nextern "C" fn state() {\n    reply(common_state()).expect(\n        "Failed to encode or reply with `<ContractMetadata as Metadata>::State` from `state()`",\n    );\n}\n')),(0,r.kt)("p",null,"To display only necessary certain values from the state, you need to write a separate crate. In this crate, specify functions that will return the desired values from the ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," state. For example - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/crowdsale/tree/master/state"},"gear-dapps/crowdsale/state"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[metawasm]\npub trait Metawasm {\n    type State = <CrowdsaleMetadata as Metadata>::State;\n\n    fn current_price(state: Self::State) -> u128 {\n        state.get_current_price()\n    }\n\n    fn tokens_left(state: Self::State) -> u128 {\n        state.get_balance()\n    }\n\n    fn balance_of(address: ActorId, state: Self::State) -> u128 {\n        state.balance_of(&address)\n    }\n}\n\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The source code of this example of ICO smart contract and the example of an implementation of its testing is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/crowdsale"},"Github"),"."),(0,r.kt)("p",null,"For more details about testing smart contracts written on Gear, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.gear-tech.io/developing-contracts/testing"},"Program Testing")," article."))}u.isMDXComponent=!0}}]);