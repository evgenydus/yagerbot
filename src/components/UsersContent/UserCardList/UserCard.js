import React from 'react'
import { observer } from 'mobx-react'
import { css } from '@emotion/core'

import ActionIcons from '../../ActionIcons'
import CardWrapper from '../../CardWrapper'
import Tooltip from '../../UI/Tooltip'

const UserCard = ({ user }) => (
  <CardWrapper className="group relative" isActive={user.isActive}>
    {!user.isEditInProgress && <ActionIcons item={user} />}
    <div className="text-sm">{user.label}</div>
    <div className="text-gray-500 text-xs">@{user.username}</div>
    <div className="flex items-center mt-1">
      <div className="mr-2 text-xs text-gray-600">
        {user.groups.length ? 'Группы:' : 'Без группы'}
      </div>
      {user.groups.map(group => (
        <Tooltip key={group.id} content={group.name}>
          <div
            className="flex-shrink-0 h-3 mr-2 rounded-full w-3"
            css={css`
              background-color: ${group.color};
            `}
          />
        </Tooltip>
      ))}
    </div>
  </CardWrapper>
)

export default observer(UserCard)
