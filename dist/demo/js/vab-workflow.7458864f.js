"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[1292],{5272:function(e,l,o){o.r(l),o.d(l,{default:function(){return sl}});var t=o(6252);const d={class:"do"};function i(e,l,o,i,a,n){const s=(0,t.up)("el-page-header"),r=(0,t.up)("el-button"),u=(0,t.up)("el-header"),c=(0,t.up)("sc-workflow"),p=(0,t.up)("el-main"),m=(0,t.up)("el-container");return(0,t.wg)(),(0,t.j4)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{content:a.data.name},null,8,["content"]),(0,t._)("div",d,[(0,t.Wm)(r,{type:"primary",onClick:n.exportJson},{default:(0,t.w5)((()=>[(0,t.Uk)("export JSON")])),_:1},8,["onClick"])])])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{modelValue:a.data.nodeConfig,"onUpdate:modelValue":l[0]||(l[0]=e=>a.data.nodeConfig=e)},null,8,["modelValue"])])),_:1})])),_:1})}const a={class:"sc-workflow-design"},n={class:"box-scale"},s=(0,t._)("div",{class:"end-node"},[(0,t._)("div",{class:"end-node-circle"}),(0,t._)("div",{class:"end-node-text"},"流程结束")],-1);function r(e,l,o,d,i,r){const u=(0,t.up)("node-wrap"),c=(0,t.up)("use-select");return(0,t.wg)(),(0,t.iD)("div",a,[(0,t._)("div",n,[i.nodeConfig?((0,t.wg)(),(0,t.j4)(u,{key:0,modelValue:i.nodeConfig,"onUpdate:modelValue":l[0]||(l[0]=e=>i.nodeConfig=e)},null,8,["modelValue"])):(0,t.kq)("",!0),s]),i.selectVisible?((0,t.wg)(),(0,t.j4)(c,{key:0,ref:"useselect",onClosed:l[1]||(l[1]=e=>i.selectVisible=!1)},null,512)):(0,t.kq)("",!0)])}function u(e,l,o,d,i,a){const n=(0,t.up)("promoter"),s=(0,t.up)("approver"),r=(0,t.up)("send"),u=(0,t.up)("node-wrap",!0),c=(0,t.up)("branch");return(0,t.wg)(),(0,t.iD)(t.HY,null,[0==i.nodeConfig.type?((0,t.wg)(),(0,t.j4)(n,{key:0,modelValue:i.nodeConfig,"onUpdate:modelValue":l[0]||(l[0]=e=>i.nodeConfig=e)},null,8,["modelValue"])):(0,t.kq)("",!0),1==i.nodeConfig.type?((0,t.wg)(),(0,t.j4)(s,{key:1,modelValue:i.nodeConfig,"onUpdate:modelValue":l[1]||(l[1]=e=>i.nodeConfig=e)},null,8,["modelValue"])):(0,t.kq)("",!0),2==i.nodeConfig.type?((0,t.wg)(),(0,t.j4)(r,{key:2,modelValue:i.nodeConfig,"onUpdate:modelValue":l[2]||(l[2]=e=>i.nodeConfig=e)},null,8,["modelValue"])):(0,t.kq)("",!0),4==i.nodeConfig.type?((0,t.wg)(),(0,t.j4)(c,{key:3,modelValue:i.nodeConfig,"onUpdate:modelValue":l[3]||(l[3]=e=>i.nodeConfig=e)},{default:(0,t.w5)((e=>[e.node?((0,t.wg)(),(0,t.j4)(u,{key:0,modelValue:e.node.childNode,"onUpdate:modelValue":l=>e.node.childNode=l},null,8,["modelValue","onUpdate:modelValue"])):(0,t.kq)("",!0)])),_:1},8,["modelValue"])):(0,t.kq)("",!0),i.nodeConfig.childNode?((0,t.wg)(),(0,t.j4)(u,{key:4,modelValue:i.nodeConfig.childNode,"onUpdate:modelValue":l[4]||(l[4]=e=>i.nodeConfig.childNode=e)},null,8,["modelValue"])):(0,t.kq)("",!0)],64)}var c=o(3577),p=o(9963);const m={class:"node-wrap"},f={class:"title",style:{background:"#ff943e"}},h={class:"content"},w={key:0},g={key:1,class:"placeholder"},k={class:"node-wrap-drawer__title"},_={class:"tags-list"},y={class:"tags-list"},C={key:0},V={style:{width:"100%"}},v={style:{width:"100%"}},W={style:{width:"100%"}};function b(e,l,o,d,i,a){const n=(0,t.up)("el-icon-user-filled"),s=(0,t.up)("el-icon"),r=(0,t.up)("el-icon-close"),u=(0,t.up)("add-node"),b=(0,t.up)("el-icon-edit"),U=(0,t.up)("el-input"),N=(0,t.up)("el-option"),T=(0,t.up)("el-select"),L=(0,t.up)("el-form-item"),x=(0,t.up)("el-button"),D=(0,t.up)("el-tag"),j=(0,t.up)("el-input-number"),z=(0,t.up)("el-radio"),q=(0,t.up)("el-radio-group"),M=(0,t.up)("el-divider"),$=(0,t.up)("el-checkbox"),S=(0,t.up)("el-form"),O=(0,t.up)("el-main"),R=(0,t.up)("el-footer"),E=(0,t.up)("el-container"),H=(0,t.up)("el-drawer");return(0,t.wg)(),(0,t.iD)("div",m,[(0,t._)("div",{class:"node-wrap-box",onClick:l[1]||(l[1]=(...e)=>a.show&&a.show(...e))},[(0,t._)("div",f,[(0,t.Wm)(s,{class:"icon"},{default:(0,t.w5)((()=>[(0,t.Wm)(n)])),_:1}),(0,t._)("span",null,(0,c.zw)(i.nodeConfig.nodeName),1),(0,t.Wm)(s,{class:"close",onClick:l[0]||(l[0]=(0,p.iM)((e=>a.delNode()),["stop"]))},{default:(0,t.w5)((()=>[(0,t.Wm)(r)])),_:1})]),(0,t._)("div",h,[a.toText(i.nodeConfig)?((0,t.wg)(),(0,t.iD)("span",w,(0,c.zw)(a.toText(i.nodeConfig)),1)):((0,t.wg)(),(0,t.iD)("span",g,"请选择"))])]),(0,t.Wm)(u,{modelValue:i.nodeConfig.childNode,"onUpdate:modelValue":l[2]||(l[2]=e=>i.nodeConfig.childNode=e)},null,8,["modelValue"]),(0,t.Wm)(H,{title:"审批人设置",modelValue:i.drawer,"onUpdate:modelValue":l[17]||(l[17]=e=>i.drawer=e),"destroy-on-close":"","append-to-body":"",size:500},{header:(0,t.w5)((()=>[(0,t._)("div",k,[i.isEditTitle?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("label",{key:0,onClick:l[3]||(l[3]=(...e)=>a.editTitle&&a.editTitle(...e))},[(0,t.Uk)((0,c.zw)(i.form.nodeName),1),(0,t.Wm)(s,{class:"node-wrap-drawer__title-edit"},{default:(0,t.w5)((()=>[(0,t.Wm)(b)])),_:1})])),i.isEditTitle?((0,t.wg)(),(0,t.j4)(U,{key:1,ref:"nodeTitle",modelValue:i.form.nodeName,"onUpdate:modelValue":l[4]||(l[4]=e=>i.form.nodeName=e),clearable:"",onBlur:a.saveTitle,onKeyup:(0,p.D2)(a.saveTitle,["enter"])},null,8,["modelValue","onBlur","onKeyup"])):(0,t.kq)("",!0)])])),default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t.Wm)(O,{style:{padding:"0 20px 20px 20px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{"label-position":"top"},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{label:"审批人员类型"},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{modelValue:i.form.setType,"onUpdate:modelValue":l[5]||(l[5]=e=>i.form.setType=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{value:1,label:"指定成员"}),(0,t.Wm)(N,{value:2,label:"主管"}),(0,t.Wm)(N,{value:3,label:"角色"}),(0,t.Wm)(N,{value:4,label:"发起人自选"}),(0,t.Wm)(N,{value:5,label:"发起人自己"}),(0,t.Wm)(N,{value:7,label:"连续多级主管"})])),_:1},8,["modelValue"])])),_:1}),1==i.form.setType?((0,t.wg)(),(0,t.j4)(L,{key:0,label:"选择成员"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{type:"primary",icon:"el-icon-plus",round:"",onClick:l[6]||(l[6]=e=>a.selectHandle(1,i.form.nodeUserList))},{default:(0,t.w5)((()=>[(0,t.Uk)("选择人员")])),_:1}),(0,t._)("div",_,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.form.nodeUserList,((e,l)=>((0,t.wg)(),(0,t.j4)(D,{key:e.id,closable:"",onClose:e=>a.delUser(l)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.name),1)])),_:2},1032,["onClose"])))),128))])])),_:1})):(0,t.kq)("",!0),2==i.form.setType?((0,t.wg)(),(0,t.j4)(L,{key:1,label:"指定主管"},{default:(0,t.w5)((()=>[(0,t.Uk)(" 发起人的第 "),(0,t.Wm)(j,{modelValue:i.form.examineLevel,"onUpdate:modelValue":l[7]||(l[7]=e=>i.form.examineLevel=e),min:1},null,8,["modelValue"]),(0,t.Uk)(" 级主管 ")])),_:1})):(0,t.kq)("",!0),3==i.form.setType?((0,t.wg)(),(0,t.j4)(L,{key:2,label:"选择角色"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{type:"primary",icon:"el-icon-plus",round:"",onClick:l[8]||(l[8]=e=>a.selectHandle(2,i.form.nodeRoleList))},{default:(0,t.w5)((()=>[(0,t.Uk)("选择角色")])),_:1}),(0,t._)("div",y,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.form.nodeRoleList,((e,l)=>((0,t.wg)(),(0,t.j4)(D,{key:e.id,type:"info",closable:"",onClose:e=>a.delRole(l)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.name),1)])),_:2},1032,["onClose"])))),128))])])),_:1})):(0,t.kq)("",!0),4==i.form.setType?((0,t.wg)(),(0,t.j4)(L,{key:3,label:"发起人自选"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{modelValue:i.form.selectMode,"onUpdate:modelValue":l[9]||(l[9]=e=>i.form.selectMode=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{label:1},{default:(0,t.w5)((()=>[(0,t.Uk)("自选一个人")])),_:1}),(0,t.Wm)(z,{label:2},{default:(0,t.w5)((()=>[(0,t.Uk)("自选多个人")])),_:1})])),_:1},8,["modelValue"])])),_:1})):(0,t.kq)("",!0),7==i.form.setType?((0,t.wg)(),(0,t.j4)(L,{key:4,label:"连续主管审批终点"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{modelValue:i.form.directorMode,"onUpdate:modelValue":l[10]||(l[10]=e=>i.form.directorMode=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{label:0},{default:(0,t.w5)((()=>[(0,t.Uk)("直到最上层主管")])),_:1}),(0,t.Wm)(z,{label:1},{default:(0,t.w5)((()=>[(0,t.Uk)("自定义审批终点")])),_:1})])),_:1},8,["modelValue"]),1==i.form.directorMode?((0,t.wg)(),(0,t.iD)("p",C,[(0,t.Uk)("直到发起人的第 "),(0,t.Wm)(j,{modelValue:i.form.directorLevel,"onUpdate:modelValue":l[11]||(l[11]=e=>i.form.directorLevel=e),min:1},null,8,["modelValue"]),(0,t.Uk)(" 级主管")])):(0,t.kq)("",!0)])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(M),(0,t.Wm)(L,{label:""},{default:(0,t.w5)((()=>[(0,t.Wm)($,{modelValue:i.form.termAuto,"onUpdate:modelValue":l[12]||(l[12]=e=>i.form.termAuto=e),label:"超时自动审批"},null,8,["modelValue"])])),_:1}),i.form.termAuto?((0,t.wg)(),(0,t.iD)(t.HY,{key:5},[(0,t.Wm)(L,{label:"审批期限（为 0 则不生效）"},{default:(0,t.w5)((()=>[(0,t.Wm)(j,{modelValue:i.form.term,"onUpdate:modelValue":l[13]||(l[13]=e=>i.form.term=e),min:0},null,8,["modelValue"]),(0,t.Uk)(" 小时 ")])),_:1}),(0,t.Wm)(L,{label:"审批期限超时后执行"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{modelValue:i.form.termMode,"onUpdate:modelValue":l[14]||(l[14]=e=>i.form.termMode=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{label:0},{default:(0,t.w5)((()=>[(0,t.Uk)("自动通过")])),_:1}),(0,t.Wm)(z,{label:1},{default:(0,t.w5)((()=>[(0,t.Uk)("自动拒绝")])),_:1})])),_:1},8,["modelValue"])])),_:1})],64)):(0,t.kq)("",!0),(0,t.Wm)(M),(0,t.Wm)(L,{label:"多人审批时审批方式"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{modelValue:i.form.examineMode,"onUpdate:modelValue":l[15]||(l[15]=e=>i.form.examineMode=e)},{default:(0,t.w5)((()=>[(0,t._)("p",V,[(0,t.Wm)(z,{label:1},{default:(0,t.w5)((()=>[(0,t.Uk)("按顺序依次审批")])),_:1})]),(0,t._)("p",v,[(0,t.Wm)(z,{label:2},{default:(0,t.w5)((()=>[(0,t.Uk)("会签 (可同时审批，每个人必须审批通过)")])),_:1})]),(0,t._)("p",W,[(0,t.Wm)(z,{label:3},{default:(0,t.w5)((()=>[(0,t.Uk)("或签 (有一人审批通过即可)")])),_:1})])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Wm)(x,{type:"primary",onClick:a.save},{default:(0,t.w5)((()=>[(0,t.Uk)("保存")])),_:1},8,["onClick"]),(0,t.Wm)(x,{onClick:l[16]||(l[16]=e=>i.drawer=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("取消")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const U={class:"add-node-btn-box"},N={class:"add-node-btn"},T={class:"add-node-popover-body"},L=(0,t._)("p",null,"审批节点",-1),x=(0,t._)("p",null,"抄送节点",-1),D=(0,t._)("p",null,"条件分支",-1);function j(e,l,o,d,i,a){const n=(0,t.up)("el-button"),s=(0,t.up)("el-icon-user-filled"),r=(0,t.up)("el-icon"),u=(0,t.up)("el-icon-promotion"),c=(0,t.up)("el-icon-share"),p=(0,t.up)("el-popover");return(0,t.wg)(),(0,t.iD)("div",U,[(0,t._)("div",N,[(0,t.Wm)(p,{placement:"right-start",width:270,trigger:"click","hide-after":0,"show-after":0},{reference:(0,t.w5)((()=>[(0,t.Wm)(n,{type:"primary",icon:"el-icon-plus",circle:""})])),default:(0,t.w5)((()=>[(0,t._)("div",T,[(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(r,{style:{color:"#ff943e"},onClick:l[0]||(l[0]=e=>a.addType(1))},{default:(0,t.w5)((()=>[(0,t.Wm)(s)])),_:1}),L]),(0,t._)("li",null,[(0,t.Wm)(r,{style:{color:"#3296fa"},onClick:l[1]||(l[1]=e=>a.addType(2))},{default:(0,t.w5)((()=>[(0,t.Wm)(u)])),_:1}),x]),(0,t._)("li",null,[(0,t.Wm)(r,{style:{color:"#15BC83"},onClick:l[2]||(l[2]=e=>a.addType(4))},{default:(0,t.w5)((()=>[(0,t.Wm)(c)])),_:1}),D])])])])),_:1})])])}var z={props:{modelValue:{type:Object,default:()=>{}}},data(){return{}},mounted(){},methods:{addType(e){var l={};1==e?l={nodeName:"审核人",type:1,setType:1,nodeUserList:[],nodeRoleList:[],examineLevel:1,directorLevel:1,selectMode:1,termAuto:!1,term:0,termMode:1,examineMode:1,directorMode:0,childNode:this.modelValue}:2==e?l={nodeName:"抄送人",type:2,userSelectFlag:!0,nodeUserList:[],childNode:this.modelValue}:4==e&&(l={nodeName:"条件路由",type:4,conditionNodes:[{nodeName:"条件1",type:3,priorityLevel:1,conditionMode:1,conditionList:[]},{nodeName:"条件2",type:3,priorityLevel:2,conditionMode:1,conditionList:[]}],childNode:this.modelValue}),this.$emit("update:modelValue",l)}}},q=o(3744);const M=(0,q.Z)(z,[["render",j]]);var $=M,S={inject:["select"],props:{modelValue:{type:Object,default:()=>{}}},components:{addNode:$},data(){return{nodeConfig:{},drawer:!1,isEditTitle:!1,form:{}}},watch:{modelValue(){this.nodeConfig=this.modelValue}},mounted(){this.nodeConfig=this.modelValue},methods:{show(){this.form={},this.form=JSON.parse(JSON.stringify(this.nodeConfig)),this.drawer=!0},editTitle(){this.isEditTitle=!0,this.$nextTick((()=>{this.$refs.nodeTitle.focus()}))},saveTitle(){this.isEditTitle=!1},save(){this.$emit("update:modelValue",this.form),this.drawer=!1},delNode(){this.$emit("update:modelValue",this.nodeConfig.childNode)},delUser(e){this.form.nodeUserList.splice(e,1)},delRole(e){this.form.nodeRoleList.splice(e,1)},selectHandle(e,l){this.select(e,l)},toText(e){if(1==e.setType){if(e.nodeUserList&&e.nodeUserList.length>0){const l=e.nodeUserList.map((e=>e.name)).join("、");return l}return!1}if(2==e.setType)return 1==e.examineLevel?"直接主管":`发起人的第${e.examineLevel}级主管`;if(3==e.setType){if(e.nodeRoleList&&e.nodeRoleList.length>0){const l=e.nodeRoleList.map((e=>e.name)).join("、");return"角色-"+l}return!1}return 4==e.setType?"发起人自选":5==e.setType?"发起人自己":7==e.setType?"连续多级主管":void 0}}};const O=(0,q.Z)(S,[["render",b]]);var R=O;const E={class:"node-wrap"},H={class:"title",style:{background:"#576a95"}},K={class:"content"},P={class:"node-wrap-drawer__title"},I={class:"tags-list"};function J(e,l,o,d,i,a){const n=(0,t.up)("el-icon-user-filled"),s=(0,t.up)("el-icon"),r=(0,t.up)("add-node"),u=(0,t.up)("el-icon-edit"),m=(0,t.up)("el-input"),f=(0,t.up)("el-button"),h=(0,t.up)("el-tag"),w=(0,t.up)("el-form-item"),g=(0,t.up)("el-alert"),k=(0,t.up)("el-form"),_=(0,t.up)("el-main"),y=(0,t.up)("el-footer"),C=(0,t.up)("el-container"),V=(0,t.up)("el-drawer");return(0,t.wg)(),(0,t.iD)("div",E,[(0,t._)("div",{class:"node-wrap-box start-node",onClick:l[0]||(l[0]=(...e)=>a.show&&a.show(...e))},[(0,t._)("div",H,[(0,t.Wm)(s,{class:"icon"},{default:(0,t.w5)((()=>[(0,t.Wm)(n)])),_:1}),(0,t._)("span",null,(0,c.zw)(i.nodeConfig.nodeName),1)]),(0,t._)("div",K,[(0,t._)("span",null,(0,c.zw)(a.toText(i.nodeConfig)),1)])]),(0,t.Wm)(r,{modelValue:i.nodeConfig.childNode,"onUpdate:modelValue":l[1]||(l[1]=e=>i.nodeConfig.childNode=e)},null,8,["modelValue"]),(0,t.Wm)(V,{title:"发起人",modelValue:i.drawer,"onUpdate:modelValue":l[6]||(l[6]=e=>i.drawer=e),"destroy-on-close":"","append-to-body":"",size:500},{header:(0,t.w5)((()=>[(0,t._)("div",P,[i.isEditTitle?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("label",{key:0,onClick:l[2]||(l[2]=(...e)=>a.editTitle&&a.editTitle(...e))},[(0,t.Uk)((0,c.zw)(i.form.nodeName),1),(0,t.Wm)(s,{class:"node-wrap-drawer__title-edit"},{default:(0,t.w5)((()=>[(0,t.Wm)(u)])),_:1})])),i.isEditTitle?((0,t.wg)(),(0,t.j4)(m,{key:1,ref:"nodeTitle",modelValue:i.form.nodeName,"onUpdate:modelValue":l[3]||(l[3]=e=>i.form.nodeName=e),clearable:"",onBlur:a.saveTitle,onKeyup:(0,p.D2)(a.saveTitle,["enter"])},null,8,["modelValue","onBlur","onKeyup"])):(0,t.kq)("",!0)])])),default:(0,t.w5)((()=>[(0,t.Wm)(C,null,{default:(0,t.w5)((()=>[(0,t.Wm)(_,{style:{padding:"0 20px 20px 20px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{"label-position":"top"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{label:"谁可以发起此审批"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{type:"primary",icon:"el-icon-plus",round:"",onClick:l[4]||(l[4]=e=>a.selectHandle(2,i.form.nodeRoleList))},{default:(0,t.w5)((()=>[(0,t.Uk)("选择角色")])),_:1}),(0,t._)("div",I,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.form.nodeRoleList,((e,l)=>((0,t.wg)(),(0,t.j4)(h,{key:e.id,type:"info",closable:"",onClose:e=>a.delRole(l)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.name),1)])),_:2},1032,["onClose"])))),128))])])),_:1}),0==i.form.nodeRoleList.length?((0,t.wg)(),(0,t.j4)(g,{key:0,title:"不指定则默认所有人都可发起此审批",type:"info",closable:!1})):(0,t.kq)("",!0)])),_:1})])),_:1}),(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f,{type:"primary",onClick:a.save},{default:(0,t.w5)((()=>[(0,t.Uk)("保存")])),_:1},8,["onClick"]),(0,t.Wm)(f,{onClick:l[5]||(l[5]=e=>i.drawer=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("取消")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var Z={inject:["select"],props:{modelValue:{type:Object,default:()=>{}}},components:{addNode:$},data(){return{nodeConfig:{},drawer:!1,isEditTitle:!1,form:{}}},watch:{modelValue(){this.nodeConfig=this.modelValue}},mounted(){this.nodeConfig=this.modelValue},methods:{show(){this.form={},this.form=JSON.parse(JSON.stringify(this.nodeConfig)),this.isEditTitle=!1,this.drawer=!0},editTitle(){this.isEditTitle=!0,this.$nextTick((()=>{this.$refs.nodeTitle.focus()}))},saveTitle(){this.isEditTitle=!1},selectHandle(e,l){this.select(e,l)},delRole(e){this.form.nodeRoleList.splice(e,1)},save(){this.$emit("update:modelValue",this.form),this.drawer=!1},toText(e){return e.nodeRoleList&&e.nodeRoleList.length>0?e.nodeRoleList.map((e=>e.name)).join("、"):"所有人"}}};const B=(0,q.Z)(Z,[["render",J]]);var G=B;const Y={class:"branch-wrap"},A={class:"branch-box-wrap"},F={class:"branch-box"},Q={class:"condition-node"},X={class:"condition-node-box"},ee=["onClick"],le=["onClick"],oe={class:"title"},te={class:"node-title"},de={class:"priority-title"},ie={class:"content"},ae={key:0},ne={key:1,class:"placeholder"},se=["onClick"],re={key:1,class:"top-left-cover-line"},ue={key:2,class:"bottom-left-cover-line"},ce={key:3,class:"top-right-cover-line"},pe={key:4,class:"bottom-right-cover-line"},me={class:"node-wrap-drawer__title"};function fe(e,l,o,d,i,a){const n=(0,t.up)("el-button"),s=(0,t.up)("el-icon-arrow-left"),r=(0,t.up)("el-icon"),u=(0,t.up)("el-icon-close"),m=(0,t.up)("el-icon-arrow-right"),f=(0,t.up)("add-node"),h=(0,t.up)("el-icon-edit"),w=(0,t.up)("el-input"),g=(0,t.up)("el-radio"),k=(0,t.up)("el-radio-group"),_=(0,t.up)("el-form-item"),y=(0,t.up)("el-divider"),C=(0,t.up)("el-table-column"),V=(0,t.up)("el-option"),v=(0,t.up)("el-select"),W=(0,t.up)("el-link"),b=(0,t.up)("el-table"),U=(0,t.up)("el-form"),N=(0,t.up)("el-main"),T=(0,t.up)("el-footer"),L=(0,t.up)("el-container"),x=(0,t.up)("el-drawer");return(0,t.wg)(),(0,t.iD)("div",Y,[(0,t._)("div",A,[(0,t._)("div",F,[(0,t.Wm)(n,{class:"add-branch",type:"success",plain:"",round:"",onClick:a.addTerm},{default:(0,t.w5)((()=>[(0,t.Uk)("添加条件")])),_:1},8,["onClick"]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.nodeConfig.conditionNodes,((l,o)=>((0,t.wg)(),(0,t.iD)("div",{class:"col-box",key:o},[(0,t._)("div",Q,[(0,t._)("div",X,[(0,t._)("div",{class:"auto-judge",onClick:e=>a.show(o)},[0!=o?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"sort-left",onClick:(0,p.iM)((e=>a.arrTransfer(o,-1)),["stop"])},[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s)])),_:1})],8,le)):(0,t.kq)("",!0),(0,t._)("div",oe,[(0,t._)("span",te,(0,c.zw)(l.nodeName),1),(0,t._)("span",de,"优先级"+(0,c.zw)(l.priorityLevel),1),(0,t.Wm)(r,{class:"close",onClick:(0,p.iM)((e=>a.delTerm(o)),["stop"])},{default:(0,t.w5)((()=>[(0,t.Wm)(u)])),_:2},1032,["onClick"])]),(0,t._)("div",ie,[a.toText(i.nodeConfig,o)?((0,t.wg)(),(0,t.iD)("span",ae,(0,c.zw)(a.toText(i.nodeConfig,o)),1)):((0,t.wg)(),(0,t.iD)("span",ne,"请设置条件"))]),o!=i.nodeConfig.conditionNodes.length-1?((0,t.wg)(),(0,t.iD)("div",{key:1,class:"sort-right",onClick:(0,p.iM)((e=>a.arrTransfer(o)),["stop"])},[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m)])),_:1})],8,se)):(0,t.kq)("",!0)],8,ee),(0,t.Wm)(f,{modelValue:l.childNode,"onUpdate:modelValue":e=>l.childNode=e},null,8,["modelValue","onUpdate:modelValue"])])]),l.childNode?(0,t.WI)(e.$slots,"default",{key:0,node:l}):(0,t.kq)("",!0),0==o?((0,t.wg)(),(0,t.iD)("div",re)):(0,t.kq)("",!0),0==o?((0,t.wg)(),(0,t.iD)("div",ue)):(0,t.kq)("",!0),o==i.nodeConfig.conditionNodes.length-1?((0,t.wg)(),(0,t.iD)("div",ce)):(0,t.kq)("",!0),o==i.nodeConfig.conditionNodes.length-1?((0,t.wg)(),(0,t.iD)("div",pe)):(0,t.kq)("",!0)])))),128))]),(0,t.Wm)(f,{modelValue:i.nodeConfig.childNode,"onUpdate:modelValue":l[0]||(l[0]=e=>i.nodeConfig.childNode=e)},null,8,["modelValue"])]),(0,t.Wm)(x,{title:"条件设置",modelValue:i.drawer,"onUpdate:modelValue":l[5]||(l[5]=e=>i.drawer=e),"destroy-on-close":"","append-to-body":"",size:600},{header:(0,t.w5)((()=>[(0,t._)("div",me,[i.isEditTitle?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("label",{key:0,onClick:l[1]||(l[1]=(...e)=>a.editTitle&&a.editTitle(...e))},[(0,t.Uk)((0,c.zw)(i.form.nodeName),1),(0,t.Wm)(r,{class:"node-wrap-drawer__title-edit"},{default:(0,t.w5)((()=>[(0,t.Wm)(h)])),_:1})])),i.isEditTitle?((0,t.wg)(),(0,t.j4)(w,{key:1,ref:"nodeTitle",modelValue:i.form.nodeName,"onUpdate:modelValue":l[2]||(l[2]=e=>i.form.nodeName=e),clearable:"",onBlur:a.saveTitle,onKeyup:(0,p.D2)(a.saveTitle,["enter"])},null,8,["modelValue","onBlur","onKeyup"])):(0,t.kq)("",!0)])])),default:(0,t.w5)((()=>[(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Wm)(N,{style:{padding:"0 20px 20px 20px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{"label-position":"top"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{label:"条件关系"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{modelValue:i.form.conditionMode,"onUpdate:modelValue":l[3]||(l[3]=e=>i.form.conditionMode=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{label:1},{default:(0,t.w5)((()=>[(0,t.Uk)("且")])),_:1}),(0,t.Wm)(g,{label:2},{default:(0,t.w5)((()=>[(0,t.Uk)("或")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(y),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{data:i.form.conditionList},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{prop:"label",label:"描述"},{default:(0,t.w5)((e=>[(0,t.Wm)(w,{modelValue:e.row.label,"onUpdate:modelValue":l=>e.row.label=l,placeholder:"描述"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,t.Wm)(C,{prop:"field",label:"条件字段",width:"130"},{default:(0,t.w5)((e=>[(0,t.Wm)(w,{modelValue:e.row.field,"onUpdate:modelValue":l=>e.row.field=l,placeholder:"条件字段"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,t.Wm)(C,{prop:"operator",label:"运算符",width:"130"},{default:(0,t.w5)((e=>[(0,t.Wm)(v,{modelValue:e.row.operator,"onUpdate:modelValue":l=>e.row.operator=l,placeholder:"Select"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{label:"等于",value:"="}),(0,t.Wm)(V,{label:"不等于",value:"!="}),(0,t.Wm)(V,{label:"大于",value:">"}),(0,t.Wm)(V,{label:"大于等于",value:">="}),(0,t.Wm)(V,{label:"小于",value:"<"}),(0,t.Wm)(V,{label:"小于等于",value:"<="}),(0,t.Wm)(V,{label:"包含",value:"include"}),(0,t.Wm)(V,{label:"不包含",value:"notinclude"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),(0,t.Wm)(C,{prop:"value",label:"值",width:"100"},{default:(0,t.w5)((e=>[(0,t.Wm)(w,{modelValue:e.row.value,"onUpdate:modelValue":l=>e.row.value=l,placeholder:"值"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,t.Wm)(C,{prop:"value",label:"移除",width:"55"},{default:(0,t.w5)((e=>[(0,t.Wm)(W,{type:"danger",underline:!1,onClick:l=>a.deleteConditionList(e.$index)},{default:(0,t.w5)((()=>[(0,t.Uk)("移除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])),_:1}),(0,t._)("p",null,[(0,t.Wm)(n,{type:"primary",icon:"el-icon-plus",round:"",onClick:a.addConditionList},{default:(0,t.w5)((()=>[(0,t.Uk)("增加条件")])),_:1},8,["onClick"])])])),_:1})])),_:1}),(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n,{type:"primary",onClick:a.save},{default:(0,t.w5)((()=>[(0,t.Uk)("保存")])),_:1},8,["onClick"]),(0,t.Wm)(n,{onClick:l[4]||(l[4]=e=>i.drawer=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("取消")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}o(7658);var he={props:{modelValue:{type:Object,default:()=>{}}},components:{addNode:$},data(){return{nodeConfig:{},drawer:!1,isEditTitle:!1,index:0,form:{}}},watch:{modelValue(){this.nodeConfig=this.modelValue}},mounted(){this.nodeConfig=this.modelValue},methods:{show(e){this.index=e,this.form={},this.form=JSON.parse(JSON.stringify(this.nodeConfig.conditionNodes[e])),this.drawer=!0},editTitle(){this.isEditTitle=!0,this.$nextTick((()=>{this.$refs.nodeTitle.focus()}))},saveTitle(){this.isEditTitle=!1},save(){this.nodeConfig.conditionNodes[this.index]=this.form,this.$emit("update:modelValue",this.nodeConfig),this.drawer=!1},addTerm(){let e=this.nodeConfig.conditionNodes.length+1;this.nodeConfig.conditionNodes.push({nodeName:"条件"+e,type:3,priorityLevel:e,conditionMode:1,conditionList:[]})},delTerm(e){this.nodeConfig.conditionNodes.splice(e,1),1==this.nodeConfig.conditionNodes.length&&(this.nodeConfig.childNode&&(this.nodeConfig.conditionNodes[0].childNode?this.reData(this.nodeConfig.conditionNodes[0].childNode,this.nodeConfig.childNode):this.nodeConfig.conditionNodes[0].childNode=this.nodeConfig.childNode),this.$emit("update:modelValue",this.nodeConfig.conditionNodes[0].childNode))},reData(e,l){e.childNode?this.reData(e.childNode,l):e.childNode=l},arrTransfer(e,l=1){this.nodeConfig.conditionNodes[e]=this.nodeConfig.conditionNodes.splice(e+l,1,this.nodeConfig.conditionNodes[e])[0],this.nodeConfig.conditionNodes.map(((e,l)=>{e.priorityLevel=l+1})),this.$emit("update:modelValue",this.nodeConfig)},addConditionList(){this.form.conditionList.push({label:"",field:"",operator:"=",value:""})},deleteConditionList(e){this.form.conditionList.splice(e,1)},toText(e,l){var{conditionList:o}=e.conditionNodes[l];if(o&&1==o.length){const e=o.map((e=>`${e.label}${e.operator}${e.value}`)).join(" 和 ");return e}if(o&&o.length>1){const t=1==e.conditionNodes[l].conditionMode?"且行":"或行";return o.length+"个条件，"+t}return l==e.conditionNodes.length-1&&"其他条件进入此流程"}}};const we=(0,q.Z)(he,[["render",fe]]);var ge=we;const ke={class:"node-wrap"},_e={class:"title",style:{background:"#3296fa"}},ye={class:"content"},Ce={key:0},Ve={key:1,class:"placeholder"},ve={class:"node-wrap-drawer__title"},We={class:"tags-list"};function be(e,l,o,d,i,a){const n=(0,t.up)("el-icon-promotion"),s=(0,t.up)("el-icon"),r=(0,t.up)("el-icon-close"),u=(0,t.up)("add-node"),m=(0,t.up)("el-icon-edit"),f=(0,t.up)("el-input"),h=(0,t.up)("el-button"),w=(0,t.up)("el-tag"),g=(0,t.up)("el-form-item"),k=(0,t.up)("el-checkbox"),_=(0,t.up)("el-form"),y=(0,t.up)("el-main"),C=(0,t.up)("el-footer"),V=(0,t.up)("el-container"),v=(0,t.up)("el-drawer");return(0,t.wg)(),(0,t.iD)("div",ke,[(0,t._)("div",{class:"node-wrap-box",onClick:l[1]||(l[1]=(...e)=>a.show&&a.show(...e))},[(0,t._)("div",_e,[(0,t.Wm)(s,{class:"icon"},{default:(0,t.w5)((()=>[(0,t.Wm)(n)])),_:1}),(0,t._)("span",null,(0,c.zw)(i.nodeConfig.nodeName),1),(0,t.Wm)(s,{class:"close",onClick:l[0]||(l[0]=(0,p.iM)((e=>a.delNode()),["stop"]))},{default:(0,t.w5)((()=>[(0,t.Wm)(r)])),_:1})]),(0,t._)("div",ye,[a.toText(i.nodeConfig)?((0,t.wg)(),(0,t.iD)("span",Ce,(0,c.zw)(a.toText(i.nodeConfig)),1)):((0,t.wg)(),(0,t.iD)("span",Ve,"请选择人员"))])]),(0,t.Wm)(u,{modelValue:i.nodeConfig.childNode,"onUpdate:modelValue":l[2]||(l[2]=e=>i.nodeConfig.childNode=e)},null,8,["modelValue"]),(0,t.Wm)(v,{title:"抄送人设置",modelValue:i.drawer,"onUpdate:modelValue":l[8]||(l[8]=e=>i.drawer=e),"destroy-on-close":"","append-to-body":"",size:500},{header:(0,t.w5)((()=>[(0,t._)("div",ve,[i.isEditTitle?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("label",{key:0,onClick:l[3]||(l[3]=(...e)=>a.editTitle&&a.editTitle(...e))},[(0,t.Uk)((0,c.zw)(i.form.nodeName),1),(0,t.Wm)(s,{class:"node-wrap-drawer__title-edit"},{default:(0,t.w5)((()=>[(0,t.Wm)(m)])),_:1})])),i.isEditTitle?((0,t.wg)(),(0,t.j4)(f,{key:1,ref:"nodeTitle",modelValue:i.form.nodeName,"onUpdate:modelValue":l[4]||(l[4]=e=>i.form.nodeName=e),clearable:"",onBlur:a.saveTitle,onKeyup:(0,p.D2)(a.saveTitle,["enter"])},null,8,["modelValue","onBlur","onKeyup"])):(0,t.kq)("",!0)])])),default:(0,t.w5)((()=>[(0,t.Wm)(V,null,{default:(0,t.w5)((()=>[(0,t.Wm)(y,{style:{padding:"0 20px 20px 20px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{"label-position":"top"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{label:"选择要抄送的人员"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{type:"primary",icon:"el-icon-plus",round:"",onClick:l[5]||(l[5]=e=>a.selectHandle(1,i.form.nodeUserList))},{default:(0,t.w5)((()=>[(0,t.Uk)("选择人员")])),_:1}),(0,t._)("div",We,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.form.nodeUserList,((e,l)=>((0,t.wg)(),(0,t.j4)(w,{key:e.id,closable:"",onClose:e=>a.delUser(l)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.name),1)])),_:2},1032,["onClose"])))),128))])])),_:1}),(0,t.Wm)(g,{label:""},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{modelValue:i.form.userSelectFlag,"onUpdate:modelValue":l[6]||(l[6]=e=>i.form.userSelectFlag=e),label:"允许发起人自选抄送人"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,t.Wm)(C,null,{default:(0,t.w5)((()=>[(0,t.Wm)(h,{type:"primary",onClick:a.save},{default:(0,t.w5)((()=>[(0,t.Uk)("保存")])),_:1},8,["onClick"]),(0,t.Wm)(h,{onClick:l[7]||(l[7]=e=>i.drawer=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("取消")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var Ue={inject:["select"],props:{modelValue:{type:Object,default:()=>{}}},components:{addNode:$},data(){return{nodeConfig:{},drawer:!1,isEditTitle:!1,form:{}}},watch:{modelValue(){this.nodeConfig=this.modelValue}},mounted(){this.nodeConfig=this.modelValue},methods:{show(){this.form={},this.form=JSON.parse(JSON.stringify(this.nodeConfig)),this.drawer=!0},editTitle(){this.isEditTitle=!0,this.$nextTick((()=>{this.$refs.nodeTitle.focus()}))},saveTitle(){this.isEditTitle=!1},save(){this.$emit("update:modelValue",this.form),this.drawer=!1},delNode(){this.$emit("update:modelValue",this.nodeConfig.childNode)},delUser(e){this.form.nodeUserList.splice(e,1)},selectHandle(e,l){this.select(e,l)},toText(e){if(e.nodeUserList&&e.nodeUserList.length>0){const l=e.nodeUserList.map((e=>e.name)).join("、");return l}return!!e.userSelectFlag&&"发起人自选"}}};const Ne=(0,q.Z)(Ue,[["render",be]]);var Te=Ne,Le={props:{modelValue:{type:Object,default:()=>{}}},components:{approver:R,promoter:G,branch:ge,send:Te},data(){return{nodeConfig:{}}},watch:{modelValue(e){this.nodeConfig=e},nodeConfig(e){this.$emit("update:modelValue",e)}},mounted(){this.nodeConfig=this.modelValue},methods:{}};const xe=(0,q.Z)(Le,[["render",u]]);var De=xe;const je={key:0,class:"sc-user-select"},ze={class:"sc-user-select__left"},qe={class:"sc-user-select__search"},Me={class:"sc-user-select__select"},$e={class:"sc-user-select__tree"},Se={class:"sc-user-select__user"},Oe={class:"sc-user-select__user__list"},Re={class:"sc-user-select__toicon"},Ee={class:"sc-user-select__selected"},He={class:"name"},Ke={class:"delete"},Pe={key:1,class:"sc-user-select sc-user-select-role"},Ie={class:"sc-user-select__left"},Je={class:"sc-user-select__select"},Ze={class:"sc-user-select__tree"},Be={class:"sc-user-select__toicon"},Ge={class:"sc-user-select__selected"},Ye={class:"name"},Ae={class:"delete"};function Fe(e,l,o,d,i,a){const n=(0,t.up)("el-button"),s=(0,t.up)("el-input"),r=(0,t.up)("el-tree"),u=(0,t.up)("el-scrollbar"),p=(0,t.up)("el-pagination"),m=(0,t.up)("el-icon-arrow-right"),f=(0,t.up)("el-icon"),h=(0,t.up)("el-avatar"),w=(0,t.up)("el-dialog"),g=(0,t.Q2)("loading");return(0,t.wg)(),(0,t.j4)(w,{modelValue:i.dialogVisible,"onUpdate:modelValue":l[3]||(l[3]=e=>i.dialogVisible=e),title:i.titleMap[i.type-1],width:1==i.type?680:460,"destroy-on-close":"","append-to-body":"",onClosed:l[4]||(l[4]=l=>e.$emit("closed"))},{footer:(0,t.w5)((()=>[(0,t.Wm)(n,{onClick:l[2]||(l[2]=e=>i.dialogVisible=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("取 消")])),_:1}),(0,t.Wm)(n,{type:"primary",onClick:a.save},{default:(0,t.w5)((()=>[(0,t.Uk)("确 认")])),_:1},8,["onClick"])])),default:(0,t.w5)((()=>[1==i.type?((0,t.wg)(),(0,t.iD)("div",je,[(0,t._)("div",ze,[(0,t._)("div",qe,[(0,t.Wm)(s,{modelValue:i.keyword,"onUpdate:modelValue":l[0]||(l[0]=e=>i.keyword=e),"prefix-icon":"el-icon-search",placeholder:"搜索成员"},{append:(0,t.w5)((()=>[(0,t.Wm)(n,{icon:"el-icon-search",onClick:a.search},null,8,["onClick"])])),_:1},8,["modelValue"])]),(0,t._)("div",Me,[(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",$e,[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"menu",ref:"groupTree",data:i.group,"node-key":i.groupProps.key,props:i.groupProps,"highlight-current":"","expand-on-click-node":!1,"current-node-key":i.groupId,onNodeClick:a.groupClick},null,8,["data","node-key","props","current-node-key","onNodeClick"])])),_:1})])),[[g,i.showGrouploading]]),(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",Se,[(0,t._)("div",Oe,[(0,t.Wm)(u,{ref:"userScrollbar"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"menu",ref:"userTree",data:i.user,"node-key":i.userProps.key,props:i.userProps,"default-checked-keys":a.selectedIds,"show-checkbox":"","check-on-click-node":"",onCheckChange:a.userClick},null,8,["data","node-key","props","default-checked-keys","onCheckChange"])])),_:1},512)]),(0,t._)("footer",null,[(0,t.Wm)(p,{background:"",layout:"prev,next",small:"",total:i.total,"page-size":i.pageSize,currentPage:i.currentPage,"onUpdate:currentPage":l[1]||(l[1]=e=>i.currentPage=e),onCurrentChange:a.paginationChange},null,8,["total","page-size","currentPage","onCurrentChange"])])])),[[g,i.showUserloading]])])]),(0,t._)("div",Re,[(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m)])),_:1})]),(0,t._)("div",Ee,[(0,t._)("header",null,"已选 ("+(0,c.zw)(i.selected.length)+")",1),(0,t._)("ul",null,[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.selected,((e,l)=>((0,t.wg)(),(0,t.iD)("li",{key:e.id},[(0,t._)("span",He,[(0,t.Wm)(h,{size:"small"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.name.substring(0,1)),1)])),_:2},1024),(0,t._)("label",null,(0,c.zw)(e.name),1)]),(0,t._)("span",Ke,[(0,t.Wm)(n,{type:"danger",icon:"el-icon-delete",circle:"",size:"small",onClick:e=>a.deleteSelected(l)},null,8,["onClick"])])])))),128))])),_:1})])])])):(0,t.kq)("",!0),2==i.type?((0,t.wg)(),(0,t.iD)("div",Pe,[(0,t._)("div",Ie,[(0,t._)("div",Je,[(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",Ze,[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"menu",ref:"groupTree",data:i.role,"node-key":i.roleProps.key,props:i.roleProps,"show-checkbox":"","check-strictly":"","check-on-click-node":"","expand-on-click-node":!1,"default-checked-keys":a.selectedIds,onCheckChange:a.roleClick},null,8,["data","node-key","props","default-checked-keys","onCheckChange"])])),_:1})])),[[g,i.showGrouploading]])])]),(0,t._)("div",Be,[(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m)])),_:1})]),(0,t._)("div",Ge,[(0,t._)("header",null,"已选 ("+(0,c.zw)(i.selected.length)+")",1),(0,t._)("ul",null,[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.selected,((e,l)=>((0,t.wg)(),(0,t.iD)("li",{key:e.id},[(0,t._)("span",Ye,[(0,t._)("label",null,(0,c.zw)(e.name),1)]),(0,t._)("span",Ae,[(0,t.Wm)(n,{type:"danger",icon:"el-icon-delete",circle:"",size:"small",onClick:e=>a.deleteSelected(l)},null,8,["onClick"])])])))),128))])),_:1})])])])):(0,t.kq)("",!0)])),_:1},8,["modelValue","title","width"])}var Qe=o(7877),Xe={successCode:200,group:{apiObj:Qe.Z.system.dept.list,parseData:function(e){return{rows:e.data,msg:e.message,code:e.code}},props:{key:"id",label:"label",children:"children"}},user:{apiObj:Qe.Z.demo.page,pageSize:20,parseData:function(e){return{rows:e.data.rows,total:e.data.total,msg:e.message,code:e.code}},props:{key:"id",label:"user"},request:{page:"page",pageSize:"pageSize",groupId:"groupId",keyword:"keyword"}},role:{apiObj:Qe.Z.system.dept.list,parseData:function(e){return{rows:e.data,msg:e.message,code:e.code}},props:{key:"id",label:"label",children:"children"}}},el={props:{modelValue:{type:Boolean,default:!1}},data(){return{groupProps:Xe.group.props,userProps:Xe.user.props,roleProps:Xe.role.props,titleMap:["人员选择","角色选择"],dialogVisible:!1,showGrouploading:!1,showUserloading:!1,keyword:"",groupId:"",pageSize:Xe.user.pageSize,total:0,currentPage:1,group:[],user:[],role:[],type:1,selected:[],value:[]}},computed:{selectedIds(){return this.selected.map((e=>e.id))}},mounted(){},methods:{open(e,l){this.type=e,this.value=l||[],this.selected=JSON.parse(JSON.stringify(l||[])),this.dialogVisible=!0,1==this.type?(this.getGroup(),this.getUser()):2==this.type&&this.getRole()},async getGroup(){this.showGrouploading=!0;var e=await Xe.group.apiObj.get();this.showGrouploading=!1;var l={[Xe.group.props.key]:"",[Xe.group.props.label]:"所有"};e.data.unshift(l),this.group=Xe.group.parseData(e).rows},async getUser(){this.showUserloading=!0;var e={[Xe.user.request.keyword]:this.keyword||null,[Xe.user.request.groupId]:this.groupId||null,[Xe.user.request.page]:this.currentPage,[Xe.user.request.pageSize]:this.pageSize},l=await Xe.user.apiObj.get(e);this.showUserloading=!1,this.user=Xe.user.parseData(l).rows,this.total=Xe.user.parseData(l).total||0,this.$refs.userScrollbar.setScrollTop(0)},async getRole(){this.showGrouploading=!0;var e=await Xe.role.apiObj.get();this.showGrouploading=!1,this.role=Xe.role.parseData(e).rows},groupClick(e){this.keyword="",this.currentPage=1,this.groupId=e[Xe.group.props.key],this.getUser()},userClick(e,l){l?this.selected.push({id:e[Xe.user.props.key],name:e[Xe.user.props.label]}):this.selected=this.selected.filter((l=>l.id!=e[Xe.user.props.key]))},paginationChange(){this.getUser()},search(){this.groupId="",this.$refs.groupTree.setCurrentKey(this.groupId),this.currentPage=1,this.getUser()},deleteSelected(e){this.selected.splice(e,1),1==this.type?this.$refs.userTree.setCheckedKeys(this.selectedIds):2==this.type&&this.$refs.groupTree.setCheckedKeys(this.selectedIds)},roleClick(e,l){l?this.selected.push({id:e[Xe.role.props.key],name:e[Xe.role.props.label]}):this.selected=this.selected.filter((l=>l.id!=e[Xe.role.props.key]))},save(){this.value.splice(0,this.value.length),this.selected.map((e=>{this.value.push(e)})),this.dialogVisible=!1}}};const ll=(0,q.Z)(el,[["render",Fe],["__scopeId","data-v-e3061d58"]]);var ol=ll,tl={provide(){return{select:this.selectHandle}},props:{modelValue:{type:Object,default:()=>{}}},components:{nodeWrap:De,useSelect:ol},data(){return{nodeConfig:this.modelValue,selectVisible:!1}},watch:{modelValue(e){this.nodeConfig=e},nodeConfig(e){this.$emit("update:modelValue",e)}},mounted(){},methods:{selectHandle(e,l){this.selectVisible=!0,this.$nextTick((()=>{this.$refs.useselect.open(e,l)}))}}};const dl=(0,q.Z)(tl,[["render",r]]);var il=dl,al={name:"workflow",components:{scWorkflow:il},data(){return{data:{id:1,name:"请假审批",nodeConfig:{nodeName:"发起人",type:0,nodeRoleList:[],childNode:{nodeName:"条件路由",type:4,conditionNodes:[{nodeName:"长期",type:3,priorityLevel:1,conditionMode:1,conditionList:[{label:"请假天数",field:"day",operator:">",value:"7"}],childNode:{nodeName:"领导审批",type:1,setType:1,nodeUserList:[{id:"360000197302144442",name:"何敏"}],nodeRoleList:[],examineLevel:1,directorLevel:1,selectMode:1,termAuto:!1,term:0,termMode:1,examineMode:1,directorMode:0}},{nodeName:"短期",type:3,priorityLevel:2,conditionMode:1,conditionList:[],childNode:{nodeName:"直接主管审批",type:1,setType:2,nodeUserList:[],nodeRoleList:[],examineLevel:1,directorLevel:1,selectMode:1,termAuto:!1,term:0,termMode:1,examineMode:1,directorMode:0}}],childNode:{nodeName:"抄送人",type:2,userSelectFlag:!0,nodeUserList:[{id:"220000200908305857",name:"何秀英"}]}}}}}},mounted(){},methods:{exportJson(){this.$message("返回值请查看F12控制台console.log()"),console.log(this.data)}}};const nl=(0,q.Z)(al,[["render",i]]);var sl=nl}}]);