import React from 'react'
import classes from './Highlights.module.css'
import { HighlightCard } from '../../../../components/HighlightCard/HighlightCard'
import surfing from "../../../../assest/surfing.png"
import hula from "../../../../assest/hula.png"
import volcanoes from "../../../../assest/vulcanoes.png"

const Highlights = () => {
    const data = [
        {
            "title": "Surfing",
            "subtitle": "Best Hawaiian islands for surfing.",
            "image": surfing
        },
        {
            "title": "Hula",
            "subtitle": "Try it yourself.",
            "image": hula
        },
        {
            "title": "Volcanoes",
            "subtitle": "Volcanic conditions can change at any time.",
            "image": volcanoes
        }
    ]
    return (
        <div className={classes.highlights}>
            <div className={classes.container}>
            <h4 className={classes.heading}>Highlights</h4>
            <div className={classes.items}>
                {data.map((item, index) => (
                    <HighlightCard key={index} title={item.title} subtitle={item.subtitle} image={item.image} />
                ))}
            </div>
            </div>
        </div>
    )
}

export default Highlights
