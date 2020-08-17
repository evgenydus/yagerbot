import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Select from '../../UI/Select'

// TODO: control attachments from formStore

const Attachment = () => {
  const [attachmentName, setAttachmentName] = useState('')

  const handleAttachmentChange = ({ target: { value } }) => {
    setAttachmentName(value)
  }

  return (
    <div className="flex last:mb-0 mb-2">
      <div className="flex flex-1 flex-col overflow-hidden p-2 shadow text-sm">
        <label className="link-underline truncate" htmlFor="attachment">
          {attachmentName || 'Выбрать файл'}
        </label>
        <input
          className="hidden"
          id="attachment"
          name="attachment"
          onChange={handleAttachmentChange}
          type="file"
        />
        {attachmentName && (
          <>
            <Select className="mt-4" placeholder="Тип файла" />
            <button className="link-alert mt-2 m-auto text-red-500 w-20" type="button">Удалить</button>
          </>
        )}
      </div>
    </div>
  )
}

export default observer(Attachment)
