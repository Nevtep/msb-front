import React from 'react';

const LoginDialog = ({ onLogin, onCancel, }) => (<><section className="dialog-header">
    <span className="logo brand"></span>
</section>
<section>
    <div className="title">
        <h3>Ingreso</h3>
    </div>
    <form onSubmit={onLogin}>
        <label for="email">Email</label>
        <input id="email" type="text"></input>
        <label for="password">Password</label>
        <input id="password" type="password"></input>
        <div className="actions">
            <button className="button" type="submit">Ingresar</button>
            <button className="button" type="button" onClick={onCancel}>Cancelar</button>
        </div>
    </form>
</section></>)

export default LoginDialog
