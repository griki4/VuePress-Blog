---
title: 最长回文子串
---
[力扣409-最长回文子串](https://leetcode.cn/problems/longest-palindrome/)

回文串除了中间的字母，其余字符都是首尾对应的。于是可以想到一种凑对子的思路。

一个字符串的字符能够构成的最长回文串，取决于字符串中有多少对相同的字符。有一对字符，回文子串的数量就+2，最后如果发现字符串还有剩余字符，
则回文子串的数量再+1，因为这个单独的字符可以放到中间。

这是力扣上的一个很有意思的题解，我觉得非常巧妙而且也十分好懂。所以这里我用自己的话重新描述一下这个思路。[原题解](https://leetcode.cn/problems/longest-palindrome/solutions/159200/yong-da-pai-de-si-lu-lai-ji-suan-zui-chang-hui-wen/)

```javascript
var longestPalindrome = function(s) {
    //回文串就是找字符串中相同字母的对数
    let temp = new Set()
    let sum = 0
    s.split("").forEach(c => {
        if (temp.has(c)) {
            temp.delete(c)
            sum += 2
        } else {
            temp.add(c)
        }
    })
    //还有剩余的字母可以放到回文串的中间
    return sum + (temp.size > 0 ? 1 : 0)
};
```
