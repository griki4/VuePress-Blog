---
title: 分发糖果
---
[分发糖果](https://leetcode.cn/problems/candy/description/)

本题关键在于使用两次贪心算法。

首先从前向后遍历数组，如果数组中后一位数字大于当前遍历的数字，则后一位的糖果数量+1。这是保证右>左时，右边孩子的糖果数量一定满足要求。

然后从后向前遍历，解决左>右的时的情况。思路和左>右类似，但是当左>右的时，左边孩子的糖果数量不应该直接+1，
而应当是原有值和右边孩子的糖果数量+1两者中的最大值。只有这样才能满足题目要求，相邻孩子中，评分高的会分到更多的糖果。

**原有值能最小程度保证满足右>左的要求，新值能最小程度保证满足左>右的要求。所以二者去最大值能够保证两边的要求都能够满足。**

```javascript
var candy = function(ratings) {
    //保证每个孩子都有糖果
    let count = new Array(ratings.length).fill(1)

    //从前向后遍历，右大于左，则右侧糖果数量加1
    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i - 1]){
            count[i] = count[i - 1] + 1
        }
    }

    //反向遍历
    for(let i = ratings.length - 2; i >= 0; i--) {
        //左大于右，取右的糖果数量加一和原有值进行比较
        if(ratings[i] > ratings[i + 1]) {
            count[i] = Math.max(count[i], count[i + 1] + 1)
        }
    }

    return count.reduce((pre, cur) => {
        return pre + cur
    })
}
```
