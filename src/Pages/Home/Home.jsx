import React from 'react'
import Header from '../../Layout/Header/Header'
import classes from './Home.module.css'
import Highlights from './Component/Highlights/Highlights'
import Categories from './Component/Categories/Categories'
import TravelGuid from './Component/TravelGuid/TravelGuid'
import Footer from '../../Layout/Footer/Footer'
const Home = () => {
    return (
        <div className={classes.home_page}>
            <section className={classes.hero_section}>
                <Header />
                <h1 className={classes.hero_Text}>Welcome<br />
                    to Hawaii</h1>
            </section>
            <Highlights />
            <div className={classes.Categories_Guid}>
                <Categories />
                <TravelGuid />
            </div>
            <Footer />
        </div>
    )
}

export default Home