---
title: 划分字母区间
---
[力扣763-划分子母区间](https://leetcode.cn/problems/partition-labels/)

题意：不同的片段中不能出现相同的字母。

解法也很简单，主要是两步：
1. 记录每一个字母最后一次出现的位置，也就是下标。
2. 遍历字符串。并且不断更新片段边界，即找出片段中最后出现位置最大的字母。当这个值与正在遍历的字母的下标一致时即为片段的分割位置。

可以看看代码随想录的这张图
![](https://code-thinking-1253855093.file.myqcloud.com/pics/20201222191924417.png)

代码也很简单。
```javascript
var partitionLabels = function(s) {
    //一个记录字母最后出现位置的哈希表
    let hash = {}
    for(let i = 0; i < s.length; i++){
        hash[s[i]] = i
    }
    //遍历字符串
    let result = [], left = 0, right = 0
    for(let i = 0; i < s.length; i++){
        //不断更新遍历的到字符最后出现的位置，取最大值
        right = Math.max(right, hash[s[i]])
        //到达最大值，也即分割点
        if(right === i){
            result.push(right - left + 1)
            //更新起始位置
            left = i + 1
        }
    }
    return result
};
```
