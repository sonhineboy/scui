(window.webpackJsonp=window.webpackJsonp||[]).push([["template-list-save"],{"07af":function(e,t,o){"use strict";o.r(t);o("b0c0");var r=o("7a23"),l=Object(r.createElementVNode)("div",{class:"el-form-item-msg","data-v-b33b3cf8":""},"组件名字以sc开头，并坚持以“小驼峰”命名规则",-1),n=Object(r.createTextVNode)("数据"),c=Object(r.createTextVNode)("表单"),a=Object(r.createTextVNode)("样式"),u=Object(r.createTextVNode)("其他"),d=Object(r.createTextVNode)("保 存");var i={name:"list-save",data:function(){return{id:this.$route.query.id,form:{name:"",type:"1"},rules:{}}},mounted:function(){this.id&&this.$store.commit("updateViewTagsTitle","详情ID:".concat(this.id))},methods:{save:function(){console.log(this.$store)}},render:function(e,t,o,i,b,m){var f=Object(r.resolveComponent)("sc-page-header"),j=Object(r.resolveComponent)("el-alert"),O=Object(r.resolveComponent)("el-input"),p=Object(r.resolveComponent)("el-form-item"),s=Object(r.resolveComponent)("sc-upload"),V=Object(r.resolveComponent)("el-radio-button"),h=Object(r.resolveComponent)("el-radio-group"),C=Object(r.resolveComponent)("el-button"),N=Object(r.resolveComponent)("el-form"),w=Object(r.resolveComponent)("el-card"),v=Object(r.resolveComponent)("el-main");return Object(r.openBlock)(),Object(r.createElementBlock)(r.Fragment,null,[Object(r.createVNode)(f,{title:b.id?"ID:"+b.id:"页面标题",description:"可用于非常复杂的表单提交，如一些较为简单的表单提交应使用dialog或者drawer更合适",icon:"el-icon-burger"},null,8,["title"]),Object(r.createVNode)(v,null,{default:Object(r.withCtx)((function(){return[Object(r.createVNode)(j,{title:"因为keep-alive只接受组件name,导致多路由共用组件时,关闭或刷新一个标签导致其他同一组件的页面缓存失效,后续还在寻找完美的解决方案.",type:"error",style:{"margin-bottom":"15px"}}),Object(r.createVNode)(w,{shadow:"never"},{default:Object(r.withCtx)((function(){return[Object(r.createVNode)(N,{model:b.form,rules:b.rules,ref:"form","label-width":"100px"},{default:Object(r.withCtx)((function(){return[Object(r.createVNode)(p,{label:"名称",prop:"name"},{default:Object(r.withCtx)((function(){return[Object(r.createVNode)(O,{modelValue:b.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b.form.name=e}),placeholder:"请输入名称",clearable:""},null,8,["modelValue"]),l]})),_:1}),Object(r.createVNode)(p,{label:"缩略图",prop:"img"},{default:Object(r.withCtx)((function(){return[Object(r.createVNode)(s,{modelValue:b.form.img,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.form.img=e}),title:"上传缩略图"},null,8,["modelValue"])]})),_:1}),Object(r.createVNode)(p,{label:"类型",prop:"type"},{default:Object(r.withCtx)((function(){return[Object(r.createVNode)(h,{modelValue:b.form.type,"onUpdate:modelValue":t[2]||(t[2]=function(e){return b.form.type=e})},{default:Object(r.withCtx)((function(){return[Object(r.createVNode)(V,{label:"1"},{default:Object(r.withCtx)((function(){return[n]})),_:1}),Object(r.createVNode)(V,{label:"2"},{default:Object(r.withCtx)((function(){return[c]})),_:1}),Object(r.createVNode)(V,{label:"3"},{default:Object(r.withCtx)((function(){return[a]})),_:1}),Object(r.createVNode)(V,{label:"4"},{default:Object(r.withCtx)((function(){return[u]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),Object(r.createVNode)(p,{label:"负责人",prop:"name"},{default:Object(r.withCtx)((function(){return[Object(r.createVNode)(O,{modelValue:b.form.name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return b.form.name=e}),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]})),_:1}),Object(r.createVNode)(p,{label:"进度",prop:"img"},{default:Object(r.withCtx)((function(){return[Object(r.createVNode)(O,{modelValue:b.form.name,"onUpdate:modelValue":t[4]||(t[4]=function(e){return b.form.name=e}),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]})),_:1}),Object(r.createVNode)(p,null,{default:Object(r.withCtx)((function(){return[Object(r.createVNode)(C,{type:"primary",size:"medium",onClick:m.save},{default:Object(r.withCtx)((function(){return[d]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1})]})),_:1})],64)}};t.default=i}}]);