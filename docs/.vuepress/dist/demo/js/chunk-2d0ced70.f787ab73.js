(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0ced70"],{"60bb":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),l={class:"sceditor"};var i=n("1da1"),o=(n("96cf"),n("a9e3"),n("365c")),r=n("ca72"),c=n("e562"),u=n.n(c),d=(n("0d68"),n("ec27"),n("64d8"),n("4ea8"),n("4237"),n("0a9d"),n("07d1"),{components:{Editor:r.a},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},height:{type:Number,default:300},disabled:{type:Boolean,default:!1},plugins:{type:[String,Array],default:"code image link preview table"},toolbar:{type:[String,Array],default:"undo redo |  forecolor backcolor bold italic underline strikethrough link | formatselect fontselect fontsizeselect | \t\t\t\t\talignleft aligncenter alignright alignjustify outdent indent lineheight | bullist numlist | \t\t\t\t\timage table  preview | code selectall"}},data:function(){return{init:{language_url:"tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:"tinymce/skins/ui/oxide",content_css:"tinymce/skins/content/default/content.css",menubar:!1,statusbar:!0,plugins:this.plugins,toolbar:this.toolbar,fontsize_formats:"12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 56px 72px",height:this.height,placeholder:this.placeholder,branding:!1,resize:!0,elementpath:!0,content_style:"",images_upload_handler:(e=Object(i.a)(regeneratorRuntime.mark((function e(t,n,a){var l,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=new FormData).append("file",t.blob(),t.filename()),e.prev=2,e.next=5,o.a.default.upload.post(l);case 5:i=e.sent,n(i.data.src),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a("Image upload failed");case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),function(t,n,a){return e.apply(this,arguments)}),setup:function(e){e.on("init",(function(){this.getBody().style.fontSize="14px"}))}},contentValue:this.modelValue};var e},watch:{modelValue:function(e){this.contentValue=e},contentValue:function(e){this.$emit("update:modelValue",e)}},mounted:function(){u.a.init({})},methods:{onClick:function(e){this.$emit("onClick",e,u.a)}},render:function(e,t,n,i,o,r){var c=Object(a.resolveComponent)("Editor");return Object(a.openBlock)(),Object(a.createBlock)("div",l,[Object(a.createVNode)(c,{modelValue:o.contentValue,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.contentValue=e}),init:o.init,disabled:n.disabled,placeholder:n.placeholder,onOnClick:r.onClick},null,8,["modelValue","init","disabled","placeholder","onOnClick"])])}});t.default=d}}]);