import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from '../../UI/Select'

// TODO: control attachments from formStore

const Attachment = () => {
  const [attachmentName, setAttachmentName] = useState('')

  const handleAttachmentChange = ({ target: { value } }) => {
    setAttachmentName(value)
  }

  return (
    <div className="flex">
      <div className="flex flex-1 flex-col p-2 shadow text-sm">
        <label className="link-underline mb-2 truncate" htmlFor="attachment">
          {attachmentName || 'Выбрать файл'}
        </label>
        <input
          className="hidden"
          id="attachment"
          name="attachment"
          onChange={handleAttachmentChange}
          type="file"
        />
        <Select isDisabled={!attachmentName} placeholder="Тип файла" />
      </div>
      <div className="flex flex-col items-center justify-center pl-2">
        <FontAwesomeIcon className="link-alert my-1" icon={['far', 'times']} />
        <FontAwesomeIcon className="link my-1" icon={['far', 'file-plus']} />
      </div>
    </div>
  )
}

export default observer(Attachment)
