import React from 'react'
import buttonSvg from '../../assets/boton.svg'
import './Button.css'
const Button = ({changeAll}) => {

  return (
    <div>
      <button className='button' onClick={changeAll}>
        <img src={buttonSvg} alt="" />
      </button>
    </div>
  )
}

export default Button
