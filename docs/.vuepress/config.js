module.exports = {
	title: 'SCUI',
	base: "/scui-doc/",
	description: '一套简单的中后台前端解决方案',
	port: 2801,
	themeConfig: {
		nav: [{
			text: "指南",
			link: "/guide/",
		},{
			text: "组件",
			link: "/vab/",
		},{
			text: "演示地址",
			link: "https://lolicode.gitee.io/scui-doc/demo",
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
						// ['/guide/1', '代码风格指南'],
						// ['/guide/2', '引入外部模块'],
						// ['/guide/3', '开发第一个组件'],
						// ['/guide/4', '错误处理'],
					]
				},
			],
			'/vab/': [
				{
					title: '组件',
					collapsable: false,
					children: [
						['/vab/echarts', 'Echarts']
					]
				},
			]
		}
	},
};
