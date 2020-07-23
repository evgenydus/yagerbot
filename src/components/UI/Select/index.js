import React from 'react'
import { observer } from 'mobx-react'
import ReactSelect from 'react-select'
import selectStyles from './styles'

const Select = ({ styles = selectStyles, ...props }) => {
  return <ReactSelect styles={styles} {...props} />
}

export default observer(Select)
