import React from 'react'

const Button = ({ children, classList }) => (
  <button className={`font-bold px-4 py-2 rounded text-white ${classList}`}>{children}</button>
)

export default Button
