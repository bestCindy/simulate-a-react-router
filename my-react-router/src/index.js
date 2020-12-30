import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "./react-router-dom/index.js";
import { render } from 'react-dom';
import Home from "./Home";
import Profile from "./Profile";
import User from "./User";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <div>
          <Link to="/home">首页</Link>
          <Link to="/profile">个人中心</Link>
          <Link to="/user">用户</Link>
        </div>
        <div>
          {/*exact 表示的是严格匹配*/}
          <Route path="/home" exact={true} component={Home}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/user" component={User}></Route>
        </div>
      </Router>
    )
  }
}

render(<App></App>, window.root)
