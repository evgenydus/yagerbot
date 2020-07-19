import React from 'react'
import { observer } from 'mobx-react'
import { Link } from '@reach/router'
import Button from './Button'

const LinkButton = ({ to, ...buttonProps }) => (
  <Link to={to}>
    <Button {...buttonProps} />
  </Link>
)

export default observer(LinkButton)
