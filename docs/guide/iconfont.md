# 图标
本项目虽然使用elementPlus作为UI底层，但它提供的图标很少，而且其中过半使用频率并不高。本项目精挑细选了上百个业务常务图标作为扩展，并且大部分都有线性和实心两种图标，可供大家使用。

使用方式也和elementPlus的图标类似： ```.sc-icon-layout-line``` 。定义```class```就可以啦

很多开发朋友问我为什么不用 ```fontAwesome``` 呢？还是那句话：我不喜欢。最主要的一点是：可能就使用里面几个图标或十几个图标从而加载这么大的字体文件，这违背了SCUI的宗旨。

## 扩展图标
建议使用iconFont，具体如何下载字体包这里不做阐述了。在 ```@/assets/font``` 中新增自己的图标库,记得在 ```@style/style.less``` 中引入。约定目录如下：
``` sh
#@/assets/font

┌── font
│	└── scicon
│	│	├── iconfont.css
│	│	├── iconfont.ttf
│	│	├── iconfont.woff
│	│	├── iconfont.woff2
│	│	└── iconfont.json
│	└── usericon
│		├── iconfont.css
│		├── iconfont.ttf
│		├── iconfont.woff
│		├── iconfont.woff2
│		└── iconfont.json
```

``` sh
#@/style/style.less

@import '~@/assets/font/scicon/iconfont.css'
@import '~@/assets/font/usericon/iconfont.css'
```

## SVG
~~使用iconFont svg模式，从iconfont下载的svg文件放在 @src/assets/icons 目录下，svg-sprite-loader将自动打包成SVG雪碧图。~~

放弃iconFont svg模式。原因很简单，svg-sprite-loader生成的雪碧SVG很大，并且在首页头部就写入了，导致首页加载时间加长。

那有没有异步加载svg的可能呢？有的，直接使用 ```img``` 标签加载```.SVG```就行了。
``` html
<img src="../icon.svg" />
```
::: tip 提示
低版本游览器并不支持img直接读取svg
:::