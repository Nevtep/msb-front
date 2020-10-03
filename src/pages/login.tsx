import React from 'react';
import { navigate } from 'gatsby';
import LoginForm from '../components/LoginForm'
import "../assets/scss/main.scss";

const Login = () => (<div className="marketing-main">
        <LoginForm onCancel={() => navigate('/')} />
    </div>)

export default Login;