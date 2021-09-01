# 介绍

SCUI 是一个中后台前端解决方案，基于VUE3和elementPlus实现。
使用最新的前端技术栈，提供各类实用的组件方便在业务开发时的调用，并且持续性的提供丰富的业务模板帮助你快速搭建企业级中后台前端任务。
SCUI的宗旨是 让一切复杂的东西傻瓜化。
和本文档一样，一切从简！

## 目录结构
``` sh
┌── public				# 静态资源(不会被Webpack打包)
├── src					# 源代码
│	├── api				# 接口
│	├── assets			# 静态资源(会被打包)
│	├── components		# 组件库
│	├── config			# 配置
│	├── directives		# 自定义指令
│	├── layout			# 框架布局视图
│	├── locales			# 国际化文本
│	├── router			# 路由表
│	├── store			# VUEX状态管理
│	├── style			# 全局样式
│	├── utils			# 全局公用方法
│	├── views			# 所有视图
│	├── App.vue			# 入口视图
│	└── main.js			# 入口文件
├── .editorconfig		# 统一编辑器样式
├── babel.config.js		# postcss 配置
├── package.json		# 包管理
└── vue.config.js		# vue-cli 配置
```

## 安装
``` sh
# 克隆项目
git clone https://gitee.com/lolicode/scui.git

# 进入项目目录
cd scui

# 安装依赖
npm i

# 启动项目(开发模式)
npm run serve
```

启动完成后浏览器访问 http://localhost:2800，接下去可以熟悉一下或者进行业务开发步骤

::: tip 提示
安装依赖和启动需依靠npm、cnpm或者yarn。
:::

### 基础的开发步骤
1. 建立路由表
2. 建立API
3. 建立视图

## 建议
把SCUI克隆后，再拷贝一份当做二次开发基础。因为不要让SCUI更新后替换或修改现有的业务代码。可以把SCUI当做是一个组件代码库。想要用什么就从SCUI中复制过来。

当然如果不考虑更新框架，可直接在SCUI源码上进行二次开发。