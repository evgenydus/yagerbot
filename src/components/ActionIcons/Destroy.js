import React from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Destroy = ({ className, onClick }) => (
  <div className={classnames(className, 'link-alert')} onClick={onClick}>
    <FontAwesomeIcon icon={['far', 'times']} />
  </div>
)

export default Destroy
