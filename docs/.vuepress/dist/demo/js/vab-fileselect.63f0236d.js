(window.webpackJsonp=window.webpackJsonp||[]).push([["vab-fileselect","chunk-983df016"],{"34ce":function(e,t,c){},"84c1":function(e,t,c){"use strict";c.r(t);c("ac1f"),c("841c"),c("b0c0"),c("caad"),c("2532");var l=c("7a23"),o=function(e){return Object(l.pushScopeId)("data-v-48ded1ad"),e=e(),Object(l.popScopeId)(),e},n={class:"sc-file-select"},a={class:"sc-file-select__side"},i={class:"sc-file-select__side-menu"},r={class:"el-tree-node__label"},s={key:0,class:"sc-file-select__side-msg"},u=Object(l.createTextVNode)(" 已选择 "),d=Object(l.createTextVNode)(" / "),p=Object(l.createTextVNode)(" 项 "),f={class:"sc-file-select__files"},b={class:"sc-file-select__top"},m={key:0,class:"upload"},O=Object(l.createTextVNode)("本地上传"),j={class:"tips"},g={class:"keyword"},h={class:"sc-file-select__list"},v={class:"sc-file-select__item__file"},k={class:"sc-file-select__item__upload"},N=["onClick"],_={class:"sc-file-select__item__file"},V={key:0,class:"sc-file-select__item__checkbox"},C={key:1,class:"sc-file-select__item__select"},y=o((function(){return Object(l.createElementVNode)("div",{class:"sc-file-select__item__box"},null,-1)})),x={key:3,class:"item-file item-file-doc"},w={key:1,class:"sc-icon-file-list-fill",style:{color:"#999"}},B=["title"],E={class:"sc-file-select__pagination"},P={class:"sc-file-select__do"},S=Object(l.createTextVNode)("确 定");var z=c("ade3"),D=c("1da1"),I=(c("96cf"),c("a9e3"),c("e9c4"),c("a434"),c("c740"),c("d3b7"),c("3ca3"),c("ddb0"),c("2b3d"),c("9861"),c("b680"),c("365c")),L={apiObj:I.a.common.upload,menuApiObj:I.a.common.file.menu,listApiObj:I.a.common.file.list,successCode:200,maxSize:30,max:99,uploadParseData:function(e){return{id:e.data.id,fileName:e.data.fileName,url:e.data.src}},listParseData:function(e){return{rows:e.data.rows,total:e.data.total,msg:e.message,code:e.code}},request:{page:"page",pageSize:"pageSize",keyword:"keyword",menuKey:"groupId"},menuProps:{key:"id",label:"label",children:"children"},fileProps:{key:"id",fileName:"fileName",url:"url"},files:{doc:{icon:"sc-icon-file-word-2-fill",color:"#409eff"},docx:{icon:"sc-icon-file-word-2-fill",color:"#409eff"},xls:{icon:"sc-icon-file-excel-2-fill",color:"#67C23A"},xlsx:{icon:"sc-icon-file-excel-2-fill",color:"#67C23A"},ppt:{icon:"sc-icon-file-ppt-2-fill",color:"#F56C6C"},pptx:{icon:"sc-icon-file-ppt-2-fill",color:"#F56C6C"}}},U={props:{modelValue:null,hideUpload:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},max:{type:Number,default:L.max},onlyImage:{type:Boolean,default:!1},maxSize:{type:Number,default:L.maxSize}},data:function(){return{keyword:null,pageSize:20,total:0,currentPage:1,data:[],menu:[],menuId:"",value:this.multiple?[]:"",fileList:[],accept:this.onlyImage?"image/gif, image/jpeg, image/png":"",listLoading:!1,menuLoading:!1,treeProps:L.menuProps,fileProps:L.fileProps,files:L.files}},watch:{multiple:function(){this.value=this.multiple?[]:"",this.$emit("update:modelValue",JSON.parse(JSON.stringify(this.value)))}},mounted:function(){this.getMenu(),this.getData()},methods:{getMenu:function(){var e=this;return Object(D.a)(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.menuLoading=!0,t.next=3,L.menuApiObj.get();case 3:c=t.sent,e.menu=c.data,e.menuLoading=!1;case 6:case"end":return t.stop()}}),t)})))()},getData:function(){var e=this;return Object(D.a)(regeneratorRuntime.mark((function t(){var c,l,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.listLoading=!0,c={},Object(z.a)(c,L.request.menuKey,e.menuId),Object(z.a)(c,L.request.page,e.currentPage),Object(z.a)(c,L.request.pageSize,e.pageSize),Object(z.a)(c,L.request.keyword,e.keyword),l=c,e.onlyImage&&(l.type="image"),t.next=5,L.listApiObj.get(l);case 5:o=t.sent,n=L.listParseData(o),e.data=n.rows,e.total=n.total,e.listLoading=!1,e.$refs.scrollbar.setScrollTop(0);case 11:case"end":return t.stop()}}),t)})))()},groupClick:function(e){this.menuId=e.id,this.currentPage=1,this.keyword=null,this.getData()},reload:function(){this.getData()},search:function(){this.currentPage=1,this.getData()},select:function(e){var t=e[this.fileProps.url];this.multiple?this.value.includes(t)?this.value.splice(this.value.findIndex((function(e){return e==t})),1):this.value.push(t):this.value.includes(t)?this.value="":this.value=t},submit:function(){var e=JSON.parse(JSON.stringify(this.value));this.$emit("update:modelValue",e),this.$emit("submit",e)},uploadChange:function(e,t){e.tempImg=URL.createObjectURL(e.raw),this.fileList=t},uploadBefore:function(e){if(!(e.size/1024/1024<this.maxSize))return this.$message.warning("上传文件大小不能超过 ".concat(this.maxSize,"MB!")),!1},uploadRequest:function(e){var t=L.apiObj,c=new FormData;c.append("file",e.file),c.append([L.request.menuKey],this.menuId),t.post(c,{onUploadProgress:function(t){e.onProgress(t)}}).then((function(t){e.onSuccess(t)})).catch((function(t){e.onError(t)}))},uploadProcess:function(e,t){t.progress=Number((e.loaded/e.total*100).toFixed(2))},uploadSuccess:function(e,t){var c;this.fileList.splice(this.fileList.findIndex((function(e){return e.uid==t.uid})),1);var l=L.uploadParseData(e);this.data.unshift((c={},Object(z.a)(c,this.fileProps.key,l.id),Object(z.a)(c,this.fileProps.fileName,l.fileName),Object(z.a)(c,this.fileProps.url,l.url),c)),this.multiple||(this.value=l.url)},uploadError:function(e){this.$notify.error({title:"上传文件错误",message:e})},_isImg:function(e){var t=e.substring(e.lastIndexOf("."));return-1!=[".jpg",".jpeg",".png",".gif",".bmp"].indexOf(t)},_getExt:function(e){return e.substring(e.lastIndexOf(".")+1)}}},T=(c("b780"),c("6b0d"));const q=c.n(T)()(U,[["render",function(e,t,c,o,z,D){var I=Object(l.resolveComponent)("el-icon-folder"),L=Object(l.resolveComponent)("el-icon"),U=Object(l.resolveComponent)("el-tree"),T=Object(l.resolveComponent)("el-button"),q=Object(l.resolveComponent)("el-upload"),F=Object(l.resolveComponent)("el-icon-warning"),R=Object(l.resolveComponent)("el-input"),$=Object(l.resolveComponent)("el-empty"),A=Object(l.resolveComponent)("el-progress"),J=Object(l.resolveComponent)("el-image"),K=Object(l.resolveComponent)("el-icon-check"),M=Object(l.resolveComponent)("el-scrollbar"),G=Object(l.resolveComponent)("el-pagination"),H=Object(l.resolveDirective)("loading");return Object(l.openBlock)(),Object(l.createElementBlock)("div",n,[Object(l.withDirectives)((Object(l.openBlock)(),Object(l.createElementBlock)("div",a,[Object(l.createElementVNode)("div",i,[Object(l.createVNode)(U,{ref:"group",class:"menu",data:z.menu,"node-key":z.treeProps.key,props:z.treeProps,"current-node-key":z.menu.length>0?z.menu[0][z.treeProps.key]:"","highlight-current":"",onNodeClick:D.groupClick},{default:Object(l.withCtx)((function(e){var t=e.node;return[Object(l.createElementVNode)("span",r,[Object(l.createVNode)(L,{class:"icon"},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(I)]})),_:1}),Object(l.createTextVNode)(Object(l.toDisplayString)(t.label),1)])]})),_:1},8,["data","node-key","props","current-node-key","onNodeClick"])]),c.multiple?(Object(l.openBlock)(),Object(l.createElementBlock)("div",s,[u,Object(l.createElementVNode)("b",null,Object(l.toDisplayString)(z.value.length),1),d,Object(l.createElementVNode)("b",null,Object(l.toDisplayString)(c.max),1),p])):Object(l.createCommentVNode)("",!0)])),[[H,z.menuLoading]]),Object(l.withDirectives)((Object(l.openBlock)(),Object(l.createElementBlock)("div",f,[Object(l.createElementVNode)("div",b,[c.hideUpload?Object(l.createCommentVNode)("",!0):(Object(l.openBlock)(),Object(l.createElementBlock)("div",m,[Object(l.createVNode)(q,{class:"sc-file-select__upload",action:"",multiple:"","show-file-list":!1,accept:z.accept,"on-change":D.uploadChange,"before-upload":D.uploadBefore,"on-progress":D.uploadProcess,"on-success":D.uploadSuccess,"on-error":D.uploadError,"http-request":D.uploadRequest},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(T,{type:"primary",icon:"el-icon-upload"},{default:Object(l.withCtx)((function(){return[O]})),_:1})]})),_:1},8,["accept","on-change","before-upload","on-progress","on-success","on-error","http-request"]),Object(l.createElementVNode)("span",j,[Object(l.createVNode)(L,null,{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(F)]})),_:1}),Object(l.createTextVNode)("大小不超过"+Object(l.toDisplayString)(c.maxSize)+"MB",1)])])),Object(l.createElementVNode)("div",g,[Object(l.createVNode)(R,{modelValue:z.keyword,"onUpdate:modelValue":t[0]||(t[0]=function(e){return z.keyword=e}),"prefix-icon":"el-icon-search",placeholder:"文件名搜索",clearable:"",onKeyup:Object(l.withKeys)(D.search,["enter"]),onClear:D.search},null,8,["modelValue","onKeyup","onClear"])])]),Object(l.createElementVNode)("div",h,[Object(l.createVNode)(M,{ref:"scrollbar"},{default:Object(l.withCtx)((function(){return[0==z.fileList.length&&0==z.data.length?(Object(l.openBlock)(),Object(l.createBlock)($,{key:0,description:"无数据","image-size":80})):Object(l.createCommentVNode)("",!0),(Object(l.openBlock)(!0),Object(l.createElementBlock)(l.Fragment,null,Object(l.renderList)(z.fileList,(function(e,t){return Object(l.openBlock)(),Object(l.createElementBlock)("div",{key:t,class:"sc-file-select__item"},[Object(l.createElementVNode)("div",v,[Object(l.createElementVNode)("div",k,[Object(l.createVNode)(A,{type:"circle",percentage:e.progress,width:70},null,8,["percentage"])]),Object(l.createVNode)(J,{src:e.tempImg,fit:"contain"},null,8,["src"])]),Object(l.createElementVNode)("p",null,Object(l.toDisplayString)(e.name),1)])})),128)),(Object(l.openBlock)(!0),Object(l.createElementBlock)(l.Fragment,null,Object(l.renderList)(z.data,(function(e){return Object(l.openBlock)(),Object(l.createElementBlock)("div",{key:e[z.fileProps.key],class:Object(l.normalizeClass)(["sc-file-select__item",{active:z.value.includes(e[z.fileProps.url])}]),onClick:function(t){return D.select(e)}},[Object(l.createElementVNode)("div",_,[c.multiple?(Object(l.openBlock)(),Object(l.createElementBlock)("div",V,[Object(l.createVNode)(L,null,{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(K)]})),_:1})])):(Object(l.openBlock)(),Object(l.createElementBlock)("div",C,[Object(l.createVNode)(L,null,{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(K)]})),_:1})])),y,D._isImg(e[z.fileProps.url])?(Object(l.openBlock)(),Object(l.createBlock)(J,{key:2,src:e[z.fileProps.url],fit:"contain",lazy:""},null,8,["src"])):(Object(l.openBlock)(),Object(l.createElementBlock)("div",x,[z.files[D._getExt(e[z.fileProps.url])]?(Object(l.openBlock)(),Object(l.createElementBlock)("i",{key:0,class:Object(l.normalizeClass)(z.files[D._getExt(e[z.fileProps.url])].icon),style:Object(l.normalizeStyle)({color:z.files[D._getExt(e[z.fileProps.url])].color})},null,6)):(Object(l.openBlock)(),Object(l.createElementBlock)("i",w))]))]),Object(l.createElementVNode)("p",{title:e[z.fileProps.fileName]},Object(l.toDisplayString)(e[z.fileProps.fileName]),9,B)],10,N)})),128))]})),_:1},512)]),Object(l.createElementVNode)("div",E,[Object(l.createVNode)(G,{small:"",background:"",layout:"prev, pager, next",total:z.total,"page-size":z.pageSize,currentPage:z.currentPage,"onUpdate:currentPage":t[1]||(t[1]=function(e){return z.currentPage=e}),onCurrentChange:D.reload},null,8,["total","page-size","currentPage","onCurrentChange"])]),Object(l.createElementVNode)("div",P,[Object(l.renderSlot)(e.$slots,"do",{},void 0,!0),Object(l.createVNode)(T,{type:"primary",disabled:z.value.length<=0,onClick:D.submit},{default:Object(l.withCtx)((function(){return[S]})),_:1},8,["disabled","onClick"])])])),[[H,z.listLoading]])])}],["__scopeId","data-v-48ded1ad"]]);t.default=q},a651:function(e,t,c){"use strict";c.r(t);var l=c("7a23"),o=Object(l.createTextVNode)("自定义插槽"),n={style:{"margin-top":"15px"}},a=Object(l.createTextVNode)("切换multiple"),i=Object(l.createTextVNode)("切换hideUpload");var r={name:"fileselect",components:{scFileSelect:c("84c1").default},data:function(){return{file:"",multiple:!1,hideUpload:!1,upload:"",upload2:""}},mounted:function(){},methods:{submit:function(e){console.log(e),this.$message("返回值请查看F12控制台console.log()")}}},s=c("6b0d");const u=c.n(s)()(r,[["render",function(e,t,c,r,s,u){var d=Object(l.resolveComponent)("el-button"),p=Object(l.resolveComponent)("sc-file-select"),f=Object(l.resolveComponent)("el-card"),b=Object(l.resolveComponent)("sc-upload"),m=Object(l.resolveComponent)("sc-upload-multiple"),O=Object(l.resolveComponent)("el-col"),j=Object(l.resolveComponent)("el-row"),g=Object(l.resolveComponent)("el-main");return Object(l.openBlock)(),Object(l.createBlock)(g,null,{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(j,{gutter:15},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(O,{lg:18},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(f,{shadow:"never"},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(p,{modelValue:s.file,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.file=e}),multiple:s.multiple,hideUpload:s.hideUpload,max:99,onSubmit:u.submit},{do:Object(l.withCtx)((function(){return[Object(l.createVNode)(d,null,{default:Object(l.withCtx)((function(){return[o]})),_:1})]})),_:1},8,["modelValue","multiple","hideUpload","onSubmit"])]})),_:1}),Object(l.createVNode)(f,{shadow:"never",header:"已集成的上传组件"},{default:Object(l.withCtx)((function(){return[Object(l.createElementVNode)("p",null,[Object(l.createVNode)(b,{modelValue:s.upload,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.upload=e}),title:"单选","file-select":""},null,8,["modelValue"])]),Object(l.createElementVNode)("p",n,[Object(l.createVNode)(m,{modelValue:s.upload2,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.upload2=e}),title:"多选","file-select":""},null,8,["modelValue"])])]})),_:1})]})),_:1}),Object(l.createVNode)(O,{lg:6},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(f,{shadow:"never",header:"参数和方法"},{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(d,{type:"primary",onClick:t[3]||(t[3]=function(e){return s.multiple=!s.multiple})},{default:Object(l.withCtx)((function(){return[a]})),_:1}),Object(l.createVNode)(d,{type:"primary",onClick:t[4]||(t[4]=function(e){return s.hideUpload=!s.hideUpload})},{default:Object(l.withCtx)((function(){return[i]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})}]]);t.default=u},b780:function(e,t,c){"use strict";c("34ce")}}]);