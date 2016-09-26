
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


## 加载样式 ，文件 admin/index.js
```
require('style!css!./admin.css');//css!变成字符串 style!加载到页面中去

document.getElementById('content').innerText = 'This is admin page!@';
```


![](https://github.com/zxx1988328/webpack_demo_dabao/blob/master/imgs/loader.png)


## 加载背景图片文件


![](https://github.com/zxx1988328/webpack_demo_dabao/blob/master/imgs/file_loader.png)

## 加载icon文件

![](https://github.com/zxx1988328/webpack_demo_dabao/blob/master/imgs/url_loader.png)
