import React from 'react'
import classnames from 'classnames'
import { observer } from 'mobx-react'
import { css } from '@emotion/core'

const CardWrapper = ({ children, className, isActive, ...props }) => (
  <div
    className={classnames(
      'bg-white rounded shadow-xs p-4',
      className,
      isActive ? 'shadow-lg' : 'shadow-xs',
    )}
    css={css`
      transition: 200ms all ease;
      ${isActive ? 'transform: translateY(-3px) rotate(-0.5deg);' : ''}
    `}
    {...props}
  >
    {children}
  </div>
)

export default observer(CardWrapper)
