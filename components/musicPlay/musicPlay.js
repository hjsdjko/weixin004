(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/musicPlay/musicPlay"],{1746:function(t,i,n){},"673e":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=t.createInnerAudioContext();n.autoplay=!1,n.src="";i.default={data:function(){return{baifenbi:0,allTime:0,nowTime:0,playTime:0,musicIndex:-1,list:[],playType:!1,playIndex:1,listShow:!1,bottomHeight:0}},computed:{baseUrl:function(){return this.$base.url}},mounted:function(){var t=this;wx.getSystemInfo({success:function(i){t.bottomHeight=i.windowBottom}})},methods:{stopClick:function(){n.stop()},getTimeStr:function(t){if(0==t)return"00:00";var i=new Date(parseInt(t)),n=i.getMinutes()>=10?i.getMinutes().toString():"0"+i.getMinutes(),e=i.getSeconds()>=10?i.getSeconds().toString():"0"+i.getSeconds();return n+":"+e},sliderChange:function(t){var i=t.detail.value*this.allTime/100;n.seek(i)},changeMusic:function(t){for(var i in this.list)if(this.list[i].id==t.id)return this.musicIndex=Number(i),!1;return!0},playAllClick:function(t,i){this.list=i,this.playClick(t)},playClick:function(t){var i=this;this.changeMusic(t)&&(this.list.push(t),this.musicIndex=this.list.length-1),n.src=this.baseUrl+this.list[this.musicIndex].songfile,this.$nextTick((function(){n.play()})),n.onPlay((function(){i.playType=!0})),n.onPause((function(){i.playType=!1})),n.onTimeUpdate((function(){var t=n.currentTime,e=n.duration;i.nowTime=t,i.allTime=e||0,i.baifenbi=e?Number((t/e*100).toFixed(2)):0,i.$forceUpdate()})),n.onEnded((function(){if(1==i.playIndex)n.src=i.baseUrl+i.list[i.musicIndex].songfile,n.play();else if(2==i.playIndex){var t=i.musicIndex;t==i.list.length-1?t=0:t++,i.musicIndex=t,n.src=i.baseUrl+i.list[i.musicIndex].songfile,n.play()}else if(3==i.playIndex){var e=Number(i.list.length-1),s=i.random(0,e);i.musicIndex=s,n.src=i.baseUrl+i.list[i.musicIndex].songfile,n.play()}}))},random:function(t,i){return Math.floor(Math.random()*(i-t))+t},playsClick:function(){n.play()},pauseClick:function(){n.pause()},playIndexClick:function(t){this.playIndex=t},listClick:function(){this.listShow=!0},delListClick:function(t){if(this.musicIndex==t){if(1==this.list.length)return n.stop(),this.list.splice(t,1),!1;0!=this.musicIndex&&this.musicIndex--,n.play()}this.list.splice(t,1)},playListClick:function(t){this.musicIndex=t,n.src=this.baseUrl+this.list[this.musicIndex].songfile,n.play()}}}}).call(this,n("255a")["default"])},"828e":function(t,i,n){"use strict";n.r(i);var e=n("be38"),s=n("d9c4");for(var l in s)["default"].indexOf(l)<0&&function(t){n.d(i,t,(function(){return s[t]}))}(l);n("e503");var u,a=n("7702"),c=Object(a["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);i["default"]=c.exports},be38:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return s})),n.d(i,"c",(function(){return l})),n.d(i,"a",(function(){return e}));var s=function(){var t=this,i=t.$createElement,n=(t._self._c,t.list.length&&t.listShow?t.__map(t.list,(function(i,n){var e=t.__get_orig(i),s=t.musicIndex==n&&i.tupian?i.tupian.split(","):null;return{$orig:e,g0:s}})):null),e=t.list.length&&-1!=t.musicIndex&&t.list.length&&t.list[t.musicIndex].tupian?t.list[t.musicIndex].tupian.split(","):null,s=t.list.length?t.getTimeStr(1e3*t.nowTime):null,l=t.list.length?t.getTimeStr(1e3*t.allTime):null;t._isMounted||(t.e0=function(i){t.listShow=!1},t.e1=function(i,n){var e=arguments[arguments.length-1].currentTarget.dataset,s=e.eventParams||e["event-params"];n=s.index;return i.stopPropagation(),t.delListClick(n)}),t.$mp.data=Object.assign({},{$root:{l0:n,g1:e,m0:s,m1:l}})},l=[]},d9c4:function(t,i,n){"use strict";n.r(i);var e=n("673e"),s=n.n(e);for(var l in e)["default"].indexOf(l)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(l);i["default"]=s.a},e503:function(t,i,n){"use strict";var e=n("1746"),s=n.n(e);s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/musicPlay/musicPlay-create-component',
    {
        'components/musicPlay/musicPlay-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('255a')['createComponent'](__webpack_require__("828e"))
        })
    },
    [['components/musicPlay/musicPlay-create-component']]
]);
