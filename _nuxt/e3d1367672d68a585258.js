(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{191:function(t,e,o){"use strict";o(35),o(23),o(18),o(26),o(62),o(63),o(7),o(46);var r=o(22),n=o(8),c=(o(97),o(0)),l=o(25);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function h(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}e.a=c.default.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof data.style?(Object(l.b)("style must be an object",this),data):"string"==typeof data.class?(Object(l.b)("class must be an object",this),data):(h(t)?data.style=d({},data.style,{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(data.class=d({},data.class,Object(n.a)({},t,!0))),data)},setTextColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof data.style)return Object(l.b)("style must be an object",this),data;if("string"==typeof data.class)return Object(l.b)("class must be an object",this),data;if(h(t))data.style=d({},data.style,{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var e=t.toString().trim().split(" ",2),o=Object(r.a)(e,2),c=o[0],f=o[1];data.class=d({},data.class,Object(n.a)({},c+"--text",!0)),f&&(data.class["text--"+f]=!0)}return data}}})},195:function(t,e,o){"use strict";o(128)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},196:function(t,e,o){"use strict";var r=o(0);function n(t){return function(e,o){for(var r in o)Object.prototype.hasOwnProperty.call(e,r)||this.$delete(this.$data[t],r);for(var n in e)this.$set(this.$data[t],n,e[n])}}e.a=r.default.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",n("attrs$"),{immediate:!0}),this.$watch("$listeners",n("listeners$"),{immediate:!0})}})},197:function(t,e,o){"use strict";o.d(e,"b",(function(){return l}));var r=o(0),n=o(13),c={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.default.extend({name:"positionable",props:t.length?Object(n.f)(c,t):c})}e.a=l()},199:function(t,e,o){"use strict";o(35),o(23),o(18),o(7),o(26);var r=o(8),n=(o(201),o(196)),c=o(191),l=(o(127),o(0).default.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:Object(r.a)({},"elevation-".concat(this.elevation),!0)}}})),f=o(194),d=o(94),h=o(93);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}e.a=Object(h.a)(n.a,c.a,l,f.a,d.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,{},this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var data={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}})},201:function(t,e,o){var content=o(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("63000ea3",content,!0,{sourceMap:!1})},202:function(t,e,o){(e=o(44)(!1)).push([t.i,".theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#1e1e1e;border-color:#1e1e1e;color:#fff}.v-sheet{border-radius:4px}.v-sheet--tile{border-radius:0}",""]),t.exports=e},203:function(t,e,o){var content=o(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("aa1e91ba",content,!0,{sourceMap:!1})},235:function(t,e,o){"use strict";var r=o(203);o.n(r).a},236:function(t,e,o){(e=o(44)(!1)).push([t.i,"a{text-decoration:none}",""]),t.exports=e},237:function(t,e,o){var content=o(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("bb35a8d6",content,!0,{sourceMap:!1})},238:function(t,e,o){(e=o(44)(!1)).push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-footer:not([data-booted=true]){transition:none!important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute;width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0}",""]),t.exports=e},253:function(t,e,o){"use strict";o.r(e);var r=o(3),n=o(6),c=o(10),l=o(11),f=o(16),d=o(79),h=function(t,e,o,desc){var r,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(n<3?r(c):n>3?r(e,o,c):r(e,o))||c);return n>3&&c&&Object.defineProperty(e,o,c),c},v=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(n.a)(this,Object(c.a)(e).apply(this,arguments))).categorys=[{title:"Discord.js の関連リンク",items:[{text:"ドキュメント",url:"https://discord.js.org/#/docs/main/stable/general/welcome"},{text:"ガイド",url:"https://discordjs.guide"},{text:"Discord",url:"https://discord.gg/bRCvFy9"},{text:"GitHub",url:"https://github.com/discordjs/discord.js"}]},{title:"Discord.js Japan の関連リンク",items:[{text:"Scrapbox",url:"https://scrapbox.io/discordjs-japan"},{text:"Discord",url:"https://discord.gg/4tpD3TY"},{text:"GitHub",url:"https://github.com/discordjs-japan"},{text:"ガイド翻訳 (GitHub)",url:"https://github.com/discordjs-japan/guide"},{text:"ドキュメント翻訳 (Crowdin)",url:"https://crowdin.com/project/discordjs"},{text:"ドキュメント",url:"https://i18n.djs-jpn.tk"},{text:"ガイド",url:"https://guide.discordjs-japan.org"}]}],t}return Object(l.a)(e,t),e}(d.Vue),j=v=h([d.Component],v),y=(o(235),o(41)),m=o(95),O=o.n(m),x=o(248),w=o(257),P=o(249),$=(o(35),o(23),o(18),o(7),o(26),o(195),o(8)),C=(o(127),o(237),o(197)),k=o(93);var D=o(199),B=o(121),_=o(13);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object($.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=Object(k.a)(D.a,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(k.a)(Object(C.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}("footer",["height","inset"]),B.a).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return E({},D.a.options.computed.classes.call(this),{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return E({},D.a.options.computed.styles.call(this),{height:isNaN(t)?t:Object(_.d)(t),left:Object(_.d)(this.computedLeft),right:Object(_.d)(this.computedRight),bottom:Object(_.d)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){return t("footer",this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles}),this.$slots.default)}}),N=o(250),component=Object(y.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{staticClass:"mt-5"},[o("v-container",{staticClass:"px-0"},[o("v-row",t._l(t.categorys,(function(e,r){return o("v-col",{key:r,attrs:{cols:"3"}},[o("strong",{staticClass:"d-block mb-5",domProps:{textContent:t._s(e.title)}}),t._v(" "),t._l(e.items,(function(e,i){return o("li",{key:i,staticClass:"mb-3"},[e.nuxtLink?o("nuxt-link",{attrs:{to:e.url},domProps:{textContent:t._s(e.text)}}):o("a",{attrs:{href:e.url},domProps:{textContent:t._s(e.text)}})],1)}))],2)})),1),t._v(" "),o("v-divider",{staticClass:"mt-5 mb-5"}),t._v(" "),o("p",{staticClass:"subtitle-1"},[t._v("\n      Copyright © "+t._s((new Date).getFullYear())+" Discord.js Japan All rights reserved.\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VCol:x.a,VContainer:w.a,VDivider:P.a,VFooter:A,VRow:N.a})}}]);