(()=>{"use strict";var n={556:(n,e,t)=>{t.d(e,{Z:()=>l});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"body{\n    margin: 0px;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    background-color: rgb(244, 240, 240);\n}\n.main{\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    background-color: black;\n}\n.top{\n    height:100px;\n    min-height: 87px;\n    width: 100%;\n    background-color: rgb(245, 158, 18);\n    background-color: #f42b03;\n    background-image: linear-gradient(316deg, #f42b03 0%, #ffbe0b 74%);\n    background-color: #663dff;\n    background-image: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;  \n}\n.bottom{\n    height: 100%;\n    background-color: rgb(149, 14  0, 140);\n    display: flex;\n    flex-direction: row;\n}\n.left{\n    height: 100%;\n    width: 30%;\n    min-width: 260px;\n    max-width: 260px;\n    background-color: rgb(218, 215, 215);\n    display: flex;\n    flex-direction: column;\n    padding-top: 20px;\n    align-content: center;\n    align-items: center;\n    flex: 1 1 auto;\n}\n.right{\n    position: relative;\n    width: 100%;\n    background-color: rgb(244, 240, 240);\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-items: center;\n    align-items: center;\n    padding-top: 25px;\n\n}\n.tasklist{\n    z-index: 1;\n    columns: 1;\n    margin: 0px;\n    padding: 0px; \n}\n\n@media only screen and (max-width: 830px) {\n    .left {\n      display: none;\n    }\n  }\n\n  @media only screen and (max-height: 830px) {\n    .projectlist {\n      height:20vw\n    }\n  } \n  .option{\n    display: flex;\n    width: 99%;\n    border: 1px solid rgb(218, 215, 215);\n    align-content: center;\n    justify-items: center;\n    flex-direction: row;\n    height: 40px;\n    min-height: 40px;\n    font-size: 17px;\n  }\n\n.projectlist{\n    z-index: 5;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 400px;\n    max-height: 40vh;\n    align-items: center;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n.projectlist::-webkit-scrollbar {\n  width: 20px;\n}\n\n.projectlist::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n.projectlist::-webkit-scrollbar-thumb {\n  background-color: #42403e;\n  border-radius: 20px;\n  border: 6px solid transparent;\n  background-clip: content-box;\n}\n\n.projectlist::-webkit-scrollbar-thumb:hover {\n  background-color: #000000;\n}\n\n.project{\n    position: relative;\n    width: 99%;\n    height: 40px;\n    min-height: 40px;\n    border-radius: 5px;\n    margin-bottom: 15px;\n    background-color: rgb(218, 215, 215);\n    display: flex;\n    align-items: center;\n    font-size: 15px;\n    padding-left: 24%;\n    font-family: myfont;\n}\n.taskform{\n    width: 90%;\n    height: 90%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n.formdiv{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n.dates{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-content: space-between;\n}\n.type{\n    align-items: center;\n}\n.buttons{\n    display: flex;\n    margin-top: 30px;\n}",""]);const l=a},426:(n,e,t)=>{t.d(e,{Z:()=>C});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),l=t(667),c=t.n(l),s=new URL(t(282),t.b),d=new URL(t(307),t.b),p=new URL(t(508),t.b),u=new URL(t(275),t.b),g=new URL(t(939),t.b),f=new URL(t(498),t.b),m=new URL(t(324),t.b),h=new URL(t(678),t.b),b=new URL(t(363),t.b),x=a()(r()),v=c()(s),y=c()(d),k=c()(p),w=c()(u),S=c()(g),L=c()(f),j=c()(m),q=c()(h),E=c()(b);x.push([n.id,`@font-face {\n    font-family: myfont;\n    src: url(${v});\n}\n@font-face {\n    font-family: myfontbold;\n    src: url(${y});\n}\nbody{\n    font-family: myfont;\n}\n#na1, #na2{\n    display: none;\n    visibility: hidden;\n}\np, a, label, legend{\n        color: black;\n        font-family: myfont;\n}\nlegend{\n    font-size: 26px;\n    margin-bottom: 20px;\n    font-family: myfontbold;\n    margin-top: 10px;\n}\n.pheader{\n    font-size: 33px;\n    margin-left: 40px;\n    position: absolute;\n    left: -1%;\n    font-family: myfontbold;\n}\n\n.task{\n    position: relative;\n    width: 60vw;\n    min-width: 400px;\n    max-width: 800px;\n    border-radius:3px;\n    height: 50px;\n    background-color: rgb(255, 255, 255);\n    margin: 17px;\n    margin-left: 0px;\n    margin-right: 0px;\n    display: flex;\n    padding-left: 50px;\n    align-content: center;\n    align-items: center;\n    font-size: 17px;\n    font-family: myfont;\n    box-shadow: 1px 1px 1px 1px black;\n}\n.task:hover{\n    \n    transform: scale(103%);\n    cursor: pointer;\n    \n}\n.ptasks{\n    font-size: 30px;\n    text-align: center;\n}\n.option:hover{\n    background-color: rgb(189, 189, 192);\n    cursor:pointer;\n}\n.project:hover{\n    background-color: rgb(189, 189, 192);\n    cursor:pointer;\n\n    .deleteproject{\n        visibility: visible;\n        background-color: rgb(189, 189, 192);\n\n    }\n}\n.selectedtab{\n    background-color: rgb(189, 189, 192);\n}\n.option a{\n    margin-top: 4%;\n    margin-left: 6px;\n    font-size: 15px;\n}\n.option img{\n    margin-top: 2%;\n    height: 24px;\n    width: 24px;\n    margin-left: 10%;\n}\n.bar{\n    width: 75%;\n    height: 1px;\n    background-color: black;\n    margin-top: 15px;\n    margin-bottom: 20px;\n}\n.header{\n    font-size: 20px;\n    margin-left: 10%;\n    align-self: start;\n    margin-bottom: 20px;\n    font-weight: 700;\n}\n.addproj{\n    background-color: rgb(218, 215, 215);\n    border: none;\n    font-size: 30px;\n}\n.addproj:hover{\n    transform: scale(120%);\n    transition-duration: 0.5s;\n    cursor:pointer;\n}\n.submit:hover{\n    cursor:pointer;\n    background-image: linear-gradient(319deg, #663dff 0%, #aa00ff 87%, #cc4499 100%)\n}\n.invisible{\n    display: none;\n}\n.form{\n    display: flex;\n    flex-direction: row;\n}\n.form input{\n    width: 100px;\n}\n.cname{\n    display: none;\n    border-radius: 6px;\n}\n\n.visible{\n    display: flex;\n}\n.submit{\n    border: none;\n    background-image: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%);\n    height: 35px;\n    border-radius: 0px 5px 5px 0px;\n    font-family: myfont;\n}\n\n#projname{\n    font-family: myfont;\n    all: unset;\n    border: none;\n    padding-left: 8px;\n    background-color: white;\n    font-size: 15px;\n    width: 175px;\n    border-radius: 5px 0px 0px 5px;\n}\n#projname:hover{\n    outline: none;\n}\n\n.addtask:hover{\n    cursor: pointer;\n    transform: scale(110%);\n}\n.addtask{\n    all:unset;\n    font-weight: 550;\n    font-size: 30px;\n    text-align: center;\n    visibility: hidden;\n}\n.showtask{\n    visibility: visible;\n}\ninput:focus,  textarea:focus{\n    border: 1px solid black;\n}\n.optionpane{\n    visibility: hidden;\n    position: absolute;\n    margin-top: 10vh;\n    height: 400px;\n    width: 350px;\n    border-radius: 8px;\n    background: rgba(239, 153, 33);\n    background-color: #f42b03;\n    background-color: #8e8c8c;\n    box-shadow: 0 0 0 1000px rgba(0, 0, 0, .3);\n    box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .3);\n    border: 1px solid rgb(3, 3, 3);\n    display: flex;\n    justify-content: center;\n    z-index: 20;\n}\n.active{\n    visibility: visible;\n    display: flex;\n}\n.inactive{\n    visibility: hidden;\n    display: none;\n}\n.tinput{\n    all: unset;\n    background-color: white;\n    border-radius: 10px;\n    border: 1px solid black;\n}\n#tinput1{\n    text-align: center;\n    width: 50%;\n    margin-bottom: 10px;\n}\n#tinput2{\n    text-align:start;\n    white-space: pre-line;\n    overflow-wrap: break-word;\n    padding: 2px;\n    height: 75px;\n    overflow: hidden;\n    margin-bottom: 10px;\n}\n#tinput3, #tinput4 {\n    width: 110px;\n    align-content: center;\n    padding: 3px;\n    font-size: 13px;\n}\n.tlabel{\n    margin-bottom: 7px;\n}\n.addtasker, .back{\n    width: 30px;\n    height: 37px;\n    border: none;\n    font-size: 30px;\n    background-color: white;\n    width: 60px;\n    border-radius: 10px;\n    margin-left: 5px;\n}\n.back{\n    background-image: url(${k});\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: 50%;\n}\n.addtasker{\n    background-color: rgb(255, 255, 255);\n    font-family: myfont;\n}\n#formdiv5{\n    margin-bottom: 40px;\n}\n.addtasker:hover, .back:hover{\n    transform: scale(105%);\n    cursor: pointer;\n}\n.pages{\n    position: absolute;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    width: 130px;\n    justify-content: space-around;\n    top: 700px;\n}\n.pageforward{\n    height: 25px;\n    width: 25px;\n    background: url(${w});\n    background-size: cover;\n    border: none;\n}\n.pageback{\n    height: 25px;\n    width: 25px;\n    background: url(${S});\n    background-size: cover;\n    border: none;\n}\n.pageback:hover, .pageforward:hover{\n    cursor: pointer;\n    transform: scale(105%);\n}\n.pageno{\n    font-family: myfont;\n}\n.dates2{\n    position: absolute;\n    font-size: 12px;\n    display: flex;\n    flex-direction: column;\n    left: 300px;\n}\n\n.removethis{\n    position: absolute;\n    left: 93%;\n    background: url(${L});\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n    background-size: 90%;\n    background-position: center;\n    background-repeat: no-repeat;\n    border: none;\n\n}\n.favor{\n    -webkit-animation: flip-horizontal-bottom 0.4s ease-in-out both;\n\tanimation: flip-horizontal-bottom 0.4s ease-in-out both;\n    position: absolute;\n    left: 88%;\n    background: url(${j});\n    height: 25px;\n    width: 25px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    border: none;\n}\n.favorited{\n    position: absolute;\n    background: url(${q});\n    background-size: cover;\n    height: 25px;\n    width: 25px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    border: none;\n}\n\n.favor:hover, .removethis:hover, .favotited:hover{\n    cursor:grab;\n    transform: scale(105%);\n}\n\n.deleteproject{\n    background-image: url(${L});\n    height: 15px; width: 15px;\n    background-size: cover;\n    background-color: rgb(218, 215, 215);\n    border: none;\n    position: absolute;\n    left: 84%;\n    visibility: hidden;\n}\n.deleteproject:hover{\n    transform: scale(110%);\n}\n.nothing{\n    visibility: hidden;\n    content: url(${E});\n    position: absolute;\n    left: 42%;\n    bottom: 20%;\n    scale: 70%;\n}\n.see{\n    visibility: visible;\n}\n\n.expand{\n    animation: expand 0.4s 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) ;\n    position: absolute;\n    max-height: 65px;\n    width: 100.5%;\n    background-color: black;\n    left: 0%;\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 1px 1px 1px 1px black;\n    padding-left: 15px;\n    font-size: 14px;\n    inline-size: 100%;\n    overflow-wrap: break-word;\n    padding-bottom: 8px;\n}\n.taskp{\n    height: 67px;\n}\n@media only screen and (max-width: 720px) {\n    .dates2{\n        position: relative;\n        width: 400px;\n        left:100px\n    }\n  }`,""]);const C=x},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],l=0;l<n.length;l++){var c=n[l],s=o.base?c[0]+o.base:c[0],d=i[s]||0,p="".concat(s," ").concat(d);i[s]=d+1;var u=t(p),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var f=r(g,o);o.byIndex=l,e.splice(l,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);e[l].references--}for(var c=o(n,r),s=0;s<i.length;s++){var d=t(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},307:(n,e,t)=>{n.exports=t.p+"assets/fonts/ab.ttf"},282:(n,e,t)=>{n.exports=t.p+"assets/fonts/ar.ttf"},939:(n,e,t)=>{n.exports=t.p+"assets/images/10.png"},275:(n,e,t)=>{n.exports=t.p+"assets/images/11.png"},508:(n,e,t)=>{n.exports=t.p+"assets/images/9.png"},498:(n,e,t)=>{n.exports=t.p+"assets/images/del.png"},324:(n,e,t)=>{n.exports=t.p+"assets/images/favor.png"},678:(n,e,t)=>{n.exports=t.p+"assets/images/favorited.png"},363:(n,e,t)=>{n.exports=t.p+"assets/images/nothing.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),l=t(565),c=t.n(l),d=t(216),p=t.n(d),u=t(589),g=t.n(u),f=t(556),m={};m.styleTagTransform=g(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=t(426),b={};b.styleTagTransform=g(),b.setAttributes=c(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=p(),e()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals,t.p,t.p,t.p,t.p,t(939),t(275),t(498),t(324),t(678),t(363);let x,v=0,y=!1,k=[],w=0,S=1,L=0,j=[];const q=9;let E,C,z=!0;function N(){let n=k.findIndex((n=>n.name==x.textContent));return k[n]}function I(n){let e=n.textContent,t=N().tasks,o=t.findIndex((n=>e.includes(n.name)));return t.forEach((n=>{})),o}function T(n,e,t,o){return this.name=n,this.desc=e,this.date=t,this.due=o,this.priority=!1,this}function A(){let n=document.querySelector(".addproj"),e=document.querySelector(".cname");n.classList.toggle("invisible"),e.classList.toggle("visible")}function M(n){n.addEventListener("click",(function(e){if(x==n){n.classList.toggle("selectedtab"),z=!0;let e=document.querySelector(".addtask");switch(e.classList.contains("showtask")&&e.classList.remove("showtask"),L){case 0:B();break;case 1:case 2:break;case 3:Q()}return void(x=void 0)}if(!k)return;R(),z=!1,x=n,n.classList.toggle("selectedtab");let t=N(),o=document.querySelector(".addtask");switch(o.classList.contains("showtask")||o.classList.add("showtask"),L){case 0:Z(t);break;case 1:case 2:break;case 3:Q()}O(t)}))}function O(n){let e=document.querySelector(".pageno");w=0,S=Math.ceil(n.tasks.length/q),S<=0&&(S=1),e.textContent=w+1+" of "+S}function $(n){let e=document.querySelector(".pageno");w=0,S=Math.ceil(n.length/q),S<=0&&(S=1),e.textContent=w+1+" of "+S}function R(){if(!k)return;let n=document.querySelectorAll(".project");for(let e of n)e.classList.contains("selectedtab")&&e.classList.remove("selectedtab")}function U(){null!=B&&localStorage.setItem("alltasks",JSON.stringify(j)),null!=x&&localStorage.setItem("currentproject",JSON.stringify(x)),localStorage.setItem("projectchanged",JSON.stringify(y)),localStorage.setItem("projectindex",JSON.stringify(v)),null!=k&&localStorage.setItem("projectlist",JSON.stringify(k))}function J(n){let e=document.createElement("div");e.classList.toggle("task"),e.textContent=n.name;let t=document.createElement("div");t.classList.toggle("dates2");let o=document.createElement("a");o.classList.toggle("added");let r=document.createElement("a");r.classList.toggle("due"),o.textContent="Added: "+n.date,n.due&&(r.textContent="Deadline: "+n.due),t.appendChild(o),t.appendChild(r),e.appendChild(t);let i=document.createElement("button");i.classList.toggle("removethis");let a=document.createElement("button");return a.classList.toggle("favor"),1==n.priority&&a.classList.toggle("favorited"),a.addEventListener("click",(function(n){!function(n){n.classList.toggle("favorited");let e=N(),t=I(n.parentNode);e.tasks[t].priority=!0;let o=j.findIndex((n=>n.name==e.tasks[t].name));j[o]=e.tasks[t],U()}(a),n.stopPropagation()})),i.addEventListener("click",(function(n){!function(n){if(z)return;let e=N(),t=I(n.parentNode);n.parentNode.parentNode.removeChild(n.parentNode),e.tasks.splice(t,1),j=[],k.forEach((n=>{n.tasks.forEach((n=>{j.push(n)}))})),U(),Z(e),O(e)}(i),n.stopPropagation()})),e.addEventListener("click",(function(n){!function(n){let e,t="";if(z){for(let e=0;e<n.childNodes.length;++e){if(n.childNodes[e].nodeType===Node.TEXT_NODE){t+=n.childNodes[e].textContent;break}break}let o=j.findIndex((n=>n.name==t));e=j[o]}else{let t=N();e=I(n.parentNode),e=t.tasks[e]}let o=document.createElement("div");o.classList.toggle("expand"),null==E?(E=n,C=o):E.removeChild(C);let r=document.createElement("p");r.classList.toggle("taskp"),r.textContent=e.desc,o.appendChild(r),o.addEventListener("click",(function(n){E.removeChild(C),C=void 0,E=void 0,n.stopPropagation()})),n.appendChild(o),E=n,C=o}(e)})),e.appendChild(i),e.appendChild(a),e}function P(){document.querySelector(".optionpane").classList.toggle("active");let n=document.querySelector("#tinput3"),e=new Date,t=e.getMonth()+1,o=e.getDate();t<10&&(t="0"+t),o<10&&(o="0"+o);let r=e.getFullYear()+"-"+t+"-"+o;n.value=r}function Z(n){document.querySelector(".addtask");let e=document.querySelector(".right"),t=(document.querySelectorAll(".task"),document.querySelector(".tasklist"));t.innerHTML="";let o=0;if(n.tasks.length<=0)X();else{for(let e=0;e<q;e++){if(o>=n.tasks.length)return;let e=J(n.tasks[n.tasks.length-(o+1)]);o+=1,t.appendChild(e),Y()}e.appendChild(t)}}function D(n,e,t){let o=N(),r=document.querySelector(".right"),i=(document.querySelectorAll(".task"),document.querySelector(".tasklist"));if(i.innerHTML="",z)for(let t=n;t<e&&!(t>=j.length);t++){let n=J(j[j.length-(t+1)]);i.appendChild(n)}else for(let t=n;t<e&&!(t>=o.tasks.length);t++){let n=J(o.tasks[o.tasks.length-(t+1)]);i.appendChild(n)}r.appendChild(i);let a=document.querySelector(".pageno");t&&(a.textContent=w+" of "+S),t||(a.textContent=w+1+" of "+S),Y()}function H(n){let e=document.querySelector(".right"),t=document.querySelector(".tasklist");t.innerHTML="";let o=0;if(null!=n){for(let e=0;e<q;e++){if(o>=n.length)return;let e=J(n[n.length-(o+1)]);o+=1,t.appendChild(e)}e.appendChild(t),Y()}else X()}function _(){0!=w&&(D(q*(w-1),q*w,!0),w-=1)}function F(){w>=S-1||(w+=1,D(q*w,q*(w+1),!1))}function B(){L=0,null!=j?(H(j),$(j)):X()}function Q(){L=3;let n=[];z?j.forEach((e=>{1==e.priority&&n.push(e)})):N().tasks.forEach((e=>{1==e.priority&&n.push(e)})),H(n),$(n)}function V(n){if(null==k)return;console.log(n);let e=k.findIndex((e=>e.name==n.parentNode.textContent));return console.log("er"),k[e]==x&&(z=!0,x=void 0,B()),k.splice(e,1),console.log(e),n.parentNode.parentNode.removeChild(n.parentNode),U(),n}function X(){let n=document.querySelector(".nothing");n.classList.contains("see")||n.classList.add("see")}function Y(){let n=document.querySelector(".nothing");n.classList.contains("see")&&n.classList.remove("see")}localStorage.getItem("projectlist")?(j=JSON.parse(localStorage.getItem("alltasks")),x=JSON.parse(localStorage.getItem("currentproject")),y=JSON.parse(localStorage.getItem("projectchanged")),v=JSON.parse(localStorage.getItem("projectindex")),k=JSON.parse(localStorage.getItem("projectlist")),(k.length<=0||j.length<=0)&&X(),k.length<=0||(k.forEach((n=>{let e=document.querySelector(".projectlist"),t=document.createElement("div"),o=document.createElement("button");o.classList.toggle("deleteproject"),o.addEventListener("click",(function(n){V(o)})),t.classList.toggle("project"),t.textContent=n.name,t.appendChild(o),M(t),e.appendChild(t)})),B()),console.log("loading old")):(U(),X(),console.log("loading new")),window.addEventListener("load",(n=>{document.querySelector("body").addEventListener("keydown",(function(n){let e=n.key;"ArrowLeft"==e&&_(),"ArrowRight"==e&&F()})),B(),document.querySelector(".addproj").addEventListener("click",(function(n){A()})),document.querySelector(".submit").addEventListener("click",(function(n){""!=document.querySelector("#projname").value&&" "!=document.querySelector("#projname").value&&function(){let n=document.querySelector("#projname").value;for(let e=0;e<k.length;e++)if(k[e].name==n)return!1;return function(){let n=document.querySelector(".projectlist"),e=document.createElement("div"),t=document.querySelector("#projname"),o=document.createElement("button");o.classList.toggle("deleteproject"),e.classList.toggle("project"),e.textContent=t.value,t.value="",e.appendChild(o),n.appendChild(e),e.classList.toggle("selectedtab"),M(e),k.push({name:e.textContent,link:e,tasks:[],pagecount:1,currentpage:1}),o.addEventListener("click",(function(n){V(o),s.stopPropagation(n)})),v+=1,R(),x=e,x.classList.toggle("selectedtab");let r=N(),i=document.querySelector(".addtask");i.classList.contains("showtask")||i.classList.add("showtask"),Z(r),U(),e.textContent}(),!0}()&&A()}));let e=document.querySelectorAll(".option"),t=document.querySelector(".start");e.forEach((n=>{n.addEventListener("click",(function(e){n!=t&&n!=t&&(n.classList.toggle("selectedtab"),t.classList.toggle("selectedtab"),t=n)}))})),document.querySelector(".addtask").addEventListener("click",(function(n){P()})),document.querySelector(".back").addEventListener("click",(function(n){P()}));var o=document.querySelector(".taskform");o.addEventListener("submit",(function(n){n.preventDefault()})),document.querySelector(".addtasker").addEventListener("click",(function(n){console.log("hola"),0!=o.checkValidity()&&(P(),function(){document.querySelector(".taskform");let n=document.querySelector("#tinput1").value;const e=document.querySelector("#tinput2").value,t=document.querySelector("#tinput3").value,o=document.querySelector("#tinput4").value;document.querySelector("#tinput1").value=null,document.querySelector("#tinput2").value="",document.querySelector("#tinput4").value="";let r=N();r.tasks.push(new T(n,e,t,o)),j.push(new T(n,e,t,o)),U(),Z(r),O(r)}())}))})),document.querySelector(".pageback").addEventListener("click",(function(n){_()})),document.querySelector(".pageforward").addEventListener("click",(function(n){F()})),document.querySelector("#alltasks").addEventListener("click",(function(n){B()})),document.querySelector("#star").addEventListener("click",(function(n){Q()}))})()})();