(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(t,e,n){var content=n(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("0cd63bd9",content,!0,{sourceMap:!1})},222:function(t,e,n){(e=n(44)(!1)).push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=e},223:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("2fba213c",content,!0,{sourceMap:!1})},224:function(t,e,n){(e=n(44)(!1)).push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=e},252:function(t,e,n){"use strict";n.r(e);var o=n(3),r=n(6),l=n(10),c=n(11),d=n(16),h=n(79),f=function(t,e,n,desc){var o,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},v=[{title:"Discord.js日本ユーザーの為のDiscordサーバー",description:"主にここが活動場所です。Discord.jsに関して助けを求めることができるサーバーであり、Discord.jsに関する情報を素早くキャッチできます。Discord.jsのフレームワークやJavaScriptのガイド、ドキュメントの場所も紹介されているので覗いてみては？",actions:[{buttonText:"招待リンクを開く",href:"https://discord.gg/4tpD3TY",color:"blue"}]},{title:"役立つ情報がいっぱいあるScrapbox",description:"質問に対する詳しい情報や、逆引き集があります。それ以外にもJavaScriptのことについて詳しい説明があったりするので、何か困っているときにScrapboxで探すと答えが見つかるかも！Discord.js Japanの組織メンバーによって編集・管理されています。",actions:[{buttonText:"ページを開く",href:"https://scrapbox.io/discordjs-japan/",color:"blue"}]},{title:"ドキュメントのガイド翻訳やドキュメント国際化",description:"Discord.js Japanでは公式のDiscord.jsガイドの翻訳や、ドキュメントの翻訳を進めています。まだまだ不十分であり人も足りません。ガイドはGitHubにPR制、ドキュメントはCrowdinを使用しています。翻訳者募集中！",actions:[{buttonText:"詳しく",href:"/i18n",color:"blue",nuxtLink:!0}]}],m=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(r.a)(this,Object(l.a)(e).apply(this,arguments))).cards=v,t}return Object(c.a)(e,t),e}(h.Vue),x=m=f([Object(h.Component)({components:{LazyCard:function(){return Promise.all([n.e(0),n.e(8),n.e(11)]).then(n.bind(null,255))}}})],m),w=n(41),_=n(95),j=n.n(_),y=n(248),C=n(257),D=n(249),S=(n(127),n(221),n(0).default.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),z=n(93),O=Object(z.a)(S).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),R=(n(223),n(194)),H=Object(z.a)(R.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),T=n(250),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[n("v-parallax",{attrs:{src:"images/parallax.png",alt:"コーディングの写真"}},[n("v-container",[n("h1",{staticClass:"display-2"},[t._v("\n        Discord.js Japan User Group\n      ")]),t._v(" "),n("p",{staticClass:"headline grey--text text--lighten-4"},[t._v("\n        Discord.js日本ユーザーグループ\n      ")])])],1),t._v(" "),n("section",{attrs:{id:"about-discordjs-japan"}},[n("v-container",{staticClass:"text-center mt-12"},[n("h2",{staticClass:"display-1"},[t._v("\n        Discord.js日本ユーザーグループ とは？\n      ")]),t._v(" "),n("v-divider",{staticClass:"mb-5 mt-3"}),t._v(" "),n("v-responsive",{staticClass:"mx-auto title font-weight-light",attrs:{"max-width":"650"}},[n("p",[t._v("\n          Discord.jsを使う日本ユーザーの人たちに向けて作られた非公式コミュニティです。公式ドキュメントやガイドの翻訳、Discord.jsに関する情報をScrapboxにまとめるなどの活動を主にしています。Discord.jsについて何か質問や困っていることがあれば、ぜひこのコミュニティを活用してください！あなたのいい手助けになると思います。\n        ")])])],1)],1),t._v(" "),n("v-container",[n("v-row",{attrs:{"no-gutters":""}},t._l(t.cards,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",md:"4"}},[n("LazyCard",{staticClass:"pa-1",attrs:{"card-info":t,"max-width":"500"}})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VCol:y.a,VContainer:C.a,VDivider:D.a,VParallax:O,VResponsive:H,VRow:T.a})}}]);