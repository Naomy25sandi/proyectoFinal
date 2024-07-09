import React from 'react'
import Navbar from '../componentes/Navbar'
import Card from '../componentes/Card'
import SobreNosotros from './SobreNosotros'
import Contacto from '../componentes/Contacto'
import DarkVariantExample from '../componentes/DarkVariantExample'


const Home = () => {
    
    return (
        <main className='cont-home'>
             <Navbar/>
            <DarkVariantExample/> 
          
        </main>
    )
}

export default Home
