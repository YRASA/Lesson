## 作用域
- 全局
- 函数
- 块级 (let const)

作用域链
查找:当前没有 往外找
## 作用域有两种:
- 词法作用域 (静态作用域) : js 查找是按代码书写的位置来决定的,而不是按照调用时候的位置来决定的
- 静态作用域:Perl, Bash 脚本(linux)

## 像name这样在函数中被使用,但它既不是函数参数,也不是函数局部变量,相对于当前作用域来说，就是自由变量(引用了外部),像test1引用了自由变量就叫闭包。

有不少开发人员总是搞不清匿名函数和闭包这两个概念，因此经常混用。闭包是指有权访问另一个
函数作用域中的变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数，仍以前面的
createComparisonFunction()函数为例，注意加粗的代码。
function createComparisonFunction(propertyName) { 
 return function(object1, object2){ 
 var value1 = object1[propertyName]; 
 var value2 = object2[propertyName]; 
 if (value1 < value2){ 
 return -1; 
 } else if (value1 > value2){ 
 return 1; 
 } else { 
 return 0; 
 } 
 }; 
}

闭包是基于词法作用域书写代码时所产生的自然结果

当函数可以记住并访问所在的词法作用域时，就产生了闭包

闭包是指有权访问另一个函数作用域中的变量的函数