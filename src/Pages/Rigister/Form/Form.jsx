import "./style.css";

import Title from "../../../Components/Title";
import Label from "../../../Components/Label/label";
import Input from "../../../Components/Input/input";
import Button from "../../../Components/Button/button";
import OR from "../../../Components/OR/Or";
import Icon from "../../../Components/Icon/Icon";
import gIcon from '../../../images/gIcon.png';


import React, { Component } from 'react';
import * as Yup from 'yup';
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';




export default class Form extends Component {

    defaults = {
      name:"",
        email:"",
        password:"",
        repassword:"",
        checked:false,
        disabled:false,
        errors:[],
        emailError:"",
        passwordError:"",  
        repasswordError:"",
        checkError:"",
        goTo:""
    }

    state = {
        name:"",
        email:"",
        password:"",
        repassword:"",
        checked:false,    
        errors:[],
        nameError:"",
        emailError:"",
        passwordError:"",  
        repasswordError:"",
        checkError:"",
        matchErr:"",
        goTo:"",
        go:false,
        apiError:"",
        postApi:false
    }


    
    Schema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
      repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match')
        .required('Repeat password is required'),
        checked : Yup.boolean().oneOf([true],"You need to agree on terms and condetions").required()
      }
    );
   


   

    handleSubmit = async (e)=> {

        e.preventDefault();

        this.Schema.validate({
            name: this.state.name,
            email: this.state.email , 
            password: this.state.password,
            repassword: this.state.repassword,
            checked: this.state.checked, 
        } , {abortEarly:false})
        .then(() =>{
            this.setState((prevState) => ({
              name: prevState.name,
              email: prevState.email ,
             password : prevState.password ,
             repassword : prevState.repassword,
              checked: prevState.checked
          , ...this.defaults}))

        }).catch((e)=>{
          this.setState({errors: e.errors});
          console.log(e.errors)
          this.setState({nameError:e.errors[0]})
          this.setState({emailError:e.errors[1]});
          this.setState({passwordError:e.errors[4]});
          this.setState({repasswordError:e.errors[2]});
          this.setState({checkError:e.errors[5]});

          if(this.state.repassword  !== this.state.passwordError ){
            this.setState({matchError: "Passwords Dont Match "});
          }
          if(this.state.passwordError < 8 && this.state.passwordError >1){
              this.setState({passwordError:e.errors[2]});
          } 
        }).finally(()=>{
         if(this.state.errors.length === 0){
              this.setState({go:true})
         }
          
        }) 

       
        if(this.state.go){
          console.log(this.state.go, this.state.postApi)
          try{
      const req =  await axios.post("https://react-tt-api.onrender.com/api/users/signup" , {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password
          }
          )
        }catch(e){
          console.log(e)
          this.setState({apiError:e})
        }finally{
            this.setState({postApi:true})
        }
      }
      

        
    };


    
  validatePassword = () => {
    if (this.state.password !== this.state.repassword) {
      this.setState({disabled:true});
      return false;
    }
    this.setState({disabled:false});
    return true;
  };

  handleBlur = (event) => {
    const { value } = event.target;
    const isValid = this.validatePassword(value);
    this.setState({ errors: isValid ? '' : 'Passwords dont match' });
  };


  handleChangeInput = (e) => {
      const { value, id } = e.target;
      this.setState({ [id]: value });
      this.setState({checked: e.target.checked })
    };


   

  render() {
    return (
     
      <form action="" className="rigisterForm" onSubmit={(e) => this.handleSubmit(e)}>

      
        <Title  formTitle="formTitle" id1="hTitle" h1="Register Individual Account!"  
            id2="pTitle" p="For the purpose of gamers regulation, your details are required." />
         

          <div className="email-sec">
                <Label for="name" labelTitle="Your name*"/>
                <Input type="text" 
                placeholder="Enter Your Name" 
                id="name"
                handle={this.handleChangeInput}
                value={this.state.name}
                />
                 <div className="error">{(this.state.nameError)}</div>
            </div>  
          
          <div className="email-sec">
                <Label for="emailIn" labelTitle="Email address*"/>
                <Input type="email" 
                placeholder="Enter email address" 
                id="email"
                handle={this.handleChangeInput}
                value={this.state.email}
                />
                 <div className="error">{(this.state.emailError)}</div>
            </div>
           

            <div className="password1-sec">
                <Label for="password" labelTitle="Create password*"/>
                <Input type="password" 
                placeholder="Password" 
                id="password"
                handle={this.handleChangeInput}
                value={this.state.password}
                />
                    <div className="error">{(this.state.passwordError)}</div>
            </div>

            <div className="password2-sec">
                <Label for="repassword" labelTitle="Repeat password*"/>
                <Input type="password" name="password"
                placeholder="Repeat password" 
                id="repassword"
                handle={this.handleChangeInput}
                value={this.state.repassword}
                onBlur={this.handleBlur}
                />
                  <div className="error">{(this.state.repasswordError)}</div>
            </div>
          
            <div className="checkbox-sec">
                <Input type="checkbox"  id="checked" name="check"
                handle={this.handleChangeInput}
                checked={this.state.checked}
                />
                <Label for="checked" labelTitle="I agree to terms & conditions"/>
            </div>

           
            <div className="error">{(this.state.checkError)}</div>


            {console.log(this.state.postApi)} 
             {  this.state.postApi ?
              <Navigate to={"/Home"}> 
                  <Button btn="rigisterBtn" btntype="submit" title="Register Account"          
                  />
              </Navigate> : 
                <Button btn="rigisterBtn" btntype="submit" title="Register Account"          
                />
          }
             {/* <span>{this.state.apiError}</span> */}
            <OR/>
            <div className="logInBtn">
                <Icon iconSrc={gIcon} alt="google" id="LogIngIcon"/>
                <Link to={"/"}>
                   <Button btn="logBtn2" btntype="button" title="login" onClick={this.props.switch}/>
                </Link>
            </div>
      </form>
    )
  }
}
