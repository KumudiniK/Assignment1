import React from "react";
import {
    BrowserRouter as Router,
    
   } from "react-router-dom";

import './SignUP';
import './App.css';
import './App';


export class NextPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            email: '' ,
            password:'',
            fname:'',
            lname:'',
            cname:'',
            phone:0
        };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePaswdChange = this.handlePaswdChange.bind(this);
    
     this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      
      handleEmailChange(event) {
        this.setState({email: event.target.value});
      }

      handlePaswdChange(event) {
        this.setState({password: event.target.value});
      }

      handleSubmit(event) {
        alert('Verify Your Details:\nFirst Name:\t ' + this.props.fname+
        '\nLast Name:\t ' + this.props.lname+
        '\nCompany Name:\t ' + this.props.cname+
        '\nPhone No: \t' + this.props.phone);
        event.preventDefault();
      }

    render()
    {
       
        return(
            <div className="container"  >
                
               
               <Router> 
               <form >
               <label className="body">Email:</label>      <input type="email"
                id="emm" className="a" value={this.state.value} onChange={this.handleEmailChange} placeholder="Enter Your email address "/>
               <br/><br/>
               <label className="body">Password:</label>       <input type="password"
                className="a"   value={this.state.value} onChange={this.handlePaswdChange} placeholder="Enter Password "/>
               <br/><br/>
                </form>

                 <button className="btn" onClick={this.handleSubmit}>Submit</button>
            </Router>
                

        </div>
        

        );
    }
}
export default NextPage;