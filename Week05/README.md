>Proxy代理

 * 理解:标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
## 使用(拦截):
 * get():拦截对象属性的读取
 * set():拦截对象属性的设置
 * deleteProperty() 拦截delete proxy[propKey]的操作，返回一个布尔值。

> 正常流里的拖拽
 * 监听指定元素块的mousedown、mouseup、mousemove事件，记录相应的位置，通过修改style.transform来实现元素块的移动
 * range - html中的区域，创建range，插入节点
 * 去除选中事件冒泡 - selectstart

>CSSOM
range.getBoundingClientRect()
range.insertNode()


## AST抽象语法树 LL left left算法

> 四则运算
 * TokenNumber： 0-9的组合
 * Operator: + - * / 之一
 * Whitespace:<SP>
 * LineTerminator:<LF><CR>

> 词法解析
 * 正则匹配：利用正则匹配切分string，获得不同类型的单词。
 * 类型定义：定义单词类别，与正则匹配识别的单词一一对应。类型分为：数字|空格|行结束符|*|/|+|- 七种。
 * 词法解析：按正则匹配划分单词，并标注类型。
 * 标注结束：利用EOF作为结束符标注句子结束，词法解析完成。

> 语法分析
```
定义：运算由 加法 AdditiveExpression 和 乘法 MultiplicativeExpression 组成
规则：AdditiveExpression := Number | MultiplicativeExpression * Number | MultiplicativeExpression / Number | AdditiveExpression + MultiplicativeExpression | AdditiveExpression - MultiplicativeExpression

MultiplicativeExpression := Number | MultiplicativeExpression * Number | MultiplicativeExpression / Number

语法分析：得到语法分析树，并将根结点标注为Expression。
注意：把单个数字，当成一个 MultiplicativeExpression 运算。
```


## 字符串分析算法

# 字典数 高频字符串处理 搜索关键词 完全匹配
 * 大量高重复字符串的存储与分析
#KMP  复杂度 O(m+n)
 * 在长字符串里找模式

# WIildcard  ? * 弱版正则 贪心算法
 * 带通配符的字符串模式

# 正则
 * 字符串通用模式匹配

# 状态机
 * 通用的字符串分析

# LL LR
 * 字符串多层级结构分析


## 红绿灯

 * callback方式
 * Promise方式
 * async/await方式