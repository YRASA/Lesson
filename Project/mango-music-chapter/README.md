- 首页问题
    给数据建模 这种情况下可以考虑加model层
    数据业务封装在model里
    View Component 显示
    数据的改动, 由model负责, 分层的好处
    MVVM React 界面由数据驱动 前端设计模式
    MVP Model View Presenter 后端web开发模式
    MVC Model View Controller 后端web开发模式
        1.首页recommend bug
            - 专辑图片
            - 歌手, 多个情况, 鲁莽的写成了一个
1. 做React/Vue项目, 仿一个音乐类的
2. 做一个可以上线的业务 思路 架构 技能点

- react 组件 由组件component实例和 一个css文件styl
    create-react-app css/less styl
    不一定要用官方的create-react-app, 下次自己的项目就可以从这个目录开始 项目模板
    类文件大写 一个文件夹一个组件 便于维护和模块化
- 单页应用 Single Page Application SPA
    只有一个页面的应用
    提升网站的用户体验
    点击路由时不会重新刷新整个页面, 而是根据路由配置把相应的组件显示出来
- 根据界面 可以分析出 头尾不动 中间内容根据Route 匹配
- Loading 组件 在整个应用中是什么地位?
    哪个目录下创建?
    containers
    components 路由级别组件
    Loading 服务于任何listAPI 列表组件 通用组件

    1. 数据请求阶段, 显示loading
    2. 数据来了之后隐藏
    父组要给loading传参

- api/ 分层的能力, 职责分离 是代码复杂, 且大型化的前提,
    每个路由模块页面独立一个js 文件 便于维护 和代码阅读
    模块化

- 长的列表页面在移动端支持 Scroll

使用export default时，对应的import语句不需要使用大括号;
不使用export default时,对应的import语句需要使用大括号。
export default命令用于指定模块的默认输出。显然，一个模块只能有一 个默认输出， 因此export default命令只能使用一次。 所以, import命令
面才不用加大括号，因为只可能唯一对应export default命令。


    