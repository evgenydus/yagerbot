import React from 'react'
import classnames from 'classnames'
import { observer } from 'mobx-react'

const CardWrapper = ({ children, className, ...props }) => (
  <div className={classnames('bg-white rounded shadow-xs p-4', className)} {...props}>
    {children}
  </div>
)

export default observer(CardWrapper)
