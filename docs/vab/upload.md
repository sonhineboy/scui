# scUpload 上传
支持单选上传，多选上传，图像预览，不仅仅是图片上传也支持各类文件上传。
- 支持自定义插糟，满足各类视觉需求
- 支持数据双向绑定
- 与表单的验证规则相处融洽

[演示地址](https://lolicode.gitee.io/scui-doc/demo/#/vab/upload)
> 演示地址需模拟登录高权限角色后查看

## Props
|参数		|说明											|类型				|可选值	|默认值					|
|--			|--												|--					|--		|--						|
|v-model	|默认值											|String				|-		|-						|
|apiObj		|上传API对象									|Object				|-		|API.default.upload		|
|width		|宽度											|Number				|-		|120					|
|height		|高度											|Number				|-		|120					|
|title		|提示语											|String				|-		|-						|
|icon		|提示图标										|String				|-		|el-icon-plus			|
|accept		|允许上传的文件后缀								|String				|-		|.jpg, .png, .jpeg, .gif|
|maxSize	|允许上传的文件大小，单位：MB					|Number				|-		|10						|
|onSuccess	|监听上传成功后,函数中return false将阻止默认行为|Function(response)	|-		|-						|

## Slot
|name	|说明					|
|--		|--						|
|-		|自定义未上传前缺省内容	|