import React from 'react'
import { observer } from 'mobx-react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

const Modal = ({ children, isOpen, close }) => (
  <ReactModal isOpen={isOpen} onRequestClose={close}>
    {children}
  </ReactModal>
)

export default observer(Modal)
