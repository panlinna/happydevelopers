import React,{Component} from 'react';
import Button from '../Button/Button.js';


class Login extends Component {
  render(){
    const style = require('./login.less');
    return(
      <div>
          <input type="text"/>
          <input type="password"/>
          <Button>登陆</Button>
          <Button>注册</Button>
      </div>
    )
  }
}

export default Login;
