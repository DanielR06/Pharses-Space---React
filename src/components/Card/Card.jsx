import React from 'react'
import './Card.css'
const Card = ({phrase}) => {
  return (
    <div className='card'>
      <div className="container__card">
        <p>{phrase.phrase}</p>
      </div>
    </div>
  )
}

export default Card
