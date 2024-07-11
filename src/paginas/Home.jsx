import React from 'react'
import Navbar from '../componentes/Navbar'
import DarkVariantExample from '../componentes/DarkVariantExample'
import PiePag from '../componentes/PiePag'
// importo los componentes necesarios para mi pagina principal



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
