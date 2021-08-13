(window.webpackJsonp=window.webpackJsonp||[]).push([["setting-user-save"],{"113d":function(e,t,r){"use strict";r.r(t);r("b0c0");var o=r("7a23"),a=Object(o.createTextVNode)("取 消"),n=Object(o.createTextVNode)("保 存");var u=r("1da1"),c=(r("96cf"),{emits:["success","closed"],data:function(){var e=this;return{mode:"add",titleMap:{add:"新增用户",edit:"编辑用户",show:"查看"},visible:!1,isSaveing:!1,form:{id:"",userName:"",avatar:"",name:"",group:""},rules:{avatar:[{required:!0,message:"请上传头像"}],userName:[{required:!0,message:"请输入登录账号"}],name:[{required:!0,message:"请输入真实姓名"}],password:[{required:!0,message:"请输入登录密码"},{validator:function(t,r,o){""!==e.form.password2&&e.$refs.dialogForm.validateField("password2"),o()}}],password2:[{required:!0,message:"请再次输入密码"},{validator:function(t,r,o){r!==e.form.password?o(new Error("两次输入密码不一致!")):o()}}],group:[{required:!0,message:"请选择所属角色"}]},groups:[],groupsProps:{value:"id",multiple:!0,checkStrictly:!0}}},mounted:function(){this.getGroup()},methods:{open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add";return this.mode=e,this.visible=!0,this},getGroup:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$API.role.select.get();case 2:r=t.sent,e.groups=r.data;case 4:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;this.$refs.dialogForm.validate(function(){var t=Object(u.a)(regeneratorRuntime.mark((function t(r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=9;break}return e.isSaveing=!0,t.next=4,e.$API.user.save.post(e.form);case 4:o=t.sent,e.isSaveing=!1,200==o.code?(e.$emit("success",e.form,e.mode),e.visible=!1,e.$message.success("操作成功")):e.$alert(o.message,"提示",{type:"error"}),t.next=10;break;case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},setData:function(e){this.form.id=e.id,this.form.userName=e.userName,this.form.avatar=e.avatar,this.form.name=e.name,this.form.group=e.group}},render:function(e,t,r,u,c,l){var s=Object(o.resolveComponent)("sc-upload"),i=Object(o.resolveComponent)("el-form-item"),d=Object(o.resolveComponent)("el-col"),m=Object(o.resolveComponent)("el-row"),p=Object(o.resolveComponent)("el-input"),f=Object(o.resolveComponent)("el-cascader"),b=Object(o.resolveComponent)("el-form"),j=Object(o.resolveComponent)("el-button"),O=Object(o.resolveComponent)("el-dialog");return Object(o.openBlock)(),Object(o.createBlock)(O,{title:c.titleMap[c.mode],modelValue:c.visible,"onUpdate:modelValue":t[8]||(t[8]=function(e){return c.visible=e}),width:500,"destroy-on-close":"",onClosed:t[9]||(t[9]=function(t){return e.$emit("closed")})},{footer:Object(o.withCtx)((function(){return[Object(o.createVNode)(j,{onClick:t[6]||(t[6]=function(e){return c.visible=!1})},{default:Object(o.withCtx)((function(){return[a]})),_:1}),"show"!=c.mode?(Object(o.openBlock)(),Object(o.createBlock)(j,{key:0,type:"primary",loading:c.isSaveing,onClick:t[7]||(t[7]=function(e){return l.submit()})},{default:Object(o.withCtx)((function(){return[n]})),_:1},8,["loading"])):Object(o.createCommentVNode)("",!0)]})),default:Object(o.withCtx)((function(){return[Object(o.createVNode)(b,{model:c.form,rules:c.rules,disabled:"show"==c.mode,ref:"dialogForm","label-width":"100px","label-position":"top"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{gutter:20},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{span:24},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(i,{label:"头像",prop:"avatar"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{modelValue:c.form.avatar,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.form.avatar=e}),title:"上传头像"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(o.createVNode)(m,{gutter:20},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(i,{label:"登录账号",prop:"userName"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(p,{modelValue:c.form.userName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.form.userName=e}),placeholder:"用于登录系统",clearable:""},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(o.createVNode)(d,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(i,{label:"姓名",prop:"name"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(p,{modelValue:c.form.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.form.name=e}),placeholder:"请输入完整的真实姓名",clearable:""},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),"add"==c.mode?(Object(o.openBlock)(),Object(o.createBlock)(m,{key:0,gutter:20},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(i,{label:"登录密码",prop:"password"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(p,{type:"password",modelValue:c.form.password,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.form.password=e}),clearable:"","show-password":""},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(o.createVNode)(d,{span:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(i,{label:"确认密码",prop:"password2"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(p,{type:"password",modelValue:c.form.password2,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.form.password2=e}),clearable:"","show-password":""},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})):Object(o.createCommentVNode)("",!0),Object(o.createVNode)(m,{gutter:20},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{span:24},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(i,{label:"所属角色",prop:"group"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(f,{modelValue:c.form.group,"onUpdate:modelValue":t[5]||(t[5]=function(e){return c.form.group=e}),options:c.groups,props:c.groupsProps,"show-all-levels":!1,clearable:"",style:{width:"100%"}},null,8,["modelValue","options","props"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","rules","disabled"])]})),_:1},8,["title","modelValue"])}});t.default=c}}]);