## for in 和 for of
– for … of遍历获取的是对象的键值,for … in 获取的是对象的键名
– for … in会遍历对象的整个原型链,性能非常差不推荐使用,而for … of只遍历当前对象不会遍历原型链
– 对于数组的遍历,for … in会返回数组中所有可枚举的属性(包括原型链上可枚举的属性),for … of只返回数组的下标对应的属性值