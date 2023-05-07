---
title: 加油站
---
[力扣134-加油站](https://leetcode.cn/problems/gas-station/)

本题的关键在于找到一个起始点，从这个起始点出发能够跑完一圈。

从贪心算法角度来说，有点类似于[最大子序和](https://griki4.github.io/VuePress-Blog/algorithm/greedy/03_maximum_subarray.html)
这道题。我们计算出每一个加油站点的油储备量和从这个站点出发到下一个站点的耗油量之差，得到一个新的数组。

对于这个新数组我们从第1个位置开始累加，累加和为`curSum`，**一旦`curSum`累加到`i`这个位置时小于0，说明
从这个位置之前的位置出发都不能跑完一圈**。此时将`curSum`重置为0，然后从`i+1`的位置重新累加。

另一个问题就是，从`i+1`出发如果能到数组末尾，怎么确定`i`之前的加油站能跑到呢？
其实这个问题上面已经做了回答，`curSum`其实就是油箱的剩余油量，`i`之前`curSum`一直都是大于0的当然可以到达。

```javascript
var canCompleteCircuit = function(gas, cost) {
    let curSum = 0, totalSum = 0, start = 0
    for(let i = 0; i < gas.length; i++) {
        curSum += gas[i] - cost[i]
        totalSum += gas[i] - cost[i]
        //剩余油量小于0。更换起始位置，油箱油量重新置为0。
        if(curSum < 0) {
            curSum = 0
            start = i + 1
        }
    }
    //总和小于0，无论从哪里出发都不能跑完一圈
    if(totalSum < 0) return -1
    return start
};
```
