import React from 'react'

const Button = ({name, bg , color, style, bgh, hc}) => {
  return (
    <div>
        <button className={`text-uppercase bg-[${bg}] hover:bg-[${bgh}]  px-4 py-3 rounded-md text-md font-semibold text-[${color}] hover:text-[${hc}] ${style}`}>{name}</button>
    </div>
  )
}

export default Button