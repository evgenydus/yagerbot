import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/animations/shift-away-extreme.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import classnames from 'classnames'

const Popover = ({ children, className, content, isTransparent }) => (
  <Tippy
    animation="shift-away-extreme"
    arrow={false}
    className={classnames(isTransparent && 'bg-transparent')}
    content={content}
    interactive
    offset={[0, 5]}
    theme={!isTransparent && 'light'}
    trigger="click"
  >
    <div className={classnames(className, 'inline-block')}>{children}</div>
  </Tippy>
)

export default Popover
