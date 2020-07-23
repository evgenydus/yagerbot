import React from 'react'
import { observer } from 'mobx-react'

import Button from '../UI/Button'
import GroupForm from './GroupForm'

const ManageGroup = ({ groupsStore }) => {
  if (groupsStore.groupToEdit)
    return <GroupForm key="edit-group" group={groupsStore.groupToEdit} groupsStore={groupsStore} />

  if (!groupsStore.isGroupCreation)
    return <Button onClick={groupsStore.toggleGroupCreation}>Новая группа</Button>

  return <GroupForm key="create-group" groupsStore={groupsStore} />
}

export default observer(ManageGroup)
