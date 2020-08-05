import React from 'react'
import { css } from '@emotion/core'
import { observer } from 'mobx-react'
import { GithubPicker } from 'react-color'
import classnames from 'classnames'
import Popover from './Popover'

const ColorPicker = ({ onChange, value }) => {
  const handleChange = ({ hex }) => {
    if (!onChange) return
    onChange(hex)
  }

  return (
    <div>
      <Popover
        arrow={false}
        className="bg-transparent"
        content={<GithubPicker onChange={handleChange} triangle="hide" width="187px" />}
        offset={[0, 5]}
      >
        <div
          className={classnames('cursor-pointer h-8 input-text w-8 hover:border-primary')}
          css={css`
            background: ${value};
          `}
        />
      </Popover>
    </div>
  )
}

export default observer(ColorPicker)
