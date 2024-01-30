import React from 'react'
import classes from './TravelGuid.module.css'
import ProfileCard from '../../../../components/ProfileCard/ProfileCard'
const TravelGuid = () => {
  return (
    <div className={classes.Guid_section}>
      <h4>TravelGuid</h4>
      <ProfileCard/>
    </div>
  )
}

export default TravelGuid