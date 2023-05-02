---
title: 最大子序和
---

[力扣53-最大子序和](https://leetcode.cn/problems/maximum-subarray/description/)

解析：寻找和最大的连续的子数组。

贪心体现的地方在于：**一旦 `sum + nums[i]`的值小于0的时候，下一次循环的最大和就是 `nums[i + 1]`。**

遍历一次数组，每一次都累加上遍历到的数字。外部有一个初始化的变量，每次都会比较当前和与最大和的大小并记录两者中的最大值，这个变量用于记录最大和，也即最后需要返回的结果
。

若累加上一个数字之后，子序和小于0。则将子序和赋值为0，然后重新进入下一轮循环。

```javascript
var maxSubArray = function(nums) {
    let result = -Infinity
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
        //sum记录每一次遍历的子序和
        sum += nums[i]
        //result记录最大子序和
        if(sum > result) {
            result = sum
        }
        if(sum < 0) {
            //相当于下一个子序从nums[i + 1]开始取
            sum = 0
        }
    }
    return result
};
```
