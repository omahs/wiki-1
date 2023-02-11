"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"DAO",sidebar_position:8},s="Decentralized autonomous organization",i={unversionedId:"examples/DAO",id:"examples/DAO",title:"Decentralized autonomous organization",description:"Introduction",source:"@site/docs/examples/DAO.md",sourceDirName:"examples",slug:"/examples/DAO",permalink:"/docs/examples/DAO",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/examples/DAO.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"DAO",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Gear Feeds",permalink:"/docs/examples/feeds"},next:{title:"Escrow",permalink:"/docs/examples/escrow"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is DAO",id:"what-is-dao",level:3},{value:"DAO application example by Gear",id:"dao-application-example-by-gear",level:3},{value:"Logic",id:"logic",level:2},{value:"DAO functions",id:"dao-functions",level:3},{value:"Consistency of contract states",id:"consistency-of-contract-states",level:2},{value:"Program metadata and state",id:"program-metadata-and-state",level:2},{value:"Source code",id:"source-code",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decentralized-autonomous-organization"},"Decentralized autonomous organization"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("h3",{id:"what-is-dao"},"What is DAO"),(0,o.kt)("p",null,"A decentralized autonomous organization, or a DAO for short, is a new type of way to run organizations or institutions that enable individuals to work together for a specific cause in transparent, fair and honest ways. DAOs can be thought of as online groups of like-minded individuals that are also collectively owned and managed by the members themselves in equitable ways."),(0,o.kt)("p",null,"Decisions are governed by proposals and votes to ensure that everyone within a decentralized autonomous organization has a voice. This is significant because it means that no central entity can manipulate anything for personal gain or based on personal beliefs."),(0,o.kt)("p",null,"DAOs offer safe alternatives to pooling together money for a particular cause. But this isn\u2019t just money that can be ordinarily managed by members. For instance, a group could set up a DAO to govern a charity to begin accepting donations and distributing aid accordingly. However, by far the biggest use cases for DAOs at the moment have been decentralized investment funds. This is where a group of investors create a venture fund that pools capital together and votes transparently on where to allocate the capital."),(0,o.kt)("h3",{id:"dao-application-example-by-gear"},"DAO application example by Gear"),(0,o.kt)("p",null,"Anyone can easily create their own DAO application and run it on the Gear Network. To do this, Gear created an example of the DAO smart contract, which is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dao-light"},"GitHub"),"."),(0,o.kt)("p",null,"This article explains the programming interface, data structure, basic functions and explains their purpose. It can be used as is or modified to suit your own scenarios."),(0,o.kt)("h2",{id:"logic"},"Logic"),(0,o.kt)("p",null,"To use the hashmap you should add the ",(0,o.kt)("inlineCode",{parentName:"p"},"hashbrown")," package into your Cargo.toml file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\n# ...\nhashbrown = "0.13.1"\n')),(0,o.kt)("p",null,"The contract has the following structs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use hashbrown::HashMap;\n\nstruct Dao {\n    approved_token_program_id: ActorId,\n    period_duration: u64,\n    voting_period_length: u64,\n    grace_period_length: u64,\n    total_shares: u128,\n    members: HashMap<ActorId, Member>,\n    proposal_id: u128,\n    proposals: HashMap<u128, Proposal>,\n    locked_funds: u128,\n    balance: u128,\n    transaction_id: u64,\n    transactions: BTreeMap<u64, DaoAction>,\n}\n")),(0,o.kt)("p",null,"where:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"approved_token_program_id")," - the reference to the token contract (ERC20) that users use as pledge to get the share in the DAO."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"period_duration")," - the smallest unit time interval for the DAO, in ms."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"voting_period_length")," - voting time interval. Number of intervals for voting time = period duration * voting_period_length."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"grace_period_length")," - after the voting period the DAO members are given a period of time in which they can leave the DAO(ragequit) without being diluted and ultimately affected by the proposal\u2019s acceptance into the DAO."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"total_shares")," - total shares across all members. Initially it is zero."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"members")," - members of the DAO."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"proposal_id")," - the index of the last proposal."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"proposals")," - all proposals (the proposal queue)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"locked_funds")," - tokens that are locked when a funding proposal is submitted."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"balance")," - the amount of tokens in the DAO contract."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"transaction_id")," - the transaction number that is used for tracking transactions in the fungible token contract."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"transactions")," - the transaction history."),(0,o.kt)("p",null,"Parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"approved_token_program_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"period_duration"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"grace_period_length")," are set when initializing a contract. The contract is initialized\nwith the following struct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"struct InitDao {\n    approved_token_program_id: ActorId,\n    period_duration: u64,\n    voting_period_length: u64,\n    grace_period_length: u64,\n}\n")),(0,o.kt)("p",null,"The proposal struct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"}," pub struct Proposal {\n    pub proposer: ActorId, /// - the member who submitted the proposal\n    pub applicant: ActorId, /// - the applicant who wishes to become a member\n    pub yes_votes: u128, /// - the total number of YES votes for that proposal\n    pub no_votes: u128, /// - the total number of NO votes for that proposal\n    pub quorum: u128, /// - a certain threshold of YES votes in order for the proposal to pass\n    pub processed: bool, /// - true if the proposal has already been processed\n    pub did_pass: bool, /// - true if the proposal has passed\n    pub details: String, /// - proposal details\n    pub starting_period: u64, /// - the start of the voting period\n    pub ended_at: u64, /// - the end of the voting period\n    pub votes_by_member: BTreeMap<ActorId, Vote>, /// - the votes on that proposal by each member\n}\n")),(0,o.kt)("p",null,"The member struct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Member {\n    pub shares: u128, /// - the shares of that member\n    pub highest_index_yes_vote: u128, /// - the index of the highest proposal on which the members voted YES (that value is checked when user is going to leave the DAO)\n}\n")),(0,o.kt)("p",null,"The actions that the contract receives outside are defined in enum ",(0,o.kt)("inlineCode",{parentName:"p"},"DaoActions"),". The contract's replies are defined in the enum ",(0,o.kt)("inlineCode",{parentName:"p"},"DaoEvents"),"."),(0,o.kt)("h3",{id:"dao-functions"},"DAO functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Joining the DAO. In order to send the DAO contract the tokens and become the DAO members a user has to send the following message:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"/// Deposits tokens to DAO\n/// The account gets a share in DAO that is calculated as: (amount * self.total_shares / self.balance)\n///\n/// On success replies with [`DaoEvent::Deposit`]\nDeposit {\n    /// the number of fungible tokens that user wants to deposit to DAO\n    amount: u128,\n},\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The funding proposal. The 'applicant' is an actor that will be funded:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"/// The proposal of funding.\n///\n/// Requirements:\n///\n/// * The proposal can be submitted only by the existing members;\n/// * The receiver ID can't be the zero;\n/// * The DAO must have enough funds to finance the proposal\n///\n/// On success replies with [`DaoEvent::SubmitFundingProposal`]\nSubmitFundingProposal {\n    /// an actor that will be funded\n    receiver: ActorId,\n    /// the number of fungible tokens that will be sent to the receiver\n    amount: u128,\n    /// a certain threshold of YES votes in order for the proposal to pass\n    quorum: u128,\n    /// the proposal description\n    details: String,\n},\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The member or the delegate address of the member submit his vote (YES or NO) on the proposal.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"/// The member submit a vote (YES or NO) on the proposal.\n///\n/// Requirements:\n/// * The proposal can be submitted only by the existing members;\n/// * The member can vote on the proposal only once;\n/// * Proposal must exist, the voting period must has started and not expired;\n///\n///  On success replies with [`DaoEvent::SubmitVote`]\nSubmitVote {\n    /// the proposal ID\n    proposal_id: u128,\n    /// the member  a member vote (YES or NO)\n    vote: Vote,\n},\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The right for members to withdraw their capital during the grace period. It can be used when the members don\u2019t agree with the result of the proposal and the acceptance of that proposal can affect their shares. The member can ragequit only if he has voted NO on that proposal.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"/// Withdraws the capital of the member\n///\n/// Requirements:\n/// * `msg::source()` must be DAO member;\n/// * The member must have sufficient amount of shares;\n/// * The latest proposal the member voted YES must be processed;\n///\n///  On success replies with [`DaoEvent::RageQuit`]\nRageQuit {\n    /// The amount of shares the member would like to withdraw\n    amount: u128,\n},\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The proposal processing after the proposal competes during the grace period. If the proposal is accepted, the tribute tokens are deposited into the contract and new shares are minted and issued to the applicant. If the proposal is rejected, the tribute tokens are returned to the applicant.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"/// The proposal processing after the proposal completes during the grace period.\n/// If the proposal is accepted, the indicated amount of tokens are sent to the receiver.\n///\n/// Requirements:\n/// * The previous proposal must be processed;\n/// * The proposal must exist and be ready for processing;\n/// * The proposal must not already be processed.\n///\n/// On success replies with [`DaoEvent::ProcessProposal`]\nProcessProposal {\n    /// the proposal ID\n    proposal_id: u128,\n},\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ability to continue the transaction. \u0428f the transaction has not been completed due to network failure, the user can send a message ",(0,o.kt)("inlineCode",{parentName:"li"},"Continue")," indicating the transaction id that needs to be completed:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"}," /// Continues the transaction if it fails due to lack of gas\n/// or due to an error in the token contract.\n///\n/// Requirements:\n/// * Transaction must exist.\n///\n/// On success replies with the DaoEvent of continued transaction.\nContinue(\n    /// the transaction ID\n    u64,\n),\n")),(0,o.kt)("h2",{id:"consistency-of-contract-states"},"Consistency of contract states"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DAO")," contract interacts with the ",(0,o.kt)("inlineCode",{parentName:"p"},"fungible")," token contract. Each transaction that changes the states of DAO and the fungible token is stored in the state until it is completed. User can complete a pending transaction by sending a message ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue")," indicating the transaction id. The idempotency of the fungible token contract allows to restart a transaction without duplicate changes which guarantees the state consistency of these 2 contracts."),(0,o.kt)("h2",{id:"program-metadata-and-state"},"Program metadata and state"),(0,o.kt)("p",null,"Metadata interface description:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct DaoMetadata;\n\nimpl Metadata for DaoMetadata {\n    type Init = In<InitDao>;\n    type Handle = InOut<DaoAction, DaoEvent>;\n    type Others = ();\n    type Reply = ();\n    type Signal = ();\n    type State = DaoState;\n}\n")),(0,o.kt)("p",null,"To display the full contract state information, the ",(0,o.kt)("inlineCode",{parentName:"p"},"state()")," function is used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\nextern "C" fn state() {\n    msg::reply(\n        unsafe {\n            let dao = DAO.as_ref().expect("Uninitialized dao state");\n            let dao_state: DaoState = dao.into();\n            dao_state\n        },\n        0,\n    )\n    .expect("Failed to share state");\n}\n')),(0,o.kt)("p",null,"To display only necessary certain values from the state, you need to write a separate crate. In this crate, specify functions that will return the desired values from the ",(0,o.kt)("inlineCode",{parentName:"p"},"DaoState")," state. For example - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dao/tree/master/state"},"gear-dapps/dao/state"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[metawasm]\npub trait Metawasm {\n    type State = <DaoMetadata as Metadata>::State;\n\n    fn is_member(account: ActorId, state: Self::State) -> bool {\n        ...\n    }\n\n    fn is_in_whitelist(account: ActorId, state: Self::State) -> bool {\n        ...\n    }\n\n    fn get_proposal_id(state: Self::State) -> u128 {\n        ...\n    }\n\n    fn get_proposal_info(id: u128, state: Self::State) -> Proposal {\n        ...\n    }\n\n    fn get_member_info(account: ActorId, state: Self::State) -> Member {\n        ...\n    }\n}\n")),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("p",null,"The source code of this example of DAO smart contract and the example of an implementation of its testing is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dao-light"},"GitHub"),"."),(0,o.kt)("p",null,"The extended version of DAO that includes admin, membership proposals and delegated voting can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-dapps/dao"},"GitHub"),"."),(0,o.kt)("p",null,"For more details about testing smart contracts written on Gear, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/developing-contracts/testing"},"Program Testing")," article."))}u.isMDXComponent=!0}}]);