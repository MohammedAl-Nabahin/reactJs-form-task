import React, { Component } from 'react'
// import Logo from '../Logo';
// import Quote from '../Quote';

export default class index extends Component {
  render() {
    return (
      <div className={this.props.side}>
            {this.props.children}
      </div>
    )
  }
}
