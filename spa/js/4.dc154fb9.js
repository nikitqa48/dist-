(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0271":function(e,t,n){"use strict";var i=n("68f0"),s=n.n(i);s.a},2710:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"invest"},[n("header-vue"),n("router-view"),n("q-inner-loading",{attrs:{showing:e.visible}},[n("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1),n("form-vue")],1)},s=[],a=n("68d3"),o=n("22f3"),r={components:{headerVue:a["a"],formsVue:o["a"]},data:function(){return{visible:!1}},methods:{showTextLoading:function(){var e=this;this.visible=!0,this.showSimulatedReturnData=!1,setTimeout((function(){e.visible=!1,e.showSimulatedReturnData=!0}),3e3)}},computed:{get:function(){return this.$store.state.loading.load}}},u=r,c=(n("0271"),n("2877")),d=n("74f7"),l=n("cf57"),f=n("eebe"),h=n.n(f),p=Object(c["a"])(u,i,s,!1,null,"da735038",null);t["default"]=p.exports;h()(p,"components",{QInnerLoading:d["a"],QSpinnerGears:l["a"]})},"68f0":function(e,t,n){}}]);