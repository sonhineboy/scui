(window.webpackJsonp=window.webpackJsonp||[]).push([["setting-task","setting-task-logs","setting-task-save"],{4681:function(e,t,o){"use strict";o.r(t);var n=o("7a23");var r={data:function(){return{form:{id:"",title:"",handler:"",cron:"",state:"1"},rules:{title:[{required:!0,message:"请填写标题"}],handler:[{required:!0,message:"请填写执行类"}],cron:[{required:!0,message:"请填写定时规则"}]}}},mounted:function(){},methods:{submit:function(e){var t=this;this.$refs.dialogForm.validate((function(o){if(!o)return!1;e(t.form)}))},setData:function(e){this.form.id=e.id,this.form.title=e.title,this.form.handler=e.handler,this.form.cron=e.cron,this.form.state=e.state}},render:function(e,t,o,r,c,l){var a=Object(n.resolveComponent)("el-input"),i=Object(n.resolveComponent)("el-form-item"),d=Object(n.resolveComponent)("el-switch"),s=Object(n.resolveComponent)("el-form");return Object(n.openBlock)(),Object(n.createBlock)(s,{model:c.form,rules:c.rules,ref:"dialogForm","label-width":"100px","label-position":"left"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(i,{label:"描述",prop:"title"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(a,{modelValue:c.form.title,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.form.title=e}),clearable:""},null,8,["modelValue"])]})),_:1}),Object(n.createVNode)(i,{label:"执行类",prop:"handler"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(a,{modelValue:c.form.handler,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.form.handler=e}),clearable:""},null,8,["modelValue"])]})),_:1}),Object(n.createVNode)(i,{label:"定时规则",prop:"cron"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(a,{modelValue:c.form.cron,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.form.cron=e}),clearable:""},null,8,["modelValue"])]})),_:1}),Object(n.createVNode)(i,{label:"状态",prop:"state"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(d,{modelValue:c.form.state,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.form.state=e}),"active-value":"1","inactive-value":"-1"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])}};t.default=r},"487d":function(e,t,o){"use strict";o("54ba")},"54ba":function(e,t,o){},"5a15":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),r=Object(n.withScopeId)("data-v-f10c1692");Object(n.pushScopeId)("data-v-f10c1692");var c=Object(n.createVNode)("h4",null,"执行类",-1),l=Object(n.createVNode)("h4",null,"定时规则",-1),a={class:"bottom"},i={class:"state"},d=Object(n.createTextVNode)("准备就绪"),s=Object(n.createTextVNode)("停用"),u={class:"handler"},b=Object(n.createTextVNode)("编辑"),f=Object(n.createTextVNode)("日志"),m=Object(n.createTextVNode)("删除"),j=Object(n.createVNode)("i",{class:"el-icon-plus"},null,-1),O=Object(n.createVNode)("p",null,"添加计划任务",-1),p=Object(n.createTextVNode)("取 消"),h=Object(n.createTextVNode)("保 存");Object(n.popScopeId)();var V=r((function(e,t,o,V,v,g){var N=Object(n.resolveComponent)("el-tag"),C=Object(n.resolveComponent)("el-button"),x=Object(n.resolveComponent)("el-popconfirm"),k=Object(n.resolveComponent)("el-dropdown-item"),w=Object(n.resolveComponent)("el-dropdown-menu"),_=Object(n.resolveComponent)("el-dropdown"),y=Object(n.resolveComponent)("el-card"),T=Object(n.resolveComponent)("el-col"),D=Object(n.resolveComponent)("el-row"),B=Object(n.resolveComponent)("el-main"),S=Object(n.resolveComponent)("save-dialog"),q=Object(n.resolveComponent)("el-dialog"),F=Object(n.resolveComponent)("logs"),H=Object(n.resolveComponent)("el-drawer");return Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,null,[Object(n.createVNode)(B,null,{default:r((function(){return[Object(n.createVNode)(D,{gutter:15},{default:r((function(){return[(Object(n.openBlock)(!0),Object(n.createBlock)(n.Fragment,null,Object(n.renderList)(v.list,(function(e){return Object(n.openBlock)(),Object(n.createBlock)(T,{xl:6,lg:6,md:8,sm:12,xs:24,key:e.id},{default:r((function(){return[Object(n.createVNode)(y,{class:"task task-item",shadow:"hover"},{default:r((function(){return[Object(n.createVNode)("h2",null,Object(n.toDisplayString)(e.title),1),Object(n.createVNode)("ul",null,[Object(n.createVNode)("li",null,[c,Object(n.createVNode)("p",null,Object(n.toDisplayString)(e.handler),1)]),Object(n.createVNode)("li",null,[l,Object(n.createVNode)("p",null,Object(n.toDisplayString)(e.cron),1)])]),Object(n.createVNode)("div",a,[Object(n.createVNode)("div",i,["1"==e.state?(Object(n.openBlock)(),Object(n.createBlock)(N,{key:0,size:"mini"},{default:r((function(){return[d]})),_:1})):Object(n.createCommentVNode)("",!0),"-1"==e.state?(Object(n.openBlock)(),Object(n.createBlock)(N,{key:1,size:"mini",type:"info"},{default:r((function(){return[s]})),_:1})):Object(n.createCommentVNode)("",!0)]),Object(n.createVNode)("div",u,[Object(n.createVNode)(x,{title:"确定立即执行吗？",onConfirm:function(t){return g.run(e)}},{reference:r((function(){return[Object(n.createVNode)(C,{type:"primary",icon:"el-icon-caret-right",size:"mini",circle:""})]})),_:2},1032,["onConfirm"]),Object(n.createVNode)(_,{trigger:"click"},{dropdown:r((function(){return[Object(n.createVNode)(w,null,{default:r((function(){return[Object(n.createVNode)(k,{onClick:function(t){return g.edit(e)}},{default:r((function(){return[b]})),_:2},1032,["onClick"]),Object(n.createVNode)(k,{onClick:function(t){return g.logs(e)}},{default:r((function(){return[f]})),_:2},1032,["onClick"]),Object(n.createVNode)(k,{onClick:function(t){return g.del(e)},divided:""},{default:r((function(){return[m]})),_:2},1032,["onClick"])]})),_:2},1024)]})),default:r((function(){return[Object(n.createVNode)(C,{type:"primary",icon:"el-icon-more",size:"mini",circle:"",plain:""})]})),_:2},1024)])])]})),_:2},1024)]})),_:2},1024)})),128)),Object(n.createVNode)(T,{xl:6,lg:6,md:8,sm:12,xs:24},{default:r((function(){return[Object(n.createVNode)(y,{class:"task task-add",shadow:"none",onClick:g.add},{default:r((function(){return[j,O]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),Object(n.createVNode)(q,{title:"计划任务",modelValue:v.saveDialogVisible,"onUpdate:modelValue":t[3]||(t[3]=function(e){return v.saveDialogVisible=e}),width:400,"destroy-on-close":""},{footer:r((function(){return[Object(n.createVNode)(C,{onClick:t[1]||(t[1]=function(e){return v.saveDialogVisible=!1})},{default:r((function(){return[p]})),_:1}),Object(n.createVNode)(C,{type:"primary",onClick:t[2]||(t[2]=function(e){return g.saveForm()}),loading:v.isSaveing},{default:r((function(){return[h]})),_:1},8,["loading"])]})),default:r((function(){return[Object(n.createVNode)(S,{ref:"saveDialog"},null,512)]})),_:1},8,["modelValue"]),Object(n.createVNode)(H,{title:"计划任务日志",modelValue:v.logsVisible,"onUpdate:modelValue":t[4]||(t[4]=function(e){return v.logsVisible=e}),size:600,direction:"rtl","destroy-on-close":""},{default:r((function(){return[Object(n.createVNode)(F)]})),_:1},8,["modelValue"])],64)})),v=(o("a434"),o("c740"),o("4681")),g=o("d88c"),N={name:"task",components:{saveDialog:v.default,logs:g.default},data:function(){return{saveDialogVisible:!1,logsVisible:!1,isSaveing:!1,list:[{id:"1",title:"清理服务器缓存",handler:"cleanUpCacheHandler",cron:"59 59 23 * * ? *",state:"1"},{id:"2",title:"自动审核",handler:"automaticAuditHandler",cron:"0 0 * * * ? *",state:"1"},{id:"3",title:"清理未实名用户",handler:"deleteUserHandler",cron:"0 0 0 * * ? *",state:"-1"}]}},mounted:function(){},methods:{add:function(){this.saveDialogVisible=!0},edit:function(e){var t=this;this.saveDialogVisible=!0,this.$nextTick((function(){t.$refs.saveDialog.setData(e)}))},del:function(e){var t=this;this.$confirm("确认删除 ".concat(e.title," 计划任务吗？"),"提示",{type:"warning",confirmButtonText:"删除",confirmButtonClass:"el-button--danger"}).then((function(){t.list.splice(t.list.findIndex((function(t){return t.id===e.id})),1)})).catch((function(){}))},logs:function(){this.logsVisible=!0},run:function(e){this.$message.success("已成功执行计划任务：".concat(e.title))},saveForm:function(){var e=this;this.$refs.saveDialog.submit((function(t){console.log(t),e.$message.success("操作成功"),e.saveDialogVisible=!1}))}}};o("487d");N.render=V,N.__scopeId="data-v-f10c1692";t.default=N},d88c:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),r={key:0,style:{color:"#67C23A"}},c=Object(n.createVNode)("i",{class:"el-icon-success"},null,-1),l=Object(n.createTextVNode)(" 成功"),a={key:1,style:{color:"#F56C6C"}},i=Object(n.createVNode)("i",{class:"el-icon-error"},null,-1),d=Object(n.createTextVNode)(" 异常"),s=Object(n.createTextVNode)("日志"),u={style:{"font-size":"12px",color:"#999",padding:"20px",background:"#333","font-family":"consolas","line-height":"1.5",overflow:"auto"}};var b={data:function(){return{logsVisible:!1,demoLog:"2021-07-07 12:35:00 [com.xxl.job.core.thread.JobThread#run]-[124]-[Thread-308]\n----------- xxl-job job execute start -----------\n----------- Param:\n2021-07-07 12:35:00 [com.heronshn.reservation.jobhandler.AqshMasterDataSendHandler#execute]-[31]-[Thread-308] aqshMasterDataSendHandler start\n2021-07-07 12:35:00 [com.heronshn.reservation.data.service.impl.AqshVehicleServiceImpl#send]-[42]-[Thread-308] send 45\n2021-07-07 12:35:00 [com.heronshn.reservation.data.service.impl.AqshVehicleServiceImpl#send]-[45]-[Thread-308] webapi http://127.0.0.1:48080\n2021-07-07 12:35:00 [com.heronshn.reservation.jobhandler.AqshMasterDataSendHandler#execute]-[33]-[Thread-308] aqshMasterDataSendHandler vehicle end\n2021-07-07 12:35:00 [com.heronshn.reservation.jobhandler.AqshMasterDataSendHandler#execute]-[35]-[Thread-308] aqshMasterDataSendHandler stop\n2021-07-07 12:35:00 [com.xxl.job.core.thread.JobThread#run]-[158]-[Thread-308]\n----------- xxl-job job execute end(finish) -----------\n----------- ReturnT:ReturnT [code=200, msg=null, content=null]\n2021-07-07 12:35:00 [com.xxl.job.core.thread.TriggerCallbackThread#callbackLog]-[176]-[Thread-10]\n----------- xxl-job job callback finish.\n\n[Load Log Finish]",data:[{time:"2021-07-07 00:00:00",state:"500",logs:""},{time:"2021-07-06 00:00:00",state:"200",logs:""},{time:"2021-07-05 00:00:00",state:"200",logs:""},{time:"2021-07-04 00:00:00",state:"200",logs:""},{time:"2021-07-03 00:00:00",state:"200",logs:""},{time:"2021-07-02 00:00:00",state:"200",logs:""},{time:"2021-07-01 00:00:00",state:"200",logs:""}]}},mounted:function(){},methods:{show:function(){this.logsVisible=!0}},render:function(e,t,o,b,f,m){var j=Object(n.resolveComponent)("el-table-column"),O=Object(n.resolveComponent)("el-button"),p=Object(n.resolveComponent)("scTable"),h=Object(n.resolveComponent)("el-main"),V=Object(n.resolveComponent)("el-container"),v=Object(n.resolveComponent)("el-drawer");return Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,null,[Object(n.createVNode)(V,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(h,{style:{padding:"0 20px"}},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(p,{ref:"table",data:f.data,stripe:""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(j,{label:"执行时间",prop:"time",width:"200"}),Object(n.createVNode)(j,{label:"执行结果",prop:"state",width:"100"},{default:Object(n.withCtx)((function(e){return[200==e.row.state?(Object(n.openBlock)(),Object(n.createBlock)("span",r,[c,l])):(Object(n.openBlock)(),Object(n.createBlock)("span",a,[i,d]))]})),_:1}),Object(n.createVNode)(j,{label:"执行日志",prop:"logs",width:"100",fixed:"right"},{default:Object(n.withCtx)((function(e){return[Object(n.createVNode)(O,{size:"mini",onClick:function(t){return m.show(e.row)},type:"text"},{default:Object(n.withCtx)((function(){return[s]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]})),_:1})]})),_:1}),Object(n.createVNode)(v,{title:"日志",modelValue:f.logsVisible,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.logsVisible=e}),size:500,direction:"rtl","destroy-on-close":""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(h,{style:{padding:"0 20px 20px 20px"}},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)("pre",u,Object(n.toDisplayString)(f.demoLog),1)]})),_:1})]})),_:1},8,["modelValue"])],64)}};t.default=b}}]);