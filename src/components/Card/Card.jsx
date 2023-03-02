import React from 'react'
import './Card.css'
const Card = ({phrase}) => {
  return (
    <div className='card__info'>
      <p>{phrase.phrase}</p>
    </div>
  )
}

export default Card
