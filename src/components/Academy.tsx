import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Link } from 'gatsby';

export const Academy: React.FC<RouteComponentProps> = () => <section id="academia" className="main academia">
<div className="grid-wrapper">
    <div className="col-6">
        <ul className="major-icons">
            <li><span className="icon style1 major indicadores"></span></li>
            <li><span className="icon style2 major analisis-tecnico"></span></li>
            <li><span className="icon style3 major psicotrading"></span></li>
            <li><span className="icon style4 major gestion"></span></li>
        </ul>
    </div>
    <div className="col-6">
        <header className="major">
            <h2>Academia</h2>
        </header>
        <ul className="checkmarks">
            <li>Rentabilidad de por vida.</li>
            <li>Eleva tu nivel de trading al máximo.</li>
            <li>Aprende exclusivas estrategias con un 90 % de efectividad.</li>
            <li>Domina el mercado como un trader profesional.</li>
            <li>Oportunidad exclusiva para obtener nuestros resultados.</li>
        </ul>
        <p>En nuestra Academia accederás a información exclusiva, te guiaremos paso a paso para que entiendas el manejo de herramientas necesarias para convertirte en inversor profesional y exitoso. Accederás a información de los mercados de capitales que pocas personas tienen posibilidad de conocer. Sobre todo te guiaremos en el camino de obtener tu independencia económica y que logres cambiar tu vida a lo que siempre has soñado.</p>
        <p>Te enseñaremos uso básico de IQOption, estrategias, y análisis técnico. Vamos a apreder a utilizar las señales con todo lo cursado para que seas un trader verdaderamente rentable.</p>
        <ul className="actions">
            <li><Link to="/app/billing" className="button">Subscribite</Link></li>
        </ul>
    </div>
</div>
</section>