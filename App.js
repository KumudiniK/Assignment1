import React from "react";
import {
  BrowserRouter as Router,
   Route,
  Link,
 } from "react-router-dom";

 
import './App.css';
import SignUp from "./SignUP";
import NextPage from "./NextPage";

export class App extends React.Component {



/*nextStep = () => {
 const {step} = this.state; 
    this.setState({
       step: step+1
    });
}*/

  render(){
  return(
    <Router>
    <div className="container">

      <h1 className="body">SignUP</h1>
    </div>
    
    
    <SignUp/>
    <switch>
      </switch>
    </Router>
  );
}

}
export default App;