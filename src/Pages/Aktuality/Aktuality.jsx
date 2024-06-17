import React from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import '../../App.css'
import Box from '@mui/material/Box';
import Card1 from "../../Components/Cards/Aktualitycards/Card1"
import Card2 from "../../Components/Cards/Aktualitycards/Card2"
import Card3 from "../../Components/Cards/Aktualitycards/Card3"

export default function Aktuality() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card1 />
      </Box>
      <br />
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card1 />
      </Box>
      <br />
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card1 />
      </Box>
      <br />
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card1 />
      </Box>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </>
  )
}
