---
title: user-select
---

# user-select

`user-select` 属性用于控制用户是否可以选择文本以及选择的方式，这个属性理解比较简单，下面先看一下属性值有哪些

### user-select 属性值

- auto (**默认值**)

    `auto` 是 `user-select` 属性的默认值，当设置为`auto`时，用户选择文本时在不同的元素上有不同的策略：
    1. 无法选中`::before` 和 `::after` 中的文本
    2. 如果该元素是可编辑元素（包含设置`contenteditable=true`属性的元素），选择的文本范围受限于元素边界，无法同时选中内部和外部文本
    3. 如果该元素的父元素设置：`user-select: all` 或 `user-select: none`, 则该元素会“继承”父元素的行为。
    4. 如果该元素的父元素没有任何该属性的设置，同时该元素不可编辑也不是伪元素，`auto`的表现行为和`text`一致
- none

    顾名思义，设置为`none`时，用户无法选中该元素内的文本。
- text

    允许用户选择文本，就是我们最常规的选择文本行为。
- all

    当设置为`all`时，该元素内部所有的文本都会被选中，即使你只是选中了该元素子孙节点中任意文本。
- contain (**不支持**)

    目前为止所有的浏览器都不支持该属性值，无法测试实际效果，因此不做介绍。

### 接下来用几个例子深入了解每个属性值的表现行为

有如下 html fragment,

<code>
    <div>直接子元素文本
        <section>子元素section中的文本
            <span>二级子元素span中的文本</span>
        </section>
    </div>
</code>

节点树如下

```html

div
    文本: 直接子元素文本
    section
            文本: 子元素section中的文本
            span
                文本: 二级子元素span中的文本

```

#### 当给div元素设置 `user-select: none` 时，div 内及其所有子孙元素的内容均无法选中，效果如下。

<code>
    <div style="user-select: none">直接子元素文本
        <section>子元素section中的文本
            <span>二级子元素span中的文本</span>
        </section>
    </div>
</code>


#### 当给section元素设置 `user-select: none` 时，section 内及其所有子孙元素的内容均无法选中，但其父元素是可以被选中的，效果如下。

<code>
    <div>直接子元素文本
        <section style="user-select: none">子元素section中的文本
            <span>二级子元素span中的文本</span>
        </section>
    </div>
</code>

#### 所有文本无法选择
<template>
234454321
</template>

### 兼容性

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__user-select-1696853109479.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__user-select-1696853109479.png">
<img src="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__user-select-1696853109479.jpg" alt="Data on support for the mdn-css__properties__user-select feature across the major browsers from caniuse.com">
</picture>

