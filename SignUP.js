import React from "react";
import {
    BrowserRouter as Router,
     Route,
    Link,
   } from "react-router-dom";
   
import './App.css';
import './App';
import NextPage from './NextPage';


export class SignUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            fname:'',
            lname:'',
            cname:'',
            phone:'+91'
        };
    
        this.handleFnameChange = this.handleFnameChange.bind(this);
        this.handleLnameChange = this.handleLnameChange.bind(this);
        this.handleCnameChange = this.handleCnameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleFnameChange(event) {
        this.setState({fname: event.target.value});
      }

      handleLnameChange(event) {
        this.setState({lname: event.target.value});
      }

      handleCnameChange(event) {
        this.setState({cname: event.target.value});
      }

      handlePhoneChange(event) {
        this.setState({phone: event.target.value});
      }
      
    render()
{
    return (
            <Router>
            <div className="container"  >
            
            <form>
                      <label className="body">First Name:</label>      <input type="text"
                       id="fn" className="a" value={this.state.fname} onChange={this.handleFnameChange}  placeholder="Enter Your First Name "/>
                      <br/><br/>
                      <label className="body">Last Name:</label>       <input type="text" 
                      id="ln"  className="a"  value={this.state.lname} onChange={this.handleLnameChange}   placeholder="Enter Your Last Name "/>
                      <br/><br/>
      
                      <label className="body">Company Name:</label>      <input type="text" 
                      id="cn" className="a" value={this.state.cname} onChange={this.handleCnameChange} placeholder="Enter Your Company Name "/>
                      <br/><br/>
                      <label className="body">Phone Number:</label>       <input type="text" 
                       id="ph" className="a" value={this.state.phone} onChange={this.handlePhoneChange} placeholder="+91 "/>
                        <br/><br/>
                        
                    </form>
          
                 <button className="b-link"><Link to="/next">Next</Link></button>
          
            <Route  path="/next" >
           <NextPage fname={this.state.fname} lname={this.state.lname} phone={this.state.phone} cname={this.state.cname} />
           </Route>
        
        </div>
        </Router>
        
    );
}   
    
}
export default SignUp;