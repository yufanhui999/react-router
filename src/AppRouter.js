import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'

// function Index() {
//   return <h2>index</h2>
// }

// function List() {
//   return <h2>list</h2>
// }

function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>首页</Link>
          <Link to='/list/123'>列表</Link>
        </li>
      </ul>
      {/* exact 
        增加精准比配， 匹配一部分是不行的。
      */}
      <Route path="/" exact component={Index}></Route>
      {/* route 动态传值 */}
      <Route path='/list/:id' component={List}></Route>
    </Router>
  )
}

export default AppRouter