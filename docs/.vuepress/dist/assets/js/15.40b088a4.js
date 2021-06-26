(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{369:function(t,a,s){"use strict";s.r(a);var e=s(44),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),s("p",[t._v("路由是整套系统中最重要的存在，她和系统左侧导航有着描述不清的关系。而我们的SCUI将这两者同步，大大减少了前端工作人员对左侧菜单的布局，把这锅甩到的接口方。")]),t._v(" "),s("h2",{attrs:{id:"系统路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统路由"}},[t._v("#")]),t._v(" 系统路由")]),t._v(" "),s("p",[t._v('当某些页面与业务脱节，而且百年不变的页面，比如登录,404,500等的页面可作为系统路由“写死"在路由表。'),s("a",{attrs:{href:"https://gitee.com/lolicode/scui/blob/master/src/router/systemRouter.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关代码"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"动态路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[t._v("#")]),t._v(" 动态路由")]),t._v(" "),s("p",[t._v("SCUI 使用动态路由。将复杂的路由表编写转换为可人工前台增删改的操作。获取路由的步骤如下：")]),t._v(" "),s("ol",[s("li",[t._v("用户登录获取路由MAP存在localStorage "),s("a",{attrs:{href:"https://gitee.com/lolicode/scui/blob/master/src/views/login.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关代码"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("监听路由，当不存在路由时，"),s("strong",[t._v("一次性")]),t._v("加载localStorage，转换成路由对象push到路由表 "),s("a",{attrs:{href:"https://gitee.com/lolicode/scui/blob/master/src/router/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关代码"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"路由对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由对象"}},[t._v("#")]),t._v(" 路由对象")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"router-name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/router-url"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tmeta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttitle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"路由名称"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\thidden"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\taffix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "home" */')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views/home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("key")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("路由的标识，必填且与页面组件的name一致，否则 "),s("code",[t._v("<keep-alive>")]),t._v(" 页面缓存效果失效。")])]),t._v(" "),s("tr",[s("td",[t._v("path")]),t._v(" "),s("td",[t._v("路由在游览器地址栏里的hash值，也就是说这个路由要用什么URL地址来访问。")])]),t._v(" "),s("tr",[s("td",[t._v("component")]),t._v(" "),s("td",[t._v("加载的页面组件位置，一般在views文件夹下。示例用了懒加载路由，当前台用户访问时才会去加载组件，大大减少了带宽请求。")])]),t._v(" "),s("tr",[s("td",[t._v("redirect")]),t._v(" "),s("td",[t._v("重定向地址。")])]),t._v(" "),s("tr",[s("td",[t._v("meta")]),t._v(" "),s("td",[t._v("元数据，见下方。")])])])]),t._v(" "),s("h3",{attrs:{id:"meta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("key")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("显示中文名称。展示在菜单，标签和面包屑等中")])]),t._v(" "),s("tr",[s("td",[t._v("hidden")]),t._v(" "),s("td",[t._v("是否隐藏菜单，大部分用在无需显示在左侧菜单中的页面，比如详情页")])]),t._v(" "),s("tr",[s("td",[t._v("affix")]),t._v(" "),s("td",[t._v("是否固定，类似首页控制台在标签中是没有关闭按钮的")])]),t._v(" "),s("tr",[s("td",[t._v("icon")]),t._v(" "),s("td",[t._v("显示图标，建立2级菜单都设置图标，否则菜单折叠都将显示空白")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("类型：菜单，Iframe，外链，按钮")])]),t._v(" "),s("tr",[s("td",[t._v("hiddenBreadcrumb")]),t._v(" "),s("td",[t._v("是否隐藏面包屑")])]),t._v(" "),s("tr",[s("td",[t._v("active")]),t._v(" "),s("td",[t._v("高亮左侧菜单的路由地址，比如打开详情页需要高亮列表页的菜单")])]),t._v(" "),s("tr",[s("td",[t._v("color")]),t._v(" "),s("td",[t._v("颜色值")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);