import React, { Component } from 'react'
import axios from "axios"

export default class index extends Component {

        state = {
            profileData:[]
        }

    //  token = localStorage.getItem('token');
       
   async componentDidMount(){
        const res = await axios.get("https://react-tt-api.onrender.com/api/users/profile" , 
        {
            headers: {
            // Authorization: `Bearer ${token}`
            }
        }
        ).then(res => {
            this.setState({ profileData: res.data });
            }).catch((error) => {
                // localStorage.removeItem('token');
                this.props.history.push('/login');
                });         
    }
  render() {


    return (
      <div>
            
                <div>
                    {this.state.profileData}
                </div>
            
      </div>
    )
  }
}
