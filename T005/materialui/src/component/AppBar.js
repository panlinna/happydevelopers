import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class AppBarDemo extends Component{
  render(){
    return(
      <AppBar
        title="Title"
        iconElementRight={<FlatButton label="Save" />}
      />
    )
  }
}

export default AppBarDemo;
