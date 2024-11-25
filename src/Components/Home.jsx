import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Aboutus from './Aboutus'
import Services from './Services'
import Teams from './Teams'
import FAQ from './FAQ'

function Home() {
    return (
        <div>
            <Header/>
            <Slider />
            <Aboutus />
            <Services />
            <Teams />
            <FAQ/>
        </div>
    )
}

export default Home