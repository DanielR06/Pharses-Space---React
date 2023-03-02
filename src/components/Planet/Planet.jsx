import React from 'react'
import planet from '../../assets/planet.svg'
import './Planet.css'
const Planet = ({phrase}) => {
  return (
    <div className='Planet'>
      <div className='content'>
        <p>Fuente: {phrase.author}</p>
      </div>
      <img src={planet} alt="" className='background'/>
    </div>
  )
}

export default Planet
