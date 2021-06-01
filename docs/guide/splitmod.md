# 模块抽离
当项目时间累积，使用第三方模块的数量将会不断增加，从来导致打包后app.js过大，这时候就要抽离一些非常用或者体积过大的模块。

比如本项目中的富文本编辑器和百度echarts。使用频率低，文件还硕大，所以决定将这2着分离出独立的JS文件，自动按需加载使用。

## splitChunks
本项目采用Webpack官方splitChunks分割模块。
``` javascript
//vue.config.js

splitChunks: {
	chunks: "async",
	automaticNameDelimiter: '~',
	name: true,
	cacheGroups: {
		//第三方库抽离
		vendor: {
			name: "modules",
			test: /[\\/]node_modules[\\/]/,
			priority: -10
		},
		tinymce: {
			name: "tinymce",
			test: /[\\/]node_modules[\\/]tinymce[\\/]/
		},
		echarts: {
			name: "echarts",
			test: /[\\/]node_modules[\\/]echarts[\\/]/
		}
	}
}
```
这样配置在打包后生成的文件列表，如下：
``` sh
┌── dist
│	└── js
│	│	├── tinymce.c6a80879.js		# 编辑器所用到的依赖
│	│	├── app.b69faaf9.js
│	│	├── echarts.168c0bd1.js		# 百度echarts用到的依赖
│	│	├── modules.533004cc.js
│	│	└── ***.js
│	└── ***
```

## 分析
在打包完成后，将在 dist 根目录下生成report.html，可以查看各个模块的体积分析，从而决定是否需要抽离。

<img :src="$withBase('/report.jpg')">