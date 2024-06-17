import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';



export default function Header() {
    return (
            <header>
                <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
                <br />
                <h1>Jarpice</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Hlavní stránka</Link></li>
                        <li><Link to="/aktuality">Turistika</Link></li>
                        <li><Link to="/akce">Akce</Link></li>
                        <li><Link to="/historie">Historie obce</Link></li>
                        <li><Link to="/fotogalerie">Fotogalerie</Link></li>
                    </ul>
                </nav>                
            </Box>

            </header>
    );
}

