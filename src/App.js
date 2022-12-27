import './App.css';
import Rigister from '../src/Pages/Rigister';
import LogIn from '../src/Pages/LogIn';

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    showComponent1: true
  };

  goToLogIn= () =>{
      this.setState({showComponent1:false});
  }

  goToRigister=()=>{
    this.setState({showComponent1:true});
  }


  render() {
    return (
        this.state.showComponent1 ? <Rigister switch={this.goToLogIn} /> : <LogIn goToRigister={this.goToRigister}/>
    )
  }
}
