---
title:柠檬水找零
---
[力扣860-柠檬水找零](https://leetcode.cn/problems/lemonade-change/description/)

过程并不复杂，主要分三种情况。

1. 顾客给5美元，直接收下。
2. 顾客给10美元，找零5美元后收下。
3. 顾客给20美元。**优先找零一个10美元和一个5美元，否则找零3个美元。**

贪心体现在第三步，因为**10美元只能给20美元找零**，所以给20美元的时候要优先使用10美元。

解题思路也很简单，按照上述情况分别讨论，记录目前有的5美元和10美元的数量。数量不够的情况下返回`false`即可。

```javascript
var lemonadeChange = function(bills) {
    //记录5美元和10美元的数量
    let fiveCount = 0, tenCount = 0
    for(let i = 0; i < bills.length; i++){
        if(bills[i] === 5){
            fiveCount++
        }else if(bills[i] === 10) {
            if(fiveCount > 0){
                tenCount++
                fiveCount--
            }else{
                return false
            }
        }else{
            //优先使用10美元找零
            if(fiveCount > 0 && tenCount > 0){
                fiveCount--
                tenCount--
            //否则使用3个5美元找零    
            }else if(fiveCount >= 3){
                fiveCount -= 3
            }else{
                return false
            }
        }
    }
    return true
};
```
