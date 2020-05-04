import React, { useState } from 'react';
import AuthWithFacebook from './auth/AuthWithFacebook';

import { useMutation } from '@apollo/react-hooks';
import { navigate, Link } from 'gatsby';
import { CURRENT_USER_QUERY } from '../queries/currentUser';
import { LOGIN_MUTATION } from '../mutations/login';

import { Nav } from './StaticNav';

const LoginDialog = ({ onCancel, }) => {
    const [login, { called, loading }] = useMutation(
        LOGIN_MUTATION,
        {
            update: (cache, { data: { login }}) => {
                cache.writeData({
                    data: { isLoggedIn: true },
                });
                cache.writeQuery({
                    query: CURRENT_USER_QUERY,
                    data: { currentUser: login.user },
                });
            },
            onCompleted: (result) => {
                console.log(result);
                navigate('/app')
            },
            onError: (error) => {
                const newErrors = error.graphQLErrors.map(error => ({ message: error.message, key: error.path }));
                setErrors(newErrors);
            }
        }
    )
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors([]);
        login({ variables: {
            email,
            password
        }})
    }
    return (<div className="body access-layout">
        <Nav />
        <div className="main">

            <form onSubmit={handleSubmit}>
                <div className="grid-wrapper">
                    <div className="col-6">
                        <span className="logo brand"></span>
                    </div>
                    <section className="login col-6">
                        <div className="title">
                            <h3>Ingreso</h3>
                        </div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                            {/* recaptcha */}
                            {errors.map(error => <p key={error.key} className="error">{error.message}</p>)}
                            <div className="actions">
                                <button className="button" type="submit" disabled={called && loading}>Ingresar</button>
                                <button className="button" type="button" onClick={onCancel} disabled={called && loading}>Cancelar</button>
                            </div>
                            <p>¿No tenés cuenta? <Link to="/signup">Registrate</Link></p>
                            <p className="divider">
                                O
                            </p>
                            <AuthWithFacebook />
                    </section>
                </div>
            </form>
        </div>
    </div>)
}

export default LoginDialog
