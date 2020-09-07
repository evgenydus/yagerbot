import React from 'react'
import { observer } from 'mobx-react'

import Button from '../UI/Button'
import CardWrapper from '../CardWrapper'
import GroupForm from './GroupForm'
import Modal from '../UI/Modal'

const ManageGroup = ({ groupsStore }) => {
  const form = groupsStore.groupToEdit ? (
    <GroupForm key="edit-group" group={groupsStore.groupToEdit} groupsStore={groupsStore} />
  ) : (
    <GroupForm key="create-group" groupsStore={groupsStore} />
  )

  return (
    <>
      <Button onClick={groupsStore.formModal.openModal}>Новая группа</Button>
      <Modal close={groupsStore.cancelEdit} isOpen={groupsStore.formModal.isOpen}>
        <CardWrapper className="flex max-w-sm">{form}</CardWrapper>
      </Modal>
    </>
  )
}

export default observer(ManageGroup)
