import React, { useRef } from 'react'
import { Nav } from './Nav'

const Header = ({ msbRef, academiaRef, senalesRef, inversoresRef, testimoniosRef, contactoRef, }) => {
    const headerRef = useRef(null);
    return (<React.Fragment>
        <Nav
            headerRef={headerRef}
            msbRef={msbRef}
            academiaRef={academiaRef}
            senalesRef={senalesRef}
            inversoresRef={inversoresRef}
            testimoniosRef={testimoniosRef}
            contactoRef={contactoRef}
        />
        <section id="header" ref={headerRef}>
            <div className="inner">
                <span className="logo brand"></span>
                <h1>Líder en el mundo de opciones binarias</h1>
                <p>Descubre nuestros productos y obtén increíbles resultados diarios</p>
                <ul className="actions">
                    <li><a href="#msb" className="button scrolly">Empezar</a></li>
                </ul>
            </div>
        </section>
    </React.Fragment>)
}

export default Header
