---
title: 爬楼梯问题
---
## 爬楼梯
[力扣70-爬楼梯](https://leetcode.cn/problems/climbing-stairs/)

爬楼梯问题是非常经典的动态规划问题，核心的解决思路其实也就是是一句话。

**爬到第`i`台阶的方法是爬到第`i-1`阶和`i-2`阶的方法数量的总和。**

因为爬到第`i`阶的最后一步无非就是从`i-1`阶跳一步或者从`i-2`阶跳两步。
```javascript
var climbStairs = function(n) {
    //爬到第i阶有dp[i]种方法
    let dp = []
    //dp数组初始化，爬到第1,2阶的方法
    dp[1] = 1
    dp[2] = 2
    //从前向后遍历
    for(let i = 3; i <= n; i++){
        //递归公式
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}
```

## 爬楼梯的最小花费
[力扣746-使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/)

`dp`数组的含义变为跳到第`i`阶需要的最小花费。

主要难点在于递推公式的推导。**站在对应台阶上不需要任何花费，只有向上跳的时候才会产生花费**。

要到第`i`阶的办法和原始的爬楼梯是一样的，从`i-1`阶跳1阶，或者从`1-2`阶跳2阶。`dp[i]`应该取这两种方法中花费最小的那个。
所以递推公式就是

`dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])`

代码也就比较明显了：
```javascript
var minCostClimbingStairs = function(cost) {
    //dp[i]表示到达第i阶的最小花费
    let dp = []
    //dp数组初始化，因为从0或1出发都可以，所以初始花费都是0。（站在对应的台阶上是不需要花费的）
    dp[0] = 0
    dp[1] = 0
    for(let i = 2; i <= cost.length; i++){
        //递推公式
        //到达第i阶有两种方法，选取两种方法中花费较小的方法
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }
    return dp[cost.length]
};
```



