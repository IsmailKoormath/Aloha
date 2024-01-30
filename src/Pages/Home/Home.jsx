import React from 'react'
import Header from '../../Layout/Header/Header'
import classes from './Home.module.css'
import Highlights from './Component/Highlights/Highlights'
const Home = () => {
    return (
        <div className={classes.home_page}>
            <section className={classes.hero_section}>
                <Header />
                <h1 className={classes.hero_Text}>Welcome<br />
                    to Hawaii</h1>
            </section>
            <Highlights />

        </div>
    )
}

export default Home