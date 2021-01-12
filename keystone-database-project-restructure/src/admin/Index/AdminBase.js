//true ACS parent component that checks if user is logged in, if yes send to suite if not send to login
import React, { Component } from 'react'
import fire from 'constants/Fire'
import Login from './Login/login';
import Admin from './Admin';


export default class AdminBase extends Component {
    constructor(props){
        super(props);
        this.state ={
            user:{},
        }
    }

    //wrapper for authListener
    componentDidMount(){
        this.authListener();
    }

    //check if user is a member logs in successfully to firebase. 
    //if yes load information to local storage so firebase can remember user
    //if logging out remove information from local storage
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({user});
               localStorage.setItem('user',user.uid);
            } else {
                this.setState({user:null});
               localStorage.removeItem('user');
            }
        });
    }

    //if user is found in state, go to ACS, if no login
    render() {
        return (
            <div>
                {this.state.user ? (<Admin />): (<Login />)}
            </div>
        )
    }
}
