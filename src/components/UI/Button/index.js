import React from 'react'
import classnames from 'classnames'

const Button = ({ children, className, ...props }) => (
  <button className={classnames('btn', className)} {...props}>
    {children}
  </button>
)

export default Button
