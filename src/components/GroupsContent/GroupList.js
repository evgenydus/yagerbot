import React from 'react'
import { css } from '@emotion/core'
import { observer } from 'mobx-react'
import CardWrapper from '../CardWrapper'

const GroupList = ({ groups }) => (
  <div className="grid gap-4 grid-cols-4">
    {groups.map(group => (
      <CardWrapper key={group.id} className="flex relative">
        <div
          className="absolute cursor-pointer hover:bg-red-300 leading-none opacity-75 right-0 rounded top-0"
          css={css`
            right: 5px;
            top: 5px;
          `}
          onClick={group.destroy}
        >
          ✖
        </div>
        <div
          className="h-10 mr-4 rounded-full w-10"
          css={css`
            background-color: ${group.color};
          `}
        />
        <div>
          <div className="mb-1 text-sm">{group.name}</div>
          <div className="text-xs text-gray-500">{`Участников: ${group.usersCount}`}</div>
        </div>
      </CardWrapper>
    ))}
  </div>
)

export default observer(GroupList)
