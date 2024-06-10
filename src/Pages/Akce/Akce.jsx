import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'
import Box from '@mui/material/Box';
import Card1 from '../../Components/Cards/Akcecards/Card1'
import Card2 from '../../Components/Cards/Akcecards/Card2'
import Card3 from '../../Components/Cards/Akcecards/Card3'
import Card4 from '../../Components/Cards/Akcecards/Card4'
import Card5 from '../../Components/Cards/Akcecards/Card5'
import Card6 from '../../Components/Cards/Akcecards/Card6'
import Card7 from '../../Components/Cards/Akcecards/Card7'
import Card8 from '../../Components/Cards/Akcecards/Card8'
import Card9 from '../../Components/Cards/Akcecards/Card9'
import '../../App.css'

export default function Akce() {
    return (
        <>
            <Header display="flex" />
            <div>
                <h2 text-align="center" justify-content="center" display="flex" className='h2home'>Akce v obci</h2>
                <img className='ples' src="src/assets/Images/Ples.jpg" alt="" justify-content="center"/>
            </div>
            <br />
            <div className='homdiv'>
                <Box sx={{ minWidth: 275 }} display="flex" >
                    <Card1 />
                </Box>
                <br />
                <Box sx={{ minWidth: 275 }} display="flex" >
                    <Card2 />
                </Box>
                <br />
                <Box sx={{ minWidth: 275 }} display="flex" >
                    <Card3 />
                </Box>
                <br />
                <Box sx={{ minWidth: 275 }} display="flex" >
                    <Card4 />
                </Box>
                <br />
                <Box sx={{ minWidth: 275 }} display="flex" >
                    <Card5 />
                </Box>
                <br />
                <Box sx={{ minWidth: 275 }} display="flex" >
                    <Card6 />
                </Box>
                <br />
                <Box sx={{ minWidth: 275 }} display="flex" >
                    <Card7 />
                </Box>
                <br />
                <Box sx={{ minWidth: 275 }} display="flex" >
                    <Card8 />
                </Box>
                <br />
                <Box sx={{ minWidth: 275 }} display="flex" >
                    <Card9 />
                </Box>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
            <Footer />
            </div>
            
        </>
    );
}

