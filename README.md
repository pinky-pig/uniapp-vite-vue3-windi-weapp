<div align="center">
	<img src="https://user-images.githubusercontent.com/42307398/168749434-a28133fd-63d4-4892-ae23-9371fccce2f5.svg"/>
	<h1>Bo Admin</h1>
</div>

## 简介🐱‍🚀

Bo Admin  基于Vue3、Vite、Typescript、UniApp、WindiCSS、微信小程序的个人开发模板。

## 使用🚑
* 克隆代码

```bash
https://github.com/pinky-pig/uniapp-vite-vue3-windi-weapp.git
```

* 安装依赖

```bash
npm i
```


* 启动开发环境

```bash
npm run dev:mp-weixin
```

* 配合微信开发工具食用


> 1.上面命令生成dist文件夹，在dist/dev文件夹下的`project.config.json`添加`"miniprogramRoot": "./mp-weixin"`。否则报错`app.json: app.json 未找到`.
>
> 2.将dev文件夹拖到微信开发者工具中启动。

## 代码规范🚗

* 代码缩进
  * 2个空格 1个tab
  * 提交代码前注意检查代码缩进 (js & css), 避免提交缩进混乱的代码
* vue 组件命名: 使用 PascalCase 命名法 (组件文件名也遵循该规则), 比如 Foo.vue/FooBar.vue
* 文件夹，统一使用小写命名:`user/index.vue`，或者`-`相连: `user-info/index.vue`
* vue 组件的样式部分, 统一使用 css modules 的写法: `<style lang="postcss" module>`, 同时使用 `$style.className` 的方式引用样式类名, 避免出现 `<style> ... </style>` 这样的样式代码, 会有样式污染/冲突的风险

## 目录结构🛴
* */src* : 源码
* */src/hooks* : 自定义hook
* */src/libs* : 引入的 js 依赖包
* */src/mock* : 自定义的 mock 数据
* */src/pages* : 业务代码
  * */src/pages/index* : 首页
  * */src/pages/map* : 地图
  * */src/pages/my* : 个人中心
* */src/setup* : 项目配置
  * */src/setup/iconfont* : 阿里图标库引入
  * */src/setup/windi-css* : WindiCSS引入
* */src/static* : 静态资源, 图片/字体 等
* */src/store* : pinia相关
* */src/typings* : ts类型相关
* */src/wxcomponents* : 微信小程序组件UI库引用
* */src/pages.json* : uniapp配置项，tab-bar和页面注册相关
* */tsconfig* : ts配置
* */vite.config.ts* : vite配置
* */windi.config.ts* : WindiCSS配置