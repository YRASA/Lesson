- rpx  小程序规定屏幕宽度为750rpx
    1rpx = 2px
- 我们再实际应用中该如何选择单位呢?
    只需要适配少部分移动设备, 且分辨率对页面影响不大的, 使用px即可
    需要适配各种分辨率差别比较大的设备, 使用rem或em, 更推荐rem
- px(绝对单位, 一个px是一个点的意思)
    使用px设定字体大小以及行距的话, 通常在更改字体大小时要同时更改行距大小, 否则就会有行距过小或过大的情况
- em(相对单位, 基于目前的容器大小来设定, 再根据em的值去乘出最终的倍数, 所以可以理解为倍数)
    - 相对于使用它们的元素的字体大小
    - 注意: 当当前元素没有font-size时, 当前元素会去继承父元素的font-size, 但是em取的任然不是父元素的font-size, 而是当前元素的font-size, 只是因为继承的发生, 导致当前元素的font-size和父元素的font-size值一样,
- rem(root em)
    根据html的字体大小设定去计算
    rem比em的优势是更容易计算, 避免html元素在多层嵌套后难以预测它的实际大小
- vw/vh(viewport: 目前看到的画面大小)
    范围: 1-100
        50vw即是画面宽度的一半, 50vh等于画面高度的一半
- vmin&vmax(vmin代表荧幕较短的一边, vmax代表荧幕较长的一边)
    用来处理旋转屏幕 Responsive(响应式)网页设定