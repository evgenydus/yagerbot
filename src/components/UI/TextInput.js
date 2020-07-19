import React, { forwardRef } from 'react'
import { observer } from 'mobx-react'
import classnames from 'classnames'

const TextInput = ({ type = 'text', className, ...props }, ref) => (
  <input
    ref={ref}
    className={classnames('input-text input-text-sm', className)}
    type={type}
    {...props}
  />
)

export default observer(forwardRef(TextInput))
