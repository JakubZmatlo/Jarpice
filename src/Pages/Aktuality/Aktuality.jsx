import React from 'react';
import Footer from '../../Components/Footer/Footer'
import '../../App.css'
import { Link } from 'react-router-dom';

export default function Aktuality() {
  return (
    <>
      <div className='historydiv'>
        <h2 className='h2aktual'><Link to="">Očkování psů 21.5.2024</Link></h2>
        <h2 className='h2aktual'><Link to="">VTE Jarpice</Link></h2>
        <h2 className='h2aktual'><Link to="">1.12. OÚ uzavřen</Link></h2>
        <h2 className='h2aktual'><Link to="">Helloweenská stezka</Link></h2>
        <h2 className='h2aktual'><Link to="">Drakiáda</Link></h2>
        <h2 className='h2aktual'><Link to="">Odstávka 15.9.2023</Link></h2>
        <h2 className='h2aktual'><Link to="">Ve dnech 7. a 14. 9. 2023 Jarpice bez el. energie</Link></h2>
        <h2 className='h2aktual'><Link to="">Projekt: Jarpice-kanalizace a ČOV</Link></h2>
      </div>
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
