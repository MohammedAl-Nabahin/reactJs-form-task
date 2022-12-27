import React, { Component } from 'react';
import Side from '../../Components/Side';
import Logo from '../../Components/Logo/logo';
import logo from '../../images/newLogo.svg';
import dots from '../../images/dots.png';
import corner from '../../images/corner.png';
import Quote from '../../Components/Quote';
import Form from './Form/Form';
import "./style.css";

export default class index extends Component {
  render() {
    return (
        <div className='rigister'>
            <Side side="side">
                <div>
                    <Logo logo="logo" imgSrc={logo} id="logoImg"
                    logoTitle="" logoTitleClass="gamers"/>
                </div>
                <div className='dots'>
                    <img src={dots} alt="dots" id='dot'/>
                </div>

                <div className='content'>
                <Quote class="quote" coma="“" 
                comaStyle="coma" pClass="author" Classname="textClass"
                p1="p1" p2="p2" text="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them." 
                author="Hideo Kojima" ImgSrc={corner}
                alt="corner" id="corner"/>
                </div>
            </Side>
        <div className='rightSide'>
            <div className='BackSec'>
                <span id='back'> 
                   &#60;
                 </span>
                  Back
            </div>
            <Form switch={this.props.switch}/>
        </div>

        </div>
        
    )
  }
}
