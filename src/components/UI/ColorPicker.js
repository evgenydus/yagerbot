import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { GithubPicker } from 'react-color'
import classnames from 'classnames'

const ColorPicker = ({ onChange, value }) => {
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!isOpen)

  const handleChange = ({ hex }) => {
    toggleOpen()
    if (!onChange) return
    onChange(hex)
  }

  return (
    <div className="relative">
      <div
        className={classnames('cursor-pointer h-8 input-text w-8', {
          'border-primary hover:border-primary': isOpen,
        })}
        onClick={toggleOpen}
        style={{ backgroundColor: value }}
      />
      {isOpen && (
        <div className="absolute z-50" style={{ top: '2.5rem' }}>
          <GithubPicker onChange={handleChange} />
        </div>
      )}
    </div>
  )
}

export default observer(ColorPicker)
