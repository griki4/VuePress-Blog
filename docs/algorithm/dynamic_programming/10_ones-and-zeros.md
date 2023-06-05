---
title: 一和零
---
[力扣474-一和零](https://leetcode.cn/problems/ones-and-zeroes/description/)

本题特点：**背包对于装入的物品有两重限制，分别是0和1的数量**。之前的01背包问题中，背包只有一个最大容量的限制，但是本题需要同时限制0和1的数量，所以需要一个二维的背包。

按照题意，进行递推五部曲：

1. `dp`数组的含义：`dp[i][j]`表示最多含有`i`个0和`j`个1的最大子集长度。
2. 递推公式：需要知道当前字符中0和1的数量，然后从背包容量中减去这些数量，就能得到放入当前字符时的`dp[i][j] = dp[i - zeroNum][j - oneNum] + 1`；如果不放入当前字符则直接是`dp[i][j]`。可得递推公式： `dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)`。
3. 初始化：什么都不含有的子集长度为0。
4. 遍历顺序：本题虽然背包是二维的，但是使用的递推公式仍旧是一维的。需要反向遍历。
5. 打印`dp`数组。

```javascript
var findMaxForm = function(strs, m, n) {
    //初始化一个两个维度的背包
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    //计算每个字符串的0和1的数量
    let zeroNum, oneNum
    //遍历字符串
    for (let str of strs) {
        zeroNum = oneNum = 0
        //字符串中只会含有0和1，每遍历到一个字符串都需要重新统计
        for (let c of str) {
            if (c === '0') {
                zeroNum++
            } else {
                oneNum++
            }
        }
        //放入背包，反向遍历
        for (let i = m; i >= zeroNum; i--) {
            for (let j = n; j >= oneNum; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
            }
        }
    }
    return dp[m][n]
};
```
