import React, { Component } from 'react';
import { Consumer } from "./context";

export default class Link extends Component {
    constructor(){
        super();
    }
    render() {
        return(<Consumer>
            {
                state => {
                    return <a onClick={()=>{

                    }}>
                        {/* Link 中间那俩字 */}
                        {this.props.children}
                    </a>
                }
            }
        </Consumer>)
    }
}