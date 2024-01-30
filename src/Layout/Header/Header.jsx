import React, { useState } from 'react'
import logo from '../../assest/Aloha.svg'
import menu from '../../assest/menu_Icon.svg'
import cross from '../../assest/close.svg'
import classes from './Header.module.css'
const Header = () => {
    const [show, setShow] = useState(false)
    if (show) {
        document.body.style.overflow = "hidden"
    }
    else {
        document.body.style.overflow = 'auto'
    }
    return (
        <div className={classes.Header}>
            <img src={logo} alt="logo" />
            <div className={`${classes.header_right} ${show && classes.menus}`}>
                <img className={classes.crossIcon} onClick={() => setShow(false)} src={cross} alt='close' />
                <ul>
                    <li>Home</li>
                    <li>Surfing</li>
                    <li>Hula</li>
                    <li>Vulcano</li>
                </ul>
                <button className={classes.booking_btn}>Book a trip</button>
            </div>
            <img onClick={() => setShow(true)} className={classes.menu} src={menu} alt="menu" />
        </div>
    )
}

export default Header