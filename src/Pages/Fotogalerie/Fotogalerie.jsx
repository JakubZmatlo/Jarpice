import React from 'react'
import Imagegrid from '../../Components/Imagegrid/Imagegrid'
import Box from '@mui/material/Box';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function Fotogalerie() {
  return (
    <>
    <Header/>
    <br />
    <br />
    <br />
      <h2 text-align="center" justify-content="center" display="flex" className='h2home'>Galerie</h2>
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center" width='100%'>
        <Imagegrid className='fotky' />
                </Box>
                <Footer/>
    </>
  )
}
