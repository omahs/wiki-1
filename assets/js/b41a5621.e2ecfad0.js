"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"gNFT (ERC-721)",sidebar_position:4},i="Gear Non-Fungible Token",s={unversionedId:"examples/gnft-721",id:"examples/gnft-721",title:"Gear Non-Fungible Token",description:"Introduction",source:"@site/docs/examples/gnft-721.md",sourceDirName:"examples",slug:"/examples/gnft-721",permalink:"/docs/examples/gnft-721",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/gnft-721.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"gNFT (ERC-721)",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"gFT (ERC-20)",permalink:"/docs/examples/gft-20"},next:{title:"gNFT (ERC-4907)",permalink:"/docs/examples/gnft-4907"}},l={},p=[{value:"Introduction",id:"introduction",level:3},{value:"Default non-fungible-token implementation",id:"default-non-fungible-token-implementation",level:3},{value:"Developing your non-fungible-token contract",id:"developing-your-non-fungible-token-contract",level:3},{value:"Program metadata and state",id:"program-metadata-and-state",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gear-non-fungible-token"},"Gear Non-Fungible Token"),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Non-fungible tokens (NFTs) are unique cryptographic tokens on a blockchain that are used to prove an ownership of a digital asset, such as digital art or gaming assets. The difference from fungible tokens is that the fungible tokens store a value, while non-fungible tokens store a cryptographic certificate."),(0,o.kt)("p",null,"Under the hood, a non-fungible token consists of a unique token identifier, or token ID, which is mapped to an owner identifier and stored inside a NFT smart contract.",(0,o.kt)("center",null," ",(0,o.kt)("em",null,(0,o.kt)("strong",null,"token_id"))," \u2192 ",(0,o.kt)("em",null,(0,o.kt)("strong",null,"address"))," ")),(0,o.kt)("p",null,"When the owner of a given token ID wishes to transfer it to another user, it is easy to verify ownership and reassign the token to a new owner."),(0,o.kt)("p",null,"This article explains the programming interface, data structure, basic functions and explains their purpose. It can be used as is or modified to suit your own scenarios. Anyone can easily create their own application and run it on the Gear Network. The source code of the Gear NFT smart contract example is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/non-fungible-token"},"GitHub"),"."),(0,o.kt)("h3",{id:"default-non-fungible-token-implementation"},"Default non-fungible-token implementation"),(0,o.kt)("p",null,"The functions that must be supported by each non-fungible-token contract:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"transfer(to, token_id)")," - is a function that allows you to transfer a token with the ",(0,o.kt)("em",{parentName:"li"},"token_id")," number to the ",(0,o.kt)("em",{parentName:"li"},"to")," account;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"approve(approved_account, token_id)")," - is a function that allows you to give the right to dispose of the token to the specified ",(0,o.kt)("em",{parentName:"li"},"approved_account"),". This functionality can be useful on marketplaces or auctions as when the owner wants to sell his token, they can put it on a marketplace/auction, so the contract will be able to send this token to the new owner at some point;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"mint(to, token_id, metadata)")," is a function that creates a new token. Metadata can include any information about the token: it can be a link to a specific resource, a description of the token, etc;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"burn(from, token_id)")," is a function that removes the token with the mentioned ",(0,o.kt)("em",{parentName:"li"},"token_id")," from the contract.")),(0,o.kt)("p",null,"The default implementation of the NFT contract is provided in the gear library: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/gear-lib/tree/master/lib/src/non_fungible_token"},"gear-lib/non_fungible_token"),"."),(0,o.kt)("p",null,"To use the default implementation you should include the packages into your ",(0,o.kt)("em",{parentName:"p"},"Cargo.toml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'gear-lib = { git = "https://github.com/gear-dapps/gear-lib.git" }\ngear-lib-derive = { git = "https://github.com/gear-dapps/gear-lib.git" }\nhashbrown = "0.13.1"\n')),(0,o.kt)("p",null,"The states that non-fungible-contract store are defined in the struct ",(0,o.kt)("inlineCode",{parentName:"p"},"NFTState"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use hashbrown::HashMap;\n\n#[derive(Debug, Default)]\npub struct NFTState {\n    pub name: String,\n    pub symbol: String,\n    pub base_uri: String,\n    pub owner_by_id: HashMap<TokenId, ActorId>,\n    pub token_approvals: HashMap<TokenId, Vec<ActorId>>,\n    pub token_metadata_by_id: HashMap<TokenId, Option<TokenMetadata>>,\n    pub tokens_for_owner: HashMap<ActorId, Vec<TokenId>>,\n    pub royalties: Option<Royalties>,\n}\n")),(0,o.kt)("p",null,"To reuse the default struct you need derive the NFTStateKeeper trait and mark the corresponding field with the #","[NFTStateField]"," attribute.  You can also add your fields in your NFT contract. For example, let's add the owner's address to the contract and the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," that will track the current number of token:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use derive_traits::{NFTStateKeeper, NFTCore, NFTMetaState};\nuse gear_contract_libraries::non_fungible_token::{nft_core::*, state::*, token::*};\n\n#[derive(Debug, Default, NFTStateKeeper, NFTCore, NFTMetaState)]\npub struct NFT {\n    #[NFTStateField]\n    pub token: NFTState,\n    pub token_id: TokenId,\n    pub owner: ActorId,\n    pub transactions: HashMap<H256, NFTEvent>,\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"transactions")," field is used for contract ",(0,o.kt)("inlineCode",{parentName:"p"},"idempotency"),".\nThere are two possible risks when sending a transaction: the risk of sending duplicate transactions and the risk of not knowing the status of the transaction due to a network failure. The message sender indicates the transaction id, and the token contract obtains the hash of this transaction using the sender's address and the transaction number. If a transaction with such a hash has already been completed, the contract returns the status of this transaction."),(0,o.kt)("p",null,"To inherit the default logic functions you need to derive ",(0,o.kt)("inlineCode",{parentName:"p"},"NFTCore")," trait. Accordingly, for reading contracts states you need the ",(0,o.kt)("inlineCode",{parentName:"p"},"NFTMetaState")," trait."),(0,o.kt)("p",null,"Let's write the whole implementation of the NFT contract. First, we define the message\nwhich will initialize the contract and messages that our contract will process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct InitNFT {\n    pub name: String,\n    pub symbol: String,\n    pub base_uri: String,\n}\n\npub enum NFTAction {\n    Mint {\n        transaction_id: u64,\n        to: ActorId,\n        token_id: TokenId,\n    },\n    Burn {\n        transaction_id: u64,\n        token_id: TokenId,\n    },\n    Transfer {\n        transaction_id: u64,\n        to: ActorId,\n        token_id: TokenId,\n    },\n    Approve {\n        transaction_id: u64,\n        to: ActorId,\n        token_id: TokenId,\n    },\n    Clear {\n        transaction_hash: H256,\n    },\n}\n")),(0,o.kt)("p",null,"Then the default NFT contract implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, Default, NFTStateKeeper, NFTCore, NFTMetaState)]\npub struct NFT {\n    #[NFTStateField]\n    pub token: NFTState,\n    pub token_id: TokenId,\n    pub owner: ActorId,\n    pub transactions: HashMap<H256, NFTEvent>,\n}\n\nstatic mut CONTRACT: Option<NFT> = None;\n\n#[no_mangle]\nextern "C" fn init() {\n    let config: InitNFT = msg::load().expect("Unable to decode InitNFT");\n    let mut nft = NFT::default();\n    nft.token.name = config.name;\n    nft.token.symbol = config.symbol;\n    nft.token.base_uri = config.base_uri;\n    nft.owner = msg::source();\n    unsafe { CONTRACT = Some(nft) };\n}\n\n#[no_mangle]\nunsafe extern "C" fn handle() {\n    let action: NFTAction = msg::load().expect("Could not load NFTAction");\n    let nft = CONTRACT.get_or_insert(Default::default());\n    match action {\n        NFTAction::Mint {\n            transaction_id,\n            token_metadata,\n        } => {\n            msg::reply(\n                nft.process_transaction(transaction_id, |nft| {\n                    NFTEvent::Transfer(NFTCore::mint(nft, token_metadata))\n                }),\n                0,\n            )\n            .expect("Error during replying with `NFTEvent::Transfer`");\n        }\n        NFTAction::Burn {\n            transaction_id,\n            token_id,\n        } => {\n            msg::reply(\n                nft.process_transaction(transaction_id, |nft| {\n                    NFTEvent::Transfer(NFTCore::burn(nft, token_id))\n                }),\n                0,\n            )\n            .expect("Error during replying with `NFTEvent::Transfer`");\n        }\n        NFTAction::Transfer {\n            transaction_id,\n            to,\n            token_id,\n        } => {\n            msg::reply(\n                nft.process_transaction(transaction_id, |nft| {\n                    NFTEvent::Transfer(NFTCore::transfer(nft, &to, token_id))\n                }),\n                0,\n            )\n            .expect("Error during replying with `NFTEvent::Transfer`");\n        }\n        NFTAction::Approve {\n            transaction_id,\n            to,\n            token_id,\n        } => {\n            msg::reply(\n                nft.process_transaction(transaction_id, |nft| {\n                    NFTEvent::Approval(NFTCore::approve(nft, &to, token_id))\n                }),\n                0,\n            )\n            .expect("Error during replying with `NFTEvent::Approval`");\n        }\n        NFTAction::Clear { transaction_hash } => nft.clear(transaction_hash),\n    };\n}\n')),(0,o.kt)("h3",{id:"developing-your-non-fungible-token-contract"},"Developing your non-fungible-token contract"),(0,o.kt)("p",null,"Next, let's rewrite the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"mint")," function. Our ",(0,o.kt)("inlineCode",{parentName:"p"},"mint")," function will create token for the account that send ",(0,o.kt)("inlineCode",{parentName:"p"},"Mint")," message  and require the metadata as an input argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum NFTAction {\n    Mint {\n        token_metadata: TokenMetadata,\n        token_id: TokenId,\n    },\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenMetadata")," is also defined in the gear NFT library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, Default, Encode, Decode, Clone, TypeInfo)]\npub struct TokenMetadata {\n    // ex. "CryptoKitty #100"\n    pub name: String,\n    // free-form description\n    pub description: String,\n    // URL to associated media, preferably to decentralized, content-addressed storage\n    pub media: String,\n    // URL to an off-chain JSON file with more info.\n    pub reference: String,\n}\n')),(0,o.kt)("p",null,"Define a trait for our new function that will extend the default ",(0,o.kt)("inlineCode",{parentName:"p"},"NFTCore")," trait:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait MyNFTCore: NFTCore {\n    fn mint(&mut self, token_metadata: TokenMetadata);\n}\n")),(0,o.kt)("p",null,"and write the implementation of that trait:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyNFTCore for NFT {\n    fn mint(&mut self, token_metadata: TokenMetadata) {\n        NFTCore::mint(self, &msg::source(), self.token_id, Some(token_metadata));\n        self.token_id = self.token_id.saturating_add(U256::one());\n    }\n}\n")),(0,o.kt)("p",null,"Accordingly, it is necessary to make changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\nunsafe extern "C" fn handle() {\n    let action: NFTAction = msg::load().expect("Could not load NFTAction");\n    let nft = CONTRACT.get_or_insert(Default::default());\n    match action {\n        NFTAction::Mint {\n            transaction_id,\n            token_metadata,\n        } => {\n            msg::reply(\n                nft.process_transaction(transaction_id, |nft| {\n                    NFTEvent::Transfer(MyNFTCore::mint(nft, token_metadata))\n                }),\n                0,\n            )\n            .expect("Error during replying with `NFTEvent::Transfer`");\n        }\n        NFTAction::Burn {\n            transaction_id,\n            token_id,\n        } => {\n            msg::reply(\n                nft.process_transaction(transaction_id, |nft| {\n                    NFTEvent::Transfer(NFTCore::burn(nft, token_id))\n                }),\n                0,\n            )\n            .expect("Error during replying with `NFTEvent::Transfer`");\n        }\n        ...\n        \n    };\n}\n')),(0,o.kt)("h3",{id:"program-metadata-and-state"},"Program metadata and state"),(0,o.kt)("p",null,"Metadata interface description:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct NFTMetadata;\n\nimpl Metadata for NFTMetadata {\n    type Init = In<InitNFT>;\n    type Handle = InOut<NFTAction, NFTEvent>;\n    type Reply = ();\n    type Others = ();\n    type Signal = ();\n    type State = IoNFT;\n}\n")),(0,o.kt)("p",null,"To display the full contract state information, the ",(0,o.kt)("inlineCode",{parentName:"p"},"state()")," function is used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\nextern "C" fn state() {\n    reply(common_state())\n        .expect("Failed to encode or reply with `<NFTMetadata as Metadata>::State` from `state()`");\n}\n')),(0,o.kt)("p",null,"To display only necessary certain values from the state, you need to write a separate crate. In this crate, specify functions that will return the desired values from the ",(0,o.kt)("inlineCode",{parentName:"p"},"IoNFT")," state. For example - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/non-fungible-token/tree/master/state"},"gear-dapps/non-fungible-token/state"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[metawasm]\npub trait Metawasm {\n    type State = <NFTMetadata as Metadata>::State;\n\n    fn info(state: Self::State) -> NFTQueryReply {\n        ...\n    }\n\n    fn token(token_id: TokenId, state: Self::State) -> Token {\n       ...\n    }\n\n    fn tokens_for_owner(owner: ActorId, state: Self::State) -> Vec<Token> {\n        ...\n    }\n    fn total_supply(state: Self::State) -> u128 {\n        ...\n    }\n\n    fn supply_for_owner(owner: ActorId, state: Self::State) -> u128 {\n       ...\n    }\n\n    fn all_tokens(state: Self::State) -> Vec<Token> {\n       ...\n    }\n\n    fn approved_tokens(account: ActorId, state: Self::State) -> Vec<Token> {\n        ...\n    }   \n}\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Gear provides a reusable ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/gear-lib/tree/master/lib/src/non_fungible_token"},"library")," with core functionality for the gNFT protocol. By using object composition, that library can be utilized within a custom NFT contract implementation in order to minimize duplication of community available code."),(0,o.kt)("p",null,"A source code of the Gear NFT smart contract example based on ",(0,o.kt)("inlineCode",{parentName:"p"},"gear-lib")," is available on GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/non-fungible-token"},"gear-dapps/non-fungible-token"),"."),(0,o.kt)("p",null,"See also an example of the smart contract testing implementation based on ",(0,o.kt)("inlineCode",{parentName:"p"},"gtest"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/non-fungible-token/tree/master/tests"},"gear-dapps/non-fungible-token/tests"),"."),(0,o.kt)("p",null,"For more details about testing smart contracts written on Gear, refer to this article: ",(0,o.kt)("a",{parentName:"p",href:"/docs/developing-contracts/testing"},"Program Testing"),"."))}u.isMDXComponent=!0}}]);