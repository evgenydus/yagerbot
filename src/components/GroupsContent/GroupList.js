import React from 'react'
import { observer } from 'mobx-react'
import GroupCard from './GroupCard'

const GroupList = ({ groups }) => (
  <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
    {groups.map(group => (
      <GroupCard key={group.id} group={group} />
    ))}
  </div>
)

export default observer(GroupList)
