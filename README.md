# {{开放平台-移动端-独立新页面}}

介绍项目的业务背景。

mp（开放平台）在移动端下的独立新页面（活动页、嵌入APP聚合页...）

## 1 兼容性要求

说明项目的浏览器兼容性要求。

移动端

## 2 技术依赖

说明项目依赖的技术，必要的例如：框架（如vue-cli）、打包工具（如webpack）、代码转译（如babel、sass）、第三方库（如jquery、axios）等。还可以适当介绍package.json中主要的devDependency和dependency。

注意区分本地Node.js运行和浏览器端运行，前者是开发工具，后者是前端库。
```
- vue-cli           |     脚手架构建本系统
- px2rem            |     移动端自适配
- axios             |     请求库
- underscore        |     js库
- babel-polyfill    |     trident内核浏览器（IE8...） or Android4.3 以下版本不支持promise
```

## 3 开发、测试、线上环境

先说明不同环境下项目网站访问地址。



### 3.1 本地开发调试

阐述本地开发调试环境的搭建和配置，如Node.js版本要求，测试、代理服务器，host切换，等等。

### 3.2 测试环境

阐明测试地址，测试数据如何查看，等等。

## 4 目录结构

阐述项目的目录结构，因为不同目录的代码有不同的角色和职责。


``` bash
.
├── build/                                  # webpack 配置文件
│   └── ...
├── config/
│   ├── index.js                            # 本地开发时 设置域名、端口
│   └── ...
├── src/
├── ── page/                                # 多页
│   │   ├── ── myScore                      # myScore页
│   │   │   ├── ── router                   
│   │   │   │   └── router.js               # myScore页的router
│   │   │   ├── myScore.js                  # myScore页 主入口js
│   │   │   └── myScore.html                # myScore页 主入口html
│   │   ├── ── myLoupanRank                 # myLoupanRank页
│   │   │   └── ...           
│   │   └── ...           
├── —— components/                          # 组件
│   ├── ── common-header                    # 公用头
│   │   ├── common-header.js               
│   │   ├── common-header.scss               
│   │   └── common-header.vue              
│   └── ...           
├── —— assets/                              # 公用资源
│   ├── ── common-ui                        # 公用CSS+img
│   │   ├── img                             # img
│   │   ├── normalize.scss                  # normalize.scss（global和reset）
│   │   ├── util.scss                       # mixin
│   │   └── ...   
│   ├── ── iconfont                         # iconfont
│   │   └── ...   
│   ├── ── lib                              # js 公用库
│   │   ├── util.js                         # 常用js工具
│   │   ├── responsive.js                   # 实现 rem
│   │   └── ...   
├── —— server/                              # 服务接口层
│   ├── api.js                              # 接口
│   ├── fetch.js                            # 封装 axios
│   └── ...   
├── dist/                                   # build 打包生成
│   ├── myScore.html                        # myScore页
│   └── ...
```


## 5 开发指南

### 5.1 组件和页面的开发

阐述组件、页面的从0到1的常规开发过程，再比如组件间的引用和嵌套，一个页面如何组合多个组件，等等。

新增页面步骤：
- 首先在 page 目录下参考 myScore 目录 新建一个 目录 （ html 文件和 js 文件必须和目录同名）
  - 可在js文件中 挂载 和 注册 本单页所需的组件
  - 本单页下若还有其他页面 ，可在 router 目录下 router.js 中设置路由（需在myScore下新建router目录再建router.js）
- 其次在 components 中 新建 当前页 可复用的组件
- 在 根目录 build  -> webpack.dev.conf.js 中的 historyApiFallback 新增 一条页面访问别名规则
- 在 根目录 config -> index.js 中 修改 host 和 port ，npm run dev 后 输入对应url即可访问
- ** todo: 脚本生成新页面、 build和config目录中抽取变量部分、mock数据 **

### 5.2 特定开发情景

列举一些特定的开发情景，如模块通信，发送和处理请求，某第三方库的使用，与某公共模块的通信和交互，等等。

## 6 构建，部署，上线

阐述项目的构建、发布甚至上线流程。

构建，包括主要的构建对象和步骤，每个命令做了什么事情。

发布，包括发布的前提条件、执行过程等，如果是Jenkins自动化任务就说明任务的在线地址。

上线，说明上线的操作过程。

## 附录

列举其他相关的、需要参考的网址，如system仓库地址、jenkins任务地址、rscode项目地址，如后端接口wiki，公共模块，第三方库的文档，等等。
