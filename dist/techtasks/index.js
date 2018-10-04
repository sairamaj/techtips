module.exports=function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=54)}({54:function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=r(55),u=r(9);t.run=function(n,t){const r=function(n){if(null!==n&&void 0!==n&&!u._.isEmpty(n))return n}(n.bindingData.id);n.res=void 0===r?{body:(new e.TaskManager).getTasks().map(t=>Object.assign({},t,{href:`${n.req.originalUrl}/${t.id}`}))}:{body:(new e.TaskManager).getTaskDetail(r)},n.done()}},55:function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const e=r(56);t.TaskManager=class{getTasks(){return[new e.Task(1,"ResourceGroup.Create"),new e.Task(2,"VM.Create.Basic"),new e.Task(3,"VM.Create.With.PreInstalled"),new e.Task(4,"WebApp.Create"),new e.Task(5,"Api.Create")]}getTaskDetail(n){return new e.Task(n,`task: ${n}`,`${n} details here.`)}}},56:function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Task=class{constructor(n,t,r){this.id=n,this.name=t,this.details=r}}},7:function(n,t){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},9:function(n,t,r){(function(n){var r;!function(){var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},u=e._,i=Array.prototype,o=Object.prototype,a="undefined"!=typeof Symbol?Symbol.prototype:null,c=i.push,l=i.slice,f=o.toString,s=o.hasOwnProperty,p=Array.isArray,v=Object.keys,h=Object.create,y=function(){},d=function(n){return n instanceof d?n:this instanceof d?void(this._wrapped=n):new d(n)};void 0===t||t.nodeType?e._=d:(void 0!==n&&!n.nodeType&&n.exports&&(t=n.exports=d),t._=d),d.VERSION="1.9.1";var g,m=function(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},b=function(n,t,r){return d.iteratee!==g?d.iteratee(n,t):null==n?d.identity:d.isFunction(n)?m(n,t,r):d.isObject(n)&&!d.isArray(n)?d.matcher(n):d.property(n)};d.iteratee=g=function(n,t){return b(n,t,1/0)};var j=function(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),u=0;u<r;u++)e[u]=arguments[u+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(t+1);for(u=0;u<t;u++)i[u]=arguments[u];return i[t]=e,n.apply(this,i)}},_=function(n){if(!d.isObject(n))return{};if(h)return h(n);y.prototype=n;var t=new y;return y.prototype=null,t},x=function(n){return function(t){return null==t?void 0:t[n]}},k=function(n,t){return null!=n&&s.call(n,t)},w=function(n,t){for(var r=t.length,e=0;e<r;e++){if(null==n)return;n=n[t[e]]}return r?n:void 0},O=Math.pow(2,53)-1,A=x("length"),M=function(n){var t=A(n);return"number"==typeof t&&t>=0&&t<=O};d.each=d.forEach=function(n,t,r){var e,u;if(t=m(t,r),M(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=d.keys(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n},d.map=d.collect=function(n,t,r){t=b(t,r);for(var e=!M(n)&&d.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i};var S=function(n){return function(t,r,e,u){var i=arguments.length>=3;return function(t,r,e,u){var i=!M(t)&&d.keys(t),o=(i||t).length,a=n>0?0:o-1;for(u||(e=t[i?i[a]:a],a+=n);a>=0&&a<o;a+=n){var c=i?i[a]:a;e=r(e,t[c],c,t)}return e}(t,m(r,u,4),e,i)}};d.reduce=d.foldl=d.inject=S(1),d.reduceRight=d.foldr=S(-1),d.find=d.detect=function(n,t,r){var e=(M(n)?d.findIndex:d.findKey)(n,t,r);if(void 0!==e&&-1!==e)return n[e]},d.filter=d.select=function(n,t,r){var e=[];return t=b(t,r),d.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},d.reject=function(n,t,r){return d.filter(n,d.negate(b(t)),r)},d.every=d.all=function(n,t,r){t=b(t,r);for(var e=!M(n)&&d.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},d.some=d.any=function(n,t,r){t=b(t,r);for(var e=!M(n)&&d.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},d.contains=d.includes=d.include=function(n,t,r,e){return M(n)||(n=d.values(n)),("number"!=typeof r||e)&&(r=0),d.indexOf(n,t,r)>=0},d.invoke=j(function(n,t,r){var e,u;return d.isFunction(t)?u=t:d.isArray(t)&&(e=t.slice(0,-1),t=t[t.length-1]),d.map(n,function(n){var i=u;if(!i){if(e&&e.length&&(n=w(n,e)),null==n)return;i=n[t]}return null==i?i:i.apply(n,r)})}),d.pluck=function(n,t){return d.map(n,d.property(t))},d.where=function(n,t){return d.filter(n,d.matcher(t))},d.findWhere=function(n,t){return d.find(n,d.matcher(t))},d.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=M(n)?n:d.values(n)).length;a<c;a++)null!=(e=n[a])&&e>i&&(i=e);else t=b(t,r),d.each(n,function(n,r,e){((u=t(n,r,e))>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},d.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=M(n)?n:d.values(n)).length;a<c;a++)null!=(e=n[a])&&e<i&&(i=e);else t=b(t,r),d.each(n,function(n,r,e){((u=t(n,r,e))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},d.shuffle=function(n){return d.sample(n,1/0)},d.sample=function(n,t,r){if(null==t||r)return M(n)||(n=d.values(n)),n[d.random(n.length-1)];var e=M(n)?d.clone(n):d.values(n),u=A(e);t=Math.max(Math.min(t,u),0);for(var i=u-1,o=0;o<t;o++){var a=d.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,t)},d.sortBy=function(n,t,r){var e=0;return t=b(t,r),d.pluck(d.map(n,function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")};var T=function(n,t){return function(r,e,u){var i=t?[[],[]]:{};return e=b(e,u),d.each(r,function(t,u){var o=e(t,u,r);n(i,t,o)}),i}};d.groupBy=T(function(n,t,r){k(n,r)?n[r].push(t):n[r]=[t]}),d.indexBy=T(function(n,t,r){n[r]=t}),d.countBy=T(function(n,t,r){k(n,r)?n[r]++:n[r]=1});var F=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;d.toArray=function(n){return n?d.isArray(n)?l.call(n):d.isString(n)?n.match(F):M(n)?d.map(n,d.identity):d.values(n):[]},d.size=function(n){return null==n?0:M(n)?n.length:d.keys(n).length},d.partition=T(function(n,t,r){n[r?0:1].push(t)},!0),d.first=d.head=d.take=function(n,t,r){return null==n||n.length<1?null==t?void 0:[]:null==t||r?n[0]:d.initial(n,n.length-t)},d.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},d.last=function(n,t,r){return null==n||n.length<1?null==t?void 0:[]:null==t||r?n[n.length-1]:d.rest(n,Math.max(0,n.length-t))},d.rest=d.tail=d.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},d.compact=function(n){return d.filter(n,Boolean)};var E=function(n,t,r,e){for(var u=(e=e||[]).length,i=0,o=A(n);i<o;i++){var a=n[i];if(M(a)&&(d.isArray(a)||d.isArguments(a)))if(t)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else E(a,t,r,e),u=e.length;else r||(e[u++]=a)}return e};d.flatten=function(n,t){return E(n,t,!1)},d.without=j(function(n,t){return d.difference(n,t)}),d.uniq=d.unique=function(n,t,r,e){d.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=b(r,e));for(var u=[],i=[],o=0,a=A(n);o<a;o++){var c=n[o],l=r?r(c,o,n):c;t&&!r?(o&&i===l||u.push(c),i=l):r?d.contains(i,l)||(i.push(l),u.push(c)):d.contains(u,c)||u.push(c)}return u},d.union=j(function(n){return d.uniq(E(n,!0,!0))}),d.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=A(n);e<u;e++){var i=n[e];if(!d.contains(t,i)){var o;for(o=1;o<r&&d.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},d.difference=j(function(n,t){return t=E(t,!0,!0),d.filter(n,function(n){return!d.contains(t,n)})}),d.unzip=function(n){for(var t=n&&d.max(n,A).length||0,r=Array(t),e=0;e<t;e++)r[e]=d.pluck(n,e);return r},d.zip=j(d.unzip),d.object=function(n,t){for(var r={},e=0,u=A(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r};var N=function(n){return function(t,r,e){r=b(r,e);for(var u=A(t),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(r(t[i],i,t))return i;return-1}};d.findIndex=N(1),d.findLastIndex=N(-1),d.sortedIndex=function(n,t,r,e){for(var u=(r=b(r,e,1))(t),i=0,o=A(n);i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i};var I=function(n,t,r){return function(e,u,i){var o=0,a=A(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return e[i=r(e,u)]===u?i:-1;if(u!=u)return(i=t(l.call(e,o,a),d.isNaN))>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&i<a;i+=n)if(e[i]===u)return i;return-1}};d.indexOf=I(1,d.findIndex,d.sortedIndex),d.lastIndexOf=I(-1,d.findLastIndex),d.range=function(n,t,r){null==t&&(t=n||0,n=0),r||(r=t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u},d.chunk=function(n,t){if(null==t||t<1)return[];for(var r=[],e=0,u=n.length;e<u;)r.push(l.call(n,e,e+=t));return r};var P=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=_(n.prototype),o=n.apply(i,u);return d.isObject(o)?o:i};d.bind=j(function(n,t,r){if(!d.isFunction(n))throw new TypeError("Bind must be called on a function");var e=j(function(u){return P(n,e,t,this,r.concat(u))});return e}),d.partial=j(function(n,t){var r=d.partial.placeholder,e=function(){for(var u=0,i=t.length,o=Array(i),a=0;a<i;a++)o[a]=t[a]===r?arguments[u++]:t[a];for(;u<arguments.length;)o.push(arguments[u++]);return P(n,e,this,this,o)};return e}),d.partial.placeholder=d,d.bindAll=j(function(n,t){var r=(t=E(t,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=d.bind(n[e],n)}}),d.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return k(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},d.delay=j(function(n,t,r){return setTimeout(function(){return n.apply(null,r)},t)}),d.defer=d.partial(d.delay,d,1),d.throttle=function(n,t,r){var e,u,i,o,a=0;r||(r={});var c=function(){a=!1===r.leading?0:d.now(),e=null,o=n.apply(u,i),e||(u=i=null)},l=function(){var l=d.now();a||!1!==r.leading||(a=l);var f=t-(l-a);return u=this,i=arguments,f<=0||f>t?(e&&(clearTimeout(e),e=null),a=l,o=n.apply(u,i),e||(u=i=null)):e||!1===r.trailing||(e=setTimeout(c,f)),o};return l.cancel=function(){clearTimeout(e),a=0,e=u=i=null},l},d.debounce=function(n,t,r){var e,u,i=function(t,r){e=null,r&&(u=n.apply(t,r))},o=j(function(o){if(e&&clearTimeout(e),r){var a=!e;e=setTimeout(i,t),a&&(u=n.apply(this,o))}else e=d.delay(i,t,this,o);return u});return o.cancel=function(){clearTimeout(e),e=null},o},d.wrap=function(n,t){return d.partial(t,n)},d.negate=function(n){return function(){return!n.apply(this,arguments)}},d.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},d.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},d.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}},d.once=d.partial(d.before,2),d.restArguments=j;var B=!{toString:null}.propertyIsEnumerable("toString"),R=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],q=function(n,t){var r=R.length,e=n.constructor,u=d.isFunction(e)&&e.prototype||o,i="constructor";for(k(n,i)&&!d.contains(t,i)&&t.push(i);r--;)(i=R[r])in n&&n[i]!==u[i]&&!d.contains(t,i)&&t.push(i)};d.keys=function(n){if(!d.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)k(n,r)&&t.push(r);return B&&q(n,t),t},d.allKeys=function(n){if(!d.isObject(n))return[];var t=[];for(var r in n)t.push(r);return B&&q(n,t),t},d.values=function(n){for(var t=d.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e},d.mapObject=function(n,t,r){t=b(t,r);for(var e=d.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=t(n[a],a,n)}return i},d.pairs=function(n){for(var t=d.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},d.invert=function(n){for(var t={},r=d.keys(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t},d.functions=d.methods=function(n){var t=[];for(var r in n)d.isFunction(n[r])&&t.push(r);return t.sort()};var D=function(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||null==r)return r;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;c<a;c++){var l=o[c];t&&void 0!==r[l]||(r[l]=i[l])}return r}};d.extend=D(d.allKeys),d.extendOwn=d.assign=D(d.keys),d.findKey=function(n,t,r){t=b(t,r);for(var e,u=d.keys(n),i=0,o=u.length;i<o;i++)if(t(n[e=u[i]],e,n))return e};var C,K,z=function(n,t,r){return t in r};d.pick=j(function(n,t){var r={},e=t[0];if(null==n)return r;d.isFunction(e)?(t.length>1&&(e=m(e,t[1])),t=d.allKeys(n)):(e=z,t=E(t,!1,!1),n=Object(n));for(var u=0,i=t.length;u<i;u++){var o=t[u],a=n[o];e(a,o,n)&&(r[o]=a)}return r}),d.omit=j(function(n,t){var r,e=t[0];return d.isFunction(e)?(e=d.negate(e),t.length>1&&(r=t[1])):(t=d.map(E(t,!1,!1),String),e=function(n,r){return!d.contains(t,r)}),d.pick(n,e,r)}),d.defaults=D(d.allKeys,!0),d.create=function(n,t){var r=_(n);return t&&d.extendOwn(r,t),r},d.clone=function(n){return d.isObject(n)?d.isArray(n)?n.slice():d.extend({},n):n},d.tap=function(n,t){return t(n),n},d.isMatch=function(n,t){var r=d.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0},C=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return!1;if(n!=n)return t!=t;var u=typeof n;return("function"===u||"object"===u||"object"==typeof t)&&K(n,t,r,e)},K=function(n,t,r,e){n instanceof d&&(n=n._wrapped),t instanceof d&&(t=t._wrapped);var u=f.call(n);if(u!==f.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:0==+n?1/+n==1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object Symbol]":return a.valueOf.call(n)===a.valueOf.call(t)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,c=t.constructor;if(o!==c&&!(d.isFunction(o)&&o instanceof o&&d.isFunction(c)&&c instanceof c)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var l=r.length;l--;)if(r[l]===n)return e[l]===t;if(r.push(n),e.push(t),i){if((l=n.length)!==t.length)return!1;for(;l--;)if(!C(n[l],t[l],r,e))return!1}else{var s,p=d.keys(n);if(l=p.length,d.keys(t).length!==l)return!1;for(;l--;)if(s=p[l],!k(t,s)||!C(n[s],t[s],r,e))return!1}return r.pop(),e.pop(),!0},d.isEqual=function(n,t){return C(n,t)},d.isEmpty=function(n){return null==n||(M(n)&&(d.isArray(n)||d.isString(n)||d.isArguments(n))?0===n.length:0===d.keys(n).length)},d.isElement=function(n){return!(!n||1!==n.nodeType)},d.isArray=p||function(n){return"[object Array]"===f.call(n)},d.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},d.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(n){d["is"+n]=function(t){return f.call(t)==="[object "+n+"]"}}),d.isArguments(arguments)||(d.isArguments=function(n){return k(n,"callee")});var W=e.document&&e.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof W&&(d.isFunction=function(n){return"function"==typeof n||!1}),d.isFinite=function(n){return!d.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},d.isNaN=function(n){return d.isNumber(n)&&isNaN(n)},d.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===f.call(n)},d.isNull=function(n){return null===n},d.isUndefined=function(n){return void 0===n},d.has=function(n,t){if(!d.isArray(t))return k(n,t);for(var r=t.length,e=0;e<r;e++){var u=t[e];if(null==n||!s.call(n,u))return!1;n=n[u]}return!!r},d.noConflict=function(){return e._=u,this},d.identity=function(n){return n},d.constant=function(n){return function(){return n}},d.noop=function(){},d.property=function(n){return d.isArray(n)?function(t){return w(t,n)}:x(n)},d.propertyOf=function(n){return null==n?function(){}:function(t){return d.isArray(t)?w(n,t):n[t]}},d.matcher=d.matches=function(n){return n=d.extendOwn({},n),function(t){return d.isMatch(t,n)}},d.times=function(n,t,r){var e=Array(Math.max(0,n));t=m(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},d.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},d.now=Date.now||function(){return(new Date).getTime()};var $={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},L=d.invert($),V=function(n){var t=function(t){return n[t]},r="(?:"+d.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};d.escape=V($),d.unescape=V(L),d.result=function(n,t,r){d.isArray(t)||(t=[t]);var e=t.length;if(!e)return d.isFunction(r)?r.call(n):r;for(var u=0;u<e;u++){var i=null==n?void 0:n[t[u]];void 0===i&&(i=r,u=e),n=d.isFunction(i)?i.call(n):i}return n};var U=0;d.uniqueId=function(n){var t=++U+"";return n?n+t:t},d.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var G=/(.)^/,J={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},H=/\\|'|\r|\n|\u2028|\u2029/g,Q=function(n){return"\\"+J[n]};d.template=function(n,t,r){!t&&r&&(t=r),t=d.defaults({},t,d.templateSettings);var e,u=RegExp([(t.escape||G).source,(t.interpolate||G).source,(t.evaluate||G).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(u,function(t,r,e,u,a){return o+=n.slice(i,a).replace(H,Q),i=a+t.length,r?o+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":u&&(o+="';\n"+u+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{e=new Function(t.variable||"obj","_",o)}catch(n){throw n.source=o,n}var a=function(n){return e.call(this,n,d)},c=t.variable||"obj";return a.source="function("+c+"){\n"+o+"}",a},d.chain=function(n){var t=d(n);return t._chain=!0,t};var X=function(n,t){return n._chain?d(t).chain():t};d.mixin=function(n){return d.each(d.functions(n),function(t){var r=d[t]=n[t];d.prototype[t]=function(){var n=[this._wrapped];return c.apply(n,arguments),X(this,r.apply(d,n))}}),d},d.mixin(d),d.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=i[n];d.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],X(this,r)}}),d.each(["concat","join","slice"],function(n){var t=i[n];d.prototype[n]=function(){return X(this,t.apply(this._wrapped,arguments))}}),d.prototype.value=function(){return this._wrapped},d.prototype.valueOf=d.prototype.toJSON=d.prototype.value,d.prototype.toString=function(){return String(this._wrapped)},void 0===(r=function(){return d}.apply(t,[]))||(n.exports=r)}()}).call(t,r(7)(n))}});