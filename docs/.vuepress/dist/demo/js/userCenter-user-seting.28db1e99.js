"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[9764],{14856:function(e,l,t){t.r(l),t.d(l,{default:function(){return f}});var a=t(66252),o=t(3577);const n={class:"el-form-item-msg"},r=(0,a.Uk)(">"),i={class:"el-form-item-msg"};function d(e,l,t,d,c,m){const u=(0,a.up)("el-switch"),s=(0,a.up)("el-form-item"),f=(0,a.up)("el-color-picker"),g=(0,a.up)("el-option"),p=(0,a.up)("el-select"),h=(0,a.up)("el-form"),O=(0,a.up)("el-card");return(0,a.wg)(),(0,a.j4)(O,{shadow:"never",header:"语言主题"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{ref:"form","label-width":"120px",style:{"margin-top":"20px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:e.$t("user.nightmode")},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:c.config.dark,"onUpdate:modelValue":l[0]||(l[0]=e=>c.config.dark=e),"inline-prompt":"","active-icon":"el-icon-moon","inactive-icon":"el-icon-sunny"},null,8,["modelValue"]),(0,a._)("div",n,(0,o.zw)(e.$t("user.nightmode_msg")),1)])),_:1},8,["label"]),(0,a.Wm)(s,{label:"主题颜色"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{modelValue:c.config.colorPrimary,"onUpdate:modelValue":l[1]||(l[1]=e=>c.config.colorPrimary=e),predefine:c.colorList},{default:(0,a.w5)((()=>[r])),_:1},8,["modelValue","predefine"])])),_:1}),(0,a.Wm)(s,{label:e.$t("user.language")},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:c.config.lang,"onUpdate:modelValue":l[2]||(l[2]=e=>c.config.lang=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{label:"简体中文",value:"zh-cn"}),(0,a.Wm)(g,{label:"English",value:"en"})])),_:1},8,["modelValue"]),(0,a._)("div",i,(0,o.zw)(e.$t("user.language_msg")),1)])),_:1},8,["label"])])),_:1},512)])),_:1})}var c=t(23111),m={data(){return{colorList:["#409EFF","#009688","#536dfe","#ff5c93","#c62f2f","#fd726d"],config:{lang:this.$TOOL.data.get("APP_LANG")||this.$CONFIG.LANG,dark:this.$TOOL.data.get("APP_DARK")||!1,colorPrimary:this.$TOOL.data.get("APP_COLOR")||this.$CONFIG.COLOR||"#409EFF"}}},watch:{"config.dark"(e){e?(document.documentElement.classList.add("dark"),this.$TOOL.data.set("APP_DARK",e)):(document.documentElement.classList.remove("dark"),this.$TOOL.data.remove("APP_DARK"))},"config.lang"(e){this.$i18n.locale=e,this.$TOOL.data.set("APP_LANG",e)},"config.colorPrimary"(e){document.documentElement.style.setProperty("--el-color-primary",e);for(let l=1;l<=9;l++)document.documentElement.style.setProperty(`--el-color-primary-light-${l}`,c.Z.lighten(e,l/10));for(let l=1;l<=9;l++)document.documentElement.style.setProperty(`--el-color-primary-dark-${l}`,c.Z.darken(e,l/10));this.$TOOL.data.set("APP_COLOR",e)}}},u=t(83744);const s=(0,u.Z)(m,[["render",d]]);var f=s}}]);