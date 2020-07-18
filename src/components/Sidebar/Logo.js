import React from 'react'
import { observer } from 'mobx-react'

const Logo = () => (
  <div className="border-b flex h-16 items-center px-4">
    Yager Group <div className="font-semibold ml-1 text-primary">Bot</div>
  </div>
)

export default observer(Logo)
