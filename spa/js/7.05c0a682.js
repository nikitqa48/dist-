(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"152c":function(t,a,s){},3845:function(t,a,s){"use strict";var e=s("820c"),r=s.n(e);r.a},"71c2":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("q-separator",{attrs:{dark:"",vertical:"",inset:""}}),s("q-btn",{staticClass:"invest",attrs:{stretch:"",flat:"",label:"Инвест Липецк",to:"/"}}),s("q-space"),s("q-separator",{attrs:{dark:"",vertical:""}}),s("q-btn",{staticClass:"header_button",attrs:{stretch:"",flat:"",label:"РЕГИОН"}}),s("q-separator",{attrs:{dark:"",vertical:""}}),s("q-btn",{staticClass:"header_button",attrs:{to:"/state",stretch:"",flat:"",label:"ГОСПОДДЕРЖКА"}}),s("q-separator",{attrs:{dark:"",vertical:""}}),s("q-btn",{staticClass:"header_button",attrs:{to:"/square",stretch:"",flat:"",label:"ПЛОЩАДКИ"}}),s("q-separator",{attrs:{dark:"",vertical:""}}),s("q-btn",{staticClass:"header_button",attrs:{to:"/news",stretch:"",flat:"",label:"НОВОСТИ"}}),s("q-separator",{attrs:{dark:"",vertical:""}}),s("q-btn",{staticClass:"header_button",attrs:{to:"/contacts",stretch:"",flat:"",label:"КОНТАКТЫ"}})],1)},r=[],n={},c=n,i=(s("3845"),s("2877")),l=s("eebe"),o=s.n(l),u=s("eb85"),d=s("9c40"),b=s("2c91"),p=s("f20b"),v=s("1c1c"),f=s("0170"),h=s("66e5"),w=s("4074"),_=s("cb32"),m=s("0016"),C=s("7f67"),q=Object(i["a"])(c,e,r,!1,null,"49ef8502",null);a["a"]=q.exports;o()(q,"components",{QSeparator:u["a"],QBtn:d["a"],QSpace:b["a"],QBtnDropdown:p["a"],QList:v["a"],QItemLabel:f["a"],QItem:h["a"],QItemSection:w["a"],QAvatar:_["a"],QIcon:m["a"]}),o()(q,"directives",{ClosePopup:C["a"]})},7492:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"news"},[s("header-vue"),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"top"},[s("router-link",{staticClass:"rout",attrs:{to:{name:"news"}}},[s("div",{staticClass:"all_news"},[s("div",{staticClass:"arrow"},[s("img",{attrs:{src:"/statics/image/detail_arrow.png"}})]),s("span",{staticClass:"all_news__text"},[t._v(" Все новости")])])]),s("h5",[t._v(t._s(t.news.title))]),s("div",{staticClass:"news_image"},[s("img",{attrs:{src:t.news.image}})])],1),s("div",{staticClass:"bottom"},[t._v("\n         "+t._s(t.news.body)+"\n")])])],1)},r=[],n=s("71c2"),c={data:function(){return{news:{}}},components:{headerVue:n["a"]},mounted:function(){var t=this,a="https://backendinvest.admlr.lipetsk.ru/news/detail/"+this.$route.params.id+"?format=json";fetch(a).then((function(t){return t.json()})).then((function(a){return t.news=a})),console.log(this.news)}},i=c,l=(s("a98b"),s("2877")),o=Object(l["a"])(i,e,r,!1,null,"54746936",null);a["default"]=o.exports},"820c":function(t,a,s){},a98b:function(t,a,s){"use strict";var e=s("152c"),r=s.n(e);r.a}}]);