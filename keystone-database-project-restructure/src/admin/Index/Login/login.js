import React, { Component } from 'react';
import fire from 'constants/Fire';
import './login.scss'
import Button from '@material-ui/core/Button';


//simple login component that handles the given name
class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //using firebase auth, check email and password state variables and verifies if user is in system
  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  //form that handles renders the simple login
  render() {
    return (
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
          
    );
  }
}
export default Login;