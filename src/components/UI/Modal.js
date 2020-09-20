import React from 'react'
import { observer } from 'mobx-react'
import ReactModal from 'react-modal'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

ReactModal.setAppElement('#root')
ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, .5)'

const Modal = ({ children, isOpen, onClose }) => (
  <ReactModal
    className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 max-w-sm top-1/2 transform w-11/12 bg-white rounded p-4"
    isOpen={isOpen}
    onRequestClose={onClose}
  >
    <div
      className="absolute flex h-4 items-center justify-center link w-4"
      css={css`
        right: 10px;
        top: 10px;
      `}
      onClick={onClose}
    >
      <FontAwesomeIcon icon={['far', 'times']} />
    </div>
    {children}
  </ReactModal>
)

export default observer(Modal)
