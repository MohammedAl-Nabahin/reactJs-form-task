import "./style.css";

import React, { Component } from 'react'
import Title from "../../../Components/Title";
import Label from "../../../Components/Label/label";
import Input from "../../../Components/Input/input";
import Button from "../../../Components/Button/button";
import OR from "../../../Components/OR/Or";
import Icon from "../../../Components/Icon/Icon";
import gIcon from '../../../images/gIcon.png';
import tIcon from '../../../images/tIcon.png';
import inIcon from '../../../images/inIcon.png';
import gitIcon from '../../../images/gitIcon.png';

export default class Form extends Component {

    defaults = {
        email:"",
        password:"",
        errors:""   
    }

    state = {
        email:"",
        password:"",
        errors:""    
    }

   

    handleSubmit = (e)=> {
             e.preventDefault();
        this.setState((prevState) => ({
             email: prevState.email ,
            password : prevState.password
         , ...this.defaults }))
    }

    handleChangeInput = (e) => {
        const { value, id } = e.target;
        this.setState({ [id]: value });
      };

  render() {
    return (
      <form action="" className="logInForm" onSubmit={(e) => this.handleSubmit(e)}  >
        <Title  formTitle="logformTitle" id1="loghTitle" h1="Join the game!"  
            id2="logpTitle" p="Go inside the best gamers social network!" />
          
      <div className="social">
        <Icon iconSrc={gIcon} alt="google" id="gLogIcon" className="icons"/>
        <Icon iconSrc={tIcon} alt="twitter" id="tIcon" className="icons"/>
        <Icon iconSrc={inIcon} alt="linkedIn" id="inIcon" className="icons"/>
        <Icon iconSrc={gitIcon} alt="git"  id="gitIcon" className="icons"/>
      </div>

      <OR/>

          <div className="log-email-sec">
                <Label for="emailIn" labelTitle="Email address*"/>
                <Input type="email" 
                placeholder="Enter email address" 
                id="email"
                handle={this.handleChangeInput}
                value={this.state.email}
                // error=""
                />
            </div>

            <div className="log-password1-sec">
                <Label for="password" labelTitle="Enter password*"/>
                <Input type="password" 
                placeholder="•••••••••" 
                id="password"
                handle={this.handleChangeInput}
                value={this.state.password}
                // error="The Password Dont Match"
                />
            </div>

      <Button btn="logBtn" btntype="submit" title="LogIn"
               disabled={this.state.disabled}  handle={this.props.goto}
                />
           <span className="link">
           Don’t have an account?<button id="rigBtn" onClick={this.props.goToRigister} >Register</button>
            </span> 

         
         
      </form>
    )
  }
}
