import React from 'react'
import logo from '../../assest/Aloha.svg'
import menu from '../../assest/menu_Icon.svg'
import classes from './Header.module.css'
const Header = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.header_left}>
                <img src={logo} alt="logo" />
                <ul>
                    <li>Home</li>
                    <li>Surfing</li>
                    <li>Hula</li>
                    <li>Vulcano</li>
                </ul>
            </div>
            <button className={classes.booking_btn}>Book a trip</button>
            <img className={classes.menu} src={menu} alt="menu" />
        </div>
    )
}

export default Header