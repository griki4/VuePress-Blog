---
title: 合并区间
---
[力扣56-合并区间](https://leetcode.cn/problems/merge-intervals/)

区间类型的题目第一步依旧是排序，按照区间左边界排序。

两个区间重叠的条件是：**前一个区间的右边界，应小于后一个区间的左边界。** 后续的所有操作都是围绕这句话展开的。
首先是区间不重叠，这很好处理。直接将前一个区间放入结果，然后当前区间作为新的标准去检验后续区间是否重叠；如果区间重叠，
也很好办，直接扩充前一个区间的右边界，扩充值等于原区间右边界和当前遍历区间右边界的最大值。

**最后，不要忘记遍历完成之后，将最后一个区间也放入结果。**

```javascript
var merge = function(intervals) {
    //按照左边界排序
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let pre = intervals[0]
    let res = []
    for(let i = 1; i < intervals.length; i++){
        let cur = intervals[i]
        //不重叠时，放入结果并更新pre
        if(cur[0] > pre[1]){
            res.push(pre)
            pre = cur
        }else{
            //重叠则直接扩充右边界，这样做的效果就是区间合并
            pre[1] = Math.max(cur[1], pre[1])
        }
    }
    res.push(pre)
    return res
}
```
