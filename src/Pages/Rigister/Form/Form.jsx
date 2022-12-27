import "./style.css";

import React, { Component } from 'react'
import Title from "../../../Components/Title";
import Label from "../../../Components/Label/label";
import Input from "../../../Components/Input/input";
import Button from "../../../Components/Button/button";
import OR from "../../../Components/OR/Or";
import Icon from "../../../Components/Icon/Icon";
import gIcon from '../../../images/gIcon.png';

export default class Form extends Component {

    defaults = {
        email:"",
        password:"",
        repassword:"",
        checked:false,
        disabled:false,
        errors:""   
    }

    state = {
        email:"",
        password:"",
        repassword:"",
        checked:false,    
        disabled:false,
        errors:""    
    }

   

    handleSubmit = (e)=> {
        if(this.validatePassword === true){
        e.preventDefault();
        this.setState((prevState) => ({
             email: prevState.email ,
            password : prevState.password ,
            repassword : prevState.repassword,
             checked: prevState.checked
         , ...this.defaults }))
        }else{
            this.setState({disabled: true });
        }

        
    }



    
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
            </div>

            <div className="password1-sec">
                <Label for="password" labelTitle="Create password*"/>
                <Input type="password" 
                placeholder="Password" 
                id="password"
                handle={this.handleChangeInput}
                value={this.state.password}
                />
            </div>

            <div className="password2-sec">
                <Label for="repassword" labelTitle="Repeat password*"/>
                <Input type="password" name="password"
                placeholder="Repeat password" 
                id="repassword"
                handle={this.handleChangeInput}
                value={this.state.repassword}
                onBlur={this.handleBlur}
                // error="The Password Dont Match"
                />
                <div className="error">{this.state.errors}</div>
            </div>

            <div className="checkbox-sec">
                <Input type="checkbox"  id="checked" name="check"
                handle={this.handleChangeInput}
                checked={this.state.checked}
                // error=""
                />
                <Label for="checked" labelTitle="I agree to terms & conditions"/>
            </div>

           
               <Button btn="rigisterBtn" btntype="submit" title="Register Account"
               disabled={this.state.disabled} 
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
