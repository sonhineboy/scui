# tool 工具集
将常用的工具都放在 ```@/utils/tool.js``` 并挂载在VUE对象中 使用this.$TOOL调用工具，当开发时可以自行增加自定义的工具

### data
封装的localStorage增删改查

### screen
封装的整体或者局部全屏

### objCopy
简单的对象深拷贝

### dateFormat
封装的日期格式化

### groupSeparator
将数字转换成千分符数字

### crypto
将CryptoJS封装，现支持常用的前端加解密：MD5、BASE64、AES