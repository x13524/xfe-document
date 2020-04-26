---
title: StReport埋点上报
---

# 使用场景
有统计需求的所有项目

## 依赖
```javascript
    <script src="//zhcdn01.xoyo.com/xassets/lib/st-report-sdk/x.x.x/st-report-sdk.js"></script>
```

## 使用方法
一般情况下，让西山居运营平台官网组的同学提供一个写有各种埋点实现方法的js文件，直接在引用st-report-sdk.js之后，引入这个统计js文件即可；
```javascript
    <head>
        <script src="//zhcdn01.xoyo.com/xassets/lib/st-report-sdk/0.2.4/st-report-sdk.min.js"></script>
        <script src="./tracker.js" type="text/javascript"></script>
    </head>
```

具体需要埋点的位置和业务，也让官网组同学一并提供；
