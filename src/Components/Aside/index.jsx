import React, { Component } from 'react'
import Icon from '../Icon/Icon'
import play from '../../images/logo.svg';
import heart from '../../images/like.svg';
import settings from '../../images/Settings.svg';
import puzzle from '../../images/Puzzle.svg';
import moon from '../../images/Moon.svg';
import Sun from '../../images/Sun-one.svg';

import './style.css';


export default class index extends Component {
  render() {
    return (
      <div className='aside'>
            <div>
               <Icon 
                    iconSrc={play} 
                    className="playIcon"
                    alt="play"
                    id="playIconID"
               /> 
            </div>

            <div className='midAside'>
               <Icon 
                    iconSrc={heart} 
                    className="heartIcon"
                    alt="like"
                    id="heartIconID"
                /> 
               <Icon 
                    iconSrc={settings} 
                    className="settingsIcon"
                    alt="settings"
                    id="settingsIconID"
                /> 
               <Icon 
                    iconSrc={puzzle} 
                    className="puzzleIcon"
                    alt="puzzle"
                    id="heartIconID"
                /> 
            </div>

            <div className='chngMode'>
               <div className='mode'>
                    <Icon 
                        iconSrc={moon} 
                        className="moonIcon"
                        alt="moon"
                        id="moonIconID"
                    /> 
                    <Icon 
                        iconSrc={Sun} 
                        className="sunIcon"
                        alt="sun"
                        id="sunIconID"
                    /> 
               </div>
            </div>
      </div>
    )
  }
}
