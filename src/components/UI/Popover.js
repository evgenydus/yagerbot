import React from 'react'
import Tippy from '@tippyjs/react'

import 'tippy.js/animations/shift-away-extreme.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

const Popover = ({
  animation = 'shift-away-extreme',
  children,
  content,
  theme = 'default',
  trigger = 'click',
  ...props
}) => {
  if (!content) return children

  return (
    <Tippy
      animation={animation}
      content={content}
      interactive
      theme={theme}
      trigger={trigger}
      {...props}
    >
      {children}
    </Tippy>
  )
}

export default Popover
