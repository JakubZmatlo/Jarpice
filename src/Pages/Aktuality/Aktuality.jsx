import React from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import '../../App.css'
import Box from '@mui/material/Box';
import Card1 from "../../Components/Cards/Aktualitycards/Card1"
import Card2 from "../../Components/Cards/Aktualitycards/Card2"
import Card3 from "../../Components/Cards/Aktualitycards/Card3"
import Card4 from "../../Components/Cards/Aktualitycards/Card4"
import Card5 from "../../Components/Cards/Aktualitycards/Card5"
import Card6 from "../../Components/Cards/Aktualitycards/Card6"
import Card7 from "../../Components/Cards/Aktualitycards/Card7"
import Card8 from "../../Components/Cards/Aktualitycards/Card8"



export default function Aktuality() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <h2 className='h2tour'>Turistika</h2>
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card1 />
      </Box>
      <br />
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card2 />
      </Box>
      <br />
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card3 />
      </Box>
      <br />
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card4 />
      </Box>
      <br />
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card5 />
      </Box>
      <br />
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card6 />
      </Box>
      <br />
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card7 />
      </Box>
      <br />
      <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
        <Card8 />
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
