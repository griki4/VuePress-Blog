---
title: 分割等和子集
---
[力扣416-分割等和子集](https://leetcode.cn/problems/partition-equal-subset-sum/description/)

首先看看本题为什么可以转化为01背包问题？

一个集合是否可以分割为两个总和相等的子集。实际上就是现在有一个容量为集合总和一般的背包，现在从集合中选择元素装入背包，观察是否存在一种情况，
**使得背包正好被装满**。因为背包如果正好被装满，说明此时背包中的元素就是其中一个子集的元素。

接下来是五部曲：

1. `dp`数组含义：`dp[j]`表示容量为`j`的背包能够纳的最大值。
2. 递推公式：和传统01背包的递推公式是一样的，只是这里物体的重量和价值是一样的。`dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])`
3. 初始化：集合中只有正整数，全部初始化为0即可。
4. 遍历顺序：**遵循01背包的遍历顺序，先遍历物品，后遍历背包容量**。原因可以参考[这篇博客](https://griki4.github.io/VuePress-Blog/algorithm/dynamic_programming/06_01-bags.html)
5. 打印`dp`数组

本题难点在于：如何将一个分割子集的问题，转换为01背包问题，其余解法和经典的01背包一致。这其实也是大部分能用01背包解决的动态规划问题的难点

```javascript
var canPartition = function(nums) {
    //是否存在一个容量为总和一半的背包，从nums装元素时，最大值正好为总和的一半
    let sum = nums.reduce((pre, cur) => pre + cur)
    //总和为奇数直接排除
    if (sum % 2 === 1) return false
    let target = sum / 2
    //dp数组初始化
    const dp = new Array(target + 1).fill(0)
    //遍历
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
        }
    }
    if (dp[target] === target) return true
    return false
};
```
