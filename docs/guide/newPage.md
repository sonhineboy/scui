# 第一个页面
文档看到中应该对SCUI有了一定的了解，接一去我们动动手，开始编写我们的第一个页面。

## 1.建立路由表
在系统路由或 服务端返回的路由表中建立一个新的路由
``` javascript
{
	name: "newPage",
	path: "/newPage",
	meta: {
		title: "新的页面"
	},
	component: () => import(/* webpackChunkName: "newPage" */ '@/views/newPage'),
	//component: "newPage"
	//服务端返回的时候直接写VUE存在的地址即可，转换函数会自动转换上以上的结构，
}
```

## 2.建立API
在API管理中建立获取数据的接口地址
``` javascript
// @api/index.js

userInfo: {
	url: `${config.MOCK_URL}/userInfo`,
	name: "获取当前用户信息",
	get: async function(){
		return await http.get(this.url);
	}
}
```
## 3.建立视图
在 @views 中新建文件夹newPage，在newPage里新建VUE文件 index.vue
``` html
<!-- views/newPage/index.vue -->

<template>
	<h2>{{ userId }}</h2>
	<h3>{{ userName }}</h3>
</template>

<script>
	export default {
		name: 'newPage',
		data() {
			return {
				userId: "",
				userName: ""
			}
		},
		mounted() {
			this.getInfo()
		},
		methods: {
			async getInfo(){
				var userInfo = await this.$API.user.userInfo.get();
				this.userId = res.data.userId;
				this.userName = res.data.userName;
			}
		}
	}
</script>
```
