"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,h=u["".concat(s,".").concat(k)]||u[k]||c[k]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Backup and Restore",sidebar_position:4},o="Backup and restore the node",l={unversionedId:"node/backup-restore",id:"node/backup-restore",title:"Backup and restore the node",description:"Data structure",source:"@site/docs/node/backup-restore.md",sourceDirName:"node",slug:"/node/backup-restore",permalink:"/docs/node/backup-restore",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/node/backup-restore.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Backup and Restore",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Node Monitoring",permalink:"/docs/node/telemetry"},next:{title:"Dev Net Mode",permalink:"/docs/node/dev-net"}},s={},d=[{value:"Data structure",id:"data-structure",level:2},{value:"Chains",id:"chains",level:3},{value:"Database",id:"database",level:3},{value:"Network key",id:"network-key",level:3},{value:"Moving the node",id:"moving-the-node",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backup-and-restore-the-node"},"Backup and restore the node"),(0,r.kt)("h2",{id:"data-structure"},"Data structure"),(0,r.kt)("p",null,"Gear node stores its data in a dedicated directory."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.local/share/gear")),(0,r.kt)("li",{parentName:"ul"},"macOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Application Support/gear")),(0,r.kt)("li",{parentName:"ul"},"Windows: ",(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\gear.exe"))),(0,r.kt)("p",null,"For example if you run the node as the root user on Linux (",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"/root"),") the absolute path of node's data directory will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/root/.local/share/gear\n")),(0,r.kt)("p",null,"Let's explore the data that the node stores in this directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 gear\n    \u2514\u2500\u2500 chains\n        \u251c\u2500\u2500 dev\n        \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n        \u251c\u2500\u2500 gear_staging_testnet_v5\n        \u2502   \u251c\u2500\u2500 db\n        \u2502   \u2502\xa0\xa0 \u2514\u2500\u2500 full\n        \u2502   \u251c\u2500\u2500 keystore\n        \u2502   \u2514\u2500\u2500 network\n        \u2514\u2500\u2500 vara_network\n            \u251c\u2500\u2500 db\n            \u2502\xa0\xa0 \u2514\u2500\u2500 full\n            \u251c\u2500\u2500 keystore\n            \u2514\u2500\u2500 network\n")),(0,r.kt)("h3",{id:"chains"},"Chains"),(0,r.kt)("p",null,"The node can connect to different chains. The chain can be selected using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain")," argument. The default chain is the staging test network at the moment. Its data is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"gear/chains/gear_staging_testnet_v5")," directory."),(0,r.kt)("p",null,"If you connect to the Vara network, the chain subdirectory name will be ",(0,r.kt)("inlineCode",{parentName:"p"},"vara_network")," resulting in the ",(0,r.kt)("inlineCode",{parentName:"p"},"gear/chains/vara_network")," path."),(0,r.kt)("p",null,"If you start the node with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dev")," argument, the virtual network in development mode will run with the data stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"gear/chains/dev")," directory."),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("p",null,"The database keeps the blockchain state in the local node storage. It synchronizes with other nodes over a peer-to-peer protocol. One can choose the DB format using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--database")," argument. Possible options are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rocksdb")," (default): use RocksDB as database engine, data is stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"<chain>/db/full")," subdirectory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paritydb"),": use ParityDB as database engine, data is stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"<chain>/paritydb/full")," subdirectory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paritydb-experimental"),": deprecated experimental mode of the ParityDB engine (will be removed in future releases), data is stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"<chain>/paritydb/full")," subdirectory.")),(0,r.kt)("p",null,"Note that the database contents depends on the pruning mode of the node. By default the node keeps only the last 256 blocks. To keep all the blocks use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning=archive")," argument when running the node."),(0,r.kt)("p",null,"The database can be deleted and synchronized from scratch at any time. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"gear purge-chain")," command to completely delete the DB."),(0,r.kt)("h3",{id:"network-key"},"Network key"),(0,r.kt)("p",null,"The network private key is used to calculate the unique peer identifier (started with ",(0,r.kt)("inlineCode",{parentName:"p"},"12D3KooW"),"). This key is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"<chain>/network/secret_ed25519")," file. The key file is the binary file containing 32 bytes of the Ed25519 (by default) private key. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"hexdump")," command to read the key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"hexdump -e '1/1 \"%02x\"' /root/.local/share/gear/chains/gear_staging_testnet_v5/network/secret_ed25519\n\n# 42bb2fdd46edfa4f41a5f0f9c1a5a1d407a39bafbce6f07456a2c8d9963c8f5c\n")),(0,r.kt)("p",null,"You can override this key by running the node with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-key")," argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gear --node-key=42bb2fdd46edfa4f41a5f0f9c1a5a1d407a39bafbce6f07456a2c8d9963c8f5c\n\n# Discovered new external address for our node: /ip4/127.0.0.1/tcp/30333/ws/p2p/12D3KooWMRApe2S5QMdhHwmcDapDxZ7xf2Xa3z2HfCCYoHTmjiXV\n")),(0,r.kt)("p",null,"If there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-key")," argument, the node uses the key from the ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_ed25519")," file. If it does not exist, it is created with a newly generated secret key."),(0,r.kt)("p",null,"The network key file cannot be recovered if lost. Therefore, you are to keep it (or the private key itself) to have the possibility to run the node with the same peer ID."),(0,r.kt)("h2",{id:"moving-the-node"},"Moving the node"),(0,r.kt)("p",null,"To move the node to a new server you are to backup then restore the following (provided paths are for default Staging Testnet V5 node's parameters):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The network private key of the node:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Linux: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.local/share/gear/chains/gear_staging_testnet_v5/network/secret_ed25519")),(0,r.kt)("li",{parentName:"ul"},"macOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Application Support/gear/chains/gear_staging_testnet_v5/network/secret_ed25519")),(0,r.kt)("li",{parentName:"ul"},"Windows: ",(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\gear.exe\\chains\\gear_staging_testnet_v5\\network\\secret_ed25519")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(optional) The database:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Linux: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.local/share/gear/chains/gear_staging_testnet_v5/db/full")),(0,r.kt)("li",{parentName:"ul"},"macOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Application Support/gear/chains/gear_staging_testnet_v5/db/full")),(0,r.kt)("li",{parentName:"ul"},"Windows: ",(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\gear.exe\\chains\\gear_staging_testnet_v5\\db\\full")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(optional) The service configuration if you've configured the node as a service:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Linux: ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/systemd/system/gear-node.service"))))),(0,r.kt)("p",null,"If you don't backup the database, you can always synchronize it from scratch, but keep in mind that this process may take some time."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to stop the node before backing up the database. Otherwise you can get a corrupted database."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl stop gear-node\n"))))}c.isMDXComponent=!0}}]);