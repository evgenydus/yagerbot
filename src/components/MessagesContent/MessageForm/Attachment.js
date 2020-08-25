import React from 'react'
import { observer } from 'mobx-react'

import Select from '../../UI/Select'

const Attachment = ({ attachment }) => {
  const handleAttachmentChange = ({ target: { files } }) => {
    attachment.setSelectedFile(files[0])
    attachment.messageFormStore.updateAttachmentsList()
  }

  const handleAttachmentRemove = () => {
    attachment.destroy()
  }

  const defaultOption = attachment.messageFormStore.typeOptions.find(
    option => option.label === 'Аудио',
  )

  return (
    <div className="flex last:mb-0 mb-2">
      <div className="flex flex-1 flex-col max-w-full p-2 shadow text-sm">
        <label className="link-underline truncate overflow-hidden" htmlFor={attachment.id}>
          {attachment.selectedFile?.name || 'Выбрать файл'}
        </label>
        <input
          className="hidden"
          files={[attachment.selectedFile]}
          id={attachment.id}
          name="attachment"
          onChange={handleAttachmentChange}
          type="file"
        />
        {attachment.selectedFile && (
          <>
            <Select
              className="mt-4"
              defaultValue={defaultOption}
              options={attachment.messageFormStore.typeOptions}
              placeholder="Тип файла"
            />
            {attachment.messageFormStore.attachments.length > 1 && (
              <button
                className="link-alert mt-2 m-auto text-red-500 w-20"
                onClick={handleAttachmentRemove}
                type="button"
              >
                Удалить
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default observer(Attachment)
