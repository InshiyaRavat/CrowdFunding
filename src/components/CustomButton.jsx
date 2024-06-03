import React from 'react'
import "../styles/Home.css"

const CustomButton = ({btnType , title , handleClick , styles}) => {
  return (
    <button
        type={btnType}
        className={`custom-buttom ${styles}`}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton