import React from 'react'
import { observer } from 'mobx-react'
import Attachment from './Attachment'

const AttachmentList = ({ formStore }) => (
  <div>
    {formStore.attachments.map(attachment => (
      <Attachment key={attachment.id} attachment={attachment} formStore={formStore} />
    ))}
  </div>
)

export default observer(AttachmentList)
