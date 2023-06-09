---
title: CSS选择器
---

## CSS选择器的种类

- 行内样式。`<h1 style="color: red"></h1>`，严格来说这不属于选择器，只是为了后续优先级计算，这里一并提出。
- `id`选择器。形如`#app`一类的选择器。
- 类、伪类、属性选择器。形如`.box`、`:hover`、`a[attr]`的选择器。
- 标签、伪元素选择器。形如`div`、`::after`的选择器。
- 通配符选择器。`*`。

除了上述选择器外，还存在一些复合选择器，它们由多个选择器通过特定的规则组合而成。常见的有：

- 后代选择器。两个选择器之间以空格连接。`ul li`。
- 子元素选择器。类似后代选择器，但是只能选择父元素的直系子元素`ul > li`。
- 选择器列表。同时启用多个选择器，选择器之间用`,`连接，`div, span`。
- 相邻兄弟选择器。两个元素紧邻且拥有同一个父元素，例如`img + p`会选中紧邻`img`的`p`标签。
- 通用兄弟选择器。类似相邻选择器，但是两个元素不必紧邻。`img ~ p`会选中`img`之后所有的`p`标签，注意是同一个父元素下的。

## CSS选择器的优先级

选择器的优先级可以使用一张表格来表示。

|        选择器        |    权重     |
|:-----------------:|:---------:|
|    !important     |   最高权重    |
|       内联样式        | （1，0，0，0） |
|       id选择器       | （0，1，0，0） |
|类、伪类、属性选择器         | （0，0，1，0） |
|     标签、伪元素选择器     | （0，0，0，1） |
|      通配符等选择器      | （0，0，0，0） |

比较选择器的优先级时，从左往右比较，第一个变成1的选择器的权重最高。如果相同则继续向后比较。若所有位数都相同，按照`CSS`的层叠特性，后定义的选择器样式会覆盖先定义的选择器样式。

如果使用了选择器列表的方式，则将权重叠加作为该复合选择器的权重。**权重叠加时不能进位，意思就是10个标签选择器的权重加起来也没有一个类选择器的权重高**。

