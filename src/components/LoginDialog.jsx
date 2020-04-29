import React, { useState } from 'react';

const LoginDialog = ({ onLogin, onCancel, }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin({
            email,
            password
        })
    }
    return (<>
        <section className="dialog-header">
            <span className="logo brand"></span>
        </section>
        <section>
            <div className="title">
                <h3>Ingreso</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <label for="password">Password</label>
                <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <div className="actions">
                    <button className="button" type="submit">Ingresar</button>
                    <button className="button" type="button" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </section>
    </>)
}

export default LoginDialog
