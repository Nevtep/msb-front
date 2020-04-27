import React from 'react';

const LoginDialog = ({ onSignUp, onCancel, }) => (<><section className="dialog-header">
    <span className="logo brand"></span>
</section>
<section>
    <div className="title">
        <h3>Registro</h3>
    </div>
    <form onSubmit={onSignUp}>
        <label for="nombre">Nombre Completo</label>
        <input id="nombre" type="text"></input>
        <label for="email">Email</label>
        <input id="email" type="text"></input>
        <label for="password">Password</label>
        <input id="password" type="password"></input>
        <label for="password_confirm">Confirmar Password</label>
        <input id="password_confirm" type="password"></input>
        <div className="actions">
            <button className="button" type="submit">Registrarse</button>
            {/* <button className="button" type="button" onClick={onCancel}>Cancelar</button> */}
        </div>
    </form>
</section></>)

export default LoginDialog
