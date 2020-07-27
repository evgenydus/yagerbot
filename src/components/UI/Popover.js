import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/animations/shift-away-extreme.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

const Popover = ({ content, children, ...props }) => {
  if (!content) return children

  return (
    <Tippy animation="shift-away-extreme" content={content} interactive trigger="click" {...props}>
      <div className="inline-block">{children}</div>
    </Tippy>
  )
}

export default Popover
