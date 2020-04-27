import React from 'react'

const Footer = React.forwardRef((props, ref) => (
            <section id="footer" ref={ref}>
                <ul className="icons">
                    <li><a href="mailto:maximasebinarias@gmail.com" className="icon alt fa-2x fa-envelope"><span className="label">Gmail</span></a></li>
                    <li><a href="https://t.me/ALEXIS_CEO_MSB" className="icon alt fa-2x fa-telegram"><span className="label">Telegram</span></a></li>
                    <li><a href="#" className="icon alt fa-2x fa-youtube-play"><span className="label">Youtube</span></a></li>
                    <li><a href="https://www.instagram.com/maximasenalesbinarias" className="icon alt fa-2x fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://www.facebook.com/Maxima-Se%C3%B1ales-Binarias-100909861502722/" className="icon alt fa-2x fa-facebook"><span className="label">Facebook</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Máxima Señales Binarias</li><li>Design: Carlos & Tom</li>
                </ul>
            </section>
        )
)

export default Footer
