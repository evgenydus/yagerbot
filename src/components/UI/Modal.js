import React from 'react'
import { observer } from 'mobx-react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

const Modal = ({ children, modalsStore, onClose }) => (
  <ReactModal isOpen={modalsStore.isOpen} onRequestClose={onClose}>
    {children}
  </ReactModal>
)

export default observer(Modal)
