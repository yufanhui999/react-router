import React, { Component } from 'react';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    }
  }
  componentDidMount() {
    // 使用 this,props.match 获取路由对象
    console.log(this.props.match)
  }
  render() { 
    return ( 
      <h2>
        List
      </h2>
     );
  }
}
 
export default List;