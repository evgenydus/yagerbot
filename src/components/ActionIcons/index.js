import React from 'react'
import { observer } from 'mobx-react'
import { css } from '@emotion/core'

import Edit from './Edit'
import Destroy from './Destroy'

const cIcon = 'flex h-4 items-center justify-center w-4'

const ActionIcons = ({ item }) => (
  <div
    className="absolute flex group-hover:visible invisible items-center justify-end"
    css={css`
      right: 5px;
      top: 5px;
    `}
  >
    <Edit className={cIcon} onClick={item.edit} />
    {item.destroy && <Destroy className={cIcon} onClick={item.destroy} />}
  </div>
)

export default observer(ActionIcons)
