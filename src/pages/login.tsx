import React from 'react';
import { navigate } from 'gatsby';
import LoginForm from '../components/LoginForm'

const Login = () => (<div className="marketing-main">
        <LoginForm onCancel={() => navigate('/')} />
    </div>)

export default Login;