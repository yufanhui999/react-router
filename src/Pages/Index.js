import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[
        {cid:123,title:'react-1'},
        {cid:456,title:'react-2'},
        {cid:789,title:'rect-3'},
      ]
     }
  }
  render() {
    return ( 
      <ul>
        {
          this.state.list.map(item => {
            return (
              <li key={item.cid}>
                <Link to={'/list/' + item.cid}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
     );
  }
}
 
export default Index;