(window.webpackJsonp=window.webpackJsonp||[]).push([["setting-role","setting-role-permission","setting-role-save"],{"0074":function(e,t,n){},2083:function(e,t,n){"use strict";n.r(t);n("ac1f"),n("841c");var o=n("7a23"),a={class:"left-panel"},r=Object(o.createTextVNode)("权限设置"),c={class:"right-panel"},l={class:"right-panel-search"},i=Object(o.createTextVNode)("查看"),s=Object(o.createTextVNode)("编辑"),u=Object(o.createTextVNode)("删除");var d=n("c7eb"),b=n("1da1"),f=(n("d3b7"),n("159b"),n("2a626")),p=n("73f2"),m={name:"role",components:{saveDialog:f.default,permissionDialog:p.default},data:function(){return{dialog:{save:!1,permission:!1},apiObj:this.$API.system.role.list,selection:[],search:{keyword:null}}},methods:{add:function(){var e=this;this.dialog.save=!0,this.$nextTick((function(){e.$refs.saveDialog.open()}))},table_edit:function(e){var t=this;this.dialog.save=!0,this.$nextTick((function(){t.$refs.saveDialog.open("edit").setData(e)}))},table_show:function(e){var t=this;this.dialog.save=!0,this.$nextTick((function(){t.$refs.saveDialog.open("show").setData(e)}))},permission:function(){var e=this;this.dialog.permission=!0,this.$nextTick((function(){e.$refs.permissionDialog.open()}))},table_del:function(e){var t=this;return Object(b.a)(Object(d.a)().mark((function n(){var o,a;return Object(d.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={id:e.id},n.next=3,t.$API.demo.post.post(o);case 3:200==(a=n.sent).code?(t.$refs.table.refresh(),t.$message.success("删除成功")):t.$alert(a.message,"提示",{type:"error"});case 5:case"end":return n.stop()}}),n)})))()},batch_del:function(){var e=this;return Object(b.a)(Object(d.a)().mark((function t(){return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$confirm("确定删除选中的 ".concat(e.selection.length," 项吗？如果删除项中含有子集将会被一并删除"),"提示",{type:"warning"}).then((function(){var t=e.$loading();e.$refs.table.refresh(),t.close(),e.$message.success("操作成功")})).catch((function(){}));case 1:case"end":return t.stop()}}),t)})))()},selectionChange:function(e){this.selection=e},changeSwitch:function(e,t){var n=this;t.status="1"==t.status?"0":"1",t.$switch_status=!0,setTimeout((function(){delete t.$switch_status,t.status=e,n.$message.success("操作成功")}),500)},upsearch:function(){},filterTree:function(e){var t=null;return function n(o){o.forEach((function(o){o.id==e&&(t=o),o.children&&n(o.children)}))}(this.$refs.table.tableData),t},handleSaveSuccess:function(e,t){("add"==t||"edit"==t)&&this.$refs.table.refresh()}}},O=n("6b0d");const h=n.n(O)()(m,[["render",function(e,t,n,d,b,f){var p=Object(o.resolveComponent)("el-button"),m=Object(o.resolveComponent)("el-input"),O=Object(o.resolveComponent)("el-header"),h=Object(o.resolveComponent)("el-table-column"),j=Object(o.resolveComponent)("el-switch"),v=Object(o.resolveComponent)("el-popconfirm"),V=Object(o.resolveComponent)("el-button-group"),w=Object(o.resolveComponent)("scTable"),C=Object(o.resolveComponent)("el-main"),g=Object(o.resolveComponent)("el-container"),N=Object(o.resolveComponent)("save-dialog"),x=Object(o.resolveComponent)("permission-dialog");return Object(o.openBlock)(),Object(o.createElementBlock)(o.Fragment,null,[Object(o.createVNode)(g,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(O,null,{default:Object(o.withCtx)((function(){return[Object(o.createElementVNode)("div",a,[Object(o.createVNode)(p,{type:"primary",icon:"el-icon-plus",onClick:f.add},null,8,["onClick"]),Object(o.createVNode)(p,{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==b.selection.length,onClick:f.batch_del},null,8,["disabled","onClick"]),Object(o.createVNode)(p,{type:"primary",plain:"",disabled:1!=b.selection.length,onClick:f.permission},{default:Object(o.withCtx)((function(){return[r]})),_:1},8,["disabled","onClick"])]),Object(o.createElementVNode)("div",c,[Object(o.createElementVNode)("div",l,[Object(o.createVNode)(m,{modelValue:b.search.keyword,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b.search.keyword=e}),placeholder:"角色名称",clearable:""},null,8,["modelValue"]),Object(o.createVNode)(p,{type:"primary",icon:"el-icon-search",onClick:f.upsearch},null,8,["onClick"])])])]})),_:1}),Object(o.createVNode)(C,{class:"nopadding"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(w,{ref:"table",apiObj:b.apiObj,"row-key":"id",onSelectionChange:f.selectionChange,stripe:""},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(h,{type:"selection",width:"50"}),Object(o.createVNode)(h,{label:"#",type:"index",width:"50"}),Object(o.createVNode)(h,{label:"角色名称",prop:"label",width:"150"}),Object(o.createVNode)(h,{label:"别名",prop:"alias",width:"200"}),Object(o.createVNode)(h,{label:"排序",prop:"sort",width:"80"}),Object(o.createVNode)(h,{label:"状态",prop:"status",width:"80"},{default:Object(o.withCtx)((function(e){return[Object(o.createVNode)(j,{modelValue:e.row.status,"onUpdate:modelValue":function(t){return e.row.status=t},onChange:function(t){return f.changeSwitch(t,e.row)},loading:e.row.$switch_status,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue","onChange","loading"])]})),_:1}),Object(o.createVNode)(h,{label:"创建时间",prop:"date",width:"180"}),Object(o.createVNode)(h,{label:"备注",prop:"remark","min-width":"150"}),Object(o.createVNode)(h,{label:"操作",fixed:"right",align:"right",width:"170"},{default:Object(o.withCtx)((function(e){return[Object(o.createVNode)(V,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(p,{text:"",type:"primary",size:"small",onClick:function(t){return f.table_show(e.row,e.$index)}},{default:Object(o.withCtx)((function(){return[i]})),_:2},1032,["onClick"]),Object(o.createVNode)(p,{text:"",type:"primary",size:"small",onClick:function(t){return f.table_edit(e.row,e.$index)}},{default:Object(o.withCtx)((function(){return[s]})),_:2},1032,["onClick"]),Object(o.createVNode)(v,{title:"确定删除吗？",onConfirm:function(t){return f.table_del(e.row,e.$index)}},{reference:Object(o.withCtx)((function(){return[Object(o.createVNode)(p,{text:"",type:"primary",size:"small"},{default:Object(o.withCtx)((function(){return[u]})),_:1})]})),_:2},1032,["onConfirm"])]})),_:2},1024)]})),_:1})]})),_:1},8,["apiObj","onSelectionChange"])]})),_:1})]})),_:1}),b.dialog.save?(Object(o.openBlock)(),Object(o.createBlock)(N,{key:0,ref:"saveDialog",onSuccess:f.handleSaveSuccess,onClosed:t[1]||(t[1]=function(e){return b.dialog.save=!1})},null,8,["onSuccess"])):Object(o.createCommentVNode)("",!0),b.dialog.permission?(Object(o.openBlock)(),Object(o.createBlock)(x,{key:1,ref:"permissionDialog",onClosed:t[2]||(t[2]=function(e){return b.dialog.permission=!1})},null,512)):Object(o.createCommentVNode)("",!0)],64)}]]);t.default=h},"2a626":function(e,t,n){"use strict";n.r(t);n("4e82");var o=n("7a23"),a=Object(o.createTextVNode)("取 消"),r=Object(o.createTextVNode)("保 存");var c=n("c7eb"),l=n("1da1"),i={emits:["success","closed"],data:function(){return{mode:"add",titleMap:{add:"新增",edit:"编辑",show:"查看"},visible:!1,isSaveing:!1,form:{id:"",label:"",alias:"",sort:1,status:1,remark:""},rules:{sort:[{required:!0,message:"请输入排序",trigger:"change"}],label:[{required:!0,message:"请输入角色名称"}],alias:[{required:!0,message:"请输入角色别名"}]}}},mounted:function(){},methods:{open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add";return this.mode=e,this.visible=!0,this},submit:function(){var e=this;this.$refs.dialogForm.validate(function(){var t=Object(l.a)(Object(c.a)().mark((function t(n){var o;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return e.isSaveing=!0,t.next=4,e.$API.demo.post.post(e.form);case 4:o=t.sent,e.isSaveing=!1,200==o.code?(e.$emit("success",e.form,e.mode),e.visible=!1,e.$message.success("操作成功")):e.$alert(o.message,"提示",{type:"error"});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},setData:function(e){this.form.id=e.id,this.form.label=e.label,this.form.alias=e.alias,this.form.sort=e.sort,this.form.status=e.status,this.form.remark=e.remark}}},s=n("6b0d");const u=n.n(s)()(i,[["render",function(e,t,n,c,l,i){var s=Object(o.resolveComponent)("el-input"),u=Object(o.resolveComponent)("el-form-item"),d=Object(o.resolveComponent)("el-input-number"),b=Object(o.resolveComponent)("el-switch"),f=Object(o.resolveComponent)("el-form"),p=Object(o.resolveComponent)("el-button"),m=Object(o.resolveComponent)("el-dialog");return Object(o.openBlock)(),Object(o.createBlock)(m,{title:l.titleMap[l.mode],modelValue:l.visible,"onUpdate:modelValue":t[7]||(t[7]=function(e){return l.visible=e}),width:500,"destroy-on-close":"",onClosed:t[8]||(t[8]=function(t){return e.$emit("closed")})},{footer:Object(o.withCtx)((function(){return[Object(o.createVNode)(p,{onClick:t[5]||(t[5]=function(e){return l.visible=!1})},{default:Object(o.withCtx)((function(){return[a]})),_:1}),"show"!=l.mode?(Object(o.openBlock)(),Object(o.createBlock)(p,{key:0,type:"primary",loading:l.isSaveing,onClick:t[6]||(t[6]=function(e){return i.submit()})},{default:Object(o.withCtx)((function(){return[r]})),_:1},8,["loading"])):Object(o.createCommentVNode)("",!0)]})),default:Object(o.withCtx)((function(){return[Object(o.createVNode)(f,{model:l.form,rules:l.rules,disabled:"show"==l.mode,ref:"dialogForm","label-width":"100px","label-position":"left"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(u,{label:"角色名称",prop:"label"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{modelValue:l.form.label,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.form.label=e}),clearable:""},null,8,["modelValue"])]})),_:1}),Object(o.createVNode)(u,{label:"角色别名",prop:"alias"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{modelValue:l.form.alias,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.form.alias=e}),clearable:""},null,8,["modelValue"])]})),_:1}),Object(o.createVNode)(u,{label:"排序",prop:"sort"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{modelValue:l.form.sort,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.form.sort=e}),"controls-position":"right",min:1,style:{width:"100%"}},null,8,["modelValue"])]})),_:1}),Object(o.createVNode)(u,{label:"是否有效",prop:"status"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(b,{modelValue:l.form.status,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.form.status=e}),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]})),_:1}),Object(o.createVNode)(u,{label:"备注",prop:"remark"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{modelValue:l.form.remark,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.form.remark=e}),clearable:"",type:"textarea"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules","disabled"])]})),_:1},8,["title","modelValue"])}]]);t.default=u},"73f2":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a={class:"treeMain"},r={class:"treeMain",style:{width:"100%"}},c={style:{float:"left"}},l={style:{float:"right",color:"#8492a6","font-size":"12px"}},i=function(e){return Object(o.pushScopeId)("data-v-f3787a4a"),e=e(),Object(o.popScopeId)(),e}((function(){return Object(o.createElementVNode)("div",{class:"el-form-item-msg"},"用于控制角色登录后控制台的视图",-1)})),s=Object(o.createTextVNode)("取 消"),u=Object(o.createTextVNode)("保 存");var d=n("c7eb"),b=n("1da1"),f=(n("99af"),n("4de4"),n("d3b7"),{emits:["success","closed"],data:function(){return{visible:!1,isSaveing:!1,menu:{list:[],checked:[],props:{label:function(e){return e.meta.title}}},data:{dataType:"1",list:[],checked:[],props:{},rule:""},dashboard:"0",dashboardOptions:[{value:"0",label:"数据统计",views:"stats"},{value:"1",label:"工作台",views:"work"}]}},mounted:function(){this.getMenu(),this.getDept()},methods:{open:function(){this.visible=!0},submit:function(){var e=this;this.isSaveing=!0;var t=this.$refs.menu.getCheckedKeys().concat(this.$refs.menu.getHalfCheckedKeys());console.log(t);var n=this.$refs.dept.getCheckedKeys().concat(this.$refs.dept.getHalfCheckedKeys());console.log(n),setTimeout((function(){e.isSaveing=!1,e.visible=!1,e.$message.success("操作成功"),e.$emit("success")}),1e3)},getMenu:function(){var e=this;return Object(b.a)(Object(d.a)().mark((function t(){var n;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$API.system.menu.list.get();case 2:n=t.sent,e.menu.list=n.data,e.menu.checked=["system","user","user.add","user.edit","user.del","directive.edit","other","directive"],e.$nextTick((function(){var t=e.menu.checked.filter((function(t){return e.$refs.menu.getNode(t).isLeaf}));e.$refs.menu.setCheckedKeys(t,!0)}));case 6:case"end":return t.stop()}}),t)})))()},getDept:function(){var e=this;return Object(b.a)(Object(d.a)().mark((function t(){var n;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$API.system.dept.list.get();case 2:n=t.sent,e.data.list=n.data,e.data.checked=["12","2","21","22","1"],e.$nextTick((function(){var t=e.data.checked.filter((function(t){return e.$refs.dept.getNode(t).isLeaf}));e.$refs.dept.setCheckedKeys(t,!0)}));case 6:case"end":return t.stop()}}),t)})))()}}}),p=(n("a999"),n("6b0d"));const m=n.n(p)()(f,[["render",function(e,t,n,d,b,f){var p=Object(o.resolveComponent)("el-tree"),m=Object(o.resolveComponent)("el-tab-pane"),O=Object(o.resolveComponent)("el-option"),h=Object(o.resolveComponent)("el-select"),j=Object(o.resolveComponent)("el-form-item"),v=Object(o.resolveComponent)("el-input"),V=Object(o.resolveComponent)("el-form"),w=Object(o.resolveComponent)("el-tabs"),C=Object(o.resolveComponent)("el-button"),g=Object(o.resolveComponent)("el-dialog");return Object(o.openBlock)(),Object(o.createBlock)(g,{title:"角色权限设置",modelValue:b.visible,"onUpdate:modelValue":t[5]||(t[5]=function(e){return b.visible=e}),width:500,"destroy-on-close":"",onClosed:t[6]||(t[6]=function(t){return e.$emit("closed")})},{footer:Object(o.withCtx)((function(){return[Object(o.createVNode)(C,{onClick:t[3]||(t[3]=function(e){return b.visible=!1})},{default:Object(o.withCtx)((function(){return[s]})),_:1}),Object(o.createVNode)(C,{type:"primary",loading:b.isSaveing,onClick:t[4]||(t[4]=function(e){return f.submit()})},{default:Object(o.withCtx)((function(){return[u]})),_:1},8,["loading"])]})),default:Object(o.withCtx)((function(){return[Object(o.createVNode)(w,{"tab-position":"top"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{label:"菜单权限"},{default:Object(o.withCtx)((function(){return[Object(o.createElementVNode)("div",a,[Object(o.createVNode)(p,{ref:"menu","node-key":"name",data:b.menu.list,props:b.menu.props,"show-checkbox":""},null,8,["data","props"])])]})),_:1}),Object(o.createVNode)(m,{label:"数据权限"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(V,{"label-width":"100px","label-position":"left"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(j,{label:"规则类型"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(h,{modelValue:b.data.dataType,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b.data.dataType=e}),placeholder:"请选择"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(O,{label:"全部可见",value:"1"}),Object(o.createVNode)(O,{label:"本人可见",value:"2"}),Object(o.createVNode)(O,{label:"所在部门可见",value:"3"}),Object(o.createVNode)(O,{label:"所在部门及子级可见",value:"4"}),Object(o.createVNode)(O,{label:"选择的部门可见",value:"5"}),Object(o.createVNode)(O,{label:"自定义",value:"6"})]})),_:1},8,["modelValue"])]})),_:1}),Object(o.withDirectives)(Object(o.createVNode)(j,{label:"选择部门"},{default:Object(o.withCtx)((function(){return[Object(o.createElementVNode)("div",r,[Object(o.createVNode)(p,{ref:"dept","node-key":"id",data:b.data.list,props:b.data.props,"show-checkbox":""},null,8,["data","props"])])]})),_:1},512),[[o.vShow,"5"==b.data.dataType]]),Object(o.withDirectives)(Object(o.createVNode)(j,{label:"规则值"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(v,{modelValue:b.data.rule,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.data.rule=e}),clearable:"",type:"textarea",rows:6,placeholder:"请输入自定义规则代码"},null,8,["modelValue"])]})),_:1},512),[[o.vShow,"6"==b.data.dataType]])]})),_:1})]})),_:1}),Object(o.createVNode)(m,{label:"控制台"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(V,{"label-width":"100px","label-position":"left"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(j,{label:"控制台视图"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(h,{modelValue:b.dashboard,"onUpdate:modelValue":t[2]||(t[2]=function(e){return b.dashboard=e}),placeholder:"请选择"},{default:Object(o.withCtx)((function(){return[(Object(o.openBlock)(!0),Object(o.createElementBlock)(o.Fragment,null,Object(o.renderList)(b.dashboardOptions,(function(e){return Object(o.openBlock)(),Object(o.createBlock)(O,{key:e.value,label:e.label,value:e.value},{default:Object(o.withCtx)((function(){return[Object(o.createElementVNode)("span",c,Object(o.toDisplayString)(e.label),1),Object(o.createElementVNode)("span",l,Object(o.toDisplayString)(e.views),1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue"]),i]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])}],["__scopeId","data-v-f3787a4a"]]);t.default=m},a999:function(e,t,n){"use strict";n("0074")}}]);