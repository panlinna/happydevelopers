# 任务1说明

### 运行步骤

1. 到T001目录下，执行 `npm install`  #这里只用了一个 `webpack` 的包
2. 命令行中，执行 `npm run build`,会在目录下生成 build 文件夹。
3. 打开 index.html

### 技术说明

这里主要是简单配置 webpack 的入口及出口文件，然后打包我们的代码到 build 目录下。

```
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};
```
