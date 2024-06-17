import React from 'react'
import Imagegrid from '../../Components/Imagegrid/Imagegrid'
import Box from '@mui/material/Box';

export default function Fotogalerie() {
  return (
    <>
      <h2 text-align="center" justify-content="center" display="flex" className='h2home'>Galerie</h2>
      <h3>Rozloučení s prázdninami</h3>
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center" width='100%'>
        <Imagegrid className='fotky' />
                </Box>
    </>
  )
}
