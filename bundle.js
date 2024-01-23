(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(537),s=n.n(r),o=n(645),i=n.n(o)()(s());i.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  background-color: gray;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,sBAAsB;AACxB",sourcesContent:["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  background-color: gray;\n}"],sourceRoot:""}]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var h=this[a][0];null!=h&&(i[h]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),t.push(c))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(s," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],a=0;a<e.length;a++){var h=e[a],l=r.base?h[0]+r.base:h[0],c=o[l]||0,u="".concat(l," ").concat(c);o[l]=c+1;var d=n(u),f={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var p=s(f,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var o=r(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var a=n(o[i]);t[a].references--}for(var h=r(e,s),l=0;l<o.length;l++){var c=n(o[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=h}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),s=n.n(r),o=n(569),i=n.n(o),a=n(565),h=n.n(a),l=n(216),c=n.n(l),u=n(589),d=n.n(u),f=n(426),p={};p.styleTagTransform=d(),p.setAttributes=h(),p.insert=i().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=c(),t()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;class v{constructor(e){this.value=e,this.next=null}}class x{constructor(e=null){this.head=e}append(e){const t=new v(e);null===this.head?this.head=t:this.tailNode.next=t}prepend(e){const t=new v(e);t.next=this.head,this.head=t}get size(){if(!this.head)return new Error("List is empty.");let e=0,t=this.head;for(;t;)e+=1,t=t.next;return e}get headNode(){return this.head?this.head:new Error("List is empty.")}get tailNode(){if(!this.head)return new Error("List is empty.");let e=this.head;if(e)for(;e.next;)e=e.next;return e}getNodeAt(e){if(this.head&&0===e)return this.head;if(!this.head)return new Error("List is empty.");let t=0,n=this.head.next;for(;n;){if(t+=1,e===t)return n;n=n.next}return new Error(`Node at index ${e} does not exist.`)}pop(){if(!this.head)return new Error("The list is empty.");let e=this.head,t=e;for(;null!==e.next;)t=e,e=e.next;return t.next=null,t===e&&(t=null,this.head=null),t}contains(e){let t=this.head;for(;t;){if(t.value===e)return!0;t=t.next}return!1}indexOf(e){if(!this.head)return new Error("The list is empty.");let t=this.head,n=0;for(;t;){if(t.value===e)return n;t=t.next,n+=1}return new Error("There are no nodes in the list with the searched value.")}toString(){if(!this.head)return new Error("The list is empty.");let e=this.head,t="";for(;e;){const n=`( ${e.value} ) => `;t=t.concat(n),e=e.next}return t.concat("null")}insertAt(e,t){const n=new v(e);let r=this.head,s=r,o=0,i=!1;for(;r;)o===t&&(s.next=n,n.next=r,i=!0),s=r,r=r.next,o+=1;return i?n:new Error("Index is outside of the linked list boundries.")}removeAt(e){if(!this.head)return new Error("The list is empty.");if(0===e){const e=this.head;return this.head=this.head.next,e.next=null,e}let t,n=this.head,r=null,s=0,o=!1;for(;n;){if(s===e){r.next=n.next,n.next=null,t=n,o=!0;break}r=n,n=n.next,s+=1}return o?t:new Error("Index is outside of the linked list boundaries.")}clear(){return this.head?(this.head=null,this.head):new Error("The list is empty.")}}class g{#e=0;constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16;this.table=new Array(e),this.tableLength=e}static#t(e){let t=0;for(let n=0;n<e.length;n+=1)t=51*t+e.charCodeAt(n);return t}#n(e){const t=this.table;this.tableLength=e,this.#e=0,this.table=new Array(e),t.forEach((e=>{if(e){let t=e.head;for(;t;)this.set(t.value),t=t.next}}))}set(e){const t=g.#t(e)%this.tableLength;this.table[t]?(this.table[t].append(e),this.#e+=1):this.table[t]||(this.table[t]=new x,this.table[t].append(e),this.#e+=1),this.#e/this.tableLength>.75&&this.#n(2*this.tableLength)}has(e){const t=g.#t(e)%this.tableLength;let n=this.table[t]?.head;for(;n;){if(n.value===e)return!0;n=n.next}return!1}remove(e){const t=g.#t(e)%this.tableLength,n=this.table[t];let r=n?.head;for(;r;){if(r.value===e){const e=n.indexOf(r.value);return n.removeAt(e),this.#e-=1,!0}r=r.next}return!1}get length(){let e=0;return this.table.forEach((t=>{if(t){let n=t.head;for(;n;)e+=1,n=n.next}})),e}clear(){this.table=[]}get keys(){const e=[];return this.table.forEach((t=>{if(t){let n=t.head;for(;n;)e.push(n.value),n=n.next}})),e}}const y=new g;y.set("firstKey"),y.set("secondKey"),y.set("thirdKey"),y.set("fourthKey"),y.set("fifthKey"),console.log(y),console.log(y.has("firstKey")),console.log(y.has("sixthKey")),y.remove("thirdKey"),console.log(y),console.log(y.length),console.log(y.keys)})()})();
//# sourceMappingURL=bundle.js.map