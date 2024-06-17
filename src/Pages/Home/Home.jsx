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
        <Header/>
        <img src="src/assets/Images/Mesto.jpg" alt="" className='mestoimg'/>
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
            <iframe 
            frameBorder="0" 
            height="563" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17138.011119578816!2d14.083740797792055!3d50.31841844271062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bcd8b4b883fc9%3A0x400af0f66152590!2sJarpice!5e0!3m2!1scs!2scz!4v1443681050795" 
            width="1500"
            className='map'
            >
            </iframe>
            <br />
             <br />
            <div>
            <Footer />
            </div>
            
        </>
    );
}

