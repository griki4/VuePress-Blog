---
title: 跳跃游戏
---
## 跳跃游戏
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

## 跳跃游戏II
[力扣45-跳跃游戏II](https://leetcode.cn/problems/jump-game-ii/)

假设现在总是能够跳到数组末尾，但是要求使用尽可能少的步数跳到末尾。

依旧是思想误区，并不是每一次都直接跳到最远就能使用最少的步数，**因为直接跳到最远没办法知道下一次能跳多远**。

所以还是应该从覆盖范围出发。遍历到第一个数字会有一个覆盖范围，然后在这个覆盖范围内观察每一个数字各自的覆盖范围，
如果里面有数字的覆盖范围可以覆盖到结尾，说明两步就能跳完；反之如果都没有，则步数必须要加一，然后更新覆盖范围，进入下一轮循环。

核心思想：下标`i = curIndex`时，说明第一个数字的覆盖范围中没有能到结尾的，步数应该增加；同时`curIndex`应该更新
为内部数字向后的最大覆盖范围。

同时为了处理`curIndex === nums.length - 1`的特殊情况，下标移动范围仅限于最大值为`nums.length - 2`，因为
最后一步一定可以跳到结尾。如果刚好是`curIndex`，还是需要多跳一步。

```javascript
var jump = function(nums) {
    let curIndex = 0
    let nextIndex = 0
    let step = 0
    for(let i = 0; i < nums.length - 1; i++) {
        //nextIndex记录下一次能跳的最大距离
        nextIndex = Math.max(nums[i] + i, nextIndex)
        //下标移动到curIndex最大覆盖范围，更新curIndex和step。
        //因为是走到nums.length - 2的位置即可，所以最后还必须走一步。
        if(i === curIndex) {
            //i === curIndex还包含了第一步，第一步是必须跳的，否则curIndex也不会有值
            curIndex = nextIndex
            step++
        }
    }
    return step
};
```


