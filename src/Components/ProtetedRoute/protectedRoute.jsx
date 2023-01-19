import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../../Pages/Home/index'

export default class protectedRoute extends Component {
  render() {
    return (
      <div>
        {this.props.isAuth ? 
        <>
         <Home />
        </> :
        <Navigate to={"/login"}/>}
      </div>
    )
  }
}
