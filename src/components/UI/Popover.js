import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/translucent.css'
import classnames from 'classnames'

const Popover = ({ content, children, className }) => (
  <Tippy content={content} interactive theme="translucent">
    <div className={classnames(className, 'inline-block')}>{children}</div>
  </Tippy>
)

export default Popover
