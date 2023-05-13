---
title: 无重叠区间
---
[力扣435-无重叠区间](https://leetcode.cn/problems/non-overlapping-intervals/description/)

核心思想：**寻找重叠的区间数量。**

本题跟引爆气球类似，要寻找重叠区间，首先要进行的是按照某一个边界进行排序。这里以右边界排序为例。

排序完成。那么什么样的区间才是重叠区间？顺序遍历每一个区间，记录第一个区间的右边界，如果后续遍历到的区间的左边界都小于这个右边界，说明这个区间与第一个区间重叠。
如果大于等于右边界，说明不重叠。此时更新右边界，新的右边界为这个左边界大于原右边界区间的右边界。

同时注意，本题记录的是不重叠区间的数量。返回结果是要注意使用总区间数量减去不重叠的区间数量才能得到要去除的区间数量。
```javascript
var eraseOverlapIntervals = function(intervals) {
    //按照左边界排序
    intervals = intervals.sort((a, b) => {
        return a[1] - b[1]
    })
    //count记录不重叠的区间
    let count = 1
    let end = intervals[0][1]
    for(let i = 0; i < intervals.length; i++){
        //当前区间的左边界大于第一个区间的右边界时
        if(intervals[i][0] >= end){
            //不重叠区间+1
            count++
            //将当前区间的结束位置作为新的右边界
            end = intervals[i][1]
        }
    }
    //减去不重叠区间的数量就是需要移除的区间数量
    return intervals.length - count
}
```
