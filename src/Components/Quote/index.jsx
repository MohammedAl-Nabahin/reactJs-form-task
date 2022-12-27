import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div className={this.props.class}>

          <div className={this.props.Classname}>   
          <span className={this.props.comaStyle}>{this.props.coma}</span>
              <p className={this.props.pClass} id={this.props.p1}>
         
                {this.props.text}
                </p>
          </div>  

          <p className={this.props.pClass} id={this.props.p2}>{this.props.author}</p>

        <div>
        <img src={this.props.ImgSrc} alt={this.props.alt} id={this.props.id}/>
        </div>

      </div>
    )
  }
}
