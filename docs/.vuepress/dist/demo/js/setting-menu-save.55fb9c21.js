(window.webpackJsonp=window.webpackJsonp||[]).push([["setting-menu-save"],{"0759":function(e,o,l){},"0dc2":function(e,o,l){"use strict";l.r(o);l("b0c0");var t=l("7a23"),c=function(e){return Object(t.pushScopeId)("data-v-6f82936a"),e=e(),Object(t.popScopeId)(),e},n=Object(t.createTextVNode)("菜单"),i=Object(t.createTextVNode)("Iframe"),a=Object(t.createTextVNode)("外链"),r=Object(t.createTextVNode)("按钮"),d=c((function(){return Object(t.createElementVNode)("div",{class:"el-form-item-msg"},"系统唯一且与内置组件名一致，否则导致缓存失效。如类型为Iframe的菜单，别名将代替源地址显示在地址栏",-1)})),u=c((function(){return Object(t.createElementVNode)("div",{class:"el-form-item-msg"},"子节点或详情页需要高亮的上级菜单路由地址",-1)})),m=Object(t.createTextVNode)("views/"),s=c((function(){return Object(t.createElementVNode)("div",{class:"el-form-item-msg"},"如父节点、链接或Iframe等没有视图的菜单不需要填写",-1)})),f=Object(t.createTextVNode)("隐藏菜单"),p=Object(t.createTextVNode)("隐藏面包屑"),b=c((function(){return Object(t.createElementVNode)("div",{class:"el-form-item-msg"},"菜单不显示在导航中，但用户依然可以访问，例如详情页",-1)})),h=Object(t.createTextVNode)("保 存"),O=c((function(){return Object(t.createElementVNode)("h2",null,"接口权限",-1)}));var j=l("c7eb"),V=l("1da1"),g=(l("d3b7"),l("159b"),{components:{scIconSelect:l("f3c0").a},props:{menu:{type:Object,default:function(){}}},data:function(){return{form:{id:"",parentId:"",name:"",path:"",component:"",redirect:"",meta:{title:"",icon:"",active:"",color:"",type:"menu"},apiList:[]},menuOptions:[],menuProps:{value:"id",label:"title",checkStrictly:!0},predefineColors:["#ff4500","#ff8c00","#ffd700","#67C23A","#00ced1","#409EFF","#c71585"],rules:[],apiListAddTemplate:{code:"",url:""},loading:!1}},watch:{menu:{handler:function(){this.menuOptions=this.treeToMap(this.menu)},deep:!0}},mounted:function(){},methods:{treeToMap:function(e){var o=this,l=[];return e.forEach((function(e){var t={id:e.id,parentId:e.parentId,title:e.meta.title,children:e.children&&e.children.length>0?o.treeToMap(e.children):null};l.push(t)})),l},save:function(){var e=this;return Object(V.a)(Object(j.a)().mark((function o(){var l;return Object(j.a)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.loading=!0,o.next=3,e.$API.demo.post.post(e.form);case 3:l=o.sent,e.loading=!1,200==l.code?e.$message.success("保存成功"):e.$message.warning(l.message);case 6:case"end":return o.stop()}}),o)})))()},setData:function(e,o){this.form=e,this.form.apiList=e.apiList||[],this.form.parentId=o}}}),w=(l("d03c"),l("6b0d"));const C=l.n(w)()(g,[["render",function(e,o,l,c,j,V){var g=Object(t.resolveComponent)("el-empty"),w=Object(t.resolveComponent)("el-col"),C=Object(t.resolveComponent)("el-input"),v=Object(t.resolveComponent)("el-form-item"),N=Object(t.resolveComponent)("el-cascader"),k=Object(t.resolveComponent)("el-radio-button"),x=Object(t.resolveComponent)("el-radio-group"),y=Object(t.resolveComponent)("sc-icon-select"),_=Object(t.resolveComponent)("el-color-picker"),B=Object(t.resolveComponent)("el-checkbox"),I=Object(t.resolveComponent)("el-button"),U=Object(t.resolveComponent)("el-form"),T=Object(t.resolveComponent)("el-table-column"),E=Object(t.resolveComponent)("sc-form-table"),S=Object(t.resolveComponent)("el-row");return Object(t.openBlock)(),Object(t.createBlock)(S,{gutter:40},{default:Object(t.withCtx)((function(){return[j.form.id?(Object(t.openBlock)(),Object(t.createElementBlock)(t.Fragment,{key:1},[Object(t.createVNode)(w,{lg:12},{default:Object(t.withCtx)((function(){return[Object(t.createElementVNode)("h2",null,Object(t.toDisplayString)(j.form.meta.title||"新增菜单"),1),Object(t.createVNode)(U,{model:j.form,rules:j.rules,ref:"dialogForm","label-width":"80px","label-position":"left"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(v,{label:"显示名称",prop:"meta.title"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(C,{modelValue:j.form.meta.title,"onUpdate:modelValue":o[0]||(o[0]=function(e){return j.form.meta.title=e}),clearable:"",placeholder:"菜单显示名字"},null,8,["modelValue"])]})),_:1}),Object(t.createVNode)(v,{label:"上级菜单",prop:"parentId"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(N,{modelValue:j.form.parentId,"onUpdate:modelValue":o[1]||(o[1]=function(e){return j.form.parentId=e}),options:j.menuOptions,props:j.menuProps,"show-all-levels":!1,placeholder:"顶级菜单",clearable:"",disabled:""},null,8,["modelValue","options","props"])]})),_:1}),Object(t.createVNode)(v,{label:"类型",prop:"meta.type"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(x,{modelValue:j.form.meta.type,"onUpdate:modelValue":o[2]||(o[2]=function(e){return j.form.meta.type=e})},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(k,{label:"menu"},{default:Object(t.withCtx)((function(){return[n]})),_:1}),Object(t.createVNode)(k,{label:"iframe"},{default:Object(t.withCtx)((function(){return[i]})),_:1}),Object(t.createVNode)(k,{label:"link"},{default:Object(t.withCtx)((function(){return[a]})),_:1}),Object(t.createVNode)(k,{label:"button"},{default:Object(t.withCtx)((function(){return[r]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),Object(t.createVNode)(v,{label:"别名",prop:"name"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(C,{modelValue:j.form.name,"onUpdate:modelValue":o[3]||(o[3]=function(e){return j.form.name=e}),clearable:"",placeholder:"菜单别名"},null,8,["modelValue"]),d]})),_:1}),Object(t.createVNode)(v,{label:"菜单图标",prop:"meta.icon"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(y,{modelValue:j.form.meta.icon,"onUpdate:modelValue":o[4]||(o[4]=function(e){return j.form.meta.icon=e}),clearable:""},null,8,["modelValue"])]})),_:1}),Object(t.createVNode)(v,{label:"路由地址",prop:"path"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(C,{modelValue:j.form.path,"onUpdate:modelValue":o[5]||(o[5]=function(e){return j.form.path=e}),clearable:"",placeholder:""},null,8,["modelValue"])]})),_:1}),Object(t.createVNode)(v,{label:"重定向",prop:"redirect"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(C,{modelValue:j.form.redirect,"onUpdate:modelValue":o[6]||(o[6]=function(e){return j.form.redirect=e}),clearable:"",placeholder:""},null,8,["modelValue"])]})),_:1}),Object(t.createVNode)(v,{label:"菜单高亮",prop:"active"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(C,{modelValue:j.form.active,"onUpdate:modelValue":o[7]||(o[7]=function(e){return j.form.active=e}),clearable:"",placeholder:""},null,8,["modelValue"]),u]})),_:1}),Object(t.createVNode)(v,{label:"视图",prop:"component"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(C,{modelValue:j.form.component,"onUpdate:modelValue":o[8]||(o[8]=function(e){return j.form.component=e}),clearable:"",placeholder:""},{prepend:Object(t.withCtx)((function(){return[m]})),_:1},8,["modelValue"]),s]})),_:1}),Object(t.createVNode)(v,{label:"颜色",prop:"color"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(_,{modelValue:j.form.meta.color,"onUpdate:modelValue":o[9]||(o[9]=function(e){return j.form.meta.color=e}),predefine:j.predefineColors},null,8,["modelValue","predefine"])]})),_:1}),Object(t.createVNode)(v,{label:"是否隐藏",prop:"meta.hidden"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(B,{modelValue:j.form.meta.hidden,"onUpdate:modelValue":o[10]||(o[10]=function(e){return j.form.meta.hidden=e})},{default:Object(t.withCtx)((function(){return[f]})),_:1},8,["modelValue"]),Object(t.createVNode)(B,{modelValue:j.form.meta.hiddenBreadcrumb,"onUpdate:modelValue":o[11]||(o[11]=function(e){return j.form.meta.hiddenBreadcrumb=e})},{default:Object(t.withCtx)((function(){return[p]})),_:1},8,["modelValue"]),b]})),_:1}),Object(t.createVNode)(v,null,{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(I,{type:"primary",onClick:V.save,loading:j.loading},{default:Object(t.withCtx)((function(){return[h]})),_:1},8,["onClick","loading"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1}),Object(t.createVNode)(w,{lg:12,class:"apilist"},{default:Object(t.withCtx)((function(){return[O,Object(t.createVNode)(E,{modelValue:j.form.apiList,"onUpdate:modelValue":o[12]||(o[12]=function(e){return j.form.apiList=e}),addTemplate:j.apiListAddTemplate,placeholder:"暂无匹配接口权限"},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(T,{prop:"code",label:"标识",width:"150"},{default:Object(t.withCtx)((function(e){return[Object(t.createVNode)(C,{modelValue:e.row.code,"onUpdate:modelValue":function(o){return e.row.code=o},placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(t.createVNode)(T,{prop:"url",label:"Api url"},{default:Object(t.withCtx)((function(e){return[Object(t.createVNode)(C,{modelValue:e.row.url,"onUpdate:modelValue":function(o){return e.row.url=o},placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["modelValue","addTemplate"])]})),_:1})],64)):(Object(t.openBlock)(),Object(t.createBlock)(w,{key:0},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(g,{description:"请选择左侧菜单后操作","image-size":100})]})),_:1}))]})),_:1})}],["__scopeId","data-v-6f82936a"]]);o.default=C},"397f":function(e,o,l){},5819:function(e,o,l){"use strict";l("0759")},d03c:function(e,o,l){"use strict";l("397f")},f3c0:function(e,o,l){"use strict";l("b0c0");var t=l("7a23"),c={class:"sc-icon-select"},n={class:"sc-icon-select__list"},i=["data-icon"];var a=l("2909"),r=[{name:"默认",icons:["el-icon-aim","el-icon-add-location","el-icon-apple","el-icon-alarm-clock","el-icon-arrow-down","el-icon-arrow-down-bold","el-icon-arrow-left","el-icon-arrow-left-bold","el-icon-arrow-right-bold","el-icon-arrow-up","el-icon-back","el-icon-bell","el-icon-baseball","el-icon-bicycle","el-icon-bell-filled","el-icon-basketball","el-icon-bottom","el-icon-box","el-icon-briefcase","el-icon-brush-filled","el-icon-bowl","el-icon-avatar","el-icon-brush","el-icon-burger","el-icon-camera","el-icon-bottom-left","el-icon-calendar","el-icon-caret-bottom","el-icon-caret-left","el-icon-caret-right","el-icon-caret-top","el-icon-chat-dot-square","el-icon-cellphone","el-icon-chat-dot-round","el-icon-chat-line-square","el-icon-chat-line-round","el-icon-chat-round","el-icon-check","el-icon-chat-square","el-icon-cherry","el-icon-chicken","el-icon-circle-check-filled","el-icon-circle-check","el-icon-checked","el-icon-circle-close-filled","el-icon-circle-close","el-icon-arrow-right","el-icon-circle-plus","el-icon-clock","el-icon-close-bold","el-icon-close","el-icon-cloudy","el-icon-circle-plus-filled","el-icon-coffee-cup","el-icon-cold-drink","el-icon-coin","el-icon-arrow-up-bold","el-icon-collection-tag","el-icon-bottom-right","el-icon-coffee","el-icon-camera-filled","el-icon-collection","el-icon-cpu","el-icon-crop","el-icon-coordinate","el-icon-d-arrow-left","el-icon-compass","el-icon-connection","el-icon-credit-card","el-icon-data-board","el-icon-d-arrow-right","el-icon-dessert","el-icon-delete-location","el-icon-d-caret","el-icon-delete","el-icon-dish","el-icon-dish-dot","el-icon-document-copy","el-icon-discount","el-icon-document-checked","el-icon-document-add","el-icon-document-remove","el-icon-data-analysis","el-icon-delete-filled","el-icon-download","el-icon-drizzling","el-icon-eleme","el-icon-eleme-filled","el-icon-edit","el-icon-failed","el-icon-expand","el-icon-female","el-icon-document","el-icon-film","el-icon-finished","el-icon-data-line","el-icon-filter","el-icon-flag","el-icon-folder-checked","el-icon-first-aid-kit","el-icon-folder-add","el-icon-fold","el-icon-folder-delete","el-icon-document-delete","el-icon-folder","el-icon-food","el-icon-folder-opened","el-icon-football","el-icon-folder-remove","el-icon-fries","el-icon-full-screen","el-icon-fork-spoon","el-icon-goblet","el-icon-goblet-full","el-icon-goods","el-icon-goblet-square-full","el-icon-goods-filled","el-icon-grid","el-icon-grape","el-icon-goblet-square","el-icon-headset","el-icon-comment","el-icon-help-filled","el-icon-histogram","el-icon-home-filled","el-icon-help","el-icon-house","el-icon-ice-cream-round","el-icon-hot-water","el-icon-ice-cream","el-icon-files","el-icon-ice-cream-square","el-icon-key","el-icon-ice-tea","el-icon-knife-fork","el-icon-iphone","el-icon-info-filled","el-icon-link","el-icon-ice-drink","el-icon-lightning","el-icon-loading","el-icon-lollipop","el-icon-location-information","el-icon-lock","el-icon-location-filled","el-icon-magnet","el-icon-male","el-icon-location","el-icon-menu","el-icon-magic-stick","el-icon-message-box","el-icon-map-location","el-icon-mic","el-icon-message","el-icon-medal","el-icon-milk-tea","el-icon-microphone","el-icon-minus","el-icon-money","el-icon-moon-night","el-icon-monitor","el-icon-moon","el-icon-more","el-icon-mostly-cloudy","el-icon-more-filled","el-icon-mouse","el-icon-mug","el-icon-mute","el-icon-no-smoking","el-icon-mute-notification","el-icon-notification","el-icon-notebook","el-icon-odometer","el-icon-office-building","el-icon-operation","el-icon-opportunity","el-icon-orange","el-icon-open","el-icon-paperclip","el-icon-pear","el-icon-partly-cloudy","el-icon-phone","el-icon-picture-filled","el-icon-phone-filled","el-icon-picture-rounded","el-icon-guide","el-icon-place","el-icon-platform","el-icon-pie-chart","el-icon-pointer","el-icon-plus","el-icon-position","el-icon-postcard","el-icon-present","el-icon-price-tag","el-icon-promotion","el-icon-pouring","el-icon-reading-lamp","el-icon-question-filled","el-icon-printer","el-icon-picture","el-icon-refresh-right","el-icon-reading","el-icon-refresh-left","el-icon-refresh","el-icon-refrigerator","el-icon-remove-filled","el-icon-right","el-icon-scale-to-original","el-icon-school","el-icon-remove","el-icon-scissor","el-icon-select","el-icon-management","el-icon-search","el-icon-sell","el-icon-semi-select","el-icon-share","el-icon-setting","el-icon-service","el-icon-ship","el-icon-set-up","el-icon-shopping-bag","el-icon-shop","el-icon-shopping-cart","el-icon-shopping-cart-full","el-icon-soccer","el-icon-sold-out","el-icon-smoking","el-icon-sort-down","el-icon-sort","el-icon-sort-up","el-icon-star","el-icon-stamp","el-icon-star-filled","el-icon-stopwatch","el-icon-success-filled","el-icon-suitcase","el-icon-sugar","el-icon-sunny","el-icon-sunrise","el-icon-switch","el-icon-ticket","el-icon-sunset","el-icon-tickets","el-icon-switch-button","el-icon-takeaway-box","el-icon-toilet-paper","el-icon-timer","el-icon-tools","el-icon-top-left","el-icon-top","el-icon-top-right","el-icon-trend-charts","el-icon-turn-off","el-icon-unlock","el-icon-trophy","el-icon-umbrella","el-icon-upload-filled","el-icon-user-filled","el-icon-upload","el-icon-user","el-icon-van","el-icon-copy-document","el-icon-video-pause","el-icon-video-camera-filled","el-icon-view","el-icon-wallet","el-icon-warning-filled","el-icon-watch","el-icon-video-play","el-icon-watermelon","el-icon-video-camera","el-icon-wallet-filled","el-icon-warning","el-icon-list","el-icon-zoom-in","el-icon-zoom-out","el-icon-rank","el-icon-wind-power"]},{name:"扩展",icons:["sc-icon-vue","sc-icon-code","sc-icon-wechat","sc-icon-bug-fill","sc-icon-bug-line","sc-icon-file-word","sc-icon-file-excel","sc-icon-file-ppt","sc-icon-organization","sc-icon-upload","sc-icon-download"]}],d={props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"请输入或者选择图标"},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{defaultValue:"",dialogVisible:!1,data:[]}},watch:{modelValue:function(e){this.defaultValue=e},defaultValue:function(e){this.$emit("update:modelValue",e)}},mounted:function(){var e;this.defaultValue=this.modelValue,(e=this.data).push.apply(e,Object(a.a)(r))},methods:{open:function(){if(this.disabled)return!1;this.dialogVisible=!0},selectIcon:function(e){if("SPAN"!=e.target.tagName)return!1;this.defaultValue=e.target.dataset.icon,this.dialogVisible=!1,this.$emit("update:modelValue",this.defaultValue)}}},u=(l("5819"),l("6b0d"));const m=l.n(u)()(d,[["render",function(e,o,l,a,r,d){var u=Object(t.resolveComponent)("el-button"),m=Object(t.resolveComponent)("el-input"),s=Object(t.resolveComponent)("el-tag"),f=Object(t.resolveComponent)("el-icon"),p=Object(t.resolveComponent)("el-scrollbar"),b=Object(t.resolveComponent)("el-tab-pane"),h=Object(t.resolveComponent)("el-tabs"),O=Object(t.resolveComponent)("el-dialog");return Object(t.openBlock)(),Object(t.createElementBlock)("div",c,[Object(t.createVNode)(m,{modelValue:r.defaultValue,"onUpdate:modelValue":o[0]||(o[0]=function(e){return r.defaultValue=e}),"prefix-icon":r.defaultValue||"none",placeholder:l.placeholder,clearable:l.clearable,disabled:l.disabled},{append:Object(t.withCtx)((function(){return[Object(t.createVNode)(u,{icon:"el-icon-more-filled",onClick:d.open},null,8,["onClick"])]})),_:1},8,["modelValue","prefix-icon","placeholder","clearable","disabled"]),Object(t.createVNode)(O,{title:"图标选择器",modelValue:r.dialogVisible,"onUpdate:modelValue":o[2]||(o[2]=function(e){return r.dialogVisible=e}),width:780,"destroy-on-close":""},{default:Object(t.withCtx)((function(){return[Object(t.createVNode)(h,{style:{"margin-top":"-30px"}},{default:Object(t.withCtx)((function(){return[(Object(t.openBlock)(!0),Object(t.createElementBlock)(t.Fragment,null,Object(t.renderList)(r.data,(function(e){return Object(t.openBlock)(),Object(t.createBlock)(b,{key:e.name,lazy:""},{label:Object(t.withCtx)((function(){return[Object(t.createTextVNode)(Object(t.toDisplayString)(e.name)+" ",1),Object(t.createVNode)(s,{size:"small",type:"info"},{default:Object(t.withCtx)((function(){return[Object(t.createTextVNode)(Object(t.toDisplayString)(e.icons.length),1)]})),_:2},1024)]})),default:Object(t.withCtx)((function(){return[Object(t.createElementVNode)("div",n,[Object(t.createVNode)(p,null,{default:Object(t.withCtx)((function(){return[Object(t.createElementVNode)("ul",{onClick:o[1]||(o[1]=function(){return d.selectIcon&&d.selectIcon.apply(d,arguments)})},[(Object(t.openBlock)(!0),Object(t.createElementBlock)(t.Fragment,null,Object(t.renderList)(e.icons,(function(e){return Object(t.openBlock)(),Object(t.createElementBlock)("li",{key:e},[Object(t.createElementVNode)("span",{"data-icon":e},null,8,i),Object(t.createVNode)(f,null,{default:Object(t.withCtx)((function(){return[(Object(t.openBlock)(),Object(t.createBlock)(Object(t.resolveDynamicComponent)(e)))]})),_:2},1024)])})),128))])]})),_:2},1024)])]})),_:2},1024)})),128))]})),_:1})]})),_:1},8,["modelValue"])])}],["__scopeId","data-v-7af51376"]]);o.a=m}}]);