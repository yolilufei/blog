---
description: '@supports 又被称为「feature query」, 当你想使用新的css能力而不确定浏览器是否支持时，用它就对了。'
---

# @supports

## 简介

@supports 可以判断指定的 css 在当前浏览器是否支持，如果支持，浏览器会应用其内部指定的样式代码，如果不支持，则会忽略。

## 如何使用

### 明确指定 css

比如想要使用 flex，但不确定浏览器是否支持，可以这样实现

<!-- {% embed url="https://codepen.io/navigatoropera/pen/eYPdxLR" %} -->
