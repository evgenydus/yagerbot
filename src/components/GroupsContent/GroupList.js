import React from 'react'
import { observer } from 'mobx-react'
import GroupCard from './GroupCard'

const GroupList = ({ groups }) => (
  <div className="grid gap-4 grid-cols-4">
    {groups.map(group => (
      <GroupCard key={group.id} group={group} />
    ))}
  </div>
)

export default observer(GroupList)
