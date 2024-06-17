import React from 'react';
import '../../App.css'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer display="flex">
            <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
                <img src="src/assets/Images/Znak.jpg" className='footfoto' />

                <p className='footp'>
                    <b>Kontakty</b>
                    <br />
                    Tel.: +420 725 901 442
                    <br />
                    Mobil starostka :  +420 721 542 590
                    <br />
                    E-mail: oujarpice@seznam.cz
                    <br />
                    Otevírací doba: Po - Pá 8:00 - 16:00
                    <br />
                    Adresa: Jarpice 123, 273 72
                    <br />
                </p>

                <p className='footp2'>
                    <b>Základní informace</b>
                    <br />
                    Název obce: Jarpice
                    <br />
                    Kraj: Středočesky kraj
                    <br />
                    Okres: Kladno 
                    <br />
                    PSČ: 273 72
                    <br />
                    Rozloha: Přibližně 6,44 km²
                    <br />
                </p>

                <p className='footp3'>
                    <b>Menu</b>
                    <br />
                    <Link to="/">Hlavní stránka</Link>
                    <br />
                    <Link to="/aktuality">Aktuality a události</Link>
                    <br />
                    <Link to="/akce">Akce</Link> 
                    <br />
                    <Link to="/historie">Historie obce</Link>
                    <br />
                    <Link to="/fotogalerie">Fotogalerie</Link>
                    <br />
                </p>
            </Box>
        </footer>
    );
}

