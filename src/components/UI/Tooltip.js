import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/animations/shift-away-extreme.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/translucent.css'

const Tooltip = ({ content, children, ...props }) => {
  if (!content) return children

  return (
    <Tippy animation="shift-away-extreme" content={content} theme="translucent" {...props}>
      <div className="inline-block">{children}</div>
    </Tippy>
  )
}

export default Tooltip
