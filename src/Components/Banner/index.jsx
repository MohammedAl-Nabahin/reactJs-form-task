import React, { Component } from 'react';
import './style.css';
import man from '../../images/man.png';
import GameTitle from '../../Components/GameTitle/index'

export default class index extends Component {
  render() {
    return (
      <div className='banner'>
        <div className='componentTitle'>
          <GameTitle gameTitle="New Games" id="newGames"/>
        </div>
        <div className='games scroll'>
          <div className='bannerImage1'>
            <div className='bannerText'>
                {this.props.bannertext1}
            </div>
          </div>
          

          <div className='bannerImage2'>
            <img src={man} alt="man" id='man'/>
            <div className='bannerText'>
                {this.props.bannertext2}
            </div>
          </div>

          <div className='bannerImage3'>
            <div className='bannerText' id='rightText'>
                {this.props.bannertext3}
            </div>
          </div>

          <div className='bannerImage3'>
            <div className='bannerText' id='rightText'>
                {this.props.bannertext3}
            </div>
          </div>

        </div>  
      </div>
    )
  }
}
