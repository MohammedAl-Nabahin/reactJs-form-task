import React, { Component } from 'react'
import './style.css'

export default class index extends Component {
  render() {
    return (
      <div className='header'>
        <div className='profileInfo'>
            <div id='pictext'>{this.props.headerText}</div>
            <div><img src={this.props.src} 
            alt="profile" 
            id='profilePic'
            />
            </div>
        </div>
      </div>
    )
  }
}
