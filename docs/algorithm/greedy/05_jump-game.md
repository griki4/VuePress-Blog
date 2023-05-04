---
title: 跳跃游戏
---
[力扣55-跳跃游戏](https://leetcode.cn/problems/jump-game/description/)

本题的难点其实是容易进入思维误区。解题的关键其实并不在于每次跳多少步，而是在于每次能够跳的最大的步数
最后能否覆盖到数组末尾。

每处于一个位置，就有一个可以跳的最大步数。这个最大步数从当前位置开始计算，可以向后覆盖到的最远的数组元素
在哪里才是最重要的。如果能够覆盖到数组末尾的元素，则说明能够成功。

所以需要遍历数组，数组在一个`cover`范围内也就是当前位置能跳的最大步数。遍历时`i`在`cover`内移动，每遍历到
一个新元素，更新`cover`，当`cover`的值 `>=nums.length - 1`时就表明可以成功。

**`cover`更新时选取当前数字的`cover`和上一步`cover`的最大值作为新值。因为只要有一个`cover`
能够覆盖到末尾元素就表明可以成功。**

```javascript
var canJump = function(nums) {
    if(nums.length === 1) return true
    let cover = 0
    //i在cover内移动
    for(let i = 0; i <= cover; i++) {
        //每次都取新旧cover的最大值，新cover需要加i是因为从当前位置向后计算cover
        cover = Math.max(cover, i + nums[i])
        if(cover >= nums.length - 1) {
            return true
        }
    }
    return false
};
```
