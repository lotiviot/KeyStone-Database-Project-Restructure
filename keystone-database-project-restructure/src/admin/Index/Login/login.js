import React, { Component } from 'react';
import fire from 'constants/Fire';
import './login.scss'
import Button from '@material-ui/core/Button';


//simple login component that handles the given name
// creates class Login with child Component (extends)
class Login extends Component {
  // The constructor method is a special method of a class for creating and initializing an object of that class.
  // This creates class props in class Login and therefore it's child Component
  constructor(props) {
    // super calls the function to the parent object
    super(props);
    //"this" refers to the object it belongs to, in this case Login
    this.login = this.login.bind(this);
    // .bind attaches a handler to an event for the elements (???)
    this.handleChange = this.handleChange.bind(this);
    // rebinds when a change is made to the login info
    this.state = {
      email: '',
      password: ''
    };
    // this creates the login info input
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // e is event so event.whatevs is the element that initatied the event

  //using firebase auth, check email and password state variables and verifies if user is in system
  // makes class login, taking paramater event
  login(e) {
    // cancels event if possible meaning event defualt action will not happen
    e.preventDefault();
    // auth proccess then error is caught if auth fails
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  //form that handles renders the simple login
  render() {
    return (
        // all of this jsut make the login UI and takes the input
        <div className="login-main-flex">
          <form className="admin-login-form">
            <h3>Keystone Adult Day Program</h3>
            <div className="field">
              <label>Email</label>
              <input value={this.state.email} 
                onChange={this.handleChange} 
                type="email" 
                name="email" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                className="backend-field"
              />
            </div>
            

           
            <div className="field">
              <label>Password</label>
              <input value={this.state.password} 
                onChange={this.handleChange} 
                type="password" 
                name="password" 
                id="exampleInputPassword1"
                placeholder="Password"
                className="backend-field" 
              />
            </div>
            <Button variant="contained" color="white" className="button" type="submit" onClick={this.login}>Login</Button>
          </form>
        </div>
        // Button just makes button using Material UI
    );
  }
}
export default Login;