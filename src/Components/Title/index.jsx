import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div className={this.props.formTitle}>
        <h1 id={this.props.id1}>{this.props.h1}</h1>
        <p id={this.props.id2}>{this.props.p}</p>
      </div>
    )
  }
}
