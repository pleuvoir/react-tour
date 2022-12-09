

## 最简化的react

查看解决代理的问题 yarn npm 切换为淘宝的代理源
https://www.cnblogs.com/foxcharon/p/11809367.html


如果nodejs版本不兼容，查看下面的升级版本
https://www.yisu.com/zixun/617936.html


```shell
yarn add react react-dom react-scripts
```


然后编写代码，可以修改`package.json` 增加以下：

```
 "scripts": {
    "start": "react-scripts start"
  },
```


使用 `yarn start` 启动，相当于别名，否则要使用`yarn react-scripts start` 启动