import React, { Component } from 'react'
import Aside from '../../Components/Aside'
import Banner from '../../Components/Banner/index'
import Header from '../../Components/Header/index'
import profilePic from '../../images/profilePic.png'
import ThirdSection from '../../Components/ThirdSection/index'
import './style.css';

export default class index extends Component {
  render() {
    return (
      <div className='home2'>
        <div className='aside2'>
          <Aside/>
        </div>  
        <div className='main'>
          <Header 
          headerText="Welcome Back Jenny!"
          src={profilePic}
          />
          <Banner/>
          <ThirdSection/>
        </div>
      </div>
    )
  }
}
