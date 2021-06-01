# 布局&样式
SCUI提供2套布局方案，分别是默认的分栏布局和头部导航布局，均可在配置中设置。

## 布局
在 ```config/index.js``` 中可配置LAYOUT，就可以配置不同的布局，LAYOUT提供2个配置项（default，header），分别对应默认的分栏布局和头部导航布局满足不同的视觉需求。

默认布局

<img :src="$withBase('/demo1.jpg')">

头部导航布局

<img :src="$withBase('/demo2.jpg')">

## 样式
采用less动态样式语言，还是那句话：约定大于配置。我们约定有个样式总入口，然后@import不同的类型。这样做在联合开发中有极大的便利。
``` sh
┌── style				# 全局样式
│	├── style.less		# 总入口
│	├── app.less		# 框架样式
│	├── fix.less		# 第三方样式库的FIX文件
│	├── pages.less		# 页面样式
│	└── ***.less		# 其他自定义
```