import React from 'react'
import { observer } from 'mobx-react'

const BurgerMenu = ({ toggle }) => (
  <div className="cursor-pointer flex flex-col h-5 justify-around md:hidden mr-4" onClick={toggle}>
    <div className="bg-gray-500 h-1 rounded w-6" />
    <div className="bg-gray-500 h-1 rounded w-6" />
    <div className="bg-gray-500 h-1 rounded w-6" />
  </div>
)

export default observer(BurgerMenu)
