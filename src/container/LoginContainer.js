import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class LoginContainer extends Component {
    render(){
        return(
            <Redirect to="http://localhost:8085/api/login"/>
        );
    }
}

export default LoginContainer;
