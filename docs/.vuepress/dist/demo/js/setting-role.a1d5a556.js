(window.webpackJsonp=window.webpackJsonp||[]).push([["setting-role","setting-role-permission","setting-role-save"],{2083:function(e,t,o){"use strict";o.r(t);o("ac1f"),o("841c");var n=o("7a23"),r={class:"left-panel"},a=Object(n.createTextVNode)("权限设置"),c={class:"right-panel"},l={class:"right-panel-search"},i=Object(n.createTextVNode)("查看"),s=Object(n.createTextVNode)("编辑"),u=Object(n.createTextVNode)("删除"),d=Object(n.createTextVNode)("取 消"),b=Object(n.createTextVNode)("保 存"),p=Object(n.createTextVNode)("取 消"),f=Object(n.createTextVNode)("保 存");var m=o("1da1"),O=(o("96cf"),o("a434"),o("159b"),o("2a626")),j=o("73f2"),h={name:"role",components:{saveDialog:O.default,permissionDialog:j.default},data:function(){return{apiObj:this.$API.role.list,selection:[],search:{keyword:null},saveDialogVisible:!1,saveMode:"add",titleMap:{add:"新增",edit:"编辑",show:"查看"},isSaveing:!1,permissionDialogVisible:!1,isPermissionSaveing:!1}},methods:{add:function(){this.saveMode="add",this.saveDialogVisible=!0},table_edit:function(e){var t=this;this.saveMode="edit",this.saveDialogVisible=!0,this.$nextTick((function(){t.$refs.saveDialog.setData(e)}))},table_show:function(e){var t=this;this.saveMode="show",this.saveDialogVisible=!0,this.$nextTick((function(){t.$refs.saveDialog.setData(e)}))},table_del:function(e,t){var o=this;return Object(m.a)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={id:e.id},n.next=3,o.$API.user.del.post(r);case 3:200==(a=n.sent).code?(o.$refs.table.tableData.splice(t,1),o.$message.success("删除成功")):o.$alert(a.message,"提示",{type:"error"});case 5:case"end":return n.stop()}}),n)})))()},batch_del:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$confirm("确定删除选中的 ".concat(e.selection.length," 项吗？如果删除项中含有子集将会被一并删除"),"提示",{type:"warning"}).then((function(){var t=e.$loading();e.selection.forEach((function(t){e.$refs.table.tableData.forEach((function(o,n){t.id===o.id&&e.$refs.table.tableData.splice(n,1)}))})),t.close(),e.$message.success("操作成功")})).catch((function(){}));case 1:case"end":return t.stop()}}),t)})))()},saveForm:function(){var e=this;this.$refs.saveDialog.submit(function(){var t=Object(m.a)(regeneratorRuntime.mark((function t(o){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isSaveing=!0,t.next=3,e.$API.user.save.post(o);case 3:n=t.sent,e.isSaveing=!1,200==n.code?(e.saveDialogVisible=!1,e.$message.success("操作成功")):e.$alert(n.message,"提示",{type:"error"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},selectionChange:function(e){this.selection=e},permission:function(){this.permissionDialogVisible=!0},savePermission:function(){this.$message.success("操作成功"),this.permissionDialogVisible=!1},upsearch:function(){}},render:function(e,t,o,m,O,j){var h=Object(n.resolveComponent)("el-button"),v=Object(n.resolveComponent)("el-input"),g=Object(n.resolveComponent)("el-header"),V=Object(n.resolveComponent)("el-table-column"),w=Object(n.resolveComponent)("el-popconfirm"),C=Object(n.resolveComponent)("scTable"),k=Object(n.resolveComponent)("el-main"),N=Object(n.resolveComponent)("el-container"),x=Object(n.resolveComponent)("save-dialog"),y=Object(n.resolveComponent)("el-dialog"),_=Object(n.resolveComponent)("permission-dialog");return Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,null,[Object(n.createVNode)(N,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(g,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)("div",r,[Object(n.createVNode)(h,{type:"primary",icon:"el-icon-plus",onClick:j.add},null,8,["onClick"]),Object(n.createVNode)(h,{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==O.selection.length,onClick:j.batch_del},null,8,["disabled","onClick"]),Object(n.createVNode)(h,{type:"primary",plain:"",disabled:1!=O.selection.length,onClick:j.permission},{default:Object(n.withCtx)((function(){return[a]})),_:1},8,["disabled","onClick"])]),Object(n.createVNode)("div",c,[Object(n.createVNode)("div",l,[Object(n.createVNode)(v,{modelValue:O.search.keyword,"onUpdate:modelValue":t[1]||(t[1]=function(e){return O.search.keyword=e}),placeholder:"角色名称",clearable:""},null,8,["modelValue"]),Object(n.createVNode)(h,{type:"primary",icon:"el-icon-search",onClick:j.upsearch},null,8,["onClick"])])])]})),_:1}),Object(n.createVNode)(k,{class:"nopadding"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(C,{ref:"table",apiObj:O.apiObj,"row-key":"id",onSelectionChange:j.selectionChange},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(V,{type:"selection",width:"50"}),Object(n.createVNode)(V,{label:"角色名称",prop:"label",width:"250"}),Object(n.createVNode)(V,{label:"别名",prop:"alias",width:"150"}),Object(n.createVNode)(V,{label:"排序",prop:"progress",width:"150"}),Object(n.createVNode)(V,{label:"操作",fixed:"right",align:"right",width:"140"},{default:Object(n.withCtx)((function(e){return[Object(n.createVNode)(h,{type:"text",size:"small",onClick:function(t){return j.table_show(e.row,e.$index)}},{default:Object(n.withCtx)((function(){return[i]})),_:2},1032,["onClick"]),Object(n.createVNode)(h,{type:"text",size:"small",onClick:function(t){return j.table_edit(e.row,e.$index)}},{default:Object(n.withCtx)((function(){return[s]})),_:2},1032,["onClick"]),Object(n.createVNode)(w,{title:"确定删除吗？",onConfirm:function(t){return j.table_del(e.row,e.$index)}},{reference:Object(n.withCtx)((function(){return[Object(n.createVNode)(h,{type:"text",size:"small"},{default:Object(n.withCtx)((function(){return[u]})),_:1})]})),_:2},1032,["onConfirm"])]})),_:1})]})),_:1},8,["apiObj","onSelectionChange"])]})),_:1})]})),_:1}),Object(n.createVNode)(y,{title:O.titleMap[O.saveMode],modelValue:O.saveDialogVisible,"onUpdate:modelValue":t[4]||(t[4]=function(e){return O.saveDialogVisible=e}),width:500,"destroy-on-close":""},{footer:Object(n.withCtx)((function(){return[Object(n.createVNode)(h,{onClick:t[2]||(t[2]=function(e){return O.saveDialogVisible=!1})},{default:Object(n.withCtx)((function(){return[d]})),_:1}),"show"!=O.saveMode?(Object(n.openBlock)(),Object(n.createBlock)(h,{key:0,type:"primary",onClick:t[3]||(t[3]=function(e){return j.saveForm()}),loading:O.isSaveing},{default:Object(n.withCtx)((function(){return[b]})),_:1},8,["loading"])):Object(n.createCommentVNode)("",!0)]})),default:Object(n.withCtx)((function(){return[Object(n.createVNode)(x,{ref:"saveDialog",mode:O.saveMode},null,8,["mode"])]})),_:1},8,["title","modelValue"]),Object(n.createVNode)(y,{title:"角色权限设置",modelValue:O.permissionDialogVisible,"onUpdate:modelValue":t[7]||(t[7]=function(e){return O.permissionDialogVisible=e}),width:500,"destroy-on-close":""},{footer:Object(n.withCtx)((function(){return[Object(n.createVNode)(h,{onClick:t[5]||(t[5]=function(e){return O.permissionDialogVisible=!1})},{default:Object(n.withCtx)((function(){return[p]})),_:1}),Object(n.createVNode)(h,{type:"primary",onClick:t[6]||(t[6]=function(e){return j.savePermission()}),loading:O.isPermissionSaveing},{default:Object(n.withCtx)((function(){return[f]})),_:1},8,["loading"])]})),default:Object(n.withCtx)((function(){return[Object(n.createVNode)(_,{ref:"permissionDialog"},null,512)]})),_:1},8,["modelValue"])],64)}};t.default=h},"20bb":function(e,t,o){},"2a626":function(e,t,o){"use strict";o.r(t);var n=o("7a23");var r=o("1da1"),a=(o("96cf"),{props:{mode:{type:String,default:"add"}},data:function(){return{form:{id:"",label:"",alias:"",parentId:""},rules:{sort:[{required:!0,message:"请输入排序"}],label:[{required:!0,message:"请输入角色名称"}],alias:[{required:!0,message:"请输入角色别名"}]},groups:[],groupsProps:{value:"id",checkStrictly:!0}}},mounted:function(){this.getGroup()},methods:{getGroup:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$API.role.select.get();case 2:o=t.sent,e.groups=o.data;case 4:case"end":return t.stop()}}),t)})))()},submit:function(e){var t=this;this.$refs.dialogForm.validate((function(o){if(!o)return!1;e(t.form)}))},setData:function(e){this.form.id=e.id,this.form.label=e.label,this.form.alias=e.alias,this.form.parentId=e.parentId}},render:function(e,t,o,r,a,c){var l=Object(n.resolveComponent)("el-cascader"),i=Object(n.resolveComponent)("el-form-item"),s=Object(n.resolveComponent)("el-col"),u=Object(n.resolveComponent)("el-input-number"),d=Object(n.resolveComponent)("el-row"),b=Object(n.resolveComponent)("el-input"),p=Object(n.resolveComponent)("el-form");return Object(n.openBlock)(),Object(n.createBlock)(p,{model:a.form,rules:a.rules,disabled:"show"==o.mode,ref:"dialogForm","label-width":"80px","label-position":"top"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(d,{gutter:20},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(s,{span:12},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(i,{label:"上级角色",prop:"parentId"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(l,{modelValue:a.form.parentId,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.form.parentId=e}),options:a.groups,props:a.groupsProps,"show-all-levels":!1,clearable:""},null,8,["modelValue","options","props"])]})),_:1})]})),_:1}),Object(n.createVNode)(s,{span:12},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(i,{label:"排序",prop:"sort"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(u,{modelValue:a.form.sort,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.form.sort=e}),"controls-position":"right",min:1,style:{width:"100%"}},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n.createVNode)(d,{gutter:20},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(s,{span:24},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(i,{label:"角色名称",prop:"label"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(b,{modelValue:a.form.label,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.form.label=e}),clearable:""},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n.createVNode)(s,{span:24},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(i,{label:"角色别名",prop:"alias"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(b,{modelValue:a.form.alias,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.form.alias=e}),clearable:""},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","rules","disabled"])}});t.default=a},4189:function(e,t,o){"use strict";o("20bb")},"73f2":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),r=Object(n.withScopeId)("data-v-7a76678b");Object(n.pushScopeId)("data-v-7a76678b");var a={class:"treeMain"},c={class:"treeMain"},l={class:"treeMain"},i={style:{float:"left"}},s={style:{float:"right",color:"#8492a6","font-size":"12px"}},u=Object(n.createVNode)("div",{class:"el-form-item-msg"},"用于控制角色登录后控制台的视图",-1);Object(n.popScopeId)();var d=r((function(e,t,o,d,b,p){var f=Object(n.resolveComponent)("el-tree"),m=Object(n.resolveComponent)("el-tab-pane"),O=Object(n.resolveComponent)("el-option"),j=Object(n.resolveComponent)("el-select"),h=Object(n.resolveComponent)("el-form-item"),v=Object(n.resolveComponent)("el-form"),g=Object(n.resolveComponent)("el-tabs");return Object(n.openBlock)(),Object(n.createBlock)(g,{"tab-position":"top"},{default:r((function(){return[Object(n.createVNode)(m,{label:"菜单权限"},{default:r((function(){return[Object(n.createVNode)("div",a,[Object(n.createVNode)(f,{ref:"menu","node-key":"name",data:b.menu.list,"default-checked-keys":b.menu.checked,props:b.menu.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1}),Object(n.createVNode)(m,{label:"部门权限"},{default:r((function(){return[Object(n.createVNode)("div",c,[Object(n.createVNode)(f,{ref:"group","node-key":"name",data:b.group.list,"default-checked-keys":b.group.checked,props:b.group.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1}),Object(n.createVNode)(m,{label:"类型权限"},{default:r((function(){return[Object(n.createVNode)("div",l,[Object(n.createVNode)(f,{ref:"type","node-key":"name",data:b.type.list,"default-checked-keys":b.type.checked,props:b.type.props,"show-checkbox":""},null,8,["data","default-checked-keys","props"])])]})),_:1}),Object(n.createVNode)(m,{label:"控制台"},{default:r((function(){return[Object(n.createVNode)(v,{"label-width":"100px","label-position":"left"},{default:r((function(){return[Object(n.createVNode)(h,{label:"控制台视图"},{default:r((function(){return[Object(n.createVNode)(j,{modelValue:b.dashboard,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.dashboard=e}),placeholder:"请选择"},{default:r((function(){return[(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(b.dashboardOptions,(function(e){return Object(n.openBlock)(),Object(n.createBlock)(O,{key:e.value,label:e.label,value:e.value},{default:r((function(){return[Object(n.createVNode)("span",i,Object(n.toDisplayString)(e.label),1),Object(n.createVNode)("span",s,Object(n.toDisplayString)(e.views),1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue"]),u]})),_:1})]})),_:1})]})),_:1})]})),_:1})})),b=o("1da1"),p=(o("96cf"),{data:function(){return{menu:{list:[],checked:["test","system","user","role"],props:{label:function(e){return e.meta.title}}},group:{list:[],checked:[],props:{}},type:{list:[],checked:[],props:{}},dashboard:"0",dashboardOptions:[{value:"0",label:"数据统计",views:"stats"},{value:"1",label:"工作台",views:"work"}]}},mounted:function(){this.getMenu(),this.getGroup(),this.getType()},methods:{getMenu:function(){var e=this;return Object(b.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$API.menu.list.get();case 2:o=t.sent,e.menu.list=o.data;case 4:case"end":return t.stop()}}),t)})))()},getGroup:function(){this.group.list=[{label:"JL00"},{label:"LP01"},{label:"LP07"},{label:"SL01"},{label:"TL06"},{label:"TL09"},{label:"YP07"}]},getType:function(){this.type.list=[{label:"原料采购"},{label:"厂内互供"},{label:"炼销订单"},{label:"化工统销订单"},{label:"移库单"},{label:"自销订单"}]}}});o("4189");p.render=d,p.__scopeId="data-v-7a76678b";t.default=p}}]);