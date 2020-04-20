---
title: 页面头部
---

# 页面头部
本章将介绍页面的`<head>`标签含有的内容。包含页面的基本信息、SEO优化、双端页面跳转等。
## DOCTYPE 设置
文档类型统一使用html5的doctype：
```html
<!DOCTYPE html>
```
## 页面编码
编码默认使用UTF-8
```html
<meta charset="UTF-8">
```
# TDK
::: warning
请修改为对应项目的内容，禁止直接复制使用
:::

## 页面标题(Title)
需求方提供的页面标题
```html
<title>《剑网3》官网——次世代国风MMORPG</title>
```
## 页面关键字(Keywords)
Keywords为产品名、专题名、专题相关名词，之间用英文半角逗号隔开
```html
<meta name="apple-mobile-web-app-title" content="《剑网3》官网——次世代国风MMORPG"><meta name="keywords" content="新剑网3,剑侠情缘3,剑网3,剑侠3,剑3,攻略,纯武侠网游,经脉加点,资料库,新手指南,凌雪阁,天策,万花,七秀,纯阳,少林,藏剑,五毒,游戏心得,下载,客户端,更新包,官网,剑网3官网,金山
">
```
## 页面描述(Description)
不超过150个字符，描述内容要和页面内容相关。
```html
<meta name="description" content="《剑网3》年度资料片“凌雪藏锋”11月28日震撼公测，全新优化流畅体验！全新门派凌雪阁登场，战乱地图蔷薇列岛开放，炸裂主线剧情，海量内容更新！">
```
## 页面Meta
## 页面跳转
如为双端页面，需要自动判断跳转，PC访问移动端页面，跳转到对应的PC专题上，反之亦然。
PC端添加：
```javascript
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = "移动端端专题地址"+location.search;
}
```
移动端添加：
```javascript
if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = "PC端专题地址"+location.search;
}
```
