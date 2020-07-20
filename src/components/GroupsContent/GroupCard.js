import React from 'react'
import { observer } from 'mobx-react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardWrapper from '../CardWrapper'

const cIconRemove =
  'absolute flex group-hover:visible h-4 items-center invisible justify-center link-alert right-0 rounded top-0 w-4'

const GroupCard = ({ group }) => (
  <CardWrapper className="flex group relative">
    <div
      className={cIconRemove}
      css={css`
        right: 5px;
        top: 5px;
      `}
      onClick={group.destroy}
    >
      <FontAwesomeIcon icon={['far', 'times']} />
    </div>
    <div
      className="flex flex-shrink-0 h-10 items-center justify-center mr-4 rounded-full text-white w-10"
      css={css`
        background-color: ${group.color};
      `}
    >
      <FontAwesomeIcon icon={['far', 'ball-pile']} />
    </div>
    <div className="overflow-hidden">
      <div className="mb-1 text-sm truncate">{group.name}</div>
      <div className="text-xs text-gray-500">{`Участников: ${group.usersCount}`}</div>
    </div>
  </CardWrapper>
)

export default observer(GroupCard)
