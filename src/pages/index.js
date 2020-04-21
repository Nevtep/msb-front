import React, { useRef } from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

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
                        <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
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
                        <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                        <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
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
                        <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                    </div>
                </div>
            </section>

            <section id="inversores" className="main inversores" ref={inversoresRef}>
                <div className="grid-wrapper">
                    <div className="col-6">
                        <header className="major">
                            <h2>Inversores</h2>
                        </header>
                        <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
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
                        <span className="image fit"><img src={pic02} alt="" /></span>
                        <h3>Magna feugiat lorem</h3>
                        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <span className="image fit"><img src={pic03} alt="" /></span>
                        <h3>Magna feugiat lorem</h3>
                        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <span className="image fit"><img src={pic04} alt="" /></span>
                        <h3>Magna feugiat lorem</h3>
                        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
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