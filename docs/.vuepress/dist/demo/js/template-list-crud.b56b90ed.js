"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[5381],{40224:function(e,l,t){t.r(l),t.d(l,{default:function(){return g}});var a=t(66252);const i={class:"left-panel"},s=(0,a.Uk)("页面新增"),n=(0,a.Uk)("查看"),o=(0,a.Uk)("编辑"),d=(0,a.Uk)("页面编辑"),r=(0,a.Uk)("删除");function c(e,l,t,c,u,p){const m=(0,a.up)("el-button"),h=(0,a.up)("el-header"),f=(0,a.up)("el-table-column"),g=(0,a.up)("sc-status-indicator"),w=(0,a.up)("el-popconfirm"),b=(0,a.up)("scTable"),k=(0,a.up)("el-main"),_=(0,a.up)("el-container"),y=(0,a.up)("save-dialog"),C=(0,a.up)("info"),v=(0,a.up)("el-drawer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.Wm)(m,{type:"primary",icon:"el-icon-plus",onClick:p.add},null,8,["onClick"]),(0,a.Wm)(m,{type:"primary",icon:"el-icon-plus",onClick:p.addPage},{default:(0,a.w5)((()=>[s])),_:1},8,["onClick"]),(0,a.Wm)(m,{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==u.selection.length,onClick:p.batch_del},null,8,["disabled","onClick"])])])),_:1}),(0,a.Wm)(k,{class:"nopadding"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{ref:"table",apiObj:u.list.apiObj,"row-key":"id",onSelectionChange:p.selectionChange,stripe:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{type:"selection",width:"50"}),(0,a.Wm)(f,{label:"姓名",prop:"name",width:"180"}),(0,a.Wm)(f,{label:"性别",prop:"sex",width:"150"}),(0,a.Wm)(f,{label:"邮箱",prop:"email",width:"250"}),(0,a.Wm)(f,{label:"状态",prop:"boolean",width:"60"},{default:(0,a.w5)((e=>[e.row.boolean?((0,a.wg)(),(0,a.j4)(g,{key:0,type:"success"})):(0,a.kq)("",!0),e.row.boolean?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(g,{key:1,pulse:"",type:"danger"}))])),_:1}),(0,a.Wm)(f,{label:"评分",prop:"num",width:"150"}),(0,a.Wm)(f,{label:"操作",fixed:"right",align:"right",width:"300"},{default:(0,a.w5)((e=>[(0,a.Wm)(m,{plain:"",size:"small",onClick:l=>p.table_show(e.row)},{default:(0,a.w5)((()=>[n])),_:2},1032,["onClick"]),(0,a.Wm)(m,{type:"primary",plain:"",size:"small",onClick:l=>p.table_edit(e.row)},{default:(0,a.w5)((()=>[o])),_:2},1032,["onClick"]),(0,a.Wm)(m,{type:"primary",plain:"",size:"small",onClick:l=>p.table_edit_page(e.row)},{default:(0,a.w5)((()=>[d])),_:2},1032,["onClick"]),(0,a.Wm)(w,{title:"确定删除吗？",onConfirm:l=>p.table_del(e.row,e.$index)},{reference:(0,a.w5)((()=>[(0,a.Wm)(m,{plain:"",type:"danger",size:"small"},{default:(0,a.w5)((()=>[r])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["apiObj","onSelectionChange"])])),_:1})])),_:1}),u.dialog.save?((0,a.wg)(),(0,a.j4)(y,{key:0,ref:"saveDialog",onSuccess:p.handleSaveSuccess,onClosed:l[0]||(l[0]=e=>u.dialog.save=!1)},null,8,["onSuccess"])):(0,a.kq)("",!0),(0,a.Wm)(v,{modelValue:u.dialog.info,"onUpdate:modelValue":l[1]||(l[1]=e=>u.dialog.info=e),size:800,title:"详细","custom-class":"drawerBG",direction:"rtl","destroy-on-close":""},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{ref:"infoDialog"},null,512)])),_:1},8,["modelValue"])],64)}var u=t(37722),p=t(6839),m={name:"listCrud",components:{saveDialog:u["default"],info:p["default"]},data(){return{dialog:{save:!1,info:!1},list:{apiObj:this.$API.demo.list},selection:[]}},mounted(){},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},table_edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},addPage(){this.$router.push({path:"/template/list/crud/detail"})},table_edit_page(e){this.$router.push({path:"/template/list/crud/detail",query:{id:e.id}})},table_show(e){this.dialog.info=!0,this.$nextTick((()=>{this.$refs.infoDialog.setData(e)}))},async table_del(e,l){var t={id:e.id},a=await this.$API.demo.post.post(t);200==a.code?(this.$refs.table.removeIndex(l),this.$message.success("删除成功")):this.$alert(a.message,"提示",{type:"error"})},async batch_del(){var e=await this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning",confirmButtonText:"删除",confirmButtonClass:"el-button--danger"}).catch((()=>{}));if(!e)return!1;var l=this.selection.map((e=>e.id));this.$refs.table.removeKeys(l),this.$message.success("操作成功")},selectionChange(e){this.selection=e},handleSaveSuccess(e,l){"add"==l?this.$refs.table.unshiftRow(e):"edit"==l&&this.$refs.table.updateKey(e)}}},h=t(83744);const f=(0,h.Z)(m,[["render",c]]);var g=f}}]);