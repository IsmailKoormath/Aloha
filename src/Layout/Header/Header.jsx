import React, { useState } from 'react'
import logo from '../../assest/Aloha.svg'
import menu from '../../assest/menu_Icon.svg'
import cross from '../../assest/close.svg'
import classes from './Header.module.css'
const Header = () => {
    const [show, setShow] = useState(false)
    return (
        <div className={classes.Header}>
            {/* <div className={classes.header_left}> */}
            <img src={logo} alt="logo" />
            <div className={`${classes.header_right} ${show && classes.menus}`}>
                <img className={classes.crossIcon} onClick={() => setShow(false)} src={cross} alt='close' />
                <ul>
                    <li>Home</li>
                    <li>Surfing</li>
                    <li>Hula</li>
                    <li>Vulcano</li>
                </ul>
                {/* </div> */}
                <button className={classes.booking_btn}>Book a trip</button>
            </div>
            <img onClick={() => setShow(true)} className={classes.menu} src={menu} alt="menu" />
        </div>
    )
}

export default Header