import React, { useState } from 'react'
import { observer } from 'mobx-react'

import Select from '../../UI/Select'

// TODO: control attachments from formStore

const Attachment = ({ formStore }) => {
  const [attachmentName, setAttachmentName] = useState('')

  const handleAttachmentChange = ({ target: { value } }) => {
    setAttachmentName(value)
  }

  const defaultOption = formStore.typeOptions.find(option => option.label === 'Аудио')

  return (
    <div className="flex last:mb-0 mb-2">
      <div className="flex flex-1 flex-col max-w-full p-2 shadow text-sm">
        <label className="link-underline truncate overflow-hidden" htmlFor="attachment">
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
            <Select
              className="mt-4"
              defaultValue={defaultOption}
              options={formStore.typeOptions}
              placeholder="Тип файла"
            />
            <button className="link-alert mt-2 m-auto text-red-500 w-20" type="button">
              Удалить
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default observer(Attachment)
