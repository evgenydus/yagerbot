import React, { useState } from 'react'
import { observer } from 'mobx-react'

import Button from '../UI/Button'
import GroupForm from './GroupForm'

const CreateGroup = ({ groupsStore }) => {
  const [isCreation, setCreation] = useState(false)

  const toggleCreation = () => {
    setCreation(!isCreation)
  }

  if (groupsStore.groupToEdit)
    return (
      <GroupForm
        group={groupsStore.groupToEdit}
        groupsStore={groupsStore}
        toggleForm={toggleCreation}
      />
    )

  if (!isCreation) return <Button onClick={toggleCreation}>Новая группа</Button>

  return <GroupForm groupsStore={groupsStore} toggleForm={toggleCreation} />
}

export default observer(CreateGroup)
