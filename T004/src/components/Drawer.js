import React, { Component } from 'react'

class Drawer extends Component {
  constructor(props){
    super(props);
    this.state={
      display:true,
    }
  }
  handleToggle(){
    this.setState({
      display:!this.state.display,
    })
  }
  render () {
    var show = this.state.display ? '0px' : '-30%';
    var contral = this.state.display ? 'block' : 'none';
    let styles={
      root:{
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        width: '30%',
        backgroundColor:'#00bcd4',
        transition:'margin-left 0.5s',
        marginLeft:show,
      },
      list:{
        display:'block',
        textDecoration: 'none',
        width:'100%',
        padding:'10px',
        color:'#fff',
        textAlign:'center',
        height:'60px',
        lineHeight:'40px',
      },
      cover:{
        position: 'absolute',
        backgroundColor:'#333',
        opacity:'0.5',
        top:'0',
        bottom:'0',
        right:'0',
        left:'0',
        display:contral
      }
    }
    return(
      <div>
        <div onClick={this.handleToggle.bind(this)} style={styles.cover}></div>
        <div style={styles.root}>
          <a href="#" style={styles.list}>HOME</a>
          <a href="#" style={styles.list}>BLOG</a>
          <a href="#" style={styles.list}>ABOUT</a>
        </div>
      </div>
    )
  }
}

export default Drawer;
