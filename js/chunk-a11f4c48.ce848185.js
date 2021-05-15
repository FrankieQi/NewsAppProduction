(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a11f4c48"],{"420a":function(e,t,n){"use strict";var a=n("89e0"),r=n.n(a);r.a},"89e0":function(e,t,n){},"9ed6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[a("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:"登录","left-arrow":""},on:{"click-left":function(t){return e.$router.back()}}}),a("van-image",{staticClass:"image_avatar",attrs:{round:"",src:"https://img01.yzcdn.cn/vant/cat.jpeg"}}),a("van-form",{ref:"login-form",staticClass:"main_container",attrs:{"show-error":!1,"show-error-message":!1,"validate-first":""},on:{submit:e.onLogin,failed:e.onFailed}},[a("van-field",{attrs:{"icon-prefix":"toutiao","left-icon":"shouji",placeholder:"请输入邮箱",name:"email",center:"",rules:e.formRules.email},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),a("van-field",{attrs:{"icon-prefix":"toutiao",clearable:"",type:"password","left-icon":"yanzhengma",placeholder:"请输入密码",name:"password",center:"",rules:e.formRules.password},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),a("div",{staticClass:"login-btn-wrap"},[a("van-button",{staticClass:"login-btn",attrs:{type:"info",block:"",round:""}},[e._v("登录")])],1),a("div",{staticClass:"register_text"},[e._v("还没有账号？"),a("span",{staticClass:"register_btn",on:{click:e.goResgister}},[e._v("点击注册")])])],1),a("div",{staticClass:"background_login"},[a("img",{attrs:{src:n("f1ee"),alt:""}})])],1)},r=[],o=(n("96cf"),n("1da1")),s=n("c24f"),i={name:"LoginIndex",methods:{onLogin:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$toast.loading({duration:0,forbidClick:!0,message:"登录中..."}),t.prev=1,t.next=4,Object(s["l"])(e.user);case 4:return n=t.sent,a=n.data,r=a.id,t.next=9,Object(s["d"])(r);case 9:o=t.sent,console.log(a),console.log(o),e.$toast.success("登录成功"),e.$store.commit("setUser",o.data),e.$router.push("/"),t.next=23;break;case 17:t.prev=17,t.t0=t["catch"](1),console.log("失败"),console.log(t.t0.response.data),i=t.t0.response.data.msg,t.t0&&e.$toast.fail(i);case 23:case"end":return t.stop()}}),t,null,[[1,17]])})))()},onFailed:function(e){e.errors[0]&&this.$toast({message:e.errors[0].message,position:"top"})},goResgister:function(){this.$router.push("/register")}},data:function(){return{user:{email:"",password:""},formRules:{email:[{required:!0,message:"请输入邮箱号"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"请输入正确邮箱号"}],password:[{required:!0,message:"请输入密码"},{pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,message:"请输入正确密码"}]},isCountDownShow:!1,isSendSmsLoading:!1}}},c=i,u=(n("420a"),n("2877")),l=Object(u["a"])(c,a,r,!1,null,"37079ebf",null);t["default"]=l.exports},c24f:function(e,t,n){"use strict";n.d(t,"m",(function(){return o})),n.d(t,"l",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"n",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"o",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"i",(function(){return g})),n.d(t,"h",(function(){return h})),n.d(t,"g",(function(){return v})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return k}));var a=n("b775"),r=n("4360"),o=function(e){return Object(a["a"])({method:"POST",url:"/api/v1/user/register",data:e})},s=function(e){return Object(a["a"])({method:"POST",url:"/api/v1/user/login",data:e})},i=function(e){return Object(a["a"])({method:"GET",url:"/api/v1/token/gettoken?uid=".concat(e)})},c=function(e){return Object(a["a"])({method:"GET",url:"api/v1/email/getcode?email=".concat(e)})},u=function(){return Object(a["a"])({method:"GET",url:"/api/v1/user/info",headers:{token:"".concat(r["a"].state.user.token)}})},l=function(){return Object(a["a"])({method:"GET",url:"/api/v1/category/getcategorylist"})},d=function(e){return Object(a["a"])({method:"POST",url:"/api/v1/relation/follow",data:{follow_id:e,token:"".concat(r["a"].state.user.token)},headers:{token:"".concat(r["a"].state.user.token)}})},f=function(e){return Object(a["a"])({method:"POST",url:"/api/v1/relation/del",data:{follow_id:e,token:"".concat(r["a"].state.user.token)},headers:{token:"".concat(r["a"].state.user.token)}})},m=function(e){return Object(a["a"])({method:"POST",url:"/api/v1/user/edit",data:e,headers:{token:"".concat(r["a"].state.user.token)}})},p=function(e){return Object(a["a"])({methods:"POST",url:"/api/v1/collect/collectlist",data:e,headers:{token:"".concat(r["a"].state.user.token)}})},g=function(e){return Object(a["a"])({methods:"GET",url:"api/v1/news/getnewslist",params:e})},h=function(e){return Object(a["a"])({methods:"GET",url:"/api/v1/relation/followlist",params:e,headers:{token:"".concat(r["a"].state.user.token)}})},v=function(e){return Object(a["a"])({methods:"GET",url:"/api/v1/relation/fanslist",params:e,headers:{token:"".concat(r["a"].state.user.token)}})},b=function(){return Object(a["a"])({methods:"GET",url:"/api/v1/user/upvotesum",headers:{token:"".concat(r["a"].state.user.token)}})},k=function(e){return Object(a["a"])({methods:"GET",url:"/api/v1/news/user_news_list",params:e,headers:{token:"".concat(r["a"].state.user.token)}})}},f1ee:function(e,t,n){e.exports=n.p+"img/loginBG.ace6c43e.png"}}]);
//# sourceMappingURL=chunk-a11f4c48.ce848185.js.map