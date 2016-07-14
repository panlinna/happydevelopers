import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LeftNavButton from './components/LeftNavButton';

import './stylesheets/common.css';

class App extends Component {
  render(){
    let styles={
      root:{
        textAlign:'center'
      }
    }
    return(
      <div style={styles.root}>
        <LeftNavButton/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'))
