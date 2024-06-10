(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>p});var i=t(601),o=t.n(i),r=t(314),a=t.n(r),c=t(417),l=t.n(c),s=new URL(t(85),t.b),d=a()(o()),u=l()(s);d.push([n.id,`html, body {\n    --head-foot-color: #000000;\n    min-width: 600px;\n}\n.footer , .header{\n    text-align: center;\n    background-color: var(--head-foot-color);\n    color: white;\n}\n.header {\n    height: 100px;\n    margin-bottom: 0px;\n    /* border: 2px solid green;\n    display: flex; */\n    /* flex-direction: column; */\n    align-items:baseline;\n}\n.footer {\n    height: 20px;\n    margin-top: -20px;\n}\n#headline {\n    font-size: 48px;\n    position: relative;\n    top: -25px;\n    left: 10px;\n    font-weight: bold;\n}\n#nav {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    /* border: 2px solid red;\n    width: 1000px; */\n    \n}\n.push {\n    margin-left: auto;\n}\n.nav-b {\n    height: 50px;\n    width: 70px;\n}\n#content {\n    background-color: #000;\n}\n#content-c {\n    background-image: url(${u});\n    background-size:fill;\n    height: calc(100vh - 130px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 600px;\n    background-repeat: no-repeat;\n    background-position-x: 50%;\n}\n\n\n/*------------------- Common to all tabs ----------------------- */\n#opaque-d {\n    background-color: black;\n    opacity: .8;\n    color: white;\n    display: flex;\n    justify-content: center;\n    border-radius: 20px;\n}\n\n\n`,""]);const p=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],c=0;c<n.length;c++){var l=n[c],s=i.base?l[0]+i.base:l[0],d=r[s]||0,u="".concat(s," ").concat(d);r[s]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,i);i.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var c=t(r[a]);e[c].references--}for(var l=i(n,o),s=0;s<r.length;s++){var d=t(r[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},85:(n,e,t)=>{n.exports=t.p+"3aaf3e0a30323291a0f4.png"}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=i[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=function(){document.querySelector("#content").innerHTML=' \n        <div id="content-c"> \n            <div id="opaque-d"> \n                <div id="inside-o">\n                    <p id="intro">\n                        Satisfy both your tastebuds and your proclivities here with us at Primal Instincts. \n                    </p>\n                </div>\n            </div>\n        </div>\n    ';const n=document.querySelector("#opaque-d");n.style.textAlign="center",n.style.fontSize="42px",n.style.height="500px",n.style.width="400px",document.querySelector("#inside-o").style.width="200px"};var e=t(72),i=t.n(e),o=t(825),r=t.n(o),a=t(659),c=t.n(a),l=t(56),s=t.n(l),d=t(540),u=t.n(d),p=t(113),f=t.n(p),m=t(208),h={};h.styleTagTransform=f(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=u(),i()(m.A,h),m.A&&m.A.locals&&m.A.locals,console.log("Index reached ig.");const v=document.querySelector("#home"),y=document.querySelector("#menu"),g=document.querySelector("#contact");v.addEventListener("click",(()=>{n()})),y.addEventListener("click",(()=>{!function(){document.querySelector("#content").innerHTML='\n        <div id="content-c"> \n            <div id="opaque-d"> \n                <div id="inside-co">\n\n                    <h1 id="menu-head">Menu</h1>\n                    <div id="item1"> \n                        <p class="item" id="item1-name">Traditional Indulgence</p>\n                        <ul>\n                            <li>Attire: Formal</li>\n                            <li>Table size: 2-8</li>\n                            <li>Includes: Chef\'s Choice 8 Course w/ Wine Pairings</li>\n                        </ul>\n                    </div>\n                    <div id="item2">\n                        <p  class="item" id="item2-name">Hands-On Preparation</p>\n                        <ul>\n                            <li>Attire: Discrete Attire (in addition to Formal)</li>\n                            <li>Table size: 2-3</li>\n                            <li>Includes: Traditional Indulgence + Selection of Main Course & Butcher Options</li>\n                        </ul>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    ';const n=document.querySelector("#opaque-d");n.style.padding="30px 50px 30px 50px",n.style.fontSize="24px",document.querySelector("#menu-head").style.textDecoration="underline",document.querySelectorAll(".item").forEach((n=>{n.style.fontWeight="bold",n.style.fontSize="28px"}))}()})),g.addEventListener("click",(()=>{!function(){document.querySelector("#content").innerHTML='\n        <div id="content-c"> \n            <div id="opaque-d"> \n                <div id="inside-co">\n                \n                    <h1 id="contact-intro"> Contact Us </h1>\n                    <div id="contact1">\n                        <p class="name" id="name1">Hannibal Lector</p>\n                        <ul>\n                            <li>Chef/Butcher/Owner</li>\n                            <li>123-456-7890</li>\n                            <li>Lector@primalinstincts.com</li>\n                        </ul>\n                    </div>\n                    <div id="contact2">\n                        <p class="name" id="name2">William Graham</p>\n                        <ul>\n                            <li>Artisian/Screener</li>\n                            <li>149-420-3282</li>\n                            <li>Graham@primalinstincts.com</li>\n                        </ul>\n\n                    </div>\n                    <div id="contact3">\n                        <p class="name" id="name3">Alana Bloom</p>\n                        <ul>\n                            <li>Hostess/Connections </li>\n                            <li>242-424-1111</li>\n                            <li>Bloom@primalinstincts.com</li>\n                        </ul>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    ';const n=document.querySelector("#opaque-d");n.style.padding="0px 50px 0px 50px",n.style.fontSize="24px",document.querySelector("#contact-intro").style.textDecoration="underline",document.querySelectorAll(".name").forEach((n=>{n.style.fontWeight="bold",n.style.fontSize="28px",n.style.marginBottom="-20px"}))}()})),n()})()})();