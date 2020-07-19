import React from 'react'
import classnames from 'classnames'

const Button = ({ children, className, type = 'button', ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <button className={classnames('btn btn-sm', className)} type={type} {...props}>
    {children}
  </button>
)

export default Button
