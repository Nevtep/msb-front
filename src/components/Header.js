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
                <h1>Un mundo de inversión en tus manos</h1>
                <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                <ul className="actions">
                    <li><a href="#msb" className="button scrolly">Empezar</a></li>
                </ul>
            </div>
        </section>
    </React.Fragment>)
}

export default Header
