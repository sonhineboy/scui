(window.webpackJsonp=window.webpackJsonp||[]).push([["vab-select"],{"920a":function(e,t,l){"use strict";l.r(t);var a=l("7a23"),c={style:{float:"left"}},n={style:{float:"right",color:"#999","font-size":"13px"}};var o={name:"scselect",data:function(){return{value:"3",value2:["1","3"],value3:"",value4:""}},mounted:function(){},methods:{},render:function(e,t,l,o,r,u){var d=Object(a.resolveComponent)("el-alert"),i=Object(a.resolveComponent)("sc-select"),b=Object(a.resolveComponent)("el-card"),j=Object(a.resolveComponent)("el-col"),O=Object(a.resolveComponent)("el-row"),f=Object(a.resolveComponent)("el-main");return Object(a.openBlock)(),Object(a.createBlock)(f,null,{default:Object(a.withCtx)((function(){return[Object(a.createVNode)(d,{title:"封装el-select支持异步获取数据,以及根据字典名获取数据,继承el-select全部的属性和事件",type:"success",style:{"margin-bottom":"20px"}}),Object(a.createVNode)(O,{gutter:15},{default:Object(a.withCtx)((function(){return[Object(a.createVNode)(j,{lg:12},{default:Object(a.withCtx)((function(){return[Object(a.createVNode)(b,{shadow:"never",header:"异步单选"},{default:Object(a.withCtx)((function(){return[Object(a.createVNode)(i,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.value=e}),apiObj:e.$API.system.dic.get,clearable:"",filterable:""},null,8,["modelValue","apiObj"])]})),_:1})]})),_:1}),Object(a.createVNode)(j,{lg:12},{default:Object(a.withCtx)((function(){return[Object(a.createVNode)(b,{shadow:"never",header:"异步多选"},{default:Object(a.withCtx)((function(){return[Object(a.createVNode)(i,{modelValue:r.value2,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.value2=e}),apiObj:e.$API.system.dic.get,clearable:"",filterable:"",multiple:""},null,8,["modelValue","apiObj"])]})),_:1})]})),_:1}),Object(a.createVNode)(j,{lg:12},{default:Object(a.withCtx)((function(){return[Object(a.createVNode)(b,{shadow:"never",header:"字典选择器"},{default:Object(a.withCtx)((function(){return[Object(a.createVNode)(i,{modelValue:r.value3,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.value3=e}),dic:"notice",clearable:"",filterable:""},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(a.createVNode)(j,{lg:12},{default:Object(a.withCtx)((function(){return[Object(a.createVNode)(b,{shadow:"never",header:"自定义模板"},{default:Object(a.withCtx)((function(){return[Object(a.createVNode)(i,{modelValue:r.value4,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.value4=e}),dic:"notice",clearable:"",filterable:"",placeholder:"自定义placeholder"},{option:Object(a.withCtx)((function(e){var t=e.data;return[Object(a.createElementVNode)("span",c,Object(a.toDisplayString)(t.label),1),Object(a.createElementVNode)("span",n,Object(a.toDisplayString)(t.value),1)]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}};t.default=o}}]);