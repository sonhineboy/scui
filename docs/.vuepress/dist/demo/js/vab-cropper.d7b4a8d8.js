"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[3804,8201],{64552:function(e,l,a){a.r(l),a.d(l,{default:function(){return g}});var t=a(66252);const o=(0,t._)("div",{class:"el-form-item-msg"},"固定选区或者不固定",-1),p=(0,t._)("div",{class:"el-form-item-msg"},"图像压缩率，值为：0.1-1",-1),r=(0,t.Uk)("Base64"),m=(0,t.Uk)("Blob"),u=(0,t.Uk)("File"),s=["src"];function c(e,l,a,c,i,d){const n=(0,t.up)("sc-cropper"),f=(0,t.up)("el-card"),g=(0,t.up)("el-option"),w=(0,t.up)("el-select"),W=(0,t.up)("el-form-item"),b=(0,t.up)("el-form"),h=(0,t.up)("el-button"),v=(0,t.up)("el-col"),_=(0,t.up)("el-alert"),k=(0,t.up)("sc-upload"),R=(0,t.up)("el-row"),C=(0,t.up)("el-main");return(0,t.wg)(),(0,t.j4)(C,null,{default:(0,t.w5)((()=>[(0,t.Wm)(R,{gutter:15},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{lg:14},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{shadow:"never"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{src:i.cropperImg,compress:i.compress,aspectRatio:i.aspectRatio,ref:"cropper"},null,8,["src","compress","aspectRatio"])])),_:1}),(0,t.Wm)(f,{shadow:"never",header:"参数和方法"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{"label-width":"100px"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{label:"aspectRatio"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{modelValue:i.aspectRatio,"onUpdate:modelValue":l[0]||(l[0]=e=>i.aspectRatio=e),placeholder:"请选择"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{label:"自由",value:0}),(0,t.Wm)(g,{label:"1:1",value:1}),(0,t.Wm)(g,{label:"4:3",value:4/3}),(0,t.Wm)(g,{label:"16:9",value:16/9})])),_:1},8,["modelValue"]),o])),_:1}),(0,t.Wm)(W,{label:"compress"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{modelValue:i.compress,"onUpdate:modelValue":l[1]||(l[1]=e=>i.compress=e),placeholder:"请选择"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{label:"0.1",value:.1},null,8,["value"]),(0,t.Wm)(g,{label:"0.5",value:.5},null,8,["value"]),(0,t.Wm)(g,{label:"1",value:1})])),_:1},8,["modelValue"]),p])),_:1})])),_:1}),(0,t.Wm)(h,{type:"primary",plain:"",onClick:d.getBase64},{default:(0,t.w5)((()=>[r])),_:1},8,["onClick"]),(0,t.Wm)(h,{type:"primary",plain:"",onClick:d.getBlob},{default:(0,t.w5)((()=>[m])),_:1},8,["onClick"]),(0,t.Wm)(h,{type:"primary",plain:"",onClick:d.getFile},{default:(0,t.w5)((()=>[u])),_:1},8,["onClick"])])),_:1}),(0,t.Wm)(f,{shadow:"never",header:"方法结果"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:i.imgData},null,8,s)])),_:1})])),_:1}),(0,t.Wm)(v,{lg:10},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{shadow:"never",header:"已内置剪裁的上传组件"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{title:"设置cropper就可以开启上传前剪裁, 并已封装compress和aspectRatio, 打开F12查看网络请求",type:"success",style:{"margin-bottom":"20px"}}),(0,t.Wm)(k,{modelValue:i.uploadImg,"onUpdate:modelValue":l[2]||(l[2]=e=>i.uploadImg=e),title:"开启剪裁",cropper:!0,compress:1,aspectRatio:1},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})}var i=a(1031),d={name:"cropper",components:{scCropper:i["default"]},data(){return{cropperImg:"img/avatar.jpg",compress:.5,aspectRatio:0,uploadImg:"",imgData:""}},methods:{getBase64(){this.$refs.cropper.getCropData((e=>{this.imgData=e}))},getBlob(){this.$refs.cropper.getCropBlob((e=>{this.imgData=URL.createObjectURL(e)}))},getFile(){this.$refs.cropper.getCropFile((e=>{let l=document.createElement("a");l.download=e.name,l.href=URL.createObjectURL(e),l.click()}),"fileName.jpg","image/jpeg")}}},n=a(83744);const f=(0,n.Z)(d,[["render",c]]);var g=f}}]);