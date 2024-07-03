import React from 'react'
import Navbar from '../componentes/Navbar'
import Card from '../componentes/Card'

const Home = () => {
    
    return (
        
        <div>
            <h1>Bienvenido</h1>
            <Navbar/>
            <Card img={"src/assets/logo.jpeg"} ></Card>
        </div>
    )
}

export default Home
