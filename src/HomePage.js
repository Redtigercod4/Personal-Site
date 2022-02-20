import React from 'react'

import './HomePage.css'

import MainBackground from './Assets/Background.png'

const HomePage  = () => {
    return(
        <div className='main-background'>
            <img src={MainBackground} alt="HomePage-Background" width='100%' height='100%'/>
        </div>
    )
}

export default HomePage;