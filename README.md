# taro-dva-demo

[![Build With Taro](https://img.shields.io/badge/build%20with-Taro-028fe4.svg?style=flat-square)](https://github.com/NervJS/taro/)
[![Build With dva](https://img.shields.io/badge/build%20with-dva-028fe4.svg?style=flat-square)](https://dvajs.com/)

一个基于 React + Taro + Dva构建的适配不同端（微信/百度/支付宝小程序、H5、React-Native 等）的小程序DEMO


## 特性

#### Taro特性

* **React 语法风格**，Taro 的语法规则基于 React 规范，它采用与 React 一致的组件化思想，组件生命周期与 React 保持一致，同时在书写体验上也尽量与 React 类似，支持使用 JSX 语法，让代码具有更丰富的表现力。

#### Dva 特性
* **易学易用**，仅有 6 个 api，对 redux 用户尤其友好，**[配合 umi 使用](https://umijs.org/guide/with-dva.html)后更是降低为 0 API**
* **elm 概念**，通过 reducers, effects 和 subscriptions 组织 model
* **插件机制**，比如 [dva-loading](https://github.com/dvajs/dva/tree/master/packages/dva-loading) 可以自动处理 loading 状态，不用一遍遍地写 showLoading 和 hideLoading
* **支持 HMR**，基于 [babel-plugin-dva-hmr](https://github.com/dvajs/babel-plugin-dva-hmr) 实现 components、routes 和 models 的 HMR


## 使用

```

git clone https://github.com/hqwlkj/taro-dva-demo.git my-weapp

cd my-weapp

# 全局安装taro脚手架
  
  使用 npm 安装 CLI
  $ npm install -g @tarojs/cli
  
  OR 使用 yarn 安装 CLI
  $ yarn global add @tarojs/cli
  
  OR 安装了 cnpm，使用 cnpm 安装 CLI
  $ cnpm install -g @tarojs/cli

# 安装项目依赖
  使用 yarn 安装依赖
  $ yarn
  
  OR 使用 cnpm 安装依赖
  $ cnpm install
  
  OR 使用 npm 安装依赖
  $ npm install

# 微信小程序
  
  yarn
  $ yarn dev:weapp
  $ yarn build:weapp
  
  npm script
  $ npm run dev:weapp
  $ npm run build:weapp
  
  仅限全局安装
  $ taro build --type weapp --watch
  $ taro build --type weapp
  
  npx 用户也可以使用
  $ npx taro build --type weapp --watch
  $ npx taro build --type weapp

```
更多使用方式请参考[Taro 官方使用说明](http://taro-docs.jd.com/taro/docs/GETTING-STARTED.html)

## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我一起共建 :smiley:：

- 通过 [Issue](https://github.com/hqwlkj/taro-dva-demo/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](https://github.com/hqwlkj/taro-dva-demo/pulls) 改进代码。
