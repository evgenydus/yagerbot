import React from 'react'
import { observer } from 'mobx-react'
import ReactSelect from 'react-select'

const Select = props => {
  return (
    <ReactSelect {...props} />
  )
}

export default observer(Select)
