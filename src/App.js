import './App.css';
import Rigister from '../src/Pages/Rigister';
import LogIn from '../src/Pages/LogIn'
import { Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    showComponent1: true,
 
  };

  goToLogIn= () =>{
      this.setState({showComponent1:true});
  }

  goToRigister=()=>{
    this.setState({showComponent1:false});
  }

  goToHome=()=>{
    this.setState({showComponent1:true});
  }




  render() {
    return (
        this.state.showComponent1 ?   <Home/> : <LogIn goToRigister={this.goToRigister} goToHome={this.goToHome}/> 
        )
  }
}
