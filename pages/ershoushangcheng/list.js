(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ershoushangcheng/list"],{"4a91":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"f05e"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.userid&&t.isAuth("ershoushangcheng","修改")),r=!t.userid&&t.isAuthFront("ershoushangcheng","修改"),i=t.userid&&t.isAuth("ershoushangcheng","删除"),o=!t.userid&&t.isAuthFront("ershoushangcheng","删除"),a=t.__map(t.list,(function(e,n){var r=t.__get_orig(e),i=t.preHttp(e.shangpinzhaopian),o=i?e.shangpinzhaopian.split(","):null,a=!i&&e.shangpinzhaopian?e.shangpinzhaopian.split(","):null;return{$orig:r,m0:i,g0:o,g1:a}})),s=t.userid&&t.isAuth("ershoushangcheng","新增"),c=!t.userid&&t.isAuthFront("ershoushangcheng","新增");t._isMounted||(t.e0=function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"proevent",void 0,e.key,void 0)?null:(e.stopPropagation(),t.onUpdate(e))},t.e1=function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"proevent",void 0,e.key,void 0)?null:(e.stopPropagation(),t.onDelete(e))}),t.$mp.data=Object.assign({},{$root:{m1:n,m2:r,m3:i,m4:o,l0:a,m5:s,m6:c}})},o=[]},"612c":function(t,e,n){"use strict";(function(t){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",h=s.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),s=new $(r||[]);return a(o,"_invoke",{value:j(t,n,s)}),o}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",g="suspendedYield",m="executing",y="completed",v={};function x(){}function w(){}function b(){}var S={};l(S,c,(function(){return this}));var k=Object.getPrototypeOf,O=k&&k(k(T([])));O&&O!==i&&o.call(O,c)&&(S=O);var N=b.prototype=x.prototype=Object.create(S);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(i,a,s,c){var u=p(t[i],t,a);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==n(l)&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(l).then((function(t){h.value=t,s(h)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}})}function j(e,n,r){var i=d;return function(o,a){if(i===m)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var c=F(s,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===d)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=m;var u=p(e,n,r);if("normal"===u.type){if(i=r.done?y:g,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=y,r.method="throw",r.arg=u.arg)}}}function F(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,F(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=p(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(o.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return w.prototype=b,a(N,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=l(b,h,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,h,"GeneratorFunction")),t.prototype=Object.create(N),t},e.awrap=function(t){return{__await:t}},L(_.prototype),l(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new _(f(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(N),l(N,h,"Generator"),l(N,c,(function(){return this})),l(N,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=T,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function i(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){i(a,r,o,s,c,"next",t)}function c(t){i(a,r,o,s,c,"throw",t)}s(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],priceColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],clicknumColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"商品名称"},{queryName:"商品分类"},{queryName:"新旧程度"}],queryIndex:0,list:[],lists:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},categoryList:[],categoryName:"全部",CustomBar:"0",listSort:"id",listOrder:"desc"}},watch:{},mounted:function(){},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var t=o(r().mark((function t(){var e;return r().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.priceColor=this.priceColor.sort((function(){return.5-Math.random()})),this.clicknumColor=this.clicknumColor.sort((function(){return.5-Math.random()})),e={},!this.userid){t.next=10;break}return t.next=7,this.$api.page("shangpinfenlei",{page:1,limit:100});case 7:e=t.sent,t.next=13;break;case 10:return t.next=12,this.$api.list("shangpinfenlei",{page:1,limit:100});case 12:e=t.sent;case 13:e.data.list.splice(0,0,{id:0,shangpinfenlei:"全部"}),this.categoryList=e.data.list,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onLoad:function(t){t.userid?this.userid=t.userid:this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},components:{},methods:{uGetRect:function(e,n){var r=this;return new Promise((function(i){t.createSelectorQuery().in(r)[n?"selectAll":"select"](e).boundingClientRect((function(t){n&&Array.isArray(t)&&t.length&&i(t),!n&&t&&i(t)})).exec()}))},cloneData:function(t){return JSON.parse(JSON.stringify(t))},sortClick:function(t){this.listSort==t?"desc"==this.listOrder?this.listOrder="asc":this.listOrder="desc":(this.listSort=t,this.listOrder="desc"),this.search()},priceChange:function(t){return Number(t).toFixed(2)},preHttp:function(t){return t&&"http"==t.substr(0,4)},queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.shangpinmingcheng="",this.searchForm.shangpinfenlei="",this.searchForm.xinjiuchengdu=""},categoryClick:function(t){this.categoryName=t,this.mescroll.resetUpScroll()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var e=o(r().mark((function e(n){var i,o,a,s,c;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i={page:n.num,limit:n.size},i["sort"]=this.listSort,i["order"]=this.listOrder,"全部"!=this.categoryName&&(i.shangpinfenlei="%"+this.categoryName+"%"),this.searchForm.shangpinmingcheng&&(i["shangpinmingcheng"]="%"+this.searchForm.shangpinmingcheng+"%"),this.searchForm.shangpinfenlei&&(i["shangpinfenlei"]="%"+this.searchForm.shangpinfenlei+"%"),this.searchForm.xinjiuchengdu&&(i["xinjiuchengdu"]="%"+this.searchForm.xinjiuchengdu+"%"),t.getStorageSync("appUserid")?JSON.parse(t.getStorageSync("userSession")):{},o={},!this.userid){e.next=15;break}return e.next=12,this.$api.page("ershoushangcheng",i);case 12:o=e.sent,e.next=18;break;case 15:return e.next=17,this.$api.list("ershoushangcheng",i);case 17:o=e.sent;case 18:for(1==n.num&&(this.list=[]),this.list=this.list.concat(o.data.list),this.$forceUpdate(),a=Math.ceil(this.list.length/6),s=[],c=0;c<a;c++)s[c]=this.list.slice(6*c,6*(c+1));this.lists=s,0==o.data.list.length&&(this.hasNext=!1),n.endSuccess(n.size,this.hasNext);case 27:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),onDetailTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},onUpdate:function(t){this.onUpdateTap(t.currentTarget.dataset.row)},onUpdateTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(e.id))},onAddTap:function(){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDelete:function(t){this.onDeleteTap(t.currentTarget.dataset.row.id)},onDeleteTap:function(e){var n=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=o(r().mark((function t(i){var o,a,s;return r().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=14;break}return t.next=3,n.$api.del("ershoushangcheng",JSON.stringify([e]));case 3:return t.next=5,n.$api.list("storeup",{page:1,limit:100,tablename:"ershoushangcheng",refid:e});case 5:if(o=t.sent,!o.data.list.length){t.next=11;break}for(s in a=[],o.data.list)a.push(o.data.list[s].id);return t.next=11,n.$api.del("storeup",JSON.stringify(a));case 11:n.$utils.msg("删除成功"),n.hasNext=!0,n.search();case 14:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}()})},search:function(){var t=o(r().mark((function t(){var e,n,i,o,a;return r().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.mescroll.num=1,e={page:this.mescroll.num,limit:this.mescroll.size},e["sort"]=this.listSort,e["order"]=this.listOrder,this.searchForm.shangpinmingcheng&&(e["shangpinmingcheng"]="%"+this.searchForm.shangpinmingcheng+"%"),"全部"!=this.categoryName&&(e.shangpinfenlei="%"+this.categoryName+"%"),this.searchForm.shangpinfenlei&&(e["shangpinfenlei"]="%"+this.searchForm.shangpinfenlei+"%"),this.searchForm.xinjiuchengdu&&(e["xinjiuchengdu"]="%"+this.searchForm.xinjiuchengdu+"%"),n={},!this.userid){t.next=15;break}return t.next=12,this.$api.page("ershoushangcheng",e);case 12:n=t.sent,t.next=18;break;case 15:return t.next=17,this.$api.list("ershoushangcheng",e);case 17:n=t.sent;case 18:for(1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(n.data.list),i=Math.ceil(this.list.length/6),o=[],a=0;a<i;a++)o[a]=this.list.slice(6*a,6*(a+1));this.lists=o,0==n.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 26:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}}).call(this,n("255a")["default"])},"7ad4":function(t,e,n){"use strict";n.r(e);var r=n("612c"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"9f57":function(t,e,n){},b338:function(t,e,n){"use strict";(function(t){n("6cdc");r(n("dda7"));var e=r(n("d0e6"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("255a")["createPage"])},d0e6:function(t,e,n){"use strict";n.r(e);var r=n("4a91"),i=n("7ad4");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("df30");var a,s=n("7702"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"70e8a382",null,!1,r["a"],a);e["default"]=c.exports},df30:function(t,e,n){"use strict";var r=n("9f57"),i=n.n(r);i.a}},[["b338","common/runtime","common/vendor"]]]);