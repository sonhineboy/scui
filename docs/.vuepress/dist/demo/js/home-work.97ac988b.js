(window.webpackJsonp=window.webpackJsonp||[]).push([["home-work","home-work-components-myapp"],{"6d7f":function(e,t,o){},b223:function(e,t,o){"use strict";o.r(t);var n=o("7a23");var c={components:{myapp:o("ec3f").default},data:function(){return{}},mounted:function(){this.$emit("on-mounted")},methods:{}},r=o("6b0d");const l=o.n(r)()(c,[["render",function(e,t,o,c,r,l){var a=Object(n.resolveComponent)("el-alert"),i=Object(n.resolveComponent)("myapp"),d=Object(n.resolveComponent)("el-card"),u=Object(n.resolveComponent)("el-col"),m=Object(n.resolveComponent)("el-row"),s=Object(n.resolveComponent)("el-main");return Object(n.openBlock)(),Object(n.createBlock)(s,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(a,{title:"根据角色配置,可让不同角色访问不同的控制台视图,参数值在登录成功后返回 dashboard:{type}",type:"success",style:{"margin-bottom":"20px"}}),Object(n.createVNode)(m,{gutter:15},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(u,{lg:24},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(d,{shadow:"never",header:"我的常用"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(i)]})),_:1})]})),_:1})]})),_:1})]})),_:1})}]]);t.default=l},ce4e2:function(e,t,o){"use strict";o("6d7f")},ec3f:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c={class:"myMods"},r=["href"],l={href:"javascript:void(0)"},a={class:"setMods"},i={class:"setMods"},d=Object(n.createTextVNode)("取消"),u=Object(n.createTextVNode)("保存");o("4de4"),o("d3b7"),o("caad"),o("2532"),o("b0c0"),o("159b"),o("d81d");var m=o("b76a"),s={components:{draggable:o.n(m).a},data:function(){return{mods:[],myMods:[],myModsName:[],filterMods:[],modsDrawer:!1}},mounted:function(){this.getMods()},methods:{addMods:function(){this.modsDrawer=!0},getMods:function(){var e=this;this.myModsName=this.$TOOL.data.get("my-mods")||[];var t=this.$TOOL.data.get("MENU");this.filterMenu(t),this.myMods=this.mods.filter((function(t){return e.myModsName.includes(t.name)})),this.filterMods=this.mods.filter((function(t){return!e.myModsName.includes(t.name)}))},filterMenu:function(e){var t=this;e.forEach((function(e){if(e.meta.hidden||"button"==e.meta.type)return!1;"iframe"==e.meta.type&&(e.path="/i/".concat(e.name)),e.children&&e.children.length>0?t.filterMenu(e.children):t.mods.push(e)}))},saveMods:function(){var e=this.myMods.map((function(e){return e.name}));this.$TOOL.data.set("my-mods",e),this.$message.success("设置常用成功"),this.modsDrawer=!1}}},b=(o("ce4e2"),o("6b0d"));const O=o.n(b)()(s,[["render",function(e,t,o,m,s,b){var O=Object(n.resolveComponent)("el-icon"),j=Object(n.resolveComponent)("router-link"),p=Object(n.resolveComponent)("el-icon-plus"),f=Object(n.resolveComponent)("draggable"),h=Object(n.resolveComponent)("el-button"),y=Object(n.resolveComponent)("el-drawer");return Object(n.openBlock)(),Object(n.createElementBlock)("div",null,[Object(n.createElementVNode)("ul",c,[(Object(n.openBlock)(!0),Object(n.createElementBlock)(n.Fragment,null,Object(n.renderList)(s.myMods,(function(t){return Object(n.openBlock)(),Object(n.createElementBlock)("li",{key:t.path,style:Object(n.normalizeStyle)({background:t.meta.color||"#909399"})},["link"==t.meta.type?(Object(n.openBlock)(),Object(n.createElementBlock)("a",{key:0,href:t.path,target:"_blank"},[Object(n.createVNode)(O,null,{default:Object(n.withCtx)((function(){return[(Object(n.openBlock)(),Object(n.createBlock)(Object(n.resolveDynamicComponent)(t.meta.icon||e.el-e.icon-e.menu)))]})),_:2},1024),Object(n.createElementVNode)("p",null,Object(n.toDisplayString)(t.meta.title),1)],8,r)):(Object(n.openBlock)(),Object(n.createBlock)(j,{key:1,to:{path:t.path}},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(O,null,{default:Object(n.withCtx)((function(){return[(Object(n.openBlock)(),Object(n.createBlock)(Object(n.resolveDynamicComponent)(t.meta.icon||e.el-e.icon-e.menu)))]})),_:2},1024),Object(n.createElementVNode)("p",null,Object(n.toDisplayString)(t.meta.title),1)]})),_:2},1032,["to"]))],4)})),128)),Object(n.createElementVNode)("li",{class:"modItem-add",onClick:t[0]||(t[0]=function(){return b.addMods&&b.addMods.apply(b,arguments)})},[Object(n.createElementVNode)("a",l,[Object(n.createVNode)(O,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(p)]})),_:1})])])]),Object(n.createVNode)(y,{title:"添加应用",modelValue:s.modsDrawer,"onUpdate:modelValue":t[4]||(t[4]=function(e){return s.modsDrawer=e}),size:570,"destroy-on-close":""},{footer:Object(n.withCtx)((function(){return[Object(n.createVNode)(h,{onClick:t[3]||(t[3]=function(e){return s.modsDrawer=!1})},{default:Object(n.withCtx)((function(){return[d]})),_:1}),Object(n.createVNode)(h,{type:"primary",onClick:b.saveMods},{default:Object(n.withCtx)((function(){return[u]})),_:1},8,["onClick"])]})),default:Object(n.withCtx)((function(){return[Object(n.createElementVNode)("div",a,[Object(n.createElementVNode)("h4",null,"我的常用 ( "+Object(n.toDisplayString)(s.myMods.length)+" )",1),Object(n.createVNode)(f,{tag:"ul",modelValue:s.myMods,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.myMods=e}),animation:"200","item-key":"path",group:"people"},{item:Object(n.withCtx)((function(t){var o=t.element;return[Object(n.createElementVNode)("li",{style:Object(n.normalizeStyle)({background:o.meta.color||"#909399"})},[Object(n.createVNode)(O,null,{default:Object(n.withCtx)((function(){return[(Object(n.openBlock)(),Object(n.createBlock)(Object(n.resolveDynamicComponent)(o.meta.icon||e.el-e.icon-e.menu)))]})),_:2},1024),Object(n.createElementVNode)("p",null,Object(n.toDisplayString)(o.meta.title),1)],4)]})),_:1},8,["modelValue"])]),Object(n.createElementVNode)("div",i,[Object(n.createElementVNode)("h4",null,"全部应用 ( "+Object(n.toDisplayString)(s.filterMods.length)+" )",1),Object(n.createVNode)(f,{tag:"ul",modelValue:s.filterMods,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.filterMods=e}),animation:"200","item-key":"path",sort:!1,group:"people"},{item:Object(n.withCtx)((function(t){var o=t.element;return[Object(n.createElementVNode)("li",{style:Object(n.normalizeStyle)({background:o.meta.color||"#909399"})},[Object(n.createVNode)(O,null,{default:Object(n.withCtx)((function(){return[(Object(n.openBlock)(),Object(n.createBlock)(Object(n.resolveDynamicComponent)(o.meta.icon||e.el-e.icon-e.menu)))]})),_:2},1024),Object(n.createElementVNode)("p",null,Object(n.toDisplayString)(o.meta.title),1)],4)]})),_:1},8,["modelValue"])])]})),_:1},8,["modelValue"])])}],["__scopeId","data-v-ddc038fc"]]);t.default=O}}]);