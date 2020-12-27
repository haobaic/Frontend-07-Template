>字符串分析算法

#字典数 高频字符串处理 搜索关键词 完全匹配
大量高重复字符串的存储与分析
#KMP  复杂度 O(m+n)
在长字符串里找模式

#WIildcard  ? * 弱版正则 贪心算法
带通配符的字符串模式

#正则
字符串通用模式匹配

#状态机
通用的字符串分析

#LL LR
字符串多层级结构分析

>romCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。

注意：该方法是 String 的静态方法，字符串中的每个字符都由单独的 Unicode 数字编码指定。使用语法： String.fromCharCode()。

#### 语法
String.fromCharCode(n1, n2, ..., nX)

>charCodeAt() 方法

charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。

#### 语法
stringObject.charCodeAt(index)

index	必需。表示字符串中某个位置的数字，即字符在字符串中的下标

注释：字符串中第一个字符的下标是 0。如果 index 是负数，或大于等于字符串的长度，则 charCodeAt() 返回 NaN。