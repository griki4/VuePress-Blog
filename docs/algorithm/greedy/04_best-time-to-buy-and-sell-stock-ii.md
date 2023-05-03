---
title: 买卖股票的最佳时机II
---

[力扣122-买卖股票的最佳时机II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/)

核心思想：在价格低时买入，找一个价格最高的时间卖出。

假如第一天买入，第三天卖出。则最终利润`prices[3] - prices[1]`，看上去似乎还需要额外记录每天股票的价格来决定买入还是卖出。但是实际上这个利润的计算还可以看成这种形式：

**`(prices[3] - prices[2]) + (prices[2] - prices[1])`**。

则问题实际上就变成了，计算相邻两天的股票的差价，把差值为正的结果累加就能得到最终结果了。代入该问题就是在差值为正的时候将股票卖出，那如果股票后面价格更高呢？简单，相当于当天把股票卖了又买回来，当天收支平衡。之后用后一天的价格减去买入那天的价格即可。这就是上面那个式子的实际含义。

那如果股票一直降价呢？直接不买入就可以了，具体到代码就是初始利润为0，只会累加正的差值。

```javascript
var maxProfit = function(prices) {
    let res = 0
    //第一天没有利润
    for(let i = 1; i < prices.length; i++) {
        //只收集正的差值。
        res += Math.max(prices[i] - prices[i - 1], 0)
    }
    return res
};
```

代码很简单，但是思想还是有一些绕的！