import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://api.whatsapp.com/send?phone=5493516277599&text=Hola%20estoy%20interesado%20en%20saber%20m%C3%A1s%20sobre%20M%C3%A1xima%20Se%C3%B1ales%20Binarias" className="icon alt fa-whatsapp"><span className="label">Whatsapp</span></a></li>
                    <li><a href="#" className="icon alt fa-telegram"><span className="label">Telegram</span></a></li>
                    <li><a href="#" className="icon alt fa-youtube"><span className="label">Youtube</span></a></li>
                    <li><a href="https://www.instagram.com/maximasenalesbinarias" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://www.facebook.com/Maxima-Se%C3%B1ales-Binarias-100909861502722/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Máxima Señales Binarias</li><li>Design: Carlos & Tom</li>
                </ul>
            </section>
        )
    }
}

export default Footer
