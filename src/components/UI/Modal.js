import React from 'react'
import { observer } from 'mobx-react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')
ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, .5)'

const Modal = ({ children, isOpen, close }) => (
  <ReactModal
    className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 max-w-sm top-1/2 transform w-11/12"
    isOpen={isOpen}
    onRequestClose={close}
  >
    {children}
  </ReactModal>
)

export default observer(Modal)
