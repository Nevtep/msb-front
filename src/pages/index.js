import React, { useRef } from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'

import testimonio1 from '../assets/images/testimonio1.png';
import testimonio2 from '../assets/images/testimonio2.png';
import testimonio3 from '../assets/images/testimonio3.png';

const Homepage = () => {
    const siteTitle = "Máxima Señales Binarias";
    const msbRef = useRef(null);
    const academiaRef = useRef(null);
    const senalesRef = useRef(null);
    const inversoresRef = useRef(null);
    const testimoniosRef = useRef(null);
    return (
        <Layout
            msbRef={msbRef}
            academiaRef={academiaRef}
            senalesRef={senalesRef}
            inversoresRef={inversoresRef}
            testimoniosRef={testimoniosRef}
        >
            <Helmet title={siteTitle} />

            <section id="msb" className="main gradient-section" ref={msbRef}>
                <div className="grid-wrapper">
                    <div className="col-6">
                        <header className="major">
                            <h2>Máxima Señales Binarias</h2>
                        </header>
                        <p>MSB es una empresa de trading que a llegado a todo Latinoamérica y al mundo, liderado por traders profesionales, rentables y consistentes.  Chistopher Alexis Beas y Nicolás Lescano son conocidos traders del mundo de opciones binarias y CEOs de MSB, Se desarrollan en la educación y el crecimiento personal de los integrantes de MSB, garantizando aprendizaje y resultados consistentes.</p>
                    </div>
                    <div className="col-6">
                        <span className="image fit"><img src={pic01} alt="" /></span>
                    </div>
                </div>
            </section>

            <section id="academia" className="main academia" ref={academiaRef}>
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
                            <li><a href="#" className="button">Inscríbete</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="senales" className="main gradient-section" ref={senalesRef}>
                <div className="grid-wrapper">
                    <div className="col-12">
                        <header className="major">
                            <h2>Señales Binarias</h2>
                        </header>
                        <h3>Más de cincuenta señales diarias</h3>
                        <p>Diariamente obtendrás señales de ingreso al mercado de opciones binarias, exclusiva información que facilitara tu operatoria. También tendrás accesos a video llamadas para responder dudas y facilitar el camino al éxito y a una nueva forma de vida.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Subscríbete</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="inversores" className="main inversores" ref={inversoresRef}>
                <div className="grid-wrapper">
                    <div className="col-6">
                        <header className="major">
                            <h2>Inversores</h2>
                        </header>
                        <p>En escazas ocasiones permitimos a un cupo limitado de personas, acceder a invertir con nosotros. Los elegidos podrán acceder a importante rentabilidad mensual gracias a la ayuda de la inversión directa de nuestros Master Traders.  Puedes inscribirte y nos comunicaremos en el momento que se abra el acceso a la inversiones.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Conviértete en Inversor</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <span className="image fit"><img src={pic01} alt="" /></span>
                    </div>
                </div>
            </section>

            <section id="testimonios" className="main gradient-section" ref={testimoniosRef}>
                <div className="grid-wrapper">
                    <div className="col-12">
                        <header className="major">
                            <h2>Testimonios</h2>
                        </header>
                    </div>

                    <div className="col-4">
                        <span className="image frame"><img src={testimonio1} alt="" /></span>
                        <h3>Juan</h3>
                        <p>Hoy día las señales están excelentes.<br />¡Gracias Alexis!</p>
                    </div>
                    <div className="col-4">
                        <span className="image frame"><img src={testimonio2} alt="" /></span>
                        <h3>Iván Ezequiel Rojas</h3>
                        <p>Siempre se termina con ganancia con las señales.<br /> ¡¡¡Gracias Gracias!!!</p>
                    </div>
                    <div className="col-4">
                        <span className="image frame"><img src={testimonio3} alt="" /></span>
                        <h3>Eliu Alberto</h3>
                        <p>Cerramos en profits.<br />Gracias por todo</p>

                    </div>

                </div>
            </section>

            {/* <section id="four" className="main style2 special">
                <div className="container">
                    <header className="major">
                        <h2>Ipsum feugiat consequat?</h2>
                    </header>
                    <p>Sed lacus nascetur ac ante amet sapien.</p>
                    <ul className="actions uniform">
                        <li><a href="#" className="button special">Sign Up</a></li>
                        <li><a href="#" className="button">Learn More</a></li>
                    </ul>
                </div>
            </section> */}
        </Layout>
    );
}

export default Homepage;