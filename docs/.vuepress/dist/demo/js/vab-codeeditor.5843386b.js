(window.webpackJsonp=window.webpackJsonp||[]).push([["vab-codeeditor"],{"0f65":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={style:{"margin-top":"15px"}},c=Object(o.createTextVNode)("获取v-model"),a=Object(o.createTextVNode)("getValue()"),l=Object(o.createTextVNode)("setValue()");n("d3b7"),n("3ca3"),n("ddb0");var u={name:"codeeditor",components:{scCodeEditor:Object(o.defineAsyncComponent)((function(){return Promise.all([n.e("codemirror"),n.e("chunk-02bf2192")]).then(n.bind(null,"5c02"))}))},data:function(){return{json:'{\n\t"name": "SCUI",\n\t"menu": [\n\t\t{\n\t\t\t"title": "VUE 3",\n\t\t\t"type": true,\n\t\t\t"link": "https://v3.cn.vuejs.org"\n\t\t},\n\t\t{\n\t\t\t"title": "elementplus",\n\t\t\t"type": false,\n\t\t\t"link": "https://element-plus.gitee.io"\n\t\t}\n\t]\n}',js:"// Demo code (the actual new parser character stream implementation)\nfunction StringStream(string) {\n\tthis.pos = 0;\n\tthis.string = string;\n}",sql:"SELECT `author`, `title` FROM `posts`\nWHERE `status` = 'draft' AND `author` IN('author1','author2')\nORDER BY `created_at` DESC, `id` DESC LIMIT 0, 10;"}},methods:{getCode:function(){this.$message("请查看控制台"),console.log(this.json)},getValue:function(){this.$message("请查看控制台");var e=this.$refs.editor.coder.getValue();console.log(e)},setValue:function(){this.$refs.editor.coder.setValue('{"key":"newValue"}')}}},d=n("6b0d");const i=n.n(d)()(u,[["render",function(e,t,n,u,d,i){var s=Object(o.resolveComponent)("el-alert"),j=Object(o.resolveComponent)("sc-code-editor"),b=Object(o.resolveComponent)("el-button"),m=Object(o.resolveComponent)("el-card"),f=Object(o.resolveComponent)("el-col"),O=Object(o.resolveComponent)("el-row"),p=Object(o.resolveComponent)("el-main");return Object(o.openBlock)(),Object(o.createBlock)(p,null,{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(s,{title:"感谢codeMirror组件",type:"success",style:{"margin-bottom":"20px"}}),Object(o.createVNode)(O,{gutter:15},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(f,{lg:24},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{shadow:"never",header:"JSON"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(j,{ref:"editor",modelValue:d.json,"onUpdate:modelValue":t[0]||(t[0]=function(e){return d.json=e}),mode:"javascript",height:200},null,8,["modelValue"]),Object(o.createElementVNode)("div",r,[Object(o.createVNode)(b,{type:"primary",onClick:i.getCode},{default:Object(o.withCtx)((function(){return[c]})),_:1},8,["onClick"]),Object(o.createVNode)(b,{type:"primary",onClick:i.getValue},{default:Object(o.withCtx)((function(){return[a]})),_:1},8,["onClick"]),Object(o.createVNode)(b,{type:"primary",onClick:i.setValue},{default:Object(o.withCtx)((function(){return[l]})),_:1},8,["onClick"])])]})),_:1})]})),_:1}),Object(o.createVNode)(f,{lg:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{shadow:"never",header:"javascript Darcula主题"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(j,{modelValue:d.js,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.js=e}),mode:"javascript",theme:"darcula"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(o.createVNode)(f,{lg:12},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(m,{shadow:"never",header:"SQL"},{default:Object(o.withCtx)((function(){return[Object(o.createVNode)(j,{modelValue:d.sql,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.sql=e}),mode:"sql"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}]]);t.default=i}}]);