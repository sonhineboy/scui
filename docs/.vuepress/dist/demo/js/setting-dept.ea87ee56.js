"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[3775],{88518:function(e,l,a){a.r(l),a.d(l,{default:function(){return g}});var t=a(66252);const s={class:"left-panel"},i={class:"right-panel"},n={class:"right-panel-search"},o=(0,t.Uk)("启用"),r=(0,t.Uk)("停用"),d=(0,t.Uk)("查看"),c=(0,t.Uk)("编辑"),u=(0,t.Uk)("删除");function h(e,l,a,h,p,m){const f=(0,t.up)("el-button"),w=(0,t.up)("el-input"),g=(0,t.up)("el-header"),b=(0,t.up)("el-table-column"),k=(0,t.up)("el-tag"),y=(0,t.up)("el-popconfirm"),_=(0,t.up)("el-button-group"),v=(0,t.up)("scTable"),$=(0,t.up)("el-main"),W=(0,t.up)("el-container"),C=(0,t.up)("save-dialog");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t._)("div",s,[(0,t.Wm)(f,{type:"primary",icon:"el-icon-plus",onClick:m.add},null,8,["onClick"]),(0,t.Wm)(f,{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==p.selection.length,onClick:m.batch_del},null,8,["disabled","onClick"])]),(0,t._)("div",i,[(0,t._)("div",n,[(0,t.Wm)(w,{modelValue:p.search.keyword,"onUpdate:modelValue":l[0]||(l[0]=e=>p.search.keyword=e),placeholder:"部门名称",clearable:""},null,8,["modelValue"]),(0,t.Wm)(f,{type:"primary",icon:"el-icon-search",onClick:m.upsearch},null,8,["onClick"])])])])),_:1}),(0,t.Wm)($,{class:"nopadding"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{ref:"table",apiObj:p.apiObj,"row-key":"id",onSelectionChange:m.selectionChange,hidePagination:""},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{type:"selection",width:"50"}),(0,t.Wm)(b,{label:"部门名称",prop:"label",width:"250"}),(0,t.Wm)(b,{label:"排序",prop:"sort",width:"150"}),(0,t.Wm)(b,{label:"状态",prop:"status",width:"150"},{default:(0,t.w5)((e=>[1==e.row.status?((0,t.wg)(),(0,t.j4)(k,{key:0,type:"success"},{default:(0,t.w5)((()=>[o])),_:1})):(0,t.kq)("",!0),0==e.row.status?((0,t.wg)(),(0,t.j4)(k,{key:1,type:"danger"},{default:(0,t.w5)((()=>[r])),_:1})):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(b,{label:"创建时间",prop:"date",width:"180"}),(0,t.Wm)(b,{label:"备注",prop:"remark","min-width":"300"}),(0,t.Wm)(b,{label:"操作",fixed:"right",align:"right",width:"170"},{default:(0,t.w5)((e=>[(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f,{text:"",type:"primary",size:"small",onClick:l=>m.table_show(e.row,e.$index)},{default:(0,t.w5)((()=>[d])),_:2},1032,["onClick"]),(0,t.Wm)(f,{text:"",type:"primary",size:"small",onClick:l=>m.table_edit(e.row,e.$index)},{default:(0,t.w5)((()=>[c])),_:2},1032,["onClick"]),(0,t.Wm)(y,{title:"确定删除吗？",onConfirm:l=>m.table_del(e.row,e.$index)},{reference:(0,t.w5)((()=>[(0,t.Wm)(f,{text:"",type:"primary",size:"small"},{default:(0,t.w5)((()=>[u])),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["apiObj","onSelectionChange"])])),_:1})])),_:1}),p.dialog.save?((0,t.wg)(),(0,t.j4)(C,{key:0,ref:"saveDialog",onSuccess:m.handleSaveSuccess,onClosed:l[1]||(l[1]=e=>p.dialog.save=!1)},null,8,["onSuccess"])):(0,t.kq)("",!0)],64)}var p=a(3100),m={name:"dept",components:{saveDialog:p["default"]},data(){return{dialog:{save:!1},apiObj:this.$API.system.dept.list,selection:[],search:{keyword:null}}},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},table_edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},table_show(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("show").setData(e)}))},async table_del(e){var l={id:e.id},a=await this.$API.demo.post.post(l);200==a.code?(this.$refs.table.refresh(),this.$message.success("删除成功")):this.$alert(a.message,"提示",{type:"error"})},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？如果删除项中含有子集将会被一并删除`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.$refs.table.refresh(),e.close(),this.$message.success("操作成功")})).catch((()=>{}))},selectionChange(e){this.selection=e},upsearch(){},filterTree(e){var l=null;function a(t){t.forEach((t=>{t.id==e&&(l=t),t.children&&a(t.children)}))}return a(this.$refs.table.tableData),l},handleSaveSuccess(e,l){("add"==l||"edit"==l)&&this.$refs.table.refresh()}}},f=a(83744);const w=(0,f.Z)(m,[["render",h]]);var g=w}}]);