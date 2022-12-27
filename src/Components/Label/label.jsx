import React, { Component } from 'react'
import "./style.css";


export default class label extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.for} className="mylabel" id={this.props.id}>
            {this.props.labelTitle}
        </label>
      </div>
    )
  }
}
