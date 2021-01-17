# 学习笔记

## 编写带括号的四则运算产生式

```
四则运算： (1 + 2) * 3
终结符：
	Number
	+ — * /
非终节符：MultiplicativeExpression,AddtiveExpression,BracketExpression


<MultiplicativeExpression> :== <BracketExpression> |

<MultiplicativeExpression>"*"<BracketExpression>|

<MultiplicativeExpression>"/"<BracketExpression>

	<AddtiveExpression> :== <MultiplicativeExpression> |

<AddtiveExpression>"+"<MultiplicativeExpression>|

<AddtiveExpression>"-"<MultiplicativeExpression>

<BracketExpression> :== <Number> |
"("<AddtiveExpression>")"
```

## 计算机语言


### 语言的分类

> 形式语言
#### 用途
 * 数据描述语言
 ```
 JSON/HTML/XAML/SQL/CSS
 ```
 * 编程语言
 ```
 C/C++/Java/C#/Python/Ruby/Perl/Lisp/T-SQL/Clojure/Haskell/Javascript/PHP/GO/Dart
 ```
#### 表达方式
 * 声明式语言
 ```
 JSON/HTML/XAML/SQL/CSS/Lisp/Clojure/HasKell
 ```
 * 命令型语言
 ```
  C/C++/Java/C#/Python/Ruby/Perl/Javascript/PHP/GO/Dart
 ```
 
>图灵完备性：在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。
>图灵机（Turing machine）：又称确定型图灵机，是英国数学家艾伦·图灵于 1936 年提出的一种将人的计算行为抽象掉的数学逻辑机，其更抽象的意义为一种计算模型，可以看作等价于任何有限逻辑数学过程的终极强大逻辑机器。
 * 命令式——图灵机
	* goto
	* if和while
 * 声明式——lambda
	* 递归

## 动态和静态
 * 动态
	* 在用户的设备/在线服务器上
	* 产品实际运行时
	* Runtime
 * 静态
	* 在程序的设备上
	 * 产品开发时
	 * Compiletime


## 类型系统
 * 动态类型系统与静态类型系统
 * 强类型与弱类型
	* String+Number
	* String==Boolean
 * 复合类型
	* 结构型
	* 函数签名
 * 子类型
 * 泛型
	* 逆变/协变
	
>js类型
 * Number
 * String
 * Boolean
 * Object
 * Null 有值但为空
 * Undefined 未赋值
 * Symbol 用于object属性名
 * Bigint

>特殊对象

 * Function: 当标识符后跟着()时，会尝试调用对象的[[ call ]]属性进行方法调用。
 * Array: length属性根据最大的下标自动发生变化。
 * Object.prototype: 所有对象的默认原型，无法再给它设置原型。
 * string: 非负整数访问会去字符串里查找，类似codeAt()。
 * arguments: ES5非负整数型下标属性跟对应的变量联动。
 * namespace: 特殊地方很多，跟一般对象完全不一样，尽量只用于 import 吧。
 * bind后的function: 跟原来的函数相关联。
 * 类型数组和数组缓冲区: 跟内存块相关联，下标运算比较特殊。
 * Symbol.toStringTag | class: 决定 Object.protptype.toString 返回值的属性。