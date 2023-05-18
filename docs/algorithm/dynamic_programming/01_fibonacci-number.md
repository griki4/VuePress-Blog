---
title: 斐波那契数
---
[力扣509-斐波那契数](https://leetcode.cn/problems/fibonacci-number/)

本题思路很简单，即使不使用动态规划的思路也可以解决，但是非常适合用来初试动态规划的解题步骤。

1. `dp`数组和下标`i`的含义：第`i`个斐波那契数的值是`dp[i]`。
2. 递推公式：题目含义直接给出了，`dp[i] = dp[i - 1] + dp[i - 2]`
3. `dp`数组如何初始化：`dp[0] = 0, dp[1] = 1`，表示`dp`数组的初始状态
4. 遍历顺序：很自然，从前向后遍历。
5. 打印`dp`数组：这一步是为了检查`dp`数组是否按照我们期望的状态进行。

```javascript
var fib = function(n) {
    //初始化dp数组
    let dp = []
    dp[0] = 0
    dp[1] = 1
    //遍历顺序
    for(let i = 2; i <= n; i++){
        //递推公式
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
```
