(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"34f1":function(t,e,a){"use strict";var i=a("38d3"),s=a.n(i);s.a},"38d3":function(t,e,a){},d553:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("forms-vue"),a("div",{staticClass:"container"},[a("div",{staticClass:"text-h4 q-mb-md"},[t._v("\n               Реализуемые проекты Липецкой области\n           ")]),a("div",{staticClass:"filter"},[a("q-expansion-item",{staticStyle:{"border-radius":"4px","margin-top":"2%"},attrs:{dark:"","expand-separator":"",label:"Фильтр проектов",dark:"","header-style":{backgroundColor:"rgba(42, 50, 74, 0.6)"}}},[a("div",{staticClass:"form_filter"},[a("q-form",{staticClass:"q-gutter-md",on:{submit:t.getProjectItems}},[a("div",{staticClass:"q-mt-xl"},[a("div",{staticClass:"mobile",staticStyle:{display:"flex","justify-content":"space-between"}},[a("q-input",{staticClass:"input_filter",attrs:{dark:"",outlined:"",label:"Сумма инвестиций (млн руб)","stack-label":"",type:"number","option-value":"1"},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),a("q-select",{staticClass:"input_filter",attrs:{standout:"bg-cyan-6 text-white",label:"Отрасль",options:t.options,dark:"",outlined:"","option-value":"id"},model:{value:t.industry,callback:function(e){t.industry=e},expression:"industry"}}),a("q-select",{staticClass:"input_filter",attrs:{standout:"bg-cyan-6 text-white",dark:"",outlined:"",label:"Год реализации",options:t.years},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1)]),a("div",{staticClass:"btn"},[a("q-btn",{staticClass:"search",attrs:{label:"Поиск",type:"submit",color:"cyan-6"}})],1)])],1)]),a("q-dialog",{model:{value:t.medium,callback:function(e){t.medium=e},expression:"medium"}},[a("q-card",{staticStyle:{width:"50%","max-width":"80vw"}},[a("q-card-section",{staticClass:"form_container"},[a("q-card-section",{staticClass:"card"},[a("div",{staticClass:"text-h6"},[a("b",[t._v("Стать инвестором")])]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{align:"right",padding:"none",color:"primary",flat:"",icon:"close"}})],1),a("q-card-section",{staticClass:"q-pt-none"},[t._v("\n         Отправьте ваши контакты и наши сотрудники свяжутся с вами в ближайшее время \n       ")]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-form",{staticClass:"form"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"column"},[a("span",[a("b",[t._v("ФИО *")])]),a("q-input",{staticClass:"input",staticStyle:{width:"100%"},attrs:{filled:"","lazy-rules":"",placeholder:"Введите ФИО",rules:[function(t){return t&&t.length>0||"Пожалуйста, введите ваше имя"}]},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("div",{staticClass:"column"},[a("span",[a("b",[t._v("Организация")])]),a("q-input",{staticClass:"input",staticStyle:{width:"100%"},attrs:{filled:"",placeholder:"Введите название"},model:{value:t.organisation,callback:function(e){t.organisation=e},expression:"organisation"}})],1)]),a("div",{staticClass:"wrap"},[a("div",{staticClass:"column"},[a("span",[a("b",[t._v("Телефон")])]),a("q-input",{staticClass:"input",attrs:{type:"number",filled:"",placeholder:"Введите телефон"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("div",{staticClass:"column"},[a("span",[a("b",[t._v("Email * ")])]),a("q-input",{staticClass:"input",attrs:{"lazy-rules":"",rules:[function(t){return t&&t.length>0||"Пожалуйста, введите вашу почту"}],filled:"",type:"email",placeholder:"Введите email*"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),a("div",{staticClass:"wrap"},[a("div",{staticClass:"column"},[a("span",[a("b",[t._v("Комментарий ")])]),a("q-input",{attrs:{filled:"",placeholder:"Введите комментарий",type:"textarea"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),a("span",{staticClass:"comment"},[a("br"),t._v("Поля помеченные * обязательны для заполнения\n   "),a("br"),a("br"),t._v("Нажимая на кнопку «Отправить» Вы даёте согласие на обработку своих персональных данных в соответствии со статьей 9 Федерального закона от 27 июля 2006 г. N 152-ФЗ «О персональных данных»\n   ")])])]),a("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"left"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"sub",staticStyle:{width:"20%","margin-top":"5%"},attrs:{label:"Отправить",rounded:"",type:"submit","no-caps":"",color:"cyan-6"},on:{click:t.submit}})],1)],1)],1)],1)],1),t._l(t.project,(function(e){return a("div",{staticClass:"item"},[a("div",{staticClass:"item_image__div"},[a("img",{attrs:{src:e.image}})]),a("div",{staticClass:"right_content"},[a("p",{staticClass:"text-h5"},[t._v(" "+t._s(e.name))]),a("p",[a("span",{staticStyle:{opacity:".6"}},[t._v(" Отрасль:")]),t._v(" "+t._s(e.industry)+" ")]),a("p",[a("span",{staticStyle:{opacity:".6"}},[t._v("Описание: ")]),t._v(t._s(e.body)+" ")]),a("p",[a("span",{staticStyle:{opacity:".6"}},[t._v("Текущее состояние проекта: ")]),t._v("  "+t._s(e.now))]),a("p",[a("span",{staticStyle:{opacity:".6"}},[t._v(" Реализация проекта: ")]),t._v("  с "+t._s(e.start)+" по "+t._s(e.finish)+"г.")]),a("p",[a("span",{staticStyle:{opacity:".6"}},[t._v("Сумма инвестиций: ")]),t._v(t._s(e.sum)+" млн.руб.")]),1==e.help?a("q-btn",{staticClass:"invest",attrs:{flat:""},on:{click:function(a){return t.form(e)}}},[t._v("Стать инвестором ")]):t._e()],1)])}))],2)])],1)},s=[],n=(a("6b54"),a("06db"),a("7f7f"),a("71c2")),l=a("22f3"),r={data:function(){return{industry:"",medium:!1,name:"",project_id:"",email:"",phone:"",organisation:"",comment:"",year:2010,number:"",options:[{id:"all",label:"Все"},{id:"1",label:"Промышленность"},{id:"4",label:"Сельское хозяйство"},{id:"6",label:"Лесное хозяйство"},{id:"7",label:"Строительство"},{id:"8",label:"Прочие виды деятельности сферы материального производства"},{id:"9",label:"Обслуживание сельского хозяйства"},{id:"10",label:"Транспорт"},{id:"11",label:"Связь"},{id:"12",label:"Торговля и общественное питание"},{id:"13",label:"Материально-техническое снабжение и сбыт"},{id:"14",label:"Заготовки"},{id:"15",label:"Информационно-вычислительное обслуживание"},{id:"16",label:"Операции с недвижимым имуществом"},{id:"17",label:"Геология и разведка недр, геодезическая и гидрометеологическая службы"},{id:"18",label:"Жилищное хозяйство"},{id:"19",label:"Коммунальное хозяйство"},{id:"20",label:"Непроизводственные виды бытового обслуживания населения"},{id:"21",label:"Здравоохранение, физическая культура и соц.обеспечение"},{id:"22",label:"Народное образование"},{id:"23",label:"Культура и искусство"},{id:"24",label:"Наука и научное обслуживание"},{id:"25",label:"Финансы, кредит, страхование, пенсионное обеспечение"},{id:"26",label:"Управление"},{id:"27",label:"Общественные объединения"}],years:["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030"],support:{},project:{}}},components:{headerVue:n["a"],formsVue:l["a"]},methods:{form:function(t){this.project_id=t.id,this.medium=!this.medium},submit:function(){var t={name:this.name,organisation:this.organisation,phone:this.phone,email:this.email,comment:this.comment,project_id:this.project_id},e=JSON.stringify(t);fetch("https://backendinvest.admlr.lipetsk.ru/request/",{method:"POST",body:e,headers:{"content-type":"application/json"}}).then((function(t){return t.json()})).then((function(t){alert("С вами свяжутся")})),this.medium=!this.medium},getProjectItems:function(){var t=this;this.project=[];var e="https://backendinvest.admlr.lipetsk.ru/project/",a="";if(""==this.industry&&""==this.number){var i="https://backendinvest.admlr.lipetsk.ru/searchyear";a=i+"/"+this.year+"?format=json".toString(),fetch(a).then((function(t){return t.json()})).then((function(e){return t.project=e}))}else if("all"==this.industry.id)a="https://backendinvest.admlr.lipetsk.ru/summyear/"+this.number+"/"+this.year+"?format=json",fetch(a).then((function(t){return t.json()})).then((function(e){return t.project=e}));else if("all"==this.industry&&""!=this.number){var s="https://backendinvest.admlr.lipetsk.ru/searchyear";a=s+"/"+this.year+"?format=json".toString(),fetch(a).then((function(t){return t.json()})).then((function(e){return t.project=e}))}else if(""==this.industry&&""!=this.number){var n="https://backendinvest.admlr.lipetsk.ru/searchyear";a=n+"/"+this.year+"?format=json".toString(),fetch(a).then((function(t){return t.json()})).then((function(e){return t.project=e}))}else a=e+this.number+"/"+this.industry.id+"/"+this.year+"?format=json".toString(),fetch(a).then((function(t){return t.json()})).then((function(e){return t.project=e}))}},created:function(){var t=this,e="https://backendinvest.admlr.lipetsk.ru/project/";fetch(e).then((function(t){return t.json()})).then((function(e){return t.project=e}))}},o=r,c=(a("34f1"),a("2877")),d=a("eebe"),u=a.n(d),p=a("3b73"),m=a("0378"),b=a("27f9"),h=a("ddd8"),f=a("9c40"),v=a("24e8"),y=a("f09f"),_=a("a370"),C=a("4b7e"),k=a("7f67"),g=Object(c["a"])(o,i,s,!1,null,"7bf3b21d",null);e["default"]=g.exports;u()(g,"components",{QExpansionItem:p["a"],QForm:m["a"],QInput:b["a"],QSelect:h["a"],QBtn:f["a"],QDialog:v["a"],QCard:y["a"],QCardSection:_["a"],QCardActions:C["a"]}),u()(g,"directives",{ClosePopup:k["a"]})}}]);