"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[2035],{12786:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var i=a(66252);const l={class:"left-panel"},s=(0,i.Uk)("编辑"),n=(0,i.Uk)("删除");function o(e,t,a,o,c,d){const r=(0,i.up)("el-button"),u=(0,i.up)("el-header"),h=(0,i.up)("el-table-column"),p=(0,i.up)("el-popconfirm"),f=(0,i.up)("el-button-group"),m=(0,i.up)("scTable"),b=(0,i.up)("el-main"),g=(0,i.up)("el-container"),w=(0,i.up)("save-dialog");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i.Wm)(r,{type:"primary",icon:"el-icon-plus",onClick:d.add},null,8,["onClick"])])])),_:1}),(0,i.Wm)(b,{class:"nopadding"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{ref:"table",apiObj:c.apiObj,"row-key":"id",onSelectionChange:d.selectionChange,stripe:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{type:"selection",width:"50"}),(0,i.Wm)(h,{label:"标识",prop:"code",width:"150"}),(0,i.Wm)(h,{label:"表格名称",prop:"name",width:"250"}),(0,i.Wm)(h,{label:"操作",fixed:"right",align:"right",width:"120"},{default:(0,i.w5)((e=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,{text:"",type:"primary",size:"small",onClick:t=>d.table_edit(e.row,e.$index)},{default:(0,i.w5)((()=>[s])),_:2},1032,["onClick"]),(0,i.Wm)(p,{title:"确定删除吗？",onConfirm:t=>d.table_del(e.row,e.$index)},{reference:(0,i.w5)((()=>[(0,i.Wm)(r,{text:"",type:"primary",size:"small"},{default:(0,i.w5)((()=>[n])),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["apiObj","onSelectionChange"])])),_:1})])),_:1}),c.dialog.save?((0,i.wg)(),(0,i.j4)(w,{key:0,ref:"saveDialog",onSuccess:d.handleSuccess,onClosed:t[0]||(t[0]=e=>c.dialog.save=!1)},null,8,["onSuccess"])):(0,i.kq)("",!0)],64)}var c=a(42962),d={name:"tableSetting",components:{saveDialog:c["default"]},data(){return{dialog:{save:!1},apiObj:this.$API.system.table.list,selection:[]}},mounted(){},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},table_edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},async table_del(e,t){var a={id:e.id},i=await this.$API.demo.post.post(a);200==i.code?(this.$refs.table.tableData.splice(t,1),this.$message.success("删除成功")):this.$alert(i.message,"提示",{type:"error"})},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.selection.forEach((e=>{this.$refs.table.tableData.forEach(((t,a)=>{e.id===t.id&&this.$refs.table.tableData.splice(a,1)}))})),e.close(),this.$message.success("操作成功")})).catch((()=>{}))},selectionChange(e){this.selection=e},handleSuccess(e,t){"add"==t?(e.id=(new Date).getTime(),this.$refs.table.tableData.unshift(e)):"edit"==t&&this.$refs.table.tableData.filter((t=>t.id===e.id)).forEach((t=>{Object.assign(t,e)}))}}},r=a(83744);const u=(0,r.Z)(d,[["render",o]]);var h=u}}]);