```
AST抽象语法树 LL left left算法

```	


> 什么是四则运算
```
 TokenNumber： 0-9
 Operator: + - * / 
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