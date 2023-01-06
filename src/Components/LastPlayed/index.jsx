import React, { Component } from 'react'
import './style.css';

export default class index extends Component {
  render() {
    return (
      <div className='lastPlayed'>
        <div className='imgDiv'> 
            <img 
                src={this.props.src}
                alt="img"
                id={this.props.imgId}
            />
        </div>
        <div className='lastText'>
            {this.props.lastPlayText}
        </div>
      </div>
    )
  }
}
