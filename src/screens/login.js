import React from "react";
import {Link} from "react-router-dom";
import './sign.css'
const Login = () => {
return (
	<div>
	  <hgroup className="heading">
                <h5 className="major">Make Your Day Productive with _____</h5>
                </hgroup>

                <form className="sign-up">
                    <h1 className="sign-up-title">Sign up in seconds</h1>
                    <input type="text" className="sign-up-input" placeholder="What's your email?" autofocus />
                    <input type="password" className="sign-up-input" placeholder="Type your password"/>
                    <input type="submit" value="Sign me up!" className="sign-up-button" />
                   
                    </form>
	</div>
);
};

export default Login;
