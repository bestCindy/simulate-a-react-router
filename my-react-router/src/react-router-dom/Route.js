import React, { Component } from 'react';
import { Consumer } from "./context";
import { pathToRegexp } from "path-to-regexp";

export default class Route extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <Consumer>
                {
                    state => {
                        // path 是 route 中传递的， pathname 是 location 的
                        let {path, component: Component, exact = false} = this.props;
                        let pathname = state.location.pathname;
                        // 通过 path 实现一个正则，通过这个正则匹配
                        let reg = pathToRegexp(path, [], {end: exact});
                        let result = pathname.match(reg);
                        if (result) {
                            return <Component></Component>
                        }
                        return null;
                    }
                }
            </Consumer>
        )
    }
}