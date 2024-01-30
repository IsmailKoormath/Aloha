import React from 'react'
import classes from './Footer.module.css'
import logo from '../../assest/white_logo.png'
const Footer = () => {
    return (
        <div className={classes.footer} >
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Footer