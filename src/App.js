import './App.css';
import Rigister from '../src/Pages/Rigister';
import LogIn from '../src/Pages/LogIn'
import { Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home'
import Profile from '../src/Pages/Profile/index'

import React, { Component } from 'react'

export default class App extends Component {


  render() {
    return (
        <div className="App">
        <Routes>
          <Route path="/" element={<LogIn/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Rigister" element={<Rigister/>} />
          <Route path="Home/profile" element={<Profile/>} />
        </Routes>
      </div>
        )
  }
}
