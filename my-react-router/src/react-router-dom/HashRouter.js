import React, { Component } from 'react';
import { Provider } from "./context";

export default class HashRouter extends Component {
    constructor() {
        super()
        this.state = {
            location: {
                pathname: window.location.hash.slice(1) || "/"
            }
        }
    }
    componentDidMount() {
        // 默认 hash 没有时跳转到 /
        window.location.hash = window.location.hash || "/";
        // 监听 hash 值变化 重新设置状态
        window.addEventListener("hashchange", () => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.hash.slice(1) || "/"
                }
            })
        })
    }
    render() {
        let value = {
            location: this.state.location,
            history: {
                push(to) {
                    window.location.hash = to;
                }
            }
        }
        // 在父组件上用 provider 传一个值，这个值会传给任意的 child，只要 child 用了 Consumer 组件
        // 组件里面需要传一个函数，函数的参数就是父组件的值
        return(
            <Provider value={value}>
                { this.props.children }
            </Provider>
        )
    }
}