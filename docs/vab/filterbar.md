# scFilterBar 过滤器
SCUI 独创的过滤条Filterbar,可配置不同类型的过滤字段,以及异步获取数据,操作上方过滤条查看下方change事件的回调,在表格查询的场景下非常合适

[演示地址](https://lolicode.gitee.io/scui-doc/demo/#/vab/filterbar)
> 演示地址需模拟登录高权限角色后查看

## Props
|参数			|说明			|类型	|可选值	|默认值	|
|--				|--				|--		|--		|--		|
|options		|过滤器字段配置	|Object	|-		|-		|
|defaultFilter	|默认过滤		|Object	|-		|-		|

### options
|参数	|说明			|类型	|可选值						|默认值	|
|--		|--				|--		|--							|--		|
|label	|字段显示名称		|String	|-							|-		|
|value	|字段值			|String	|-							|-		|
|type	|组件类型		|String	|text,select,date,daterange	|-		|
|extend	|扩展			|Object	|-							|-		|

### options.extend
|参数		|说明							|类型		|可选值	|默认值	|
|--			|--								|--			|--		|--		|
|multiple	|是否多选						|String		|-		|-		|
|data		|选项							|Array		|-		|-		|
|request	|异步请求，需要return[Array]		|Function	|-		|-		|
|remote		|是否远程搜索						|Boolean	|-		|-		|

### options.extend.data
|参数	|说明		|类型	|可选值	|默认值	|
|--		|--			|--		|--		|--		|
|label	|显示名称	|String	|-		|-		|
|value	|值			|String	|-		|-		|

## Event
|事件名称	|说明				|回调参数	|
|--			|--					|--			|
|change		|当过滤器数据变更时	|data		|