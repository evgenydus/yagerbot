import React from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Edit = ({ className, onClick }) => (
  <div className={classnames(className, 'link mr-1 text-xs')} onClick={onClick}>
    <FontAwesomeIcon icon={['far', 'pencil-alt']} />
  </div>
)

export default Edit
