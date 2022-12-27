import React, { Component } from 'react'

export default class button extends Component {
  render() {
    return (
      <div>
        <button className={this.props.btn} type={this.props.btntype} 
        onClick={this.props.onClick}
        disabled={this.props.disabled}>
            {this.props.title}
        </button>
      </div>
    )
  }
}
