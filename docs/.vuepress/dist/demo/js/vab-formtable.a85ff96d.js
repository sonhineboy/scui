(window.webpackJsonp=window.webpackJsonp||[]).push([["vab-formtable"],{"9ddf":function(e,t,o){"use strict";o.r(t);var l=o("7a23"),r=Object(l.createTextVNode)("保存"),n=Object(l.createTextVNode)("重置");var c={name:"formtable",data:function(){return{addTemplate:{time:"",type:"",val:"",open:!0,checked:!1},form:{title:"标题",list:[{time:"09:00",type:"1",val:"100",open:!0,checked:!0},{time:"10:00",type:"0",val:"50",open:!1,checked:!0}]},typeDic:[{label:"全局",value:"0"},{label:"局部",value:"1"}],rules:{title:[{required:!0,message:"请上传",trigger:"blur"}]}}},methods:{submitForm:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;alert("请看控制台输出"),console.log(e.form)}))},resetForm:function(){this.$refs.ruleForm.resetFields()}},render:function(e,t,o,c,a,u){var d=Object(l.resolveComponent)("el-alert"),i=Object(l.resolveComponent)("el-input"),m=Object(l.resolveComponent)("el-form-item"),b=Object(l.resolveComponent)("el-time-select"),p=Object(l.resolveComponent)("el-table-column"),f=Object(l.resolveComponent)("el-option"),j=Object(l.resolveComponent)("el-select"),O=Object(l.resolveComponent)("el-checkbox"),s=Object(l.resolveComponent)("el-switch"),V=Object(l.resolveComponent)("sc-form-table"),w=Object(l.resolveComponent)("el-button"),h=Object(l.resolveComponent)("el-form"),v=Object(l.resolveComponent)("el-card"),C=Object(l.resolveComponent)("el-main");return Object(l.openBlock)(),Object(l.createBlock)(C,null,{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(d,{title:"来自AVUE的灵感, 业务会有表单里含有对象数组的可能, 进行封装后进行增删改操作, 并且支持联动form表单的禁用属性",type:"success",style:{"margin-bottom":"20px"}}),Object(l.createVNode)(v,{shadow:"never"},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(h,{ref:"ruleForm",model:a.form,rules:a.rules,"label-width":"100px"},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(m,{label:"标题",prop:"title"},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(i,{modelValue:a.form.title,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.form.title=e})},null,8,["modelValue"])]})),_:1}),Object(l.createVNode)(m,{label:"表格",prop:"list"},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(V,{modelValue:a.form.list,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.form.list=e}),addTemplate:a.addTemplate,placeholder:"暂无数据"},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(p,{prop:"time",label:"时间",width:"180"},{default:Object(l.withCtx)((function(e){return[Object(l.createVNode)(b,{modelValue:e.row.time,"onUpdate:modelValue":function(t){return e.row.time=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(l.createVNode)(p,{prop:"type",label:"类型",width:"180"},{default:Object(l.withCtx)((function(e){return[Object(l.createVNode)(j,{modelValue:e.row.type,"onUpdate:modelValue":function(t){return e.row.type=t},placeholder:"请选择"},{default:Object(l.withCtx)((function(){return[(Object(l.openBlock)(!0),Object(l.createBlock)(l.Fragment,null,Object(l.renderList)(a.typeDic,(function(e){return Object(l.openBlock)(),Object(l.createBlock)(f,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(l.createVNode)(p,{prop:"val",label:"数量",width:"180"},{default:Object(l.withCtx)((function(e){return[Object(l.createVNode)(i,{modelValue:e.row.val,"onUpdate:modelValue":function(t){return e.row.val=t},placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(l.createVNode)(p,{prop:"open",label:"checked",width:"80",align:"center"},{default:Object(l.withCtx)((function(e){return[Object(l.createVNode)(O,{modelValue:e.row.checked,"onUpdate:modelValue":function(t){return e.row.checked=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(l.createVNode)(p,{prop:"open",label:"开关",width:"80",align:"center"},{default:Object(l.withCtx)((function(e){return[Object(l.createVNode)(s,{modelValue:e.row.open,"onUpdate:modelValue":function(t){return e.row.open=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["modelValue","addTemplate"])]})),_:1}),Object(l.createVNode)(m,null,{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(w,{type:"primary",onClick:u.submitForm},{default:Object(l.withCtx)((function(){return[r]})),_:1},8,["onClick"]),Object(l.createVNode)(w,{onClick:u.resetForm},{default:Object(l.withCtx)((function(){return[n]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1})]})),_:1})}};t.default=c}}]);