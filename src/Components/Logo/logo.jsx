import React, { Component } from 'react'

export default class logo extends Component {
  render() {
    return (
      <div className={this.props.logo}>
        <img src={this.props.imgSrc} alt="logo" id={this.props.id}/>
        <p className={this.props.logoTitleClass}>
          {this.props.logoTitle}
        </p>
      </div>
    )
  }
}
