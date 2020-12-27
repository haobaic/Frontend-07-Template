```
AST抽象语法树 LL left left算法

```	


> 什么是四则运算
```
 TokenNumber： 0-9的组合
 Operator: + - * / 之一
 Whitespace:<SP>
 LineTerminator:<LF><CR>
```	
	
# 词法解析
```
正则匹配：利用正则匹配切分string，获得不同类型的单词。
类型定义：定义单词类别，与正则匹配识别的单词一一对应。类型分为：数字|空格|行结束符|*|/|+|- 七种。
词法解析：按正则匹配划分单词，并标注类型。
标注结束：利用EOF作为结束符标注句子结束，词法解析完成。
```
# 语法分析
```
定义：运算由 加法 AdditiveExpression 和 乘法 MultiplicativeExpression 组成
规则：AdditiveExpression := Number | MultiplicativeExpression * Number | MultiplicativeExpression / Number | AdditiveExpression + MultiplicativeExpression | AdditiveExpression - MultiplicativeExpression

MultiplicativeExpression := Number | MultiplicativeExpression * Number | MultiplicativeExpression / Number

语法分析：得到语法分析树，并将根结点标注为Expression。
注意：把单个数字，当成一个 MultiplicativeExpression 运算。
```
>正则表达式

RegExp.exec() 方法用于检索字符串中的正则表达式的匹配。

#### 返回值
返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。

#### 重要事项

如果在一个字符串中完成了一次模式匹配之后要开始检索新的字符串，就必须手动地把 lastIndex 属性重置为 0。

##RegExp lastIndex 属性

```
lastIndex 属性用于规定下次匹配的起始位置。

该属性只有设置标志 g 才能使用。

该属性是可读可写的。只要目标字符串的下一次搜索开始，就可以对它进行设置。当方法 exec() 或 test() 再也找不到可以匹配的文本时，它们会自动把 lastIndex 属性重置为 0。
```

>迭代器 generator


[链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)


>yield

之前没用过 第一次见到 学习中

[链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield)