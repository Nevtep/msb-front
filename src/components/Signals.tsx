import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Link } from 'gatsby';

const NotSubscribed = () => (<section id="senales" className="main gradient-section">
<div className="grid-wrapper">
    <div className="col-12">
        <header className="major">
            <h2>Señales Binarias</h2>
        </header>
        <h3>Más de cincuenta señales diarias</h3>
        <p>Diariamente obtendrás señales de ingreso al mercado de opciones binarias, exclusiva información que facilitara tu operatoria. También tendrás accesos a video llamadas para responder dudas y facilitar el camino al éxito y a una nueva forma de vida.</p>
        <ul className="actions">
            <li><Link to="/app/billing" className="button">Subscríbete</Link></li>
        </ul>
    </div>
</div>
</section>);

export const Signals: React.FC<RouteComponentProps> = () => <NotSubscribed />