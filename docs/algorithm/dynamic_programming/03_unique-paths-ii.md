---
title: 不同路径问题
---

## 不同路径
[力扣62-不同路径](https://leetcode.cn/problems/unique-paths/)

按照动态规划五部曲来解决这个问题。
1. `dp`数组和下标的含义：到达第`i,j`位置的路径的数量为`dp[i][j]`。
2. 递推公式。由于机器人只能向下和向右移动，所以到达`i,j`位置。要么是从`i-1,j`位置向下移动一步，要么从`i,j-1`位置向右移动一步。
那么递推公式也就很明显了

`dp[i][j] = dp[i - 1][j] + dp[i][j - 1]`

3. 初始化。**本题最关键的一步**。到达第一行和第一列的所有点的路径只有一条，这是移动方式决定的。

4. 遍历顺序：按照题目要求，二维数组，从左往右、从上往下遍历。

5. 打印`dp`数组。

```javascript
var uniquePaths = function(m, n) {
    //到达i,j位置的路径数量为dp[i][j]
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    //初始化，从紧邻的左节点和上节点推导
    for(let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for(let j = 0; j < n; j++){
        dp[0][j] = 1
    }
    //递推公式
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            //核心还是看：到达i,j位置的上一个位置在哪里，到达可能的上一个位置的路径总和就是到达i,j位置的路径总和
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};
```

## 不同路径||

[力扣63-不同路径](https://leetcode.cn/problems/unique-paths-ii/description/)

在原题的基础上，本题加入了障碍点。其实遍历顺序和`dp`数组的含义依旧是一样的，主要区别在于初始化以及递推公式需要进行条件判断。

首先是初始化。如果第一行和第一列之中出现了障碍点，那么处于障碍点右边或者下边的点都无法到达。因此初始化的时候，碰到障碍点时后面的位置`dp`数组的值都为0。

然后是`dp`数组的递推公式，其实很简单。障碍点所处的位置是没有办法到达的，因此障碍点在`dp`数组中为0。更加详细的说法就是，
在原数组中值为1的位置，在`dp`数组中应该为0，因为障碍点无法抵达。

```javascript
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length
    //和不同路径的原题一致
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    //初始化
    //没有办法到达一行或者第一列障碍之后的位置
    for(let i = 0; i < m && obstacleGrid[i][0] === 0; i++){
        dp[i][0] = 1
    }
    for(let j = 0; j < n && obstacleGrid[0][j] === 0; j++){
        dp[0][j] = 1
    }
    //递归公式需要加入条件判断，i,j位置不能是障碍点
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(obstacleGrid[i][j] === 0){
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    return dp[m - 1][n - 1]
};
```
