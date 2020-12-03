import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Link } from 'gatsby';
import inversores from '../assets/images/inversores.png';

export const Invest: React.FC<RouteComponentProps> = () => <section id="inversores" className="main inversores">
<div className="grid-wrapper">
    <div className="col-6">
        <header className="major">
            <h2>Inversores</h2>
        </header>
        <p>En escazas ocasiones permitimos a un cupo limitado de personas, acceder a invertir con nosotros. Los elegidos podrán acceder a importante rentabilidad mensual gracias a la ayuda de la inversión directa de nuestros Master Traders.  Puedes inscribirte y nos comunicaremos en el momento que se abra el acceso a la inversiones.</p>
        <ul className="actions">
            <li><a href="https://t.me/SOPORTE_MSB" target="_blank" className="button">Conviértete en Inversor</a></li>
        </ul>
    </div>
    <div className="col-6">
        <span className="image fit"><img src={inversores} alt="" /></span>
    </div>
</div>
</section>