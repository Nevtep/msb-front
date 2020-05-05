import React from 'react';
import { navigate } from 'gatsby';
import LoginForm from '../components/LoginForm'
import "../assets/scss/main.scss";

const Login = () => (
    <LoginForm onCancel={() => navigate('/')} />
)

export default Login;