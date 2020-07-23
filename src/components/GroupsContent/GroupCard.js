import React from 'react'
import { observer } from 'mobx-react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ActionIcons from '../ActionIcons'
import CardWrapper from '../CardWrapper'

const GroupCard = ({ group }) => (
  <CardWrapper className="flex group relative" isActive={group.isActive}>
    {!group.isEditInProgress && <ActionIcons item={group} />}
    <div
      className="flex flex-shrink-0 h-10 items-center justify-center mr-4 rounded-full text-white w-10"
      css={css`
        background-color: ${group.color};
      `}
    >
      <FontAwesomeIcon icon={['far', 'ball-pile']} />
    </div>
    <div className="overflow-hidden">
      <div className="mb-1 text-sm truncate">{group.name}</div>
      <div className="text-xs text-gray-500">{`Участников: ${group.usersCount}`}</div>
    </div>
  </CardWrapper>
)

export default observer(GroupCard)
