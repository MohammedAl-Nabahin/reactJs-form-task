import "./style.css";

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

import { Link , Navigate} from 'react-router-dom';
import React, { Component } from 'react'
import * as Yup from 'yup';
import axios from 'axios';


export default class Form extends Component {

    defaults = {
        email:"",
        password:"",
        errors:[],
        emailError:"",
        passwordError:"",
        submitted:"",
        goToRigister:""
    }

    state = {
        email:"",
        password:"",
        errors:[],
        emailError:"",
        passwordError:"",
        submitted:"",
        goToRigister:"",
        isLoading:false
    }

   
 
    Schema = Yup.object().shape({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(7, 'Password must be at least 7 characters long')
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
        }).finally(async()=>{
          if(this.state.errors.length === 0){
           // console.log(this.state.errors.length)
           //     this.setState({go:true})
           try{
             this.setState({isLoading:true});
           await axios.post("https://react-tt-api.onrender.com/api/users/login" , {
             email : this.state.email,
             password : this.state.password
           }
           )
         }catch(e){
           console.log(e)
           this.setState({apiError:e})
         }finally{
             this.setState({postApi:true})
             this.setState({isLoading:false});
         }   
          }        
         }); 
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

            {  this.state.postApi ?
              <Navigate to={"/Home"}> 
                <Button btn="logBtn" btntype="submit" title="LogIn"
               disabled={this.state.disabled}  handle={this.props.goto}
              onClick={this.props.goToHome} id="logBtn"  /> 
              </Navigate> : 
               <Button btn="logBtn" btntype="submit" title="LogIn"
               disabled={this.state.disabled}  handle={this.props.goto}
              onClick={this.props.goToHome} id="logBtn"  /> 
          }
             {this.state.isLoading ? "Loading...." : ""}

    
            
              <Link to={"/Rigister"}>
           <span className="link">
           Don’t have an account?<button id="rigBtn" onClick={this.props.goToRigister} >Register</button>
            </span> 
            </Link>
         
         
      </form>
    )
  }
}


