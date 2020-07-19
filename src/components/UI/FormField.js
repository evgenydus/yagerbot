import React from 'react'
import { observer } from 'mobx-react'

const FormField = ({ children, className, label }) => (
  <div className={className}>
    <div className="font-semibold mb-1 text-gray-500 text-xs">{label}</div>
    {children}
  </div>
)

export default observer(FormField)
