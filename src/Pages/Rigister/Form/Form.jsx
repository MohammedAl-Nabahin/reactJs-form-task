import "./style.css";

import React, { Component } from 'react'
import Title from "../../../Components/Title";
import Label from "../../../Components/Label/label";
import Input from "../../../Components/Input/input";
import Button from "../../../Components/Button/button";
import OR from "../../../Components/OR/Or";
import Icon from "../../../Components/Icon/Icon";
import gIcon from '../../../images/gIcon.png';
// import { boolean, object, ref, string } from 'yup';
import * as Yup from 'yup';
// import { Link } from "react-router-dom";
// import { useNavigate  } from 'react-router-dom';



export default class Form extends Component {

    defaults = {
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
        email:"",
        password:"",
        repassword:"",
        checked:false,    
        errors:[],
        emailError:"",
        passwordError:"",  
        repasswordError:"",
        checkError:"",
        matchErr:"",
        goTo:""
    }


    
    Schema = Yup.object().shape({
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
   

    handleSubmit = (e)=> {
      
        e.preventDefault();

        this.Schema.validate({
            email: this.state.email , 
            password: this.state.password,
            repassword: this.state.repassword,
            checked: this.state.checked, 
        } , {abortEarly:false})
        .then(() =>{
            this.setState((prevState) => ({
              
              email: prevState.email ,
             password : prevState.password ,
             repassword : prevState.repassword,
              checked: prevState.checked
          , ...this.defaults }))
          
        }).catch((e)=>{
          this.setState({errors:e});
          this.setState({emailError:e.errors[0]});
          this.setState({passwordError:e.errors[3]});
          this.setState({repasswordError:e.errors[1]});
          this.setState({checkError:e.errors[4]});

          if(this.state.repassword  !== this.state.passwordError ){
            this.setState({matchError: "Passwords Dont Match "});
          }

          if(this.state.passwordError < 8 && this.state.passwordError >1){
              this.setState({passwordError:e.errors[2]});
          }

          if(this.state.errors === null){
            this.setState({goTo:"/LogIn"})
          }
        }); 

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

           
               <Button btn="rigisterBtn" btntype="submit" title="Register Account"
                />
            

            <OR/>
            <div className="logInBtn">
                <Icon iconSrc={gIcon} alt="google" id="LogIngIcon"/>
            <Button btn="logBtn2" btntype="button" title="login" onClick={this.props.switch}/>
            </div>
            
      </form>
    )
  }
}
