import React, { Component } from 'react';

import Drawer from './Drawer';

class LeftNavButton extends Component {
  handleClick(){
    console.log('aaa');
    this.refs.LeftNav.handleToggle();
  }
  render () {
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>click</button>
        <Drawer ref='LeftNav'/>
      </div>
    )
  }
}

export default LeftNavButton;
