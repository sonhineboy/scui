(window.webpackJsonp=window.webpackJsonp||[]).push([["vab-workflow"],{"181e":function(e,t,o){"use strict";o.r(t);var n=o("7a23");var c={class:"sc-workflow-design"},l={class:"box-scale"},d=Object(n.createElementVNode)("div",{class:"end-node"},[Object(n.createElementVNode)("div",{class:"end-node-circle"}),Object(n.createElementVNode)("div",{class:"end-node-text"},"流程结束")],-1);var r={class:"node-wrap"},i={class:"title",style:{background:"#ff943e"}},a=Object(n.createElementVNode)("i",{class:"icon el-icon-user-solid"},null,-1),u={class:"content"},s={key:0},m={key:1,class:"placeholder"},b=Object(n.createTextVNode)("指定成员"),f=Object(n.createTextVNode)("主管"),p=Object(n.createTextVNode)("发起人自选"),j=Object(n.createTextVNode)("发起人自己"),O=Object(n.createTextVNode)("连续多级主管"),V=Object(n.createTextVNode)("保存"),C=Object(n.createTextVNode)("取消");var h=o("5530"),N=(o("a15b"),o("d81d"),o("b0c0"),{class:"add-node-btn-box"}),v={class:"add-node-btn"},w={class:"add-node-popover-body"};var g={props:{modelValue:{type:Object,default:function(){}}},data:function(){return{visible:!1}},mounted:function(){},methods:{addType:function(e){var t={};1==e?t={nodeName:"审核人",type:1,childNode:this.modelValue}:2==e?t={nodeName:"抄送人",type:2,childNode:this.modelValue}:4==e&&(t={nodeName:"条件路由",type:4,conditionNodes:[{nodeName:"条件1",type:3,priorityLevel:1},{nodeName:"条件2",type:3,priorityLevel:2}],childNode:this.modelValue}),this.$emit("update:modelValue",t),this.visible=!1}},render:function(e,t,o,c,l,d){var r=Object(n.resolveComponent)("el-button"),i=Object(n.resolveComponent)("el-popover");return Object(n.openBlock)(),Object(n.createElementBlock)("div",N,[Object(n.createElementVNode)("div",v,[Object(n.createVNode)(i,{placement:"right-start",width:300,visible:l.visible,"onUpdate:visible":t[3]||(t[3]=function(e){return l.visible=e}),"hide-after":0,"show-after":0},{reference:Object(n.withCtx)((function(){return[Object(n.createVNode)(r,{type:"primary",icon:"el-icon-plus",circle:""})]})),default:Object(n.withCtx)((function(){return[Object(n.createElementVNode)("div",w,[Object(n.createVNode)(r,{icon:"el-icon-user-solid",type:"primary",circle:"",plain:"",onClick:t[0]||(t[0]=function(e){return d.addType(1)})}),Object(n.createVNode)(r,{icon:"el-icon-s-promotion",type:"primary",circle:"",plain:"",onClick:t[1]||(t[1]=function(e){return d.addType(2)})}),Object(n.createVNode)(r,{icon:"el-icon-share",type:"primary",circle:"",plain:"",onClick:t[2]||(t[2]=function(e){return d.addType(4)})})])]})),_:1},8,["visible"])])])}},k=g,y={props:{modelValue:{type:Object,default:function(){}}},components:{addNode:k},data:function(){return{nodeConfig:{},drawer:!1,form:{}}},watch:{modelValue:function(){this.nodeConfig=this.modelValue}},mounted:function(){this.nodeConfig=this.modelValue},methods:{show:function(){this.form={},this.form=Object(h.a)({},this.nodeConfig),this.drawer=!0},save:function(){this.$emit("update:modelValue",this.form),this.drawer=!1},delNode:function(){this.$emit("update:modelValue",this.nodeConfig.childNode)},toText:function(e){return 1==e.settype?!!(e.nodeUserList&&e.nodeUserList.length>0)&&e.nodeUserList.map((function(e){return e.name})).join(" 或 "):2==e.settype?"直接主管":4==e.settype?"发起人自选":5==e.settype?"发起人自己":7==e.settype?"连续多级主管":void 0}},render:function(e,t,o,c,l,d){var h=Object(n.resolveComponent)("add-node"),N=Object(n.resolveComponent)("el-input"),v=Object(n.resolveComponent)("el-form-item"),w=Object(n.resolveComponent)("el-divider"),g=Object(n.resolveComponent)("el-radio"),k=Object(n.resolveComponent)("el-radio-group"),y=Object(n.resolveComponent)("el-form"),x=Object(n.resolveComponent)("el-main"),E=Object(n.resolveComponent)("el-button"),B=Object(n.resolveComponent)("el-footer"),_=Object(n.resolveComponent)("el-container"),T=Object(n.resolveComponent)("el-drawer");return Object(n.openBlock)(),Object(n.createElementBlock)("div",r,[Object(n.createElementVNode)("div",{class:"node-wrap-box",onClick:t[1]||(t[1]=function(){return d.show&&d.show.apply(d,arguments)})},[Object(n.createElementVNode)("div",i,[a,Object(n.createElementVNode)("span",null,Object(n.toDisplayString)(l.nodeConfig.nodeName),1),Object(n.createElementVNode)("i",{class:"close el-icon-close",onClick:t[0]||(t[0]=Object(n.withModifiers)((function(e){return d.delNode()}),["stop"]))})]),Object(n.createElementVNode)("div",u,[d.toText(l.nodeConfig)?(Object(n.openBlock)(),Object(n.createElementBlock)("span",s,Object(n.toDisplayString)(d.toText(l.nodeConfig)),1)):(Object(n.openBlock)(),Object(n.createElementBlock)("span",m,"请选择人员"))])]),Object(n.createVNode)(h,{modelValue:l.nodeConfig.childNode,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.nodeConfig.childNode=e})},null,8,["modelValue"]),Object(n.createVNode)(T,{title:"审批人设置",modelValue:l.drawer,"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.drawer=e}),"destroy-on-close":"","append-to-body":""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(_,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(x,{style:{padding:"0 20px 20px 20px"}},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(y,{"label-position":"top"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(v,{label:""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(N,{modelValue:l.form.nodeName,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.form.nodeName=e})},null,8,["modelValue"])]})),_:1}),Object(n.createVNode)(w),Object(n.createVNode)(v,{label:"审批人员类型"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(k,{modelValue:l.form.settype,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.form.settype=e}),class:"clear"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(g,{label:1},{default:Object(n.withCtx)((function(){return[b]})),_:1}),Object(n.createVNode)(g,{label:2},{default:Object(n.withCtx)((function(){return[f]})),_:1}),Object(n.createVNode)(g,{label:4},{default:Object(n.withCtx)((function(){return[p]})),_:1}),Object(n.createVNode)(g,{label:5},{default:Object(n.withCtx)((function(){return[j]})),_:1}),Object(n.createVNode)(g,{label:7},{default:Object(n.withCtx)((function(){return[O]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),Object(n.createVNode)(w)]})),_:1})]})),_:1}),Object(n.createVNode)(B,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(E,{type:"primary",onClick:d.save},{default:Object(n.withCtx)((function(){return[V]})),_:1},8,["onClick"]),Object(n.createVNode)(E,{onClick:t[5]||(t[5]=function(e){return l.drawer=!1})},{default:Object(n.withCtx)((function(){return[C]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])}},x=y,E={class:"node-wrap"},B={class:"title",style:{background:"#576a95"}},_=Object(n.createElementVNode)("i",{class:"icon el-icon-user-solid"},null,-1),T=Object(n.createElementVNode)("div",{class:"content"},"所有人",-1),U=Object(n.createTextVNode)("保存"),L=Object(n.createTextVNode)("取消");var S={props:{modelValue:{type:Object,default:function(){}}},components:{addNode:k},data:function(){return{nodeConfig:{},drawer:!1,form:{}}},watch:{modelValue:function(){this.nodeConfig=this.modelValue}},mounted:function(){this.nodeConfig=this.modelValue},methods:{show:function(){this.form={},this.form=Object(h.a)({},this.nodeConfig),this.drawer=!0},save:function(){this.$emit("update:modelValue",this.form),this.drawer=!1}},render:function(e,t,o,c,l,d){var r=Object(n.resolveComponent)("add-node"),i=Object(n.resolveComponent)("el-input"),a=Object(n.resolveComponent)("el-form-item"),u=Object(n.resolveComponent)("el-form"),s=Object(n.resolveComponent)("el-main"),m=Object(n.resolveComponent)("el-button"),b=Object(n.resolveComponent)("el-footer"),f=Object(n.resolveComponent)("el-container"),p=Object(n.resolveComponent)("el-drawer");return Object(n.openBlock)(),Object(n.createElementBlock)("div",E,[Object(n.createElementVNode)("div",{class:"node-wrap-box start-node",onClick:t[0]||(t[0]=function(){return d.show&&d.show.apply(d,arguments)})},[Object(n.createElementVNode)("div",B,[_,Object(n.createElementVNode)("span",null,Object(n.toDisplayString)(l.nodeConfig.nodeName),1)]),T]),Object(n.createVNode)(r,{modelValue:l.nodeConfig.childNode,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.nodeConfig.childNode=e})},null,8,["modelValue"]),Object(n.createVNode)(p,{title:"发起人",modelValue:l.drawer,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.drawer=e}),"destroy-on-close":"","append-to-body":""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(f,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(s,{style:{padding:"0 20px 20px 20px"}},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(u,{"label-position":"top"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(a,{label:""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(i,{modelValue:l.form.nodeName,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.form.nodeName=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n.createVNode)(b,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(m,{type:"primary",onClick:d.save},{default:Object(n.withCtx)((function(){return[U]})),_:1},8,["onClick"]),Object(n.createVNode)(m,{onClick:t[3]||(t[3]=function(e){return l.drawer=!1})},{default:Object(n.withCtx)((function(){return[L]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])}},D=S,$={class:"branch-wrap"},F={class:"branch-box-wrap"},M={class:"branch-box"},J=Object(n.createTextVNode)("添加条件"),W={class:"condition-node"},q={class:"condition-node-box"},z=["onClick"],A=["onClick"],G=[Object(n.createElementVNode)("i",{class:"el-icon-arrow-left"},null,-1)],H={class:"title"},I={class:"node-title"},K={class:"priority-title"},P=["onClick"],Q={class:"content"},R={key:0},X={key:1,class:"placeholder"},Y=["onClick"],Z=[Object(n.createElementVNode)("i",{class:"el-icon-arrow-right"},null,-1)],ee={key:1,class:"top-left-cover-line"},te={key:2,class:"bottom-left-cover-line"},oe={key:3,class:"top-right-cover-line"},ne={key:4,class:"bottom-right-cover-line"},ce=Object(n.createTextVNode)("增加条件"),le=Object(n.createTextVNode)("保存"),de=Object(n.createTextVNode)("取消");o("a434"),o("99af");var re={props:{modelValue:{type:Object,default:function(){}}},components:{addNode:k},data:function(){return{nodeConfig:{},drawer:!1,index:0,form:{}}},watch:{modelValue:function(){this.nodeConfig=this.modelValue}},mounted:function(){this.nodeConfig=this.modelValue},methods:{show:function(e){this.index=e,this.form={},this.form=Object(h.a)({},this.nodeConfig.conditionNodes[e]),this.drawer=!0},save:function(){this.nodeConfig.conditionNodes[this.index]=this.form,this.$emit("update:modelValue",this.nodeConfig),this.drawer=!1},addTerm:function(){var e=this.nodeConfig.conditionNodes.length+1;this.nodeConfig.conditionNodes.push({nodeName:"条件"+e,type:3,priorityLevel:e})},delTerm:function(e){this.nodeConfig.conditionNodes.splice(e,1),1==this.nodeConfig.conditionNodes.length&&(this.nodeConfig.childNode&&(this.nodeConfig.conditionNodes[0].childNode?this.reData(this.nodeConfig.conditionNodes[0].childNode,this.nodeConfig.childNode):this.nodeConfig.conditionNodes[0].childNode=this.nodeConfig.childNode),this.$emit("update:modelValue",this.nodeConfig.conditionNodes[0].childNode))},reData:function(e,t){e.childNode?this.reData(e.childNode,t):e.childNode=t},arrTransfer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.nodeConfig.conditionNodes[e]=this.nodeConfig.conditionNodes.splice(e+t,1,this.nodeConfig.conditionNodes[e])[0],this.nodeConfig.conditionNodes.map((function(e,t){e.priorityLevel=t+1})),this.$emit("update:modelValue",this.nodeConfig)},toText:function(e,t){var o=e.conditionNodes[t].conditionList;return o&&o.length>0?o.map((function(e){return"".concat(e.label).concat(e.operator).concat(e.value)})).join(" 和 "):t==e.conditionNodes.length-1&&"其他条件进入此流程"}},render:function(e,t,o,c,l,d){var r=Object(n.resolveComponent)("el-button"),i=Object(n.resolveComponent)("add-node"),a=Object(n.resolveComponent)("el-input"),u=Object(n.resolveComponent)("el-form-item"),s=Object(n.resolveComponent)("el-divider"),m=Object(n.resolveComponent)("el-form"),b=Object(n.resolveComponent)("el-main"),f=Object(n.resolveComponent)("el-footer"),p=Object(n.resolveComponent)("el-container"),j=Object(n.resolveComponent)("el-drawer");return Object(n.openBlock)(),Object(n.createElementBlock)("div",$,[Object(n.createElementVNode)("div",F,[Object(n.createElementVNode)("div",M,[Object(n.createVNode)(r,{class:"add-branch",type:"success",plain:"",round:"",onClick:d.addTerm},{default:Object(n.withCtx)((function(){return[J]})),_:1},8,["onClick"]),(Object(n.openBlock)(!0),Object(n.createElementBlock)(n.Fragment,null,Object(n.renderList)(l.nodeConfig.conditionNodes,(function(t,o){return Object(n.openBlock)(),Object(n.createElementBlock)("div",{class:"col-box",key:o},[Object(n.createElementVNode)("div",W,[Object(n.createElementVNode)("div",q,[Object(n.createElementVNode)("div",{class:"auto-judge",onClick:function(e){return d.show(o)}},[0!=o?(Object(n.openBlock)(),Object(n.createElementBlock)("div",{key:0,class:"sort-left",onClick:Object(n.withModifiers)((function(e){return d.arrTransfer(o,-1)}),["stop"])},G,8,A)):Object(n.createCommentVNode)("",!0),Object(n.createElementVNode)("div",H,[Object(n.createElementVNode)("span",I,Object(n.toDisplayString)(t.nodeName),1),Object(n.createElementVNode)("span",K,"优先级"+Object(n.toDisplayString)(t.priorityLevel),1),Object(n.createElementVNode)("i",{class:"close el-icon-close",onClick:Object(n.withModifiers)((function(e){return d.delTerm(o)}),["stop"])},null,8,P)]),Object(n.createElementVNode)("div",Q,[d.toText(l.nodeConfig,o)?(Object(n.openBlock)(),Object(n.createElementBlock)("span",R,Object(n.toDisplayString)(d.toText(l.nodeConfig,o)),1)):(Object(n.openBlock)(),Object(n.createElementBlock)("span",X,"请设置条件"))]),o!=l.nodeConfig.conditionNodes.length-1?(Object(n.openBlock)(),Object(n.createElementBlock)("div",{key:1,class:"sort-right",onClick:Object(n.withModifiers)((function(e){return d.arrTransfer(o)}),["stop"])},Z,8,Y)):Object(n.createCommentVNode)("",!0)],8,z),Object(n.createVNode)(i,{modelValue:t.childNode,"onUpdate:modelValue":function(e){return t.childNode=e}},null,8,["modelValue","onUpdate:modelValue"])])]),t.childNode?Object(n.renderSlot)(e.$slots,"default",{key:0,node:t}):Object(n.createCommentVNode)("",!0),0==o?(Object(n.openBlock)(),Object(n.createElementBlock)("div",ee)):Object(n.createCommentVNode)("",!0),0==o?(Object(n.openBlock)(),Object(n.createElementBlock)("div",te)):Object(n.createCommentVNode)("",!0),o==l.nodeConfig.conditionNodes.length-1?(Object(n.openBlock)(),Object(n.createElementBlock)("div",oe)):Object(n.createCommentVNode)("",!0),o==l.nodeConfig.conditionNodes.length-1?(Object(n.openBlock)(),Object(n.createElementBlock)("div",ne)):Object(n.createCommentVNode)("",!0)])})),128))]),Object(n.createVNode)(i,{modelValue:l.nodeConfig.childNode,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.nodeConfig.childNode=e})},null,8,["modelValue"])]),Object(n.createVNode)(j,{title:"条件设置",modelValue:l.drawer,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.drawer=e}),"destroy-on-close":"","append-to-body":""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(p,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(b,{style:{padding:"0 20px 20px 20px"}},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(m,{"label-position":"top"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(u,{label:""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(a,{modelValue:l.form.nodeName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.form.nodeName=e})},null,8,["modelValue"])]})),_:1}),Object(n.createVNode)(s),Object(n.createVNode)(u,{label:"条件"},{default:Object(n.withCtx)((function(){return[Object(n.createTextVNode)(Object(n.toDisplayString)(l.nodeConfig.conditionNodes[l.index].conditionList),1)]})),_:1}),Object(n.createVNode)(s),Object(n.createElementVNode)("p",null,[Object(n.createVNode)(r,{type:"primary"},{default:Object(n.withCtx)((function(){return[ce]})),_:1})])]})),_:1})]})),_:1}),Object(n.createVNode)(f,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(r,{type:"primary",onClick:d.save},{default:Object(n.withCtx)((function(){return[le]})),_:1},8,["onClick"]),Object(n.createVNode)(r,{onClick:t[2]||(t[2]=function(e){return l.drawer=!1})},{default:Object(n.withCtx)((function(){return[de]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])}},ie=re,ae={class:"node-wrap"},ue={class:"title",style:{background:"#3296fa"}},se=Object(n.createElementVNode)("i",{class:"icon el-icon-s-promotion"},null,-1),me={class:"content"},be={key:0},fe={key:1,class:"placeholder"},pe=Object(n.createTextVNode)("保存"),je=Object(n.createTextVNode)("取消");var Oe={props:{modelValue:{type:Object,default:function(){}}},components:{addNode:k},data:function(){return{nodeConfig:{},drawer:!1,form:{}}},watch:{modelValue:function(){this.nodeConfig=this.modelValue}},mounted:function(){this.nodeConfig=this.modelValue},methods:{show:function(){this.form={},this.form=Object(h.a)({},this.nodeConfig),this.drawer=!0},save:function(){this.$emit("update:modelValue",this.form),this.drawer=!1},delNode:function(){this.$emit("update:modelValue",this.nodeConfig.childNode)},toText:function(e){return e.nodeUserList&&e.nodeUserList.length>0?e.nodeUserList.map((function(e){return e.name})).join(" 或 "):!!e.ccSelfSelectFlag&&"发起人自选"}},render:function(e,t,o,c,l,d){var r=Object(n.resolveComponent)("add-node"),i=Object(n.resolveComponent)("el-input"),a=Object(n.resolveComponent)("el-form-item"),u=Object(n.resolveComponent)("el-divider"),s=Object(n.resolveComponent)("el-checkbox"),m=Object(n.resolveComponent)("el-form"),b=Object(n.resolveComponent)("el-main"),f=Object(n.resolveComponent)("el-button"),p=Object(n.resolveComponent)("el-footer"),j=Object(n.resolveComponent)("el-container"),O=Object(n.resolveComponent)("el-drawer");return Object(n.openBlock)(),Object(n.createElementBlock)("div",ae,[Object(n.createElementVNode)("div",{class:"node-wrap-box",onClick:t[1]||(t[1]=function(){return d.show&&d.show.apply(d,arguments)})},[Object(n.createElementVNode)("div",ue,[se,Object(n.createElementVNode)("span",null,Object(n.toDisplayString)(l.nodeConfig.nodeName),1),Object(n.createElementVNode)("i",{class:"close el-icon-close",onClick:t[0]||(t[0]=Object(n.withModifiers)((function(e){return d.delNode()}),["stop"]))})]),Object(n.createElementVNode)("div",me,[d.toText(l.nodeConfig)?(Object(n.openBlock)(),Object(n.createElementBlock)("span",be,Object(n.toDisplayString)(d.toText(l.nodeConfig)),1)):(Object(n.openBlock)(),Object(n.createElementBlock)("span",fe,"请选择人员"))])]),Object(n.createVNode)(r,{modelValue:l.nodeConfig.childNode,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.nodeConfig.childNode=e})},null,8,["modelValue"]),Object(n.createVNode)(O,{title:"审批人设置",modelValue:l.drawer,"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.drawer=e}),"destroy-on-close":"","append-to-body":""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(j,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(b,{style:{padding:"0 20px 20px 20px"}},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(m,{"label-position":"top"},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(a,{label:""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(i,{modelValue:l.form.nodeName,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.form.nodeName=e})},null,8,["modelValue"])]})),_:1}),Object(n.createVNode)(u),Object(n.createVNode)(a,{label:""},{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(s,{modelValue:l.form.ccSelfSelectFlag,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.form.ccSelfSelectFlag=e}),label:"允许发起人自选"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n.createVNode)(p,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(f,{type:"primary",onClick:d.save},{default:Object(n.withCtx)((function(){return[pe]})),_:1},8,["onClick"]),Object(n.createVNode)(f,{onClick:t[5]||(t[5]=function(e){return l.drawer=!1})},{default:Object(n.withCtx)((function(){return[je]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])}},Ve={props:{modelValue:{type:Object,default:function(){}}},components:{approver:x,promoter:D,branch:ie,send:Oe},data:function(){return{nodeConfig:{}}},watch:{modelValue:function(e){this.nodeConfig=e},nodeConfig:function(e){this.$emit("update:modelValue",e)}},mounted:function(){this.nodeConfig=this.modelValue},methods:{},render:function(e,t,o,c,l,d){var r=Object(n.resolveComponent)("promoter"),i=Object(n.resolveComponent)("approver"),a=Object(n.resolveComponent)("send"),u=Object(n.resolveComponent)("node-wrap",!0),s=Object(n.resolveComponent)("branch");return Object(n.openBlock)(),Object(n.createElementBlock)(n.Fragment,null,[0==l.nodeConfig.type?(Object(n.openBlock)(),Object(n.createBlock)(r,{key:0,modelValue:l.nodeConfig,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.nodeConfig=e})},null,8,["modelValue"])):Object(n.createCommentVNode)("",!0),1==l.nodeConfig.type?(Object(n.openBlock)(),Object(n.createBlock)(i,{key:1,modelValue:l.nodeConfig,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.nodeConfig=e})},null,8,["modelValue"])):Object(n.createCommentVNode)("",!0),2==l.nodeConfig.type?(Object(n.openBlock)(),Object(n.createBlock)(a,{key:2,modelValue:l.nodeConfig,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.nodeConfig=e})},null,8,["modelValue"])):Object(n.createCommentVNode)("",!0),4==l.nodeConfig.type?(Object(n.openBlock)(),Object(n.createBlock)(s,{key:3,modelValue:l.nodeConfig,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.nodeConfig=e})},{default:Object(n.withCtx)((function(e){return[e.node?(Object(n.openBlock)(),Object(n.createBlock)(u,{key:0,modelValue:e.node.childNode,"onUpdate:modelValue":function(t){return e.node.childNode=t}},null,8,["modelValue","onUpdate:modelValue"])):Object(n.createCommentVNode)("",!0)]})),_:1},8,["modelValue"])):Object(n.createCommentVNode)("",!0),l.nodeConfig.childNode?(Object(n.openBlock)(),Object(n.createBlock)(u,{key:4,modelValue:l.nodeConfig.childNode,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.nodeConfig.childNode=e})},null,8,["modelValue"])):Object(n.createCommentVNode)("",!0)],64)}},Ce={props:{modelValue:{type:Object,default:function(){}}},components:{nodeWrap:Ve},data:function(){return{nodeConfig:this.modelValue}},mounted:function(){},methods:{}};o("d34f");Ce.render=function(e,t,o,r,i,a){var u=Object(n.resolveComponent)("node-wrap");return Object(n.openBlock)(),Object(n.createElementBlock)("div",c,[Object(n.createElementVNode)("div",l,[Object(n.createVNode)(u,{modelValue:i.nodeConfig,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.nodeConfig=e})},null,8,["modelValue"]),d])])};var he={name:"workflow",components:{scWorkflow:Ce},data:function(){return{data:{id:1,name:"合同审批",nodeConfig:{nodeName:"发起人",type:0,childNode:{nodeName:"审核人",type:1,settype:1,nodeUserList:[{id:1,name:"Sakuya"},{id:2,name:"Lolowan"}],childNode:{nodeName:"路由",type:4,conditionNodes:[{nodeName:"条件1",type:3,priorityLevel:1,conditionList:[{label:"上级审核状态",field:"promoter",operator:"=",value:"保留"}],childNode:{nodeName:"条件审核",type:1,settype:2}},{nodeName:"条件2",type:3,priorityLevel:2,conditionList:[]}],childNode:{nodeName:"抄送人",type:2,ccSelfSelectFlag:!0,nodeUserList:[]}}}}}}},mounted:function(){},methods:{},render:function(e,t,o,c,l,d){var r=Object(n.resolveComponent)("el-alert"),i=Object(n.resolveComponent)("sc-workflow"),a=Object(n.resolveComponent)("el-main");return Object(n.openBlock)(),Object(n.createBlock)(a,null,{default:Object(n.withCtx)((function(){return[Object(n.createVNode)(r,{title:"仿钉钉审批工作流. 现预览阶段, 功能有限后期将不断迭代, 一般工作流设计器都是满足不了业务需求的,建议拷贝一份组件自行根据业务扩展开发",type:"warning",style:{"margin-bottom":"20px"}}),Object(n.createVNode)(i,{modelValue:l.data.nodeConfig,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.data.nodeConfig=e})},null,8,["modelValue"])]})),_:1})}};t.default=he},"4ddc":function(e,t,o){},d34f:function(e,t,o){"use strict";o("4ddc")}}]);