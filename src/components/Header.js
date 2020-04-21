import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
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
        )
    }
}

export default Header
