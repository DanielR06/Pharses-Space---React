import React from 'react'
import './Card.css'
const Card = ({phrase}) => {
  return (
    <div className='card'>
      <p>{phrase.phrase}</p>
    </div>
  )
}

export default Card
