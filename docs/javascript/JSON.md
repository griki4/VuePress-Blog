---
title: JSON
---
## 介绍

JSON全称JavaScript Object Notation，是JavaScript的严格子集。但是，我们更应该将JSON理解为一种数据格式而非编程语言，JSON和JavaScript有相同的语法但是JSON并不属于JavaScript。同时，JSON也并非只能在JavaScript中使用，许多编程语言都内置了对于JSON的解析和序列化能力。

目前JSON是主流的数据传输格式，在使用API请求数据时一般获取到的都是JSON，而在更早的阶段则是XML来做这个工作。相比XML，JSON的好处是显而易见的。

1. JSON能够被直接解析为直接可用的JavaScript对象，而XML则需要被解析为DOM文档。
2. JSON更加轻量化。并且现代浏览器都对JSON提供了全局支持。
3. JSON的可读性相比XML要强很多。

## 基本使用

定义JSON的方式基本和在JavaScript中一致。JSON主要支持三种类型的数据。

1. 简单值。包括**字符串，数字，布尔值和null**。
2. 对象。
3. 数组。

**在JSON中定义对象的时候，必须使用双引号包裹key值。** 下面是一个有效的JavaScript对象：

```js
let object = {
 "name": "Nicholas",
 "age" : 29
}; 

```

而如果要将其转换为JSON，则需要进行改造：

```json
{
 "name": "Nicholas",
 "age": 29
} 
```

JSON中没有变量和函数的概念，其次，属性名必须使用双引号进行包裹才会生效。

## 解析和序列化

`stringify()`和`parse()`方法用来进行JSON的序列化和解析。

### 序列化

序列化的意思是将一个JavaScript对象转换为JSON字符串，会忽略掉原来对象中的空格和缩进。

```js
let book = {
 title: "Professional JavaScript",
 authors: [
 "Nicholas C. Zakas",
 "Matt Frisbie"
 ],
 edition: 4,
 year: 2017
};
let jsonText = JSON.stringify(book);
```

`stringify()`还可以接收另外两个参数。第二个参数是一个过滤器，可以让序列化化后的JSON字符串只包含特定的属性。第三个参数是字符串缩进，控制缩进。

另外一种序列化的方法是在JavaScript对象中定义`toJSON`方法，定义了该方法的JavaScript`在序列化是会调用这个方法。

```js
let book = {
 title: "Professional JavaScript",
 authors: [
 "Nicholas C. Zakas",
 "Matt Frisbie"
 ],
 edition: 4,
 year: 2017,
 toJSON: function() {
 return this.title;
 }
};
let jsonText = JSON.stringify(book); // "Professional JavaScript"
```

### 解析

解析式序列化的反向操作，将JSON字符串解析为JavaScript对象。
