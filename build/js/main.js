(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(n,t){var r=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(n,t,r){var e=r(2);n.exports=function(n){if(!e(n))throw TypeError(n+" is not an object!");return n}},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on  "+n);return n}},function(n,t){var r=Math.ceil,e=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?e:r)(n)}},function(n,t){var r=n.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},function(n,t,r){var e=r(29),o=r(33);n.exports=r(7)?function(n,t,r){return e.f(n,t,o(1,r))}:function(n,t,r){return n[t]=r,n}},function(n,t,r){n.exports=!r(8)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,t,r){var e=r(10)("wks"),o=r(11),i=r(0).Symbol,c="function"==typeof i;(n.exports=function(n){return e[n]||(e[n]=c&&i[n]||(c?i:o)("Symbol."+n))}).store=e},function(n,t,r){var e=r(5),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(n.exports=function(n,t){return i[n]||(i[n]=void 0!==t?t:{})})("versions",[]).push({version:e.version,mode:r(24)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(n,t){var r=0,e=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++r+e).toString(36))}},function(n,t,r){"use strict";var e,o,i=r(27),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,s=(e=/a/,o=/b*/g,c.call(e,"a"),c.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),f=void 0!==/()??/.exec("")[1];(s||f)&&(a=function(n){var t,r,e,o,a=this;return f&&(r=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),s&&(t=a.lastIndex),e=c.call(a,n),s&&e&&(a.lastIndex=a.global?e.index+e[0].length:t),f&&e&&e.length>1&&u.call(e[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)})),e}),n.exports=a},function(n,t,r){var e=r(0),o=r(6),i=r(34),c=r(11)("src"),u=r(35),a=(""+u).split("toString");r(5).inspectSource=function(n){return u.call(n)},(n.exports=function(n,t,r,u){var s="function"==typeof r;s&&(i(r,"name")||o(r,"name",t)),n[t]!==r&&(s&&(i(r,c)||o(r,c,n[t]?""+n[t]:a.join(String(t)))),n===e?n[t]=r:u?n[t]?n[t]=r:o(n,t,r):(delete n[t],o(n,t,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||u.call(this)}))},function(n,t){function r(n,t,r,e,o,i,c){try{var u=n[i](c),a=u.value}catch(n){return void r(n)}u.done?t(a):Promise.resolve(a).then(e,o)}n.exports=function(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var c=n.apply(t,e);function u(n){r(c,o,i,u,a,"next",n)}function a(n){r(c,o,i,u,a,"throw",n)}u(void 0)}))}}},function(n,t,r){n.exports={headline:"headline___3F3fC",actions:"actions___2ohA0",actionsWrapper:"actionsWrapper___3qJ3I"}},function(n,t,r){"use strict";var e=r(1),o=r(17),i=r(18),c=r(4),u=r(19),a=r(21),s=Math.max,f=Math.min,l=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;r(25)("replace",2,(function(n,t,r,h){return[function(e,o){var i=n(this),c=null==e?void 0:e[t];return void 0!==c?c.call(e,i,o):r.call(String(i),e,o)},function(n,t){var o=h(r,n,this,t);if(o.done)return o.value;var l=e(n),p=String(this),v="function"==typeof t;v||(t=String(t));var g=l.global;if(g){var x=l.unicode;l.lastIndex=0}for(var y=[];;){var b=a(l,p);if(null===b)break;if(y.push(b),!g)break;""===String(b[0])&&(l.lastIndex=u(p,i(l.lastIndex),x))}for(var w,S="",m=0,_=0;_<y.length;_++){b=y[_];for(var j=String(b[0]),E=s(f(c(b.index),p.length),0),M=[],A=1;A<b.length;A++)M.push(void 0===(w=b[A])?w:String(w));var k=b.groups;if(v){var P=[j].concat(M,E,p);void 0!==k&&P.push(k);var O=String(t.apply(void 0,P))}else O=d(j,p,E,M,k,t);E>=m&&(S+=p.slice(m,E)+O,m=E+j.length)}return S+p.slice(m)}];function d(n,t,e,i,c,u){var a=e+n.length,s=i.length,f=v;return void 0!==c&&(c=o(c),f=p),r.call(u,f,(function(r,o){var u;switch(o.charAt(0)){case"$":return"$";case"&":return n;case"`":return t.slice(0,e);case"'":return t.slice(a);case"<":u=c[o.slice(1,-1)];break;default:var f=+o;if(0===f)return r;if(f>s){var p=l(f/10);return 0===p?r:p<=s?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):r}u=i[f-1]}return void 0===u?"":u}))}}))},function(n,t,r){var e=r(3);n.exports=function(n){return Object(e(n))}},function(n,t,r){var e=r(4),o=Math.min;n.exports=function(n){return n>0?o(e(n),9007199254740991):0}},function(n,t,r){"use strict";var e=r(20)(!0);n.exports=function(n,t,r){return t+(r?e(n,t).length:1)}},function(n,t,r){var e=r(4),o=r(3);n.exports=function(n){return function(t,r){var i,c,u=String(o(t)),a=e(r),s=u.length;return a<0||a>=s?n?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?n?u.charAt(a):i:n?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}}},function(n,t,r){"use strict";var e=r(22),o=RegExp.prototype.exec;n.exports=function(n,t){var r=n.exec;if("function"==typeof r){var i=r.call(n,t);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==e(n))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(n,t)}},function(n,t,r){var e=r(23),o=r(9)("toStringTag"),i="Arguments"==e(function(){return arguments}());n.exports=function(n){var t,r,c;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(r=function(n,t){try{return n[t]}catch(n){}}(t=Object(n),o))?r:i?e(t):"Object"==(c=e(t))&&"function"==typeof t.callee?"Arguments":c}},function(n,t){var r={}.toString;n.exports=function(n){return r.call(n).slice(8,-1)}},function(n,t){n.exports=!1},function(n,t,r){"use strict";r(26);var e=r(13),o=r(6),i=r(8),c=r(3),u=r(9),a=r(12),s=u("species"),f=!i((function(){var n=/./;return n.exec=function(){var n=[];return n.groups={a:"7"},n},"7"!=="".replace(n,"$<a>")})),l=function(){var n=/(?:)/,t=n.exec;n.exec=function(){return t.apply(this,arguments)};var r="ab".split(n);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();n.exports=function(n,t,r){var p=u(n),v=!i((function(){var t={};return t[p]=function(){return 7},7!=""[n](t)})),h=v?!i((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===n&&(r.constructor={},r.constructor[s]=function(){return r}),r[p](""),!t})):void 0;if(!v||!h||"replace"===n&&!f||"split"===n&&!l){var d=/./[p],g=r(c,p,""[n],(function(n,t,r,e,o){return t.exec===a?v&&!o?{done:!0,value:d.call(t,r,e)}:{done:!0,value:n.call(r,t,e)}:{done:!1}})),x=g[0],y=g[1];e(String.prototype,n,x),o(RegExp.prototype,p,2==t?function(n,t){return y.call(n,this,t)}:function(n){return y.call(n,this)})}}},function(n,t,r){"use strict";var e=r(12);r(28)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})},function(n,t,r){"use strict";var e=r(1);n.exports=function(){var n=e(this),t="";return n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.unicode&&(t+="u"),n.sticky&&(t+="y"),t}},function(n,t,r){var e=r(0),o=r(5),i=r(6),c=r(13),u=r(36),a=function(n,t,r){var s,f,l,p,v=n&a.F,h=n&a.G,d=n&a.S,g=n&a.P,x=n&a.B,y=h?e:d?e[t]||(e[t]={}):(e[t]||{}).prototype,b=h?o:o[t]||(o[t]={}),w=b.prototype||(b.prototype={});for(s in h&&(r=t),r)l=((f=!v&&y&&void 0!==y[s])?y:r)[s],p=x&&f?u(l,e):g&&"function"==typeof l?u(Function.call,l):l,y&&c(y,s,l,n&a.U),b[s]!=l&&i(b,s,p),g&&w[s]!=l&&(w[s]=l)};e.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,n.exports=a},function(n,t,r){var e=r(1),o=r(30),i=r(32),c=Object.defineProperty;t.f=r(7)?Object.defineProperty:function(n,t,r){if(e(n),t=i(t,!0),e(r),o)try{return c(n,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(n[t]=r.value),n}},function(n,t,r){n.exports=!r(7)&&!r(8)((function(){return 7!=Object.defineProperty(r(31)("div"),"a",{get:function(){return 7}}).a}))},function(n,t,r){var e=r(2),o=r(0).document,i=e(o)&&e(o.createElement);n.exports=function(n){return i?o.createElement(n):{}}},function(n,t,r){var e=r(2);n.exports=function(n,t){if(!e(n))return n;var r,o;if(t&&"function"==typeof(r=n.toString)&&!e(o=r.call(n)))return o;if("function"==typeof(r=n.valueOf)&&!e(o=r.call(n)))return o;if(!t&&"function"==typeof(r=n.toString)&&!e(o=r.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t){var r={}.hasOwnProperty;n.exports=function(n,t){return r.call(n,t)}},function(n,t,r){n.exports=r(10)("native-function-to-string",Function.toString)},function(n,t,r){var e=r(37);n.exports=function(n,t,r){if(e(n),void 0===t)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,o){return n.call(t,r,e,o)}}return function(){return n.apply(t,arguments)}}},function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n,t,r){"use strict";r.r(t);var e=r(14),o=r.n(e),i=(r(16),"https://lit-citadel-20258.herokuapp.com/subscribe/"),c="BHJPRfV991Vhea10FgbQ0At38IM1ATLMBQFnxp3HcdCoxRxSMr853iyYaNxmVxBVSRNNXKaCX_Lk-AHjDqUXJNw",u="/js/";var a=r(15),s=r.n(a);document.getElementById("app").insertAdjacentHTML("beforebegin",'<p class="'+s.a.headline+'">Notifications</p>'),function(){var n=function(n){for(var t=(n+"=".repeat((4-n.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),r=window.atob(t),e=new Uint8Array(r.length),o=0;o<r.length;++o)e[o]=r.charCodeAt(o);return e}(c),t=null;function r(){return(r=o()((function*(){if("serviceWorker"in navigator&&"PushManager"in window){console.log("Service Worker and Push is supported");try{var r=yield navigator.serviceWorker.register("js/sw.js",{scope:u});t=r;try{var e=yield t.pushManager.getSubscription();if(!(null===e))console.log("User is subscribed");else{console.log("User subscribe");try{var o=yield r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n});console.log("User is subscribed"),yield fetch(i,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),!0}catch(n){console.log(n)}}}catch(n){console.log(n)}}catch(n){console.log(n)}}else console.error("Service workers are not supported in this browser")}))).apply(this,arguments)}(function(){return r.apply(this,arguments)})().catch(n=>console.error(n))}()}],[[38,1]]]);
//# sourceMappingURL=main.js.map