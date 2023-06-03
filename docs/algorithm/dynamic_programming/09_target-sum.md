---
title: 目标和
---
[力扣494-目标和](https://leetcode.cn/problems/target-sum/)

本题的难点有两个：
- 如何将目标问题转换为01背包问题？
- 递推公式的推导。

先看第一个。其实本题可以看成是将一个数组分割为两个子数组，一个全是正数，另一个全是要被负数的（里面的数依旧是正数），二者之和等于`target`。假设正数子数组和为`left`，
负数子数组和为`right`。则有如下推导：

`left + right = sum`

`left - right = target`

从这里我们可以推导出`left = (sum + target) / 2`。如果数组中的元素能够组合出和为`left`的元素，那么按照上面的推导，就能满足题意。所以问题的性质就变了，
变成了**从数组中选取元素，和为`left`的组合的个数**，这就是典型的01背包问题了。

进入五部曲看看递推公式的推导：
1. `dp`数组的含义：容量为`j`的背包能够被装满的方法数量为`dp[j]`。
2. 递推公式：两种选择。第一，不放入元素`i`，此时`dp[j]`和上一轮的`dp[j]`相同；第二，放入`i`，此时`dp[j] = dp[j - nums[i]]`。**注意**，这里就不是求两者的最大值了。我们需要的，**是能够装满背包的方法的总和，既然放不放入元素`i`都可以装满，那么`dp[j] = dp[j] + dp[j - nums[i]]`，即两种方法的总和**。
3. 初始化：**`dp[0] = 1`**，容量为0，啥也不放入，就1种方法，初始化为0就没办法递推了。
4. 遍历顺序：传统一维方法的遍历顺序，先物品，后倒序背包。

```javascript
var findTargetSumWays = function(nums, target) {
    //求和
    const sum = nums.reduce((pre, cur) => pre + cur)
    //求left
    let left = (sum + target) / 2
    if (Math.abs(target) > sum) return 0 
    if (left % 2) return 0
    //初始化dp数组
    const dp = new Array(left + 1).fill(0)
    dp[0] = 1
    //遍历
    for (let i = 0; i <= nums.length; i++) {
        for (let j = left; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
    }
    return dp[left]
};
```

