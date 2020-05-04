import React from 'react';
import { navigate } from 'gatsby';
import LoginForm from '../components/LoginForm'

const Login = () => (
    <LoginForm onCancel={() => navigate('/')} />
)

export default Login;