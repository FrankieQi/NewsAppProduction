(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a52f1da"],{"100d":function(t,e,n){t.exports=n.p+"img/3.b3f52a8d.jpg"},"11da":function(t,e,n){},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),i=n("d039"),o=n("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(l||d)&&r(RegExp.prototype,s,(function(){var t=a(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},2680:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"userLove"},[n("van-nav-bar",{staticClass:"app-nav-bar",attrs:{fixed:"",title:"收藏 / 历史","left-arrow":""},on:{"click-left":function(e){return t.$router.push("/my")}}}),n("van-tabs",{staticClass:"main_contain",attrs:{color:"#3296fa",background:"#f3f3f3"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("van-tab",{attrs:{title:"收藏",name:"collect"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("collect-item",{attrs:{collects:t.collectList}})],1)],1),n("van-tab",{attrs:{title:"历史",name:"history"}},[n("van-pull-refresh",{attrs:{"success-text":t.refreshSuccessText,"success-duration":1500},on:{refresh:t.onRefresh},model:{value:t.isRefreshLoading,callback:function(e){t.isRefreshLoading=e},expression:"isRefreshLoading"}},[n("van-list",{attrs:{finished:t.finishedHistory,"finished-text":"没有更多了"},on:{load:t.onLoadHistory},model:{value:t.loadingHistory,callback:function(e){t.loadingHistory=e},expression:"loadingHistory"}},[n("history-item",{attrs:{hostories:t.historyList}})],1)],1)],1)],1)],1)},a=[],i=n("2909"),o=(n("96cf"),n("1da1")),s=n("5530"),c=n("2f62"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collect_contain"},t._l(t.collects,(function(t,e){return n("Publish-item",{key:e,attrs:{userPublishItem:t}})})),1)},l=[],d=n("be25"),f={name:"collect",components:{PublishItem:d["a"]},data:function(){return{}},props:{collects:{type:Array,required:!0}}},h=f,m=n("2877"),v=Object(m["a"])(h,u,l,!1,null,null,null),p=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"history_contain"},t._l(t.hostories,(function(t,e){return n("article-item",{key:e,staticClass:"item",attrs:{article:t}})})),1)},g=[],y=n("6ea2"),_={name:"history",components:{ArticleItem:y["a"]},data:function(){return{}},props:{hostories:{type:Array,required:!0}}},k=_,O=(n("dd35"),Object(m["a"])(k,b,g,!1,null,null,null)),j=O.exports,x=n("c24f"),w={name:"UserLoveIndex",components:{CollectItem:p,HistoryItem:j},data:function(){return{activeName:"collect",page:1,per_page:10,collectList:[],loading:!1,finished:!1,isRefreshLoading:!1,refreshSuccessText:"",loadingHistory:!1,finishedHistory:!1,pageHistory:5,per_page_History:10,historyList:[]}},computed:Object(s["a"])({},Object(c["b"])(["user"])),mounted:function(){0===this.$route.params.type?this.activeName="collect":this.activeName="history"},methods:{onLoad:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(x["f"])({token:t.user.token});case 2:for(i in n=e.sent,console.log(n),r=n.data,a=[],r)a.push(r[i]);console.log(a),t.collectList=a,t.loading=!1,r.length==n.data.length&&(t.finished=!0);case 11:case"end":return e.stop()}}),e)})))()},onLoadHistory:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("触发历史"),e.next=3,Object(x["i"])({page:t.pageHistory});case 3:r=e.sent,a=r.data,o=a,(n=t.historyList).push.apply(n,Object(i["a"])(o)),t.loadingHistory=!1,o.length?t.pageHistory++:t.finishedHistory=!0,console.log(t.historyList);case 10:case"end":return e.stop()}}),e)})))()},onRefresh:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(123465),e.next=3,Object(x["i"])({page:t.pageHistory});case 3:r=e.sent,a=r.data,o=a,(n=t.historyList).unshift.apply(n,Object(i["a"])(o)),t.isRefreshLoading=!1,t.refreshSuccessText="刷新成功";case 9:case"end":return e.stop()}}),e)})))()}}},S=w,T=(n("6011"),Object(m["a"])(S,r,a,!1,null,null,null));e["default"]=T.exports},2909:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){if(Array.isArray(t))return r(t)}n.d(e,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("25f0");function o(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||i(t)||o(t)||s()}},"2bb8":function(t,e,n){},"4df4":function(t,e,n){"use strict";var r=n("0366"),a=n("7b0b"),i=n("9bdd"),o=n("e95a"),s=n("50c4"),c=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,d,f,h,m=a(t),v="function"==typeof this?this:Array,p=arguments.length,b=p>1?arguments[1]:void 0,g=void 0!==b,y=u(m),_=0;if(g&&(b=r(b,p>2?arguments[2]:void 0,2)),void 0==y||v==Array&&o(y))for(e=s(m.length),n=new v(e);e>_;_++)h=g?b(m[_],_):m[_],c(n,_,h);else for(d=y.call(m),f=d.next,n=new v;!(l=f.call(d)).done;_++)h=g?i(d,b,[l.value,_],!0):l.value,c(n,_,h);return n.length=_,n}},6011:function(t,e,n){"use strict";var r=n("2bb8"),a=n.n(r);a.a},6690:function(t,e,n){"use strict";var r=n("cb66"),a=n.n(r);a.a},"6ea2":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell",{staticClass:"article-item",on:{click:function(e){return t.goToDetail(t.article.id)}}},[n("div",{staticClass:"title van-multi-ellipsis--l3",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.article.title))]),n("div",{attrs:{slot:"label"},slot:"label"},[n("div",{staticClass:"label-wrap"},[n("span",[t._v(t._s(t.article.author))]),n("span",[t._v(t._s(t.article.upvote)+"点赞")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.update_time)))])])]),n("van-image",{staticClass:"right-cover",attrs:{fit:"cover",src:t.article.image_url}})],1)},a=[],i={name:"ArticleItem",props:{article:{type:Object,required:!0}},methods:{goToDetail:function(t){this.$router.push("/article/".concat(t))}}},o=i,s=(n("9897"),n("2877")),c=Object(s["a"])(o,r,a,!1,null,"aa477a34",null);e["a"]=c.exports},9897:function(t,e,n){"use strict";var r=n("c879"),a=n.n(r);a.a},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),i=n("1c7e"),o=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:a})},be25:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"publish_item"},[r("van-cell",{staticClass:"user-info",attrs:{center:""}},[r("div",{staticClass:"name",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.userPublishItem.author))]),r("van-image",{staticClass:"avatar",attrs:{slot:"icon",round:"",src:n("100d"),fit:"cover"},slot:"icon"}),r("div",{staticClass:"pubdate",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t._f("relativeTime")(t.userPublishItem.update_time)))])],1),r("van-cell",[r("div",[t._v(" "+t._s(t.userPublishItem.title)+" ")]),r("van-image",{staticClass:"right-cover",attrs:{fit:"cover",src:t.userPublishItem.image_url}})],1),r("van-grid",{attrs:{direction:"horizontal","column-num":3,"icon-size":"26",border:!1}},[r("van-grid-item",{attrs:{icon:"comment-o",text:String(Math.floor(100*Math.random()+20))}}),r("van-grid-item",{attrs:{icon:"star-o",text:String(t.userPublishItem.collect_sum)}}),r("van-grid-item",{attrs:{icon:"good-job-o",text:String(t.userPublishItem.upvote)}})],1)],1)},a=[],i={name:"PublishItem",data:function(){return{}},mounted:function(){},props:{userPublishItem:{type:Object,required:!0}}},o=i,s=(n("6690"),n("2877")),c=Object(s["a"])(o,r,a,!1,null,"32a706de",null);e["a"]=c.exports},c24f:function(t,e,n){"use strict";n.d(e,"m",(function(){return i})),n.d(e,"l",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"n",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"o",(function(){return h})),n.d(e,"f",(function(){return m})),n.d(e,"i",(function(){return v})),n.d(e,"h",(function(){return p})),n.d(e,"g",(function(){return b})),n.d(e,"j",(function(){return g})),n.d(e,"k",(function(){return y}));var r=n("b775"),a=n("4360"),i=function(t){return Object(r["a"])({method:"POST",url:"/api/v1/user/register",data:t})},o=function(t){return Object(r["a"])({method:"POST",url:"/api/v1/user/login",data:t})},s=function(t){return Object(r["a"])({method:"GET",url:"/api/v1/token/gettoken?uid=".concat(t)})},c=function(t){return Object(r["a"])({method:"GET",url:"api/v1/email/getcode?email=".concat(t)})},u=function(){return Object(r["a"])({method:"GET",url:"/api/v1/user/info",headers:{token:"".concat(a["a"].state.user.token)}})},l=function(){return Object(r["a"])({method:"GET",url:"/api/v1/category/getcategorylist"})},d=function(t){return Object(r["a"])({method:"POST",url:"/api/v1/relation/follow",data:{follow_id:t,token:"".concat(a["a"].state.user.token)},headers:{token:"".concat(a["a"].state.user.token)}})},f=function(t){return Object(r["a"])({method:"POST",url:"/api/v1/relation/del",data:{follow_id:t,token:"".concat(a["a"].state.user.token)},headers:{token:"".concat(a["a"].state.user.token)}})},h=function(t){return Object(r["a"])({method:"POST",url:"/api/v1/user/edit",data:t,headers:{token:"".concat(a["a"].state.user.token)}})},m=function(t){return Object(r["a"])({methods:"POST",url:"/api/v1/collect/collectlist",data:t,headers:{token:"".concat(a["a"].state.user.token)}})},v=function(t){return Object(r["a"])({methods:"GET",url:"api/v1/news/getnewslist",params:t})},p=function(t){return Object(r["a"])({methods:"GET",url:"/api/v1/relation/followlist",params:t,headers:{token:"".concat(a["a"].state.user.token)}})},b=function(t){return Object(r["a"])({methods:"GET",url:"/api/v1/relation/fanslist",params:t,headers:{token:"".concat(a["a"].state.user.token)}})},g=function(){return Object(r["a"])({methods:"GET",url:"/api/v1/user/upvotesum",headers:{token:"".concat(a["a"].state.user.token)}})},y=function(t){return Object(r["a"])({methods:"GET",url:"/api/v1/news/user_news_list",params:t,headers:{token:"".concat(a["a"].state.user.token)}})}},c879:function(t,e,n){},cb66:function(t,e,n){},dd35:function(t,e,n){"use strict";var r=n("11da"),a=n.n(r);a.a},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),i=n("e8b5"),o=n("23cb"),s=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),f=n("ae40"),h=d("slice"),m=f("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),p=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!h||!m},{slice:function(t,e){var n,r,l,d=c(this),f=s(d.length),h=o(t,f),m=o(void 0===e?f:e,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(d,h,m);for(r=new(void 0===n?Array:n)(b(m-h,0)),l=0;h<m;h++,l++)h in d&&u(r,l,d[h]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-1a52f1da.a40c7686.js.map