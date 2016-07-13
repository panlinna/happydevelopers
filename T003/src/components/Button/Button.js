import React, { Component } from 'react';

class Button extends Component {

  render(){
    const style = require('./Button.less');

    return (
      <button className="my-button">click</button>
    );
  }
}

export default Button;
