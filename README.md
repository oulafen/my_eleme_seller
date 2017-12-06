# my_eleme_seller

> my_eleme_seller app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

# 搭建基础环境

## 安装
- 安装脚手架
```
npm install vue-cli #已装请忽略
vue init webpack-simple
```

- 安装`vue-router`, `vue-resource`
```
npm install --save vue-router vue-resource
```

- 安装`reset-css`, `postcss-cssnext`
  (前者提供基础css, 后者编译时自动补全兼容写法)
```
npm install --save reset-css postcss-cssnext
```
## 数据准备工作

找的demo页是 [饿了么官网页面-绿茶餐厅](https://h5.ele.me/shop/#geohash=wx4g1cbb3mc8cvh36ghss4&id=2165786&s_type=0)
- 写脚本处理资源, 并下载到本地, 然后放到了七牛云上
- mock数据接口
测试环境基于`web-dev-server`
```
var data = require(path.resolve(__dirname, './resource/data/data.json'));
module.exports.devServer.before = (app) => {
  app.get('/api/store', function (req, res) {
    res.json({err_code: 0, data: data.store});
  });
  app.get('/api/goods', function (req, res) {
    res.json({err_code: 0, data: data.goods});
  });
  app.get('/api/ratings', function (req, res) {
    res.json({err_code: 0, data: data.ratings});
  });
}
```


参考:
[https://www.npmjs.com/package/reset-css](https://www.npmjs.com/package/reset-css)
[https://doc.webpack-china.org/configuration/dev-server/](https://doc.webpack-china.org/configuration/dev-server/)
