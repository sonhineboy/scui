(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{371:function(t,e,a){"use strict";a.r(e);var r=a(44),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),a("p",[t._v("路由是整套系统中最重要的存在，和系统左侧导航、页面标题甚至页面缓存都存在一定的关系。而我们的SCUI将这两者同步，大大减少了前端工作人员对左侧菜单的布局。")]),t._v(" "),a("h2",{attrs:{id:"系统路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统路由"}},[t._v("#")]),t._v(" 系统路由")]),t._v(" "),a("p",[t._v("当某些页面与业务脱节，而且百年不变的页面，比如登录,404,500等的页面可作为系统路由固定在路由表。"),a("a",{attrs:{href:"https://gitee.com/lolicode/scui/blob/master/src/router/systemRouter.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关代码"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"动态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[t._v("#")]),t._v(" 动态路由")]),t._v(" "),a("p",[t._v("SCUI 使用动态路由。将复杂的路由表编写转换为可人工前台增删改的操作。获取路由的步骤如下：")]),t._v(" "),a("ol",[a("li",[t._v("用户登录获取路由MAP存在localStorage "),a("a",{attrs:{href:"https://gitee.com/lolicode/scui/blob/master/src/views/login.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关代码"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("监听路由，当不存在路由时，"),a("strong",[t._v("一次性")]),t._v("加载localStorage，转换成路由对象push到路由表 "),a("a",{attrs:{href:"https://gitee.com/lolicode/scui/blob/master/src/router/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关代码"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"静态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态路由"}},[t._v("#")]),t._v(" 静态路由")]),t._v(" "),a("p",[t._v("并非所有的项目都需要精细化权限的动态路由，只需要以角色区分的路由菜单，或者直接固定的路由。")]),t._v(" "),a("p",[t._v("书写格式与动态路由格式一致，比较动态路由在meta中多加入了role角色权限，为数组类型。一个菜单是否有权限显示，取决于它以及后代菜单是否有权限。如果又配置了静态路由，又启用了动态路由，系统会将静态路由插入动态路由之前。")]),t._v(" "),a("p",[t._v("相关配置在 "),a("code",[t._v("@\\config\\route.js")])]),t._v(" "),a("h2",{attrs:{id:"路由对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由对象"}},[t._v("#")]),t._v(" 路由对象")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"router-name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/router-url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tmeta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ticon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"el-icon-eleme-filled"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\ttitle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"路由名称"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcomponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("key")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("*name")]),t._v(" "),a("td",[t._v("路由的标识，必填且与页面组件的name一致，否则 "),a("code",[t._v("<keep-alive>")]),t._v(" 页面缓存效果失效。")])]),t._v(" "),a("tr",[a("td",[t._v("*path")]),t._v(" "),a("td",[t._v("路由在游览器地址栏里的hash值，也就是说这个路由要用什么URL地址来访问。")])]),t._v(" "),a("tr",[a("td",[t._v("component")]),t._v(" "),a("td",[t._v("加载的页面组件位置，系统将自动组装成 "),a("code",[t._v("() => import(/* webpackChunkName: \"home\" */ '@/views/home')")]),t._v(" 的形式。")])]),t._v(" "),a("tr",[a("td",[t._v("children")]),t._v(" "),a("td",[t._v("子集路由。")])]),t._v(" "),a("tr",[a("td",[t._v("redirect")]),t._v(" "),a("td",[t._v("重定向地址。")])]),t._v(" "),a("tr",[a("td",[t._v("*meta")]),t._v(" "),a("td",[t._v("元数据，见下方。")])])])]),t._v(" "),a("h3",{attrs:{id:"meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("key")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("*title")]),t._v(" "),a("td",[t._v("显示名称。展示在菜单，标签和面包屑等中")])]),t._v(" "),a("tr",[a("td",[t._v("hidden")]),t._v(" "),a("td",[t._v("是否隐藏菜单，大部分用在无需显示在左侧菜单中的页面，比如详情页")])]),t._v(" "),a("tr",[a("td",[t._v("affix")]),t._v(" "),a("td",[t._v("是否固定，类似首页控制台在标签中是没有关闭按钮的")])]),t._v(" "),a("tr",[a("td",[t._v("icon")]),t._v(" "),a("td",[t._v("显示图标，建立2级菜单都设置图标，否则菜单折叠都将显示空白")])]),t._v(" "),a("tr",[a("td",[t._v("*type")]),t._v(" "),a("td",[t._v("类型：菜单，Iframe，外链，按钮")])]),t._v(" "),a("tr",[a("td",[t._v("hiddenBreadcrumb")]),t._v(" "),a("td",[t._v("是否隐藏面包屑")])]),t._v(" "),a("tr",[a("td",[t._v("active")]),t._v(" "),a("td",[t._v("左侧菜单的路由地址活动状态，比如打开详情页需要列表页的菜单活动状态")])]),t._v(" "),a("tr",[a("td",[t._v("color")]),t._v(" "),a("td",[t._v("颜色值")])]),t._v(" "),a("tr",[a("td",[t._v("fullpage")]),t._v(" "),a("td",[t._v("是否整页打开路由（脱离框架系），例如："),a("code",[t._v("fullpage: true")])])]),t._v(" "),a("tr",[a("td",[t._v("role")]),t._v(" "),a("td",[t._v("静态路由时，所能访问路由的角色，例如："),a("code",[t._v('role: ["SA"]')])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);