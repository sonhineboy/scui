(window.webpackJsonp=window.webpackJsonp||[]).push([["vab-dialog-dialog2"],{"699c":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=Object(o.createTextVNode)(" 内容2 "),i=Object(o.createTextVNode)("取 消"),r=Object(o.createTextVNode)("确 定");var u={data:function(){return{visible:!0}},mounted:function(){console.log("加载./dialog2组件完成")},methods:{},render:function(e,t,n,u,l,a){var d=Object(o.resolveComponent)("el-button"),b=Object(o.resolveComponent)("sc-dialog");return Object(o.openBlock)(),Object(o.createBlock)(b,{modelValue:l.visible,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.visible=e}),title:"提示",onClosed:t[3]||(t[3]=function(t){return e.$emit("closed")})},{footer:Object(o.withCtx)((function(){return[Object(o.createVNode)(d,{onClick:t[0]||(t[0]=function(e){return l.visible=!1})},{default:Object(o.withCtx)((function(){return[i]})),_:1}),Object(o.createVNode)(d,{type:"primary",onClick:t[1]||(t[1]=function(e){return l.visible=!1})},{default:Object(o.withCtx)((function(){return[r]})),_:1})]})),default:Object(o.withCtx)((function(){return[c]})),_:1},8,["modelValue"])}};t.default=u}}]);