import React, { Component } from 'react'
import './style.css';

export default class index extends Component {
  render() {
    return (
      <div className='gameTitle' id={this.props.id}>{this.props.gameTitle}</div>
    )
  }
}
