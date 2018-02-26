<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [开放平台-移动端-独立新页面](#%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0-%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E7%8B%AC%E7%AB%8B%E6%96%B0%E9%A1%B5%E9%9D%A2)
    - [1 兼容性要求](#1-%E5%85%BC%E5%AE%B9%E6%80%A7%E8%A6%81%E6%B1%82)
    - [2 技术依赖](#2-%E6%8A%80%E6%9C%AF%E4%BE%9D%E8%B5%96)
    - [3 开发、测试、线上环境](#3-%E5%BC%80%E5%8F%91%E6%B5%8B%E8%AF%95%E7%BA%BF%E4%B8%8A%E7%8E%AF%E5%A2%83)
        - [3.1 本地开发调试](#31-%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E8%B0%83%E8%AF%95)
        - [3.2 测试环境](#32-%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83)
    - [4 目录结构](#4-%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
    - [5 开发指南](#5-%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97)
        - [5.1 组件和页面的开发](#51-%E7%BB%84%E4%BB%B6%E5%92%8C%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%BC%80%E5%8F%91)
        - [5.2 特定开发情景](#52-%E7%89%B9%E5%AE%9A%E5%BC%80%E5%8F%91%E6%83%85%E6%99%AF)
    - [6 构建，部署，上线](#6-%E6%9E%84%E5%BB%BA%E9%83%A8%E7%BD%B2%E4%B8%8A%E7%BA%BF)
    - [附录](#%E9%99%84%E5%BD%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
- axios             |     请求库
- underscore        |     js库
- babel-polyfill    |     trident内核浏览器（IE8...） or Android4.3 以下版本不支持promise
```

## 3 开发、测试、线上环境

先说明不同环境下项目网站访问地址。

- 开发环境：默认访问地址为`http://127.0.0.1:2333`。可在`config/mutil-page-config.js`文件中设置`url`和`port`。
- 测试环境：默认访问地址为`http://m.jingjiren.focus-test.cn/broker/activity/score/#/index`。运行`node publish/publish.js dev`可将前端代码copy到`wap-broker`项目中，`dev`为后端代码库分支，可根据需要copy到其他分支。

- 线上环境： 访问地址为`http://m.jingjiren.focus.cn/broker/activity/score/#/index`

### 3.1 本地开发调试

阐述本地开发调试环境的搭建和配置，如Node.js版本要求，测试、代理服务器，host切换，等等。

- `Node > 6.0.0 ` `Npm > 3.0.0`
- 需要`cookie`时：
    - 方法一：配置host为`xx.focus-[test/dev]{\d}.cn`，再在`u.focus-[test/dev]{\d}.cn`环境下登录
    - 方法二：无需配置host。在`u.focus-[test/dev]{\d}.cn`环境下登录后，拷贝名为`ppinf`、`pprdig`的两个cookie手动`setCookie`到当前环境
- 可在`config/mutil-page-config.js`文件中设置`url`和`port`。
- 新增页面时，配置页面`pageMap`，然后手动`npm run build`，以便生成本地可访问地址。在`node publish/publish.js dev`之前先在`publish/publish.js`文件中修改`pageMap`新增一项页面配置
- 新增接口时，配置本地接口代理`proxyTable`
- 编写接口时，建议将每个接口的wiki地址放到注释中，方便后期维护
- 编写样式时：
    - 若为嵌入到APP的页面，请使用px作为单位（APP端没有做适配，与其保持一致）；
    ```css
    /* app内禁止用户复制 */
    body {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    ```
    - 若为wap页，使用rem作为单位（适配不同机型）

### 3.2 测试环境

阐明测试地址，测试数据如何查看，等等。

## 4 目录结构

阐述项目的目录结构，因为不同目录的代码有不同的角色和职责。


``` bash
.
├── build/                                  # webpack 配置文件
│   └── ...
├── config/
│   ├── mutil-page-config.js                # 本地开发时 设置域名、端口、接口代理、新增页面配置
│   └── ...
├── publish/
│   └──publish.js                           # 发布脚本（将前端资源copy到后端代码库）
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
├── add-page.js                             # 新增页面脚本
```


## 5 开发指南

### 5.1 组件和页面的开发

阐述组件、页面的从0到1的常规开发过程，再比如组件间的引用和嵌套，一个页面如何组合多个组件，等等。

新增页面步骤：
- 首先在 page 目录下参考 `myScore` 目录 新建一个 目录 （ 注意：html 文件和 js 文件必须和目录同名）
  - 可在js文件中 挂载 和 注册 本单页所需的组件
  - 本单页下若还有其他页面 ，可在 router 目录下 `router.js` 中设置路由（需在myScore下新建router目录再建`router.js`）
- 其次在 components 中 新建 当前页 可复用的组件
- 再在 根目录 `config -> mutil-page-config.js` 中 修改 `host` 和 `port`，设置域名、端口、接口代理、新增页面配置

**todo: 脚本生成新页面、mock数据**

### 5.2 特定开发情景

列举一些特定的开发情景，如模块通信，发送和处理请求，某第三方库的使用，与某公共模块的通信和交互，等等。

## 6 构建，部署，上线

阐述项目的构建、发布甚至上线流程。

构建，包括主要的构建对象和步骤，每个命令做了什么事情。

发布，包括发布的前提条件、执行过程等，如果是Jenkins自动化任务就说明任务的在线地址。

上线，说明上线的操作过程。

- 构建：`npm run dev`即可开始本地开发调试
- 发布测试环境：
    - `node publish/publish.js dev`
    - 若dev被占用，先去 http://rscode.ops.focus.cn/project/232/ 新建Feature分支，然后`node publish/publish.js feature-dev-1`可到对应feature分支
- 上线：
    - 前提： 由于后端接口放在 http://code.ops.focus.cn/system/broker 系统仓库，需 http://rscode.ops.focus.cn/project/178/ 先行上线。再进行下面步骤。
    - 需测试在`rscode`系统中点 **通过测试** ，然后 **生成work镜像** ，线上回测完毕后，点击 **合并代码**
- **注： 遵循分支开发-->分支上线-->上线后将branch代码merge到master 的开发流程。**

## 附录

列举其他相关的、需要参考的网址，如system仓库地址、jenkins任务地址、rscode项目地址，如后端接口wiki，公共模块，第三方库的文档，等等。

- vue https://cn.vuejs.org/v2/guide/
- vue-router https://router.vuejs.org/zh-cn/
- vuex https://vuex.vuejs.org/zh-cn/mutations.html
- vue-awesome-swiper https://github.com/surmon-china/vue-awesome-swiper
- axios https://github.com/axios/axios
- system仓库  http://code.ops.focus.cn/system/wap-broker
- rscode  http://rscode.ops.focus.cn/project/232/
- 后端wiki  http://wiki.ops.focus.cn/pages/viewpage.action?pageId=9514105
