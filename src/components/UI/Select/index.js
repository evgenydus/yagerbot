import React from 'react'
import { observer } from 'mobx-react'
import ReactSelect from 'react-select'
import selectStyles from './styles'

const noOptionMessage = () => 'Пусто'

const Select = ({ styles = selectStyles, ...props }) => (
  <ReactSelect noOptionsMessage={noOptionMessage} styles={styles} {...props} />
)

export default observer(Select)
