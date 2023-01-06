import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    return (
      <div>
        <img 
          src={this.props.iconSrc} 
          className={this.props.className} 
          alt={this.props.alt} 
          id={this.props.id}
        />
      </div>
    )
  }
}
