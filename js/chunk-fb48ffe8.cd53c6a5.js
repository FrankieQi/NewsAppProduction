(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb48ffe8"],{"33f5":function(e,t,n){"use strict";var r=n("ada8"),o=n.n(r);o.a},"9ed6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:"登录 / 注册","left-arrow":""},on:{"click-left":function(t){return e.$router.back()}}}),n("van-form",{ref:"login-form",attrs:{"show-error":!1,"show-error-message":!1,"validate-first":""},on:{submit:e.onLogin,failed:e.onFailed}},[n("van-field",{attrs:{"icon-prefix":"toutiao","left-icon":"shouji",placeholder:"请输入手机号",name:"mobile",center:"",maxlength:"11",rules:e.formRules.mobile},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}}),n("van-field",{attrs:{"icon-prefix":"toutiao",clearable:"","left-icon":"yanzhengma",placeholder:"请输入验证码",name:"code",center:"",rules:e.formRules.code},scopedSlots:e._u([{key:"button",fn:function(){return[e.isCountDownShow?n("van-count-down",{attrs:{time:6e4,format:"ss s"},on:{finish:function(t){e.isCountDownShow=!1}}}):n("van-button",{staticClass:"send-btn",attrs:{size:"small",round:"",loading:e.isSendSmsLoading},on:{click:function(t){return t.preventDefault(),e.onSendSms(t)}}},[e._v("发送验证码 ")])]},proxy:!0}]),model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}}),n("div",{staticClass:"login-btn-wrap"},[n("van-button",{staticClass:"login-btn",attrs:{type:"info",block:""}},[e._v("登录")])],1)],1),n("div",{staticClass:"msg-tip"},[e._v("默认账号：13911111111 密码：246810")])],1)},o=[],a=(n("96cf"),n("1da1")),s=n("c24f"),u={name:"LoginIndex",methods:{onLogin:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$toast.loading({duration:0,forbidClick:!0,message:"登录中..."}),t.prev=1,t.next=4,Object(s["l"])(e.user);case 4:n=t.sent,r=n.data,console.log(r),e.$toast.success("登录成功"),e.$store.commit("setUser",r.data),e.$store.commit("removeCachePage","LayoutIndex"),e.$router.back(),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](1),console.log("失败"),e.$toast.fail("登录失败，手机号或验证码错误");case 17:case"end":return t.stop()}}),t,null,[[1,13]])})))()},onFailed:function(e){e.errors[0]&&this.$toast({message:e.errors[0].message,position:"top"})},onSendSms:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs["login-form"].validate("mobile");case 3:return e.isSendSmsLoading=!0,t.next=6,Object(s["m"])(e.user.mobile);case 6:e.isCountDownShow=!0,t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](0),n="",n=t.t0&&t.t0.response&&429===t.t0.response.status?"发送太频繁,请稍后重试":"mobile"===t.t0.name?t.t0.message:"发送失败，请稍后重试",e.$toast({message:n,position:"top"});case 14:e.isSendSmsLoading=!1;case 15:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},data:function(){return{user:{mobile:"",code:""},formRules:{mobile:[{required:!0,message:"请输入手机号"},{pattern:/^1[3|5|7|8]\d{9}$/,message:"请输入正确手机号"}],code:[{required:!0,message:"请输入验证码"},{pattern:/^\d{6}$/,message:"请输入正确验证码"}]},isCountDownShow:!1,isSendSmsLoading:!1}}},i=u,c=(n("33f5"),n("2877")),l=Object(c["a"])(i,r,o,!1,null,"7b51cd27",null);t["default"]=l.exports},ada8:function(e,t,n){},c24f:function(e,t,n){"use strict";n.d(t,"l",(function(){return a})),n.d(t,"m",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"o",(function(){return f})),n.d(t,"n",(function(){return m})),n.d(t,"j",(function(){return p})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return v})),n.d(t,"i",(function(){return h})),n.d(t,"h",(function(){return g})),n.d(t,"g",(function(){return w}));var r=n("b775"),o=n("4360"),a=function(e){return Object(r["a"])({method:"POST",url:"/app/v1_0/authorizations",data:e})},s=function(e){return Object(r["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(e)})},u=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user",headers:{Authorization:"Bearer ".concat(o["a"].state.user.token)}})},i=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/channels"})},c=function(e){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:e}})},l=function(e){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(e)})},d=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})},f=function(e){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:e})},m=function(e){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:e})},p=function(e){return Object(r["a"])({method:"GET",url:"/app/v1_0/users/".concat(e)})},b=function(e){return Object(r["a"])({methods:"GET",url:"/app/v1_0/user/articles",params:e})},v=function(e){return Object(r["a"])({methods:"GET",url:"/app/v1_0/article/collections",params:e})},h=function(e){return Object(r["a"])({methods:"GET",url:"/app/v1_0/user/histories",params:e})},g=function(e){return Object(r["a"])({methods:"GET",url:"/app/v1_0/user/followings",params:e})},w=function(e){return Object(r["a"])({methods:"GET",url:"/app/v1_0/user/followers",params:e})}}}]);
//# sourceMappingURL=chunk-fb48ffe8.cd53c6a5.js.map