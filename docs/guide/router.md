# 路由
路由是整套系统中最重要的存在，她和系统左侧导航有着描述不清的关系。而我们的SCUI将这两者同步，大大减少了前端工作人员对左侧菜单的布局，把这锅甩到的接口方。

## 系统路由
当某些页面与业务脱节，而且百年不变的页面，比如登录,404,500等的页面可作为系统路由“写死"在路由表。[相关代码](https://gitee.com/lolicode/scui/blob/master/src/router/index.js)

## 动态路由
SCUI 使用动态路由。将复杂的路由表编写转换为可人工前台增删改的操作。获取路由的步骤如下：
1. 用户登录获取路由MAP存在localStorage [相关代码](https://gitee.com/lolicode/scui/blob/master/src/views/login.vue)
2. 监听路由，当不存在路由时，**一次性**加载localStorage，转换成路由对象push到路由表 [相关代码](https://gitee.com/lolicode/scui/blob/master/src/router/index.js)

## 路由对象
``` javascript
{
	name: "router-name",
	path: "/router-url",
	meta: {
		title: "路由名称",
		hidden: true,
		affix: true
	},
	component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
}
```
#### name
路由的标识，必填且与页面组件的name一致，否则 ```<keep-alive>``` 页面缓存效果失效。
#### path
路由在游览器地址栏里的hash值，也就是说这个路由要用什么URL地址来访问。
#### meta.title
设置该路由在侧边栏和面包屑中展示的名字
#### meta.hidden
路由是否隐藏，不显示在左侧导航栏中，比如404，编辑或详细页
#### meta.affix
固定标识，设置true后将固定在 ```tags-view``` 中无法关闭，类似控制台首页。
#### component
加载的页面组件位置，一般在views文件夹下。示例用了懒加载路由，当前台用户访问时才会去加载组件，大大减少了带宽请求。