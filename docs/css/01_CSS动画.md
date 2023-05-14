---
title: CSS中的动画
---
## transition
`transition`直译为过渡，意思是元素的一个属性从一个状态到另一个状态的变化过程。
`transition`是一个简写的属性，可细分为下表中四个属性。

|            属性名             |            作用             |
|:--------------------------:|:-------------------------:|
|    transition-property     | 需要设置过渡的属性，比如width、height等 |
|    transition-duration     |          过渡所需的时间          |
| transition-timing-function |        定义过渡变化的速度曲线        |
|      transition-delay      |      定义过渡动画延迟多久后才开始       |
一个简单的例子
```css
.box {
    width: 100px;
    transition: width 1s ease-in .5s;
}
.box:hover{
    width: 300px;
}
```
上面的代码设置了盒子宽度变化时的过渡动画。一个选择器中只能有一个`transition`，若需要设置多个过渡动画，
可以考虑下面的写法
```css
transition: width 1s, height 2s;
```

## animation
`animation`可以立即为`transition`的增强版本，它为定制动画提供了更高的自由度。还是看一个例子：
```css
.box {
    height: 300px;
    animation: change 2s linear 1s;
}

@keyframes change {
    0% {
        width: 100px;
        background-color: skyblue;
    }
    
    100% {
        width: 300px;
        background-color: red;
    }
}
```
通过`@keyframes`定义在动画的各个时间点元素的具体样式，比`transition`这种只能定义开始结束位置的样式相比自由度更高，更加精细。
`animation`中除了原来`transition`中已有的四个属性外，还有一些其他的属性。

|       属性        |            作用            |
|:---------------:|:------------------------:|
| iteration-count |        设置动画播放的次数         |
|    direction    |     播放方向，可以设置动画来回播放      |
|   play-state    |        控制动画播放和暂停         |
|    fill-mode    | 可以决定结束后是回到开始位置播放还是反向播放等  |

## 总结
`animation`相比`transition`可以实现更加精细化控制动画的播放，并且不需要具体的“触发事件”。

