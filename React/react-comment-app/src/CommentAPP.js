import React, { Component } from 'react'; // 按需加载 es6 解构
import CommentInput from './CommentInput'
import CommentList from './CommentList'
// let { a } = {a:1, b:2, c:3}
// react facebook 高级 OO
class CommentAPP extends Component {
    render() { // 接口
        return (
            <div>
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}
export default CommentAPP;