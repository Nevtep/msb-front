import React, { useEffect, useRef, useState } from 'react';

export const Nav = ({headerRef, msbRef, academiaRef, senalesRef, inversoresRef, testimoniosRef, contactoRef}) => {
    const getDimensions = ele => {
        const { height } = ele.getBoundingClientRect();
        const offsetTop = ele.offsetTop;
        const offsetBottom = offsetTop + height;
      
        return {
          height,
          offsetTop,
          offsetBottom,
        };
    };
    
    const scrollTo = ele => {
        ele.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    };


  const [visibleSection, setVisibleSection] = useState();

    const navRef = useRef(null);
    
    useEffect(() => {
        const handleScroll = () => {
            const { height: headerHeight } = getDimensions(navRef.current);
            const scrollPosition = window.scrollY + headerHeight;
            const atBottom = (window.innerHeight + scrollPosition + 12) >= document.body.offsetHeight;
            console.log('data: %o', {
                atBottom,
                compareHeight: window.innerHeight + scrollPosition,
                documentHeight: document.body.offsetHeight,
            })

            if(atBottom) {
                setVisibleSection('Contacto');
            } else {
                const selected = sectionRefs.find(({ section, ref }) => {
                    const ele = ref.current;
                    if (ele) {
                        const { offsetBottom, offsetTop } = getDimensions(ele);
                        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
                    }
                });
    
                if (selected && selected.section !== visibleSection) {
                    setVisibleSection(selected.section);
                } else if (!selected && visibleSection) {
                    setVisibleSection(undefined);
                }
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, [visibleSection]);
    const sectionRefs = [
        { section: "Header", ref: headerRef },
        { section: "MSB", ref: msbRef },
        { section: "Academia", ref: academiaRef },
        { section: "Senales", ref: senalesRef },
        { section: "Inversores", ref: inversoresRef },
        { section: "Testimonios", ref: testimoniosRef },
        { section: "Contacto", ref: contactoRef },
    ];
    
    return (<div className="sticky">
        <div className="nav" ref={navRef}>
            <button
                type="button"
                className={`nav_link ${visibleSection === "Header" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(headerRef.current);
                }}
            >
                INICIO
            </button>
            <button
                type="button"
                className={`nav_link ${visibleSection === "MSB" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(msbRef.current);
                }}
            >
                QUIENES SOMOS
            </button>
            <button
                type="button"
                className={`nav_link ${visibleSection === "Academia" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(academiaRef.current);
                }}
            >
                ACADEMIA
            </button>
            <button
                type="button"
                className={`nav_link ${visibleSection === "Senales" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(senalesRef.current);
                }}
            >
                SEÑALES
            </button>
            <button
                type="button"
                className={`nav_link ${visibleSection === "Inversores" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(inversoresRef.current);
                }}
            >
                INVERSORES
            </button>
            <button
                type="button"
                className={`nav_link ${visibleSection === "Testimonios" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(testimoniosRef.current);
                }}
            >
                TESTIMONIOS
            </button>
            <button
                type="button"
                className={`nav_link ${visibleSection === "Contacto" ? "selected" : ""}`}
                onClick={() => {
                    scrollTo(contactoRef.current);
                }}
            >
                CONTACTO
            </button>
        </div>
    </div>)
}