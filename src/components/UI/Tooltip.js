import React from 'react'
import Tippy from '@tippyjs/react'

import 'tippy.js/animations/shift-away-extreme.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/translucent.css'

const Tooltip = ({
  animation = 'shift-away-extreme',
  children,
  content,
  theme = 'default',
  ...props
}) => {
  if (!content) return children

  return (
    <Tippy animation={animation} content={content} theme={theme} {...props}>
      {children}
    </Tippy>
  )
}

export default Tooltip
