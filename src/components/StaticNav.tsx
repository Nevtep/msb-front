import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';

export const Nav = () => {
    
    const [mobileOpen, setMobileOpen] = useState(false);

    const navRef = useRef(null);

    return (<>
    <div className={`sticky ${mobileOpen ? 'open' : ''}`}>
        <div className="nav" ref={navRef}>
            <Link
                className={`button nav-link`}
                to="/#Header"
            >
                INICIO
            </Link>
            <Link
                className={`button nav-link`}
                to="/#msb"
            >
                QUIENES SOMOS
            </Link>
            <Link
                className={`button nav-link`}
                to="/#academia"
            >
                ACADEMIA
            </Link>
            <Link
                className={`button nav-link`}
                to="/#senales"
            >
                SEÑALES
            </Link>
            <Link
                className={`button nav-link`}
                to="/#inversores"
            >
                INVERSORES
            </Link>
            <Link
                className={`button nav-link`}
                to="/#testimonios"
            >
                TESTIMONIOS
            </Link>
            <Link
                className={`button nav-link`}
                to="/#footer"
            >
                CONTACTO
            </Link>
        </div>
        <div className={`nav-mobile ${mobileOpen ? "open" : ""}`}>
            <span role="button" className={`nav-toggle fa ${mobileOpen ? 'fa-times' : 'fa-bars'}`} onClick={() => setMobileOpen(!mobileOpen)}></span>
        </div>
    </div>
    <div className={`nav-mobile-menu ${mobileOpen ? "open" : ""}`}>
        <Link
            className={`button nav-link`}
            to="/#Header"
        >
            INICIO
        </Link>
        <Link
            className={`button nav-link`}
            to="/#msb"
        >
            QUIENES SOMOS
        </Link>
        <Link
            className={`button nav-link`}
            to="/#academia"
        >
            ACADEMIA
        </Link>
        <Link
            className={`button nav-link`}
            to="/#senales"
        >
            SEÑALES
        </Link>
        <Link
            className={`button nav-link`}
            to="/#inversores"
        >
            INVERSORES
        </Link>
        <Link
            className={`button nav-link`}
            to="/#testimonios"
        >
            TESTIMONIOS
        </Link>
        <Link
            className={`button nav-link`}
            to="/#footer"
        >
            CONTACTO
        </Link>
    </div>
</>)
}