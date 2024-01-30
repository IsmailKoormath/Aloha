import React from "react";
import classes from "./HighlightCard.module.css";
import arrow from "../../assest/backround_arrow.svg";

export const HighlightCard = ({ image, title, subtitle, key }) => {
    return (
        <div className={classes.highlightCard} key={key}>
            <img src={image} alt={title} className={classes.cardPic} />
            <div className={classes.text_container}>
                <h2 className={classes.heading}>{title}</h2>
                <p className={classes.para}>{subtitle}</p>
                <img src={arrow} alt="Arrow" className={classes.arrow} />
            </div>
        </div>
    );
};