import React from 'react'
import classnames from 'classnames'

const classNameByMode = {
  gray: 'btn-gray',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
}

const Button = ({ children, className, mode = 'primary', type = 'button', ...props }) => (
  <button
    className={classnames('btn btn-sm', className, classNameByMode[mode])}
    type={type} // eslint-disable-line react/button-has-type
    {...props}
  >
    {children}
  </button>
)

export default Button
