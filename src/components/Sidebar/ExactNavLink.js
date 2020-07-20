import React from 'react'
import { observer } from 'mobx-react'
import { Link, useMatch } from '@reach/router'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExactNavLink = ({ icon, label, ...props }) => {
  const match = useMatch(props.to)

  return (
    <Link
      className={classnames('flex group items-center my-2 py-1', match ? 'text-primary' : 'link')}
      {...props}
    >
      <div
        className={classnames('mr-2 text-center w-6', {
          'group-hover:text-primary text-gray-600': !match,
        })}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      {label}
    </Link>
  )
}

export default observer(ExactNavLink)
