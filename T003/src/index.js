import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button/Button.js';
import Login from './components/Login/Login.js';


class App extends Component {
  render(){
    return(
      <div>
        <Button />
        <Login />
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'))
