import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Aboutus from './Aboutus'
import Services from './Services'
import Teams from './Teams'
import FAQ from './FAQ'
import Usecallback from './Usecallback';

function Home() {
    return (
        <div>
            <Header/>
            <Slider />
            <Aboutus />
            <Services />
            <Teams />
            <FAQ/>
            <Usecallback/>
        </div>
    )
}

export default Home