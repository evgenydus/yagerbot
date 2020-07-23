import React from 'react'
import classnames from 'classnames'
import { observer } from 'mobx-react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cIcon = 'flex h-4 items-center justify-center w-4'

const ActionIcons = ({ item }) => (
  <div
    className="absolute flex group-hover:visible invisible items-center justify-end"
    css={css`
      right: 5px;
      top: 5px;
    `}
  >
    <div className={classnames(cIcon, 'link mr-1 text-xs')} onClick={item.edit}>
      <FontAwesomeIcon icon={['far', 'pencil-alt']} />
    </div>
    <div className={classnames(cIcon, 'link-alert')} onClick={item.destroy}>
      <FontAwesomeIcon icon={['far', 'times']} />
    </div>
  </div>
)

export default observer(ActionIcons)
