import React from 'react'
import { observer } from 'mobx-react'

import Button from '../UI/Button'
import GroupForm from './GroupForm'
import Modal from '../UI/Modal'

const ManageGroup = ({ groupsStore }) => {
  const { openModal, isOpen, closeModal } = groupsStore.formModal

  return (
    <>
      <Button className="xs:mx-auto" onClick={openModal}>Новая группа</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <GroupForm group={groupsStore.groupToEdit} groupsStore={groupsStore} />
      </Modal>
    </>
  )
}

export default observer(ManageGroup)
