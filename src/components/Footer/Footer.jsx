import React from 'react'
import planet from '../../assets/planet.svg'
import './Footer.css'
const Footer = ({phrase}) => {
  return (
    <div className='Footer'>
      <div className="content">
        <div className='author'>
          <p>Fuente: {phrase.author}</p>
        </div>
        <img src={planet} alt="" className='planet'/>
      </div>
    </div>
  )
}

export default Footer
