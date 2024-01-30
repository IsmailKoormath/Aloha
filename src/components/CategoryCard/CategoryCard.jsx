import React from 'react'
import classes from './CategoryCard.module.css'
import arrow from '../../assest/arrow.svg'
const CategoryCard = ({ text }) => {
  return (
    <div className={classes.categroycard}>
      <span>{text}</span>
      <img src={arrow} alt="arrow" />
    </div>
  )
}

export default CategoryCard