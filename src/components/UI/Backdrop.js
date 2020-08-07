import React from 'react'
import { observer } from 'mobx-react'

const Backdrop = ({ clicked, isVisible }) =>
  isVisible && (
    <div
      className="bg-black bg-opacity-50 fixed h-full left-0 top-0 w-full z-40"
      onClick={clicked}
    />
  )

export default observer(Backdrop)
