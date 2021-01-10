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

 * 命令式——图灵机
	* goto
	* if和while
 * 声明式——lambda
	* 递归