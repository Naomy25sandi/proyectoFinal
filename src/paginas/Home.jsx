import React from 'react'
import Navbar from '../componentes/Navbar'
import Card from '../componentes/Card'
import SobreNosotros from './SobreNosotros'
import Contacto from '../componentes/Contacto'
import DarkVariantExample from '../componentes/DarkVariantExample'
import PiePag from '../componentes/PiePag'




const Home = () => {
    
    return (
        <main className='cont-home'>
             <Navbar/>
            <DarkVariantExample/> 
            < PiePag/>
        </main>
    )
}

export default Home
