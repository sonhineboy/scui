## 全局对象
本文针对SCUI新增的全局对象解释，原挂载在VUE中的对象，请参阅VUE官网。

#### $CONFIG
映射 ```@/config/index.js``` 系统全局配置

#### $TOOL
映射 ```@/utils/tool.js``` 系统工具集

#### $HTTP
映射 ```@/utils/request.js``` 封装的axios请求库

#### $API
映射 ```@/api/index.js``` 接口表

#### $HAS
映射 ```@/utils/permission.js``` 获取当前用户权限表

## 全局组件
挂载在VUE实例中的全局组件在使用时不需要 ```import``` 和 ```components:{}``` 直接和HTML/VUE原生组件一样使用即可。

本项目更新组件频繁，不在本文档红详细描述，所有组件均在 ```@/components``` 中。