import React, { useState } from 'react';

const LoginDialog = ({ onSignUp, onCancel, }) => {
    const [error, setError] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        if(password == passwordConfirm) {
            onSignUp({
                fullName,
                email,
                password
            })
        } else {
            setError('Los password no coinciden.')
        }
    }
    return (<>
        <section className="dialog-header">
            <span className="logo brand"></span>
        </section>
        <section>
            <div className="title">
                <h3>Registro</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <label for="nombre">Nombre Completo</label>
                <input id="nombre" type="text" value={fullName} onChange={(event) => setFullName(event.target.value)}></input>
                <label for="email">Email</label>
                <input id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <label for="password">Password</label>
                <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <label for="password_confirm">Confirmar Password</label>
                <input id="password_confirm" type="password" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)}></input>
                <div className="actions">
                    {error && <div>{error}</div>}
                    <button className="button" type="submit">Registrarse</button>
                    {/* <button className="button" type="button" onClick={onCancel}>Cancelar</button> */}
                </div>
            </form>
    </section>
    </>)
}

export default LoginDialog
