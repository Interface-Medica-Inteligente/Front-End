import React from 'react'

import './styles.css'

const RecipeItem = ({ onClick, medicines, revenueDate }) => {
  return (
    <div className='recipe-item' onClick={onClick}>
      <p className='recipe-name'>Medicamento: {medicines}</p>
      <p className='recipe-date'>Data de emissão: {revenueDate}</p>
    </div>
  )
}

export default RecipeItem
