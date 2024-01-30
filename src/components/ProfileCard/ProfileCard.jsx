import React from "react";
import classes from "./ProfileCard.module.css";
import profile from "../../assest/profile.png";

export const ProfileCard = () => {
    return (
        <div className={classes.profileCard}>
            <div className={classes.content}>
                <h2 className={classes.name}>Hadwin Malone</h2>
                <p className={classes.detail}>Guide since 2012</p>
                <button className={classes.contact_btn}>Contact</button>
            </div>
            <img src={profile} alt="Profile" className={classes.profile} />
        </div>
    );
};
export default ProfileCard