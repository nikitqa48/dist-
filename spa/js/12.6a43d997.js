(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{5923:function(t,a,e){"use strict";var s=e("9b4c"),i=e.n(s);i.a},"6d55":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"support_wrap"},[e("div",{staticClass:"container"},[e("h4",[t._v(" Государственная поддержка ")]),e("q-form",{staticClass:"blue_container",on:{submit:t.onSubmit}},[e("div",{staticClass:"perekrestok"},[e("div",{staticClass:"mobile"},[e("div",{staticClass:"wrap"},[e("span",{staticClass:"text"},[t._v("Вид деятельности: ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.industry,expression:"industry"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.industry=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"1"}},[t._v("Промышленность ")]),e("option",{attrs:{value:"4"}},[t._v("Сельское Хозяйство ")]),e("option",{attrs:{value:"6"}},[t._v("Лесное Хозяйство ")]),e("option",{attrs:{value:"7"}},[t._v("Строительство ")]),e("option",{attrs:{value:"8"}},[t._v("Прочие виды материального произ-ва")]),e("option",{attrs:{value:""}},[t._v("Все отрасли")])])]),e("div",{staticClass:"wrap"},[e("span",{staticClass:"text"},[t._v(" Вид поддержки: ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.type=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"direct"}},[t._v(" Прямая финансовая поддержка ")]),e("option",{attrs:{value:"loan_funding"}},[t._v(" Заемная финансовая поддержка ")]),e("option",{attrs:{value:"profit"}},[t._v(" Льготы по налогу на прибыль")]),e("option",{attrs:{value:"transport"}},[t._v(" Льготы по транспортному налогу")]),e("option",{attrs:{value:"property"}},[t._v(" Льготы по налогу на имущество")]),e("option",{attrs:{value:"subsidies"}},[t._v(" Субсидии")]),e("option",{attrs:{value:"grant"}},[t._v(" Гранты")]),e("option",{attrs:{value:"rent"}},[t._v(" Льготы по аренде")]),e("option",{attrs:{value:"garant"}},[t._v(" Гарантии")]),e("option",{attrs:{value:"earth"}},[t._v(" Льготы по земельному налогу")]),e("option",{attrs:{value:"nds"}},[t._v(" Льготы по уплате НДС")]),e("option",{attrs:{value:"customs"}},[t._v(" Льготы по уплате НДС")]),e("option",{attrs:{value:"infrastructure"}},[t._v(" Субсидии на инфраструктуру")]),e("option",{attrs:{value:""}},[t._v(" Все виды поддержки")])])]),e("div",{staticClass:"wrap"},[e("span",{staticClass:"text"},[t._v(" Тип проекта: ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.type_project,expression:"type_project"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.type_project=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"3"}},[t._v(" Модернизация ")]),e("option",{attrs:{value:"2"}},[t._v(" Реконструкция ")]),e("option",{attrs:{value:"1"}},[t._v(" Новое строительство")]),e("option",{attrs:{value:""}},[t._v(" Все")])])]),e("div",{staticClass:"wrap"},[e("span",{staticClass:"text"},[t._v("  Тип получателя поддержки: ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.recipient,expression:"recipient"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.recipient=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"ip"}},[t._v(" МСП ")]),e("option",{attrs:{value:"lawyer"}},[t._v(" Юр. Лицо")]),e("option",{attrs:{value:"municipality"}},[t._v("Муниципалитет")]),e("option",{attrs:{value:""}},[t._v(" Все  ")])])]),e("button",{staticClass:"more",attrs:{type:"submit"}},[t._v(" Поиск ")])])])]),e("div",{staticClass:"items"},t._l(t.support,(function(a){return 0!=t.support.length?e("div",{staticClass:"item"},[e("router-link",{staticClass:"rout",attrs:{to:{name:"support_detail",params:{id:a.id}}}},[e("div",{staticClass:"item_name"},[t._v(" "+t._s(a.name)+" ")]),e("div",{staticClass:"border"}),e("div",{staticClass:"item_bottom"},[e("div",{staticClass:"wrapper"},[e("span",{staticClass:"grey"},[t._v("Получатели ")]),"small"==a.recipient?e("span",{staticClass:"poluch"},[t._v("МСП ")]):t._e(),"innovation"==a.recipient?e("span",{staticClass:"poluch"},[t._v("Инновации ")]):t._e(),"all"==a.recipient?e("span",{staticClass:"poluch"},[t._v("для всех ")]):t._e(),"municipality"==a.recipient?e("span",{staticClass:"poluch"},[t._v("Муниципалитет")]):t._e(),"industrial"==a.recipient?e("span",{staticClass:"poluch"},[t._v("Резиденты индустриальных парков")]):t._e(),"developers"==a.recipient?e("span",{staticClass:"poluch"},[t._v("Разработчики ПО")]):t._e(),"resident_oez"==a.recipient?e("span",{staticClass:"poluch"},[t._v("Резиденты ОЭЗРУ Липецк")]):t._e(),"subject"==a.recipient?e("span",{staticClass:"poluch"},[t._v("Субъект")]):t._e(),"legally"==a.recipient?e("span",{staticClass:"poluch"},[t._v("Юридические лица")]):t._e(),"cooperatives"==a.recipient?e("span",{staticClass:"poluch"},[t._v("Кооперативы")]):t._e(),"not_msp"==a.recipient?e("span",{staticClass:"poluch"},[t._v("Все кроме МСП")]):t._e()]),e("div",{staticClass:"wrapper"},[e("span",{staticClass:"grey"},[t._v("Объем поддержки ")]),e("span",{staticClass:"poluch"},[t._v(t._s(a.money))])]),e("div",{staticClass:"wrapper"},[e("span",{staticClass:"grey"},[t._v("Вид поддержки ")]),"direct"==a.type?e("span",{staticClass:"poluch"},[t._v("Инвестиции ")]):t._e(),"loan_funding"==a.type?e("span",{staticClass:"poluch"},[t._v("Заемное финансирование ")]):t._e(),"loan"==a.type?e("span",{staticClass:"poluch"},[t._v("Налоговые льготы по налогу на займ ")]):t._e(),"subsidies"==a.type?e("span",{staticClass:"poluch"},[t._v("Субсидии ")]):t._e(),"profit"==a.type?e("span",{staticClass:"poluch"},[t._v("Налоговые льготы по налогу на прибыль ")]):t._e(),"property"==a.type?e("span",{staticClass:"poluch"},[t._v("Налоговые льготы по налогу на имущество ")]):t._e(),"grant"==a.type?e("span",{staticClass:"poluch"},[t._v("Гранты")]):t._e(),"rent"==a.type?e("span",{staticClass:"poluch"},[t._v("льготы по аренде")]):t._e(),"garant"==a.type?e("span",{staticClass:"poluch"},[t._v("гарантии")]):t._e(),"transport"==a.type?e("span",{staticClass:"poluch"},[t._v("Налоговые льготы по транспортному налогу")]):t._e(),"earth"==a.type?e("span",{staticClass:"poluch"},[t._v("налоговые льготы по земельному налогу")]):t._e(),"nds"==a.type?e("span",{staticClass:"poluch"},[t._v("налоговые льготы по уплате НДС")]):t._e(),"customs"==a.type?e("span",{staticClass:"poluch"},[t._v("таможенные льготы")]):t._e(),"infrastructure"==a.type?e("span",{staticClass:"poluch"},[t._v("Субсидии на инфраструктуру")]):t._e(),"loan_profit"==a.type?e("span",{staticClass:"poluch"},[t._v("кредиты под залог создаваемого имущества")]):t._e()]),e("div",{staticClass:"wrapper"},[e("span",{staticClass:"grey"},[t._v("Вид деятельности ")]),void 0!=a.industry?e("span",{staticClass:"poluch"},[t._v(t._s(a.industry.join(", ")))]):t._e()])])])],1):t._e()})),0)],1)])},i=[],l=(e("2f62"),{data:function(){return{options:["1","2","3"],industry:"",type:"",recipient:"",type_project:"",shape:"line",support_type:"",optns:[{id:"",label:"Все"},{id:"1",label:"Промышленность"},{id:"4",label:"Сельское хозяйство"},{id:"6",label:"Лесное хозяйство"},{id:"7",label:"Строительство"},{id:"8",label:"Прочие виды деятельности сферы материального производства"},{id:"9",label:"Обслуживание сельского хозяйства"},{id:"10",label:"Транспорт"},{id:"11",label:"Связь"},{id:"12",label:"Торговля и общественное питание"},{id:"13",label:"Материально-техническое снабжение и сбыт"},{id:"14",label:"Заготовки"},{id:"15",label:"Информационно-вычислительное обслуживание"},{id:"16",label:"Операции с недвижимым имуществом"},{id:"17",label:"Геология и разведка недр, геодезическая и гидрометеологическая службы"},{id:"18",label:"Жилищное хозяйство"},{id:"19",label:"Коммунальное хозяйство"},{id:"20",label:"Непроизводственные виды бытового обслуживания населения"},{id:"21",label:"Здравоохранение, физическая культура и соц.обеспечение"},{id:"22",label:"Народное образование"},{id:"23",label:"Культура и искусство"},{id:"24",label:"Наука и научное обслуживание"},{id:"25",label:"Финансы, кредит, страхование, пенсионное обеспечение"},{id:"26",label:"Управление"},{id:"27",label:"Общественные объединения"}],optns_type:[{id:"",label:"Все виды поддержки"},{id:"direct",label:"Прямая финансовая поддержка"},{id:"loan_funding",label:"Заемная финансовая поддержка"},{id:"profit",label:"Льготы по налогу на прибыль"},{id:"transport",label:"Льготы по транспортному налогу"},{id:"property",label:"Льготы по налогу на имущество"},{id:"subsidies",label:"Субсидии"},{id:"grant",label:"Гранты"},{id:"rent",label:"Льготы по аренде"},{id:"garant",label:"Гарантии"},{id:"earth",label:"Льготы по земельному налогу"},{id:"nds",label:"Льготы по уплате НДС"},{id:"infrastructure",label:"Субсидии на инфраструктуру"},{id:"loan_profit",label:"Кредиты под залог создаваемого имущества"},{id:"17",label:"Геология и разведка недр, геодезическая и гидрометеологическая службы"},{id:"18",label:"Жилищное хозяйство"}]}},methods:{onSubmit:function(t){new FormData(t.target);var a="https://backendinvest.admlr.lipetsk.ru/support/";""==this.industry&&""==this.type_project.valueOf()?(a="https://backendinvest.admlr.lipetsk.ru/support/?format=json&type="+this.type+"&form="+this.recipient,this.$store.dispatch("filterSupportData",a)):""==this.type_project.valueOf()?(console.log(this.type.id),a="https://backendinvest.admlr.lipetsk.ru/support/?format=json&type="+this.type+"&form="+this.recipient+"&industry="+this.industry,this.$store.dispatch("filterSupportData",a)):""==this.industry.valueOf()?(a="https://backendinvest.admlr.lipetsk.ru/support/?format=json&type="+this.type+"&type_project="+this.type_project+"&form="+this.recipient,this.$store.dispatch("filterSupportData",a)):this.$store.dispatch("filterSupportData",a)}},mounted:function(){this.$store.dispatch("allSupportData")},computed:{support:function(){return this.$store.getters.supports}}}),p=l,r=(e("5923"),e("2877")),n=e("eebe"),o=e.n(n),c=e("0378"),u=e("ddd8"),v=Object(r["a"])(p,s,i,!1,null,"7c1bceb4",null);a["default"]=v.exports;o()(v,"components",{QForm:c["a"],QSelect:u["a"]})},"9b4c":function(t,a,e){}}]);