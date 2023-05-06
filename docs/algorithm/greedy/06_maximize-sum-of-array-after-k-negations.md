---
title: k次取反后数组的最大和
---
[力扣1005-k次取反后最大化的数组和](https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations/description/)

对一个数组进行k次取反之后的最大和。利用贪心算法的想法非常简单
1. 将数组中所有的负数取反。
2. 若k还有剩余并且是奇数，则对绝对值最小的数进行取反。

关键点在于排序的时候应该依照元素的绝对值进行排序，遇到小于零的则取反并且`k--`。
当数组遍历完成之后，k还剩奇数次则对末尾元素取反。因为偶数次可以对同一个元素取反可以不管。
奇数次取反想要最大和，则应当选择最小的数来取反。
```javascript
var largestSumAfterKNegations = function(nums, k) {
    //首先把所有的负数取反
    //还有剩余次数，则找到最小的正数取反
    //依据绝对值排序
    nums = nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0 && k > 0) {
            nums[i] = -nums[i]
            k--
        }
        sum += nums[i]
    }
    //遍历到结束k还有剩余并且是奇数次
    if(k % 2 !== 0) {
        //这里减去2倍的最小值，因为求和时已经加了一次最小值。
        sum -= 2 * nums[nums.length - 1]
    }
    return sum
};
```
