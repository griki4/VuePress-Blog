---
title: 摆动序列
---
摆动序列中相邻数字之差在正负数之间交替。
难点在于：**满足边界条件**。
似乎直接遍历数组，并且记录差值满足条件的数字即可，但是对于数组中连续相等的元素以及数组的首尾元素。应当考虑preDiff为零的情况，这也是满足条件的。

```javascript
var wiggleMaxLength = function(nums) {
    if(nums.length <= 1) return nums.length
    let result = 1
    //preDiff表示当前数和前一个数的差，curDiff表示后一个数和当前数的差值
    let preDiff = 0, curDiff = 0
    for(let i = 0; i < nums.length - 1; i++){
        curDiff = nums[i + 1] - nums[i]
        //满足条件的情况，preDiff为0可以保留数组首尾以及中间有平坡的情况的数字
        if((preDiff >= 0 && curDiff < 0) || (preDiff <= 0 && curDiff > 0)) {
            result++
            preDiff = curDiff
        }
    }
    return result
};
```

因此，本题的思路和常规想法的不同点在于。

- 需要考虑`preDiff`等于0的情况。
- 注意`preDiff = curDiff`这个赋值语句应该在满足条件的时候才能进行，因为不满足条件的数字没有必要记录他们的差值
