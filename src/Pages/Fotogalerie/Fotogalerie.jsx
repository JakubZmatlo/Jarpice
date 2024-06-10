import React from 'react'
import Header from '../../Components/Header/Header';
import Imagegrid from '../../Components/Imagegrid/Imagegrid'

export default function Fotogalerie() {
  return (
    <>
        <Header />
      <h2 text-align="center" justify-content="center" display="flex" className='h2home'>Galerie</h2>
      <h3>Rozloučení s prázdninami</h3>
      <Imagegrid />
    </>
  )
}
