"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[85518],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return k}});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),c=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(a),k=r,x=u["".concat(o,".").concat(k)]||u[k]||d[k]||n;return a?l.createElement(x,s(s({ref:t},i),{},{components:a})):l.createElement(x,s({ref:t},i))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<n;c++)s[c]=a[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37538:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var l=a(87462),r=a(63366),n=(a(67294),a(3905)),s=["components"],p={id:"all",title:"All Releases",sidebar_label:"All Releases",slug:"/"},o=void 0,c={unversionedId:"all",id:"all",title:"All Releases",description:"Pulsar Release Notes",source:"@site/release-notes/all.md",sourceDirName:".",slug:"/",permalink:"/release-notes/",tags:[],version:"current",frontMatter:{id:"all",title:"All Releases",sidebar_label:"All Releases",slug:"/"},sidebar:"docs",next:{title:"Timeline",permalink:"/release-notes/timeline"}},i={},d=[{value:"Pulsar Release Notes",id:"pulsar-release-notes",level:2},{value:"2.9.x",id:"29x",level:4},{value:"2.8.x",id:"28x",level:4},{value:"2.7.x",id:"27x",level:4},{value:"2.6.x",id:"26x",level:4},{value:"2.5.x",id:"25x",level:4},{value:"Client Release Notes",id:"client-release-notes",level:2},{value:"Java",id:"java",level:3},{value:"2.9.x",id:"29x-1",level:4},{value:"2.8.x",id:"28x-1",level:4},{value:"2.7.x",id:"27x-1",level:4},{value:"2.6.x",id:"26x-1",level:4},{value:"2.5.x",id:"25x-1",level:4},{value:"Python",id:"python",level:3},{value:"2.9.x",id:"29x-2",level:4},{value:"2.8.x",id:"28x-2",level:4},{value:"2.7.x",id:"27x-2",level:4},{value:"2.6.x",id:"26x-2",level:4},{value:"2.5.x",id:"25x-2",level:4},{value:"C++",id:"c",level:3},{value:"2.9.x",id:"29x-3",level:4},{value:"2.8.x",id:"28x-3",level:4},{value:"2.7.x",id:"27x-3",level:4},{value:"2.6.x",id:"26x-3",level:4},{value:"2.5.x",id:"25x-3",level:4},{value:"WebSocket",id:"websocket",level:3},{value:"2.8.x",id:"28x-4",level:4},{value:"2.7.x",id:"27x-4",level:4},{value:"2.6.x",id:"26x-4",level:4},{value:"2.5.x",id:"25x-4",level:4},{value:"Go",id:"go",level:3},{value:"0.8.x",id:"08x",level:4},{value:"0.7.x",id:"07x",level:4},{value:"0.6.x",id:"06x",level:4},{value:"0.5.x",id:"05x",level:4},{value:"0.4.x",id:"04x",level:4},{value:"0.3.x",id:"03x",level:4},{value:"0.2.x",id:"02x",level:4},{value:"0.1.x",id:"01x",level:4},{value:"NodeJs",id:"nodejs",level:3},{value:"1.6.x",id:"16x",level:4},{value:"1.5.x",id:"15x",level:4},{value:"1.4.x",id:"14x",level:4},{value:"1.3.x",id:"13x",level:4},{value:"1.2.x",id:"12x",level:4},{value:"1.1.x",id:"11x",level:4},{value:"1.0.x",id:"10x",level:4},{value:"C#",id:"c-1",level:3},{value:"2.3.x",id:"23x",level:4},{value:"2.2.x",id:"22x",level:4},{value:"2.1.x",id:"21x",level:4},{value:"2.0.x",id:"20x",level:4},{value:"1.1.x",id:"11x-1",level:4},{value:"1.0.x",id:"10x-1",level:4},{value:"0.11.x",id:"011x",level:4},{value:"0.10.x",id:"010x",level:4},{value:"0.9.x",id:"09x",level:4}],u={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pulsar-release-notes"},"Pulsar Release Notes"),(0,n.kt)("h4",{id:"29x"},"2.9.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.9.1"},"2.9.1"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.9.0"},"2.9.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"28x"},"2.8.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.8.2"},"2.8.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.8.1"},"2.8.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"27x"},"2.7.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.7.4"},"2.7.4"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.7.3"},"2.7.3"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.7.2"},"2.7.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.7.1"},"2.7.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"26x"},"2.6.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.6.4"},"2.6.4"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.6.3"},"2.6.3"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.6.2"},"2.6.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.6.1"},"2.6.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"25x"},"2.5.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.5.2"},"2.5.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-2.5.1"},"2.5.1"),"\u2002","\u2002","  "),(0,n.kt)("h2",{id:"client-release-notes"},"Client Release Notes"),(0,n.kt)("h3",{id:"java"},"Java"),(0,n.kt)("h4",{id:"29x-1"},"2.9.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.9.1"},"2.9.1"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.9.0"},"2.9.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"28x-1"},"2.8.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.8.2"},"2.8.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.8.1"},"2.8.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"27x-1"},"2.7.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.7.4"},"2.7.4"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.7.3"},"2.7.3"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.7.2"},"2.7.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.7.1"},"2.7.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"26x-1"},"2.6.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.6.4"},"2.6.4"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.6.3"},"2.6.3"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.6.2"},"2.6.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.6.1"},"2.6.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"25x-1"},"2.5.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.5.2"},"2.5.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-java-2.5.1"},"2.5.1"),"\u2002","\u2002","  "),(0,n.kt)("h3",{id:"python"},"Python"),(0,n.kt)("h4",{id:"29x-2"},"2.9.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-python-2.9.0"},"2.9.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"28x-2"},"2.8.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-python-2.8.2"},"2.8.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-python-2.8.1"},"2.8.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"27x-2"},"2.7.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-python-2.7.4"},"2.7.4"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-python-2.7.2"},"2.7.2"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"26x-2"},"2.6.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-python-2.6.2"},"2.6.2"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"25x-2"},"2.5.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-python-2.5.2"},"2.5.2"),"\u2002","\u2002","  "),(0,n.kt)("h3",{id:"c"},"C++"),(0,n.kt)("h4",{id:"29x-3"},"2.9.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-cpp-2.9.0"},"2.9.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"28x-3"},"2.8.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-cpp-2.8.2"},"2.8.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-cpp-2.8.1"},"2.8.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"27x-3"},"2.7.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-cpp-2.7.4"},"2.7.4"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-cpp-2.7.3"},"2.7.3"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-cpp-2.7.2"},"2.7.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-cpp-2.7.1"},"2.7.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"26x-3"},"2.6.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-cpp-2.6.2"},"2.6.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-cpp-2.6.1"},"2.6.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"25x-3"},"2.5.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-cpp-2.5.2"},"2.5.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-cpp-2.5.1"},"2.5.1"),"\u2002","\u2002","  "),(0,n.kt)("h3",{id:"websocket"},"WebSocket"),(0,n.kt)("h4",{id:"28x-4"},"2.8.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-websocket-2.8.2"},"2.8.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-websocket-2.8.1"},"2.8.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"27x-4"},"2.7.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-websocket-2.7.3"},"2.7.3"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-websocket-2.7.2"},"2.7.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-websocket-2.7.1"},"2.7.1"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"26x-4"},"2.6.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-websocket-2.6.3"},"2.6.3"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-websocket-2.6.2"},"2.6.2"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"25x-4"},"2.5.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/client-websocket-2.5.1"},"2.5.1"),"\u2002","\u2002","  "),(0,n.kt)("h3",{id:"go"},"Go"),(0,n.kt)("h4",{id:"08x"},"0.8.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-go-0.8.1"},"v0.8.1"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-go-0.8.0"},"v0.8.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"07x"},"0.7.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-go-0.7.0"},"v0.7.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"06x"},"0.6.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-go-0.6.0"},"v0.6.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"05x"},"0.5.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-go-0.5.0"},"v0.5.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"04x"},"0.4.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-go-0.4.0"},"v0.4.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"03x"},"0.3.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-go-0.3.0"},"v0.3.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"02x"},"0.2.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-go-0.2.0"},"v0.2.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"01x"},"0.1.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-go-0.1.1"},"v0.1.1"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-go-0.1.0"},"v0.1.0"),"\u2002","\u2002","  "),(0,n.kt)("h3",{id:"nodejs"},"NodeJs"),(0,n.kt)("h4",{id:"16x"},"1.6.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-node-1.6.2"},"v1.6.2"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"15x"},"1.5.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-node-1.5.0"},"v1.5.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"14x"},"1.4.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-node-1.4.1"},"v1.4.1"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-node-1.4.0"},"v1.4.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"13x"},"1.3.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-node-1.3.2"},"v1.3.2"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-node-1.3.1"},"v1.3.1"),"\u2002","\u2002",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-node-1.3.0"},"v1.3.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"12x"},"1.2.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-node-1.2.0"},"v1.2.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"11x"},"1.1.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-node-1.1.0"},"v1.1.0"),"\u2002","\u2002","  "),(0,n.kt)("h4",{id:"10x"},"1.0.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-client-node-1.0.0"},"v1.0.0"),"\u2002","\u2002","  "),(0,n.kt)("h3",{id:"c-1"},"C#"),(0,n.kt)("h4",{id:"23x"},"2.3.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-2.3.0"},"2.3.0"),"\u2002","\u2002"),(0,n.kt)("h4",{id:"22x"},"2.2.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-2.2.0"},"2.2.0"),"\u2002","\u2002"),(0,n.kt)("h4",{id:"21x"},"2.1.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-2.1.0"},"2.1.0"),"\u2002","\u2002"),(0,n.kt)("h4",{id:"20x"},"2.0.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-2.0.1"},"2.0.1"),"\u2002","\u2002","\n",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-2.0.0"},"2.0.0"),"\u2002","\u2002"),(0,n.kt)("h4",{id:"11x-1"},"1.1.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-1.1.2"},"1.1.2"),"\u2002","\u2002","\n",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-1.1.1"},"1.1.1"),"\u2002","\u2002","\n",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-1.1.0"},"1.1.0"),"\u2002","\u2002"),(0,n.kt)("h4",{id:"10x-1"},"1.0.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-1.0.2"},"1.0.2"),"\u2002","\u2002","\n",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-1.0.1"},"1.0.1"),"\u2002","\u2002","\n",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-1.0.0"},"1.0.0"),"\u2002","\u2002"),(0,n.kt)("h4",{id:"011x"},"0.11.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-0.11.0"},"0.11.0"),"\u2002","\u2002"),(0,n.kt)("h4",{id:"010x"},"0.10.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-0.10.1"},"0.10.1"),"\u2002","\u2002","\n",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-0.10.0"},"0.10.0"),"\u2002","\u2002"),(0,n.kt)("h4",{id:"09x"},"0.9.x"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-0.9.7"},"0.9.7"),"\u2002","\u2002","\n",(0,n.kt)("a",{parentName:"p",href:"/release-notes/docs/pulsar-cs-0.9.6"},"0.9.6"),"\u2002","\u2002"))}k.isMDXComponent=!0}}]);