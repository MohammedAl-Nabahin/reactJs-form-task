import React, { Component } from 'react'
import "./style.css";

export default class input extends Component {
  render() {
    return (
      <div className='input'>
        <input type={this.props.type} 
          name={this.props.name}
            placeholder={this.props.placeholder}
            id={this.props.id} 
            onChange={this.props.handle} 
            value={this.props.value}
            checked={this.props.checked}
            onBlur={this.props.onBlur}
            onClick={this.props.onClick}
            required
            // {...<div className="warning">{this.props.error}</div>}
        />
        <span >{this.props.error}</span>
      </div>
    )
  }
}
