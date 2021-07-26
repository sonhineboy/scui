module.exports = {
	title: 'SCUI',
	base: "/scui-doc/",
	description: '高性能中后台前端解决方案',
	port: 2801,
	themeConfig: {
		logo: '/logo.png',
		nav: [{
			text: "指南",
			link: "/guide/",
		},{
			text: "组件",
			link: "/vab/",
		},{
			text: "演示地址",
			link: "https://lolicode.gitee.io/scui-doc/demo#login",
		},{
			text: "Gitee",
			link: "https://gitee.com/lolicode/scui",
		}],
		sidebarDepth: 1,
		sidebar: {
			'/guide/': [
				{
					title: '基础',
					collapsable: false,
					children: [
						['/guide/', '介绍'],
						['/guide/router', '路由'],
						['/guide/style', '布局样式'],
						['/guide/server', '和服务端进行交互'],
						['/guide/newPage', '第一个页面'],
						['/guide/build', '构建与部署']
					]
				},
				{
					title: '进阶',
					collapsable: false,
					children: [
						['/guide/codestyle', '代码风格指南'],
						['/guide/splitmod', '模块抽离'],
						['/guide/iconfont', '图标'],
						['/guide/global', '全局'],
					]
				},
			],
			'/vab/': [
				{
					title: '组件介绍',
					collapsable: false,
					children: [
						['/vab/', '介绍']
					]
				},
				{
					title: '扩展组件',
					collapsable: false,
					children: [
						['/vab/echarts', 'scEcharts 图表'],
						['/vab/editor', 'scEditor 富文本编辑器'],
						['/vab/filterbar', 'scFilterBar 数据过滤器'],
						['/vab/formTable', 'scFormTable 表格表单'],
						['/vab/table', 'scTable 数据表格'],
						['/vab/tableselect', 'scTableSelect 表格选择器'],
						['/vab/upload', 'scUpload 上传'],
						['/vab/statistic', 'scStatistic 统计数值'],
						['/vab/cropper', 'scCropper 图像剪裁'],
						['/vab/contextmenu', 'scContextmenu 右键菜单']
					]
				},
				{
					title: '内置工具',
					collapsable: false,
					children: [
						['/vab/print', 'print 打印'],
						['/vab/tool', 'tool 工具集']
					]
				},
			]
		}
	},
};
