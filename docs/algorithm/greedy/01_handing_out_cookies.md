---
title: 分发饼干
---

要求饼干能够满足尽可能多的孩子的胃口。
局部最优解是每次找出尺寸最大的饼干，尝试满足胃口最大的孩子。

如果不满足，还是拿着最大的饼干，满足胃口次一些的孩子，循环这个过程。

```javascript
var findContentChildren = function (g, s) {
    //大饼干尽量先满足胃口大的
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    //反向遍历，从最大饼干能够满足的位置开始
    let index = s.length - 1, res = 0
    for (let i = g.length; i >= 0; i--) {
        if (index >= 0 && s[index] >= g[i]) {
            res++
            index--
        }
    }
    return res
};
```

本题也可改成小尺寸饼干先满足胃口小的孩子，但是for循环应该遍历饼干尺寸而if控制孩子胃口。
```javascript

var findContentChildren = function (g, s) {
//小饼干先满足胃口小的
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let index = 0, res = 0
    for (let i = 0; i < s.length; i++) {
        if (index < g.length && s[i] >= g[index]) {
            res++
            index++
        }
    }
    return res
};
```

从满足小胃口的孩子开始的时候，发现for循环控制的从孩子的胃口变成了饼干。

简单梳理一下，**当最小的饼干不能满足胃口最小的孩子的时候，应该尝试用更大一点的饼干去满足。而不是使用这个最小的饼干去满足胃口更大的孩子。**

因此此时for循环应该控制的是饼干的尺寸。
