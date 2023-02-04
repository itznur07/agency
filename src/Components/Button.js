import React from 'react'

const Button = ({name, bg , color}) => {
  return (
    <div>
        <button className={`text-uppercase bg-[${bg}] px-4 py-3 rounded-md text-md font-semibold text-[${color}]`}>{name}</button>
    </div>
  )
}

export default Button