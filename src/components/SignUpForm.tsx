import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { navigate, Link } from 'gatsby';
import { SIGNUP_MUTATION } from '../mutations/signUp';
import { CURRENT_USER_QUERY } from '../queries/currentUser';
import AuthWithFacebook from './auth/AuthWithFacebook';
import { Nav } from './StaticNav';

const SignupForm = () => {
    const [signup] = useMutation(
        SIGNUP_MUTATION,
        {
            update: (cache, { data: { signup }}) => {
                cache.writeData({
                    data: { isLoggedIn: true },
                });
                cache.writeQuery({
                    query: CURRENT_USER_QUERY,
                    data: { currentUser: signup.user },
                })
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
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors([]);
        if(password == passwordConfirm) {
            signup({ variables: {
                fullName,
                email,
                password
            }});
        } else {
            setErrors([{ key: 0, message: 'Los password no coinciden.' } ])
        }
    }
    return (<div className="body access-layout">
        <Nav />
        <div className="main">
            <form onSubmit={handleSubmit}>
                <div className="grid-wrapper">
                    <div className="col-6">
                        <span className="logo brand"></span>
                    </div>
                    <div className="col-6">
                        <div className="title">
                            <h3>Registro</h3>
                        </div>
                    </div>
                    <div className="col-3">
                        <label htmlFor="nombre">Nombre Completo</label>
                        <input id="nombre" type="text" value={fullName} onChange={(event) => setFullName(event.target.value)}></input>
                    </div>
                    <div className="col-3">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                    </div>
                    <div className="col-3">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                    </div>
                    <div className="col-3">
                        <label htmlFor="password_conirm">Confirmar Password</label>
                        <input id="password_confirm" type="password" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)}></input>
                    </div>
                    <div className="col-6 actions">
                        {/* recaptcha */}
                        {errors.map(error => <p key={error.key} className="error">{error.message}</p>)}
                        <button className="button" type="submit">Registrarse</button>
                        <p>¿Ya tenés cuenta? <Link to="/login">Ingresá</Link></p>
                        <p>
                            O
                        </p>
                        <AuthWithFacebook />
                    </div>
                </div>
            </form>
        </div>
    </div>)
}

export default SignupForm
