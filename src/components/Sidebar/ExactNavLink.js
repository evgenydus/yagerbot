import React from 'react'
import { observer } from 'mobx-react'
import { Link, useMatch } from '@reach/router'
import classnames from 'classnames'

const ExactNavLink = ({ icon, label, ...props }) => {
  const match = useMatch(props.to)

  return (
    <Link
      className={classnames('flex group items-center my-2 py-1', match ? 'text-primary' : 'link')}
      {...props}
    >
      <div className={classnames('mr-1', { 'group-hover:text-primary text-gray-600': !match })}>
        {icon || '[ICN]'}
      </div>
      {label}
    </Link>
  )
}

export default observer(ExactNavLink)
