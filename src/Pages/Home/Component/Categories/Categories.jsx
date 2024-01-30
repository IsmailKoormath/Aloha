import React from 'react'
import CategoryCard from '../../../../components/CategoryCard/CategoryCard'
import classes from './Categories.module.css'

const Categories = () => {
    const categories = ['Adventure', 'Culinary', 'Eco - tourism', 'Family', 'Sport']
    return (
        <div className={classes.categories_section}>
            <h4 className={classes.category_head}>Categories</h4>
            {categories.map((item) => (
                <CategoryCard text={item} />

            ))}
        </div>
    )
}

export default Categories