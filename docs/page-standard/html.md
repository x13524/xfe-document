---
title: HTML规范

---

# HTML规范
## HTML标签
  1. 标签必须合法且闭合、嵌套正确，标签名需小写
  2. 标签语法无错误，需要符合语义化
  3. 标签的自定义属性以`data-`开头，如：`<a href="#" data-num='18'></a>`
  4. 除非有特定的功能、组件要求等，禁止随意使用id来定义元素样式
## 链接
  1. 给 `<a>` 标签加上title属性
  2. `<a>`标签的`href`属性必须写上链接地址，暂无的加上`javascript:alert('敬请期待！')`
  3. 非本专题的页面间跳转，采用打开新窗口模式：`target="_blank"`
## https协议自适应
将调用静态域名的外部请求，写法上一律去掉协议http:部分，采用自适应的写法。具体方法如下：
```html
<style>
//CSS背景图片 
.bg{background: url(//game.gtimg.cn/images/cf/cp/a20161021sqjs/hd.jpg) no-repeat;}
</style>
//链接URL
<a href="//cf.qq.com/main.shtml">进入官网</a>
//图片SRC
<img src="//game.gtimg.cn/images/cf/web201610/logo.png">
//JS链接
<script src="//ossweb-img.qq.com/images/js/title.js"></script>
```
## flash
:::warning
页面禁止使用flash，动画使用video、CSS3、canvas等方式实现，低版本浏览器使用背景图片降级。
:::
