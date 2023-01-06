import React, { Component } from 'react'
import GameTitle from '../../Components/GameTitle/index';
import LastPlayed from '../../Components/LastPlayed/index';
import lastImg1 from '../../images/gameIcon1.svg';
import lastImg2 from '../../images/gameIcon2.svg';
import lastImg3 from '../../images/gameIcon3.svg';
import lastImg4 from '../../images/gameIcon4.svg';
import cup from '../../images/goldcup.svg';
import friends from '../../images/friends.png';
import green from '../../images/green.png'
import './style.css'


export default class index extends Component {
  render() {
    return (
      <div className='thirdSection'>
        <div className='lastP'>
            <GameTitle gameTitle="last played"/>
            <LastPlayed 
                src={lastImg1} 
                imgId="lastimg1"
                lastPlayText="Hogwarts Legacy 50%"
            />
            <LastPlayed 
                src={lastImg2} 
                imgId="lastimg2"
                lastPlayText="God Of War: Ragnarök 72.5%"
            />
            <LastPlayed 
                src={lastImg3} 
                imgId="lastimg3"
                lastPlayText="Crash Bandicoot N. Sane Trilogy 34%"
            />
            <LastPlayed 
                src={lastImg4} 
                imgId="lastimg4"
                lastPlayText="Dying Light 2 Stay Human 100%"
            />
        </div>

        <div className='recentP'>
              <GameTitle gameTitle="most recent trophy" id="recentTitle"/>
            <div className='recent'>
                <div className='topContent'>
                 
                        <div className='top'>
                            <h5 className='h5'>PERFECT KILL STREAK</h5>
                            <span>You are in the 0.5%</span>
                        </div>
                        <div className='imgs'>
                            <img src={cup} alt="cup" id='cup'/>
                            <img src={green} alt="green" id="green"/>
                            </div>
                </div> 
                <div className='bot'>
                    <h5>ASSASSIN'S CREED ODYSSEY</h5>
                    <span>last played: 34 hours ago</span>
                </div>
            </div> 
           
        </div>

        <div className='friends'>
            <img src={friends} alt="friends"/>
        </div>
      </div>
    )
  }
}
