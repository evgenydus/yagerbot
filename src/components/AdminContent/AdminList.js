import React from 'react'
import { css } from '@emotion/core'
import { observer } from 'mobx-react'
import CardWrapper from '../CardWrapper'

const AdminList = ({ admins }) => (
  <div className="grid gap-4 grid-cols-4">
    {admins.map(admin => (
      <CardWrapper key={admin.id} className="relative">
        <div
          className="absolute flex leading-none right-0 top-0"
          css={css`
            right: 5px;
            top: 5px;
          `}
        >
          <div
            className="cursor-pointer hover:bg-gray-300 mr-1 opacity-75 rounded"
            css={css`
              transform: rotate(90deg);
            `}
          >
            &#9998;
          </div>
          <div
            className="cursor-pointer hover:bg-red-300 opacity-75 rounded"
            onClick={admin.destroy}
          >
            ✖
          </div>
        </div>
        <div className="mb-1 text-sm">{admin.username}</div>
        <div className="text-xs text-gray-500">{`Создан: ${admin.createdAt}`}</div>
      </CardWrapper>
    ))}
  </div>
)

export default observer(AdminList)
