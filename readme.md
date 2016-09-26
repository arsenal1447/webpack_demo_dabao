
## 打包,根据webpack.config.js 生成dist文件夹和文件
```
webpack --process --color 
```


## run the project
```
npm start
```

## 增加打包功能 文件webpack.config.js增加插件模块UglifyJsPlugin
```
  plugins:[
    new webpack.optimize.UglifyJsPlugin()
  ],
```
命令行执行命令 ,dist/目录下的文件都被被压缩成一行

>webpack

执行结果

![](https://github.com/zxx1988328/webpack_demo_dabao/blob/master/imgs/compress.png)