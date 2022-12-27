import React, { Component } from 'react';
import './style.css';
import Side from '../../Components/Side/index';
import Logo from '../../Components/Logo/logo';
import logo from '../../images/blueLogo.png';
import Quote from '../../Components/Quote/index'
import oldJoystic from '../../images/oldJoystic.png';
import Form from './Form/Form';
export default class index extends Component {
  render() {
    return (
      <div className='logIn'>
            <Side side="logLeftside">
                <div>
                    <Logo logo="logo" imgSrc={logo}/>
                </div>

                <div className='leftsideContnet'>
                <Quote class="LogQuote" coma="“" 
                comaStyle="logcoma" pClass="Logauthor" Classname="logtextClass"
                p1="logp1" p2="logp2" text="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them." 
                author="Hideo Kojima" 
                alt="corner"  ImgSrc={oldJoystic} id="ogJoystic"/>
                </div>
            </Side>
        <div className='rightSide'>
            <Form goToRigister={this.props.goToRigister}/>
        </div>

        </div>
    )
  }
}
