import "./style.css";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
import * as Yup from 'yup';

export default class Form extends Component {

    defaults = {
        email:"",
        password:"",
        errors:[],
        emailError:"",
        passwordError:""
    }

    state = {
        email:"",
        password:"",
        errors:[],
        emailError:"",
        passwordError:""
    }

   
 
    Schema = Yup.object().shape({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
      }
    );
   

    handleSubmit = (e)=> {
      
        e.preventDefault();

        this.Schema.validate({
            email: this.state.email , 
            password: this.state.password,
        } , {abortEarly:false})
        .then(() =>{
            this.setState((prevState) => ({
              
              email: prevState.email ,
             password : prevState.password 
          , ...this.defaults }))
          
        }).catch((e)=>{
          this.setState({errors:e});
          this.setState({emailError:e.errors[0]});
          this.setState({passwordError:e.errors[2]});

          if(this.state.passwordError < 8 && this.state.passwordError >1){
              this.setState({passwordError:e.errors[2]});
          }

          if(this.state.errors === null){
            this.setState({goTo:"/LogIn"})
          }
        }); 
        this.props.history.push('/');
    };


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
            <div className="error">{(this.state.emailError)}</div>
            </div>

            <div className="log-password1-sec">
                <Label for="password" labelTitle="Enter password*"/>
                <Input type="password" 
                placeholder="•••••••••" 
                id="password"
                handle={this.handleChangeInput}
                value={this.state.password}
                />
            </div>
            <div className="error">{(this.state.passwordError)}</div>


     <Button btn="logBtn" btntype="submit" title="LogIn"
               disabled={this.state.disabled}  handle={this.props.goto}
              onClick={this.props.goToHome}  /> 
           <span className="link">
           Don’t have an account?<button id="rigBtn" onClick={this.props.goToRigister} >Register</button>
            </span> 

         
         
      </form>
    )
  }
}


