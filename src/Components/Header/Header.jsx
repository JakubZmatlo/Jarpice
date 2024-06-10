import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
            <header>
                <img src="src/assets/Images/Znak.jpg"/>
                <br />
                <h1>Jarpice</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Hlavní stránka</Link></li>
                        <li><Link to="/aktuality">Aktuality a události</Link></li>
                        <li><Link to="/akce">Akce</Link></li>
                        <li><Link to="/historie">Historie obce</Link></li>
                        <li><Link to="/fotogalerie">Fotogalerie</Link></li>
                    </ul>
                </nav>
            </header>
    );
}

