import React from 'react';

const NavMenu: React.FC = ({ children }) => (
    <div className="nav" ref={navRef}>
            <button
                type="button"
                className={`nav-link ${visibleSection === "Header" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(headerRef.current);
                }}
            >
                INICIO
            </button>
            <button
                type="button"
                className={`nav-link ${visibleSection === "MSB" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(msbRef.current);
                }}
            >
                QUIENES SOMOS
            </button>
            <button
                type="button"
                className={`nav-link ${visibleSection === "Academia" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(academiaRef.current);
                }}
            >
                ACADEMIA
            </button>
            <button
                type="button"
                className={`nav-link ${visibleSection === "Senales" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(senalesRef.current);
                }}
            >
                SEÑALES
            </button>
            <button
                type="button"
                className={`nav-link ${visibleSection === "Inversores" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(inversoresRef.current);
                }}
            >
                INVERSORES
            </button>
            <button
                type="button"
                className={`nav-link ${visibleSection === "Testimonios" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(testimoniosRef.current);
                }}
            >
                TESTIMONIOS
            </button>
            <button
                type="button"
                className={`nav-link ${visibleSection === "Contacto" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(contactoRef.current);
                }}
            >
                CONTACTO
            </button>
            {children}
        </div>
        <div className={`nav-mobile ${mobileOpen ? "open" : ""}`}>
            <span role="button" className={`nav-toggle fa ${mobileOpen ? 'fa-times' : 'fa-bars'}`} onClick={() => setMobileOpen(!mobileOpen)}></span>
        </div>
    </div>
)