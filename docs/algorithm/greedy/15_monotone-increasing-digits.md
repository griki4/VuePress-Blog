---
title: 单调递增的数字
---
[力扣738-单调递增的数字](https://leetcode.cn/problems/monotone-increasing-digits/description/)

满足题目要求的数字应当是，在`str[i]`位置处，前面的数字都是单调递增，后面的数字都是9的情况。
举一个例子，数字为123421时满足条件的数字就是123399。也就是当`str[i] > str[i + 1]`的时候，将`str[i] - 1`，
然后后面的数字都变成9即可，不过这个`i`一定要满足前面的数字都是递增的。

反向遍历是一个更加明智的选择。当`str[i] < str[i - 1]`时，`str[i - 1]--`，`str[i] = 9`即可。

```javascript
var monotoneIncreasingDigits = function(n) {
    n = n.toString()
    n = n.split("").map(item => {
        return +item
    })
    //使用flag记录最后一次str[i] < str[i - 1]的位置i
    let flag = Infinity
    for(let i = n.length - 1; i > 0; i--){
        if(n[i - 1] > n[i]){
            flag = i
            n[i - 1]--
            n[i] = 9
        }
    }
    //从i开始，后面的数字都可以变成9
    for(let i = flag; i < n.length; i++){
        n[i] = 9
    }
    return +n.join('')
};
```
