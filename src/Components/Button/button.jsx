import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class button extends Component {
  render() {
    return (
      <div>
        <button className={this.props.btn} type={this.props.btntype} 
        onClick={this.props.onClick}
        disabled={this.props.disabled} id={this.props.id}>
            {this.props.title}
        </button>
      </div>
    )
  }
}
