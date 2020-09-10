import React from 'react'
import { observer } from 'mobx-react'
import ReactModal from 'react-modal'
import { css } from '@emotion/core'

import Destroy from '../ActionIcons/Destroy'

const cIcon = 'flex h-4 items-center justify-center w-4'

ReactModal.setAppElement('#root')
ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, .5)'

const Modal = ({ children, isOpen, onClose }) => (
  <ReactModal
    className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 max-w-sm top-1/2 transform w-11/12 bg-white rounded p-4"
    isOpen={isOpen}
    onRequestClose={onClose}
  >
    <div
      className="absolute"
      css={css`
        right: 10px;
        top: 10px;
      `}
    >
      <Destroy className={cIcon} onClick={onClose} />
    </div>
    {children}
  </ReactModal>
)

export default observer(Modal)
