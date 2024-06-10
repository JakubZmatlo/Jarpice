import React from 'react';
import '../../App.css'
import Box from '@mui/material/Box';



export default function Footer() {
    return (
        <footer display="flex">
            <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
                <img src="src/assets/Images/Znak.jpg" className='footfoto' />

                <p className='footp'>
                    Kontakty:
                    <br />
                    Tel.: +420 721 542 590
                    <br />
                    Mobil starostka :  +420 721 542 590
                    <br />
                    E-mail: oujarpice@seznam.cz
                    <br />
                </p>

            </Box>
        </footer>
    );
}

