# T002 代码

### 项目运行步骤

- 到 T003 目录下
- npm install  #下载npm包
- npm run build  #启动本地服务器
- 打开 index.html 即可

### 技术说明

这次主要是用 webpack 配合 babel 打包 ES6模块，主要涉及到的知识点为配置 webpack 的 loaders。

```
module: {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader'
    }
  ]
}
```

之后会用webpack打包更多模块，比如css，img等等，配置 loader 的方法一样。
