import React from 'react'
import classnames from 'classnames'

const Button = ({ children, className, ...props }) => (
  <button className={classnames('font-semibold px-4 py-2 rounded', className)} {...props}>
    {children}
  </button>
)

export default Button
