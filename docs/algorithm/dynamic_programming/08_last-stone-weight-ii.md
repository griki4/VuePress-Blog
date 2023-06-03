---
title: 最后一块石头的重量II
---

本题其实与分割等和子集非常类似。怎么样让剩下的石头重量最小呢？**将石头尽可能分成重量相同的两堆，然后相撞就可以了！！！**

现在问题转换成，容量为石头总重量一半的背包，所能装的石头的最大重量是多少。

然后进入熟悉的动态规划五部曲：
1. `dp`数组的含义：容量为`j`的背包所能装的石头的最大重量为`dp[j]`。
2. 递推公式：跟分割子集是一样的，`dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])`。
3. 初始化：容量为0的背包自然装不下任何石头，如果每个石头重量都是1，按照题目要求初始`dp`数组长度为`sum / 2 + 1`。
4. 遍历顺序：依旧是先遍历石头，然后反向遍历背包。

```javascript
var lastStoneWeightII = function(stones) {
    //尽量让石头分成重量相同的两堆。dp[j]表示容量为j的背包能装的最大石头重量
    let sum = stones.reduce((pre, cur) => pre + cur)
    let target = Math.floor(sum / 2)
    //初始化dp数组
    const dp = new Array(target + 1).fill(0)
    //遍历
    for (let i = 0; i < stones.length; i++) {
        for (let j = target; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
        }
    }

    //返回值的计算
    return sum - dp[target] - dp[target]
};
```
