import React from 'react'
import { observer } from 'mobx-react'

import ActionIcons from '../UI/ActionIcons'
import CardWrapper from '../CardWrapper'

const AdminCard = ({ admin }) => (
  <CardWrapper className="flex group relative" isActive={admin.isActive}>
    {!admin.isEditInProgress && <ActionIcons item={admin} />}
    <div className="overflow-hidden">
      <div className="mb-1 text-sm truncate">{admin.username}</div>
      <div className="text-xs text-gray-500">{`Создан: ${admin.createdAt}`}</div>
    </div>
  </CardWrapper>
)

export default observer(AdminCard)
