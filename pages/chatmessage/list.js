(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chatmessage/list"],{1034:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var n={mescrollUni:function(){return Promise.all([r.e("common/vendor"),r.e("components/mescroll-uni/mescroll-uni")]).then(r.bind(null,"f05e"))}},i=function(){var t=this,e=t.$createElement,r=(t._self._c,t.userid&&t.isAuth("chatmessage","修改")),n=!t.userid&&t.isAuthFront("chatmessage","修改"),i=t.userid&&t.isAuth("chatmessage","删除"),o=!t.userid&&t.isAuthFront("chatmessage","删除"),a=t.userid&&t.isAuth("chatmessage","新增"),s=!t.userid&&t.isAuthFront("chatmessage","新增");t._isMounted||(t.e0=function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"proevent",void 0,e.key,void 0)?null:(e.stopPropagation(),t.onUpdate(e))},t.e1=function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"proevent",void 0,e.key,void 0)?null:(e.stopPropagation(),t.onDelete(e))}),t.$mp.data=Object.assign({},{$root:{m0:r,m1:n,m2:i,m3:o,m4:a,m5:s}})},o=[]},"1f71":function(t,e,r){},"7b82":function(t,e,r){"use strict";var n=r("1f71"),i=r.n(n);i.a},"7d4e":function(t,e,r){"use strict";(function(t){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),s=new P(n||[]);return a(o,"_invoke",{value:N(t,r,s)}),o}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",m="suspendedYield",y="executing",v="completed",g={};function w(){}function b(){}function x(){}var S={};h(S,c,(function(){return this}));var O=Object.getPrototypeOf,k=O&&O(O($([])));k&&k!==i&&o.call(k,c)&&(S=k);var L=x.prototype=w.prototype=Object.create(S);function E(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(i,a,s,c){var u=d(t[i],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==r(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}})}function N(e,r,n){var i=p;return function(o,a){if(i===y)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=j(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=y;var u=d(e,r,n);if("normal"===u.type){if(i=n.done?v:m,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=v,n.method="throw",n.arg=u.arg)}}}function j(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=d(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function $(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(o.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return b.prototype=x,a(L,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=h(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(_.prototype),h(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new _(f(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),h(L,l,"Generator"),h(L,c,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=$,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],clicknumColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[],queryIndex:0,list:[],lists:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0",listSort:"id",listOrder:"desc"}},watch:{},mounted:function(){},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var t=o(n().mark((function t(){return n().wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.clicknumColor=this.clicknumColor.sort((function(){return.5-Math.random()})),this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onLoad:function(t){t.userid?this.userid=t.userid:this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},components:{},methods:{uGetRect:function(e,r){var n=this;return new Promise((function(i){t.createSelectorQuery().in(n)[r?"selectAll":"select"](e).boundingClientRect((function(t){r&&Array.isArray(t)&&t.length&&i(t),!r&&t&&i(t)})).exec()}))},cloneData:function(t){return JSON.parse(JSON.stringify(t))},sortClick:function(t){this.listSort==t?"desc"==this.listOrder?this.listOrder="asc":this.listOrder="desc":(this.listSort=t,this.listOrder="desc"),this.search()},priceChange:function(t){return Number(t).toFixed(2)},preHttp:function(t){return t&&"http"==t.substr(0,4)},queryChange:function(t){this.queryIndex=t.detail.value},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var e=o(n().mark((function e(r){var i,o,a,s,c;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i={page:r.num,limit:r.size},i["sort"]=this.listSort,i["order"]=this.listOrder,t.getStorageSync("appUserid")?JSON.parse(t.getStorageSync("userSession")):{},o={},!this.userid){e.next=11;break}return e.next=8,this.$api.page("chatmessage",i);case 8:o=e.sent,e.next=14;break;case 11:return e.next=13,this.$api.list("chatmessage",i);case 13:o=e.sent;case 14:for(1==r.num&&(this.list=[]),this.list=this.list.concat(o.data.list),this.$forceUpdate(),a=Math.ceil(this.list.length/6),s=[],c=0;c<a;c++)s[c]=this.list.slice(6*c,6*(c+1));this.lists=s,0==o.data.list.length&&(this.hasNext=!1),r.endSuccess(r.size,this.hasNext);case 23:case"end":return e.stop()}}),e,this)})));function r(t){return e.apply(this,arguments)}return r}(),onDetailTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},onUpdate:function(t){this.onUpdateTap(t.currentTarget.dataset.row)},onUpdateTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(e.id))},onAddTap:function(){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDelete:function(t){this.onDeleteTap(t.currentTarget.dataset.row.id)},onDeleteTap:function(e){var r=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=o(n().mark((function t(i){return n().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=6;break}return t.next=3,r.$api.del("chatmessage",JSON.stringify([e]));case 3:r.$utils.msg("删除成功"),r.hasNext=!0,r.search();case 6:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}()})},search:function(){var t=o(n().mark((function t(){var e,r,i,o,a;return n().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.mescroll.num=1,e={page:this.mescroll.num,limit:this.mescroll.size},e["sort"]=this.listSort,e["order"]=this.listOrder,r={},!this.userid){t.next=11;break}return t.next=8,this.$api.page("chatmessage",e);case 8:r=t.sent,t.next=14;break;case 11:return t.next=13,this.$api.list("chatmessage",e);case 13:r=t.sent;case 14:for(1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(r.data.list),i=Math.ceil(this.list.length/6),o=[],a=0;a<i;a++)o[a]=this.list.slice(6*a,6*(a+1));this.lists=o,0==r.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 22:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}}).call(this,r("255a")["default"])},"81a3":function(t,e,r){"use strict";r.r(e);var n=r("1034"),i=r("bffa");for(var o in i)["default"].indexOf(o)<0&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("7b82");var a,s=r("7702"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"5ba48dce",null,!1,n["a"],a);e["default"]=c.exports},bffa:function(t,e,r){"use strict";r.r(e);var n=r("7d4e"),i=r.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},e9cc:function(t,e,r){"use strict";(function(t){r("6cdc");n(r("dda7"));var e=n(r("81a3"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("255a")["createPage"])}},[["e9cc","common/runtime","common/vendor"]]]);