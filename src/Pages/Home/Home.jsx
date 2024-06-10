import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'
import Box from '@mui/material/Box';
import Card1 from "../../Components/Cards/Homecards/Card1"
import Card2 from "../../Components/Cards/Homecards/Card2"
import '../../App.css'

export default function Home() {
    return (
        <>
            <Header display="flex" />
            <div className='homdiv'>
                <h2 text-align="center" justify-content="center" display="flex" className='h2home'>O nás</h2>
                <p className='homep'>Obec Jarpice se nachází v okrese Kladno, kraj Středočeský. <br />
                    Rozkládá se asi dvacet jedna kilometrů severně od Kladna a jedenáct kilometrů severně od města Slaný. <br />
                    V roce 2014 zde žilo 272 obyvatel. <br />
                    První písemná zmínka o obci pochází z roku 1318. <br />
                    Narodil se tu Václav Staněk (4. září 1804 – 19. března 1871 Praha) lékař, vysokoškolský pedagog a politik, během revolučního roku 1848 poslanec Říšského sněmu.
                </p>
            </div>
            <br />
            <div className='homdiv'>
                <h2 className='h2home'>Aktuality</h2>
                <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
                    <Card1 />
                    <Card2 />
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

